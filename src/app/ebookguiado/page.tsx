"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';

// Declaração global para o Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

// Hook para animações por scroll
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observar todos os elementos com classe de animação
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (element: Element) => visibleElements.has(element);
  
  return { isVisible, observerRef };
};

// Função para gerar data dinâmica
const getDynamicDate = () => {
  const hoje = new Date();
  const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  const diaSemana = diasSemana[hoje.getDay()];
  const dia = hoje.getDate();
  const mes = meses[hoje.getMonth()];
  const ano = hoje.getFullYear();
  
  return { diaSemana, dia, mes, ano };
};

// Estilos de animação inline
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(60px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .scroll-animate {
    opacity: 0;
    transition: all 0.8s ease-out;
  }
  
  .scroll-animate.visible {
    opacity: 1;
  }
  
  .animate-fadeIn.visible {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slideInUp.visible {
    animation: slideInUp 1s ease-out forwards;
  }
  
  .animate-slideInLeft.visible {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .animate-slideInRight.visible {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .animate-scaleIn.visible {
    animation: scaleIn 0.6s ease-out forwards;
  }
  
  .animate-fadeInStagger.visible > * {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-fadeInStagger.visible > *:nth-child(1) { animation-delay: 0.1s; }
  .animate-fadeInStagger.visible > *:nth-child(2) { animation-delay: 0.2s; }
  .animate-fadeInStagger.visible > *:nth-child(3) { animation-delay: 0.3s; }
  .animate-fadeInStagger.visible > *:nth-child(4) { animation-delay: 0.4s; }
  .animate-fadeInStagger.visible > *:nth-child(5) { animation-delay: 0.5s; }
  .animate-fadeInStagger.visible > *:nth-child(6) { animation-delay: 0.6s; }
  .animate-fadeInStagger.visible > *:nth-child(7) { animation-delay: 0.7s; }
  .animate-fadeInStagger.visible > *:nth-child(8) { animation-delay: 0.8s; }
`;

export default function EbookGuiado() {
  // Estados para fallback dos ícones
  const [iconBookError, setIconBookError] = useState(false);
  const [iconDownloadError, setIconDownloadError] = useState(false);
  const [iconGiftError, setIconGiftError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Hook para animações por scroll
  const { isVisible } = useScrollAnimation();
  
  // Data dinâmica
  const { diaSemana, dia, mes, ano } = getDynamicDate();
  
  // Efeito para re-observar elementos após renderização
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold: 0.1, rootMargin: '50px' }
        );
        observer.observe(el);
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Função para tracking de evento de download
  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Meta Pixel - Evento Lead (Download) disparado');
      window.fbq('track', 'Lead', {
        content_name: 'Ebook MÉTODO Guiado - Mariana Nails 2025',
        content_category: 'Ebook',
        content_ids: ['ebook-metodo-guiado-2025'],
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
      const response = await fetch('/Ebook MÉTODO guiado, Por Mariana Nails 2025.pdf');
      const blob = await response.blob();
      
      // Criar URL do blob
      const url = window.URL.createObjectURL(blob);
      
      // Criar link temporário para download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ebook MÉTODO guiado, Por Mariana Nails 2025.pdf';
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
      link.href = '/Ebook MÉTODO guiado, Por Mariana Nails 2025.pdf';
      link.download = 'Ebook MÉTODO guiado, Por Mariana Nails 2025.pdf';
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
    <div className="min-h-screen bg-black text-gray-800">
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
      
      {/* Estilos de Animação */}
      <style jsx>{animationStyles}</style>
      
      {/* Banner Promocional Dinâmico */}
      <div className="bg-black text-white text-center py-3 px-4 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm md:text-base font-bold animate-pulse text-white" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
            📚 Ebook GRATUITO! {diaSemana}, {dia} de {mes} de {ano} - 
            <span className="text-yellow-300"> Download 100% grátis do MÉTODO Guiado!</span>
          </p>
        </div>
      </div>

      {/* Cabeçalho Principal - Fundo Preto, Letras Amarelas */}
      <header className="bg-black text-[#ffcd10] py-12 px-6 text-center">
        {/* Imagem de Capa do Ebook */}
        <div className="flex justify-center mb-8 scroll-animate animate-scaleIn" data-animate>
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-[#ffcd10]">
            <Image 
              src="/capa_ebook_2025.png" 
              alt="Capa do Ebook MÉTODO Guiado - Mariana Nails 2025" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
              quality={85}
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
          Ebook MÉTODO Guiado<br/>Por Mariana Nails 2025
        </h1>
        <p className="text-base md:text-lg font-light max-w-3xl mx-auto text-[#ffcd10] mb-6 scroll-animate animate-slideInUp" data-animate>
          Transforme sua paixão por unhas em uma carreira lucrativa com nosso método exclusivo e comprovado. Download 100% gratuito!
        </p>
        
        {/* Botão de Download Principal */}
        <div className="scroll-animate animate-slideInUp" data-animate>
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
              '📚 BAIXAR EBOOK GRATUITO'
            )}
          </button>
        </div>
      </header>

      {/* Seção de Benefícios do Ebook - Fundo Preto, Cores Rosé */}
      <section className="py-6 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 scroll-animate animate-fadeIn" style={{ color: '#E4B7B2' }} data-animate>
            O Que Você Vai Descobrir no Ebook MÉTODO Guiado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate animate-fadeInStagger" data-animate>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconBookError ? (
                <span style={{ fontSize: '2rem' }}>📖</span>
              ) : (
                <img
                  src="/images/icon-book.svg"
                  alt="Método Comprovado"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconBookError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Método Exclusivo</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Descubra o método comprovado que já transformou centenas de vidas e criou nail designers de sucesso.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconDownloadError ? (
                <span style={{ fontSize: '2rem' }}>⬇️</span>
              ) : (
                <img
                  src="/images/icon-download.svg"
                  alt="Download Gratuito"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconDownloadError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>100% Gratuito</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Material exclusivo sem custos, preparado especialmente para quem quer começar na área de nail design.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconGiftError ? (
                <span style={{ fontSize: '2rem' }}>🎁</span>
              ) : (
                <img
                  src="/images/icon-gift.svg"
                  alt="Conteúdo Exclusivo"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconGiftError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Conteúdo Exclusivo</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Dicas valiosas, segredos profissionais e estratégias que só quem já está no mercado conhece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que o Ebook Contém - Fundo Preto, Letras Rosé */}
      <section className="py-6 px-6 bg-black text-[#E4B7B2]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#E4B7B2] scroll-animate animate-slideInLeft" data-animate>
            Conteúdo Completo do Ebook MÉTODO Guiado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left scroll-animate animate-slideInUp" data-animate>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-[#ffcd10] transform hover:scale-105 transition-all duration-300 scroll-animate animate-slideInUp" data-animate>
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">📋</span>
                <h3 className="text-xl font-bold text-[#ffcd10]">Primeiros Passos</h3>
              </div>
              <ul className="text-[#ffcd10] space-y-2 text-sm">
                <li className="flex items-start"><span className="text-lg mr-2">🎯</span>Como definir seu público-alvo ideal</li>
                <li className="flex items-start"><span className="text-lg mr-2">📊</span>Análise de mercado e oportunidades</li>
                <li className="flex items-start"><span className="text-lg mr-2">💡</span>Identificando seu diferencial competitivo</li>
                <li className="flex items-start"><span className="text-lg mr-2">📈</span>Estratégias de posicionamento profissional</li>
                <li className="flex items-start"><span className="text-lg mr-2">🎨</span>Desenvolvendo sua identidade visual</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-[#ffcd10] transform hover:scale-105 transition-all duration-300 scroll-animate animate-slideInUp" data-animate>
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">💰</span>
                <h3 className="text-xl font-bold text-[#ffcd10]">Estratégias de Faturamento</h3>
              </div>
              <ul className="text-[#ffcd10] space-y-2 text-sm">
                <li className="flex items-start"><span className="text-lg mr-2">💲</span>Como precificar seus serviços corretamente</li>
                <li className="flex items-start"><span className="text-lg mr-2">📞</span>Técnicas de captação de clientes</li>
                <li className="flex items-start"><span className="text-lg mr-2">🔄</span>Fidelização e retenção de clientela</li>
                <li className="flex items-start"><span className="text-lg mr-2">📱</span>Marketing digital para nail designers</li>
                <li className="flex items-start"><span className="text-lg mr-2">⏰</span>Organização de agenda e produtividade</li>
              </ul>
            </div>
          </div>
          
          {/* Botão CTA Após Conteúdo */}
          <div className="text-center mt-8">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`
                bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full 
                text-lg shadow-xl transition-all duration-300 transform hover:scale-105 
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isDownloading ? 'animate-pulse' : 'animate-bounce'}
              `}
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              {isDownloading ? '⏳ Baixando...' : '📚 BAIXAR EBOOK AGORA'}
            </button>
          </div>
        </div>
      </section>

      {/* Seção É Perfeito Para Você */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-6 scroll-animate animate-fadeIn" data-animate>
            Este Ebook É Perfeito Para Você Que:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left scroll-animate animate-fadeInStagger" data-animate>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer começar na área de nail design mas não sabe por onde começar.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Já trabalha com unhas mas quer profissionalizar e aumentar o faturamento.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Busca independência financeira trabalhando com algo que ama.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer aprender estratégias comprovadas de profissionais de sucesso.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Deseja conhecer o mercado antes de investir em cursos pagos.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Procura dicas práticas para organizar melhor seu negócio.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer descobrir os segredos de quem já fatura +R$4.000/mês.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Está em busca de uma nova profissão promissora e lucrativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Por Que é Gratuito */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-4 scroll-animate animate-slideInRight" data-animate>
            Por Que Estamos Disponibilizando Este Ebook Gratuitamente?
          </h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-[#ffcd10] mb-6">
            <p className="text-white text-lg leading-relaxed mb-4">
              Acreditamos que <strong className="text-[#ffcd10]">informação de qualidade</strong> deve ser acessível a todas que sonham em transformar suas vidas através do nail design.
            </p>
            <p className="text-[#ffcd10] text-xl font-bold">
              Nossa missão é <span className="text-2xl">empoderar mulheres</span> e mostrar que é possível conquistar independência financeira fazendo o que se ama.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900 p-4 rounded-lg border border-[#ffcd10]">
              <span className="text-4xl block mb-2">💎</span>
              <p className="text-white text-sm font-bold">Conteúdo Premium</p>
              <p className="text-[#ffcd10] text-xs">100% Gratuito</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-[#ffcd10]">
              <span className="text-4xl block mb-2">🎯</span>
              <p className="text-white text-sm font-bold">Resultados Comprovados</p>
              <p className="text-[#ffcd10] text-xs">Método Testado</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-[#ffcd10]">
              <span className="text-4xl block mb-2">❤️</span>
              <p className="text-white text-sm font-bold">Nossa Missão</p>
              <p className="text-[#ffcd10] text-xs">Transformar Vidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final com Benefícios */}
      <section className="py-8 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffcd10] mb-4">
            Transforme Sua Vida Hoje Mesmo - É 100% Gratuito!
          </h2>
          
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-[#ffcd10] mb-4">O que você vai receber gratuitamente:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-white">
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">📚</span> Ebook completo em PDF</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">💎</span> Método exclusivo Mariana Nails</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">🎯</span> Estratégias de faturamento</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">📱</span> Dicas de marketing digital</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">💰</span> Como precificar serviços</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">🔥</span> Segredos profissionais</div>
            </div>
          </div>

          <div className="mb-6">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`
                bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full 
                text-lg md:text-xl uppercase transition-all duration-300 transform hover:scale-105 
                shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                ${isDownloading ? 'animate-pulse' : 'animate-bounce'}
              `}
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              {isDownloading ? '⏳ Baixando...' : '📚 BAIXAR EBOOK GRATUITO AGORA!'}
            </button>
          </div>
          
          <div className="text-white text-sm opacity-80 space-y-1">
            <p>✨ Download 100% gratuito</p>
            <p>📖 Formato PDF - Leia offline</p>
            <p>💎 Conteúdo exclusivo Mariana Nails</p>
            <p>🔒 Sem pegadinhas ou custos ocultos</p>
          </div>
        </div>
      </section>

      {/* Rodapé - Fundo Preto */}
      <footer className="bg-black text-white py-3 px-6 text-center">
        <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>

      {/* Botão Flutuante */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm">
        <div className="bg-black/90 backdrop-blur-sm border border-[#ffcd10]/60 rounded-2xl p-4 shadow-2xl space-y-3">
          {/* Botão Baixar Ebook */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`
              w-full bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full 
              text-base shadow-xl transition-all duration-300 transform hover:scale-105 
              border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed
              ${isDownloading ? 'animate-pulse' : 'animate-bounce'}
            `}
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            {isDownloading ? '⏳ Baixando...' : '📚 BAIXAR EBOOK GRÁTIS'}
          </button>
          
          {/* Texto Compacto */}
          <div className="text-center">
            <p className="text-white font-medium text-xs leading-tight">
              <span className="text-[#ffcd10]">✓</span> Download 100% gratuito - Acesso imediato
            </p>
            <p className="text-white font-medium text-xs leading-tight">
              <span className="text-[#ffcd10]">✓</span> Conteúdo exclusivo Mariana Nails 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
