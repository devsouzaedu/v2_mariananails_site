/** @type {import('next').NextConfig} */

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: data: https://www.googletagmanager.com https://*.googletagmanager.com https://tagassistant.google.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://s.mariananails.com.br https://connect.facebook.net https://*.facebook.com https://*.doubleclick.net https://*.googleadservices.com https://*.google.com https://*.google.com.br https://t.contentsquare.net https://*.contentsquare.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.googletagmanager.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://tagassistant.google.com https://s.mariananails.com.br https://www.facebook.com https://*.facebook.com https://*.fbcdn.net https://*.doubleclick.net https://*.googleadservices.com https://*.google.com https://*.google.com.br;
  font-src 'self' data:;
  connect-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://tagassistant.google.com https://s.mariananails.com.br https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://*.run.app https://*.a.run.app https://*.on.aws https://*.amazonaws.com https://*.doubleclick.net https://*.googleadservices.com https://*.google.com https://*.google.com.br https://t.contentsquare.net https://*.contentsquare.net https://*.supabase.co wss://*.supabase.co;
  frame-src 'self' https://www.googletagmanager.com https://tagassistant.google.com https://s.mariananails.com.br https://www.facebook.com https://*.facebook.com https://*.doubleclick.net https://www.youtube.com https://pay.hub.la;
  worker-src 'self' blob:;
  child-src 'self' blob: https://www.googletagmanager.com https://tagassistant.google.com https://s.mariananails.com.br https://www.facebook.com https://*.facebook.com https://*.doubleclick.net https://www.youtube.com https://pay.hub.la;
  frame-ancestors 'self' https://tagassistant.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://www.facebook.com https://*.facebook.com https://s.mariananails.com.br https://pay.hub.la;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [480, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuração para permitir páginas independentes do layout principal
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  async headers() {
    return [
      {
        source: '/images/mca/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig; 