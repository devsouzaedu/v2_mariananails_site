# 🦋 COMECE AQUI - Plataforma Mariposas

## 🚀 3 Passos para Começar

### 1️⃣ Configure o Banco de Dados

1. Acesse: https://supabase.com/dashboard/project/lwcputcmcwqezenncbrg
2. Clique em **"SQL Editor"** no menu lateral
3. Copie TODO o conteúdo do arquivo **`supabase_schema.sql`**
4. Cole no editor e clique em **"Run"**
5. Execute também este SQL:

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

### 2️⃣ Execute o Projeto

```bash
npm run dev
```

### 3️⃣ Acesse a Plataforma

Abra no navegador: **http://localhost:3000/plataforma**

---

## ✅ Pronto!

A plataforma já está funcionando com:
- ✅ 30 vídeos cadastrados
- ✅ 8 badges de conquistas
- ✅ Sistema de pontos e níveis
- ✅ Progresso individual
- ✅ Autenticação completa

---

## 📖 Quer Saber Mais?

### Documentação Disponível

| Arquivo | Quando Usar |
|---------|-------------|
| **COMO_USAR_PLATAFORMA.md** | Guia rápido de uso |
| **CHECKLIST_SETUP.md** | Verificar se tudo está OK |
| **VIDEOS_CADASTRADOS.md** | Ver lista de vídeos |
| **PLATAFORMA_COMPLETA.md** | Visão geral completa |
| **INSTRUCOES_PLATAFORMA.md** | Detalhes técnicos |

---

## 🎯 Primeiro Teste

1. Crie uma conta em: http://localhost:3000/plataforma/cadastro
2. Acesse o dashboard
3. Clique em qualquer vídeo
4. Assista alguns segundos
5. Feche e reabra o vídeo
6. Veja que continuou de onde parou! ✨

---

## 🆘 Problemas?

### Erro ao criar conta?
- Verifique se executou o SQL do passo 1

### Vídeos não aparecem?
- Confirme que o `supabase_schema.sql` foi executado completamente

### Progresso não salva?
- Execute a função `increment_pontos` (passo 1.5)

---

## 🎨 Cores da Plataforma

- Rosa: `#EC4899`
- Roxo: `#9333EA`
- Amarelo: `#EAB308`

---

**🦋 Boa sorte com as Mariposas!**

