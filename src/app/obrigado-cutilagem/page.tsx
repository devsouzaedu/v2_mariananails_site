"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// ============================================
// CONFIGURAÇÕES
// ============================================
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/C4OEbYEh5e3ENVB70cu7v6";
const ORDER_BUMP_URL = "https://pay.hub.la/TEyopuK6ABkmusb3Ib4W";

// ============================================
// COMPONENTE: Countdown Timer para Order Bump
// ============================================
const OrderBumpTimer = () => {
    const [time, setTime] = useState({ minutes: 9, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    return { minutes: 9, seconds: 59 };
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center gap-2">
            <div className="bg-[#8B0000] px-3 py-1.5 rounded-lg text-center min-w-[52px]">
                <span className="text-xl font-black text-white">{String(time.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] block text-red-200 uppercase font-bold">Min</span>
            </div>
            <span className="text-white text-xl font-bold">:</span>
            <div className="bg-[#8B0000] px-3 py-1.5 rounded-lg text-center min-w-[52px]">
                <span className="text-xl font-black text-white">{String(time.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] block text-red-200 uppercase font-bold">Seg</span>
            </div>
        </div>
    );
};

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function ObrigadoCutilagemPage() {
    const [bumpChecked, setBumpChecked] = useState(false);

    return (
        <>
            {/* Font Awesome CDN */}
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </Head>

            <div className="min-h-screen bg-white font-[family-name:var(--font-poppins)]">

                {/* ========== HEADER COM LOGO ========== */}
                <header className="py-6 px-4 border-b border-gray-100">
                    <div className="max-w-lg mx-auto flex justify-center">
                        <Image
                            src="/images/logo_mca.png"
                            alt="Manual de Cutilagem Avançada"
                            width={280}
                            height={140}
                            className="h-auto"
                            priority
                        />
                    </div>
                </header>

                {/* ========== CONTEÚDO PRINCIPAL ========== */}
                <div className="max-w-lg mx-auto px-6 py-10">

                    {/* Título Principal */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-black text-[#EC4899] mb-4 font-[family-name:var(--font-montserrat)]">
                            Parabéns, meu amor!
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl">
                            Leia o que escrevi aqui pra você com <strong className="text-black">muita atenção...</strong>
                        </p>
                    </div>

                    {/* Imagem da Mariana */}
                    <div className="flex justify-center mb-10">
                        <div className="relative">
                            <Image
                                src="/images/mariana_png.png"
                                alt="Mariana Nails"
                                width={220}
                                height={280}
                                className="h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Mensagem Selecionada */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl text-black mb-3 font-[family-name:var(--font-montserrat)] leading-tight">
                            <span className="text-[#EC4899] font-bold">Você foi selecionada</span> para<br />
                            ler o meu
                        </h2>
                        <p className="font-[family-name:var(--font-lora)] italic text-4xl md:text-5xl text-black leading-tight">
                            diário de uma<br />
                            <span className="text-[#EC4899]">nail designer</span>
                        </p>
                    </div>

                    {/* Descrição */}
                    <div className="text-center mb-10">
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Um lugar onde vou compartilhar <strong className="text-black">semanalmente</strong> um conteúdo <strong className="text-[#EC4899]">gratuito</strong> para você aplicar e avançar na sua carreira.
                        </p>
                    </div>

                    {/* Divisor */}
                    <div className="border-t-2 border-[#EC4899]/20 my-10"></div>

                    {/* Seção de Benefícios */}
                    <div className="mb-10">
                        <h3 className="text-center text-black font-bold text-2xl md:text-3xl mb-8 font-[family-name:var(--font-montserrat)]">
                            Você vai receber dicas de aperfeiçoamento de:
                        </h3>

                        <div className="space-y-6">
                            {/* Item 1 */}
                            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl">
                                <span className="text-3xl">💅</span>
                                <p className="text-black text-lg md:text-xl">
                                    <strong className="text-[#EC4899]">Técnicas</strong> de alongamento, acabamento e decoração
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl">
                                <span className="text-3xl">✨</span>
                                <p className="text-black text-lg md:text-xl">
                                    <strong className="text-[#EC4899]">Posicionamento</strong>, Redes Sociais e Captação de Clientes
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl">
                                <span className="text-3xl">🥰</span>
                                <p className="text-black text-lg md:text-xl">
                                    <strong className="text-[#EC4899]">Atendimento</strong>, Fidelização de Clientes e Gestão Financeira
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Box Destaque */}
                    <div className="bg-[#EC4899]/10 border-2 border-[#EC4899]/30 rounded-2xl p-6 mb-10 flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#EC4899] rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="fa-solid fa-check text-white text-xl"></i>
                        </div>
                        <p className="text-black font-bold text-xl md:text-2xl font-[family-name:var(--font-montserrat)]">
                            Tudo sem pagar um centavo por isso!
                        </p>
                    </div>

                    {/* ================================================================ */}
                    {/* ========== ORDER BUMP - SISTEMA MARIANA NAILS ========== */}
                    {/* ================================================================ */}
                    <div className="mb-10 relative">
                        {/* Seta pulsante apontando para o order bump */}
                        <div className="text-center mb-3">
                            <span className="inline-block text-[#C41E3A] text-2xl font-black animate-bounce">
                                👇 ESPERA! OFERTA EXCLUSIVA PRA VOCÊ 👇
                            </span>
                        </div>

                        <div className={`relative overflow-hidden rounded-2xl border-[3px] transition-all duration-500 ${bumpChecked ? 'border-[#22C55E] shadow-2xl shadow-[#22C55E]/20' : 'border-[#C41E3A] shadow-2xl shadow-[#C41E3A]/20'}`}
                            style={{ animation: 'orderBumpPulse 2s ease-in-out infinite' }}>

                            {/* Header do Order Bump */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-3 px-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-300 text-lg">⚡</span>
                                        <span className="text-white font-black text-sm md:text-base uppercase tracking-wide">Oferta Única — Somente Nesta Página!</span>
                                    </div>
                                </div>
                            </div>

                            {/* Timer */}
                            <div className="bg-[#0a0a0a] py-3 px-5 flex items-center justify-between">
                                <span className="text-gray-300 text-xs md:text-sm font-bold uppercase">Esta oferta expira em:</span>
                                <OrderBumpTimer />
                            </div>

                            {/* Corpo do Order Bump */}
                            <div className="bg-[#0f0f0f] p-5 md:p-6">

                                {/* Checkbox Area */}
                                <button
                                    onClick={() => setBumpChecked(!bumpChecked)}
                                    className="w-full flex items-start gap-4 text-left mb-5 group cursor-pointer"
                                >
                                    <div className={`w-7 h-7 rounded-md border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all duration-300 ${bumpChecked ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-500 group-hover:border-[#D4AF37]'}`}>
                                        {bumpChecked && <i className="fa-solid fa-check text-white text-sm"></i>}
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-tight">
                                            SIM! Eu quero adicionar o <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Sistema Mariana Nails</span> com <span className="text-[#22C55E]">52% OFF</span>
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">Marque a caixa e aproveite essa condição exclusiva</p>
                                    </div>
                                </button>

                                {/* Produto */}
                                <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
                                    <div className="w-full sm:w-2/5 flex-shrink-0">
                                        <Image
                                            src="/images/SMN_sistema_mariana_nails.png"
                                            alt="O Sistema Mariana Nails - Curso Completo de Nail Designer"
                                            width={300}
                                            height={300}
                                            className="w-full h-auto rounded-xl shadow-lg"
                                        />
                                    </div>
                                    <div className="w-full sm:w-3/5">
                                        <h4 className="text-white font-bold text-xl md:text-2xl mb-2 font-[family-name:var(--font-montserrat)]">
                                            O Sistema Mariana Nails
                                        </h4>
                                        <p className="text-gray-300 text-sm md:text-base mb-3 leading-relaxed">
                                            O curso <strong className="text-white">completo de Nail Designer</strong> — do zero ao profissional. Tudo que você precisa pra faturar até R$10.000/mês com unhas.
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-center gap-2">
                                                <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                                                <span>Alongamento em Fibra de Vidro</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                                                <span>Esmaltação em Gel Profissional</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                                                <span>Nail Art e Decoração</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                                                <span>Precificação e Marketing</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                                                <span>Certificado de Conclusão</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Preço */}
                                <div className="bg-[#1a1a1a] rounded-xl p-4 mb-5 text-center border border-gray-800">
                                    <p className="text-gray-400 text-sm mb-1">
                                        Preço normal: <span className="text-red-500 line-through font-bold">R$ 97,00</span>
                                    </p>
                                    <p className="text-white text-base mb-2 font-semibold">Somente nesta página, leve por:</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-2xl text-[#22C55E] font-bold font-[family-name:var(--font-montserrat)]">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">47</span>
                                        <span className="text-2xl text-[#22C55E] font-bold font-[family-name:var(--font-montserrat)]">,00</span>
                                    </div>
                                    <p className="text-[#22C55E] font-bold text-sm mt-1">Economia de R$ 50,00 💰</p>
                                </div>

                                {/* CTA do Order Bump */}
                                <a
                                    id="btn-order-bump-smn"
                                    href={ORDER_BUMP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-lg md:text-xl py-5 px-8 rounded-full shadow-lg shadow-[#22C55E]/30 transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide font-[family-name:var(--font-montserrat)]"
                                    style={{ animation: 'ctaPulse 2s ease-in-out infinite' }}
                                >
                                    🔥 QUERO O CURSO COMPLETO POR R$47!
                                </a>

                                <p className="text-center text-gray-500 text-xs mt-3">
                                    <i className="fa-solid fa-lock mr-1"></i>
                                    Pagamento 100% seguro • Acesso imediato
                                </p>

                                {/* Aviso de urgência */}
                                <div className="mt-4 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-lg p-3 text-center">
                                    <p className="text-[#C41E3A] text-sm font-bold">
                                        ⚠️ Essa oferta de R$47 é EXCLUSIVA para quem acabou de comprar o Manual de Cutilagem. Se você sair desta página, o preço volta para R$97.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========== FIM ORDER BUMP ========== */}

                    {/* Card CTA Final - WhatsApp */}
                    <div className="bg-gradient-to-br from-[#EC4899] to-[#BE185D] rounded-3xl p-8 text-center shadow-2xl shadow-[#EC4899]/30">
                        <p className="text-white text-xl md:text-2xl mb-6 font-[family-name:var(--font-montserrat)] leading-relaxed">
                            Quer aproveitar essa oportunidade de ler meu diário de{' '}
                            <span className="font-bold underline">Nail Designer</span>?
                        </p>

                        <a
                            href={WHATSAPP_GROUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] uppercase text-lg tracking-wide shadow-lg"
                        >
                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                            CLIQUE AQUI PARA ENTRAR NO GRUPO!
                        </a>
                    </div>

                    {/* Footer pequeno */}
                    <div className="text-center mt-10 text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} Mariana Nails • Todos os direitos reservados</p>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                @keyframes orderBumpPulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(196, 30, 58, 0.15); }
                    50% { box-shadow: 0 0 35px rgba(196, 30, 58, 0.3); }
                }
                @keyframes ctaPulse {
                    0%, 100% { box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3); }
                    50% { box-shadow: 0 4px 30px rgba(34, 197, 94, 0.5); }
                }
            `}</style>
        </>
    );
}
