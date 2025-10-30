-- ============================================
-- SCRIPT DE CORREÇÃO - Plataforma Mariposas V2
-- ============================================
-- Execute este script no Supabase SQL Editor

-- ============================================
-- PASSO 1: LIMPAR DADOS ANTIGOS
-- ============================================

-- Deletar TODOS os vídeos antigos
DELETE FROM public.videos;

-- Deletar todos os quizzes antigos
DELETE FROM public.quizzes;

-- ============================================
-- PASSO 2: INSERIR OS 25 VÍDEOS CORRETOS
-- ============================================

-- Módulo: Introdução (5 aulas)
INSERT INTO public.videos (titulo, youtube_id, ordem, modulo, pontos_ao_completar, is_locked, unlock_url) VALUES
('Introdução - Aula 01', 'ie_6EGiJW9E', 1, 'Introdução', 10, false, NULL),
('O que é ser uma Nail Designer? - Aula 02', 'oBwOWFzO5J4', 2, 'Introdução', 10, false, NULL),
('Tipos de unha - Aula 03', '4L8tHvA-yGk', 3, 'Introdução', 10, false, NULL),
('O que é necessário para fazer um alongamento do zero - Aula 04', 'ekZms2NOKxc', 4, 'Introdução', 10, false, NULL),
('A sua jornada começa aqui - Aula 05', 'eMOmDTJXMFs', 5, 'Introdução', 10, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092');

-- Módulo: Módulo Inicial (20 aulas)
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
('Lixamento quadrado - Aula 20', '7DE9NKHlVuU', 25, 'Módulo Inicial', 15, true, 'https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092');

-- ============================================
-- PASSO 3: INSERIR OS 5 QUIZZES
-- ============================================

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
 'A cada 2 meses');

-- ============================================
-- PASSO 4: VERIFICAÇÃO
-- ============================================

-- Verificar total de vídeos (deve ser 25)
SELECT COUNT(*) as total_videos FROM public.videos;

-- Verificar vídeos por módulo
SELECT modulo, COUNT(*) as quantidade 
FROM public.videos 
GROUP BY modulo 
ORDER BY modulo;

-- Verificar vídeos travados (deve ser 5)
SELECT ordem, titulo, modulo, is_locked 
FROM public.videos 
WHERE is_locked = true 
ORDER BY ordem;

-- Verificar total de quizzes (deve ser 5)
SELECT COUNT(*) as total_quizzes FROM public.quizzes;

-- Verificar quizzes criados
SELECT id, modulo, aula_numero, pergunta 
FROM public.quizzes 
ORDER BY id;

-- ============================================
-- RESULTADO ESPERADO
-- ============================================
-- total_videos: 25
-- Introdução: 5 vídeos
-- Módulo Inicial: 20 vídeos
-- is_locked = true: 5 vídeos (ordens: 5, 10, 15, 20, 25)
-- total_quizzes: 5

