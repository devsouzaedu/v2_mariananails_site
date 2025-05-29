import { Poppins } from 'next/font/google'

// Configurar a fonte Poppins - somente para a landing page
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// Metadata estático para a landing page
export const metadata = {
  title: 'Mariana Nails - Landing Page',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.',
}

// Layout isolado para a landing page - versão otimizada para Safari iOS
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --vh: 1vh;
          }
          html, body {
            background-color: black !important;
            min-height: 100% !important;
            height: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            color: white !important;
            overflow-x: hidden !important;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
          }
          #__next, main {
            background-color: black !important;
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
          }
          * {
            box-sizing: border-box;
          }
        `}} />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        overflowX: 'hidden'
      }} className={poppins.className}>
        {children}
      </body>
    </html>
  )
}