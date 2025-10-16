import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardClient from '@/components/plataforma/DashboardClient'
import { Profile, VideoWithProgress, UserBadge } from '@/types/database.types'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/plataforma/login')
  }

  // Buscar perfil do usuário
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Buscar todos os vídeos
  const { data: videos } = await supabase
    .from('videos')
    .select('*')
    .order('ordem', { ascending: true })

  // Buscar progresso do usuário
  const { data: progresso } = await supabase
    .from('progresso_videos')
    .select('*')
    .eq('user_id', user.id)

  // Buscar badges do usuário
  const { data: userBadges } = await supabase
    .from('user_badges')
    .select(`
      *,
      badge:badges(*)
    `)
    .eq('user_id', user.id)

  // Buscar todos os badges disponíveis
  const { data: allBadges } = await supabase
    .from('badges')
    .select('*')
    .order('valor_condicao', { ascending: true })

  // Combinar vídeos com progresso
  const videosWithProgress: VideoWithProgress[] = (videos || []).map(video => {
    const progressoVideo = progresso?.find(p => p.video_id === video.id)
    return {
      ...video,
      progresso: progressoVideo,
    }
  })

  return (
    <DashboardClient
      profile={profile as Profile}
      videos={videosWithProgress}
      userBadges={userBadges as UserBadge[]}
      allBadges={allBadges || []}
    />
  )
}

