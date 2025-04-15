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

// Esta configuração evita que este layout seja automaticamente aninhado dentro do layout raiz
export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
} 