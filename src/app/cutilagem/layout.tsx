import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manual de Cutilagem Avançada | Mariana Nails - Técnica Profissional para Nail Designer',
    description: 'Aprenda a técnica de cutilagem profissional com Mariana Nails. Manual completo com corte contínuo, cutilagem com alicate, combinada e com cera. Domine a base de todo serviço de unhas de qualidade.',
    openGraph: {
        title: 'Manual de Cutilagem Avançada | Mariana Nails',
        description: 'Copie os movimentos de uma cutilagem perfeita e entregue unhas impecáveis para suas clientes. Manual completo por apenas 3x de R$12,38.',
        type: 'website',
        url: 'https://mariananails.com.br/cutilagem',
        locale: 'pt_BR',
    },
};

export default function CutilagemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
