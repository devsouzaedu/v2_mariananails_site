'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ocorreu um erro</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
} 