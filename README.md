# Página de Vendas - Curso Mariana Nails

Este diretório contém a página de vendas completa para o curso online "[CURSO COMPLETO] Aprenda a fazer unhas do zero e fature + R$4.000 em 2025 com Mariana Nails!".

## Estrutura do Projeto

- `src/app/fature-4000-com-unhas-em-2025/page.tsx`: Componente principal da página de vendas.
- `src/app/fature-4000-com-unhas-em-2025/layout.tsx`: Layout específico para esta rota.

## Como Personalizar a Página

### 1. Imagens e Ícones

As seções de Benefícios, Bônus e Garantia utilizam ícones e imagens. Você precisará criar ou baixar as imagens e salvá-las no diretório `public/images` com os seguintes nomes:

- `icon-growth.svg` (para "Do Zero ao Avançado")
- `icon-money.svg` (para "Fature +R$4.000/Mês")
- `icon-certificate.svg` (para "Certificação Reconhecida")
- `bonus-cilios.svg` (para "Curso de Extensão de Cílios")
- `bonus-masculino.svg` (para "Manicure Masculina")
- `bonus-spa.svg` (para "Spa dos Pés Profissional")
- `icon-guarantee.svg` (para "Sua Satisfação Garantida")

Certifique-se de que os caminhos (`src="/images/nome-do-arquivo.svg"`) no `page.tsx` correspondam aos nomes dos arquivos que você salvou.

### 2. Link de Checkout / Formulário de Inscrição

O botão principal de Chamada para Ação (CTA) está com um link placeholder (`href="#"`). Substitua `#` pelo URL real da sua página de checkout ou formulário de inscrição. Você pode encontrar esta linha em `src/app/fature-4000-com-unhas-em-2025/page.tsx`:

```tsx
<a href="#" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full text-2xl md:text-3xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg">
  Quero me Tornar uma Nail Designer Agora!
</a>
```

### 3. Integração com Plataformas de Pagamento (Opcional)

Para o checkout, você pode integrar com plataformas de pagamento como Stripe, PayPal, Hotmart, Eduzz, Kiwify, etc. Isso geralmente envolve:

- Criar um produto ou curso na plataforma escolhida.
- Obter o link de checkout gerado pela plataforma.
- Substituir o `href` do botão CTA pelo link de checkout da plataforma.

### 4. Temporizador de Oferta Limitada (Funcionalidade Avançada)

Se você deseja um contador regressivo para a oferta limitada, isso exigirá a criação de um novo componente React (ex: `CountdownTimer.tsx`) que gerencie o estado do tempo e renderize o contador. Você precisaria importar e usar este componente dentro de `page.tsx`.

### 5. Otimização SEO

Para otimizar a página para SEO, você já tem algumas palavras-chave incluídas no conteúdo. Para adicionar a meta-descrição e outras tags de SEO no Next.js 13+, você pode usar o componente `Metadata` no `layout.tsx` ou diretamente no `page.tsx`:

No `page.tsx` (exemplo):

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '[CURSO COMPLETO] Aprenda a fazer unhas do zero e fature + R$4.000 em 2025 com Mariana Nails!',
  description: 'Aprenda do zero a ser uma Nail Designer com o curso completo da Mariana Nails e fature +R$4.000/mês em 2025! Inscreva-se agora!',
};

export default function Fature4000ComUnhasEm2025() {
  // ... restante do código da sua página
}
```

### 6. Cores e Estilos (Tailwind CSS)

O design da página foi construído com Tailwind CSS. Você pode ajustar as cores, fontes, tamanhos e espaçamentos editando as classes CSS diretamente no `page.tsx`. Consulte a documentação do Tailwind CSS para mais opções de personalização.

## Testando a Página

Para visualizar a página, certifique-se de que seu servidor de desenvolvimento Next.js esteja rodando:

```bash
npm run dev
# ou
yarn dev
```

Em seguida, acesse `http://localhost:3000/fature-4000-com-unhas-em-2025` no seu navegador. 