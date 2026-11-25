"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";
const TRACKED_PARAMS = [
    'fbclid',
    'gclid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_id',
    'src',
    'sck',
];

// Header de Urgência fixo no topo no estilo editorial da referência
export function UrgencyHeader() {
    const [time, setTime] = useState({ minutes: 14, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { minutes: 14, seconds: 59 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const segments = [
        { value: '00', label: 'DIAS' },
        { value: '00', label: 'HORAS' },
        { value: String(time.minutes).padStart(2, '0'), label: 'MIN' },
        { value: String(time.seconds).padStart(2, '0'), label: 'SEG' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-gradient-to-b from-[#B30A0F] to-[#8F060A] text-white py-2 px-3 border-b border-white/15 shadow-lg">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/95 leading-tight mb-1 font-[family-name:var(--font-inter-cutilagem)]">
                    OFERTA DE LANÇAMENTO HOJE:
                </p>
                <div
                    className="flex items-baseline justify-center tabular-nums"
                    aria-label="Tempo restante da oferta"
                >
                    {segments.map((seg, idx) => (
                        <React.Fragment key={seg.label}>
                            {idx > 0 && (
                                <span
                                    aria-hidden="true"
                                    className="mx-2 sm:mx-3 text-white/75 text-sm sm:text-base font-normal self-center"
                                >
                                    :
                                </span>
                            )}
                            <span className="inline-flex items-baseline">
                                <span className="font-[family-name:var(--font-playfair-cutilagem)] text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                                    {seg.value}
                                </span>
                                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-white/90 ml-1 font-[family-name:var(--font-inter-cutilagem)]">
                                    {seg.label}
                                </span>
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </header>
    );
}

// Botão CTA de alto contraste com seta em círculo branco (estilo referência)
export function CTAButtonWithParams({
    children,
    className = "",
    location = "hero",
}: {
    children: React.ReactNode;
    className?: string;
    location?: string;
}) {
    const searchParams = useSearchParams();

    const paramsToAppend = new URLSearchParams();
    for (const key of TRACKED_PARAMS) {
        const value = searchParams.get(key);
        if (value) {
            paramsToAppend.set(key, value);
        }
    }

    const queryString = paramsToAppend.toString();
    const checkoutUrl = queryString
        ? `${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}${queryString}`
        : CHECKOUT_URL;

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
            w.dataLayer = w.dataLayer || [];
            w.dataLayer.push({
                event: 'initiate_checkout',
                product: 'Manual de Cutilagem Avançada',
                value: 34.90,
                currency: 'BRL',
                button_location: location,
            });
        }
    };

    return (
        <a
            id={`btn-checkout-mca-${location}`}
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`
                group relative flex items-center justify-between gap-3 w-full min-h-[56px]
                bg-gradient-to-b from-[#00C863] to-[#00994B]
                hover:from-[#00D66B] hover:to-[#00A853]
                active:scale-[0.99]
                text-white hover:text-white font-extrabold text-[13px] sm:text-[15px]
                py-3.5 px-5 sm:px-7 rounded-xl
                border-t border-[#5EEAD4]/40
                shadow-[0_10px_28px_rgba(0,184,92,0.32)]
                transition-all duration-200
                uppercase tracking-[0.06em] leading-tight
                font-[family-name:var(--font-inter-cutilagem)]
                ${className}
            `}
        >
            <span className="flex-1 text-center pl-6 sm:pl-8">{children}</span>
            <span
                aria-hidden="true"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#00994B] shadow-sm transition-transform duration-200 group-hover:translate-x-0.5"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
            </span>
        </a>
    );
}

// ============================================
// DADOS DOS MÓDULOS (Imagens otimizadas WebP)
// ============================================
const MODULES_DATA = [
    {
        id: 1,
        number: "01",
        src: "/images/mca/modulo-alicate.webp",
        alt: "Cutilagem com Alicate",
        title: "Cutilagem com Alicate",
        badge: null,
        shortDescription: "Domine a técnica do corte contínuo com precisão para um acabamento limpo, fundinho e sem bife.",
        description: "Aprenda a fazer a cutilagem com alicate, dominando a técnica do corte contínuo com precisão. Apenas remoção sem polimento das peles — o método clássico que toda nail designer precisa dominar para entregar um acabamento limpo e profissional.",
        highlights: [
            "Técnica do corte contínuo",
            "Posicionamento correto do alicate",
            "Como evitar \"bife\" e machucados",
            "Acabamento limpo e profissional",
        ],
    },
    {
        id: 2,
        number: "02",
        src: "/images/mca/modulo-combinada.webp",
        alt: "Cutilagem Combinada",
        title: "Cutilagem Combinada",
        badge: null,
        shortDescription: "Combine brocas e alicate para polimento das peles, mais velocidade na mesa e resultado refinado.",
        description: "Combine Brocas e Alicate para um resultado superior. Aprenda a fazer o polimento de todas as peles com a técnica combinada, garantindo uma cutilagem mais rápida e um acabamento visivelmente mais refinado.",
        highlights: [
            "Uso correto da broca na cutícula",
            "Combinação broca + alicate",
            "Polimento completo das peles",
            "Acabamento refinado e mais rápido",
        ],
    },
    {
        id: 3,
        number: "03",
        src: "/images/mca/modulo-cera.webp",
        alt: "Cutilagem com Cera",
        title: "Cutilagem com Cera",
        badge: null,
        shortDescription: "A técnica moderna com cera e broca para polidez perfeita e acabamento diferenciado.",
        description: "Técnica recém-chegada ao Brasil! Com Cera e Broca, você garante uma polidez perfeita e um acabamento muito superior. A técnica mais moderna do mercado que vai diferenciar o seu trabalho.",
        highlights: [
            "Técnica exclusiva com cera",
            "Polidez perfeita da cutícula",
            "Acabamento muito superior",
            "Diferencial no mercado",
        ],
    },
    {
        id: 4,
        number: "04",
        src: "/images/mca/modulo-apostila.webp",
        alt: "Apostila - BÔNUS",
        title: "Apostila Completa",
        badge: "BÔNUS",
        shortDescription: "Material de apoio em PDF com passo a passo ilustrado e resumo de todas as técnicas.",
        description: "Material de apoio completo em PDF para você consultar sempre que precisar. Contém o resumo de todas as técnicas, passo a passo ilustrado e dicas extras para fixar o conteúdo dos módulos.",
        highlights: [
            "Resumo de todas as técnicas",
            "Passo a passo ilustrado",
            "Material para consulta rápida",
            "Dicas extras exclusivas",
        ],
    },
];

// ============================================
// COMPONENTE: ModuleGallery (Client Component)
// ============================================
export function ModuleGallery() {
    const [selectedModule, setSelectedModule] = useState<number | null>(null);

    useEffect(() => {
        if (selectedModule !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedModule]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedModule(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const activeModule = selectedModule !== null ? MODULES_DATA.find((m) => m.id === selectedModule) : null;

    return (
        <>
            {/* Lista vertical de cards de módulos no estilo editorial da referência */}
            <div className="space-y-4 max-w-2xl mx-auto">
                {MODULES_DATA.map((mod) => (
                    <button
                        key={mod.id}
                        type="button"
                        onClick={() => setSelectedModule(mod.id)}
                        className="group w-full text-left bg-[#1E1712] border border-[#3B2E24] hover:border-[#C9AA8E]/60 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex items-center gap-4 sm:gap-5 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9AA8E] focus:ring-offset-2 focus:ring-offset-[#140F0B]"
                        aria-label={`Ver detalhes: ${mod.title}`}
                    >
                        <div className="relative w-[84px] sm:w-[104px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-md">
                            <Image
                                src={mod.src}
                                alt={mod.alt}
                                width={560}
                                height={812}
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                                loading="lazy"
                                sizes="(max-width: 640px) 84px, 104px"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9AA8E] font-[family-name:var(--font-inter-cutilagem)]">
                                    {mod.number}
                                </span>
                                {mod.badge && (
                                    <span className="bg-[#00B85C]/20 border border-[#00B85C]/40 text-[#4ADE80] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                                        {mod.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-[family-name:var(--font-playfair-cutilagem)] text-lg sm:text-xl font-bold text-[#FAF6F0] group-hover:text-[#D8BFA8] transition-colors leading-snug mb-1.5">
                                {mod.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-[#BFB5AB] leading-relaxed mb-2.5 font-[family-name:var(--font-inter-cutilagem)]">
                                {mod.shortDescription}
                            </p>

                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9AA8E]/90 font-[family-name:var(--font-inter-cutilagem)]">
                                <svg className="w-3.5 h-3.5 text-[#C9AA8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>Incluso • Toque para detalhes</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Modal Fullscreen */}
            {activeModule && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center animate-modal-fade"
                    onClick={() => setSelectedModule(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeModule.title}
                >
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

                    <div
                        className="relative z-10 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1E1712] border border-[#3B2E24] shadow-2xl animate-modal-slide"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-3 right-3 z-20 bg-[#140F0B]/85 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Fechar"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative w-full">
                            <Image
                                src={activeModule.src}
                                alt={activeModule.alt}
                                width={560}
                                height={812}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 92vw, 512px"
                            />
                            {activeModule.badge && (
                                <div className="absolute top-3 left-3 bg-[#00B85C] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                                    {activeModule.badge}
                                </div>
                            )}
                        </div>

                        <div className="p-5 md:p-6">
                            <h3 className="font-[family-name:var(--font-playfair-cutilagem)] text-2xl font-bold text-[#FAF6F0] mb-3">
                                {activeModule.title}
                            </h3>
                            <p className="text-[#CFC5BB] text-sm md:text-base leading-relaxed mb-5 font-[family-name:var(--font-inter-cutilagem)]">
                                {activeModule.description}
                            </p>

                            <div className="space-y-2.5 mb-5">
                                {activeModule.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-[#00B85C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-[#FAF6F0] text-sm font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#00B85C]/10 border border-[#00B85C]/30 rounded-xl py-3 px-4 text-center">
                                <p className="text-[#4ADE80] text-sm font-bold font-[family-name:var(--font-inter-cutilagem)]">
                                    Incluído no Manual de Cutilagem Avançada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
