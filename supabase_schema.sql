-- Schema para a plataforma de ensino Mariposas

-- Tabela de perfis de usuários (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  instagram TEXT,
  whatsapp TEXT,
  pontos INTEGER DEFAULT 0,
  nivel INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Tabela de vídeos/aulas
CREATE TABLE IF NOT EXISTS public.videos (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  youtube_id TEXT NOT NULL,
  ordem INTEGER NOT NULL,
  duracao INTEGER, -- em segundos
  pontos_ao_completar INTEGER DEFAULT 10,
  modulo TEXT DEFAULT 'Curso Principal',
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Tabela de progresso dos usuários
CREATE TABLE IF NOT EXISTS public.progresso_videos (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  video_id INTEGER REFERENCES public.videos(id) ON DELETE CASCADE NOT NULL,
  completado BOOLEAN DEFAULT false,
  tempo_assistido INTEGER DEFAULT 0, -- em segundos
  ultima_posicao INTEGER DEFAULT 0, -- em segundos
  completado_em TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, video_id)
);

-- Tabela de badges/conquistas
CREATE TABLE IF NOT EXISTS public.badges (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT NOT NULL,
  icone TEXT NOT NULL,
  condicao TEXT NOT NULL, -- ex: 'videos_completos:5', 'pontos:100'
  valor_condicao INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Tabela de badges conquistadas pelos usuários
CREATE TABLE IF NOT EXISTS public.user_badges (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  badge_id INTEGER REFERENCES public.badges(id) ON DELETE CASCADE NOT NULL,
  conquistado_em TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, badge_id)
);

-- RLS (Row Level Security) Policies

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progresso_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Usuários podem ver seu próprio perfil"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem inserir seu próprio perfil"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Progresso policies
CREATE POLICY "Usuários podem ver seu próprio progresso"
  ON public.progresso_videos FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem inserir seu próprio progresso"
  ON public.progresso_videos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar seu próprio progresso"
  ON public.progresso_videos FOR UPDATE
  USING (auth.uid() = user_id);

-- User badges policies
CREATE POLICY "Usuários podem ver seus próprios badges"
  ON public.user_badges FOR SELECT
  USING (auth.uid() = user_id);

-- Videos e badges são públicos (leitura)
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Videos são públicos para leitura"
  ON public.videos FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Badges são públicos para leitura"
  ON public.badges FOR SELECT
  TO authenticated
  USING (true);

-- Função para criar perfil automaticamente ao registrar
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Inserir vídeos do YouTube
INSERT INTO public.videos (titulo, youtube_id, ordem, modulo, pontos_ao_completar) VALUES
('Aula 1 - Introdução', 'X5w74T9b9Gg', 1, 'Módulo Inicial', 10),
('Aula 2 - Fundamentos', 'SwN-_DQJSBM', 2, 'Módulo Inicial', 10),
('Aula 3 - Técnicas Básicas', 'TwIyZe_8Lnk', 3, 'Módulo Inicial', 10),
('Aula 4 - Materiais', 'MwYAdnyMe_k', 4, 'Módulo Básico', 15),
('Aula 5 - Preparação', 'PP4OCOAw3yg', 5, 'Módulo Básico', 15),
('Aula 6 - Aplicação', 'r_gyIruOrxo', 6, 'Módulo Básico', 15),
('Aula 7 - Acabamento', 's3waRf3zVj4', 7, 'Módulo Intermediário', 20),
('Aula 8 - Decorações Simples', 'SlCyoCM3ncc', 8, 'Módulo Intermediário', 20),
('Aula 9 - Técnicas Avançadas Parte 1', 'pGpM5bAJ7VQ', 9, 'Módulo Intermediário', 20),
('Aula 10 - Técnicas Avançadas Parte 2', 'zokSkzNY7qI', 10, 'Módulo Intermediário', 20),
('Aula 11 - Alongamento de Unhas', '_VpeLq72CS8', 11, 'Módulo Avançado', 25),
('Aula 12 - Blindagem', '2p23oy-Le0c', 12, 'Módulo Avançado', 25),
('Aula 13 - Unhas de Gel', '69PEoKBGPZU', 13, 'Módulo Avançado', 25),
('Aula 14 - Unhas de Fibra', 'Bsb2q277aAs', 14, 'Módulo Avançado', 25),
('Aula 15 - Design de Unhas', 'oawvim3bHOc', 15, 'Módulo Design', 30),
('Aula 16 - Nail Art Básica', 'Mow11SzaFA0', 16, 'Módulo Design', 30),
('Aula 17 - Nail Art Intermediária', 'thwBEKUTtMU', 17, 'Módulo Design', 30),
('Aula 18 - Nail Art Avançada', '1Uy848_C1is', 18, 'Módulo Design', 30),
('Aula 19 - Decorações Especiais', 'b_STeysmHKA', 19, 'Módulo Especialização', 35),
('Aula 20 - Técnicas de Relevo', 'yqnNVRHqXyA', 20, 'Módulo Especialização', 35),
('Aula 21 - Encapsulado', 'eThXcAKQlV4', 21, 'Módulo Especialização', 35),
('Aula 22 - Francesinha Perfeita', 'V7nDGukHz4o', 22, 'Módulo Profissional', 40),
('Aula 23 - Ombré e Degradê', 'YQIjtp_gnus', 23, 'Módulo Profissional', 40),
('Aula 24 - Manutenção e Remoção', 'sg5DB0E4UG0', 24, 'Módulo Profissional', 40),
('Aula 25 - Atendimento ao Cliente', 'I9MHbp2w02s', 25, 'Módulo Empreendedorismo', 45),
('Aula 26 - Precificação', 'AYSoRyxdZOg', 26, 'Módulo Empreendedorismo', 45),
('Aula 27 - Marketing para Manicures', 'pjvRMieXLF0', 27, 'Módulo Empreendedorismo', 45),
('Aula 28 - Gestão de Agenda', 'uoh6Noq0SFc', 28, 'Módulo Empreendedorismo', 45),
('Aula 29 - Fotografia de Unhas', 'EP_FAnkeePA', 29, 'Módulo Extra', 50),
('Aula 30 - Tendências e Inovações', '7DE9NKHlVuU', 30, 'Módulo Extra', 50);

-- Inserir badges
INSERT INTO public.badges (nome, descricao, icone, condicao, valor_condicao) VALUES
('Primeira Aula', 'Completou sua primeira aula!', '🎬', 'videos_completos', 1),
('Dedicada', 'Completou 5 aulas', '⭐', 'videos_completos', 5),
('Mariposa Iniciante', 'Completou 10 aulas', '🦋', 'videos_completos', 10),
('Mariposa Avançada', 'Completou 20 aulas', '💎', 'videos_completos', 20),
('Mariposa Master', 'Completou todas as 30 aulas!', '👑', 'videos_completos', 30),
('100 Pontos', 'Conquistou 100 pontos', '💯', 'pontos', 100),
('500 Pontos', 'Conquistou 500 pontos', '🌟', 'pontos', 500),
('1000 Pontos', 'Conquistou 1000 pontos', '🏆', 'pontos', 1000);

