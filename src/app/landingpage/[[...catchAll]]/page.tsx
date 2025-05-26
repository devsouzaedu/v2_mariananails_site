import { redirect } from 'next/navigation';

// Esta pu00e1gina captura qualquer rota dentro de /landingpage e redireciona para a landing page principal
// Isso ajuda a foru00e7ar o uso do layout isolado
export default function CatchAllPage() {
  // Redirecionando para a landing page principal
  redirect('/landingpage');

  // Este retorno nunca u00e9 executado por causa do redirecionamento acima
  return null;
}
