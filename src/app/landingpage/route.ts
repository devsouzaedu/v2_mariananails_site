import { NextResponse } from 'next/server';

// Essa rota ajuda a garantir que o Next.js trate essa URL de forma independente
export async function GET() {
  return NextResponse.next();
}

// Também podemos adicionar outros métodos HTTP se necessário
export async function HEAD() {
  return NextResponse.next();
} 