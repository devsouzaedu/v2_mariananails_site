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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                🦋 Mariposas
              </h1>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full">
                <Star className="text-yellow-500" size={20} />
                <span className="font-semibold text-gray-700">{profile.pontos} pts</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <Trophy className="text-purple-500" size={20} />
                <span className="font-semibold text-gray-700">Nível {nivel}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={20} />
                  <span className="font-semibold text-gray-700">{profile.pontos} pts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="text-purple-500" size={20} />
                  <span className="font-semibold text-gray-700">Nível {nivel}</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition bg-gray-100 px-4 py-2 rounded-lg"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Progresso</p>
                <p className="text-3xl font-bold text-gray-800">{progressoPercentual}%</p>
                <p className="text-sm text-gray-500 mt-1">
                  {videosCompletados} de {totalVideos} aulas
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                <Award className="text-pink-500" size={32} />
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressoPercentual}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Badges Conquistadas</p>
                <p className="text-3xl font-bold text-gray-800">{userBadges.length}</p>
                <p className="text-sm text-gray-500 mt-1">de {allBadges.length} disponíveis</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                <Trophy className="text-yellow-500" size={32} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pontos Totais</p>
                <p className="text-3xl font-bold text-gray-800">{profile.pontos}</p>
                <p className="text-sm text-gray-500 mt-1">Nível {nivel}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Star className="text-purple-500" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        {userBadges.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Trophy className="mr-2 text-yellow-500" size={28} />
              Suas Conquistas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {userBadges.map((ub) => (
                <div
                  key={ub.id}
                  className="flex flex-col items-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg hover:shadow-md transition"
                  title={ub.badge?.descricao}
                >
                  <div className="text-4xl mb-2">{ub.badge?.icone}</div>
                  <p className="text-xs text-center font-medium text-gray-700">
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
        <div className="space-y-8">
          {Object.entries(videosPorModulo).map(([modulo, videosDoModulo]) => (
            <div key={modulo} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{modulo}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {videosDoModulo.map((video) => {
                  const isCompleted = video.progresso?.completado || false
                  const thumbnail = `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`

                  return (
                    <div
                      key={video.id}
                      className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative aspect-video">
                        <img
                          src={thumbnail}
                          alt={video.titulo}
                          className="w-full h-full object-cover"
                        />
                        {isCompleted && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            ✓ Completo
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-500 border-b-8 border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                          {video.titulo}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Star className="mr-1 text-yellow-500" size={14} />
                            {video.pontos_ao_completar} pts
                          </span>
                          {video.progresso && !isCompleted && (
                            <span className="text-pink-500 text-xs">Em progresso</span>
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

