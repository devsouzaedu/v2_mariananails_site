# 🚀 Guia Rápido - Implementação Plataforma Mariposas V2

## ⚡ Passos Rápidos para Colocar no Ar

### 1️⃣ Atualizar Banco de Dados (5 minutos)

```bash
# Acesse: https://supabase.com/dashboard
# Vá em: SQL Editor
# Execute o arquivo: supabase_schema_plataforma_mariposas_v2.sql
```

O script irá:
- ✅ Adicionar colunas `is_locked` e `unlock_url` na tabela `videos`
- ✅ Criar tabelas `quizzes` e `quiz_respostas`
- ✅ Inserir 25 vídeos (5 Introdução + 20 Módulo Inicial)
- ✅ Inserir 5 quizzes
- ✅ Configurar 5 aulas travadas
- ✅ Atualizar badges

---

### 2️⃣ Deploy do Código (2 minutos)

```bash
# Commit
git add .
git commit -m "feat: Plataforma Mariposas V2 com Quizzes e Aulas Travadas"

# Push (se auto-deploy configurado)
git push origin master

# OU deploy manual
vercel --prod
# npm run deploy
```

---

### 3️⃣ Testar (3 minutos)

1. Acesse: `https://seusite.com/plataforma/login`
2. Faça login
3. Verifique se aparecem 2 módulos:
   - ✅ Introdução (5 aulas)
   - ✅ Módulo Inicial (20 aulas)
4. Assista 4 aulas
5. Na 5ª aula deve aparecer:
   - 🔒 Aula travada com cadeado
   - 🛒 Botão "Comprar Curso Completo"
   - 🧠 Quiz antes da aula travada

---

## 🎯 O Que Muda para as Alunas?

### Antes (V1):
- 30 aulas disponíveis
- Todas liberadas
- Sem quizzes
- Sem chamada para compra

### Agora (V2):
- 25 aulas (5 + 20)
- 5 aulas travadas estrategicamente
- 5 quizzes interativos
- CTA de compra em cada aula travada
- Link direto para Kiwify

---

## 🔒 Aulas Travadas

| Módulo | Aula | Posição |
|--------|------|---------|
| Introdução | Aula 05 | Última do módulo |
| Módulo Inicial | Aula 05 | Após 5 aulas |
| Módulo Inicial | Aula 10 | Após 10 aulas |
| Módulo Inicial | Aula 15 | Após 15 aulas |
| Módulo Inicial | Aula 20 | Última do módulo |

**Estratégia:** A cada 5 aulas liberadas → Quiz → Aula travada → CTA de compra

---

## 🧠 Quizzes

Aparecem após as aulas: **05, 05, 10, 15, 20**

Características:
- ✅ 1 pergunta por quiz
- ✅ 3 alternativas (embaralhadas)
- ✅ Feedback imediato
- ✅ Salva no banco
- ✅ Badge especial "Quiz Master"

---

## 💰 Conversão

### URL de Desbloqueio:
```
https://pay.kiwify.com.br/lf9IZHj?_fbp=fb.2.1760032634498.702834123425693092
```

**Todas as 5 aulas travadas** levam para este link.

Para alterar:
```sql
UPDATE public.videos 
SET unlock_url = 'https://nova-url.com'
WHERE is_locked = true;
```

---

## 🎨 Preview Visual

### Aula Liberada:
```
┌──────────────────┐
│  [Thumbnail]     │
│  ▶ Hover Play   │  ✓ Completada
└──────────────────┘
Título da Aula
⭐ 15 pts
```

### Aula Travada:
```
┌──────────────────┐
│  [Blur Effect]   │
│   🔒 Cadeado    │
└──────────────────┘
Título da Aula
⭐ 15 pts 🔒

┌─────────────────────────────────┐
│ 🔒 Aula Bloqueada               │
│ Desbloqueie com o curso!       │
│ [🛒 Comprar Curso Completo]    │
└─────────────────────────────────┘
```

### Quiz:
```
┌─────────────────────────────────┐
│ 🧠 Quiz - Módulo Inicial        │
│ Teste seus conhecimentos!       │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Pergunta aqui?              │ │
│ └─────────────────────────────┘ │
│                                 │
│ [ ] Resposta 1                 │
│ [ ] Resposta 2                 │
│ [ ] Resposta 3                 │
└─────────────────────────────────┘
```

---

## 📊 Métricas para Acompanhar

Consultas SQL úteis:

### Quantas pessoas completaram aulas gratuitas?
```sql
SELECT COUNT(DISTINCT user_id) as usuarios_ativos
FROM progresso_videos
WHERE completado = true;
```

### Quantos quizzes foram respondidos?
```sql
SELECT COUNT(*) as total_respostas,
       SUM(CASE WHEN correta THEN 1 ELSE 0 END) as acertos
FROM quiz_respostas;
```

### Qual aula travada tem mais tentativas de acesso?
```sql
-- Ver logs do seu analytics
-- Cada clique em aula travada = interesse
```

---

## 🔧 Personalizações Rápidas

### Alterar pontos das aulas:
```sql
UPDATE videos 
SET pontos_ao_completar = 20 
WHERE modulo = 'Módulo Inicial';
```

### Destravar todas as aulas (teste):
```sql
UPDATE videos 
SET is_locked = false;
```

### Travar novamente:
```sql
UPDATE videos 
SET is_locked = true 
WHERE ordem IN (5, 10, 15, 20, 25);
```

### Adicionar novo quiz:
```sql
INSERT INTO quizzes (modulo, aula_numero, pergunta, resposta_correta, resposta_2, resposta_3)
VALUES ('Módulo Inicial', 25, 'Pergunta?', 'Correta', 'Errada 1', 'Errada 2');
```

---

## 🐛 Troubleshooting

### Vídeos não aparecem?
```bash
# Verificar se o SQL foi executado
SELECT COUNT(*) FROM videos; # Deve retornar 25
```

### Quizzes não aparecem?
```bash
# Verificar tabela
SELECT * FROM quizzes; # Deve ter 5 registros
```

### Aulas não estão travadas?
```bash
# Verificar campo
SELECT id, titulo, is_locked FROM videos WHERE is_locked = true;
# Deve retornar 5 aulas
```

### Botão de compra não funciona?
```bash
# Verificar URL
SELECT unlock_url FROM videos WHERE is_locked = true;
# Deve ter a URL da Kiwify
```

---

## ✅ Checklist Final

Antes de anunciar para as alunas:

- [ ] SQL executado no Supabase
- [ ] Código deployed
- [ ] Login funcionando
- [ ] 25 vídeos aparecendo
- [ ] 5 aulas com cadeado
- [ ] Quiz aparece após 5 aulas
- [ ] Botão de compra funcionando
- [ ] Link da Kiwify correto
- [ ] Testado em mobile
- [ ] Testado em desktop

---

## 📱 Anúncio para as Alunas (Sugestão)

```
🦋 NOVIDADE NA PLATAFORMA MARIPOSAS! 🦋

✨ O que mudou:
• Nova organização de aulas mais didática
• Quizzes interativos para testar conhecimento
• Sistema de badges atualizado

📚 Acesse agora e continue sua jornada!
🔗 [link da plataforma]

#MariposasMarianaNails #NailDesigner #Curso
```

---

## 🎯 Meta de Conversão

Com esta estrutura:
- **Objetivo:** 20-30% de conversão das alunas ativas
- **Estratégia:** Travar aulas em pontos estratégicos
- **Tempo médio até conversão:** 3-7 dias

---

**💡 Dica Pro:** Acompanhe quantas pessoas chegam nas aulas travadas e ajuste a estratégia conforme necessário!

---

**🦋 Sucesso com a nova plataforma!**

