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

// Componente para imagens otimizadas com WebP e fallback para JPEG
interface OptimizedImageProps {
  src: string; // Caminho da imagem sem extensão
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  width,
  height 
}) => {
  const [imageError, setImageError] = useState(false);
  const [webpSupported, setWebpSupported] = useState<boolean | null>(null);

  // Verificar suporte a WebP
  useEffect(() => {
    const checkWebPSupport = () => {
      if (typeof window !== 'undefined') {
        const webP = new window.Image();
        webP.onload = webP.onerror = () => {
          setWebpSupported(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      }
    };
    
    checkWebPSupport();
  }, []);

  // Determinar qual formato de imagem usar
  const getImageSrc = () => {
    if (webpSupported === null) return src; // Ainda verificando suporte
    
    if (webpSupported && !imageError) {
      // Tentar WebP primeiro se suportado e não houve erro
      return src.replace(/\.(jpg|jpeg|JPG|JPEG)$/i, '.webp');
    } else {
      // Fallback para JPEG original
      return src;
    }
  };

  const handleImageError = () => {
    if (!imageError && webpSupported) {
      // Se erro com WebP, tentar JPEG
      setImageError(true);
    }
  };

  if (webpSupported === null) {
    // Loading placeholder enquanto verifica suporte WebP
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`} style={{ width, height }}>
        <div className="h-full w-full bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <img
      src={getImageSrc()}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleImageError}
      width={width}
      height={height}
    />
  );
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

export default function Fature4000ComUnhasEm2025() {
  // Estados para fallback dos ícones
  const [iconGrowthError, setIconGrowthError] = useState(false);
  const [iconMoneyError, setIconMoneyError] = useState(false);
  const [iconCertificateError, setIconCertificateError] = useState(false);
  
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
  
  // Função para tracking de evento de checkout
  const handleCheckoutClick = (buttonLocation: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Meta Pixel - Evento InitiateCheckout disparado:', buttonLocation);
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Curso Mariana Nails - Fature +R$4000/Mês',
        content_category: 'Course',
        content_ids: ['curso-mariana-nails-2025'],
        currency: 'BRL',
        value: 19.90,
        button_location: buttonLocation
      });
    } else {
      console.log('Meta Pixel não carregado ainda ou window.fbq não disponível');
    }
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
            ⚠️ Atenção! {diaSemana}, {dia} de {mes} de {ano} é o 
            <span className="text-yellow-300"> último dia com valor promocional!</span>
          </p>
        </div>
      </div>
      {/* Preload de recursos críticos */}
      <link rel="preload" as="image" href="/images/mariana_nails_rota_curso_topo2.webp" />
      <link rel="preload" as="image" href="/images/thumb_unhas_mariana_nails_curso (1).webp" />
      <link rel="preload" as="image" href="/images/thumb_unhas_mariana_nails_curso (2).webp" />
      <link rel="preload" as="image" href="/images/thumb_unhas_mariana_nails_curso (3).webp" />
      <link rel="preload" as="image" href="/images/thumb_unhas_mariana_nails_curso (4).webp" />
      
      {/* Imagem de Topo */}
      <div className="relative w-full h-auto">
        <Image 
          src="/images/mariana_nails_rota_curso_topo2.webp"
          alt="Mariana Nails - Fature R$4000 com Unhas em 2025"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Cabeçalho Principal - Fundo Preto, Letras Amarelas */}
      <header className="bg-black text-[#ffcd10] py-6 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-[#ffcd10] scroll-animate animate-fadeIn" data-animate> {/* Amarelo */}
          Torne-se uma Nail Designer de Sucesso e Fature <br className="hidden md:inline"/> +R$4.000 por Mês em 2025 com Mariana Nails!
        </h1>
        <p className="text-base md:text-lg font-light max-w-3xl mx-auto text-[#ffcd10] mb-1 scroll-animate animate-slideInUp" data-animate>
          Conquiste sua independência financeira, seja sua própria chefe e transforme sua paixão por unhas em uma carreira lucrativa e valorizada no mercado da beleza!
        </p>
      </header>

      {/* Seção de Benefícios - Fundo Preto, Cores Rosé */}
      <section className="py-6 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 scroll-animate animate-fadeIn" style={{ color: '#E4B7B2' }} data-animate>
            Por Que Escolher o Curso Mariana Nails?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate animate-fadeInStagger" data-animate>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconGrowthError ? (
                <span style={{ fontSize: '2rem' }}>📈</span>
              ) : (
                <img
                  src="/images/icon-growth.svg"
                  alt="Crescimento Profissional"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconGrowthError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Do Zero ao Avançado</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Mesmo sem experiência, você aprenderá todas as técnicas para se tornar uma Nail Designer completa e confiante.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconMoneyError ? (
                <span style={{ fontSize: '2rem' }}>💰</span>
              ) : (
                <img
                  src="/images/icon-money.svg"
                  alt="Alta Renda"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconMoneyError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Fature +R$4.000/Mês</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Descubra como transformar suas habilidades em uma fonte de renda sólida e lucrativa, alcançando sua independência financeira.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center transform hover:scale-105 scroll-animate animate-scaleIn" style={{ backgroundColor: '#000000', border: '1px solid #B76E79' }} data-animate>
              {iconCertificateError ? (
                <span style={{ fontSize: '2rem' }}>🎓</span>
              ) : (
                <img
                  src="/images/icon-certificate.svg"
                  alt="Certificação Profissional"
                  className="h-16 w-16 mb-2"
                  onError={() => setIconCertificateError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Certificação Internacional</h3>
              <p className="text-sm" style={{ color: '#F9F1F0' }}>
                Receba 3 certificados internacionais que validarão suas habilidades e abrirão portas no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que o Curso Oferece - Fundo Preto, Letras Rosé */}
      <section className="py-6 px-6 bg-black text-[#E4B7B2]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#E4B7B2] scroll-animate animate-slideInLeft" data-animate>
            O Que Você Vai Aprender no Curso Mariana Nails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left scroll-animate animate-slideInUp" data-animate>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-[#ffcd10] transform hover:scale-105 transition-all duration-300 scroll-animate animate-slideInUp" data-animate>
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">📚</span>
                <h3 className="text-xl font-bold text-[#ffcd10]">Módulos Completos e Didáticos</h3>
              </div>
              <ul className="text-[#ffcd10] space-y-2 text-sm">
                <li className="flex items-start"><span className="text-lg mr-2">🎥</span>+ de 30 aulas em videoaula, passo a passo, pensadas para iniciantes.</li>
                <li className="flex items-start"><span className="text-lg mr-2">💎</span>Técnicas de alongamento na fibra de vidro com controle de produtos.</li>
                <li className="flex items-start"><span className="text-lg mr-2">✂️</span>Cutilagem, esmaltação em gel.</li>
                <li className="flex items-start"><span className="text-lg mr-2">🎨</span>Decoração 3D com gel sólido.</li>
                <li className="flex items-start"><span className="text-lg mr-2">✨</span>Decorações com esfumado, baby color, baby boomer.</li>
                <li className="flex items-start"><span className="text-lg mr-2">🔧</span>Remoção segura e manutenção.</li>
                <li className="flex items-start"><span className="text-lg mr-2">📈</span>Marketing para Nail Designers: Como atrair clientes e precificar seus serviços.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-[#ffcd10] transform hover:scale-105 transition-all duration-300 scroll-animate animate-slideInUp" data-animate>
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">⭐</span>
                <h3 className="text-xl font-bold text-[#ffcd10]">Diferenciais Exclusivos</h3>
              </div>
              <ul className="text-[#ffcd10] space-y-2 text-sm">
                <li className="flex items-start"><span className="text-lg mr-2">🏆</span>3 Certificados Internacionais reconhecidos no mercado.</li>
                <li className="flex items-start"><span className="text-lg mr-2">💬</span>Grupo exclusivo no WhatsApp com mais de 200 alunas ativas.</li>
                <li className="flex items-start"><span className="text-lg mr-2">🕒</span>Suporte 24 horas para tirar todas suas dúvidas.</li>
                <li className="flex items-start"><span className="text-lg mr-2">👩‍🏫</span>Contato direto com a Mariana para mentoria personalizada.</li>
                <li className="flex items-start"><span className="text-lg mr-2">🤝</span>Comunidade exclusiva para networking e troca de experiências.</li>
                <li className="flex items-start"><span className="text-lg mr-2">📄</span>Material de apoio em PDF para download.</li>
                <li className="flex items-start"><span className="text-lg mr-2">💯</span>Satisfação completa ou seu dinheiro de volta.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção É Perfeita Para Você */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-6 scroll-animate animate-fadeIn" data-animate>
            É Perfeita Para Você Que:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left scroll-animate animate-fadeInStagger" data-animate>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Já é manicure e deseja aprimorar suas habilidades para oferecer os serviços mais modernos do mercado.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Está começando e quer aprender técnicas avançadas para ter um diferencial competitivo desde o início.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Já fez cursos anteriormente, mas ainda não se sente pronta para atender clientes de forma profissional.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer aprender do zero e fazer parte do mundo das unhas, seja para ter uma renda extra ou transformar sua vida com uma nova profissão.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer ter mais dinheiro para dar o melhor para sua família.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer um passo a passo detalhado com tudo que precisa.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer lotar sua agenda de clientes satisfeitas.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer entregar um trabalho de excelência.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer viver das unhas.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer descobrir os segredos que me tornaram valorizada e reconhecida.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-sm">Quer conseguir muitas clientes fiéis e ganhar de R$ 5.000 a R$ 10.000 por mês.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botão CTA Após "Perfeita Para Você" */}
        <div className="text-center mt-6">
          <a 
            href="https://pay.kiwify.com.br/lf9IZHj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-block animate-bounce"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            onClick={() => handleCheckoutClick('after-perfeita-para-voce')}
          >
            🎯 GARANTIR MINHA VAGA
          </a>
        </div>
      </section>

      {/* Seção Não Precisa de Faculdade */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-4 scroll-animate animate-slideInRight" data-animate>
            Você Não Precisa de Uma Faculdade Cara Para Ganhar 10 Mil Por Mês!
          </h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-[#ffcd10] mb-6">
            <p className="text-white text-lg leading-relaxed mb-4">
              Um ensino de alta qualidade por um investimento <strong className="text-[#ffcd10]">100 vezes menor</strong> que o ensino superior tradicional, além de habilidades para exercer a sua profissão com confiança e segurança.
            </p>
            <p className="text-[#ffcd10] text-xl font-bold">
              É assim que você vai se tornar uma profissional reconhecida, que ganha de <span className="text-2xl">R$ 5.000 a R$ 10.000 reais por mês</span>, atuando em um mercado em constante crescimento.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <span className="text-4xl block mb-2">🎓</span>
              <p className="text-white text-sm">Faculdade Tradicional</p>
              <p className="text-red-500 font-bold">R$ 200.000+</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">VS</span>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">💎</span>
              <p className="text-white text-sm">Curso Mariana Nails</p>
              <p className="text-[#ffcd10] font-bold text-xl">R$ 20,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Certificados */}
      <section className="py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
            🏆 Certificados Reconhecidos Internacionalmente
          </h2>
          <p className="text-white mb-8 text-lg scroll-animate animate-slideInUp" data-animate>
            Comprove sua qualificação com certificados que demonstram sua expertise profissional
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 scroll-animate animate-fadeInStagger" data-animate>
            <div className="scroll-animate animate-scaleIn" data-animate>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-[#ffcd10] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/certificado_1.png"
                  alt="Certificado Módulo 1 - Curso Completo Nail Design"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHBktH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AJt7AWCKSgKTJMoLJ4mQUo3KNyqiJ5H31m5OBpjZiU8I8TJyqLKUZ5nQQkIXbHCUAYAUAPyP/9k="
                  quality={85}
                />
              </div>
              <p className="text-[#ffcd10] font-bold mt-4 text-lg">Módulo 1 - Técnicas Fundamentais</p>
              <p className="text-white text-sm mt-2">Certificação em técnicas básicas e intermediárias de nail design</p>
            </div>
            
            <div className="scroll-animate animate-scaleIn" data-animate>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-[#ffcd10] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/certificado_2.png"
                  alt="Certificado Módulo 2 - Curso Completo Nail Design"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHBktH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AJt7AWCKSgKTJMoLJ4mQUo3KNyqiJ5H31m5OBpjZiU8I8TJyqLKUZ5nQQkIXbHCUAYAUAPyP/9k="
                  quality={85}
                />
              </div>
              <p className="text-[#ffcd10] font-bold mt-4 text-lg">Módulo 2 - Técnicas Avançadas</p>
              <p className="text-white text-sm mt-2">Certificação em técnicas profissionais e nail art avançada</p>
            </div>
          </div>
          
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl max-w-2xl mx-auto scroll-animate animate-fadeIn" data-animate>
            <h3 className="text-xl font-bold text-[#ffcd10] mb-3">✨ Valorização Profissional</h3>
            <p className="text-white text-sm leading-relaxed">
              Estes certificados internacionais não só comprovam sua qualificação, mas também agregam valor aos seus serviços, 
              permitindo que você <strong className="text-[#ffcd10]">cobre mais caro</strong> e seja reconhecida como uma 
              <strong className="text-[#ffcd10]"> profissional certificada</strong> no mercado da beleza.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos - Fundo Preto, Letras Rosé */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#E4B7B2] scroll-animate animate-fadeIn" data-animate>
            Histórias de Sucesso Reais de Nossas Alunas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate animate-fadeInStagger" data-animate>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500 transform hover:scale-105 transition-all duration-300 scroll-animate animate-fadeIn" data-animate>
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Eu estava desempregada e desacreditada, mas o curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês. É um sonho!"</p>
              <p className="font-bold text-pink-400 text-xs">Ana Paula, 29 anos - São Paulo/SP</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500 transform hover:scale-105 transition-all duration-300 scroll-animate animate-fadeIn" data-animate>
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, e a Mariana é uma excelente professora. Conquistei minha independência!"</p>
              <p className="font-bold text-pink-400 text-xs">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500 transform hover:scale-105 transition-all duration-300 scroll-animate animate-fadeIn" data-animate>
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Em menos de 3 meses após o curso, já estava com a agenda lotada! A qualidade do ensino é incrível, e o suporte me deu toda a confiança que eu precisava."</p>
              <p className="font-bold text-pink-400 text-xs">Carla Santos, 25 anos - Belo Horizonte/MG</p>
            </div>
          </div>
        </div>
        
        {/* Botão CTA Após Depoimentos */}
        <div className="text-center mt-6">
          <a 
            href="https://pay.kiwify.com.br/lf9IZHj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#E4B7B2] hover:bg-pink-400 text-black font-bold py-3 px-6 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-block animate-pulse"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            onClick={() => handleCheckoutClick('after-depoimentos')}
          >
            🎯 GARANTIR MINHA VAGA
          </a>
        </div>
      </section>

      {/* Nova Seção CTA Completa */}
      <section className="py-8 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffcd10] mb-4">
            Quando Somados, Só Esses Presentes Valem Mais de R$ 197 Reais!
          </h2>
          <p className="text-white text-lg mb-6">
            Mas você não vai pagar tudo isso se garantir a sua vaga HOJE.
          </p>
          
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-[#ffcd10] mb-4">O que você vai receber:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-white">
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Acesso vitalício ao curso</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Área de membros estilo Netflix</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> As melhores técnicas</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Aulas práticas</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Aulas em vídeo sem enrolação</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Didática realmente simples</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Suporte via WhatsApp</div>
              <div className="flex items-center"><span className="text-[#ffcd10] mr-2">✅</span> Técnicas que aumentam faturamento</div>
            </div>
          </div>

          <div className="bg-black border-4 border-[#ffcd10] p-8 rounded-xl mb-8">
            <p className="text-white text-lg mb-2">De R$ 197,00</p>
            <p className="text-6xl font-extrabold text-[#ffcd10] mb-2">R$ 19,90</p>
            <p className="text-white text-xl">À vista!</p>
            <p className="text-sm text-white mt-2 opacity-75">Com R$ 177,10 de DESCONTO!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg border border-red-500">
              <h4 className="text-red-500 font-bold mb-3">❌ Cursos Comuns:</h4>
              <ul className="text-white text-sm space-y-1">
                <li>❌ Aulas teóricas rasas</li>
                <li>❌ Técnicas desvalorizadas</li>
                <li>❌ Métodos ultrapassados</li>
                <li>❌ Resultado: profissional zézinha</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-[#ffcd10]">
              <h4 className="text-[#ffcd10] font-bold mb-3">✅ Nosso Curso:</h4>
              <ul className="text-white text-sm space-y-1">
                <li>✅ Aulas teóricas sólidas e prática detalhada</li>
                <li>✅ Técnicas que encantam clientes</li>
                <li>✅ Instrutora com mais de 2 anos de experiência</li>
                <li>✅ Resultado: uma profissional de excelência</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <a href="https://pay.kiwify.com.br/lf9IZHj" target="_blank" rel="noopener noreferrer" className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg md:text-xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg inline-block" style={{ fontFamily: 'var(--font-instrument-serif), serif' }} onClick={() => handleCheckoutClick('main-cta-section')}>
              🎯 QUERO GARANTIR MINHA VAGA AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Garantia - Fundo Preto, Letras Amarelo Ouro */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffcd10] mb-4">
            Sua Satisfação Garantida ou Seu Dinheiro de Volta!
          </h2>
          <span className="text-6xl mb-4 block">✅</span>
          <p className="text-base text-[#ffcd10] leading-relaxed">
            Temos tanta certeza da qualidade do nosso curso que oferecemos uma <strong>garantia de satisfação completa</strong>. Se por qualquer motivo você não se sentir satisfeita, basta solicitar o reembolso total, sem burocracia ou letras miúdas. Seu investimento está 100% seguro! <strong>Satisfação completa ou seu dinheiro de volta.</strong>
          </p>
        </div>
      </section>

      {/* Seção de FAQ - Fundo Preto, Letras Amarelas */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#ffcd10] text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Preciso de experiência prévia para fazer o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Não! O curso foi desenvolvido do zero ao avançado, ideal para quem nunca teve contato com o mundo das unhas e para profissionais que buscam aprimoramento.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Preciso ter todos os materiais para começar o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Não necessariamente. No curso, ensinamos detalhadamente quais materiais você precisará, onde comprá-los com os melhores preços e como montar seu kit inicial.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">O pagamento é único ou mensal?</h3>
              <p className="text-[#ffcd10] text-sm">O pagamento é único! Você paga apenas uma vez e tem acesso vitalício a todas as aulas, módulos e futuras atualizações do curso. Sem mensalidades ou taxas escondidas.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Recebo certificados ao finalizar o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Sim! Ao concluir os módulos, você receberá 3 certificados internacionais, que comprovam sua qualificação e são reconhecidos no mercado da beleza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Unhas do Curso */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-4 scroll-animate animate-scaleIn" data-animate>
            Veja o que você vai aprender a fazer!
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 scroll-animate animate-fadeInStagger" data-animate>
            {[
              'unhas_mariana_nails_curso (1).webp',
              'unhas_mariana_nails_curso (2).webp',
              'unhas_mariana_nails_curso (3).webp',
              'unhas_mariana_nails_curso (4).webp',
              'unhas_mariana_nails_curso (5).webp',
              'unhas_mariana_nails_curso (6).webp',
              'unhas_mariana_nails_curso (7).webp',
              'unhas_mariana_nails_curso (8).webp',
              'unhas_mariana_nails_curso (9).webp',
              'unhas_mariana_nails_curso (10).webp',
              'unhas_mariana_nails_curso (11).webp',
              'unhas_mariana_nails_curso (12).webp',
            ].map((img, idx) => (
              <div key={img} className="overflow-hidden rounded-lg border-2 border-[#E4B7B2] shadow-sm hover:shadow-lg transition-all">
                <Image
                  src={`/images/thumb_${img}`}
                  alt={`Unhas do curso Mariana Nails ${idx + 1}`}
                  width={200}
                  height={160}
                  className="w-full h-40 object-cover object-center hover:scale-105 transition-transform duration-300"
                  loading={idx < 4 ? "eager" : "lazy"}
                  quality={70}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé - Fundo Preto */}
      <footer className="bg-black text-white py-3 px-6 text-center">
        <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>

      {/* Botão Fixo - Garantir Minha Vaga */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4">
        <a 
          href="https://pay.kiwify.com.br/lf9IZHj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-base shadow-2xl animate-pulse transition-all duration-300 transform hover:scale-105 border-2 border-black whitespace-nowrap"
          style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          onClick={() => handleCheckoutClick('fixed-bottom-button')}
        >
          🎯 GARANTIR MINHA VAGA
        </a>
      </div>
    </div>
  );
}