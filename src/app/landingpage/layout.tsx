import { Poppins } from 'next/font/google'

// Configurar a fonte Poppins - somente para a landing page
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Mariana Nails - Landing Page',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
}

// Este layout substitui COMPLETAMENTE o layout raiz
// Isso é feito usando o route segment config
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic'
export const runtime = 'edge'

// Layout de página totalmente independente
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
      }} className={poppins.className}>
        {/* Apenas o conteúdo da página, sem o Navbar e sem o Footer */}
        {children}
      </body>
    </html>
  )
} 