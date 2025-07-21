import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Curso Nail Designer do Zero ao Profissional - Mariana Nails | R$ 19,99',
  description: 'Aprenda Nail Art do Zero ao Profissional com a Mariana Nails. Curso completo com vídeos, apostila e certificado. De R$ 39,99 por apenas R$ 19,99. Apenas 20 vagas!',
  keywords: 'curso nail design, nail art profissional, curso unhas, mariana nails, nail designer, curso online, certificado nail art',
  openGraph: {
    title: 'Curso Nail Designer do Zero ao Profissional - R$ 19,99',
    description: 'Torne-se uma Nail Designer Profissional. Curso completo com metodologia exclusiva, certificado e suporte. Oferta limitada!',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Nail Designer do Zero ao Profissional - R$ 19,99',
    description: 'Torne-se uma Nail Designer Profissional. Curso completo com metodologia exclusiva, certificado e suporte. Oferta limitada!',
  },
};

export default function CursoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
      <WhatsAppButton />
    </div>
  );
} 