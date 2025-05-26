'use client';

// Este template força a remoção dos elementos não desejados na landing page
export default function Template({ children }: { children: React.ReactNode }) {
  // Removendo elementos indesejados após o carregamento da página
  if (typeof window !== 'undefined') {
    // Removendo o banner preto, navbar e footer
    setTimeout(() => {
      // Procurando e removendo a navbar
      const navbars = document.querySelectorAll('nav, header');
      navbars.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });

      // Procurando e removendo o footer
      const footers = document.querySelectorAll('footer');
      footers.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });

      // Removendo qualquer banner fixo no topo
      const banners = document.querySelectorAll('.banner, [class*="banner"], [id*="banner"], .fixed, .sticky-top, .top-0');
      banners.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });

      // Resetando margens e paddings que podem estar sendo adicionados pela navbar
      const main = document.querySelector('main');
      if (main) {
        main.style.paddingTop = '0';
        main.style.marginTop = '0';
      }

      document.body.style.paddingTop = '0';
      document.body.style.marginTop = '0';
    }, 50);
  }

  return (
    <>{children}</>
  );
}