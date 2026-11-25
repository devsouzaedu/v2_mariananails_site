"use client";

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'));

const ISOLATED_EXACT_ROUTES = new Set([
  '/landing',
  '/ebook',
  '/ebookguiado',
  '/curso_nail_designer_do_zero',
  '/fature-4000-com-unhas-em-2025',
  '/curso_nail_design_do_zero_ao_profissional_mariana_nails',
  '/obrigado',
  '/cutilagem-avancada',
  '/cutilagem',
  '/obrigado-cutilagem',
  '/links',
  '/curso-nail-designer-barueri-presencial-mariananails-',
  '/cfr',
  '/obrigado-cfr',
]);

export default function LayoutChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '';
  const isLandingPage = pathname === '/landing';
  const isPlataformaPage = pathname.startsWith('/plataforma');
  const isObrigadoPage = pathname === '/obrigado';
  const isHome = pathname === '/';
  const isIsolatedNoChrome = ISOLATED_EXACT_ROUTES.has(pathname) || isPlataformaPage;
  const hideFooterAndWhatsapp = isIsolatedNoChrome && !isLandingPage;

  return (
    <>
      {/* DataLayer Push - Purchase Event (somente /obrigado) */}
      {isObrigadoPage && (
        <Script
          id="purchase-event-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'purchase',
                value: 43.02,
                currency: 'BRL',
                transaction_id: Date.now() + '-' + Math.random()
              });
            `,
          }}
        />
      )}

      {!isIsolatedNoChrome && <Navbar />}

      <main
        className={`flex-grow relative z-10 ${
          isIsolatedNoChrome ? '' : isHome ? 'pt-0' : 'pt-14'
        }`}
      >
        {children}
      </main>

      {!hideFooterAndWhatsapp && <Footer />}
      {!hideFooterAndWhatsapp && <WhatsAppButton />}
    </>
  );
}
