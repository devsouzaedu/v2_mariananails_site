import { Poppins } from 'next/font/google'
import '../globals.css'
// Importando estilos mas não componentes compartilhados do layout principal

// Configurar a fonte Poppins
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// Configurações para isolar completamente este layout, sem navbar ou banner
export const metadata = {
  title: 'Mariana Nails - Landing Page',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
}

// Configurações adicionais para isolar este layout completamente do layout principal
export const dynamic = 'force-dynamic'
export const runtime = 'edge'
// Isso faz com que o layout raiz não seja utilizado nesta rota

// Usando uma abordagem de substituição completa do HTML
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        overflow: 'auto',
        width: '100%',
        height: '100%'
      }} className={poppins.className}>
        {children}
      </body>
    </html>
  )
} 