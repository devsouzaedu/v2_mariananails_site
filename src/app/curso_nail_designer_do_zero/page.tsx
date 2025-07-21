"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CursoNailDesignerPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [vagasRestantes, setVagasRestantes] = useState(2); // 90% preenchidas = 2 vagas restantes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Oferta Limitada */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
              🔥 OFERTA POR TEMPO LIMITADO
            </div>
            
            {/* Contador */}
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">MINUTOS</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">SEGUNDOS</div>
              </div>
            </div>

            {/* Vagas Limitadas */}
            <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-bold mb-6">
              ⚠️ APENAS {vagasRestantes} VAGAS RESTANTES DE 20!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-handwritten font-bold mb-6 text-white">
                <span className="text-yellow-300">CURSO COMPLETO</span><br />
                Nail Art do Zero ao Profissional
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed text-white">
                Comece <strong>hoje</strong>, no <strong>seu ritmo</strong>, com <strong>suporte online, garantia total</strong> e <strong>aprovado</strong> por mais de <strong>400 mil alunos!</strong>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Metodologia Exclusiva e Prática</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Certificado Digital Reconhecido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Acesso Vitalício ao Conteúdo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Suporte Completo para Dúvidas</span>
                </div>
              </div>

              {/* Preço */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-sm line-through opacity-70 mb-2 text-white">De R$ 39,99 por:</div>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">R$ 19,99</div>
                  <div className="text-sm text-white">ou 3x de R$ 6,67 sem juros</div>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="text-center">
                <a 
                  href="https://pay.kiwify.com.br/lf9IZHj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                >
                  🚀 QUERO COMEÇAR AGORA!
                </a>
                <p className="text-sm mt-3 opacity-80 text-white">✅ Acesso Imediato • 🔒 Compra 100% Segura</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (33).jpg" 
                  alt="Curso Nail Designer do Zero ao Profissional" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                />
              </div>
              
              {/* Badge de Destaque */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                ⭐ MAIS VENDIDO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Credibilidade */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-handwritten font-bold text-gray-800 mb-4">
              Com uma Metodologia Exclusiva e Prática
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra Seu Potencial e Torne-se Referência em Unhas Perfeitas. 
              Aprenda <strong>técnicas inovadoras</strong> com aulas dinâmicas que transformarão você em uma <strong>especialista</strong> nas técnicas mais desejadas do mercado.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">400K+</div>
              <div className="text-gray-600">Alunos Aprovados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">17</div>
              <div className="text-gray-600">Módulos Completos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">142h</div>
              <div className="text-gray-600">Carga Horária</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
              Ao final do curso você será capaz de:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Criar designs que fazem suas clientes voltarem sempre</h3>
              <p className="text-gray-600">Domine técnicas exclusivas de nail art que transformam unhas simples em obras de arte. Suas clientes vão se apaixonar pelo seu trabalho e se tornarem suas maiores divulgadoras, garantindo agenda sempre lotada!</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Dominar alongamentos que duram semanas sem quebrar</h3>
              <p className="text-gray-600">Aprenda os segredos profissionais para aplicar gel, fibra de vidro e outros materiais com perfeição absoluta. Seus alongamentos vão ser resistentes, duradouros e com acabamento impecável que impressiona até as clientes mais exigentes!</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Garantir unhas saudáveis que suas clientes vão amar</h3>
              <p className="text-gray-600">Torne-se especialista em cuidados que preservam a saúde natural das unhas. Suas clientes vão notar a diferença: unhas mais fortes, bonitas e saudáveis. Isso significa fidelização garantida e indicações constantes!</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Construir uma carreira lucrativa e reconhecida</h3>
              <p className="text-gray-600">Transforme sua paixão por unhas em um negócio próspero! Aprenda não só as técnicas, mas também como precificar seus serviços, conquistar clientes e se destacar como a nail designer mais procurada da sua região!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Curso - Módulos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
              Conheça os Módulos do Curso Completo
            </h2>
            <p className="text-xl text-gray-600">
              Aprenda passo a passo com nossa metodologia exclusiva
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Módulo 1 - Alongamento */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Módulo 1 - Alongamento</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Lista de Materiais (3 partes)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 01 - Anatomia das unhas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 02 - Preparação das unhas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 03 - Abrindo a fibra de vidro</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 04 - Aplicação da fibra de vidro</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 05 - Corte da fibra nos formatos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 06 - Formato amendoado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 07 - Formato Bailarina</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 08 - Formato Quadrado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 09 - Formato Stiletto</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 10 - Remoção segura do gel</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 11 - Esmaltação em gel</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 12 - Banho de Gel</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">15 conteúdos</span>
              </div>
            </div>

            {/* Módulo 2 - Nail Art Intermediário */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Módulo 2 - Nail Art Intermediário</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 01 - Esmaltação em Gel</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 02 - Crocodilo Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 03 - Tortoise Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 04 - Animal Print</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 05 - Nail art 8Ball</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 06 - Conchas do Mar Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 07 - Gold Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 08 - Flor Top Coat Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 09 - Nail Art Livre</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 10 - Estrelas Metalizadas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 11 - Abacate | Fruit Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 12 - Kiwi | Fruit Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 13 - Water pool | Efeito piscina</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 14 - Pitaya | Fruit Nails</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Aula 15 - Efeito Joia Nail art</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">15 conteúdos</span>
              </div>
            </div>
          </div>

          {/* Apostila */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 border border-yellow-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Apostila Nail Designer</h3>
                <p className="text-gray-600">Material de apoio completo em PDF</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Receba acesso à apostila completa do Curso Nail Art Mariana Nails com todo o conteúdo teórico para acompanhar as aulas práticas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Exclusivos */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold mb-6 text-gray-800">
              E você ainda vai receber acesso a:
            </h2>
          </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Certificado Digital Reconhecido</h3>
              <p className="text-gray-600">Válido para atuação profissional em todo território nacional</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Acesso Vitalício</h3>
              <p className="text-gray-600">Acesso imediato e para sempre ao conteúdo completo do curso</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Suporte Completo</h3>
              <p className="text-gray-600">Disponível para tirar todas as suas dúvidas ao longo do aprendizado</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Comunidade Exclusiva</h3>
              <p className="text-gray-600">Grupo de alunos para compartilhar evolução e se inspirar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
            Comece Hoje a Construir uma Carreira Altamente Valorizada!
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            O mercado de unhas nunca esteve tão aquecido, e <strong>profissionais qualificadas estão entre as mais disputadas.</strong> 
            Agora é a sua vez de transformar paixão e talento em uma carreira admirada e cheia de possibilidades.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 inline-block border border-primary-200">
            <div className="text-center">
              <div className="text-sm line-through opacity-70 mb-2">De R$ 39,99 por:</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">R$ 19,99</div>
              <div className="text-sm text-gray-700">ou 3x de R$ 6,67 sem juros</div>
            </div>
          </div>

          <div>
            <a 
              href="https://pay.kiwify.com.br/lf9IZHj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              🚀 SIM, QUERO COMEÇAR AGORA!
            </a>
            <p className="text-sm mt-3 text-gray-700">✅ Acesso Imediato • 🔒 Compra 100% Segura</p>
          </div>
        </div>
      </section>

      {/* Transformações - Antes e Depois */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
              De Aprendiz a Artista: Transforme Sua Paixão em Carreira
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Você acha que precisa de anos de experiência para se tornar uma profissional das unhas? 
              <strong> Pense de novo. Com o Nail Academy, até quem está começando do zero vira um fenômeno em esmaltação, cutilagem e alongamento.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image 
                  src="/images/unhas_barueri_nail_art_a (1).jpg" 
                  alt="Trabalhos de Alunas do Curso" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Técnicas Profissionais</h3>
              <p className="text-gray-600">Domine alongamentos perfeitos</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image 
                  src="/images/unhas_barueri_nail_art_a (5).jpg" 
                  alt="Nail Art Avançada" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Nail Art Exclusiva</h3>
              <p className="text-gray-600">Crie designs únicos e modernos</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image 
                  src="/images/unhas_barueri_nail_art_a (7).jpg" 
                  alt="Resultados Profissionais" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Resultados Incríveis</h3>
              <p className="text-gray-600">Clientes satisfeitas e fidelizadas</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Torne-se a Mestre dos Alongamentos: Refine Suas Habilidades e Saia na Frente da Concorrência!
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Você já é uma profissional, mas quer ir além? <strong>O Nail Academy oferece técnicas avançadas que colocarão você no topo do jogo.</strong> 
                Não é apenas sobre ser boa; é sobre ser a melhor. E quando você é a melhor, as clientes fazem fila à sua porta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
              Veja o que nossas alunas dizem sobre o curso!
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 400 mil alunas já transformaram suas vidas profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Amanda Silva</h4>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "O curso da Mariana mudou minha vida! Consegui abrir meu próprio studio e hoje tenho uma agenda lotada. 
                As técnicas são incríveis e o suporte é excepcional!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Carla Oliveira</h4>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Fiz o curso sem saber nada de unhas e hoje sou referência na minha cidade. 
                A metodologia é perfeita para iniciantes e o certificado me deu credibilidade!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-lg">J</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Juliana Santos</h4>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Investimento que mais valeu a pena na minha vida! Aprendi técnicas que me diferenciaram no mercado. 
                Minhas clientes sempre elogiam e indicam outras pessoas!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.5-1.5a9 9 0 11-4.5-7.5"></path>
              </svg>
            </div>
            <h2 className="text-4xl font-handwritten font-bold mb-6">
              A Decisão mais Segura da Sua Vida!
            </h2>
            <h3 className="text-2xl font-bold mb-6">Experimente por 7 Dias!</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-xl leading-relaxed">
              Estamos tão confiantes de que o Nail Academy vai transformar sua carreira que oferecemos uma 
              <strong> garantia inabalável de 7 dias.</strong> Assista às aulas, teste as técnicas e veja a magia acontecer.
            </p>
            <p className="text-lg mt-4">
              Se por algum motivo você não sentir que o curso vale cada centavo, basta nos enviar um único e-mail e 
              <strong> devolveremos 100% do seu investimento.</strong>
            </p>
            <p className="text-lg mt-4 font-bold">
              Sem burocracia, sem perguntas. Você não tem nada a perder e um mundo de sucesso para ganhar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold mb-2">Dados Seguros</h4>
              <p className="text-sm text-white/80">Seus dados pessoais são protegidos e não compartilhados</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Acesso Imediato</h4>
              <p className="text-sm text-white/80">Receba o curso no seu email instantaneamente</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-bold mb-2">Pagamento Seguro</h4>
              <p className="text-sm text-white/80">Processamento automático, rápido e confiável</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-gray-800 mb-6">
              3 Certificados Profissionais Inclusos e Válidos em todo território brasileiro!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Você vai ter acesso a estes certificados profissionais disponíveis em sua área restrita após concluir o curso.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 inline-block">
              <h3 className="text-2xl font-bold text-primary-800 mb-2">142 horas de carga horária!</h3>
              <p className="text-primary-700">
                Nossa empresa é associada à ABED (Associação Brasileira de Educação a Distância).
              </p>
              <p className="text-sm text-primary-600 mt-2">
                Certificado com carga horária, CNPJ e válido em todo território nacional em conformidade com o Decreto Presidencial N° 5.154.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((cert) => (
              <div key={cert} className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-lg p-4 text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Certificado {cert}</h4>
                <p className="text-xs text-gray-600">Módulo Especializado</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Final */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
              🚨 ÚLTIMAS {vagasRestantes} VAGAS!
            </div>
            
            <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-6 text-white">
              Oferta Exclusiva Por Tempo Limitado!
            </h2>
            
            {/* Contador Final */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm text-white">HORAS</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm text-white">MINUTOS</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm text-white">SEGUNDOS</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="text-2xl line-through opacity-70 mb-4 text-white">De R$ 39,99</div>
              <div className="text-6xl font-bold text-yellow-300 mb-4">R$ 19,99</div>
              <div className="text-xl mb-6 text-white">ou 3x de R$ 6,67 sem juros</div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
                <div className="flex items-center justify-center text-white">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Acesso Vitalício
                </div>
                <div className="flex items-center justify-center text-white">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3 Certificados Profissionais
                </div>
                <div className="flex items-center justify-center text-white">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Garantia 7 dias
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="https://pay.kiwify.com.br/lf9IZHj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block animate-pulse"
            >
              🚀 SIM, QUERO COMEÇAR AGORA!
            </a>
            <p className="text-lg text-white">✅ Acesso Imediato • 🔒 Compra 100% Segura • 📱 Suporte Completo</p>
            <p className="text-sm opacity-80 text-white">
              Não perca esta oportunidade única! Esta oferta é válida apenas por tempo limitado.
            </p>
          </div>
        </div>
      </section>

      {/* Footer da Landing */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm opacity-80 mb-4">
            © 2025 Mariana Nails - Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
} 