/** @type {import('next').NextConfig} */

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://tagassistant.google.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://s.mariananails.com.br https://connect.facebook.net https://t.contentsquare.net;
  script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://tagassistant.google.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://s.mariananails.com.br https://connect.facebook.net https://t.contentsquare.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://tagassistant.google.com https://s.mariananails.com.br https://www.facebook.com https://*.facebook.com https://www.google.com https://www.google.com.br;
  font-src 'self' data:;
  connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://tagassistant.google.com https://s.mariananails.com.br https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://t.contentsquare.net https://*.contentsquare.net https://*.supabase.co wss://*.supabase.co;
  frame-src 'self' https://www.googletagmanager.com https://tagassistant.google.com https://s.mariananails.com.br https://www.youtube.com https://pay.hub.la;
  frame-ancestors 'self' https://tagassistant.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuração para permitir páginas independentes do layout principal
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  async headers() {
    return [
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