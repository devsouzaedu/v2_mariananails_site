-- Schema atualizado para a plataforma de ensino Mariposas V2
-- Com sistema de quizzes e aulas travadas

-- ============================================
-- TABELAS PRINCIPAIS
-- ============================================

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

-- Tabela de vídeos/aulas (ATUALIZADA)
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
  is_locked BOOLEAN DEFAULT false, -- Nova coluna para aulas travadas
  unlock_url TEXT, -- URL para desbloquear (Kiwify)
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

-- NOVA: Tabela de quizzes
CREATE TABLE IF NOT EXISTS public.quizzes (
  id SERIAL PRIMARY KEY,
  modulo TEXT NOT NULL, -- 'Introdução' ou 'Módulo Inicial'
  aula_numero INTEGER NOT NULL, -- Aparece após qual aula (5, 10, 15, 20)
  pergunta TEXT NOT NULL,
  resposta_correta TEXT NOT NULL,
  resposta_2 TEXT NOT NULL,
  resposta_3 TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(modulo, aula_numero)
);

-- NOVA: Tabela de respostas dos usuários aos quizzes
CREATE TABLE IF NOT EXISTS public.quiz_respostas (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  quiz_id INTEGER REFERENCES public.quizzes(id) ON DELETE CASCADE NOT NULL,
  resposta_escolhida TEXT NOT NULL,
  correta BOOLEAN NOT NULL,
  respondido_em TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, quiz_id)
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progresso_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_respostas ENABLE ROW LEVEL SECURITY;

-- Profiles policies
DROP POLICY IF EXISTS "Usuários podem ver seu próprio perfil" ON public.profiles;
CREATE POLICY "Usuários podem ver seu próprio perfil"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Usuários podem atualizar seu próprio perfil" ON public.profiles;
CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Usuários podem inserir seu próprio perfil" ON public.profiles;
CREATE POLICY "Usuários podem inserir seu próprio perfil"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Progresso policies
DROP POLICY IF EXISTS "Usuários podem ver seu próprio progresso" ON public.progresso_videos;
CREATE POLICY "Usuários podem ver seu próprio progresso"
  ON public.progresso_videos FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Usuários podem inserir seu próprio progresso" ON public.progresso_videos;
CREATE POLICY "Usuários podem inserir seu próprio progresso"
  ON public.progresso_videos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Usuários podem atualizar seu próprio progresso" ON public.progresso_videos;
CREATE POLICY "Usuários podem atualizar seu próprio progresso"
  ON public.progresso_videos FOR UPDATE
  USING (auth.uid() = user_id);

-- User badges policies
DROP POLICY IF EXISTS "Usuários podem ver seus próprios badges" ON public.user_badges;
CREATE POLICY "Usuários podem ver seus próprios badges"
  ON public.user_badges FOR SELECT
  USING (auth.uid() = user_id);

-- Quiz respostas policies
DROP POLICY IF EXISTS "Usuários podem ver suas próprias respostas" ON public.quiz_respostas;
CREATE POLICY "Usuários podem ver suas próprias respostas"
  ON public.quiz_respostas FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Usuários podem inserir suas próprias respostas" ON public.quiz_respostas;
CREATE POLICY "Usuários podem inserir suas próprias respostas"
  ON public.quiz_respostas FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Videos, badges e quizzes são públicos (leitura)
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Videos são públicos para leitura" ON public.videos;
CREATE POLICY "Videos são públicos para leitura"
  ON public.videos FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Badges são públicos para leitura" ON public.badges;
CREATE POLICY "Badges são públicos para leitura"
  ON public.badges FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Quizzes são públicos para leitura" ON public.quizzes;
CREATE POLICY "Quizzes são públicos para leitura"
  ON public.quizzes FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- FUNÇÕES E TRIGGERS
-- ============================================

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

-- Função para incrementar pontos (mantida para compatibilidade)
CREATE OR REPLACE FUNCTION increment_pontos(user_id UUID, pontos_add INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET pontos = pontos + pontos_add,
      updated_at = NOW()
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- ATUALIZAR TABELA VIDEOS (Adicionar novas colunas)
-- ============================================

-- Adicionar colunas is_locked e unlock_url se não existirem
DO $$ 
BEGIN
  -- Adicionar coluna is_locked
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'videos' 
    AND column_name = 'is_locked'
  ) THEN
    ALTER TABLE public.videos ADD COLUMN is_locked BOOLEAN DEFAULT false;
  END IF;

  -- Adicionar coluna unlock_url
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'videos' 
    AND column_name = 'unlock_url'
  ) THEN
    ALTER TABLE public.videos ADD COLUMN unlock_url TEXT;
  END IF;
END $$;

-- ============================================
-- ÍNDICES (Criar antes dos INSERTs)
-- ============================================

-- Criar índice único na coluna ordem para permitir ON CONFLICT nos INSERTs
CREATE UNIQUE INDEX IF NOT EXISTS idx_videos_ordem_unique ON public.videos(ordem);

-- ============================================
-- DADOS INICIAIS - VÍDEOS
-- ============================================

-- Limpar vídeos existentes (cuidado em produção!)
-- DELETE FROM public.videos;

-- URL para desbloquear aulas travadas
-- https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092

-- ========== MÓDULO: INTRODUÇÃO (5 aulas) ==========
-- Limpar vídeos existentes para evitar duplicação (OPCIONAL - comente se quiser manter vídeos antigos)
DELETE FROM public.videos WHERE ordem BETWEEN 1 AND 25;

INSERT INTO public.videos (titulo, youtube_id, ordem, modulo, pontos_ao_completar, is_locked, unlock_url) VALUES
('Introdução - Aula 01', 'ie_6EGiJW9E', 1, 'Introdução', 10, false, NULL),
('O que é ser uma Nail Designer? - Aula 02', 'oBwOWFzO5J4', 2, 'Introdução', 10, false, NULL),
('Tipos de unha - Aula 03', '4L8tHvA-yGk', 3, 'Introdução', 10, false, NULL),
('O que é necessário para fazer um alongamento do zero - Aula 04', 'ekZms2NOKxc', 4, 'Introdução', 10, false, NULL),
('A sua jornada começa aqui - Aula 05', 'eMOmDTJXMFs', 5, 'Introdução', 10, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092')
ON CONFLICT (ordem) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  youtube_id = EXCLUDED.youtube_id,
  modulo = EXCLUDED.modulo,
  pontos_ao_completar = EXCLUDED.pontos_ao_completar,
  is_locked = EXCLUDED.is_locked,
  unlock_url = EXCLUDED.unlock_url;

-- ========== MÓDULO: MÓDULO INICIAL (20 aulas) ==========
INSERT INTO public.videos (titulo, youtube_id, ordem, modulo, pontos_ao_completar, is_locked, unlock_url) VALUES
('Lista de materiais part.1 - Aula 01', 'oawvim3bHOc', 6, 'Módulo Inicial', 15, false, NULL),
('Lista de materiais part.2 - Aula 02', 'Mow11SzaFA0', 7, 'Módulo Inicial', 15, false, NULL),
('Lista de Materiais part.3 - Aula 03', 'thwBEKUTtMU', 8, 'Módulo Inicial', 15, false, NULL),
('Anatomia das unhas - Aula 04', 'kFDoHmaZN0c', 9, 'Módulo Inicial', 15, false, NULL),
('Preparação das unhas naturais - Aula 05', 'uoh6Noq0SFc', 10, 'Módulo Inicial', 15, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092'),
('Preparação da fibra de vidro - Aula 06', 'eXVyDE8owc0', 11, 'Módulo Inicial', 15, false, NULL),
('Aplicação da fibra de vidro - Aula 07', 'X5w74T9b9Gg', 12, 'Módulo Inicial', 15, false, NULL),
('Corte da fibra nos formatos - Aula 08', 'MMNN_Ez4tFk', 13, 'Módulo Inicial', 15, false, NULL),
('Formato amendoado - Aula 09', 'SwN-_DQJSBM', 14, 'Módulo Inicial', 15, false, NULL),
('Formato Bailarina - Aula 10', 'TwIyZe_8Lnk', 15, 'Módulo Inicial', 15, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092'),
('Formato Quadrado - Aula 11', 'MwYAdnyMe_k', 16, 'Módulo Inicial', 15, false, NULL),
('Formato Stiletto - Aula 12', 'PP4OCOAw3yg', 17, 'Módulo Inicial', 15, false, NULL),
('Remoção segura do gel - Aula 13', 's3waRf3zVj4', 18, 'Módulo Inicial', 15, false, NULL),
('Esmaltação em gel - Aula 14', 'SlCyoCM3ncc', 19, 'Módulo Inicial', 15, false, NULL),
('Banho de gel - Aula 15', '1Uy848_C1is', 20, 'Módulo Inicial', 15, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092'),
('Lixamento Amendoado - Aula 16', 'yqnNVRHqXyA', 21, 'Módulo Inicial', 15, false, NULL),
('Manutenção de alongamento - Aula 17', 'YQIjtp_gnus', 22, 'Módulo Inicial', 15, false, NULL),
('Manutenção Quadrada - Aula 18', 'AYSoRyxdZOg', 23, 'Módulo Inicial', 15, false, NULL),
('Manutenção 15 dias Amendoada - Aula 19', 'pjvRMieXLF0', 24, 'Módulo Inicial', 15, false, NULL),
('Lixamento quadrado - Aula 20', '7DE9NKHlVuU', 25, 'Módulo Inicial', 15, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092')
ON CONFLICT (ordem) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  youtube_id = EXCLUDED.youtube_id,
  modulo = EXCLUDED.modulo,
  pontos_ao_completar = EXCLUDED.pontos_ao_completar,
  is_locked = EXCLUDED.is_locked,
  unlock_url = EXCLUDED.unlock_url;

-- ============================================
-- DADOS INICIAIS - QUIZZES
-- ============================================

-- Quiz após cada 5 aulas

-- Limpar quizzes existentes (OPCIONAL)
DELETE FROM public.quizzes;

-- Quiz 1: Após Introdução Aula 05
INSERT INTO public.quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3) VALUES
('Introdução', 5, 'Qual é a principal característica de uma Nail Designer profissional?', 
 'Domínio de técnicas e atendimento de qualidade', 
 'Apenas saber fazer decorações', 
 'Ter muitos materiais caros');

-- Quiz 2: Após Módulo Inicial Aula 05
INSERT INTO public.quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3) VALUES
('Módulo Inicial', 5, 'Por que a preparação das unhas naturais é tão importante?', 
 'Garante maior durabilidade e aderência do produto', 
 'Apenas para deixar as unhas mais bonitas', 
 'Não é importante, pode pular essa etapa');

-- Quiz 3: Após Módulo Inicial Aula 10
INSERT INTO public.quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3) VALUES
('Módulo Inicial', 10, 'Qual formato de unha é mais versátil e indicado para iniciantes?', 
 'Amendoado', 
 'Stiletto', 
 'Formato extremo em ponta');

-- Quiz 4: Após Módulo Inicial Aula 15
INSERT INTO public.quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3) VALUES
('Módulo Inicial', 15, 'O que é essencial ao fazer um banho de gel?', 
 'Preparação adequada e aplicação em camadas finas', 
 'Aplicar camadas grossas de uma vez', 
 'Não precisa preparar a unha antes');

-- Quiz 5: Após Módulo Inicial Aula 20
INSERT INTO public.quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3) VALUES
('Módulo Inicial', 20, 'Qual é a frequência ideal para manutenção de unhas alongadas?', 
 'Entre 15 a 21 dias', 
 'Somente quando as unhas caírem', 
 'A cada 2 meses')
ON CONFLICT (modulo, aula_numero) DO UPDATE SET
  pergunta = EXCLUDED.pergunta,
  resposta_correta = EXCLUDED.resposta_correta,
  resposta_2 = EXCLUDED.resposta_2,
  resposta_3 = EXCLUDED.resposta_3;

-- ============================================
-- DADOS INICIAIS - BADGES
-- ============================================

-- Limpar badges existentes (OPCIONAL)
DELETE FROM public.badges;

INSERT INTO public.badges (nome, descricao, icone, condicao, valor_condicao) VALUES
('Primeira Aula', 'Completou sua primeira aula!', '🎬', 'videos_completos', 1),
('Dedicada', 'Completou 5 aulas', '⭐', 'videos_completos', 5),
('Mariposa Iniciante', 'Completou 10 aulas', '🦋', 'videos_completos', 10),
('Mariposa Avançada', 'Completou 20 aulas', '💎', 'videos_completos', 20),
('Mariposa Master', 'Completou todas as 25 aulas!', '👑', 'videos_completos', 25),
('100 Pontos', 'Conquistou 100 pontos', '💯', 'pontos', 100),
('500 Pontos', 'Conquistou 500 pontos', '🌟', 'pontos', 500),
('Quiz Master', 'Acertou todos os quizzes!', '🧠', 'quizzes_corretos', 5)
ON CONFLICT DO NOTHING;

-- ============================================
-- ÍNDICES ADICIONAIS PARA PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_videos_modulo ON public.videos(modulo);
CREATE INDEX IF NOT EXISTS idx_progresso_user ON public.progresso_videos(user_id);
CREATE INDEX IF NOT EXISTS idx_progresso_video ON public.progresso_videos(video_id);
CREATE INDEX IF NOT EXISTS idx_quiz_respostas_user ON public.quiz_respostas(user_id);
CREATE INDEX IF NOT EXISTS idx_quizzes_modulo_aula ON public.quizzes(modulo, aula_numero);

-- ============================================
-- FIM DO SCHEMA
-- ============================================

