# 🦋 Como Usar a Plataforma Mariposas

## ⚡ Início Rápido (3 Passos)

### 1️⃣ Copiar Variáveis de Ambiente

Copie o arquivo `.env` que já está criado (com suas credenciais do Supabase).

**O arquivo `.env` já está pronto! Não precisa fazer nada.**

### 2️⃣ Configurar o Banco de Dados no Supabase

1. Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg

2. No menu lateral, clique em **"SQL Editor"**

3. Copie **TODO** o conteúdo do arquivo `supabase_schema.sql`

4. Cole no editor SQL e clique em **"Run"** ou pressione `Ctrl+Enter`

5. Aguarde a mensagem de sucesso ✅

6. Execute este SQL adicional (importante para os pontos funcionarem):

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

### 3️⃣ Executar a Plataforma

```bash
npm run dev
```

Abra no navegador: **http://localhost:3000/plataforma**

## 🎯 Acessando a Plataforma

### URLs Principais

- **Cadastro**: http://localhost:3000/plataforma/cadastro
- **Login**: http://localhost:3000/plataforma/login
- **Dashboard**: http://localhost:3000/plataforma/dashboard (requer login)
- **Plataforma**: http://localhost:3000/plataforma (redireciona automaticamente)

### Primeiro Acesso

1. Acesse: http://localhost:3000/plataforma/cadastro
2. Preencha:
   - **Email** (obrigatório)
   - **Senha** (obrigatório, mínimo 6 caracteres)
   - Instagram (opcional)
   - WhatsApp (opcional)
3. Clique em "Criar Conta"
4. Você será redirecionado para o Dashboard

## 📺 Como Funciona

### Dashboard

Ao fazer login, você verá:

- **Estatísticas**: Progresso, badges, pontos
- **Vídeos organizados por módulo**: 9 módulos diferentes
- **Badges conquistadas**: Suas conquistas aparecem no topo

### Assistir Vídeos

1. Clique em qualquer vídeo
2. Um player modal abrirá
3. O vídeo do YouTube será carregado
4. Assista o vídeo normalmente

### Sistema de Progresso

- ✅ **Auto-save**: Sua posição é salva a cada 5 segundos
- ✅ **Continuar de onde parou**: Ao reabrir o vídeo, continua da última posição
- ✅ **Marcação automática**: Ao assistir 90% do vídeo, é marcado como completo
- ✅ **Pontos automáticos**: Recebe os pontos ao completar

### Gamificação

**Pontos**: Cada vídeo dá pontos ao ser completado
- Módulo Inicial: 10 pontos
- Módulo Básico: 15 pontos
- Módulo Intermediário: 20 pontos
- Módulo Avançado: 25 pontos
- Módulo Design: 30 pontos
- Módulo Especialização: 35 pontos
- Módulo Profissional: 40 pontos
- Módulo Empreendedorismo: 45 pontos
- Módulo Extra: 50 pontos

**Níveis**: A cada 100 pontos = +1 nível

**Badges**: Conquistas automáticas
- 🎬 Primeira Aula (1 vídeo)
- ⭐ Dedicada (5 vídeos)
- 🦋 Mariposa Iniciante (10 vídeos)
- 💎 Mariposa Avançada (20 vídeos)
- 👑 Mariposa Master (30 vídeos)
- 💯 100 Pontos
- 🌟 500 Pontos
- 🏆 1000 Pontos (requer completar todos)

## 🔧 Estrutura da Plataforma

### Arquivos Principais

```
src/
├── app/plataforma/
│   ├── login/page.tsx          # Página de login
│   ├── cadastro/page.tsx       # Página de cadastro
│   ├── dashboard/page.tsx      # Dashboard (server component)
│   └── layout.tsx              # Layout da plataforma
├── components/plataforma/
│   ├── DashboardClient.tsx     # Dashboard (client component)
│   └── VideoPlayer.tsx         # Player de vídeo com YouTube API
├── lib/supabase/
│   ├── client.ts               # Supabase client (browser)
│   ├── server.ts               # Supabase client (server)
│   └── middleware.ts           # Middleware do Supabase
└── types/
    └── database.types.ts       # Tipos TypeScript

supabase_schema.sql             # Schema do banco de dados
```

### Banco de Dados

**5 Tabelas**:
1. `profiles` - Perfis das usuárias
2. `videos` - 30 vídeos cadastrados
3. `progresso_videos` - Progresso individual de cada usuária
4. `badges` - 8 badges disponíveis
5. `user_badges` - Badges conquistadas por cada usuária

## 🚀 Deploy (Produção)

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy!

### Outras Plataformas

- Funciona em: Netlify, Cloudflare Pages, AWS Amplify, etc.
- Sempre configure as variáveis de ambiente

## 🐛 Problemas Comuns

### "Erro ao fazer login"
- Verifique se criou uma conta primeiro
- Senha deve ter mínimo 6 caracteres
- Email deve ser válido

### "Vídeos não aparecem"
- Confirme que executou o `supabase_schema.sql` completo
- Verifique a conexão com internet

### "Progresso não salva"
- Verifique se as variáveis de ambiente estão corretas
- Confirme que as políticas RLS foram criadas (estão no schema)

### "Pontos não aumentam"
- Execute a função SQL `increment_pontos` (passo 2.6)
- Reabra o vídeo e complete novamente

## 📱 Responsividade

A plataforma é **100% responsiva**:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile (smartphone)

## 🎨 Cores da Marca

- Rosa: #EC4899
- Roxo: #9333EA
- Amarelo (destaque): #EAB308

## 📊 Dados Importantes

- **Total de vídeos**: 30
- **Total de módulos**: 9
- **Total de badges**: 8
- **Pontos máximos**: 805
- **Nível máximo**: 9 (com todos os vídeos)

## 📞 Próximos Passos

Melhorias sugeridas para futuro:
- [ ] Recuperação de senha
- [ ] Edição de perfil
- [ ] Comentários nos vídeos
- [ ] Ranking de alunas
- [ ] Certificado digital
- [ ] Notificações
- [ ] Download de materiais

---

**🦋 Boa sorte com suas Mariposas!**

