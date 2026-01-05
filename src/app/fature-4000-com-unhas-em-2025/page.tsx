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
        value: 47.00,
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
      <header className="bg-black text-[#ffcd10] py-8 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
          O Método Completo para Faturar com Unhas
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[#E4B7B2] mb-3 scroll-animate animate-fadeIn" data-animate>
          (Mesmo Começando do Absoluto Zero)
        </p>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-white mb-4 scroll-animate animate-slideInUp" data-animate>
          Domine as técnicas mais pedidas do mercado pagando <strong className="text-[#ffcd10]">menos de R$ 0,40 por dia</strong>.
        </p>
        <div className="inline-block bg-gray-900/80 border border-[#ffcd10]/50 rounded-xl px-6 py-3 scroll-animate animate-scaleIn" data-animate>
          <p className="text-white text-sm">Investimento equivalente a</p>
          <p className="text-[#ffcd10] text-2xl font-bold">5x de R$ 9,40</p>
          <p className="text-gray-400 text-xs">ou R$ 47,00 à vista</p>
        </div>
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
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E4B7B2' }}>Perfeito Para Iniciantes</h3>
              <p className="text-base" style={{ color: '#F9F1F0' }}>
                Nunca mexeu com unhas? Sem problemas! Você vai aprender do absoluto zero até se tornar uma profissional completa e confiante.
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
              <p className="text-base" style={{ color: '#F9F1F0' }}>
                Transforme sua paixão em renda! Mesmo começando do zero, você pode conquistar sua independência financeira.
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
              <p className="text-base" style={{ color: '#F9F1F0' }}>
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
              <ul className="text-[#ffcd10] space-y-2 text-base">
                <li className="flex items-start"><span className="text-lg mr-2">🎥</span>+ de 30 aulas em videoaula, passo a passo, perfeitas para quem está começando do zero.</li>
                <li className="flex items-start"><span className="text-lg mr-2">💎</span>Técnicas de alongamento na fibra de vidro com controle de produtos.</li>
                <li className="flex items-start"><span className="text-lg mr-2">✂️</span>Cutilagem e esmaltação em gel - explicado do básico.</li>
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
              <ul className="text-[#ffcd10] space-y-2 text-base">
                <li className="flex items-start"><span className="text-lg mr-2">🏆</span>3 Certificados Internacionais reconhecidos no mercado.</li>
                <li className="flex items-start"><span className="text-lg mr-2">💬</span>Grupo exclusivo no WhatsApp com mais de 200 alunas iniciantes e profissionais.</li>
                <li className="flex items-start"><span className="text-lg mr-2">🕒</span>Suporte 24 horas para tirar todas suas dúvidas de iniciante.</li>
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
                <p className="text-white text-base">É iniciante e nunca trabalhou com unhas, mas quer começar uma nova profissão.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Está começando do zero e quer aprender o passo a passo completo.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Nunca pegou em uma lixa mas sonha em trabalhar com unhas.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer aprender do absoluto zero e transformar sua vida com uma nova profissão.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer ter mais dinheiro para dar o melhor para sua família.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer um passo a passo detalhado, perfeito para iniciantes.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer conquistar suas primeiras clientes com confiança.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer entregar um trabalho de excelência desde o início.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer viver das unhas.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer descobrir os segredos que me tornaram valorizada e reconhecida.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffcd10] text-xl mr-3 mt-1">✅</span>
                <p className="text-white text-base">Quer ganhar de R$ 5.000 a R$ 10.000 por mês trabalhando com unhas.</p>
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
            Quero começar por 5x de R$ 9,40
          </button>
        </div>
      </section>

      {/* Seção Não Precisa de Faculdade */}
      <section className="py-6 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#E4B7B2] mb-4 scroll-animate animate-slideInRight" data-animate>
            É Iniciante? Não Precisa de Faculdade Para Ganhar 10 Mil Por Mês!
          </h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-[#ffcd10] mb-6">
            <p className="text-white text-lg leading-relaxed mb-4">
              Mesmo sendo iniciante, com apenas <strong className="text-[#ffcd10]">5x de R$ 9,40</strong> você terá um ensino de alta qualidade — menos de <strong className="text-[#ffcd10]">R$ 10 por mês</strong> para mudar de vida!
            </p>
            <p className="text-[#ffcd10] text-xl font-bold">
              É assim que você vai sair do zero e se tornar uma profissional reconhecida, que ganha de <span className="text-2xl">R$ 5.000 a R$ 10.000 reais por mês</span>, atuando em um mercado em constante crescimento.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <span className="text-4xl block mb-2">🎓</span>
              <p className="text-white text-base">Faculdade Tradicional</p>
              <p className="text-red-500 font-bold text-lg">R$ 200.000+</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">VS</span>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">💎</span>
              <p className="text-white text-base">Curso Iniciante ao Profissional</p>
              <p className="text-[#ffcd10] font-bold text-xl">5x R$ 9,40</p>
              <p className="text-white text-xs">(ou R$ 47 à vista)</p>
              <p className="text-white text-sm">(valor real: R$ 197)</p>
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
          <p className="text-white mb-8 text-xl scroll-animate animate-slideInUp" data-animate>
            Veja os resultados incríveis das nossas alunas que começaram do zero!
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
            <h3 className="text-xl font-bold text-[#ffcd10] mb-3">💎 Transformações Reais de Iniciantes</h3>
            <p className="text-white text-base leading-relaxed">
              Estes são apenas alguns dos <strong className="text-[#ffcd10]">centenas de feedbacks</strong> que 
              recebemos diariamente! Muitas alunas começaram do zero absoluto e hoje 
              <strong className="text-[#ffcd10]"> conquistaram sua independência financeira</strong> e se tornaram 
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
          <p className="text-white mb-8 text-xl scroll-animate animate-slideInUp" data-animate>
            Mesmo sendo iniciante, você receberá certificados que demonstram sua qualificação profissional
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
              <p className="text-white text-base mt-2">Certificação em técnicas básicas e intermediárias de nail design - perfeito para iniciantes</p>
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
              <p className="text-white text-base mt-2">Certificação em técnicas profissionais e nail art avançada</p>
            </div>
          </div>
          
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl max-w-2xl mx-auto scroll-animate animate-fadeIn" data-animate>
            <h3 className="text-xl font-bold text-[#ffcd10] mb-3">✨ Valorização Profissional</h3>
            <p className="text-white text-base leading-relaxed">
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
              <p className="italic mb-2 text-[#ffcd10] text-base">"Eu era completamente iniciante, nunca tinha mexido com unhas! O curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês!"</p>
              <p className="font-bold text-pink-400 text-sm">Ana Paula, 29 anos - São Paulo/SP</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500 transform hover:scale-105 transition-all duration-300 scroll-animate animate-fadeIn" data-animate>
              <p className="italic mb-2 text-[#ffcd10] text-base">"Comecei do zero absoluto! Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, perfeito para iniciantes. Conquistei minha independência!"</p>
              <p className="font-bold text-pink-400 text-sm">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500 transform hover:scale-105 transition-all duration-300 scroll-animate animate-fadeIn" data-animate>
              <p className="italic mb-2 text-[#ffcd10] text-base">"Entrei como iniciante total e em menos de 3 meses após o curso, já estava com a agenda lotada! A qualidade do ensino é incrível para quem está começando!"</p>
              <p className="font-bold text-pink-400 text-sm">Carla Santos, 25 anos - Belo Horizonte/MG</p>
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
            Quero começar por 5x de R$ 9,40
          </button>
        </div>
      </section>

      {/* Seção "Pague com 1 Atendimento" - Ancoragem Comparativa */}
      <section className="py-8 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#ffcd10]/20 to-[#E4B7B2]/20 border-2 border-[#ffcd10] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffcd10] mb-4">
              💡 Pague o Curso Inteiro com Apenas 1 Atendimento
            </h2>
            <p className="text-lg text-white mb-4">
              Você já parou para pensar?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Investimento no curso</p>
                <p className="text-[#ffcd10] text-2xl font-bold">R$ 47,00</p>
              </div>
              <div className="bg-black/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Valor médio de 1 atendimento</p>
                <p className="text-green-400 text-2xl font-bold">R$ 50 a R$ 80</p>
              </div>
              <div className="bg-black/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Seu lucro já na 1ª cliente</p>
                <p className="text-green-400 text-2xl font-bold">+ R$ 3 a R$ 33</p>
              </div>
            </div>
            <p className="text-[#ffcd10] text-lg font-semibold">
              ✨ Com a sua primeira cliente, você paga o curso todo e já tem lucro.<br/>
              <span className="text-white">Todo o resto é dinheiro no seu bolso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Nova Seção CTA Completa - Reestruturada */}
      <section className="py-8 px-6 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Stack de Valor */}
          <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-[#ffcd10] mb-4">✨ Tudo isso por menos de R$ 10 por mês:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-white text-base">
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Curso completo do zero ao profissional</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> +30 aulas em vídeo passo a passo</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Acesso vitalício - aprenda no seu ritmo</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Área de membros estilo Netflix</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Didática simples para iniciantes</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Suporte via WhatsApp 24h</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> 3 Certificados Internacionais</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Técnicas que encantam clientes</div>
            </div>
          </div>

          {/* Bloco de Preço - Visual Reestruturado */}
          <div className="bg-gradient-to-b from-gray-900 to-black border-4 border-[#ffcd10] p-8 rounded-2xl mb-8">
            <p className="text-gray-400 text-lg mb-1">DE:</p>
            <p className="text-white text-2xl line-through opacity-60 mb-4">R$ 197,00</p>
            
            <p className="text-[#ffcd10] text-lg font-semibold mb-2">POR APENAS:</p>
            <div className="bg-[#ffcd10] text-black inline-block px-6 py-3 rounded-xl mb-4">
              <p className="text-4xl md:text-5xl font-extrabold">5x de R$ 9,40</p>
            </div>
            <p className="text-white text-lg">ou <strong className="text-[#ffcd10]">R$ 47,00</strong> à vista</p>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-green-400 text-base">
                💰 Menos de R$ 0,40 por dia para mudar sua vida
              </p>
            </div>
          </div>

          {/* Justificativa do Preço Baixo */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-8 text-left">
            <h4 className="text-[#ffcd10] font-bold text-lg mb-3 text-center">
              🤔 "Por que um conteúdo tão completo por um valor tão acessível?"
            </h4>
            <p className="text-white text-base leading-relaxed">
              "Eu poderia cobrar facilmente <strong className="text-[#ffcd10]">R$ 297</strong> por esse treinamento. 
              Mas meu objetivo hoje não é o lucro imediato — é <strong className="text-[#ffcd10]">criar o maior case de sucesso 
              de Nail Designers do Brasil</strong>. Eu quero que você entre, tenha resultados incríveis e seja a 
              <strong className="text-[#ffcd10]"> prova viva</strong> de que meu método funciona. Por isso, derrubei a barreira de entrada."
            </p>
            <p className="text-right text-[#E4B7B2] mt-3 font-semibold">— Mariana Nails</p>
          </div>

          {/* CTA Principal */}
          <div className="mb-6">
            <button
              onClick={() => handleCheckoutClick('main-cta-section')}
              className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-block cursor-pointer"
            >
              SIM! Quero começar por 5x de R$ 9,40 →
            </button>
            <p className="text-gray-400 text-sm mt-3">
              🔒 Pagamento 100% seguro • Acesso imediato • 7 dias de garantia
            </p>
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
          <p className="text-lg text-[#ffcd10] leading-relaxed">
            Temos tanta certeza da qualidade do nosso curso que oferecemos uma <strong>garantia de satisfação completa</strong>. Se por qualquer motivo você não se sentir satisfeita, basta solicitar o reembolso total, sem burocracia ou letras miúdas. Seu investimento de apenas <strong>5x de R$ 9,40</strong> está 100% seguro! <strong>Satisfação completa ou seu dinheiro de volta.</strong>
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
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Sou totalmente iniciante. Esse curso é para mim?</h3>
              <p className="text-[#ffcd10] text-base">SIM! O curso foi feito especialmente para iniciantes! Você vai aprender do absoluto zero, mesmo que nunca tenha pegado em uma lixa. Explicamos tudo passo a passo!</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Preciso ter todos os materiais para começar?</h3>
              <p className="text-[#ffcd10] text-base">Não! No curso ensinamos detalhadamente quais materiais você precisará, onde comprá-los com os melhores preços e como montar seu kit inicial de iniciante.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Quanto custa o curso?</h3>
              <p className="text-[#ffcd10] text-base">O curso vale R$ 197,00, mas hoje você paga em até <strong>5x de R$ 9,40</strong> (ou R$ 47 à vista)! Acesso vitalício, sem mensalidades ou taxas escondidas.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Recebo certificados ao finalizar o curso?</h3>
              <p className="text-[#ffcd10] text-base">Sim! Ao concluir os módulos, você receberá 3 certificados internacionais, que comprovam sua qualificação e são reconhecidos no mercado da beleza.</p>
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
          <div className="relative bg-gradient-to-b from-gray-900 to-black border-2 border-[#ffcd10] rounded-2xl p-6 max-w-md w-full shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl transition-colors z-10"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Título */}
            <h3 className="text-2xl font-bold text-[#ffcd10] text-center mb-3">
              🎯 Garanta Sua Vaga Agora!
            </h3>
            
            {/* 1. PREÇO - Oferta */}
            <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500 rounded-xl p-4 mb-4 text-center">
              <p className="text-white text-sm mb-1">
                <span className="line-through opacity-70">De R$ 197,00</span>
              </p>
              <p className="text-[#ffcd10] text-2xl font-extrabold">
                5x de R$ 9,40
              </p>
              <p className="text-white text-sm">ou R$ 47,00 à vista</p>
              <p className="text-red-400 text-sm font-bold mt-1 animate-pulse">
                ⚠️ SOMENTE HOJE! Amanhã volta ao preço normal
              </p>
            </div>

            {/* 2. BENEFÍCIOS - Stack de Valor (ANTES do formulário) */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <p className="text-[#ffcd10] text-sm font-bold mb-3 text-center">
                ✨ O que você vai receber:
              </p>
              <div className="grid grid-cols-1 gap-2 text-white text-sm">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>Curso completo do zero ao profissional</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>+30 aulas em vídeo passo a passo</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>3 Certificados internacionais</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>Grupo VIP no WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>Suporte 24 horas</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-lg">✓</span>
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>

            {/* 3. FORMULÁRIO - Email e Botão */}
            <div className="space-y-3">
              <p className="text-white text-center text-sm">
                Insira seu email para garantir sua vaga:
              </p>
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffcd10] focus:outline-none transition-colors text-base"
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
                SIM! Quero por 5x de R$ 9,40 →
              </button>

              <p className="text-gray-400 text-xs text-center">
                🔒 Pagamento 100% seguro • 7 dias de garantia
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé - Fundo Preto - Com padding extra para o CTA flutuante */}
      <footer className="bg-black text-white py-3 px-6 text-center pb-24">
        <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>

      {/* Seção Flutuante Compacta - Menos intrusiva */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-xs">
        <div className="bg-black/95 backdrop-blur-sm border border-[#ffcd10]/60 rounded-xl p-3 shadow-2xl">
          {/* Botão Garantir Minha Vaga */}
          <button
            onClick={() => handleCheckoutClick('fixed-bottom-button')}
            className="block w-full bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-full text-sm shadow-xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
          >
            Começar por 5x R$ 9,40 →
          </button>
          
          {/* Info compacta */}
          <p className="text-white text-center text-xs mt-2 opacity-80">
            ✓ Pagamento seguro • 7 dias de garantia
          </p>
        </div>
      </div>
    </div>
  );
}