'use client';

import { useEffect } from 'react';

export default function GoogleTagManager() {
  useEffect(() => {
    // Inicializar dataLayer imediatamente
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Verificar se o script já foi adicionado
      const existingScript = document.querySelector('script[data-gtm-id="GTM-PMSQ8T3F"]');
      if (existingScript) {
        return;
      }

      // Injetar o script do GTM no head (o mais alto possível)
      const script = document.createElement('script');
      script.setAttribute('data-gtm-id', 'GTM-PMSQ8T3F');
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PMSQ8T3F');`;
      
      // Inserir no início do head
      if (document.head.firstChild) {
        document.head.insertBefore(script, document.head.firstChild);
      } else {
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-PMSQ8T3F"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
    </>
  );
}

