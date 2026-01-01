"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getOrStartCheckoutEventId, generateEventId } from '@/lib/meta/metaIds';

// Declaração global para dataLayer (GTM)
declare global {
  interface Window {
    dataLayer: any[];
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
  
  // Estados para modal de captura de email
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pendingButtonLocation, setPendingButtonLocation] = useState('');
  
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

  // Função para obter parâmetros UTM da URL atual - Versão otimizada
  const getUrlParams = (): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    
    const params = new URLSearchParams(window.location.search);
    const urlParams: Record<string, string> = {};
    
    // Parâmetros que a Kiwify aceita (incluindo todos os UTMs padrão)
    const acceptedParams = [
      'src', 'sck', 'utm_source', 'utm_medium', 'utm_campaign', 
      'utm_term', 'utm_content', 'utm_id', 'utm_source_platform',
      's1', 's2', 's3', 's4', 's5', 'fbclid', 'gclid'
    ];
    
    acceptedParams.forEach(param => {
      const value = params.get(param);
      if (value) {
        urlParams[param] = value;
      }
    });
    
    return urlParams;
  };

  // Função para ler cookies do navegador
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  // Função para construir URL do Kiwify com todos os parâmetros de rastreamento
  const buildKiwifyUrl = (baseUrl: string, email?: string, checkoutEventId?: string): string => {
    if (typeof window === 'undefined') return baseUrl;

    const urlParams = getUrlParams();
    
    const allParams: Record<string, string> = {
      ...urlParams
    };
    
    // Persistir o mesmo event_id entre domínios (Kiwify precisa receber este valor)
    if (checkoutEventId) allParams['event_id'] = checkoutEventId;
    
    // Adicionar email se fornecido (importante para atribuição)
    if (email && email.trim()) {
      allParams['email'] = email.trim();
      allParams['customer_email'] = email.trim(); // Formato Kiwify
    }

    // Adicionar cookies do Facebook para rastreamento avançado
    // _fbp = Facebook Browser ID (identificador do navegador)
    // _fbc = Facebook Click ID (identificador do clique quando vem de anúncio)
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    
    if (fbp) {
      allParams['utm_content'] = fbp;
    }
    
    if (fbc) {
      allParams['utm_term'] = fbc;
    }

    const queryString = Object.entries(allParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };


  // Função para abrir modal e capturar email antes do checkout
  const handleCheckoutClick = (buttonLocation: string) => {
    setPendingButtonLocation(buttonLocation);
    setShowEmailModal(true);
    setEmailError('');
  };

  // Validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Processar checkout após captura do email
  const processCheckout = () => {
    // Validar email
    if (!userEmail || !userEmail.trim()) {
      setEmailError('Por favor, insira seu email');
      return;
    }

    if (!validateEmail(userEmail)) {
      setEmailError('Por favor, insira um email válido');
      return;
    }

    // Disparar evento via dataLayer
    if (typeof window !== 'undefined') {
      const eventId = getOrStartCheckoutEventId();
      
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'initiate_checkout',
        event_id: eventId,
        value: 43.02,
        currency: 'BRL'
      });
      
      console.log('✅ Evento initiate_checkout enviado via dataLayer com Event ID:', eventId);
    }
    
    // Log dos parâmetros que estão sendo enviados
    console.log('Parâmetros de rastreamento capturados:', {
      email: userEmail.toLowerCase().trim(),
      urlParams: getUrlParams(),
      currentUrlParams: window.location.search,
      fbp_cookie: getCookie('_fbp'),
      fbc_cookie: getCookie('_fbc'),
      finalKiwifyUrl: buildKiwifyUrl("https://pay.kiwify.com.br/lf9IZHj", userEmail, getOrStartCheckoutEventId()),
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });

    // Disparar evento initiate_checkout_pro para GTM com dados avançados de rastreamento
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'initiate_checkout_pro',
      'user_email': userEmail,
      'fbp': getCookie('_fbp'),
      'fbc': getCookie('_fbc')
    });
    console.log('✅ Evento initiate_checkout_pro enviado para dataLayer com fbp/fbc');

    // Redirecionar para Kiwify com email nos parâmetros
    const checkoutEventId = getOrStartCheckoutEventId();
    window.location.href = buildKiwifyUrl("https://pay.kiwify.com.br/lf9IZHj", userEmail, checkoutEventId);
  };

  // ViewContent será disparado pelo GTM automaticamente via PageView
  useEffect(() => {
    // GTM já rastreia page_view automaticamente
    console.log('📄 Página carregada - GTM rastreia automaticamente');
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-800">
      
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
          <button
            onClick={() => handleCheckoutClick('after-perfeita-para-voce')}
            className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-block animate-bounce cursor-pointer"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            🎯 GARANTIR MINHA VAGA
          </button>
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
              <p className="text-[#ffcd10] font-bold text-xl">R$ 50,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Feedbacks Reais */}
      <section className="py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
            📱 Feedbacks Reais de Nossas Alunas
          </h2>
          <p className="text-white mb-8 text-lg scroll-animate animate-slideInUp" data-animate>
            Veja os resultados incríveis que nossas alunas estão conquistando após o curso!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 scroll-animate animate-fadeInStagger" data-animate>
            {[
              { src: 'feedbacks (1).jpeg', alt: 'Feedback de aluna satisfeita com resultado das unhas' },
              { src: 'feedbacks (2).jpeg', alt: 'Depoimento sobre conclusão do curso e diploma' },
              { src: 'feedbacks (3).jpeg', alt: 'Aluna mostrando trabalho após aprender técnicas' },
              { src: 'feedbacks (4).jpeg', alt: 'Feedback sobre primeira cliente atendida' },
              { src: 'feedbacks (5).jpeg', alt: 'Depoimento sobre qualidade do curso e resultados' },
              { src: 'feedbacks (1).png', alt: 'Certificado de conclusão do curso Mariana Nails' }
            ].map((feedback, idx) => (
              <div 
                key={feedback.src} 
                className="scroll-animate animate-scaleIn hover:scale-105 transition-transform duration-300" 
                data-animate
              >
                <div className="bg-gray-900 rounded-xl border-2 border-[#ffcd10] overflow-hidden shadow-xl">
                  <Image
                    src={`/images/${feedback.src}`}
                    alt={feedback.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="eager"
                    priority={idx < 3}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl max-w-3xl mx-auto scroll-animate animate-fadeIn" data-animate>
            <h3 className="text-xl font-bold text-[#ffcd10] mb-3">💎 Transformações Reais</h3>
            <p className="text-white text-sm leading-relaxed">
              Estes são apenas alguns dos <strong className="text-[#ffcd10]">centenas de feedbacks</strong> que 
              recebemos diariamente! Nossas alunas não apenas aprendem as técnicas, mas também 
              <strong className="text-[#ffcd10]"> conquistam sua independência financeira</strong> e se tornam 
              referências em suas regiões.
            </p>
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
                  loading="eager"
                  priority
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
                  loading="eager"
                  priority
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
          <button
            onClick={() => handleCheckoutClick('after-depoimentos')}
            className="bg-[#E4B7B2] hover:bg-pink-400 text-black font-bold py-3 px-6 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-block animate-pulse cursor-pointer"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            🎯 GARANTIR MINHA VAGA
          </button>
        </div>
      </section>

      {/* Nova Seção CTA Completa */}
      <section className="py-8 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffcd10] mb-4">
            Quando Somados, Só Esses Presentes Valem Mais de R$ 120 Reais!
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
            <p className="text-white text-lg mb-2">De R$ 120,00</p>
            <p className="text-6xl font-extrabold text-[#ffcd10] mb-2">R$ 50,00</p>
            <p className="text-white text-xl">À vista!</p>
            <p className="text-sm text-white mt-2 opacity-75">Com R$ 70,00 de DESCONTO!</p>
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
            <button
              onClick={() => handleCheckoutClick('main-cta-section')}
              className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg md:text-xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg inline-block cursor-pointer"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
            >
              🎯 QUERO GARANTIR MINHA VAGA AGORA!
            </button>
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
                  loading="eager"
                  priority={idx < 4}
                  quality={85}
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Captura de Email */}
      {showEmailModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-gradient-to-b from-gray-900 to-black border-2 border-[#ffcd10] rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scaleIn">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Ícone */}
            <div className="text-center mb-4">
              <span className="text-6xl">📧</span>
            </div>

            {/* Título */}
            <h3 className="text-2xl font-bold text-[#ffcd10] text-center mb-2">
              Último Passo!
            </h3>
            <p className="text-white text-center mb-6">
              Insira seu melhor email para garantir sua vaga e receber acesso imediato ao curso:
            </p>

            {/* Formulário */}
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    setEmailError('');
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      processCheckout();
                    }
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffcd10] focus:outline-none transition-colors"
                  autoFocus
                />
                {emailError && (
                  <p className="text-red-400 text-sm mt-2">⚠️ {emailError}</p>
                )}
              </div>

              <button
                onClick={processCheckout}
                className="w-full bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎯 CONTINUAR PARA O PAGAMENTO
              </button>

              <p className="text-gray-400 text-xs text-center">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </div>

            {/* Benefícios Rápidos */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-[#ffcd10] text-sm font-bold mb-3 text-center">
                ✨ O que você vai receber:
              </p>
              <div className="space-y-2 text-white text-sm">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Acesso imediato ao curso completo
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  3 Certificados internacionais
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Grupo VIP no WhatsApp
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Suporte 24 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé - Fundo Preto */}
      <footer className="bg-black text-white py-3 px-6 text-center">
        <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>

      {/* Seção Flutuante Completa */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm">
        <div className="bg-black/90 backdrop-blur-sm border border-[#ffcd10]/60 rounded-2xl p-4 shadow-2xl space-y-3">
          {/* Botão Garantir Minha Vaga */}
          <button
            onClick={() => handleCheckoutClick('fixed-bottom-button')}
            className="block w-full bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-base shadow-xl animate-pulse transition-all duration-300 transform hover:scale-105 border-2 border-black text-center cursor-pointer"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            🎯 GARANTIR MINHA VAGA
          </button>
          
          {/* Bandeiras de Pagamento */}
          <div className="flex justify-center">
            <Image
              src="/images/bandeiras_1.png"
              alt="Formas de pagamento seguras - Pix, Visa, Mastercard, Hipercard"
              width={280}
              height={56}
              className="mx-auto"
              priority
            />
          </div>
          
          {/* Texto Compacto */}
          <div className="text-center">
            <p className="text-white font-medium text-xs leading-tight">
              <span className="text-[#ffcd10]">✓</span> Compra 100% segura - Acesso imediato
            </p>
            <p className="text-white font-medium text-xs leading-tight">
              <span className="text-[#ffcd10]">✓</span> 7 dias de garantia ou dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}