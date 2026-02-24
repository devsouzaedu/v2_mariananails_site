"use client";
import React, { useState, useEffect, Suspense, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://hub.la/r/X8iHoCihAcVW6f5ZNel5";
const PRECO_PARCELADO = "5,09";
const PRECO_AVISTA = "14,90";
const PARCELAS = "3x";
const PRECO_ANCORA = "308,00";

// ============================================
// SVG ICONS (inline, sem Font Awesome)
// ============================================
const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-8 h-8 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    </svg>
);

const XIcon = () => (
    <svg className="w-5 h-5 text-[#C41E3A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const StarIcon = () => (
    <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const GiftIcon = () => (
    <svg className="w-6 h-6 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 7h-1.26A2.5 2.5 0 0014.5 4c-.77 0-1.44.35-1.89.89L12 5.6l-.61-.71A2.49 2.49 0 009.5 4a2.5 2.5 0 00-4.24 3H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2zm-5.5-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM3 13v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7H3z" />
    </svg>
);

const PlayIcon = () => (
    <svg className="w-16 h-16 text-white drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// ============================================
// COMPONENTES
// ============================================

// Botão CTA Verde
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
      animate-pulse-gentle
      ${className}
    `}
    >
        {children}
    </a>
);

// Header de Urgência com Contador
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
                    return { minutes: 14, seconds: 59 };
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#8B0000] text-white py-3 px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                    ⚡ OFERTA ESPECIAL POR TEMPO LIMITADO:
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

// Check Item
const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-white/90 font-[family-name:var(--font-poppins)]">
        <CheckIcon />
        <span>{children}</span>
    </li>
);

// Pain Item (X vermelho)
const PainItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-white/70 font-[family-name:var(--font-poppins)]">
        <XIcon />
        <span className="line-through decoration-[#C41E3A]/50">{children}</span>
    </li>
);

// FAQ Accordion Item
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-800 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
            >
                <span className="text-white font-semibold text-base pr-4">{question}</span>
                <span className={`transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

// Dados dos módulos
const MODULES = [
    { num: "1", title: "Anatomia das Unhas", img: "/images/Capa_CFR_Anatomia.png", desc: "Entenda a estrutura completa da unha natural para trabalhar com segurança e precisão.", bonus: false, value: "R$ 47,00" },
    { num: "2", title: "Teoria da Aplicação da Fibra", img: "/images/Capa_CFR_Teoria da Aplicacao da Fibra.png", desc: "Domine toda a teoria por trás da aplicação da fibra de vidro para resultados perfeitos.", bonus: false, value: "R$ 67,00" },
    { num: "3", title: "Preparando a Fibra de Vidro", img: "/images/Capa_CFR_Preparando a Fibra de Vidro.png", desc: "Aprenda a preparar e manipular a fibra de vidro corretamente para garantir aderência e durabilidade.", bonus: false, value: "R$ 57,00" },
    { num: "4", title: "Construção Amendoada", img: "/images/Capa_CFR_Construcao Amendoada.png", desc: "Técnica completa para criar o formato amendoado perfeito, o mais pedido pelas clientes.", bonus: false, value: "R$ 77,00" },
    { num: "5", title: "Construção Quadrada", img: "/images/Capa_CFR_Construcao Quadrada.png", desc: "Domine a construção do formato quadrado com precisão e simetria profissional.", bonus: false, value: "R$ 67,00" },
    { num: "", title: "Apostila de Apoio", img: "/images/Capa_CFR_ Apostila de Apoio.png", desc: "Material completo para consultar sempre que precisar. Revise cada técnica no seu ritmo.", bonus: true, value: "R$ 37,00" },
];

// Carrossel de Módulos
const ModulesCarousel = () => {
    const [current, setCurrent] = useState(0);
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const total = MODULES.length;

    const goTo = useCallback((idx: number) => {
        setCurrent(((idx % total) + total) % total);
    }, [total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 3500);
        return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
    }, [total]);

    const resetAutoplay = useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 3500);
    }, [total]);

    const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.targetTouches[0].clientX; touchEnd.current = null; };
    const onTouchMove = (e: React.TouchEvent) => { touchEnd.current = e.targetTouches[0].clientX; };
    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const diff = touchStart.current - touchEnd.current;
        if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); resetAutoplay(); }
        touchStart.current = null; touchEnd.current = null;
    };

    const mouseStart = useRef<number | null>(null);
    const onMouseDown = (e: React.MouseEvent) => { mouseStart.current = e.clientX; };
    const onMouseUp = (e: React.MouseEvent) => {
        if (mouseStart.current === null) return;
        const diff = mouseStart.current - e.clientX;
        if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); resetAutoplay(); }
        mouseStart.current = null;
    };

    const mod = MODULES[current];

    return (
        <div className="max-w-3xl mx-auto">
            <div className="relative select-none" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#111] border ${mod.bonus ? 'border-[#22C55E]/40' : 'border-gray-800'} rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 relative`}>
                    {mod.bonus && <div className="absolute top-4 right-4 z-20 bg-[#22C55E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">BÔNUS</div>}
                    {!mod.bonus && <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"><span className="text-black font-bold text-lg">{mod.num}</span></div>}
                    <div className="w-full bg-black/30">
                        <Image src={mod.img} alt={mod.title} width={800} height={600} className="w-full h-auto object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 700px" />
                    </div>
                    <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-bold text-white font-[family-name:var(--font-montserrat)]">{mod.title}</h3>
                            <span className="text-[#D4AF37] font-bold text-sm whitespace-nowrap ml-3">Valor: {mod.value}</span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{mod.desc}</p>
                    </div>
                </div>

                <button onClick={() => { prev(); resetAutoplay(); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg" aria-label="Anterior">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => { next(); resetAutoplay(); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg" aria-label="Próximo">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {MODULES.map((_, i) => (
                    <button key={i} onClick={() => { goTo(i); resetAutoplay(); }} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? (MODULES[i].bonus ? 'bg-[#22C55E] scale-125' : 'bg-[#D4AF37] scale-125') : 'bg-gray-600 hover:bg-gray-400'}`} aria-label={`Slide ${i + 1}`} />
                ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-3 font-[family-name:var(--font-poppins)]">{current + 1} de {total}</p>
        </div>
    );
};

// Step item para passo a passo
const StepItem = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="flex gap-4 items-start">
        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D4AF37]/20">
            <span className="text-black font-black text-xl">{number}</span>
        </div>
        <div>
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
function CFRContent() {
    const searchParams = useSearchParams();
    const fbclid = searchParams.get('fbclid');

    const checkoutUrl = fbclid
        ? `${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}fbclid=${encodeURIComponent(fbclid)}`
        : CHECKOUT_URL;

    const totalValue = "R$ 352,00";

    return (
        <>
            <style jsx global>{`
                @keyframes pulse-gentle {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                    50% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
                }
                .animate-pulse-gentle {
                    animation: pulse-gentle 2s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== HEADER URGÊNCIA ========== */}
                <UrgencyHeader />

                {/* ========== 1. HERO + CTA IMEDIATO ========== */}
                <section className="relative px-4 py-8 md:py-12">
                    <div className="max-w-5xl mx-auto">

                        {/* Título */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                O Código da<br />
                                <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                            </h1>
                            <p className="text-gray-400 text-base md:text-xl tracking-wider uppercase font-[family-name:var(--font-poppins)]">O Segredo para Unhas de Fibra que Parecem Naturais</p>
                        </div>

                        {/* Imagem + Copy + CTA */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-full md:w-1/2 relative flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/30 via-[#D4AF37]/20 to-[#C41E3A]/30 blur-3xl rounded-full scale-110"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Especialista em Fibra de Vidro"
                                        width={450}
                                        height={500}
                                        className="relative z-10 w-full max-w-[400px] h-auto object-contain mx-auto drop-shadow-2xl"
                                        priority
                                        fetchPriority="high"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                    <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-2">
                                        <p className="text-sm text-gray-300">
                                            <strong className="text-[#D4AF37]">Mariana Nails</strong> • +500 alunas formadas
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                    Descubra o método que vai te ensinar a fazer <strong className="text-[#D4AF37]">alongamentos em fibra de vidro com acabamento natural e realista</strong>, que ninguém vai perceber que é alongamento.
                                </p>
                                <p className="text-lg text-gray-300 mb-8">
                                    Domine a técnica e se torne referência em fibra de vidro na sua região.
                                </p>

                                {/* Preço Hero - CTA Imediato */}
                                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#22C55E]/50 rounded-2xl p-6 mb-6 shadow-lg shadow-[#22C55E]/10">
                                    <p className="text-white text-base mb-2">
                                        De: <span className="text-red-500 line-through font-bold">R$ {PRECO_ANCORA}</span>
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
                                <p className="text-xs text-gray-500 mt-3 text-center">🔒 Acesso imediato • Pagamento 100% seguro</p>

                                {/* Imagem resultado */}
                                <div className="mt-6">
                                    <Image
                                        src="/images/cfr_unhas_ (1).jpeg"
                                        alt="Resultado de alongamento em fibra de vidro realista"
                                        width={400}
                                        height={300}
                                        className="w-full max-w-[350px] h-auto mx-auto rounded-xl shadow-lg border border-gray-800"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 350px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 2. PROVA SOCIAL ESTRATÉGICA ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-white font-[family-name:var(--font-montserrat)]">
                            Veja o que as alunas estão <span className="text-[#22C55E]">conquistando:</span>
                        </h2>
                        <p className="text-gray-400 text-center mb-10 font-[family-name:var(--font-poppins)]">
                            Resultados reais de quem aplicou o método
                        </p>

                        {/* Depoimentos em cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Depoimento 1 - Rapidez */}
                            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                <div className="flex gap-1 mb-3">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-300 mb-4 italic leading-relaxed">&quot;Eu não acreditava que podia aprender fibra tão rápido. Em uma semana já estava atendendo clientes com um acabamento que antes eu não conseguia nem em 3 meses.&quot;</p>
                                <p className="text-[#D4AF37] font-semibold text-sm">— Aluna do CFR</p>
                                <p className="text-gray-500 text-xs mt-1">💡 Aprendeu em poucos dias</p>
                            </div>

                            {/* Depoimento 2 - Facilidade */}
                            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                <div className="flex gap-1 mb-3">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-300 mb-4 italic leading-relaxed">&quot;O passo a passo é tão claro que parece que a Mariana tá do seu lado te guiando. Qualquer pessoa consegue acompanhar, mesmo sem experiência.&quot;</p>
                                <p className="text-[#D4AF37] font-semibold text-sm">— Aluna do CFR</p>
                                <p className="text-gray-500 text-xs mt-1">✨ Método fácil de seguir</p>
                            </div>

                            {/* Depoimento 3 - Economia */}
                            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                <div className="flex gap-1 mb-3">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-300 mb-4 italic leading-relaxed">&quot;Já gastei mais de R$ 2.000 em cursos presenciais que não ensinaram metade do que esse material ensina. E por esse preço? É um absurdo de tão bom.&quot;</p>
                                <p className="text-[#D4AF37] font-semibold text-sm">— Aluna do CFR</p>
                                <p className="text-gray-500 text-xs mt-1">💰 Investimento mínimo, retorno máximo</p>
                            </div>
                        </div>

                        {/* Prints de feedbacks */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="rounded-xl overflow-hidden border border-gray-800 hover:border-[#22C55E]/30 transition-all duration-300">
                                    <Image
                                        src={`/images/feedbacks (${i}).jpeg`}
                                        alt={`Feedback de aluna ${i}`}
                                        width={300}
                                        height={500}
                                        className="w-full h-auto"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 3. QUEBRA DE OBJEÇÕES - Antigo vs Novo ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-black mb-10 text-center leading-tight text-white font-[family-name:var(--font-montserrat)]">
                            Chega de <span className="text-[#C41E3A]">gastar fortunas</span> e continuar <span className="text-[#C41E3A]">sem resultado</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Método Antigo */}
                            <div className="bg-gradient-to-b from-[#1a0a0a] to-[#0a0a0a] border border-[#C41E3A]/30 rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl font-bold text-[#C41E3A] mb-6 font-[family-name:var(--font-montserrat)] flex items-center gap-2">
                                    <XIcon /> O método antigo:
                                </h3>
                                <ul className="space-y-4">
                                    <PainItem>Cursos presenciais de R$ 1.500 a R$ 3.000</PainItem>
                                    <PainItem>Precisa sair de casa e perder dias de trabalho</PainItem>
                                    <PainItem>Professor que passa rápido demais pelo conteúdo</PainItem>
                                    <PainItem>Não pode assistir de novo quando tem dúvida</PainItem>
                                    <PainItem>Resultado artificial que a cliente não gosta</PainItem>
                                </ul>
                            </div>

                            {/* Seu Método */}
                            <div className="bg-gradient-to-b from-[#0a1a0a] to-[#0a0a0a] border border-[#22C55E]/30 rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl font-bold text-[#22C55E] mb-6 font-[family-name:var(--font-montserrat)] flex items-center gap-2">
                                    <CheckIcon /> O Código da Fibra Realista:
                                </h3>
                                <ul className="space-y-4">
                                    <CheckItem>Por apenas {PARCELAS} de R$ {PRECO_PARCELADO} (ou R$ {PRECO_AVISTA} à vista)</CheckItem>
                                    <CheckItem>Assista de casa, no celular, a qualquer hora</CheckItem>
                                    <CheckItem>Passo a passo detalhado, no seu ritmo</CheckItem>
                                    <CheckItem>Acesso vitalício: assista quantas vezes quiser</CheckItem>
                                    <CheckItem>Acabamento natural que a cliente ama e indica</CheckItem>
                                </ul>
                            </div>
                        </div>

                        {/* Imagem de resultado */}
                        <div className="mt-8 flex justify-center">
                            <Image
                                src="/images/cfr_unhas_ (2).jpeg"
                                alt="Resultado de fibra realista - acabamento natural"
                                width={500}
                                height={400}
                                className="w-full max-w-[450px] h-auto rounded-2xl shadow-xl border border-gray-800"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 450px"
                            />
                        </div>
                    </div>
                </section>

                {/* ========== 4. O QUE VOCÊ RECEBE + BÔNUS (Carrossel) ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                        O que você recebe <span className="text-[#22C55E]">HOJE:</span>
                    </h2>
                    <ModulesCarousel />
                </section>

                {/* ========== 5. PASSO A PASSO ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-white font-[family-name:var(--font-montserrat)]">
                            Como funciona? <span className="text-[#22C55E]">É simples:</span>
                        </h2>
                        <p className="text-gray-400 text-center mb-10">3 passos para dominar a fibra realista</p>

                        <div className="space-y-8">
                            <StepItem
                                number="1"
                                title="Compre e acesse na hora"
                                desc="Após a confirmação do pagamento, você recebe acesso imediato ao material completo. Sem espera, sem enrolação."
                            />
                            <div className="border-l-2 border-dashed border-[#D4AF37]/30 ml-6 h-6"></div>
                            <StepItem
                                number="2"
                                title="Assista e pratique no seu ritmo"
                                desc="Cada módulo é detalhado com passo a passo visual. Pause, volte e repita quantas vezes precisar. Acesso vitalício."
                            />
                            <div className="border-l-2 border-dashed border-[#D4AF37]/30 ml-6 h-6"></div>
                            <StepItem
                                number="3"
                                title="Aplique e veja o resultado"
                                desc="Já na próxima cliente, você vai notar a diferença. Unhas com acabamento natural que impressionam e geram indicações."
                            />
                        </div>

                        <div className="mt-10">
                            <CTAButton href={checkoutUrl}>
                                QUERO COMEÇAR AGORA!
                            </CTAButton>
                        </div>
                    </div>
                </section>

                {/* ========== 6. ANCORAGEM DE PREÇO ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            Veja <span className="text-[#D4AF37]">quanto vale</span> tudo isso:
                        </h2>

                        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-8">
                            {/* Lista de valores */}
                            <div className="space-y-4 mb-8">
                                {MODULES.map((mod, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-0">
                                        <div className="flex items-center gap-3">
                                            {mod.bonus ? <GiftIcon /> : <CheckIcon />}
                                            <span className="text-white text-sm md:text-base">
                                                {mod.bonus && <span className="text-[#22C55E] font-bold">[BÔNUS] </span>}
                                                {mod.title}
                                            </span>
                                        </div>
                                        <span className="text-gray-400 line-through text-sm whitespace-nowrap ml-3">{mod.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Soma total */}
                            <div className="border-t-2 border-[#D4AF37]/30 pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-white font-bold text-lg">Valor total:</span>
                                    <span className="text-red-500 line-through font-bold text-xl">{totalValue}</span>
                                </div>

                                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#22C55E]/50 rounded-2xl p-6 text-center shadow-lg shadow-[#22C55E]/10">
                                    <p className="text-gray-400 mb-2">Você leva TUDO isso por apenas:</p>
                                    <div className="flex items-baseline justify-center gap-2 my-2">
                                        <span className="text-2xl text-[#22C55E] font-bold">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-gray-400">ou R$ {PRECO_AVISTA} à vista</p>
                                    <p className="text-[#22C55E] font-bold text-sm mt-2">Economia de mais de 95%!</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <CTAButton href={checkoutUrl}>
                                    SIM, QUERO POR APENAS R$ {PRECO_AVISTA}!
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 7. GARANTIA DE 30 DIAS ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-[#0a1a0a] to-[#0a0a0a] border-2 border-[#22C55E]/30 rounded-2xl p-8 md:p-10 text-center">
                            <div className="flex justify-center mb-4 animate-float">
                                <ShieldIcon />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                Garantia Incondicional de <span className="text-[#22C55E]">30 Dias</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
                                Se por qualquer motivo você sentir que o Código da Fibra Realista não é para você, basta pedir o reembolso em até 30 dias e devolvemos <strong className="text-white">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
                            </p>
                            <p className="text-[#22C55E] font-bold text-lg">
                                O risco é ZERO. Quem arrisca sou eu.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== 8. QUEM É MARIANA NAILS ========== */}
                <section className="relative py-16 px-4 bg-[#0a0a0a] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00]/60 via-[#0a0a0a] to-[#0a0a0a]"></div>
                    <div className="relative z-10 max-w-5xl mx-auto">
                        <h3 className="text-3xl md:text-5xl font-black uppercase mb-10 text-center font-[family-name:var(--font-montserrat)]">
                            <span className="text-white">QUEM É </span>
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">MARIANA NAILS?</span>
                        </h3>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
                            </div>

                            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-[#C41E3A]/10 to-transparent blur-3xl rounded-full scale-110"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#D4AF37]/15 blur-2xl rounded-full"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Especialista em Fibra de Vidro"
                                        width={450}
                                        height={550}
                                        className="relative z-10 w-full max-w-[380px] h-auto object-contain mx-auto drop-shadow-2xl"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 380px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 9. FAQ ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                            Perguntas <span className="text-[#D4AF37]">Frequentes</span>
                        </h2>

                        <div className="space-y-3">
                            <FAQItem
                                question="Preciso ter experiência com fibra de vidro?"
                                answer="Não! O CFR foi criado para ensinar desde o zero. Se você já trabalha com unhas, vai aprender a técnica da fibra realista de forma simples e direta. Se não tem experiência, vai ter a base completa para começar com segurança."
                            />
                            <FAQItem
                                question="Como vou acessar o material?"
                                answer="Após a confirmação do pagamento (que é instantânea), você recebe login e senha por e-mail para acessar a plataforma com todo o conteúdo. Pode assistir pelo celular, tablet ou computador."
                            />
                            <FAQItem
                                question="Por quanto tempo terei acesso?"
                                answer="O acesso é vitalício! Você pode assistir quantas vezes quiser, para sempre. E ainda recebe todas as atualizações futuras sem pagar nada a mais."
                            />
                            <FAQItem
                                question="E se eu não gostar?"
                                answer="Sem problemas! Você tem 30 dias de garantia incondicional. Se não ficar satisfeita, basta pedir o reembolso e devolvemos 100% do valor. Risco zero."
                            />
                            <FAQItem
                                question="O preço é mensal?"
                                answer={`Não! Você paga uma única vez ${PARCELAS} de R$ ${PRECO_PARCELADO} (ou R$ ${PRECO_AVISTA} à vista) e tem acesso para sempre. Sem mensalidades, sem surpresas.`}
                            />
                            <FAQItem
                                question="Posso pagar via Pix?"
                                answer="Sim! Na página de pagamento você pode escolher entre Pix (à vista), cartão de crédito (parcelado em até 3x) ou boleto."
                            />
                        </div>
                    </div>
                </section>

                {/* ========== 10. CTA FINAL ========== */}
                <section className="py-16 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-[family-name:var(--font-montserrat)]">
                            O Código da <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                        </h3>
                        <p className="text-white mb-3 text-lg">Essa oferta pode sair do ar a qualquer momento</p>
                        <p className="text-gray-400 mb-6 text-base">
                            De <span className="text-red-500 line-through font-bold">R$ {PRECO_ANCORA}</span> por apenas <span className="text-[#22C55E] font-black text-xl">{PARCELAS} de R$ {PRECO_PARCELADO}</span>
                        </p>
                        <CTAButton className="mb-4" href={checkoutUrl}>
                            QUERO DOMINAR A FIBRA REALISTA!
                        </CTAButton>
                        <p className="text-xs text-gray-400 mb-2">🔒 Pagamento 100% seguro • Acesso imediato</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                            <ShieldIcon />
                            <span>30 dias de garantia incondicional</span>
                        </div>
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
