'use client';

import Image from "next/image";
import { useEffect } from 'react';

export default function Landingpage() {
  // Fix simples para Safari iOS - apenas o essencial aqui
  // O restante está no layout.tsx usando Script
  useEffect(() => {
    // Forçar o fundo preto para casos extremos
    if (typeof document !== 'undefined') {
      document.documentElement.style.backgroundColor = 'black';
      document.body.style.backgroundColor = 'black';
    }
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-black" style={{ isolation: 'isolate', minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Hero section with background image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px]">
        {/* Background div with image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/mariana_landingpage.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
        
        {/* Overlay para melhorar a legibilidade */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
        ></div>

        {/* Conteúdo */}
        <div 
          className="relative flex flex-col items-center justify-end h-full px-6 text-center pb-6"
          style={{ zIndex: 2 }}
        >
          {/* Ícones de redes sociais */}
          <div className="flex space-x-4 mb-5">
            <a
              href="https://www.youtube.com/@mariananailsz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 p-1.5">
                <Image 
                  src="/images/youtube-app-white-icon.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                  priority
                />
              </div>
            </a>
            <a
              href="https://wa.me/5511944598264?text=Oi!%20gostaria%20de%20agendar%20um%20atendimento%20de%20unhas!%20vim%20do%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 p-1.5">
                <Image 
                  src="/images/whatsapp-white-icon.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  priority
                />
              </div>
            </a>
          </div>

          {/* Nome */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Mariana Souza
          </h1>
          
          {/* Instagram */}
          <p className="text-lg md:text-xl mb-4 text-white" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            @mariananailsz
          </p>
        </div>
      </div>

      {/* Bio section */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mx-auto">
          <p className="mb-6 text-base md:text-lg text-white">
            Mariana Nails é Nail Designer há mais de 3 anos, atendendo com excelência clientes de Barueri e região. 
            Especialista em alongamento, decoração e cuidado das unhas, Mariana é conhecida por sua atenção aos 
            detalhes e estilo autêntico, trazendo beleza e autoestima para cada cliente que passa por suas mãos.
          </p>
          <p className="mb-6 text-base md:text-lg text-white">
            Hoje, ela une sua experiência, criatividade e sensibilidade para transformar não só unhas, mas também 
            histórias — empoderando, ensinando e inspirando diariamente por meio do seu trabalho e dos seus conteúdos.
          </p>
        </div>
      </div>

      {/* Cards section */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a 
            href="https://pay.kiwify.com.br/lf9IZHj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_cursos.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Cursos & Apostilas</h3>
                <p className="text-white">Apostilas</p>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a 
            href="https://wa.me/5511944598264?text=Gostaria%20de%20agendar%20um%20horario%20%2F%20conhecer%20mais%20do%20seu%20trabalho%20Mariana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_agendar.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Agendar Agora</h3>
                <p className="text-white">Garanta seu horário de forma rápida e fácil.</p>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a 
            href="https://www.espacooliverbeauty.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_espacobeauty.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Conheça o Espaço Beauty</h3>
                <p className="text-white">Veja fotos e saiba mais sobre nosso ambiente.</p>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a 
            href="https://www.mariananails.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Site Mariana Nails</h3>
                <p className="text-white">Acesse o site completo para mais informações e serviços.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 