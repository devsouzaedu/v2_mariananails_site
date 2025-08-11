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
  }, [currentStep]);

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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
            {question.title}
          </h1>
          
          {question.question && (
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-[#E4B7B2] scroll-animate animate-slideInUp" data-animate>
              {question.question}
            </h2>
          )}
          
          <div className="space-y-4 scroll-animate animate-fadeInStagger" data-animate>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full max-w-md mx-auto block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg text-lg border border-[#ffcd10] hover:border-[#E4B7B2] transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                    index <= currentStep ? 'bg-[#ffcd10]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
            {question.title}
          </h1>
          
          <div className="space-y-4 scroll-animate animate-fadeInStagger" data-animate>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full max-w-md mx-auto block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg text-lg border border-[#ffcd10] hover:border-[#E4B7B2] transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                    index <= currentStep ? 'bg-[#ffcd10]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-[#ffcd10] text-center scroll-animate animate-fadeIn" data-animate>
              Prazer, sou a Mariana!
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Imagem da Mariana */}
              <div className="flex justify-center lg:justify-end scroll-animate animate-slideInLeft" data-animate>
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
              <div className="text-left space-y-6 text-white text-lg leading-relaxed scroll-animate animate-slideInRight" data-animate>
                <p>
                  Há mais de 10 anos eu não só vivo, mas <strong className="text-[#ffcd10]">PROSPERO</strong> com a minha paixão por unhas…
                </p>
                
                <p>
                  O que vou te mostrar <strong className="text-[#ffcd10]">AGORA</strong> nesse texto é o <strong className="text-[#ffcd10]">SEGREDO</strong> que separa as Nail Designers <strong className="text-[#ffcd10]">COMUNS</strong>, que imploram pra ter serviço, daquelas que têm agenda <strong className="text-[#ffcd10]">LOTADA</strong> e são <strong className="text-[#ffcd10]">DISPUTADAS</strong> pelas melhores clientes!
                </p>
                
                <p>
                  Lá no começo, eu via um mar de colegas talentosas afogadas no básico, naquela briga de foice por R$20, R$50... A frustração? <strong className="text-[#ffcd10]">GIGANTE!</strong> 😥
                </p>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-[#ffcd10] my-8">
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
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-bold text-[#ffcd10] mb-8 scroll-animate animate-fadeIn" data-animate>
                Imagina ter em mãos o passo a passo EXATO que as Nail Designers de sucesso escondem, do zero ao avançado, com mais de 30 aulas e 3 certificados internacionais...
              </p>
            </div>
            
            {/* Galeria de Unhas */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 scroll-animate animate-fadeIn" data-animate>
                Veja o que você vai aprender a fazer!
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 scroll-animate animate-fadeInStagger" data-animate>
                {[
                  'unhas_mariana_nails_curso (1).JPG',
                  'unhas_mariana_nails_curso (2).jpg',
                  'unhas_mariana_nails_curso (3).jpg',
                  'unhas_mariana_nails_curso (4).jpg',
                  'unhas_mariana_nails_curso (5).jpg',
                  'unhas_mariana_nails_curso (6).jpg',
                  'unhas_mariana_nails_curso (7).jpg',
                  'unhas_mariana_nails_curso (8).jpg',
                  'unhas_mariana_nails_curso (9).jpg',
                  'unhas_mariana_nails_curso (10).jpg',
                  'unhas_mariana_nails_curso (11).JPG',
                  'unhas_mariana_nails_curso (12).JPG',
                ].map((img, idx) => (
                  <div key={img} className="overflow-hidden rounded-lg border-2 border-[#ffcd10] shadow-sm hover:shadow-lg transition-all">
                    <Image
                      src={`/images/${img}`}
                      alt={`Unhas do curso Mariana Nails ${idx + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover object-center hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => setCurrentStep(questions.length + 2)}
                className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                É ISSO O QUE EU PRECISO AGORA
              </button>
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
          <p className="text-sm md:text-base font-bold animate-pulse">
            ⚠️ Devido a grande quantidade de acessos, esta página ficará disponível até o dia 11/08/25
          </p>
        </div>

        {/* Imagem de Topo */}
        <div className="relative w-full h-auto">
          <Image 
            src="/images/mariana_nails_rota_curso_topo2.png"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white scroll-animate animate-fadeIn" data-animate>
            Revelado: O único caminho que Transforma mulheres Iniciantes em Nail Designers DISPUTADAS com agenda lotada
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-white">
            <span>🔴 102 pessoas assistindo</span>
            <span>🔊 Clique para ativar o som</span>
          </div>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto scroll-animate animate-slideInUp" data-animate>
            Imagina ser uma referência em Unhas a ponto de ter que recusar tantos clientes...
          </p>
        </header>

        {/* Seção de conteúdo do curso */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
              Se prepare para Dominar cada detalhe do Zero ao Avançado
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm scroll-animate animate-fadeInStagger" data-animate>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#ffcd10] mb-3">📚 Módulos Completos e Didáticos</h3>
                <div className="text-[#E4B7B2] space-y-1">
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
                <div className="text-[#E4B7B2] space-y-1">
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
            <div className="mt-8 space-y-2 scroll-animate animate-slideInUp" data-animate>
              <h3 className="text-xl font-bold text-[#ffcd10] mb-4">O que você vai receber:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#E4B7B2]">
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
            <p className="text-2xl font-bold text-[#ffcd10] mb-4 scroll-animate animate-scaleIn" data-animate>
              O valor do curso de Nail Design é de R$ 19,90
            </p>
            
            <a
              href="https://pay.kiwify.com.br/lf9IZHj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl md:text-2xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg inline-block mb-8"
              style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              onClick={() => handleCheckoutClick('final-page-main-button')}
            >
              GARANTIR MINHA VAGA COM DESCONTO HOJE
            </a>
          </div>
        </section>

        {/* Seção de depoimentos */}
        <section className="py-8 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffcd10] scroll-animate animate-fadeIn" data-animate>
              Depoimentos reais de alunas que já estão se tornando Nail Designers de Valor!
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate animate-fadeInStagger" data-animate>
              <div className="bg-black p-4 rounded-lg border border-[#E4B7B2]">
                <p className="text-[#E4B7B2] text-sm italic mb-3">
                  "Eu estava desempregada e desacreditada, mas o curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês. É um sonho!"
                </p>
                <p className="text-[#ffcd10] font-bold text-xs">Ana Paula, 29 anos - São Paulo/SP</p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-[#E4B7B2]">
                <p className="text-[#E4B7B2] text-sm italic mb-3">
                  "Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, e a Mariana é uma excelente professora. Conquistei minha independência!"
                </p>
                <p className="text-[#ffcd10] font-bold text-xs">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-[#E4B7B2]">
                <p className="text-[#E4B7B2] text-sm italic mb-3">
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

        {/* Botão fixo */}
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
  };

  return (
    <div className="min-h-screen">
      {/* Estilos de Animação */}
      <style jsx>{animationStyles}</style>
      
      {renderQuestion()}
    </div>
  );
}
