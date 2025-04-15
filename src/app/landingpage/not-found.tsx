export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
        <p className="mb-6">A página que você está procurando não existe.</p>
        <a href="/" className="px-4 py-2 rounded bg-white/20 hover:bg-white/30 transition-colors">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
} 