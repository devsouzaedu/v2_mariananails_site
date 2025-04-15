// Esse layout aninhado com rota catchAll ajuda a isolar ainda mais do layout raiz
export default function CatchAllLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
} 