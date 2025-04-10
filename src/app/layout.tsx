import type { Metadata } from 'next'
import { PT_Sans, Playfair_Display } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Mariana Nails - Especialista em Nail Design',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${funnelSans.variable} ${ptSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-primary-50 opacity-30 mix-blend-multiply" style={{ 
            backgroundImage: 'radial-gradient(#ec4899 0.5px, transparent 0.5px), radial-gradient(#ec4899 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            opacity: 0.05
          }}></div>
        </div>
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
} 