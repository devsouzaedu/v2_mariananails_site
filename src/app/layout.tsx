"use client";
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { PT_Sans, Playfair_Display, Instrument_Serif, Instrument_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const funnelSans = localFont({
  src: [
    {
      path: './fonts/FunnelSans-VariableFont_wght.ttf',
      style: 'normal'
    },
    {
      path: './fonts/FunnelSans-Italic-VariableFont_wght.ttf',
      style: 'italic'
    }
  ],
  variable: '--font-funnel',
  display: 'swap'
})

const ptSans = PT_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'], // Adicionado o peso '400' aqui
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap'
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap'
})

// A metadata não pode ser exportada de um client component diretamente.
// Se precisar de metadados dinâmicos, considere movê-los para page.tsx ou usar a API generateMetadata.
// Por ora, vamos manter a exportação comentada ou remover se não for usada dinamicamente aqui.
// export const metadata: Metadata = {
  // title: 'Mariana Nails - Especialista em Nail Design',
  // description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/landing';
  const isEbookPage = pathname === '/ebook';
  const isCursoPage = pathname === '/curso_nail_designer_do_zero';
  const isFaturePage = pathname === '/fature-4000-com-unhas-em-2025'; // Adicionada a nova rota aqui
  return (
    <html lang="pt-BR" className={`${funnelSans.variable} ${ptSans.variable} ${playfair.variable} ${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen">
        {/* Condição para renderizar Navbar e banner apenas se NÃO for landing, ebook, curso ou fature */}
        {!isLandingPage && !isEbookPage && !isCursoPage && !isFaturePage && (
          <>
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-primary-50 opacity-30 mix-blend-multiply" style={{ 
                backgroundImage: 'radial-gradient(#ec4899 0.5px, transparent 0.5px), radial-gradient(#ec4899 0.5px, transparent 0.5px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
                opacity: 0.05
              }}></div>
            </div>
            <Navbar />
          </>
        )}
        <main className={`flex-grow relative z-10 ${isLandingPage || isEbookPage || isCursoPage || isFaturePage ? '' : 'pt-20'}`}>
          {children}
        </main>
        {/* Condição para renderizar Footer e WhatsAppButton apenas se NÃO for ebook, curso ou fature */}
        {!isEbookPage && !isCursoPage && !isFaturePage && <Footer />}
        {!isEbookPage && !isCursoPage && !isFaturePage && <WhatsAppButton />}
      </body>
    </html>
  )
} 