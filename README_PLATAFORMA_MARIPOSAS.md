# 🦋 Plataforma de Ensino Mariposas - Mariana Nails

Uma plataforma de ensino moderna estilo Netflix com gamificação para as alunas (Mariposas) de Mariana Nails.

## ✨ Funcionalidades

### 🎯 Sistema de Autenticação
- ✅ Cadastro com email e senha
- ✅ Campos opcionais: Instagram e WhatsApp
- ✅ Login seguro com Supabase
- ✅ Proteção de rotas via middleware

### 📺 Plataforma de Vídeos
- ✅ 30 vídeos integrados do YouTube
- ✅ Interface estilo Netflix
- ✅ Player modal integrado
- ✅ Organização por módulos temáticos
- ✅ Thumbnails automáticas

### 🎮 Gamificação Completa
- ✅ Sistema de pontos (805 pontos totais disponíveis)
- ✅ Sistema de níveis (1 nível a cada 100 pontos)
- ✅ 8 badges de conquistas
- ✅ Tracking em tempo real
- ✅ Notificações de conquistas

### 📊 Progresso Individual
- ✅ Cada usuária tem progresso independente
- ✅ Salvar posição do vídeo
- ✅ Continuar de onde parou
- ✅ Marcação automática ao assistir 90%
- ✅ Estatísticas detalhadas

### 🎨 Interface Moderna
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Gradientes e animações suaves
- ✅ Cards interativos com hover effects
- ✅ Dashboard com estatísticas visuais
- ✅ Tema roxo/rosa (cores da marca)

## 🚀 Como Usar

### Passo 1: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://lwcputcmcwqezenncbrg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
```

### Passo 2: Configurar Banco de Dados

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **SQL Editor**
4. Execute o conteúdo do arquivo `supabase_schema.sql`

### Passo 3: Criar Função RPC (Importante!)

Execute este SQL adicional no Supabase:

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

### Passo 4: Instalar e Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar a plataforma
http://localhost:3000/plataforma
```

## 📱 Rotas da Plataforma

| Rota | Descrição |
|------|-----------|
| `/plataforma` | Redirecionamento automático |
| `/plataforma/login` | Página de login |
| `/plataforma/cadastro` | Página de cadastro |
| `/plataforma/dashboard` | Dashboard principal (protegida) |

## 🎓 Estrutura dos Módulos

### Módulo Inicial (3 aulas)
- Introdução, Fundamentos, Técnicas Básicas
- **10 pontos** por aula

### Módulo Básico (3 aulas)
- Materiais, Preparação, Aplicação
- **15 pontos** por aula

### Módulo Intermediário (4 aulas)
- Acabamento, Decorações, Técnicas Avançadas
- **20 pontos** por aula

### Módulo Avançado (4 aulas)
- Alongamento, Blindagem, Unhas de Gel/Fibra
- **25 pontos** por aula

### Módulo Design (4 aulas)
- Design, Nail Art (Básica, Intermediária, Avançada)
- **30 pontos** por aula

### Módulo Especialização (3 aulas)
- Decorações Especiais, Técnicas de Relevo, Encapsulado
- **35 pontos** por aula

### Módulo Profissional (3 aulas)
- Francesinha, Ombré/Degradê, Manutenção
- **40 pontos** por aula

### Módulo Empreendedorismo (4 aulas)
- Atendimento, Precificação, Marketing, Gestão
- **45 pontos** por aula

### Módulo Extra (2 aulas)
- Fotografia de Unhas, Tendências
- **50 pontos** por aula

## 🏆 Sistema de Badges

| Badge | Condição | Ícone |
|-------|----------|-------|
| Primeira Aula | 1 vídeo completo | 🎬 |
| Dedicada | 5 vídeos completos | ⭐ |
| Mariposa Iniciante | 10 vídeos completos | 🦋 |
| Mariposa Avançada | 20 vídeos completos | 💎 |
| Mariposa Master | 30 vídeos completos | 👑 |
| 100 Pontos | 100 pontos | 💯 |
| 500 Pontos | 500 pontos | 🌟 |
| 1000 Pontos | 1000 pontos | 🏆 |

## 🔐 Segurança

- ✅ Row Level Security (RLS) habilitado
- ✅ Políticas de acesso por usuário
- ✅ Autenticação segura via Supabase
- ✅ Middleware protege rotas
- ✅ Dados isolados por usuária

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Supabase** - Backend as a Service
  - Authentication
  - PostgreSQL Database
  - Row Level Security
- **YouTube IFrame API** - Video Player
- **Lucide React** - Icons

## 📊 Banco de Dados

### Tabelas

1. **profiles** - Perfis das usuárias
2. **videos** - Catálogo de vídeos
3. **progresso_videos** - Progresso individual
4. **badges** - Badges disponíveis
5. **user_badges** - Badges conquistadas

### Relacionamentos

```
profiles (1) ----< (N) progresso_videos
profiles (1) ----< (N) user_badges
videos (1) ----< (N) progresso_videos
badges (1) ----< (N) user_badges
```

## 🎨 Paleta de Cores

- **Primary**: Rosa #EC4899 (pink-500)
- **Secondary**: Roxo #9333EA (purple-600)
- **Accent**: Amarelo #EAB308 (yellow-500)
- **Background**: Gradiente Rosa/Roxo claro
- **Text**: Cinza #1F2937 (gray-800)

## 📈 Próximas Melhorias Sugeridas

- [ ] Recuperação de senha por email
- [ ] Edição de perfil
- [ ] Sistema de comentários nos vídeos
- [ ] Ranking global de pontuação
- [ ] Certificado digital ao completar
- [ ] Notificações push
- [ ] Sistema de favoritos
- [ ] Download de materiais complementares
- [ ] Quiz/avaliações
- [ ] Comunidade/fórum

## 🐛 Troubleshooting

### Vídeos não aparecem
- Verifique se executou o `supabase_schema.sql`
- Confirme que as variáveis de ambiente estão corretas

### Não consegue fazer login
- Verifique se criou conta primeiro em `/plataforma/cadastro`
- Confira se o Supabase Auth está habilitado

### Progresso não salva
- Verifique as políticas RLS no Supabase
- Confirme que a função `increment_pontos` foi criada

### Player não carrega
- Verifique sua conexão com internet
- YouTube API pode estar bloqueada por firewall

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação completa em `INSTRUCOES_PLATAFORMA.md`

---

**Desenvolvido com 💜 para as Mariposas by Mariana Nails**

