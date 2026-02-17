"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://hub.la/r/X8iHoCihAcVW6f5ZNel5";
const PRECO_PARCELADO = "5,30";
const PRECO_AVISTA = "14,90";
const PARCELAS = "3x";

// ============================================
// COMPONENTES
// ============================================

// Botão CTA Verde (igual à referência)
const CTAButton = ({ children, className = "", href }: { children: React.ReactNode, className?: string, href?: string }) => (
    <a
        id="btn-checkout-cfr"
        href={href || CHECKOUT_URL}
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
// Dados dos módulos
const MODULES = [
    { num: "1", title: "Anatomia das Unhas", img: "/images/Capa_CFR_Anatomia.png", desc: "Entenda a estrutura completa da unha natural para trabalhar com segurança e precisão em cada alongamento.", bonus: false },
    { num: "2", title: "Teoria da Aplicação da Fibra", img: "/images/Capa_CFR_Teoria da Aplicacao da Fibra.png", desc: "Domine toda a teoria por trás da aplicação da fibra de vidro, entendendo cada etapa do processo para resultados perfeitos.", bonus: false },
    { num: "3", title: "Preparando a Fibra de Vidro", img: "/images/Capa_CFR_Preparando a Fibra de Vidro.png", desc: "Aprenda a preparar e manipular a fibra de vidro corretamente para garantir aderência, durabilidade e um acabamento impecável.", bonus: false },
    { num: "4", title: "Construção Amendoada", img: "/images/Capa_CFR_Construcao Amendoada.png", desc: "Técnica completa para criar o formato amendoado perfeito, o mais pedido pelas clientes, com acabamento natural e elegante.", bonus: false },
    { num: "5", title: "Construção Quadrada", img: "/images/Capa_CFR_Construcao Quadrada.png", desc: "Domine a construção do formato quadrado com precisão, garantindo simetria e um visual limpo e profissional.", bonus: false },
    { num: "", title: "Apostila de Apoio", img: "/images/Capa_CFR_ Apostila de Apoio.png", desc: "Material completo de apoio para você consultar sempre que precisar. Revise cada técnica no seu ritmo e aplique com confiança.", bonus: true },
];

// Carrossel de Módulos com auto-scroll e swipe
const ModulesCarousel = () => {
    const [current, setCurrent] = useState(0);
    const touchStart = React.useRef<number | null>(null);
    const touchEnd = React.useRef<number | null>(null);
    const autoplayRef = React.useRef<NodeJS.Timeout | null>(null);
    const total = MODULES.length;

    const goTo = React.useCallback((idx: number) => {
        setCurrent(((idx % total) + total) % total);
    }, [total]);

    const next = React.useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = React.useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-scroll
    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 3500);
        return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
    }, [total]);

    // Pause on interaction
    const resetAutoplay = React.useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 3500);
    }, [total]);

    // Touch handlers
    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.targetTouches[0].clientX;
        touchEnd.current = null;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };
    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const diff = touchStart.current - touchEnd.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
            resetAutoplay();
        }
        touchStart.current = null;
        touchEnd.current = null;
    };

    // Mouse drag handlers
    const mouseStart = React.useRef<number | null>(null);
    const onMouseDown = (e: React.MouseEvent) => { mouseStart.current = e.clientX; };
    const onMouseUp = (e: React.MouseEvent) => {
        if (mouseStart.current === null) return;
        const diff = mouseStart.current - e.clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
            resetAutoplay();
        }
        mouseStart.current = null;
    };

    const mod = MODULES[current];

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                    O que você recebe <span className="text-[#22C55E]">HOJE:</span>
                </h2>

                {/* Carousel container */}
                <div
                    className="relative select-none"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                >
                    {/* Card */}
                    <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#111] border ${mod.bonus ? 'border-[#22C55E]/40' : 'border-gray-800'} rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 relative`}>
                        {/* Badge BÔNUS */}
                        {mod.bonus && (
                            <div className="absolute top-4 right-4 z-20 bg-[#22C55E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                BÔNUS
                            </div>
                        )}

                        {/* Número do módulo */}
                        {!mod.bonus && (
                            <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-black font-bold text-lg">{mod.num}</span>
                            </div>
                        )}

                        {/* Imagem - SEM CROP, imagem inteira */}
                        <div className="w-full bg-black/30">
                            <Image
                                src={mod.img}
                                alt={mod.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                                priority={current === 0}
                            />
                        </div>

                        {/* Texto */}
                        <div className="p-5 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold text-white font-[family-name:var(--font-montserrat)] mb-2">
                                {mod.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {mod.desc}
                            </p>
                        </div>
                    </div>

                    {/* Setas de navegação */}
                    <button
                        onClick={() => { prev(); resetAutoplay(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
                        aria-label="Anterior"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={() => { next(); resetAutoplay(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
                        aria-label="Próximo"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {MODULES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { goTo(i); resetAutoplay(); }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current
                                ? (MODULES[i].bonus ? 'bg-[#22C55E] scale-125' : 'bg-[#D4AF37] scale-125')
                                : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <p className="text-center text-gray-500 text-sm mt-3 font-[family-name:var(--font-poppins)]">
                    {current + 1} de {total}
                </p>
            </div>
        </section>
    );
};

// ============================================
// PÁGINA PRINCIPAL
// ============================================
function CFRContent() {
    const searchParams = useSearchParams();
    const fbclid = searchParams.get('fbclid');

    // Monta a URL de checkout com fbclid se presente
    const checkoutUrl = fbclid
        ? `${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}fbclid=${encodeURIComponent(fbclid)}`
        : CHECKOUT_URL;

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

                        {/* Título do Produto */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                O Código da<br />
                                <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                            </h1>
                            <p className="text-gray-400 text-base md:text-xl tracking-wider uppercase font-[family-name:var(--font-poppins)]">O Segredo para Unhas de Fibra que Parecem Naturais</p>
                        </div>

                        {/* Imagem Principal + Copy */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-full md:w-1/2 relative flex justify-center">
                                <div className="relative">
                                    {/* Efeito de brilho atrás da foto */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/30 via-[#D4AF37]/20 to-[#C41E3A]/30 blur-3xl rounded-full scale-110"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Especialista em Fibra de Vidro"
                                        width={450}
                                        height={500}
                                        className="relative z-10 w-full max-w-[400px] h-auto object-contain mx-auto drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Badge flutuante - apenas desktop */}
                                    <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-2">
                                        <p className="text-sm text-gray-300">
                                            <strong className="text-[#D4AF37]">Mariana Nails</strong> • Especialista em Fibra de Vidro
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                    Descubra o método que vai te ensinar a fazer <strong className="text-[#D4AF37]">alongamentos em fibra de vidro com acabamento natural e realista</strong>, que ninguém vai perceber que é alongamento.
                                </p>
                                <p className="text-lg text-gray-300 mb-8">
                                    Domine a técnica da fibra realista e transforme o seu trabalho com unhas em referência de qualidade.
                                </p>

                                {/* Preço Hero - Box Verde igual à referência */}
                                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#22C55E]/50 rounded-2xl p-6 mb-6 shadow-lg shadow-[#22C55E]/10">
                                    <p className="text-white text-base mb-2">
                                        Preço de Lançamento: <span className="text-red-500 line-through font-bold">R$ 300,00</span>
                                    </p>
                                    <p className="text-white text-lg mb-4">Somente hoje por apenas {PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center md:justify-start gap-2 my-2">
                                        <span className="text-3xl text-[#22C55E] font-bold">R$</span>
                                        <span className="text-7xl md:text-8xl font-black text-[#22C55E]">{PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">ou R$ {PRECO_AVISTA} à vista</p>
                                </div>

                                <CTAButton href={checkoutUrl}>
                                    QUERO DOMINAR A FIBRA REALISTA!
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
                            SE A SUA FIBRA NÃO PARECE NATURAL,<br />
                            <span className="text-[#C41E3A]">SUA CLIENTE NÃO VOLTA.</span>
                        </h2>
                        <p className="text-white text-lg leading-relaxed mb-8">
                            O alongamento em fibra de vidro precisa ter um acabamento impecável e natural.
                            Se a unha fica grossa, com curvatura errada ou aspecto artificial, a cliente não indica
                            e você perde o que tem de mais valioso: a reputação.
                        </p>
                    </div>
                </section>

                {/* ========== PARA QUEM É ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            O <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Código da Fibra Realista</span> é para você que quer:
                        </h2>

                        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 md:p-8">
                            <ul className="space-y-4">
                                <CheckItem>✅ Fazer alongamentos em fibra de vidro com aspecto 100% natural</CheckItem>
                                <CheckItem>✅ Dominar a curvatura C perfeita para cada formato de unha</CheckItem>
                                <CheckItem>✅ Eliminar o aspecto artificial e grosseiro dos alongamentos</CheckItem>
                                <CheckItem>✅ Cobrar mais caro pelo seu trabalho com unhas de alto padrão</CheckItem>
                                <CheckItem>✅ Ter clientes que indicam o seu trabalho por causa do acabamento impecável</CheckItem>
                                <CheckItem>✅ Aprender os segredos da pinçagem e modelagem que deixam a fibra invisível</CheckItem>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== O QUE VOCÊ VAI APRENDER - CARROSSEL ========== */}
                <ModulesCarousel />

                {/* ========== PREÇO FINAL ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-[#111] border-2 border-[#C41E3A]/50 rounded-2xl overflow-hidden shadow-2xl shadow-[#C41E3A]/10">
                            {/* Header do Card */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-5 px-6 text-center">
                                <h3 className="text-2xl font-black text-white mb-1 font-[family-name:var(--font-montserrat)]">
                                    O Código da <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                                </h3>
                                <p className="text-white/90 font-medium text-sm uppercase tracking-wider">Oferta Especial de Lançamento</p>
                            </div>

                            <div className="p-6 md:p-8 text-center">
                                <h3 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-montserrat)]">Domine a fibra realista por um investimento acessível:</h3>

                                {/* Preço */}
                                <div className="mb-6">
                                    <p className="text-white text-sm mb-2 font-[family-name:var(--font-poppins)]">De: <span className="text-red-500 line-through">R$ 300,00</span></p>
                                    <p className="text-white mb-4 font-[family-name:var(--font-poppins)]">Por apenas {PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center gap-2 mb-2">
                                        <span className="text-2xl text-[#22C55E] font-[family-name:var(--font-montserrat)]">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-gray-400 font-[family-name:var(--font-poppins)]">Ou R$ {PRECO_AVISTA} à vista</p>
                                </div>

                                <CTAButton className="mb-6" href={checkoutUrl}>
                                    QUERO DOMINAR A FIBRA REALISTA!
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
                            Você pode continuar fazendo fibra com aspecto <span className="text-[#C41E3A]">artificial e grosseiro...</span>
                        </h2>
                        <p className="text-white text-lg mb-8 font-[family-name:var(--font-poppins)]">
                            Ou finalmente dominar a técnica da fibra realista e <strong className="text-[#22C55E]">se tornar referência em alongamento natural</strong>, com clientes que fazem fila para agendar com você.
                        </p>
                        <CTAButton className="max-w-md mx-auto" href={checkoutUrl}>
                            QUERO DOMINAR A FIBRA REALISTA!
                        </CTAButton>
                    </div>
                </section>

                {/* ========== SOBRE A EXPERT (Estilo Amanda) ========== */}
                <section className="relative py-16 px-4 bg-[#0a0a0a] overflow-hidden">
                    {/* Background gradient sutil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00]/60 via-[#0a0a0a] to-[#0a0a0a]"></div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        {/* Título grande no estilo Amanda */}
                        <h3 className="text-3xl md:text-5xl font-black uppercase mb-10 text-center font-[family-name:var(--font-montserrat)]">
                            <span className="text-white">QUEM É </span>
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">MARIANA NAILS?</span>
                        </h3>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Texto lado esquerdo */}
                            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                                <p className="text-gray-200 leading-relaxed text-base md:text-lg font-[family-name:var(--font-poppins)] mb-5">
                                    Instrutora Master e autoridade em nail design com mais de <strong className="text-[#D4AF37] underline decoration-[#D4AF37]/50">8 anos de experiência</strong>. Especialista em alongamento com fibra de vidro, Molde F1, Molde Ruso e Molde Dual Frame.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg font-[family-name:var(--font-poppins)] mb-5">
                                    Já formou mais de <strong className="text-white">500 alunas</strong> que hoje faturam de R$ 3.000 a R$ 10.000 por mês.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg font-[family-name:var(--font-poppins)] mb-5">
                                    Reconhecida como a maior vendedora de instrução de nail designer no digital, Mariana criou o <strong className="text-white">Código da Fibra Realista</strong> para ensinar seu método exclusivo de alongamento com aspecto natural e acabamento impecável.
                                </p>
                                <p className="text-[#D4AF37] leading-relaxed text-base md:text-lg font-bold font-[family-name:var(--font-montserrat)]">
                                    E agora, chegou a hora de compartilhar com você!
                                </p>
                            </div>

                            {/* Imagem lado direito */}
                            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                                <div className="relative">
                                    {/* Halo de luz atrás da imagem */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-[#C41E3A]/10 to-transparent blur-3xl rounded-full scale-110"></div>
                                    {/* Glow inferior */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#D4AF37]/15 blur-2xl rounded-full"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Especialista em Fibra de Vidro"
                                        width={450}
                                        height={550}
                                        className="relative z-10 w-full max-w-[380px] h-auto object-contain mx-auto drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINAL ========== */}
                <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-[family-name:var(--font-montserrat)]">
                            O Código da <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                        </h3>
                        <p className="text-white mb-6 text-lg">Essa oferta pode sair do ar a qualquer momento</p>
                        <CTAButton className="mb-4" href={checkoutUrl}>
                            QUERO DOMINAR A FIBRA REALISTA!
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
                        <a id="btn-whatsapp-cfr" href="https://wa.me/5511944598264" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Suporte via WhatsApp</a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default function CFRLandingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
            <CFRContent />
        </Suspense>
    );
}
