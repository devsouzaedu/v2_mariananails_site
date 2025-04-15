'use client';

// template.tsx serve como uma camada adicional para garantir o isolamento do layout
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
} 