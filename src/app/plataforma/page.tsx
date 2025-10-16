import { redirect } from 'next/navigation'

export default function PlataformaPage() {
  // Redirecionar para o dashboard (o middleware vai redirecionar para login se não autenticado)
  redirect('/plataforma/dashboard')
}

