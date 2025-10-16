import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
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

  // Atualizar sessão do Supabase para rotas da plataforma
  if (pathname.startsWith('/plataforma')) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

// Configurar o middleware para ser executado nas rotas landingpage e plataforma
export const config = {
  matcher: ['/landingpage/:path*', '/plataforma/:path*'],
}; 