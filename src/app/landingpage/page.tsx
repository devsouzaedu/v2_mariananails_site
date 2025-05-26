'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Esta pu00e1gina simplesmente redireciona para a nova rota /landing
export default function LandingpageRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirecionar para a nova rota /landing
    router.replace('/landing');
  }, [router]);

  // Tela de carregamento enquanto redireciona
  return <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}></div>;
}
