# 🦋 Plataforma de Ensino Mariposas

> Plataforma moderna de ensino online estilo Netflix para as alunas de Mariana Nails

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Latest-3ECF8E?logo=supabase)

---

## 🚀 Início Rápido

### 1. Configure o Banco de Dados

```bash
# Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
# SQL Editor → Cole e execute: supabase_schema.sql
```

### 2. Execute o Projeto

```bash
npm run dev
```

### 3. Acesse

```
http://localhost:3000/plataforma
```

---

## ✨ Funcionalidades

- ✅ **30 Vídeos** do YouTube integrados
- ✅ **Autenticação** completa (cadastro/login)
- ✅ **Gamificação** (pontos, níveis, 8 badges)
- ✅ **Progresso Individual** por usuária
- ✅ **Player Inteligente** (salva posição, continua de onde parou)
- ✅ **100% Responsivo** (mobile, tablet, desktop)
- ✅ **Segurança** (Row Level Security)

---

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| [START_HERE.md](START_HERE.md) | ⚡ Início rápido (3 passos) |
| [RESUMO_FINAL.md](RESUMO_FINAL.md) | 📋 Resumo completo do projeto |
| [COMO_USAR_PLATAFORMA.md](COMO_USAR_PLATAFORMA.md) | 📖 Guia de uso detalhado |
| [CHECKLIST_SETUP.md](CHECKLIST_SETUP.md) | ✅ Checklist de configuração |
| [PLATAFORMA_COMPLETA.md](PLATAFORMA_COMPLETA.md) | 🎯 Visão geral técnica |
| [VIDEOS_CADASTRADOS.md](VIDEOS_CADASTRADOS.md) | 📺 Lista dos 30 vídeos |
| [INSTRUCOES_PLATAFORMA.md](INSTRUCOES_PLATAFORMA.md) | 🔧 Instruções técnicas |

---

## 🎓 Módulos de Ensino

| Módulo | Aulas | Pontos/Aula | Total |
|--------|-------|-------------|-------|
| Inicial | 3 | 10 | 30 |
| Básico | 3 | 15 | 45 |
| Intermediário | 4 | 20 | 80 |
| Avançado | 4 | 25 | 100 |
| Design | 4 | 30 | 120 |
| Especialização | 3 | 35 | 105 |
| Profissional | 3 | 40 | 120 |
| Empreendedorismo | 4 | 45 | 180 |
| Extra | 2 | 50 | 100 |
| **TOTAL** | **30** | - | **805** |

---

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

---

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth + PostgreSQL)
- **Player**: YouTube IFrame API
- **Icons**: Lucide React

---

## 📂 Estrutura

```
src/
├── app/plataforma/
│   ├── cadastro/          # Cadastro
│   ├── login/             # Login
│   ├── dashboard/         # Dashboard
│   └── layout.tsx
├── components/plataforma/
│   ├── DashboardClient.tsx  # Dashboard client
│   └── VideoPlayer.tsx      # Player de vídeo
├── lib/supabase/
│   ├── client.ts          # Supabase browser
│   ├── server.ts          # Supabase server
│   └── middleware.ts      # Auth middleware
└── types/
    └── database.types.ts  # TypeScript types
```

---

## 🔐 Segurança

- ✅ Row Level Security (RLS)
- ✅ Políticas de acesso por usuária
- ✅ Autenticação via Supabase
- ✅ Dados isolados por usuária
- ✅ Cookies seguros

---

## 🎨 Design

**Cores**:
- Rosa: `#EC4899`
- Roxo: `#9333EA`
- Amarelo: `#EAB308`

**Features**:
- Gradientes suaves
- Animações fluidas
- Cards interativos
- Menu mobile responsivo

---

## 🚢 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Importar na Vercel
3. Adicionar variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy! 🚀

---

## 📊 Métricas

- **30** vídeos
- **9** módulos
- **8** badges
- **805** pontos máximos
- **5** tabelas no banco
- **2000+** linhas de código

---

## 🆘 Suporte

### Problemas Comuns

**Vídeos não aparecem**
- Execute `supabase_schema.sql` completo

**Pontos não aumentam**
- Execute a função `increment_pontos` (ver START_HERE.md)

**Não consegue fazer login**
- Crie uma conta primeiro

---

## 📞 Links Úteis

- **Supabase Dashboard**: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## 📝 Licença

Desenvolvido exclusivamente para Mariana Nails

---

**🦋 Desenvolvido com 💜 para as Mariposas**

*Transformando alunas em profissionais através da gamificação e tecnologia.*

