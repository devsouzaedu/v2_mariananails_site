# ✅ CHECKLIST DE IMPLEMENTAÇÃO - Plataforma Mariposas V2

## 📋 Use este checklist para garantir que tudo foi implementado corretamente

---

## 🗄️ FASE 1: Banco de Dados (Supabase)

### Preparação
- [ ] Fazer backup do banco atual
- [ ] Anotar URL do Supabase
- [ ] Anotar ANON_KEY do Supabase
- [ ] Ter acesso ao SQL Editor

### Execução do Schema
- [ ] Acessar: https://supabase.com/dashboard
- [ ] Selecionar projeto correto
- [ ] Ir em **SQL Editor**
- [ ] Abrir arquivo: `supabase_schema_plataforma_mariposas_v2.sql`
- [ ] Copiar todo o conteúdo
- [ ] Colar no SQL Editor
- [ ] Clicar em "Run"
- [ ] Aguardar mensagem de sucesso

### Verificação Pós-Execução
- [ ] Verificar tabela `videos`: `SELECT COUNT(*) FROM videos;` → Deve retornar **25**
- [ ] Verificar tabela `quizzes`: `SELECT COUNT(*) FROM quizzes;` → Deve retornar **5**
- [ ] Verificar aulas travadas: `SELECT COUNT(*) FROM videos WHERE is_locked = true;` → Deve retornar **5**
- [ ] Verificar badges: `SELECT COUNT(*) FROM badges;` → Deve retornar **8**
- [ ] Testar uma query: `SELECT titulo, modulo FROM videos ORDER BY ordem LIMIT 5;`

### Verificação de Políticas RLS
- [ ] Verificar políticas em `videos`: Deve estar habilitado para leitura
- [ ] Verificar políticas em `quizzes`: Deve estar habilitado para leitura
- [ ] Verificar políticas em `quiz_respostas`: Deve estar habilitado para usuário logado

---

## 💻 FASE 2: Código (Deploy)

### Verificar Arquivos Criados
- [ ] `supabase_schema_plataforma_mariposas_v2.sql` existe
- [ ] `src/components/plataforma/Quiz.tsx` existe
- [ ] `src/types/database.types.ts` foi atualizado

### Verificar Arquivos Modificados
- [ ] `src/app/plataforma/dashboard/page.tsx` foi atualizado
- [ ] `src/components/plataforma/DashboardClient.tsx` foi atualizado

### Verificar Variáveis de Ambiente
- [ ] Arquivo `.env.local` existe
- [ ] `NEXT_PUBLIC_SUPABASE_URL` está definida
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` está definida
- [ ] Valores correspondem ao projeto Supabase correto

### Build Local
- [ ] Rodar: `npm install` (caso tenha novas dependências)
- [ ] Rodar: `npm run build`
- [ ] Build completa sem erros
- [ ] Rodar: `npm run dev`
- [ ] Servidor local inicia sem erros

### Deploy em Produção
- [ ] Commit das mudanças: `git add .`
- [ ] Commit: `git commit -m "feat: Plataforma Mariposas V2 - Quizzes e Aulas Travadas"`
- [ ] Push: `git push origin master` (ou sua branch principal)
- [ ] Aguardar deploy automático OU
- [ ] Deploy manual: `vercel --prod` ou equivalente
- [ ] Deploy concluído com sucesso

---

## 🧪 FASE 3: Testes Funcionais

### Teste 1: Login e Dashboard
- [ ] Acessar: `https://seusite.com/plataforma/login`
- [ ] Fazer login com conta de teste
- [ ] Dashboard carrega corretamente
- [ ] Mostra 2 módulos: "Introdução" e "Módulo Inicial"
- [ ] Estatísticas aparecem (pontos, badges, progresso)

### Teste 2: Visualização de Vídeos
- [ ] Ver módulo "Introdução"
- [ ] Deve mostrar 5 aulas
- [ ] Aulas 01-04 têm ícone de play
- [ ] Aula 05 tem ícone de cadeado 🔒
- [ ] Ver módulo "Módulo Inicial"
- [ ] Deve mostrar 20 aulas
- [ ] Aulas 05, 10, 15, 20 têm cadeado 🔒

### Teste 3: Reprodução de Vídeo
- [ ] Clicar em Aula 01 (liberada)
- [ ] Modal de vídeo abre
- [ ] Player do YouTube carrega
- [ ] Vídeo reproduz corretamente
- [ ] Fechar modal funciona
- [ ] Tentar clicar em Aula 05 (travada)
- [ ] Não deve abrir o player
- [ ] Deve mostrar banner de compra

### Teste 4: Sistema de Quizzes
- [ ] Completar Aulas 01, 02, 03, 04
- [ ] Após Aula 04, deve aparecer Quiz
- [ ] Quiz mostra:
  - [ ] Título "Quiz - Introdução"
  - [ ] Pergunta clara
  - [ ] 3 opções de resposta
  - [ ] Ícone de cérebro 🧠
- [ ] Selecionar uma resposta
- [ ] Feedback aparece (correto ou incorreto)
- [ ] Se errar, mostra resposta correta
- [ ] Resposta é salva no banco

### Teste 5: Aulas Travadas
- [ ] Navegar até Aula 05 (travada)
- [ ] Thumbnail aparece com blur
- [ ] Ícone de cadeado visível
- [ ] Banner rosa/roxo aparece abaixo
- [ ] Texto: "🔒 Aula Bloqueada"
- [ ] Botão "Comprar Curso Completo" visível
- [ ] Clicar no botão
- [ ] Abre em nova aba
- [ ] URL da Kiwify correta: `https://pay.kiwify.com.br/lf9IZHj...`

### Teste 6: Progressão e Pontos
- [ ] Completar uma aula
- [ ] Pontos aumentam corretamente (+10 ou +15)
- [ ] Badge "Primeira Aula" é conquistada
- [ ] Completar 5 aulas
- [ ] Badge "Dedicada" é conquistada
- [ ] Progresso percentual atualiza

### Teste 7: Quizzes Múltiplos
- [ ] Completar até Aula 10 do Módulo Inicial
- [ ] Deve aparecer 3 quizzes total:
  - [ ] Quiz após Introdução Aula 05
  - [ ] Quiz após Módulo Inicial Aula 05
  - [ ] Quiz após Módulo Inicial Aula 10
- [ ] Cada quiz salva resposta independentemente

### Teste 8: Responsividade
- [ ] Testar em Desktop (1920px)
  - [ ] Cards de vídeo em grid
  - [ ] Quiz exibe bem
  - [ ] Banner de compra centralizado
- [ ] Testar em Tablet (768px)
  - [ ] Grid ajusta para menos colunas
  - [ ] Menu funciona
  - [ ] Tudo legível
- [ ] Testar em Mobile (375px)
  - [ ] Cards empilham verticalmente
  - [ ] Botões clicáveis
  - [ ] Quiz responsivo
  - [ ] Banner de compra responsivo

---

## 🔍 FASE 4: Verificações de Dados

### No Supabase Dashboard

#### Tabela: videos
```sql
SELECT id, titulo, modulo, is_locked, ordem 
FROM videos 
ORDER BY ordem;
```
**Espera-se:**
- 25 registros
- 5 com `is_locked = true`
- Ordem de 1 a 25

#### Tabela: quizzes
```sql
SELECT id, modulo, aula_numero, pergunta 
FROM quizzes 
ORDER BY id;
```
**Espera-se:**
- 5 registros
- `aula_numero`: 5, 5, 10, 15, 20

#### Tabela: quiz_respostas (após testes)
```sql
SELECT user_id, quiz_id, correta, respondido_em 
FROM quiz_respostas 
ORDER BY respondido_em DESC 
LIMIT 10;
```
**Espera-se:**
- Registros das respostas de teste
- Campo `correta` como true ou false

#### Tabela: progresso_videos (após testes)
```sql
SELECT user_id, video_id, completado 
FROM progresso_videos 
WHERE completado = true;
```
**Espera-se:**
- Vídeos completados durante teste

---

## 📊 FASE 5: Testes de Conversão

### Fluxo Completo de Conversão
- [ ] Nova conta de teste criada
- [ ] Assistir Aulas 01-04 da Introdução
- [ ] Fazer Quiz 1
- [ ] Encontrar Aula 05 travada
- [ ] Ler texto do banner de compra
- [ ] Clicar em "Comprar Curso Completo"
- [ ] Verificar URL aberta (Kiwify)
- [ ] Parâmetro `_fbp` presente na URL
- [ ] Página de checkout carrega corretamente

### Teste de Múltiplos Pontos de Conversão
- [ ] Testar CTA na Aula 05 (Introdução)
- [ ] Testar CTA na Aula 05 (Módulo Inicial)
- [ ] Testar CTA na Aula 10 (Módulo Inicial)
- [ ] Testar CTA na Aula 15 (Módulo Inicial)
- [ ] Testar CTA na Aula 20 (Módulo Inicial)
- [ ] Todas levam para a mesma URL da Kiwify

---

## 🎨 FASE 6: Verificação Visual

### Design e UX
- [ ] Cores da marca (rosa/roxo) aplicadas
- [ ] Ícones visíveis e claros
- [ ] Textos legíveis em todos os tamanhos
- [ ] Animações suaves (hover, transições)
- [ ] Sem bugs visuais ou elementos quebrados
- [ ] Loading states funcionam
- [ ] Mensagens de erro são amigáveis

### Consistência
- [ ] Estilo consistente em todas as páginas
- [ ] Fonte consistente
- [ ] Espaçamentos uniformes
- [ ] Cores de feedback claras (verde = sucesso, vermelho = erro)

---

## 🔐 FASE 7: Segurança e Performance

### Segurança
- [ ] RLS habilitado em todas as tabelas sensíveis
- [ ] Usuário só vê próprio progresso
- [ ] Não é possível acessar vídeos travados via API
- [ ] Tokens de autenticação funcionam
- [ ] Logout funciona corretamente

### Performance
- [ ] Dashboard carrega em < 3 segundos
- [ ] Vídeos carregam rapidamente
- [ ] Sem erros no console do navegador
- [ ] Imagens otimizadas (thumbnails do YouTube)
- [ ] Smooth scrolling funciona

---

## 📱 FASE 8: Testes Cross-Browser

### Desktop
- [ ] Google Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac)
- [ ] Edge (Windows)

### Mobile
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Firefox (Android)

**Para cada navegador:**
- [ ] Login funciona
- [ ] Vídeos reproduzem
- [ ] Quizzes funcionam
- [ ] Botões clicáveis
- [ ] Layout responsivo

---

## 📢 FASE 9: Preparação para Lançamento

### Documentação
- [ ] Ler `PLATAFORMA_MARIPOSAS_V2_ATUALIZACAO.md`
- [ ] Ler `GUIA_RAPIDO_IMPLEMENTACAO_V2.md`
- [ ] Ler `RESUMO_EXECUTIVO_V2.md`
- [ ] Ler `EXPERIENCIA_DA_ALUNA_V2.md`

### Comunicação
- [ ] Preparar post de anúncio nas redes sociais
- [ ] Preparar email para alunas existentes
- [ ] Preparar stories/reels mostrando novidades
- [ ] Avisar grupo de WhatsApp (se houver)

### Backup Final
- [ ] Fazer backup do banco antes do lançamento
- [ ] Salvar versão anterior do código (tag git)
- [ ] Documentar data/hora do lançamento

---

## 🚀 FASE 10: Lançamento!

### Momento do Lançamento
- [ ] Verificar tudo funciona (último check)
- [ ] Publicar anúncio nas redes sociais
- [ ] Enviar email para base
- [ ] Publicar stories
- [ ] Monitorar primeiras alunas entrando

### Monitoramento Pós-Lançamento (Primeiras 24h)
- [ ] Verificar logs de erro (se houver)
- [ ] Acompanhar acessos ao dashboard
- [ ] Monitorar quantas pessoas chegam nas aulas travadas
- [ ] Verificar cliques no botão de compra
- [ ] Responder dúvidas no suporte

### Primeiros 7 Dias
- [ ] Acompanhar taxa de conversão
- [ ] Coletar feedback das alunas
- [ ] Identificar possíveis melhorias
- [ ] Ajustar se necessário

---

## 📊 MÉTRICAS PARA ACOMPANHAR

### Diariamente
```sql
-- Usuárias ativas hoje
SELECT COUNT(DISTINCT user_id) 
FROM progresso_videos 
WHERE updated_at::date = CURRENT_DATE;

-- Aulas completadas hoje
SELECT COUNT(*) 
FROM progresso_videos 
WHERE completado = true 
AND completado_em::date = CURRENT_DATE;

-- Quizzes respondidos hoje
SELECT COUNT(*) 
FROM quiz_respostas 
WHERE respondido_em::date = CURRENT_DATE;
```

### Semanalmente
```sql
-- Taxa de conclusão
SELECT 
  (COUNT(DISTINCT CASE WHEN completado = true THEN user_id END)::float / 
   COUNT(DISTINCT user_id)::float * 100) as taxa_conclusao
FROM progresso_videos;

-- Alunas que chegaram em aulas travadas
SELECT COUNT(DISTINCT user_id)
FROM progresso_videos p
JOIN videos v ON p.video_id = v.id
WHERE v.ordem IN (4, 9, 14, 19, 24); -- Aulas antes das travadas
```

---

## ✅ CHECKLIST FINAL (Resumido)

**Antes de considerar CONCLUÍDO, confirme:**

- [ ] ✅ Banco atualizado com 25 vídeos
- [ ] ✅ 5 quizzes cadastrados
- [ ] ✅ 5 aulas travadas
- [ ] ✅ Código em produção
- [ ] ✅ Testes funcionais passaram
- [ ] ✅ Responsividade OK
- [ ] ✅ Link da Kiwify correto
- [ ] ✅ Segurança verificada
- [ ] ✅ Performance OK
- [ ] ✅ Documentação lida
- [ ] ✅ Pronto para lançar!

---

## 🆘 Se Algo Der Errado

### Rollback do Banco
```sql
-- Restaurar backup anterior
-- pg_restore -h host -U user -d database backup.sql
```

### Rollback do Código
```bash
# Voltar para commit anterior
git log  # Ver histórico
git revert HEAD  # Reverter último commit
git push origin master
```

### Suporte
- Consulte: `PLATAFORMA_MARIPOSAS_V2_ATUALIZACAO.md`
- Veja logs: Supabase Dashboard → Logs
- Console do navegador: F12 → Console

---

## 🎉 PARABÉNS!

Se todos os itens estão marcados, sua **Plataforma Mariposas V2** está no ar! 🦋

**Próximos passos:**
1. Anunciar nas redes
2. Acompanhar métricas
3. Otimizar baseado em feedback
4. Escalar! 📈

---

**Desenvolvido com 💜 para as Mariposas**  
**Versão:** 2.0  
**Status:** ✅ PRONTO PARA LANÇAR

