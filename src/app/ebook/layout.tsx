import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guia de Ouro da Nail Designer Profissional - Download Gratuito | Mariana Nails',
  description: 'Baixe gratuitamente o Guia de Ouro da Nail Designer Profissional com dicas exclusivas para profissionais de nail design. Conteúdo exclusivo da Mariana Nails.',
  keywords: 'nail design, ebook gratuito, guia nail designer, dicas unhas, curso nail art, mariana nails, barueri, alphaville',
  openGraph: {
    title: 'Guia de Ouro da Nail Designer Profissional - Download Gratuito',
    description: 'Baixe gratuitamente o Guia de Ouro da Nail Designer Profissional com dicas exclusivas para profissionais de nail design.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia de Ouro da Nail Designer Profissional - Download Gratuito',
    description: 'Baixe gratuitamente o Guia de Ouro da Nail Designer Profissional com dicas exclusivas para profissionais de nail design.',
  },
};

export default function EbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 