import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    variable: '--font-playfair-cutilagem',
    display: 'swap',
    preload: true,
});

const interCutilagem = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-inter-cutilagem',
    display: 'swap',
    preload: true,
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#140F0B',
};

export const metadata: Metadata = {
    title: 'O Manual de Cutilagem Avançada | Mariana Nails - Cutilagem Funda, Limpa e Sem Bife',
    description: 'Domine a cutilagem funda, limpa e sem bife reduzindo seu tempo em mesa. Aprenda corte contínuo, cutilagem com alicate, combinada e com cera por apenas 3x de R$ 12,38.',
    openGraph: {
        title: 'O Manual de Cutilagem Avançada | Mariana Nails',
        description: 'Domine uma cutilagem funda, limpa e sem bife em menos tempo na mesa. Acesso imediato por apenas 3x de R$ 12,38.',
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
    return (
        <div className={`${playfairDisplay.variable} ${interCutilagem.variable}`}>
            {children}
        </div>
    );
}
