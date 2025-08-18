"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';

// Declaração global para o Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

export default function EbookGuiado() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Função para tracking de evento de download
  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Meta Pixel - Evento Lead (Download) disparado');
      window.fbq('track', 'Lead', {
        content_name: 'Caminhe com Direção O Poder de ser Guiada por um Método - Mariana Nails',
        content_category: 'Ebook',
        content_ids: ['ebook-caminhe-com-direcao-2025'],
        value: 0.00, // Gratuito
        currency: 'BRL'
      });
    }
  };

  // Função para download do ebook
  const handleDownload = async () => {
    setIsDownloading(true);
    handleDownloadClick();
    
    try {
      // Método mais forçado para download que funciona melhor no Safari
      const response = await fetch('/Caminhe com Direção O Poder de ser Guiada por um Metodo Por Mariana Nails.pdf');
      const blob = await response.blob();
      
      // Criar URL do blob
      const url = window.URL.createObjectURL(blob);
      
      // Criar link temporário para download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Caminhe com Direção O Poder de ser Guiada por um Metodo Por Mariana Nails.pdf';
      link.style.display = 'none';
      
      // Adicionar ao DOM, clicar e remover
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Limpar URL do blob
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
      // Fallback para método tradicional
      const link = document.createElement('a');
      link.href = '/Caminhe com Direção O Poder de ser Guiada por um Metodo Por Mariana Nails.pdf';
      link.download = 'Caminhe com Direção O Poder de ser Guiada por um Metodo Por Mariana Nails.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    // Resetar o estado após um breve delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      {/* Meta Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '734205242727008');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=734205242727008&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Conteúdo Principal Centralizado */}
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#ffcd10] leading-tight">
          Caminhe com Direção<br/>
          O Poder de ser Guiada<br/>
          por um Método
        </h1>
        
        {/* Imagem da Capa */}
        <div className="flex justify-center">
          <div className="relative w-64 h-80 md:w-72 md:h-[420px] rounded-lg overflow-hidden shadow-2xl border-4 border-[#ffcd10]">
            <Image 
              src="/Capa_Caminhe com Direção O Poder de ser Guiada por um Metodo Por Mariana Nails.png" 
              alt="Capa do Ebook Caminhe com Direção O Poder de ser Guiada por um Método - Mariana Nails" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
              quality={85}
            />
          </div>
        </div>
        
        {/* Botão de Download */}
        <div>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`
              bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full 
              text-lg md:text-xl shadow-xl transition-all duration-300 transform hover:scale-105 
              disabled:opacity-50 disabled:cursor-not-allowed border-2 border-black
              ${isDownloading ? 'animate-pulse' : 'animate-bounce'}
            `}
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            {isDownloading ? (
              <div className="flex items-center space-x-3">
                <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Baixando...</span>
              </div>
            ) : (
              'BAIXE AQUI'
            )}
          </button>
        </div>
        
        {/* Assinatura */}
        <p className="text-sm text-[#E4B7B2] opacity-80">
          Por Mariana Nails
        </p>
      </div>
    </div>
  );
}
