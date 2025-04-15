'use client';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className} style={{ backgroundColor: 'black', color: 'white' }}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Erro crítico</h2>
            <button
              onClick={() => reset()}
              className="px-4 py-2 rounded bg-white/20 hover:bg-white/30 transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 