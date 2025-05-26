import { Poppins } from 'next/font/google'

// Configurar a fonte Poppins - somente para a landing page
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// Layout isolado para a landing page - versão mínima
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Mariana Nails - Landing Page</title>
        <meta name="description" content="Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          html, body {
            background-color: black !important;
            min-height: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            color: white !important;
          }
        `}</style>
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
      }} className={poppins.className}>
        {children}
      </body>
    </html>
  )
}