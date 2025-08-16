"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

// Declaração global para o Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

// Hook para animações

// Estilos de animação
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.5s ease-out forwards;
  }

  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }

  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite linear;
  }

  .image-placeholder {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
  }

  .image-placeholder::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s infinite;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .image-container:hover {
    transform: translateY(-2px);
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }

  .transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  .transition-overlay.active {
    opacity: 1;
    pointer-events: all;
  }
`;

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

export default function CursoNailDesignDoZeroAoProfissionalMarianaNails() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewersCount, setViewersCount] = useState(102);
  
  // Data dinâmica
  const { diaSemana, dia, mes, ano } = getDynamicDate();
  const dataLimite = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  // Effect para contador dinâmico de visualizadores
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => {
        // Gera variação aleatória entre -2 e +5
        const variation = Math.floor(Math.random() * 8) - 2;
        const newCount = prev + variation;
        
        // Mantém o contador entre 95 e 120
        if (newCount < 95) return 95;
        if (newCount > 120) return 120;
        return newCount;
      });
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Perguntas do quiz
  const questions = [
    {
      id: 1,
      title: "Até o final desse quiz, você vai descobrir o segredo para a sua paixão por unhas gerar renda!",
      question: "Você já trabalhou com unhas antes?",
      options: [
        "Já sou profissional mas quero ir além!",
        "Estou começando do zero",
        "Quero ser profissional e ter minha renda 💰"
      ]
    },
    {
      id: 2,
      title: "Qual o maior obstáculo que te impede de viver de unhas?",
      question: "O que mais te segura hoje?",
      options: [
        "A insegurança de começar do zero 🤔",
        "Preciso de um método claro, um passo a passo completo 🥇",
        "Não sei como conseguir clientes 💅",
        "Já tentei aprender antes e não deu certo 🫤"
      ]
    },
    {
      id: 3,
      title: "Muita gente acha que para fazer unhas lindas é preciso ter o dom....",
      question: "Você concorda?",
      options: [
        "Sim, acho que é preciso ter o dom. 🤔",
        "Acho que é mais a técnica e prática! 💪",
        "Basta investir no conhecimento certo! ⭐"
      ]
    },
    {
      id: 4,
      title: "Você está a um passo de descobrir o segredo das manicures para ter a agenda lotada...",
      question: "Qual a sua meta?",
      options: [
        "Uma renda a mais já seria um sonho! 💸",
        "Entre R$1 mil e R$2 mil 🎯",
        "Mais que 3 mil 💰",
        "Quero viver do Nail Design! 🚀"
      ]
    },
    {
      id: 5,
      title: "Sua meta pode virar realidade, mesmo que esteja começando do zero...",
      question: "Você está prestes a ter acesso ao segredo que já formou milhares de Nail Designers de sucesso no Brasil. Pronta?",
      options: [
        "Pronta para ser Nail Designer de sucesso! 🔥",
        "Com certeza, quero saber tudo! ✨"
      ]
    },
    {
      id: 6,
      title: "O que você mais gostaria de ter daqui 3 meses, como Nail Designer de Alto valor?",
      question: "",
      options: [
        "🗓️ Uma agenda sempre CHEIA!",
        "🔥 O STATUS de AUTORIDADE em unhas na minha região!",
        "🌟 A liberdade de cobrar ACIMA da média e viver sem aperto no bolso!"
      ]
    }
  ];

  // Função para avançar para próxima pergunta
  const handleAnswer = (answer: string) => {
    setIsTransitioning(true);
    
    // Fade para branco
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentStep] = answer;
      setAnswers(newAnswers);
      
      if (currentStep === 2) {
        // Após questão 3, ir para página de apresentação da Mariana
        setCurrentStep(questions.length);
      } else if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Após última questão, ir para página "Imagina ter em mãos"
        setCurrentStep(questions.length + 1);
      }
      
      // Fade de volta
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  // Função para obter cookies
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  // Função para obter parâmetros UTM da URL atual
  const getUrlParams = (): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    
    const params = new URLSearchParams(window.location.search);
    const urlParams: Record<string, string> = {};
    
    // Parâmetros que a Kiwify aceita
    const acceptedParams = [
      'src', 'sck', 'utm_source', 'utm_medium', 'utm_campaign', 
      'utm_term', 'utm_content', 's1', 's2', 's3'
    ];
    
    acceptedParams.forEach(param => {
      const value = params.get(param);
      if (value) {
        urlParams[param] = value;
      }
    });
    
    return urlParams;
  };

  // Função para construir URL do Kiwify com todos os parâmetros de rastreamento
  const buildKiwifyUrl = (baseUrl: string): string => {
    const fbc = getCookie('_fbc');
    const fbp = getCookie('_fbp');
    const urlParams = getUrlParams();
    
    const allParams: Record<string, string> = {
      ...urlParams
    };
    
    // Adicionar cookies do Facebook se existirem
    if (fbc) allParams['_fbc'] = fbc;
    if (fbp) allParams['_fbp'] = fbp;
    
    // Se não houver parâmetros, retornar URL original
    if (Object.keys(allParams).length === 0) {
      return baseUrl;
    }
    
    // Construir query string
    const queryString = Object.entries(allParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    
    return `${baseUrl}?${queryString}`;
  };

  // Função para tracking de evento
  const handleCheckoutClick = (buttonLocation: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Meta Pixel - Evento InitiateCheckout disparado:', buttonLocation);
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Curso Nail Design do Zero ao Profissional',
        content_category: 'Course',
        content_ids: ['curso-nail-design-mariana-nails'],
        currency: 'BRL',
        value: 19.90,
        button_location: buttonLocation
      });
    }
    
    // Log dos parâmetros que estão sendo enviados
    console.log('Parâmetros de rastreamento capturados:', {
      _fbc: getCookie('_fbc'),
      _fbp: getCookie('_fbp'),
      urlParams: getUrlParams()
    });
  };

  // Renderizar pergunta atual
  const renderQuestion = () => {
    if (currentStep >= questions.length) {
      return renderPresentationPage();
    }

    if (currentStep === questions.length - 1) {
      return renderQuestion6();
    }

    const question = questions[currentStep];
    
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#ffcd10] animate-fade-in-up">
            {question.title}
          </h1>
          
          {question.question && (
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-[#E4B7B2] animate-fade-in-up delay-200">
              {question.question}
            </h2>
          )}
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full max-w-md mx-auto block bg-black hover:bg-black text-white font-semibold py-4 px-6 rounded-lg text-lg border border-[#ffcd10] hover:border-[#E4B7B2] transition-all duration-300 transform hover:scale-105 shadow-lg animate-scale-in delay-${(index + 3) * 100}`}
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Indicador de progresso */}
          <div className="mt-8">
            <div className="flex justify-center space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-[#ffcd10]' : 'bg-white'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-white mt-2">
              Pergunta {currentStep + 1} de {questions.length}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Renderizar pergunta 6 (antes da apresentação)
  const renderQuestion6 = () => {
    const question = questions[5];
    
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#ffcd10] ">
            {question.title}
          </h1>
          
          <div className="space-y-4 ">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full max-w-md mx-auto block bg-black hover:bg-black text-white font-semibold py-4 px-6 rounded-lg text-lg border border-[#ffcd10] hover:border-[#E4B7B2] transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Indicador de progresso */}
          <div className="mt-8">
            <div className="flex justify-center space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-[#ffcd10]' : 'bg-white'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-white mt-2">
              Pergunta {currentStep + 1} de {questions.length}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Renderizar página de apresentação
  const renderPresentationPage = () => {
    if (currentStep === questions.length) {
      return (
        <div className="min-h-screen bg-black text-white px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-[#ffcd10] text-center ">
              Prazer, sou a Mariana!
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Imagem da Mariana */}
              <div className="flex justify-center lg:justify-end animate-slide-in-left">
                <Image 
                  src="/images/mariana_landingpage.png"
                  alt="Mariana Nails"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
              
              {/* Texto */}
              <div className="text-left space-y-6 text-white text-lg leading-relaxed animate-slide-in-right">
                <p>
                  Há mais de 10 anos eu não só vivo, mas <strong className="text-[#ffcd10]">PROSPERO</strong> com a minha paixão por unhas…
                </p>
                
                <p>
                  O que vou te mostrar <strong className="text-[#ffcd10]">AGORA</strong> nesse texto é o <strong className="text-[#ffcd10]">SEGREDO</strong> que separa as Nail Designers <strong className="text-[#ffcd10]">COMUNS</strong>, que imploram pra ter serviço, daquelas que têm agenda <strong className="text-[#ffcd10]">LOTADA</strong> e são <strong className="text-[#ffcd10]">DISPUTADAS</strong> pelas melhores clientes!
                </p>
                
                <p>
                  Lá no começo, eu via um mar de colegas talentosas afogadas no básico, naquela briga de foice por R$20, R$50... A frustração? <strong className="text-[#ffcd10]">GIGANTE!</strong> 😥
                </p>
                
                <div className="bg-black p-6 rounded-xl border border-[#ffcd10] my-8">
                  <p className="text-xl font-bold text-[#ffcd10] mb-4">
                    🚨 A VERDADE?
                  </p>
                  <p className="text-white">
                    Você precisa de um <strong className="text-[#ffcd10]">DIFERENCIAL</strong>. Um arsenal de técnicas avançadas que poucas dominam, com um jeito de atender que <strong className="text-[#ffcd10]">FIDELIZA</strong> e faz as suas clientes te <strong className="text-[#ffcd10]">INDICAREM</strong> de olhos fechados, mesmo que você esteja começando do <strong className="text-[#ffcd10]">ZERO</strong>...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => setCurrentStep(3)} // Continuar para questão 4
                className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                QUERO TER ESSE CONHECIMENTO EXCLUSIVO
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    if (currentStep === questions.length + 1) {
      return (
        <div className="min-h-screen bg-black text-white px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl font-bold text-[#ffcd10] mb-8 ">
                Imagina ter em mãos o passo a passo EXATO que as Nail Designers de sucesso escondem, do zero ao avançado, com mais de 30 aulas e 3 certificados internacionais...
              </p>
            </div>
            
            <div className="mb-8">
              <button
                onClick={() => setCurrentStep(questions.length + 2)}
                className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                É ISSO O QUE EU PRECISO AGORA
              </button>
            </div>
            
            {/* Galeria de Unhas */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 animate-fade-in-up">
                Veja o que você vai aprender a fazer!
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
                  <div 
                    key={img} 
                    className={`image-container overflow-hidden rounded-lg border-2 border-[#ffcd10] shadow-sm hover:shadow-lg transition-all animate-scale-in delay-${Math.min(600, (idx + 1) * 100)}`}
                  >
                    <Image
                      src={`/images/${img}`}
                      alt={`Unhas do curso Mariana Nails ${idx + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover object-center hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      priority={idx < 4}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Página final de venda
    return renderFinalSalesPage();
  };

  // Renderizar página final de venda
  const renderFinalSalesPage = () => {
    return (
      <div className="min-h-screen bg-black text-white">
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
        
        {/* Banner de urgência */}
        <div className="bg-red-600 text-white text-center py-3 px-4">
          <p className="text-sm md:text-base font-bold ">
            ⚠️ Devido a grande quantidade de acessos, esta página ficará disponível até o dia {dataLimite}
          </p>
        </div>

        {/* Imagem de Topo */}
        <div className="relative w-full h-auto animate-fade-in-up">
          <Image 
            src="/images/mariana_nails_rota_curso_topo2.webp"
            alt="Mariana Nails - Curso Nail Design"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>

        {/* Cabeçalho principal */}
        <header className="py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white animate-fade-in-up">
            Revelado: O único caminho que Transforma mulheres Iniciantes em Nail Designers DISPUTADAS com agenda lotada
          </h1>
          
          <div className="flex items-center justify-center mb-4 text-sm text-white animate-fade-in-up delay-200">
            <span className="animate-pulse-slow">🔴 {viewersCount} pessoas assistindo</span>
          </div>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto animate-fade-in-up delay-300">
            Imagina ser uma referência em Unhas a ponto de ter que recusar tantos clientes...
          </p>
        </header>

        {/* Seção de conteúdo do curso */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#ffcd10] ">
              Se prepare para Dominar cada detalhe do Zero ao Avançado
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#ffcd10] mb-3">📚 Módulos Completos e Didáticos</h3>
                <div className="text-white space-y-1">
                  <p>🎥 + de 30 aulas em videoaula, passo a passo</p>
                  <p>💎 Técnicas de alongamento na fibra de vidro</p>
                  <p>✂️ Cutilagem, esmaltação em gel</p>
                  <p>🎨 Decoração 3D com gel sólido</p>
                  <p>✨ Decorações com esfumado, baby color, baby boomer</p>
                  <p>🔧 Remoção segura e manutenção</p>
                  <p>📈 Marketing para Nail Designers</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#ffcd10] mb-3">⭐ Diferenciais Exclusivos</h3>
                <div className="text-white space-y-1">
                  <p>🏆 3 Certificados Internacionais</p>
                  <p>💬 Grupo exclusivo no WhatsApp</p>
                  <p>🕒 Suporte 24 horas</p>
                  <p>👩‍🏫 Contato direto com a Mariana</p>
                  <p>🤝 Comunidade exclusiva</p>
                  <p>📄 Material de apoio em PDF</p>
                  <p>💯 Satisfação completa garantida</p>
                </div>
              </div>
            </div>
            
            {/* Benefícios adicionais */}
            <div className="mt-8 space-y-2 ">
              <h3 className="text-xl font-bold text-[#ffcd10] mb-4">O que você vai receber:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white">
                <p>✅ Acesso vitalício ao curso</p>
                <p>✅ Área de membros estilo Netflix</p>
                <p>✅ As melhores técnicas</p>
                <p>✅ Aulas práticas</p>
                <p>✅ Aulas em vídeo sem enrolação</p>
                <p>✅ Didática realmente simples</p>
                <p>✅ Suporte via WhatsApp</p>
                <p>✅ Técnicas que aumentam faturamento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de preço */}
        <section className="py-8 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-[#ffcd10] mb-4 ">
              O valor do curso de Nail Design é de R$ 19,90
            </p>
            
            <a
              href={buildKiwifyUrl("https://pay.kiwify.com.br/lf9IZHj")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl md:text-2xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg inline-block mb-8 animate-pulse-slow"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              onClick={() => handleCheckoutClick('final-page-main-button')}
            >
              GARANTIR MINHA VAGA COM DESCONTO HOJE
            </a>
          </div>
        </section>

        {/* Seção de Feedbacks Reais */}
        <section className="py-8 px-6 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] animate-fade-in-up">
              📱 Feedbacks Reais de Nossas Alunas
            </h3>
            <p className="text-white mb-8 text-lg animate-fade-in-up delay-200">
              Veja os resultados incríveis que nossas alunas estão conquistando após o curso!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                  className={`animate-scale-in delay-${(idx + 1) * 100} hover:scale-105 transition-transform duration-300`}
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
            
            <div className="bg-gray-900 border-2 border-[#ffcd10] p-6 rounded-xl max-w-3xl mx-auto animate-fade-in-up">
              <h4 className="text-xl font-bold text-[#ffcd10] mb-3">💎 Transformações Reais</h4>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] animate-fade-in-up">
              🏆 Certificados Reconhecidos Internacionalmente
            </h3>
            <p className="text-white mb-8 text-lg animate-fade-in-up delay-200">
              Comprove sua qualificação com certificados que demonstram sua expertise profissional
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="animate-scale-in delay-300">
                <div className="rounded-lg border-2 border-[#ffcd10] overflow-hidden">
                  <Image
                    src="/images/certificado_1.png"
                    alt="Certificado Módulo 1 - Curso Completo Nail Design"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                    loading="eager"
                    priority
                  />
                </div>
                <p className="text-[#ffcd10] font-bold mt-4">Módulo 1 - Técnicas Fundamentais</p>
              </div>
              
              <div className="animate-scale-in delay-400">
                <div className="rounded-lg border-2 border-[#ffcd10] overflow-hidden">
                  <Image
                    src="/images/certificado_2.png"
                    alt="Certificado Módulo 2 - Curso Completo Nail Design"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                    loading="eager"
                    priority
                  />
                </div>
                <p className="text-[#ffcd10] font-bold mt-4">Módulo 2 - Técnicas Avançadas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de depoimentos */}
        <section className="py-8 px-6 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] animate-fade-in-up">
              Depoimentos reais de alunas que já estão se tornando Nail Designers de Valor!
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black p-4 rounded-lg border border-[#ffcd10] animate-scale-in delay-200 hover:shadow-lg transition-all duration-300">
                <p className="text-white text-sm italic mb-3">
                  "Eu estava desempregada e desacreditada, mas o curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês. É um sonho!"
                </p>
                <p className="text-[#ffcd10] font-bold text-xs">Ana Paula, 29 anos - São Paulo/SP</p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-[#ffcd10] animate-scale-in delay-300 hover:shadow-lg transition-all duration-300">
                <p className="text-white text-sm italic mb-3">
                  "Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, e a Mariana é uma excelente professora. Conquistei minha independência!"
                </p>
                <p className="text-[#ffcd10] font-bold text-xs">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-[#ffcd10] animate-scale-in delay-400 hover:shadow-lg transition-all duration-300">
                <p className="text-white text-sm italic mb-3">
                  "Em menos de 3 meses após o curso, já estava com a agenda lotada! A qualidade do ensino é incrível, e o suporte me deu toda a confiança que eu precisava."
                </p>
                <p className="text-[#ffcd10] font-bold text-xs">Carla Santos, 25 anos - Belo Horizonte/MG</p>
              </div>
            </div>
          </div>
        </section>



        {/* Rodapé */}
        <footer className="bg-black text-white py-4 px-6 text-center">
          <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
          <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-[#E4B7B2] hover:underline">suporte@mariananails.com</a></p>
        </footer>

        {/* Seção Flutuante Completa */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm">
          <div className="bg-black/90 backdrop-blur-sm border border-[#ffcd10]/60 rounded-2xl p-4 shadow-2xl space-y-3">
            {/* Botão Garantir Minha Vaga */}
            <a 
              href={buildKiwifyUrl("https://pay.kiwify.com.br/lf9IZHj")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-base shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-black text-center animate-pulse-slow"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              onClick={() => handleCheckoutClick('fixed-bottom-button')}
            >
              🎯 GARANTIR MINHA VAGA
            </a>
            
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
  };

  return (
    <div className="min-h-screen">
      {/* Estilos de Animação */}
      <style jsx>{animationStyles}</style>
      
      {/* Overlay de Transição */}
      <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}></div>
      
      {renderQuestion()}
    </div>
  );
}
