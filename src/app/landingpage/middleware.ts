import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Este middleware intercepta todas as requisiu00e7u00f5es para /landingpage
// e foru00e7a o uso do layout isolado, sem depender do layout principal
export function middleware(request: NextRequest) {
  // Adiciona headers para foru00e7ar o isolamento da pu00e1gina
  const headers = new Headers(request.headers);
  headers.set('x-middleware-override-layout', 'true');
  
  // Retorna a mesma URL mas com os headers modificados
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

// Este middleware su00f3 se aplica u00e0 rota /landingpage
export const config = {
  matcher: '/landingpage',
};
