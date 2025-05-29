import { Poppins } from 'next/font/google'
import Script from 'next/script'

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
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#000000',
  colorScheme: 'dark',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent'
  }
}

// Layout isolado para a landing page - versão otimizada para Safari iOS
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.className} min-h-screen w-full bg-black text-white`} style={{
      minHeight: 'calc(var(--vh, 1vh) * 100)',
      backgroundColor: 'black',
      color: 'white',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
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
      <Script id="viewport-fix" strategy="afterInteractive">
        {`
          // Fix para altura da viewport no iOS
          function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
          }
          setVH();
          window.addEventListener('resize', setVH);
          window.addEventListener('orientationchange', setVH);
          
          // Forçar o fundo para preto
          document.documentElement.style.backgroundColor = 'black';
          document.body.style.backgroundColor = 'black';
        `}
      </Script>
      {children}
    </div>
  )
}