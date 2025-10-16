# 🦋 Plataforma de Ensino Mariposas

## Configuração Inicial

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=https://lwcputcmcwqezenncbrg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDYxNjEzMiwiZXhwIjoyMDc2MTkyMTMyfQ.Uxk53uXzZCv5HF35h-2c065WnJ-c6PC1vmeCIix5qPE
```

### 2. Configurar Banco de Dados Supabase

1. Acesse o dashboard do Supabase: https://supabase.com/dashboard
2. Vá para seu projeto: https://lwcputcmcwqezenncbrg.supabase.co
3. No menu lateral, clique em "SQL Editor"
4. Copie todo o conteúdo do arquivo `supabase_schema.sql`
5. Cole no SQL Editor e execute (clique em "Run")

Isso irá criar:
- Tabelas: `profiles`, `videos`, `progresso_videos`, `badges`, `user_badges`
- Políticas de segurança (Row Level Security)
- Trigger para criar perfil automaticamente ao registrar
- 30 vídeos pré-cadastrados
- 8 badges de conquistas

### 3. Criar Função RPC (Opcional mas Recomendado)

Execute este SQL no Supabase para criar a função de incrementar pontos:

```sql
CREATE OR REPLACE FUNCTION increment_pontos(user_id UUID, pontos_add INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE profiles
  SET pontos = pontos + pontos_add,
      updated_at = NOW()
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 4. Instalar Dependências

```bash
npm install
```

### 5. Executar o Projeto

```bash
npm run dev
```

## Estrutura da Plataforma

### Páginas

- `/plataforma/login` - Página de login
- `/plataforma/cadastro` - Página de cadastro
- `/plataforma/dashboard` - Dashboard principal com todos os vídeos

### Funcionalidades

#### 1. Autenticação
- Cadastro com email e senha (obrigatórios)
- Instagram e WhatsApp opcionais
- Login/Logout
- Proteção de rotas via middleware

#### 2. Dashboard
- Visualização de todos os vídeos organizados por módulos
- Estatísticas de progresso
- Pontos acumulados
- Nível do usuário
- Badges conquistadas

#### 3. Sistema de Vídeos
- 30 vídeos do YouTube integrados
- Player modal com YouTube API
- Tracking de progresso em tempo real
- Salvar posição para continuar de onde parou
- Marcação automática como completo ao assistir 90%

#### 4. Gamificação
- **Pontos**: Cada vídeo concede pontos ao ser completado
- **Níveis**: A cada 100 pontos, sobe 1 nível
- **Badges**: Conquistas baseadas em:
  - Quantidade de vídeos completados
  - Quantidade de pontos acumulados

#### 5. Progresso Individual
- Cada usuária tem seu próprio progresso
- Histórico de vídeos assistidos
- Tempo assistido por vídeo
- Última posição salva

### Módulos de Vídeos

1. **Módulo Inicial** (3 aulas) - 10 pts cada
2. **Módulo Básico** (3 aulas) - 15 pts cada
3. **Módulo Intermediário** (4 aulas) - 20 pts cada
4. **Módulo Avançado** (4 aulas) - 25 pts cada
5. **Módulo Design** (4 aulas) - 30 pts cada
6. **Módulo Especialização** (3 aulas) - 35 pts cada
7. **Módulo Profissional** (3 aulas) - 40 pts cada
8. **Módulo Empreendedorismo** (4 aulas) - 45 pts cada
9. **Módulo Extra** (2 aulas) - 50 pts cada

**Total de pontos possíveis**: 805 pontos

### Badges Disponíveis

1. 🎬 **Primeira Aula** - Completou 1 aula
2. ⭐ **Dedicada** - Completou 5 aulas
3. 🦋 **Mariposa Iniciante** - Completou 10 aulas
4. 💎 **Mariposa Avançada** - Completou 20 aulas
5. 👑 **Mariposa Master** - Completou todas as 30 aulas
6. 💯 **100 Pontos** - Conquistou 100 pontos
7. 🌟 **500 Pontos** - Conquistou 500 pontos
8. 🏆 **1000 Pontos** - Impossível sem completar todos (máx 805)

## Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Supabase** - Backend (Auth + Database)
- **YouTube IFrame API** - Player de vídeos
- **Lucide React** - Ícones

## Segurança

- Row Level Security (RLS) habilitado em todas as tabelas
- Usuários só podem ver e editar seus próprios dados
- Autenticação via Supabase Auth
- Middleware protege rotas da plataforma

## Próximos Passos (Opcional)

1. Adicionar recuperação de senha
2. Adicionar perfil do usuário editável
3. Adicionar comentários nos vídeos
4. Adicionar ranking de pontuação
5. Adicionar certificado ao completar todos os vídeos
6. Adicionar notificações de novos badges
7. Adicionar sistema de favoritos
8. Integrar com WhatsApp para envio de mensagens

