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
    // Carregar API do YouTube se ainda não estiver carregada
    if (!(window as any).YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Callback quando a API estiver pronta
    const initPlayer = () => {
      if ((window as any).YT && (window as any).YT.Player) {
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
    }

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer()
    } else {
      ;(window as any).onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      // Limpar interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      // Destruir player
      if (player && typeof player.destroy === 'function') {
        player.destroy()
      }
    }
  }, [video.youtube_id])

  const onPlayerReady = (event: any) => {
    try {
      // Tentar continuar de onde parou
      if (video.progresso?.ultima_posicao && !video.progresso.completado) {
        event.target.seekTo(video.progresso.ultima_posicao)
      }
    } catch (error) {
      console.log('Player ready')
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
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-0 md:p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-none md:rounded-xl shadow-2xl w-full h-full md:max-w-6xl md:h-auto md:max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
          <h2 className="text-sm md:text-lg font-bold text-white truncate pr-4">{video.titulo}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full transition flex-shrink-0"
          >
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        {/* Player */}
        <div className="relative bg-black flex-1 md:flex-none md:aspect-video">
          <div id="youtube-player" ref={playerRef} className="w-full h-full"></div>
        </div>

        {/* Progress Bar - Agora abaixo do player */}
        <div className="px-4 py-3 md:py-4 bg-zinc-900 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm text-zinc-400">Progresso</span>
            <span className="text-xs md:text-sm font-semibold text-white">
              {Math.round(watchedPercentage)}%
            </span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 md:h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
              style={{ width: `${watchedPercentage}%` }}
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="px-4 py-3 md:p-5 bg-zinc-900">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-500" size={18} />
              <span className="text-zinc-300 font-semibold text-sm md:text-base">
                {video.pontos_ao_completar} pontos ao completar
              </span>
            </div>
            {completed && (
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle size={18} />
                <span className="font-semibold text-sm md:text-base">Completo!</span>
              </div>
            )}
          </div>

          {video.descricao && (
            <div className="text-zinc-400 mt-3 text-sm md:text-base">
              <p>{video.descricao}</p>
            </div>
          )}
        </div>
      </div>

      {/* Completion Message */}
      {showCompletionMessage && (
        <div className="fixed top-4 right-4 md:top-6 md:right-6 bg-green-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-2xl flex items-center space-x-3 animate-bounce z-[60] max-w-sm">
          <CheckCircle size={20} />
          <div>
            <p className="font-bold text-sm md:text-base">Parabéns! 🎉</p>
            <p className="text-xs md:text-sm">Você ganhou {video.pontos_ao_completar} pontos!</p>
          </div>
        </div>
      )}
    </div>
  )
}

