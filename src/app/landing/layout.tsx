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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent'
  }
}

// Layout isolado para a landing page
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        WebkitTextSizeAdjust: '100%', // Corrige problemas de texto no Safari
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        overflowX: 'hidden'
      }} className={poppins.className}>
        {/* Apenas o conteúdo da página, sem o Navbar e sem o Footer */}
        {children}
      </body>
    </html>
  )
}