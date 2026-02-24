import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Código da Fibra Realista (CFR) | Mariana Nails - Alongamento em Fibra de Vidro Natural',
    description: 'Aprenda o método exclusivo de alongamento em fibra de vidro com acabamento natural e realista com Mariana Nails. Domine a técnica da fibra realista: anatomia, construção amendoada, quadrada e muito mais.',
    openGraph: {
        title: 'Código da Fibra Realista (CFR) | Mariana Nails',
        description: 'Descubra o método que vai te ensinar a fazer alongamentos em fibra de vidro com acabamento natural e realista. Por apenas 3x de R$5,09.',
        type: 'website',
        url: 'https://mariananails.com.br/cfr',
        locale: 'pt_BR',
    },
};

export default function CFRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
