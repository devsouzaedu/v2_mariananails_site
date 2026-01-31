"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

// Check Item
const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-white/90">
        <span className="text-[#C41E3A] text-xl mt-0.5">✓</span>
        <span>{children}</span>
    </li>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function CutilagemLandingPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

            {/* ========== HEADER URGÊNCIA COM CONTADOR ========== */}
            <UrgencyHeader />

            {/* ========== HERO SECTION ========== */}
            <section className="relative px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">

                    {/* Título do Produto - Fonte Grande com Degradê Dourado */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-3 leading-tight">
                            <span className="text-white">Cutilagem </span>
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Avançada</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase">Para Nail Designer</p>
                    </div>

                    {/* Imagem Principal + Copy */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-xl overflow-hidden border-2 border-[#C41E3A]/30">
                                <Image
                                    src="/images/card_imagem_mariana1.png"
                                    alt="Mariana Nails - Cutilagem Avançada"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-white">Mariana Nails</strong> • Especialista em Nail Design
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                Copie os meus movimentos de uma <strong className="text-white">Cutilagem Perfeita</strong> e entregue
                                unhas impecáveis para suas clientes.
                            </p>
                            <p className="text-lg text-white mb-8">
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
                    <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-white">
                        SE ERRAR NA CUTILAGEM,<br />
                        <span className="text-white">SUA UNHA VAI PARECER BARATA.</span>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                        Compre o <span className="text-white">Cutilagem Avançada</span>, se você quer
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

            {/* ========== OFERTA / STACK ========== */}
            <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                        O que você recebe <span className="text-white">HOJE:</span>
                    </h2>

                    {/* Item 1 */}
                    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 mb-4 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#C41E3A]/30">
                            <span className="text-4xl">🎥</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Aula prática: O Segredo da Cutilagem Perfeita</h3>
                            <p className="text-gray-400 text-sm">Copie os meus movimentos exatos no vídeo explicativo</p>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-500 line-through">R$ 97</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 mb-4 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#C41E3A]/30">
                            <span className="text-4xl">📚</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Apostila: O passo a passo da cutilagem perfeita</h3>
                            <p className="text-gray-400 text-sm">Download em PDF para consultar quando quiser</p>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-500 line-through">R$ 47</span>
                        </div>
                    </div>

                    {/* Bônus */}
                    <div className="bg-gradient-to-r from-[#C41E3A]/20 to-[#111] border border-[#C41E3A]/50 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 flex-shrink-0 bg-[#C41E3A] rounded-lg flex items-center justify-center">
                            <span className="text-4xl">🎁</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-block bg-[#C41E3A] text-white text-xs font-bold px-2 py-1 rounded mb-2">BÔNUS EXCLUSIVO</div>
                            <h3 className="text-xl font-bold text-white mb-2">Checklist de Materiais Profissionais</h3>
                            <p className="text-gray-300 text-sm">Lista completa dos materiais que eu uso no meu ateliê</p>
                        </div>
                        <div className="text-right">
                            <span className="text-[#C41E3A] font-bold">GRÁTIS</span>
                        </div>
                    </div>

                    {/* Resumo de Valor */}
                    <div className="text-center mb-8">
                        <p className="text-gray-500 mb-2">Entre agora e acesse todos esses conteúdos de GRAÇA:</p>
                        <p className="text-xl text-gray-400">Como você pode ver…</p>
                    </div>
                </div>
            </section>

            {/* ========== PREÇO FINAL ========== */}
            <section className="py-12 px-4 bg-[#0a0a0a]">
                <div className="max-w-xl mx-auto">
                    <div className="bg-[#111] border-2 border-gray-700 rounded-2xl overflow-hidden">
                        {/* Header do Card */}
                        <div className="bg-[#111] py-4 px-6 text-center">
                            <p className="text-white font-bold text-lg">OFERTA ESPECIAL DE LANÇAMENTO</p>
                        </div>

                        <div className="p-6 md:p-8 text-center">
                            <h3 className="text-2xl font-bold mb-6 text-white">Leve todos os materiais abaixo, por um preço SIMBÓLICO, somente hoje:</h3>

                            {/* Preço */}
                            <div className="mb-6">
                                <p className="text-white text-sm mb-2">Preço de Lançamento: <span className="text-red-500 line-through">R$ 200,00</span></p>
                                <p className="text-white mb-4">Somente hoje por apenas {PARCELAS} de:</p>
                                <div className="flex items-baseline justify-center gap-2 mb-2">
                                    <span className="text-2xl text-white">R$</span>
                                    <span className="text-6xl md:text-7xl font-black text-white">{PRECO_PARCELADO}</span>
                                </div>
                                <p className="text-gray-400">Ou R$ {PRECO_AVISTA} à vista</p>
                            </div>

                            <CTAButton className="mb-6">
                                SIM, QUERO COMPRAR AGORA!
                            </CTAButton>

                            {/* Garantia */}
                            <div className="flex items-center justify-center gap-3 text-white text-sm">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>7 dias de garantia incondicional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TRANSFORMAÇÃO ========== */}
            <section className="py-12 px-4 bg-[#111]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                        Agora é com você: continuar ouvindo reclamações do tipo <span className="text-white">"ficou tortinha..."</span>
                    </h2>
                    <p className="text-white text-lg mb-8">
                        Ou finalmente dominar a cutilagem e <strong className="text-white">entregar um trabalho digno de elogios</strong> toda vez que a cliente postar no Instagram.
                    </p>
                    <CTAButton className="max-w-md mx-auto">
                        SIM, QUERO COMPRAR AGORA!
                    </CTAButton>
                </div>
            </section>

            {/* ========== SOBRE A EXPERT ========== */}
            <section className="py-12 px-4 bg-[#0a0a0a]">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-[#111] border border-gray-800 rounded-xl p-6 md:p-8">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#C41E3A] flex-shrink-0">
                            <Image
                                src="/images/card_imagem_mariana1.png"
                                alt="Mariana Nails"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Quem é Mariana Nails?</h3>
                            <p className="text-white leading-relaxed">
                                Especialista em Nail Design com mais de <strong className="text-white">8 anos de experiência</strong>. Já formou mais de 500 alunas
                                que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas. Conhecida por suas técnicas práticas
                                e resultados rápidos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA FINAL ========== */}
            <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-white mb-6">Essa oferta pode sair do ar a qualquer momento</p>
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
                    <a href="#" className="hover:text-gray-400">Suporte</a>
                </div>
            </footer>
        </div>
    );
}
