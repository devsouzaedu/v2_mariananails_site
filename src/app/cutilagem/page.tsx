"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";
const PRECO_PARCELADO = "5,33";
const PRECO_AVISTA = "14,90";
const PARCELAS = "3x";

// ============================================
// COMPONENTES
// ============================================

// Botão CTA Verde (igual à referência)
const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <a
        id="btn-checkout-mca"
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
      block w-full text-center
      bg-[#22C55E] hover:bg-[#16A34A]
      text-white font-bold text-lg md:text-xl
      py-4 px-8 rounded-full
      shadow-lg shadow-[#22C55E]/30
      transition-all duration-300 transform hover:scale-[1.02]
      uppercase tracking-wide
      font-[family-name:var(--font-montserrat)]
      ${className}
    `}
    >
        {children}
    </a>
);

// Header de Urgência com Contador Integrado
const UrgencyHeader = () => {
    const [time, setTime] = useState({ minutes: 14, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    return { minutes: 14, seconds: 59 }; // Reset
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#8B0000] text-white py-3 px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                    CONDIÇÃO ESPECIAL DE LANÇAMENTO:
                </span>
                <div className="flex items-center gap-2">
                    <div className="bg-black/40 px-3 py-1 rounded text-center min-w-[60px]">
                        <span className="text-xl sm:text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</span>
                        <span className="text-[10px] block text-gray-300 uppercase">Minutos</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold">:</span>
                    <div className="bg-black/40 px-3 py-1 rounded text-center min-w-[60px]">
                        <span className="text-xl sm:text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</span>
                        <span className="text-[10px] block text-gray-300 uppercase">Segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Check Item com Font Awesome
const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-white/90 font-[family-name:var(--font-poppins)]">
        <i className="fa-solid fa-check text-[#22C55E] text-lg mt-0.5"></i>
        <span>{children}</span>
    </li>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function CutilagemLandingPage() {
    return (
        <>
            {/* Font Awesome CDN */}
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </Head>

            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== HEADER URGÊNCIA COM CONTADOR ========== */}
                <UrgencyHeader />

                {/* ========== HERO SECTION ========== */}
                <section className="relative px-4 py-8 md:py-12">
                    <div className="max-w-5xl mx-auto">

                        {/* Título + Logo do Produto */}
                        <div className="text-center mb-8">
                            {/* Título em letras garrafais - visível apenas no mobile */}
                            <h1 className="md:hidden text-3xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                O Manual de<br />
                                <span className="text-4xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Cutilagem Avançada</span>
                            </h1>
                            <div className="inline-block mb-4 md:mb-6">
                                <Image
                                    src="/images/logo_mca.png"
                                    alt="O Manual de Cutilagem Avançada"
                                    width={400}
                                    height={200}
                                    className="w-full max-w-[200px] md:max-w-[400px] h-auto mx-auto"
                                    priority
                                />
                            </div>
                            <p className="text-gray-400 text-base md:text-xl tracking-wider uppercase font-[family-name:var(--font-poppins)]">Para Nail Designer</p>
                        </div>

                        {/* Imagem Principal + Copy */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-full md:w-1/2 relative flex justify-center">
                                <div className="relative">
                                    {/* Efeito de brilho atrás da foto */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/30 via-[#D4AF37]/20 to-[#C41E3A]/30 blur-3xl rounded-full scale-110"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Especialista em Nail Design"
                                        width={450}
                                        height={500}
                                        className="relative z-10 w-full max-w-[400px] h-auto object-contain mx-auto drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Badge flutuante - apenas desktop */}
                                    <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-2">
                                        <p className="text-sm text-gray-300">
                                            <strong className="text-[#D4AF37]">Mariana Nails</strong> • Especialista em Nail Design
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                    Copie os meus movimentos de uma <strong className="text-[#D4AF37]">Cutilagem Perfeita</strong> e entregue
                                    unhas impecáveis para suas clientes.
                                </p>
                                <p className="text-lg text-gray-300 mb-8">
                                    Aprenda o passo a passo e veja a diferença já na próxima cliente.
                                </p>

                                {/* Preço Hero - Box Verde igual à referência */}
                                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#22C55E]/50 rounded-2xl p-6 mb-6 shadow-lg shadow-[#22C55E]/10">
                                    <p className="text-white text-base mb-2">
                                        Preço de Lançamento: <span className="text-red-500 line-through font-bold">R$ 200,00</span>
                                    </p>
                                    <p className="text-white text-lg mb-4">Somente hoje por apenas {PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center md:justify-start gap-2 my-2">
                                        <span className="text-3xl text-[#22C55E] font-bold">R$</span>
                                        <span className="text-7xl md:text-8xl font-black text-[#22C55E]">{PRECO_PARCELADO}</span>
                                    </div>
                                </div>

                                <CTAButton>
                                    SIM, QUERO COMPRAR AGORA!
                                </CTAButton>
                                <p className="text-xs text-gray-500 mt-3 text-center">Acesso imediato • Pagamento seguro</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== DOR / PROBLEMA ==========  */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-white font-[family-name:var(--font-montserrat)]">
                            SE ERRAR NA CUTILAGEM,<br />
                            <span className="text-[#C41E3A]">SUA UNHA VAI PARECER BARATA.</span>
                        </h2>
                        <p className="text-white text-lg leading-relaxed mb-8">
                            A cutilagem é a base de qualquer serviço de unhas. Se não for bem feita,
                            não importa o quão bonita seja a nail art — o resultado final vai parecer amador.
                        </p>
                    </div>
                </section>

                {/* ========== PARA QUEM É ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            Compre o <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Manual de Cutilagem Avançada</span>, se você quer
                        </h2>

                        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 md:p-8">
                            <ul className="space-y-4">
                                <CheckItem>Fazer uma cutilagem fundinha, sem dar bife e sem machucar a cliente</CheckItem>
                                <CheckItem>Reduzir o tempo de atendimento pela metade (mais clientes = mais lucro)</CheckItem>
                                <CheckItem>Cobrar mais caro por um acabamento visivelmente superior</CheckItem>
                                <CheckItem>Aprender a técnica do corte contínuo de uma vez por todas</CheckItem>
                                <CheckItem>Ter confiança ao pegar o alicate, sem medo de errar</CheckItem>
                                <CheckItem>Deixar a cutícula pronta para receber qualquer tipo de esmaltação</CheckItem>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== O QUE VOCÊ VAI APRENDER ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                            O que você recebe <span className="text-[#22C55E]">HOJE:</span>
                        </h2>

                        {/* Grid de Módulos - Cards no desktop, texto simples no mobile */}
                        {/* Desktop: Cards coloridos */}
                        <div className="hidden md:grid grid-cols-4 gap-4 mb-10">
                            {/* Módulo 1 - Cutilagem com Alicate */}
                            <div className="group relative bg-gradient-to-b from-[#C41E3A] to-[#8B0000] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#C41E3A]/30">
                                <div className="p-4 text-center">
                                    <p className="text-xs text-white/70 font-medium mb-1">O Manual de</p>
                                    <h4 className="text-lg font-bold text-white leading-tight mb-1">Cutilagem<br />Avançada</h4>
                                    <div className="h-px bg-[#D4AF37] w-12 mx-auto my-2"></div>
                                    <p className="text-sm font-bold text-[#D4AF37]">Cutilagem com Alicate</p>
                                </div>
                                <div className="h-1 bg-[#D4AF37] w-full absolute bottom-0"></div>
                            </div>

                            {/* Módulo 2 - Cutilagem Combinada */}
                            <div className="group relative bg-gradient-to-b from-[#FF8C00] to-[#CC7000] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF8C00]/30">
                                <div className="p-4 text-center">
                                    <p className="text-xs text-white/70 font-medium mb-1">O Manual de</p>
                                    <h4 className="text-lg font-bold text-white leading-tight mb-1">Cutilagem<br />Avançada</h4>
                                    <div className="h-px bg-white/50 w-12 mx-auto my-2"></div>
                                    <p className="text-sm font-bold text-white">Cutilagem Combinada</p>
                                </div>
                                <div className="h-1 bg-[#D4AF37] w-full absolute bottom-0"></div>
                            </div>

                            {/* Módulo 3 - Cutilagem com Cera */}
                            <div className="group relative bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FFD700]/30">
                                <div className="p-4 text-center">
                                    <p className="text-xs text-black/60 font-medium mb-1">O Manual de</p>
                                    <h4 className="text-lg font-bold text-black leading-tight mb-1">Cutilagem<br />Avançada</h4>
                                    <div className="h-px bg-black/30 w-12 mx-auto my-2"></div>
                                    <p className="text-sm font-bold text-[#8B0000]">Cutilagem com Cera</p>
                                </div>
                                <div className="h-1 bg-[#8B0000] w-full absolute bottom-0"></div>
                            </div>

                            {/* Módulo 4 - Apostila */}
                            <div className="group relative bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#1E3A8A]/30">
                                <div className="p-4 text-center">
                                    <p className="text-xs text-white/70 font-medium mb-1">O Manual de</p>
                                    <h4 className="text-lg font-bold text-white leading-tight mb-1">Cutilagem<br />Avançada</h4>
                                    <div className="h-px bg-white/50 w-12 mx-auto my-2"></div>
                                    <p className="text-sm font-bold text-[#D4AF37]">Apostila</p>
                                </div>
                                <div className="h-1 bg-[#D4AF37] w-full absolute bottom-0"></div>
                            </div>
                        </div>

                        {/* Mobile: Lista simples de texto */}
                        <ul className="md:hidden space-y-3 mb-10 text-center">
                            <li className="text-white text-lg font-medium"><i className="fa-solid fa-check text-[#22C55E] mr-2"></i>Cutilagem com Alicate</li>
                            <li className="text-white text-lg font-medium"><i className="fa-solid fa-check text-[#22C55E] mr-2"></i>Cutilagem Combinada</li>
                            <li className="text-white text-lg font-medium"><i className="fa-solid fa-check text-[#22C55E] mr-2"></i>Cutilagem com Cera</li>
                            <li className="text-white text-lg font-medium"><i className="fa-solid fa-check text-[#22C55E] mr-2"></i>Apostila Completa em PDF</li>
                        </ul>

                        {/* Descrição dos itens */}
                        <div className="space-y-4">
                            {/* Item 1 */}
                            <div className="bg-[#111] border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-video text-2xl text-white"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-montserrat)]">Cutilagem com Alicate</h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">Técnica clássica dominada - corte contínuo perfeito</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-500 line-through text-sm">R$ 67</span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-[#111] border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#FF8C00] to-[#CC7000] rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-hand-sparkles text-2xl text-white"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-montserrat)]">Cutilagem Combinada</h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">Combine pusher + alicate para resultado profissional</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-500 line-through text-sm">R$ 67</span>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="bg-[#111] border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-fire text-2xl text-white"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-montserrat)]">Cutilagem com Cera</h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">Método inovador para cutículas sensíveis</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-500 line-through text-sm">R$ 47</span>
                                </div>
                            </div>

                            {/* Item 4 - Apostila */}
                            <div className="bg-[#111] border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-book text-2xl text-white"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-montserrat)]">Apostila Completa em PDF</h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">Download para consultar sempre que precisar</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-500 line-through text-sm">R$ 47</span>
                                </div>
                            </div>

                            {/* Bônus */}
                            <div className="bg-gradient-to-r from-[#22C55E]/20 to-[#111] border border-[#22C55E]/50 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-16 h-16 flex-shrink-0 bg-[#22C55E] rounded-lg flex items-center justify-center">
                                    <i className="fa-solid fa-gift text-2xl text-white"></i>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block bg-[#22C55E] text-white text-xs font-bold px-2 py-1 rounded mb-2 font-[family-name:var(--font-montserrat)]">BÔNUS EXCLUSIVO</div>
                                    <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-montserrat)]">Checklist de Materiais Profissionais</h3>
                                    <p className="text-gray-300 text-sm font-[family-name:var(--font-poppins)]">Lista completa dos materiais que eu uso no meu ateliê</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#22C55E] font-bold">GRÁTIS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== PREÇO FINAL ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-[#111] border-2 border-[#C41E3A]/50 rounded-2xl overflow-hidden shadow-2xl shadow-[#C41E3A]/10">
                            {/* Header do Card com Logo */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-5 px-6 text-center">
                                <Image
                                    src="/images/logo_mca.png"
                                    alt="O Manual de Cutilagem Avançada"
                                    width={200}
                                    height={100}
                                    className="w-40 h-auto mx-auto mb-2"
                                />
                                <p className="text-white/90 font-medium text-sm uppercase tracking-wider">Oferta Especial de Lançamento</p>
                            </div>

                            <div className="p-6 md:p-8 text-center">
                                <h3 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-montserrat)]">Leve todo o conteúdo por um preço SIMBÓLICO:</h3>

                                {/* Preço */}
                                <div className="mb-6">
                                    <p className="text-white text-sm mb-2 font-[family-name:var(--font-poppins)]">De: <span className="text-red-500 line-through">R$ 200,00</span></p>
                                    <p className="text-white mb-4 font-[family-name:var(--font-poppins)]">Por apenas {PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center gap-2 mb-2">
                                        <span className="text-2xl text-[#22C55E] font-[family-name:var(--font-montserrat)]">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-gray-400 font-[family-name:var(--font-poppins)]">Ou R$ {PRECO_AVISTA} à vista</p>
                                </div>

                                <CTAButton className="mb-6">
                                    SIM, QUERO COMPRAR AGORA!
                                </CTAButton>

                                {/* Garantia */}
                                <div className="flex items-center justify-center gap-3 text-white text-sm font-[family-name:var(--font-poppins)]">
                                    <i className="fa-solid fa-shield-halved text-xl text-[#22C55E]"></i>
                                    <span>7 dias de garantia incondicional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== TRANSFORMAÇÃO ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white font-[family-name:var(--font-montserrat)]">
                            Agora é com você: continuar ouvindo reclamações do tipo <span className="text-[#C41E3A]">"ficou tortinha..."</span>
                        </h2>
                        <p className="text-white text-lg mb-8 font-[family-name:var(--font-poppins)]">
                            Ou finalmente dominar a cutilagem e <strong className="text-[#22C55E]">entregar um trabalho digno de elogios</strong> toda vez que a cliente postar no Instagram.
                        </p>
                        <CTAButton className="max-w-md mx-auto">
                            SIM, QUERO COMPRAR AGORA!
                        </CTAButton>
                    </div>
                </section>

                {/* ========== SOBRE A EXPERT ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-10">
                            <div className="w-48 md:w-56 flex-shrink-0 relative">
                                {/* Efeito de brilho */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/20 to-[#D4AF37]/20 blur-2xl rounded-full"></div>
                                <Image
                                    src="/images/mariana_site.png"
                                    alt="Mariana Nails"
                                    width={224}
                                    height={224}
                                    className="relative z-10 w-full h-auto rounded-2xl border-4 border-[#D4AF37]/50 shadow-xl"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 font-[family-name:var(--font-montserrat)]">Quem é Mariana Nails?</h3>
                                <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-lora)] mb-4">
                                    Especialista em Nail Design com mais de <strong className="text-white">8 anos de experiência</strong>. Já formou mais de 500 alunas
                                    que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas.
                                </p>
                                <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-poppins)]">
                                    Conhecida por suas técnicas práticas e resultados rápidos, Mariana criou o Manual de Cutilagem Avançada para ajudar nail designers a dominarem a base de todo serviço de qualidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINAL ========== */}
                <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <div className="max-w-xl mx-auto text-center">
                        <Image
                            src="/images/logo_mca.png"
                            alt="O Manual de Cutilagem Avançada"
                            width={180}
                            height={90}
                            className="w-36 h-auto mx-auto mb-6 opacity-80"
                        />
                        <p className="text-white mb-6 text-lg">Essa oferta pode sair do ar a qualquer momento</p>
                        <CTAButton className="mb-4">
                            SIM, QUERO COMPRAR AGORA!
                        </CTAButton>
                        <p className="text-xs text-gray-400">Pagamento 100% seguro • Acesso imediato após confirmação</p>
                    </div>
                </section>

                {/* ========== FOOTER ========== */}
                <footer className="py-8 px-4 bg-black text-center border-t border-gray-900">
                    <p className="text-gray-600 text-sm mb-2">
                        © {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-700">
                        <a href="#" className="hover:text-gray-400">Termos de Uso</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
                        <span>•</span>
                        <a id="btn-whatsapp-mca" href="https://wa.me/5511944598264" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Suporte via WhatsApp</a>
                    </div>
                </footer>
            </div>
        </>
    );
}
