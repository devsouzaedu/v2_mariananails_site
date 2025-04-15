import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

// Configurar a fonte Poppins
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Mariana Nails - Landing Page',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen ${poppins.className}`}>
        {children}
      </body>
    </html>
  )
} 