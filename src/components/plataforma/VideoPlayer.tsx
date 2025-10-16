'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { VideoWithProgress } from '@/types/database.types'
import { X, CheckCircle, Star } from 'lucide-react'

interface VideoPlayerProps {
  video: VideoWithProgress
  onClose: () => void
  onVideoComplete: (videoId: number, pontos: number) => void
  userId: string
}

export default function VideoPlayer({
  video,
  onClose,
  onVideoComplete,
  userId,
}: VideoPlayerProps) {
  const [player, setPlayer] = useState<any>(null)
  const [completed, setCompleted] = useState(video.progresso?.completado || false)
  const [watchedPercentage, setWatchedPercentage] = useState(0)
  const [showCompletionMessage, setShowCompletionMessage] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Carregar API do YouTube
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Callback quando a API estiver pronta
    ;(window as any).onYouTubeIframeAPIReady = () => {
      const ytPlayer = new (window as any).YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: video.youtube_id,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
      setPlayer(ytPlayer)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [video.youtube_id])

  const onPlayerReady = (event: any) => {
    // Tentar continuar de onde parou
    if (video.progresso?.ultima_posicao && !video.progresso.completado) {
      event.target.seekTo(video.progresso.ultima_posicao)
    }
  }

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      // Iniciar tracking de progresso
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      intervalRef.current = setInterval(() => {
        trackProgress(event.target)
      }, 5000) // Atualizar a cada 5 segundos
    } else if (
      event.data === (window as any).YT.PlayerState.PAUSED ||
      event.data === (window as any).YT.PlayerState.ENDED
    ) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      trackProgress(event.target)

      if (event.data === (window as any).YT.PlayerState.ENDED) {
        handleVideoComplete()
      }
    }
  }

  const trackProgress = async (ytPlayer: any) => {
    try {
      const currentTime = ytPlayer.getCurrentTime()
      const duration = ytPlayer.getDuration()
      const percentage = (currentTime / duration) * 100

      setWatchedPercentage(percentage)

      // Salvar progresso no banco
      const supabase = createClient()
      await supabase
        .from('progresso_videos')
        .upsert(
          {
            user_id: userId,
            video_id: video.id,
            tempo_assistido: Math.floor(currentTime),
            ultima_posicao: Math.floor(currentTime),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'user_id,video_id',
          }
        )

      // Marcar como completo se assistiu mais de 90%
      if (percentage >= 90 && !completed) {
        handleVideoComplete()
      }
    } catch (error) {
      console.error('Erro ao salvar progresso:', error)
    }
  }

  const handleVideoComplete = async () => {
    if (completed) return

    try {
      const supabase = createClient()
      // Marcar vídeo como completo
      const { error: progressoError } = await supabase
        .from('progresso_videos')
        .upsert(
          {
            user_id: userId,
            video_id: video.id,
            completado: true,
            completado_em: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'user_id,video_id',
          }
        )

      if (progressoError) throw progressoError

      // Adicionar pontos ao perfil
      const { error: profileError } = await supabase.rpc('increment_pontos', {
        user_id: userId,
        pontos_add: video.pontos_ao_completar,
      })

      // Se a função RPC não existir, fazemos manualmente
      if (profileError) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('pontos')
          .eq('id', userId)
          .single()

        if (profile) {
          await supabase
            .from('profiles')
            .update({
              pontos: profile.pontos + video.pontos_ao_completar,
              updated_at: new Date().toISOString(),
            })
            .eq('id', userId)
        }
      }

      setCompleted(true)
      setShowCompletionMessage(true)
      onVideoComplete(video.id, video.pontos_ao_completar)

      // Verificar se conquistou novos badges
      await checkAndAwardBadges()

      setTimeout(() => {
        setShowCompletionMessage(false)
      }, 5000)
    } catch (error) {
      console.error('Erro ao completar vídeo:', error)
    }
  }

  const checkAndAwardBadges = async () => {
    try {
      const supabase = createClient()
      // Buscar quantos vídeos foram completados
      const { data: progressoData } = await supabase
        .from('progresso_videos')
        .select('id')
        .eq('user_id', userId)
        .eq('completado', true)

      const videosCompletos = progressoData?.length || 0

      // Buscar pontos atuais
      const { data: profile } = await supabase
        .from('profiles')
        .select('pontos')
        .eq('id', userId)
        .single()

      const pontosAtuais = profile?.pontos || 0

      // Buscar badges que o usuário pode ganhar mas ainda não tem
      const { data: allBadges } = await supabase.from('badges').select('*')

      const { data: userBadges } = await supabase
        .from('user_badges')
        .select('badge_id')
        .eq('user_id', userId)

      const userBadgeIds = new Set(userBadges?.map(ub => ub.badge_id) || [])

      // Verificar cada badge
      for (const badge of allBadges || []) {
        if (userBadgeIds.has(badge.id)) continue // Já tem este badge

        let shouldAward = false

        if (badge.condicao === 'videos_completos' && videosCompletos >= badge.valor_condicao) {
          shouldAward = true
        } else if (badge.condicao === 'pontos' && pontosAtuais >= badge.valor_condicao) {
          shouldAward = true
        }

        if (shouldAward) {
          await supabase.from('user_badges').insert({
            user_id: userId,
            badge_id: badge.id,
          })
        }
      }
    } catch (error) {
      console.error('Erro ao verificar badges:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{video.titulo}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative bg-black aspect-video">
          <div id="youtube-player" ref={playerRef}></div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-500" size={20} />
              <span className="text-gray-700 font-semibold">
                {video.pontos_ao_completar} pontos ao completar
              </span>
            </div>
            {completed && (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-semibold">Completo!</span>
              </div>
            )}
          </div>

          {video.descricao && (
            <div className="text-gray-600 mb-4">
              <p>{video.descricao}</p>
            </div>
          )}

          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progresso assistido</span>
              <span className="text-sm font-semibold text-gray-700">
                {Math.round(watchedPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${watchedPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Completion Message */}
      {showCompletionMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-bounce">
          <CheckCircle size={24} />
          <div>
            <p className="font-bold">Parabéns! 🎉</p>
            <p className="text-sm">Você ganhou {video.pontos_ao_completar} pontos!</p>
          </div>
        </div>
      )}
    </div>
  )
}

