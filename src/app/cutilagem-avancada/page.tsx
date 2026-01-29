"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getOrStartCheckoutEventId } from '@/lib/meta/metaIds';

// Declaração global para dataLayer (GTM)
declare global {
    interface Window {
        dataLayer: any[];
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
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

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

    return { observerRef };
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
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .scroll-animate {
    opacity: 0;
    transition: all 0.8s ease-out;
  }
  
  .scroll-animate.visible {
    opacity: 1;
    animation-fill-mode: forwards;
  }
  
  .animate-fadeIn.visible {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slideInUp.visible {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  .animate-scaleIn.visible {
    animation: scaleIn 0.6s ease-out forwards;
  }
`;

export default function CutilagemAvancada() {
    const [showEmailModal, setShowEmailModal] = useState(false);

    // Link do produto Hubla fornecido
    const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";

    useScrollAnimation();

    const handleCheckoutClick = () => {
        // Rastreamento básico antes de ir para o checkout
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'initiate_checkout',
                product: 'Cutilagem Avançada',
                value: 27.00 // Valor estimado, ajustar conforme produto real se necessário
            });
        }
        window.location.href = CHECKOUT_URL;
    };

    return (
        <div className="min-h-screen bg-black text-gray-800 font-sans">
            <style jsx>{animationStyles}</style>

            {/* Banner de Urgência */}
            <div className="bg-[#ffcd10] text-black text-center py-2 px-4 font-bold text-sm md:text-base">
                ⚠️ CONDIÇÃO ESPECIAL DE LANÇAMENTO — SOMENTE HOJE
            </div>

            {/* Hero Section - Impacto Visual */}
            <header className="relative bg-black text-white pt-10 pb-16 px-6 text-center overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white scroll-animate animate-fadeIn" data-animate>
                        SE ERRAR NA CUTILAGEM,<br />
                        <span className="text-[#ffcd10]">SUA UNHA VAI PARECER BARATA.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto scroll-animate animate-slideInUp" data-animate>
                        Copie os meus movimentos de uma <strong className="text-white">Cutilagem Perfeita</strong> e entregue um
                        acabamento de alto padrão, valorizando seu serviço instantaneamente.
                    </p>

                    {/* Vídeo de Vendas (Placeholder ou Imagem Principal) */}
                    <div className="w-full max-w-3xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-[#ffcd10]/30 mb-10 aspect-video flex items-center justify-center scroll-animate animate-scaleIn" data-animate>
                        {/* Se houver vídeo, inserir aqui. Por enquanto, imagem representativa */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/thumb_unhas_mariana_nails_curso (1).webp"
                                alt="Cutilagem Perfeita Mariana Nails"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handleCheckoutClick}
                                    className="bg-[#ffcd10] text-black rounded-full p-4 hover:scale-110 transition-transform shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 scroll-animate animate-slideInUp" data-animate>
                        <button
                            onClick={handleCheckoutClick}
                            className="w-full md:w-auto bg-[#ffcd10] hover:bg-yellow-400 text-black font-black uppercase text-lg pv-4 px-8 py-4 rounded-lg shadow-lg hover:shadow-[#ffcd10]/50 transition-all transform hover:-translate-y-1"
                        >
                            SIM, QUERO UMA CUTILAGEM PERFEITA
                        </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">Acesso imediato • Pagamento seguro</p>
                </div>
            </header>

            {/* Conteúdo da Oferta - Estilo "Stack" */}
            <section className="py-12 px-6 bg-[#111]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
                        O QUE VOCÊ VAI RECEBER:
                    </h2>

                    <div className="space-y-6">
                        {/* Item 1 */}
                        <div className="bg-black border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 scroll-animate animate-slideInUp" data-animate>
                            <div className="w-full md:w-1/3 aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                <Image
                                    src="/images/thumb_unhas_mariana_nails_curso (3).webp"
                                    alt="Aula Prática"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-[#ffcd10] text-xl font-bold mb-2">AULA PRÁTICA: O Segredo da Cutilagem Fundinha</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Vou te mostrar o ângulo exato do alicate, como preparar a cutícula corretamente e como fazer o corte contínuo sem 'bife'.
                                </p>
                                <p className="text-white font-bold">Valor: R$ 97,00</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-black border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 scroll-animate animate-slideInUp" data-animate>
                            <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-video bg-gray-800 rounded-lg overflow-hidden relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-4 flex items-center justify-center">
                                    <span className="text-4xl">📚</span>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-[#ffcd10] text-xl font-bold mb-2">APOSTILA: Guia de Biossegurança e Materiais</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Lista completa de materiais que eu uso, como esterilizar corretamente seus instrumentos e evitar contaminações.
                                </p>
                                <p className="text-white font-bold">Valor: R$ 47,00</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-black border border-[#ffcd10]/30 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-[0_0_20px_rgba(255,205,16,0.1)] scroll-animate animate-fadeIn" data-animate>
                            <div className="w-full md:w-1/3 aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                                <Image
                                    src="/images/feedbacks (1).jpeg"
                                    alt="Bônus Exclusivo"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">BÔNUS</div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-block bg-[#ffcd10] text-black text-xs font-bold px-2 py-1 rounded mb-2">BÔNUS EXCLUSIVO</div>
                                <h3 className="text-white text-xl font-bold mb-2">Acabamento com Lixa Buffer</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    O toque final que deixa a pele ao redor da unha polida e perfeita para a foto do Instagram.
                                </p>
                                <p className="text-[#ffcd10] font-bold">Valor: INESTIMÁVEL</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Seção Preço/Oferta */}
            <section className="py-16 px-6 bg-gradient-to-b from-black to-[#111] text-center">
                <div className="max-w-2xl mx-auto">
                    <p className="text-gray-400 text-lg mb-4">Leve todo esse conteúdo hoje por um preço simbólico:</p>

                    <div className="bg-gray-900 border-2 border-[#ffcd10] rounded-2xl p-8 shadow-2xl relative overflow-hidden scroll-animate animate-scaleIn" data-animate>
                        <div className="absolute top-0 right-0 bg-[#ffcd10] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                            -80% OFF
                        </div>

                        <p className="text-gray-400 line-through mb-2">De R$ 147,00</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-2">
                            <span className="text-2xl font-medium align-top">R$</span>27<span className="text-2xl font-medium">,00</span>
                        </h2>
                        <p className="text-[#ffcd10] mb-8 font-medium">À vista ou Parcelado no Cartão</p>

                        <button
                            onClick={handleCheckoutClick}
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            COMPRAR AGORA
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <p className="mt-4 text-xs text-gray-500">
                            Pagamento processado pela Hubla. 100% Seguro.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-gray-900">
                <p>© {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.</p>
                <p className="mt-2">
                    Esta oferta pode sair do ar a qualquer momento.
                </p>
            </footer>
        </div>
    );
}
