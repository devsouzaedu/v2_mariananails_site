import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Se a rota contém landingpage, vamos garantir que os componentes da aplicação principal não sejam carregados
  if (pathname.includes('/landingpage')) {
    // Não precisamos modificar a resposta, apenas deixar passar
    // O importante é garantir que os componentes do layout raiz não sejam aplicados
    const response = NextResponse.next();
    
    // Adicionamos cabeçalhos para ajudar a isolar ainda mais
    response.headers.set('x-middleware-cache', 'no-cache');
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    
    return response;
  }

  return NextResponse.next();
}

// Configurar o middleware para ser executado apenas nas rotas landingpage
export const config = {
  matcher: ['/landingpage/:path*'],
}; 