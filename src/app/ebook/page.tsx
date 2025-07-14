"use client";

import { useState } from 'react';

export default function EbookPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Criar um link temporário para download
    const link = document.createElement('a');
    link.href = '/Guia de ouro da Nail Designer Profissional.pdf';
    link.download = 'Guia de ouro da Nail Designer Profissional.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Resetar o estado após um breve delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-white mb-6">
            Guia de Ouro da Nail Designer Profissional
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            Preparamos um ebook exclusivo com dicas valiosas para você. Clique no botão abaixo para fazer o download gratuito.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`
              bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg 
              text-lg transition-all duration-200 transform hover:scale-105 
              shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
              ${isDownloading ? 'animate-pulse' : ''}
            `}
          >
            {isDownloading ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Baixando...</span>
              </div>
            ) : (
              'Baixar Ebook'
            )}
          </button>
        </div>
        
        <div className="text-white text-sm opacity-80 mt-6">
          <p>✨ Download 100% gratuito</p>
          <p>📖 Formato PDF</p>
          <p>💎 Conteúdo exclusivo</p>
        </div>
      </div>
    </div>
  );
} 