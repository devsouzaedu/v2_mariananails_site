'use client';

import { Poppins } from 'next/font/google'
import { useEffect } from 'react';

// Configurar a fonte Poppins - somente para a landing page
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Mariana Nails - Landing Page',
  description: 'Serviços de manicure e pedicure de alta qualidade em Barueri e Alphaville. Cursos de Nail Design e Nail Art.'
}

// Layout isolado para a landing page
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  // Para aplicar CSS client-side no Safari
  useEffect(() => {
    // Função para detectar Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      // Aplicar CSS específico para Safari
      document.documentElement.style.backgroundColor = 'black';
      document.documentElement.style.height = '100%';
      document.body.style.backgroundColor = 'black';
      document.body.style.minHeight = '100%';
      document.body.style.height = '100%';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.overflowX = 'hidden';
      
      // Remover qualquer fundo indesejado
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        // Evitar elementos específicos que não devem ser modificados
        if (!el.classList.contains('no-safari-fix')) {
          (el as HTMLElement).style.backgroundColor = 'black';
        }
      });
    }
  }, []);
  
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          /* Estilos específicos para Safari */
          html, body {
            background-color: black !important;
            min-height: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        height: '100%',
        minHeight: '100%',
        overflow: 'auto'
      }} className={poppins.className}>
        {/* Apenas o conteúdo da página, sem o Navbar e sem o Footer */}
        {children}
      </body>
    </html>
  )
}