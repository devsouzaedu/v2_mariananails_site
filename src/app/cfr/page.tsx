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
                                        Preço de Lançamento: <span className="text-red-500 line-through font-bold">R$ 200,00</span>
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

                {/* ========== O QUE VOCÊ VAI APRENDER ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                            O que você recebe <span className="text-[#22C55E]">HOJE:</span>
                        </h2>

                        {/* Grid de Módulos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Módulo 1 */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-[#D4AF37] font-bold text-lg">1</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Preparação da Unha Natural</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Como preparar a unha natural corretamente para receber a fibra, garantindo aderência e durabilidade sem danificar a unha da cliente.
                                </p>
                            </div>

                            {/* Módulo 2 */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-[#D4AF37] font-bold text-lg">2</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Aplicação da Fibra de Vidro</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Técnica exclusiva de aplicação da fibra para um resultado fino, leve e com aspecto completamente natural. Sem aquele visual de unha postiça.
                                </p>
                            </div>

                            {/* Módulo 3 */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-[#D4AF37] font-bold text-lg">3</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Curvatura C e Modelagem</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    O segredo da curvatura perfeita que faz a unha ter o formato ideal. Pinçagem, modelagem e ajuste fino para um acabamento de alto padrão.
                                </p>
                            </div>

                            {/* Módulo 4 */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-[#D4AF37] font-bold text-lg">4</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Acabamento Realista</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Técnicas avançadas de lixamento, nivelamento e selagem que tornam o alongamento invisível. O toque final que separa o amador do profissional.
                                </p>
                            </div>

                            {/* Módulo 5 */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-[#D4AF37] font-bold text-lg">5</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Manutenção e Reposição</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Como fazer a manutenção correta sem comprometer a unha natural. Reposição profissional que garante a fidelização da cliente.
                                </p>
                            </div>

                            {/* BÔNUS */}
                            <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#22C55E]/30 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:border-[#22C55E]/60 relative">
                                <div className="absolute top-3 right-3 bg-[#22C55E] text-white text-xs font-bold px-2 py-1 rounded">
                                    BÔNUS
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#22C55E]/20 rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-gift text-[#22C55E]"></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">Guia de Materiais e Fornecedores</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Lista completa dos melhores materiais e fornecedores que a Mariana usa. Economize tempo e dinheiro investindo nos produtos certos desde o início.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    <p className="text-white text-sm mb-2 font-[family-name:var(--font-poppins)]">De: <span className="text-red-500 line-through">R$ 200,00</span></p>
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
                                    Instrutora Master e autoridade em nail design com mais de <strong className="text-white">8 anos de experiência</strong>. Especialista em alongamento com fibra de vidro, Molde F1, Molde Ruso e Molde Dual Frame. Já formou mais de 500 alunas que hoje faturam de R$ 3.000 a R$ 10.000 por mês.
                                </p>
                                <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-poppins)]">
                                    Reconhecida como a maior vendedora de instrução de nail designer no digital, Mariana criou o Código da Fibra Realista para ensinar seu método exclusivo de alongamento com aspecto natural e acabamento impecável.
                                </p>
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
