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
  const isEbookGuiadoPage = pathname === '/ebookguiado'; // Nova rota do ebook guiado
  const isCursoPage = pathname === '/curso_nail_designer_do_zero';
  const isFaturePage = pathname === '/fature-4000-com-unhas-em-2025'; // Adicionada a nova rota aqui
  const isQuizPage = pathname === '/curso_nail_design_do_zero_ao_profissional_mariana_nails';
  const isPlataformaPage = pathname?.startsWith('/plataforma'); // Plataforma Mariposas
  const isObrigadoPage = pathname === '/obrigado'; // Página de obrigado
  const isCutilagemPage = pathname === '/cutilagem-avancada'; // Landing page Cutilagem Avançada
  return (
    <html lang="pt-BR" className={`${funnelSans.variable} ${ptSans.variable} ${playfair.variable} ${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <head>
        {/* Google tag (gtag.js) - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D92MV0VYXM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D92MV0VYXM', {
                transport_url: 'https://s.mariananails.com.br/',
                first_party_collection: true
              });
            `
          }}
        />
        {/* End Google tag (gtag.js) */}

        {/* DataLayer Push - Purchase Event (ANTES do GTM) */}
        {isObrigadoPage && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'purchase',
                  value: 43.02,
                  currency: 'BRL',
                  transaction_id: Date.now() + '-' + Math.random()
                });
              `
            }}
          />
        )}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDD4HPT8');
            `
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDD4HPT8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Condição para renderizar Navbar e banner apenas se NÃO for landing, ebook, ebookguiado, curso, fature, quiz, plataforma ou obrigado */}
        {!isLandingPage && !isEbookPage && !isEbookGuiadoPage && !isCursoPage && !isFaturePage && !isQuizPage && !isPlataformaPage && !isObrigadoPage && !isCutilagemPage && (
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
        <main className={`flex-grow relative z-10 ${isLandingPage || isEbookPage || isEbookGuiadoPage || isCursoPage || isFaturePage || isQuizPage || isPlataformaPage || isObrigadoPage || isCutilagemPage ? '' : 'pt-20'}`}>
          {children}
        </main>
        {/* Condição para renderizar Footer e WhatsAppButton apenas se NÃO for ebook, ebookguiado, curso, fature, quiz, plataforma ou obrigado */}
        {!isEbookPage && !isEbookGuiadoPage && !isCursoPage && !isFaturePage && !isQuizPage && !isPlataformaPage && !isObrigadoPage && !isCutilagemPage && <Footer />}
        {!isEbookPage && !isEbookGuiadoPage && !isCursoPage && !isFaturePage && !isQuizPage && !isPlataformaPage && !isObrigadoPage && !isCutilagemPage && <WhatsAppButton />}
      </body>
    </html>
  )
} 