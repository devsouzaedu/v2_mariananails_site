---
description: Como criar landing pages e páginas de obrigado neste projeto
---

# Criação de Landing Pages e Páginas de Obrigado

## REGRA IMPORTANTE: Sem Navbar, Footer ou WhatsApp Button

Landing pages e páginas de obrigado (thank you pages) **NÃO devem exibir** a Navbar global, o banner rosa do topo, o Footer global nem o botão flutuante do WhatsApp.

Para garantir isso, ao criar uma nova landing page ou página de obrigado:

1. **Registre a nova rota no `layout.tsx`** (`src/app/layout.tsx`)
2. Crie uma variável booleana para identificar a rota, ex:
   ```typescript
   const isMinhaNovaPage = pathname === '/minha-nova-rota' || pathname === '/obrigado-minha-nova-rota';
   ```
3. Adicione essa variável em **TODOS os 4 locais** de exclusão:
   - Condição da Navbar/banner (linha ~163)
   - Classe `pt-20` do `<main>` (linha ~176)
   - Condição do `<Footer />` (linha ~180)
   - Condição do `<WhatsAppButton />` (linha ~181)

## Estrutura de Preços

Ao criar uma landing page, sempre defina as configurações de preço no topo do arquivo como constantes:

```typescript
const CHECKOUT_URL = "https://hub.la/r/LINK_AQUI";
const PRECO_PARCELADO = "5,30";
const PRECO_AVISTA = "14,90";
const PARCELAS = "3x";
```

## Padrão Estético

As landing pages seguem o padrão dark da rota `/cutilagem`:
- Background: `#0a0a0a` (preto)
- Cores de destaque: dourado `#D4AF37`, vermelho `#C41E3A`, verde CTA `#22C55E`
- Fontes: Montserrat (títulos), Poppins (corpo), Lora (itálico elegante)
- Botão CTA: verde `#22C55E`, arredondado, com hover e shadow

## Páginas de Obrigado (Thank You Pages)

As páginas de obrigado seguem o padrão claro da rota `/obrigado-cutilagem`:
- Background: branco
- Cor de destaque: rosa `#EC4899`
- Contém: mensagem de parabéns, diário da nail designer, entrada no grupo WhatsApp
- Order bump com timer, checkbox interativo e CTA pulsante

## Rotas já cadastradas no layout.tsx

Estas rotas já estão excluídas da navbar/footer:
- `/landing`
- `/ebook`
- `/ebookguiado`
- `/curso_nail_designer_do_zero`
- `/fature-4000-com-unhas-em-2025`
- `/curso_nail_design_do_zero_ao_profissional_mariana_nails`
- `/plataforma/*`
- `/obrigado`
- `/cutilagem-avancada`, `/cutilagem`, `/obrigado-cutilagem`
- `/links`
- `/curso-nail-designer-barueri-presencial-mariananails-`
- `/cfr`, `/obrigado-cfr`
