import Script from 'next/script';
import {
  PT_Sans,
  Playfair_Display,
  Instrument_Serif,
  Instrument_Sans,
  Montserrat,
  Poppins,
  Lora,
} from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import LayoutChrome from '@/components/LayoutChrome';

const funnelSans = localFont({
  src: [
    {
      path: './fonts/FunnelSans-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './fonts/FunnelSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-funnel',
  display: 'swap',
  preload: false,
});

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  preload: false,
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
  preload: false,
});

// Fontes para a landing page de Cutilagem
const montserrat = Montserrat({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${funnelSans.variable} ${ptSans.variable} ${playfair.variable} ${instrumentSerif.variable} ${instrumentSans.variable} ${montserrat.variable} ${poppins.variable} ${lora.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://pay.hub.la" />
        <link rel="dns-prefetch" href="https://pay.hub.la" />
        <link rel="preconnect" href="https://s.mariananails.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://s.mariananails.com.br" />
      </head>
      <body className="min-h-screen bg-[#0a0a0a]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://s.mariananails.com.br/ns.html?id=GTM-PDD4HPT8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <LayoutChrome>{children}</LayoutChrome>

        {/* Inicialização leve e imediata do dataLayer (não bloqueia renderização) */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              var testEventCode = null;
              try {
                var match = window.location.search.match(/[?&]test_event_code=([^&]+)/);
                if (match) {
                  testEventCode = decodeURIComponent(match[1]);
                  sessionStorage.setItem('test_event_code', testEventCode);
                } else {
                  testEventCode = sessionStorage.getItem('test_event_code');
                }
              } catch (e) {}

              var gtmInitObj = {
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              };
              if (testEventCode) {
                gtmInitObj.test_event_code = testEventCode;
              }
              window.dataLayer.push(gtmInitObj);
            `,
          }}
        />

        {/* Google Tag Manager (Stape Custom Loader) - adiado para não impactar LCP/TBT */}
        <Script
          id="gtm-script"
          src="https://s.mariananails.com.br/3iaeewkrfsnp.js?7=GQpOISYmWjU0KkcuIj9PQwZTQUhDTRMLTQMSFBsKGQQeDxoKAUUUCh1AERQ%3D"
          strategy="lazyOnload"
        />

        {/* Google tag (gtag.js) - GA4 (fila dataLayer imediata, script carregado após load) */}
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D92MV0VYXM', {
                transport_url: 'https://s.mariananails.com.br/',
                first_party_collection: true
              });
            `,
          }}
        />
        <Script
          id="ga4-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-D92MV0VYXM"
          strategy="lazyOnload"
        />

        {/* Hotjar / Contentsquare Tracking - carregado somente em idle pós-load para evitar TBT */}
        <Script
          id="contentsquare-script"
          src="https://t.contentsquare.net/uxa/8736e3ed49401.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
