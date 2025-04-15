import { redirect } from 'next/navigation';

// Esta é uma page que não será usada diretamente, mas ajuda a manter o isolamento
export default function DisabledPage() {
  // Redirecionar para a landing page correta
  redirect('/landingpage');
  
  // O código abaixo nunca será executado devido ao redirecionamento
  return null;
} 