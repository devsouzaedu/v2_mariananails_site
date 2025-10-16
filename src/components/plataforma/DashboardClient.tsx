'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Profile, VideoWithProgress, UserBadge, Badge } from '@/types/database.types'
import VideoPlayer from './VideoPlayer'
import { Trophy, Star, Award, LogOut, Menu, X } from 'lucide-react'

interface DashboardClientProps {
  profile: Profile
  videos: VideoWithProgress[]
  userBadges: UserBadge[]
  allBadges: Badge[]
}

export default function DashboardClient({
  profile: initialProfile,
  videos: initialVideos,
  userBadges: initialUserBadges,
  allBadges,
}: DashboardClientProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoWithProgress | null>(null)
  const [profile, setProfile] = useState(initialProfile)
  const [videos, setVideos] = useState(initialVideos)
  const [userBadges, setUserBadges] = useState(initialUserBadges)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  // Agrupar vídeos por módulo
  const videosPorModulo = videos.reduce((acc, video) => {
    if (!acc[video.modulo]) {
      acc[video.modulo] = []
    }
    acc[video.modulo].push(video)
    return acc
  }, {} as Record<string, VideoWithProgress[]>)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/plataforma/login')
    router.refresh()
  }

  const videosCompletados = videos.filter(v => v.progresso?.completado).length
  const totalVideos = videos.length
  const progressoPercentual = Math.round((videosCompletados / totalVideos) * 100)

  // Calcular nível baseado em pontos
  const nivel = Math.floor(profile.pontos / 100) + 1

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                🦋 MARIPOSAS
              </h1>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-zinc-800 text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg">
                <Star className="text-yellow-500" size={18} />
                <span className="font-semibold text-white text-sm">{profile.pontos} pts</span>
              </div>
              <div className="flex items-center space-x-2 bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg">
                <Trophy className="text-purple-500" size={18} />
                <span className="font-semibold text-white text-sm">Nível {nivel}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-zinc-400 hover:text-white transition px-3 py-2 rounded-lg hover:bg-zinc-800"
              >
                <LogOut size={18} />
                <span className="text-sm">Sair</span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <div className="flex items-center justify-between bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={18} />
                  <span className="font-semibold text-white text-sm">{profile.pontos} pts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="text-purple-500" size={18} />
                  <span className="font-semibold text-white text-sm">Nível {nivel}</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 text-zinc-300 hover:text-white transition bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg"
              >
                <LogOut size={18} />
                <span className="text-sm">Sair</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 hover:border-zinc-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-xs md:text-sm font-medium">Progresso</p>
                <p className="text-2xl md:text-3xl font-bold text-white">{progressoPercentual}%</p>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">
                  {videosCompletados} de {totalVideos} aulas
                </p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <Award className="text-pink-500" size={24} />
              </div>
            </div>
            <div className="mt-4 w-full bg-zinc-800 rounded-full h-1.5 md:h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-1.5 md:h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressoPercentual}%` }}
              />
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 hover:border-zinc-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-xs md:text-sm font-medium">Badges Conquistadas</p>
                <p className="text-2xl md:text-3xl font-bold text-white">{userBadges.length}</p>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">de {allBadges.length} disponíveis</p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <Trophy className="text-yellow-500" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 hover:border-zinc-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-xs md:text-sm font-medium">Pontos Totais</p>
                <p className="text-2xl md:text-3xl font-bold text-white">{profile.pontos}</p>
                <p className="text-xs md:text-sm text-zinc-500 mt-1">Nível {nivel}</p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <Star className="text-purple-500" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        {userBadges.length > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <Trophy className="mr-2 text-yellow-500" size={24} />
              Suas Conquistas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
              {userBadges.map((ub) => (
                <div
                  key={ub.id}
                  className="flex flex-col items-center p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-yellow-500/50 hover:bg-zinc-800/80 transition cursor-pointer"
                  title={ub.badge?.descricao}
                >
                  <div className="text-3xl md:text-4xl mb-2">{ub.badge?.icone}</div>
                  <p className="text-xs text-center font-medium text-zinc-300 line-clamp-2">
                    {ub.badge?.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <VideoPlayer
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
            onVideoComplete={(videoId, pontos) => {
              // Atualizar pontos e vídeos
              setProfile(prev => ({ ...prev, pontos: prev.pontos + pontos }))
              setVideos(prev =>
                prev.map(v =>
                  v.id === videoId
                    ? { ...v, progresso: { ...v.progresso!, completado: true } }
                    : v
                )
              )
            }}
            userId={profile.id}
          />
        )}

        {/* Videos Section */}
        <div className="space-y-6 md:space-y-8">
          {Object.entries(videosPorModulo).map(([modulo, videosDoModulo]) => (
            <div key={modulo} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white px-1">{modulo}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {videosDoModulo.map((video) => {
                  const isCompleted = video.progresso?.completado || false
                  const thumbnail = `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`

                  return (
                    <div
                      key={video.id}
                      className="group cursor-pointer relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative aspect-video bg-zinc-800">
                        <img
                          src={thumbnail}
                          alt={video.titulo}
                          className="w-full h-full object-cover"
                        />
                        {isCompleted && (
                          <div className="absolute top-1.5 right-1.5 bg-green-500 text-white px-2 py-0.5 rounded text-[10px] md:text-xs font-semibold flex items-center">
                            ✓
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-pink-500 border-b-[6px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 md:p-3">
                        <h3 className="font-semibold text-white text-xs md:text-sm mb-1 line-clamp-2">
                          {video.titulo}
                        </h3>
                        <div className="flex items-center justify-between text-[10px] md:text-xs">
                          <span className="flex items-center text-zinc-400">
                            <Star className="mr-1 text-yellow-500" size={12} />
                            {video.pontos_ao_completar} pts
                          </span>
                          {video.progresso && !isCompleted && (
                            <span className="text-pink-500">Em progresso</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

