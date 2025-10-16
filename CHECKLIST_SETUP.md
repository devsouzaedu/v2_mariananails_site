# ✅ Checklist de Configuração da Plataforma Mariposas

Use este checklist para garantir que tudo está configurado corretamente.

## 📋 Pré-requisitos

- [ ] Node.js instalado (versão 18 ou superior)
- [ ] npm instalado
- [ ] Conta no Supabase criada
- [ ] Projeto no Supabase criado (URL: https://lwcputcmcwqezenncbrg.supabase.co)

## 🔧 Configuração Inicial

### 1. Dependências

- [ ] Executou `npm install`
- [ ] Não houve erros na instalação
- [ ] Packages instalados:
  - [ ] @supabase/ssr
  - [ ] @supabase/supabase-js
  - [ ] next
  - [ ] react
  - [ ] tailwindcss
  - [ ] lucide-react

### 2. Variáveis de Ambiente

- [ ] Arquivo `.env` existe na raiz do projeto
- [ ] Contém `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Contém `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Contém `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Valores estão corretos (sem espaços extras)

**Valores corretos**:
```env
NEXT_PUBLIC_SUPABASE_URL=https://lwcputcmcwqezenncbrg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y3B1dGNtY3dxZXplbm5jYnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTYxMzIsImV4cCI6MjA3NjE5MjEzMn0._cXAWb2t8aMY0wzK0SZEgAUrtbC9cqtF271FsWhlkcA
```

### 3. Configuração do Supabase

#### 3.1 Acesso ao Dashboard
- [ ] Consegue acessar: https://supabase.com/dashboard
- [ ] Consegue ver o projeto: lwcputcmcwqezenncbrg

#### 3.2 SQL Schema
- [ ] Abriu o SQL Editor no Supabase
- [ ] Copiou TODO o conteúdo de `supabase_schema.sql`
- [ ] Executou o SQL com sucesso
- [ ] Viu mensagem "Success. No rows returned"

#### 3.3 Verificar Tabelas Criadas
- [ ] Acesse: Table Editor no Supabase
- [ ] Confirme que existem estas tabelas:
  - [ ] `profiles`
  - [ ] `videos` (deve ter 30 registros)
  - [ ] `progresso_videos`
  - [ ] `badges` (deve ter 8 registros)
  - [ ] `user_badges`

#### 3.4 Função RPC
- [ ] Executou a função `increment_pontos` no SQL Editor:
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
- [ ] Viu mensagem de sucesso

#### 3.5 Autenticação
- [ ] Acesse: Authentication > Settings no Supabase
- [ ] Email Auth está **habilitado**
- [ ] Confirm email está **desabilitado** (opcional, para facilitar testes)

#### 3.6 Row Level Security (RLS)
- [ ] As políticas RLS foram criadas automaticamente pelo schema
- [ ] Não precisa fazer nada manualmente

## 🚀 Executar a Plataforma

### 4. Build

- [ ] Executou `npm run build`
- [ ] Build completou sem erros
- [ ] Viu a mensagem "✓ Compiled successfully"

### 5. Desenvolvimento

- [ ] Executou `npm run dev`
- [ ] Servidor iniciou na porta 3000
- [ ] Sem erros no terminal
- [ ] Acessou http://localhost:3000/plataforma

## 🧪 Testar Funcionalidades

### 6. Teste de Cadastro

- [ ] Acesse http://localhost:3000/plataforma/cadastro
- [ ] Página carregou corretamente
- [ ] Formulário está visível
- [ ] Campos obrigatórios: email e senha
- [ ] Campos opcionais: instagram e whatsapp
- [ ] Criou uma conta de teste
- [ ] Foi redirecionado para o dashboard

### 7. Teste de Login

- [ ] Fez logout
- [ ] Acesse http://localhost:3000/plataforma/login
- [ ] Fez login com a conta criada
- [ ] Login funcionou
- [ ] Foi redirecionado para o dashboard

### 8. Teste do Dashboard

- [ ] Dashboard carregou
- [ ] Vê 3 cards de estatísticas no topo
- [ ] Vê os módulos de vídeos
- [ ] Vê os 30 vídeos organizados
- [ ] As thumbnails dos vídeos aparecem

### 9. Teste do Player de Vídeo

- [ ] Clicou em um vídeo
- [ ] Modal abriu
- [ ] Player do YouTube carregou
- [ ] Vídeo está tocando
- [ ] Barra de progresso aparece
- [ ] Pontos estão visíveis

### 10. Teste de Progresso

- [ ] Assistiu um vídeo por alguns segundos
- [ ] Fechou o modal
- [ ] Reabriu o mesmo vídeo
- [ ] Vídeo continuou de onde parou ✅

### 11. Teste de Completar Vídeo

- [ ] Assistiu um vídeo até pelo menos 90%
- [ ] Apareceu mensagem "Parabéns!"
- [ ] Pontos foram adicionados
- [ ] Badge "Primeira Aula" foi conquistada
- [ ] Vídeo ficou marcado como "Completo"

### 12. Teste de Badges

- [ ] Completou 1 vídeo → Badge 🎬 "Primeira Aula"
- [ ] Dashboard mostra a badge conquistada
- [ ] Badge está visível na seção de conquistas

### 13. Teste de Logout

- [ ] Clicou em "Sair"
- [ ] Foi redirecionado para login
- [ ] Não consegue acessar /plataforma/dashboard sem login

## 📱 Teste de Responsividade

### 14. Mobile

- [ ] Abriu DevTools (F12)
- [ ] Mudou para visualização mobile
- [ ] Layout se ajustou corretamente
- [ ] Menu mobile funciona
- [ ] Vídeos aparecem em coluna única
- [ ] Dashboard está legível

### 15. Tablet

- [ ] Testou em resolução de tablet
- [ ] Layout se ajusta para 2 colunas
- [ ] Tudo funciona corretamente

## 🔐 Teste de Segurança

### 16. Proteção de Rotas

- [ ] Sem login, não consegue acessar /plataforma/dashboard
- [ ] Redireciona automaticamente para login
- [ ] Após login, consegue acessar dashboard

### 17. Dados Isolados

- [ ] Criou outra conta de teste
- [ ] Progresso da conta 1 não aparece na conta 2
- [ ] Cada conta tem seu próprio progresso ✅

## ✅ Confirmação Final

- [ ] **TUDO FUNCIONANDO**: Cadastro, Login, Dashboard, Vídeos, Progresso, Badges
- [ ] Sem erros no console do navegador (F12)
- [ ] Sem erros no terminal
- [ ] Build de produção funciona (`npm run build`)

## 🎯 Pontuação Final

- Total de itens: ~70
- Itens marcados: _____ / 70
- Porcentagem: _____ %

**Mínimo recomendado para produção: 95%**

---

## 🆘 Se Algo Não Funcionar

### Limpar e Recomeçar

```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache do Next.js
rm -rf .next

# Rebuild
npm run build
npm run dev
```

### Verificar Logs

1. **Console do navegador** (F12 → Console)
2. **Terminal** onde roda `npm run dev`
3. **Supabase Logs** (Dashboard → Logs)

### Contatos de Suporte

- Documentação Next.js: https://nextjs.org/docs
- Documentação Supabase: https://supabase.com/docs
- Documentação Tailwind: https://tailwindcss.com/docs

---

**✨ Boa sorte com a Plataforma Mariposas! 🦋**

