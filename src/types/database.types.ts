export interface Profile {
  id: string
  email: string
  instagram?: string
  whatsapp?: string
  pontos: number
  nivel: number
  created_at: string
  updated_at: string
}

export interface Video {
  id: number
  titulo: string
  descricao?: string
  youtube_id: string
  ordem: number
  duracao?: number
  pontos_ao_completar: number
  modulo: string
  thumbnail_url?: string
  is_locked: boolean
  unlock_url?: string
  created_at: string
}

export interface ProgressoVideo {
  id: number
  user_id: string
  video_id: number
  completado: boolean
  tempo_assistido: number
  ultima_posicao: number
  completado_em?: string
  created_at: string
  updated_at: string
}

export interface Badge {
  id: number
  nome: string
  descricao: string
  icone: string
  condicao: string
  valor_condicao: number
  created_at: string
}

export interface UserBadge {
  id: number
  user_id: string
  badge_id: number
  conquistado_em: string
  badge?: Badge
}

export interface VideoWithProgress extends Video {
  progresso?: ProgressoVideo
}

export interface Quiz {
  id: number
  modulo: string
  aula_numero: number
  pergunta: string
  resposta_correta: string
  resposta_2: string
  resposta_3: string
  created_at: string
}

export interface QuizResposta {
  id: number
  user_id: string
  quiz_id: number
  resposta_escolhida: string
  correta: boolean
  respondido_em: string
}

