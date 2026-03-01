"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";

// Header de Urgência com Contador Integrado
export function UrgencyHeader() {
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
}

// Botão CTA que captura fbclid da URL
export function CTAButtonWithParams({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const searchParams = useSearchParams();
    const fbclid = searchParams.get('fbclid');

    const checkoutUrl = fbclid
        ? `${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}fbclid=${encodeURIComponent(fbclid)}`
        : CHECKOUT_URL;

    return (
        <a
            id="btn-checkout-mca"
            href={checkoutUrl}
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
}

// ============================================
// DADOS DOS MÓDULOS
// ============================================
const MODULES_DATA = [
    {
        id: 1,
        src: "/images/capa_mca_cutilagem_com_alicate.png",
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
        src: "/images/capa_mca_cutilagem_combinada.png",
        alt: "Cutilagem Combinada",
        title: "Cutilagem Combinada",
        badge: null,
        description: "Combine Brocas e Alicate para um resultado superior. Aprenda a fazer o polimento de todas as peles com a técnica combinada, garantindo uma cutilagem mais rápida e um acabamento visivelmente mais refinado.",
        highlights: [
            "Uso correto da broca na cutícula",
            "Combinação broca + alicate",
            "Polimento completo das peles",
            "Acabamento refinado e rápido",
        ],
    },
    {
        id: 3,
        src: "/images/capa_mca_cutiagem_com_cera.png",
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
        src: "/images/capa_mca_apostila.png",
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

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedModule !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedModule]);

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedModule(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const activeModule = selectedModule !== null ? MODULES_DATA.find(m => m.id === selectedModule) : null;

    return (
        <>
            {/* Grid de Capas dos Módulos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {MODULES_DATA.map((mod) => (
                    <button
                        key={mod.id}
                        onClick={() => setSelectedModule(mod.id)}
                        className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                        aria-label={`Ver detalhes: ${mod.title}`}
                    >
                        {mod.badge && (
                            <div className="absolute top-2 right-2 z-10 bg-[#22C55E] text-white text-xs font-bold px-2 py-1 rounded">
                                {mod.badge}
                            </div>
                        )}
                        <img
                            src={mod.src}
                            alt={mod.alt}
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                        />
                        {/* Overlay hint on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center rounded-xl">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Mobile tap hint */}
                        <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent py-2 px-2 rounded-b-xl">
                            <p className="text-white text-[10px] font-bold text-center tracking-wide">TOQUE PARA VER</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* ========== MODAL FULLSCREEN ========== */}
            {activeModule && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    onClick={() => setSelectedModule(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeModule.title}
                    style={{ animation: 'moduleModalFadeIn 0.25s ease-out' }}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

                    {/* Modal Content */}
                    <div
                        className="relative z-10 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111] border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'moduleModalSlideUp 0.3s ease-out' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 cursor-pointer"
                            aria-label="Fechar"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Module Image - Full Width */}
                        <div className="relative w-full">
                            <img
                                src={activeModule.src}
                                alt={activeModule.alt}
                                className="w-full h-auto"
                            />
                            {activeModule.badge && (
                                <div className="absolute top-3 left-3 bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {activeModule.badge}
                                </div>
                            )}
                        </div>

                        {/* Module Details */}
                        <div className="p-5 md:p-6">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                {activeModule.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                                {activeModule.description}
                            </p>

                            {/* Highlights */}
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

                            {/* Included tag */}
                            <div className="bg-[#22C55E]/10 border border-[#22C55E]/25 rounded-xl py-3 px-4 text-center">
                                <p className="text-[#22C55E] text-sm font-bold">
                                    ✅ Incluído no Manual de Cutilagem Avançada
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal animations */}
            <style jsx global>{`
                @keyframes moduleModalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes moduleModalSlideUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </>
    );
}
