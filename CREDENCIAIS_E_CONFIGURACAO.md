# 🔑 Credenciais e Configuração - Plataforma Mariposas

## 🗄️ Supabase

### Project Details
- **URL**: https://lwcputcmcwqezenncbrg.supabase.co
- **Project ID**: lwcputcmcwqezenncbrg
- **Dashboard**: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg

### API Keys

#### Anon/Public Key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
```

#### Service Role Key (SUPABASE_SERVICE_ROLE_KEY)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDYxNjEzMiwiZXhwIjoyMDc2MTkyMTMyfQ.Uxk53uXzZCv5HF35h-2c065WnJ-c6PC1vmeCIix5qPE
```

---

## 📁 Arquivo .env

O arquivo `.env` já está criado na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=https://lwcputcmcwqezenncbrg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDYxNjEzMiwiZXhwIjoyMDc2MTkyMTMyfQ.Uxk53uXzZCv5HF35h-2c065WnJ-c6PC1vmeCIix5qPE
```

⚠️ **IMPORTANTE**: Não compartilhe o Service Role Key publicamente!

---

## 🗃️ Banco de Dados

### Tabelas Criadas

1. **profiles**
   - Perfis das usuárias
   - Campos: id, email, instagram, whatsapp, pontos, nivel

2. **videos**
   - Catálogo de 30 vídeos
   - Campos: id, titulo, youtube_id, ordem, modulo, pontos_ao_completar

3. **progresso_videos**
   - Progresso individual por vídeo
   - Campos: user_id, video_id, completado, tempo_assistido, ultima_posicao

4. **badges**
   - 8 badges disponíveis
   - Campos: id, nome, descricao, icone, condicao, valor_condicao

5. **user_badges**
   - Badges conquistadas
   - Campos: user_id, badge_id, conquistado_em

### Row Level Security (RLS)

**Habilitado em todas as tabelas**

Políticas criadas:
- ✅ Usuários veem apenas seus próprios dados
- ✅ Usuários podem atualizar apenas seus próprios dados
- ✅ Vídeos e badges são públicos (leitura)

---

## 🔧 Configuração Necessária

### 1. Executar SQL Schema

**Onde**: Supabase Dashboard → SQL Editor

**Arquivo**: `supabase_schema.sql`

**O que cria**:
- 5 tabelas
- Políticas RLS
- Trigger automático
- 30 vídeos
- 8 badges

### 2. Executar Função RPC

**Onde**: Supabase Dashboard → SQL Editor

**SQL**:
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

**Para que serve**: Incrementar pontos ao completar vídeos

---

## 🌐 URLs da Plataforma

### Desenvolvimento (localhost)

- **Home**: http://localhost:3000
- **Plataforma**: http://localhost:3000/plataforma
- **Cadastro**: http://localhost:3000/plataforma/cadastro
- **Login**: http://localhost:3000/plataforma/login
- **Dashboard**: http://localhost:3000/plataforma/dashboard

### Produção (após deploy)

Substitua `your-domain.vercel.app` pelo domínio do deploy:

- **Plataforma**: https://your-domain.vercel.app/plataforma
- **Cadastro**: https://your-domain.vercel.app/plataforma/cadastro
- **Login**: https://your-domain.vercel.app/plataforma/login
- **Dashboard**: https://your-domain.vercel.app/plataforma/dashboard

---

## 🔐 Autenticação

### Email Confirmation

Por padrão, o Supabase requer confirmação de email.

**Para desabilitar (opcional, facilita testes)**:

1. Acesse: Authentication → Settings
2. Em "Email Confirmation", desmarque "Enable email confirmations"

### Password Requirements

- **Mínimo**: 6 caracteres
- Configurável em: Authentication → Policies

---

## 📊 Acessar Dados no Supabase

### Via Dashboard

1. Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
2. Vá em: **Table Editor**
3. Selecione a tabela desejada
4. Veja/edite os dados

### Via SQL Editor

1. Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
2. Vá em: **SQL Editor**
3. Execute queries SQL

**Exemplos**:

```sql
-- Ver todas as usuárias
SELECT * FROM profiles;

-- Ver progresso de uma usuária
SELECT * FROM progresso_videos WHERE user_id = 'UUID_AQUI';

-- Ver badges conquistadas
SELECT ub.*, b.nome 
FROM user_badges ub
JOIN badges b ON ub.badge_id = b.id
WHERE ub.user_id = 'UUID_AQUI';

-- Ver vídeos mais assistidos
SELECT v.titulo, COUNT(pv.id) as assistentes
FROM videos v
LEFT JOIN progresso_videos pv ON v.id = pv.video_id
GROUP BY v.id, v.titulo
ORDER BY assistentes DESC;
```

---

## 🚀 Deploy

### Variáveis de Ambiente (Produção)

Configure estas variáveis no ambiente de deploy (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_SUPABASE_URL=https://lwcputcmcwqezenncbrg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDYxNjEzMiwiZXhwIjoyMDc2MTkyMTMyfQ.Uxk53uXzZCv5HF35h-2c065WnJ-c6PC1vmeCIix5qPE
```

⚠️ **Service Role Key** deve ser mantida em segredo!

---

## 📈 Analytics e Logs

### Supabase Logs

1. Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
2. Vá em: **Logs**
3. Escolha o tipo de log:
   - Auth Logs (logins, cadastros)
   - Database Logs (queries)
   - API Logs (requests)

### Vercel Analytics (após deploy)

Habilitado automaticamente na Vercel:
- Page views
- Performance
- Web Vitals

---

## 🔄 Backup

### Backup Automático (Supabase)

O Supabase faz backup automático do banco de dados.

### Backup Manual

1. Acesse: Database → Backups
2. Clique em "Create backup"
3. Download quando necessário

### Export de Dados

Via SQL:
```sql
-- Exportar todas as tabelas
pg_dump > backup.sql
```

Via Dashboard:
- Table Editor → Export CSV

---

## 🛡️ Segurança

### RLS Policies

**profiles**:
- Usuários veem/editam apenas próprio perfil

**progresso_videos**:
- Usuários veem/editam apenas próprio progresso

**user_badges**:
- Usuários veem apenas próprias badges

**videos** e **badges**:
- Leitura pública (authenticated)

### API Security

- Anon key é segura para uso público
- Service role key é privilegiada (nunca exponha no frontend)
- RLS protege os dados mesmo com anon key

---

## 📞 Suporte Supabase

- **Dashboard**: https://supabase.com/dashboard
- **Docs**: https://supabase.com/docs
- **Discord**: https://discord.supabase.com
- **Status**: https://status.supabase.com

---

## ⚙️ Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Iniciar dev server
npm run build        # Build de produção
npm run start        # Iniciar produção local
npm run lint         # Verificar erros
```

### Supabase CLI (opcional)
```bash
# Instalar
npm install -g supabase

# Login
supabase login

# Link projeto
supabase link --project-ref lwcputcmcwqezenncbrg

# Pull schema
supabase db pull

# Push migrations
supabase db push
```

---

## 🎯 Checklist de Configuração

- [ ] `.env` existe e está configurado
- [ ] `supabase_schema.sql` foi executado
- [ ] Função `increment_pontos` foi criada
- [ ] 30 vídeos estão no banco
- [ ] 8 badges estão no banco
- [ ] RLS policies estão ativas
- [ ] Consegue fazer cadastro
- [ ] Consegue fazer login
- [ ] Vídeos aparecem no dashboard
- [ ] Player de vídeo funciona
- [ ] Progresso é salvo
- [ ] Badges são conquistadas

---

**✅ Tudo configurado? Hora de voar! 🦋**

