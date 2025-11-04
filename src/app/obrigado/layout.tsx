import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obrigado pela Compra! | Mariana Nails',
  description: 'Sua compra foi confirmada com sucesso! Bem-vinda à Família Mariana Nails.',
  robots: 'noindex, nofollow', // Não indexar página de obrigado
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}

