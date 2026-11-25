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

// Header de Urgência compacto no mobile para preservar a primeira dobra
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

    return (
        <div className="bg-[#8B0000] text-white py-2 px-3 sm:py-2.5 sm:px-4 border-b border-red-900/60">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wide leading-tight">
                    🔥 Oferta de Lançamento Hoje
                </span>
                <div className="flex items-center gap-1.5 flex-shrink-0 tabular-nums" aria-label="Tempo restante da oferta">
                    <span className="bg-black/45 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-sm sm:text-base font-black">
                        {String(time.minutes).padStart(2, '0')}m
                    </span>
                    <span className="text-xs sm:text-sm font-bold">:</span>
                    <span className="bg-black/45 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-sm sm:text-base font-black">
                        {String(time.seconds).padStart(2, '0')}s
                    </span>
                </div>
            </div>
        </div>
    );
}

// Botão CTA de alto contraste que preserva fbclid/UTMs e registra InitiateCheckout no dataLayer
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
                flex items-center justify-center gap-2 w-full min-h-[56px] text-center
                bg-[#22C55E] hover:bg-[#16A34A] active:scale-[0.99]
                text-[#031F0E] font-black text-base sm:text-lg md:text-xl
                py-3.5 px-5 sm:px-8 rounded-full
                border-b-4 border-[#15803D]
                shadow-lg shadow-[#22C55E]/30
                transition-all duration-200
                uppercase tracking-wide leading-tight
                font-[family-name:var(--font-montserrat)]
                ${className}
            `}
        >
            {children}
        </a>
    );
}

// ============================================
// DADOS DOS MÓDULOS (Imagens otimizadas WebP)
// ============================================
const MODULES_DATA = [
    {
        id: 1,
        src: "/images/mca/modulo-alicate.webp",
        alt: "Cutilagem com Alicate",
        title: "Cutilagem com Alicate",
        badge: null,
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
        src: "/images/mca/modulo-combinada.webp",
        alt: "Cutilagem Combinada",
        title: "Cutilagem Combinada",
        badge: null,
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
        src: "/images/mca/modulo-cera.webp",
        alt: "Cutilagem com Cera",
        title: "Cutilagem com Cera",
        badge: null,
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
        src: "/images/mca/modulo-apostila.webp",
        alt: "Apostila - BÔNUS",
        title: "Apostila Completa",
        badge: "BÔNUS",
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
            {/* Grid de Capas dos Módulos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {MODULES_DATA.map((mod) => (
                    <button
                        key={mod.id}
                        type="button"
                        onClick={() => setSelectedModule(mod.id)}
                        className="group relative rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                        aria-label={`Ver detalhes: ${mod.title}`}
                    >
                        {mod.badge && (
                            <div className="absolute top-2 right-2 z-10 bg-[#22C55E] text-[#031F0E] text-xs font-black px-2 py-1 rounded">
                                {mod.badge}
                            </div>
                        )}
                        <Image
                            src={mod.src}
                            alt={mod.alt}
                            width={560}
                            height={812}
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                            sizes="(max-width: 768px) 46vw, 240px"
                        />
                        <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 items-center justify-center rounded-xl">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-2 rounded-b-xl">
                            <p className="text-white text-[11px] font-bold text-center tracking-wide">TOQUE PARA VER</p>
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
                        className="relative z-10 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111] border border-white/10 shadow-2xl animate-modal-slide"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-3 right-3 z-20 bg-black/70 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors cursor-pointer"
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
                                <div className="absolute top-3 left-3 bg-[#22C55E] text-[#031F0E] text-xs font-black px-3 py-1 rounded-full shadow-lg">
                                    {activeModule.badge}
                                </div>
                            )}
                        </div>

                        <div className="p-5 md:p-6">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 font-[family-name:var(--font-montserrat)]">
                                {activeModule.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                                {activeModule.description}
                            </p>

                            <div className="space-y-2.5 mb-5">
                                {activeModule.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-[#22C55E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-sm font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#22C55E]/10 border border-[#22C55E]/25 rounded-xl py-3 px-4 text-center">
                                <p className="text-[#22C55E] text-sm font-bold">
                                    ✅ Incluído no Manual de Cutilagem Avançada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
