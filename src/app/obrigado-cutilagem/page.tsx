"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// CONFIGURAÇÕES
// ============================================
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/C4OEbYEh5e3ENVB70cu7v6";
const CFR_CHECKOUT_URL = "https://hub.la/r/X8iHoCihAcVW6f5ZNel5";
const CFR_PRECO_PARCELADO = "5,30";
const CFR_PRECO_AVISTA = "14,90";
const CFR_PARCELAS = "3x";

// ============================================
// SVG Icons inline (sem Font Awesome CDN)
// ============================================
const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
);
const LockIcon = () => (
    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
);
const ShieldIcon = () => (
    <svg className="w-6 h-6 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5C17.944 5.656 18 6.323 18 7c0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.677.056-1.344.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
);
const StarIcon = () => (
    <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);
const WarningIcon = () => (
    <svg className="w-5 h-5 text-[#C41E3A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
);

// ============================================
// COMPONENTE: Countdown Timer
// ============================================
const CountdownTimer = () => {
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
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <>
            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== HEADER COM LOGO ========== */}
                <header className="py-6 px-4 border-b border-gray-800/50">
                    <div className="max-w-lg mx-auto flex justify-center">
                        <Image
                            src="/images/logo_mca.png"
                            alt="Manual de Cutilagem Avançada"
                            width={280}
                            height={140}
                            className="h-auto brightness-110"
                            priority
                        />
                    </div>
                </header>

                {/* ========== CONTEÚDO PRINCIPAL ========== */}
                <div className="max-w-lg mx-auto px-6 py-10">

                    {/* Título Principal */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent mb-4 font-[family-name:var(--font-montserrat)]">
                            Parabéns, meu amor!
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl">
                            Leia o que escrevi aqui pra você com <strong className="text-white">muita atenção...</strong>
                        </p>
                    </div>

                    {/* Imagem da Mariana */}
                    <div className="flex justify-center mb-10">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/15 to-transparent blur-2xl rounded-full scale-110"></div>
                            <Image
                                src="/images/mariana_png.png"
                                alt="Mariana Nails"
                                width={220}
                                height={280}
                                className="relative z-10 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Mensagem Selecionada */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl text-white mb-3 font-[family-name:var(--font-montserrat)] leading-tight">
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent font-bold">Você foi selecionada</span> para<br />
                            ler o meu
                        </h2>
                        <p className="font-[family-name:var(--font-lora)] italic text-4xl md:text-5xl text-white leading-tight">
                            diário de uma<br />
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">nail designer</span>
                        </p>
                    </div>

                    {/* Descrição */}
                    <div className="text-center mb-10">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            Um lugar onde vou compartilhar <strong className="text-white">semanalmente</strong> um conteúdo <strong className="text-[#D4AF37]">gratuito</strong> para você aplicar e avançar na sua carreira.
                        </p>
                    </div>

                    {/* Divisor */}
                    <div className="border-t-2 border-[#D4AF37]/20 my-10"></div>

                    {/* Seção de Benefícios */}
                    <div className="mb-10">
                        <h3 className="text-center text-white font-bold text-2xl md:text-3xl mb-8 font-[family-name:var(--font-montserrat)]">
                            Você vai receber dicas de aperfeiçoamento de:
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                <span className="text-3xl">💅</span>
                                <p className="text-gray-200 text-lg md:text-xl">
                                    <strong className="text-[#D4AF37]">Técnicas</strong> de alongamento, acabamento e decoração
                                </p>
                            </div>
                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                <span className="text-3xl">✨</span>
                                <p className="text-gray-200 text-lg md:text-xl">
                                    <strong className="text-[#D4AF37]">Posicionamento</strong>, Redes Sociais e Captação de Clientes
                                </p>
                            </div>
                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                <span className="text-3xl">🥰</span>
                                <p className="text-gray-200 text-lg md:text-xl">
                                    <strong className="text-[#D4AF37]">Atendimento</strong>, Fidelização de Clientes e Gestão Financeira
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Box Destaque */}
                    <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 rounded-2xl p-6 mb-10 flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-6 h-6 text-black" />
                        </div>
                        <p className="text-white font-bold text-xl md:text-2xl font-[family-name:var(--font-montserrat)]">
                            Tudo sem pagar um centavo por isso!
                        </p>
                    </div>

                    {/* ================================================================ */}
                    {/* ========== UPSELL CFR — O CÓDIGO DA FIBRA REALISTA ========== */}
                    {/* ================================================================ */}

                    {/* Seta pulsante */}
                    <div className="text-center mb-3">
                        <span className="inline-block text-[#C41E3A] text-xl md:text-2xl font-black animate-bounce">
                            👇 ESPERA! TENHO ALGO ESPECIAL PRA VOCÊ 👇
                        </span>
                    </div>

                    <div className="mb-10 relative">
                        <div className={`relative overflow-hidden rounded-2xl border-[3px] transition-all duration-500 ${bumpChecked ? 'border-[#22C55E] shadow-2xl shadow-[#22C55E]/20' : 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20'}`}
                            style={{ animation: 'orderBumpPulse 2s ease-in-out infinite' }}>

                            {/* Header do Upsell */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-3 px-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-300 text-lg">⚡</span>
                                        <span className="text-white font-black text-sm md:text-base uppercase tracking-wide">Oferta Exclusiva — Somente Nesta Página!</span>
                                    </div>
                                </div>
                            </div>

                            {/* Timer */}
                            <div className="bg-[#0a0a0a] py-3 px-5 flex items-center justify-between">
                                <span className="text-gray-300 text-xs md:text-sm font-bold uppercase">Esta oferta expira em:</span>
                                <CountdownTimer />
                            </div>

                            {/* Corpo do Upsell */}
                            <div className="bg-[#0f0f0f] p-5 md:p-6">

                                {/* Checkbox Area */}
                                <button
                                    onClick={() => setBumpChecked(!bumpChecked)}
                                    className="w-full flex items-start gap-4 text-left mb-5 group cursor-pointer"
                                >
                                    <div className={`w-7 h-7 rounded-md border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all duration-300 ${bumpChecked ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-500 group-hover:border-[#D4AF37]'}`}>
                                        {bumpChecked && <CheckIcon className="w-4 h-4 text-white" />}
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-tight">
                                            SIM! Eu quero o <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Código da Fibra Realista</span> com desconto exclusivo!
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">Marque a caixa para garantir essa condição única</p>
                                    </div>
                                </button>

                                {/* ========== GALERIA DE RESULTADOS ========== */}
                                <div className="mb-6">
                                    <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-3 text-center">Resultados reais das alunas:</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 aspect-square">
                                            <Image
                                                src="/images/fotos_fibra_realista (1).jpeg"
                                                alt="Resultado fibra realista - acabamento natural"
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 aspect-square">
                                            <Image
                                                src="/images/fotos_fibra_realista (1).jpg"
                                                alt="Resultado fibra realista - french perfeita"
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 aspect-square">
                                            <Image
                                                src="/images/fotos_fibra_realista (2).jpg"
                                                alt="Resultado fibra realista - unha delicada"
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-xs text-center mt-2">Trabalhos reais feitos com a técnica da Fibra Realista</p>
                                </div>

                                {/* Produto */}
                                <div className="mb-5">
                                    <h4 className="text-white font-bold text-xl md:text-2xl mb-3 font-[family-name:var(--font-montserrat)] text-center">
                                        O Código da <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Fibra Realista</span>
                                    </h4>
                                    <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed text-center">
                                        O método completo para fazer <strong className="text-white">alongamentos em fibra de vidro com acabamento 100% natural e realista</strong> — que ninguém vai perceber que é alongamento.
                                    </p>

                                    {/* O que está incluso */}
                                    <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4 border border-gray-800">
                                        <p className="text-white font-bold text-sm uppercase tracking-wider mb-3">O que você recebe:</p>
                                        <ul className="space-y-2.5">
                                            <li className="flex items-center gap-2.5">
                                                <CheckIcon className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">Módulo 1 — Anatomia das Unhas</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <CheckIcon className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">Módulo 2 — Teoria da Aplicação da Fibra</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <CheckIcon className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">Módulo 3 — Preparando a Fibra de Vidro</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <CheckIcon className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">Módulo 4 — Construção Amendoada</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <CheckIcon className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">Módulo 5 — Construção Quadrada</span>
                                            </li>
                                            <li className="flex items-center gap-2.5">
                                                <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-[#D4AF37] text-xs font-bold">🎁</span>
                                                <span className="text-[#D4AF37] text-sm font-semibold">BÔNUS: Apostila de Apoio Completa</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ========== QUEBRAS DE OBJEÇÃO ========== */}

                                {/* Objeção 1: "Será que funciona pra mim?" */}
                                <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4 border border-gray-800">
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-2xl">🤔</span>
                                        <p className="text-white font-bold text-sm">&quot;Será que funciona mesmo?&quot;</p>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        O método já foi usado por <strong className="text-white">mais de 500 alunas</strong> que hoje faturam de R$ 3.000 a R$ 10.000/mês. A técnica funciona pra quem é iniciante e pra quem já trabalha com unhas — é só seguir o passo a passo.
                                    </p>
                                </div>

                                {/* Objeção 2: "E se eu não gostar?" */}
                                <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4 border border-[#22C55E]/20">
                                    <div className="flex items-start gap-3 mb-2">
                                        <ShieldIcon />
                                        <div>
                                            <p className="text-white font-bold text-sm">Garantia de 7 dias — Risco ZERO</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Se por qualquer motivo você sentir que o curso não é pra você, basta pedir seu dinheiro de volta em até 7 dias. <strong className="text-[#22C55E]">Sem perguntas, sem burocracia.</strong> O risco é todo meu.
                                    </p>
                                </div>

                                {/* Objeção 3: "Não tenho tempo" */}
                                <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4 border border-gray-800">
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-2xl">⏰</span>
                                        <p className="text-white font-bold text-sm">&quot;Não tenho tempo agora...&quot;</p>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        O acesso é <strong className="text-white">vitalício</strong>. Você assiste no seu ritmo, quando quiser, quantas vezes quiser. São aulas curtas e diretas, sem enrolação. Em poucas horas você já domina a técnica.
                                    </p>
                                </div>

                                {/* Prova Social */}
                                <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-xl p-4 mb-5 border border-[#D4AF37]/20">
                                    <div className="flex items-center gap-1 mb-2 justify-center">
                                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                    </div>
                                    <p className="text-gray-300 text-sm text-center italic font-[family-name:var(--font-lora)]">
                                        &quot;Depois que aprendi a técnica da fibra realista da Mariana, minhas clientes passaram a indicar meu trabalho. Minha agenda lotou em 2 semanas!&quot;
                                    </p>
                                    <p className="text-[#D4AF37] text-xs font-bold text-center mt-2">— Aluna do CFR</p>
                                </div>

                                {/* Preço */}
                                <div className="bg-[#1a1a1a] rounded-xl p-5 mb-5 text-center border border-gray-800">
                                    <p className="text-gray-400 text-sm mb-1">
                                        Preço normal: <span className="text-red-500 line-through font-bold">R$ 300,00</span>
                                    </p>
                                    <p className="text-white text-base mb-2 font-semibold">Somente nesta página, leve por apenas {CFR_PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-2xl text-[#22C55E] font-bold font-[family-name:var(--font-montserrat)]">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{CFR_PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-1">ou R$ {CFR_PRECO_AVISTA} à vista</p>
                                    <p className="text-[#22C55E] font-bold text-sm mt-2">Economia de mais de R$ 285! 💰</p>
                                </div>

                                {/* CTA do Upsell */}
                                <a
                                    id="btn-upsell-cfr"
                                    href={CFR_CHECKOUT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-lg md:text-xl py-5 px-8 rounded-full shadow-lg shadow-[#22C55E]/30 transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide font-[family-name:var(--font-montserrat)]"
                                    style={{ animation: 'ctaPulse 2s ease-in-out infinite' }}
                                >
                                    🔥 QUERO DOMINAR A FIBRA REALISTA!
                                </a>

                                <p className="text-center text-gray-500 text-xs mt-3">
                                    <LockIcon />
                                    Pagamento 100% seguro • Acesso imediato • 7 dias de garantia
                                </p>

                                {/* ========== FAQ - MAIS OBJEÇÕES ========== */}
                                <div className="mt-6 space-y-2">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider text-center mb-3 font-bold">Perguntas frequentes</p>

                                    {[
                                        {
                                            q: "Preciso ter experiência com fibra?",
                                            a: "Não! O curso começa do zero, desde a anatomia da unha. Mesmo que você nunca tenha trabalhado com fibra de vidro, vai conseguir acompanhar e aprender."
                                        },
                                        {
                                            q: "Por quanto tempo terei acesso?",
                                            a: "O acesso é vitalício. Você pode assistir quantas vezes quiser, quando quiser, para sempre."
                                        },
                                        {
                                            q: "Posso pedir reembolso?",
                                            a: "Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro sem nenhuma pergunta."
                                        },
                                    ].map((faq, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                            className="w-full text-left bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between p-3">
                                                <span className="text-white text-sm font-semibold">{faq.q}</span>
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2 ${expandedFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                            {expandedFaq === i && (
                                                <div className="px-3 pb-3">
                                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Aviso de urgência */}
                                <div className="mt-5 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-lg p-3 flex items-start gap-2">
                                    <WarningIcon />
                                    <p className="text-[#C41E3A] text-sm font-bold">
                                        Essa oferta de {CFR_PARCELAS} de R${CFR_PRECO_PARCELADO} é EXCLUSIVA para quem acabou de comprar o Manual de Cutilagem. Se você sair desta página, o preço volta para R$300.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========== FIM UPSELL CFR ========== */}

                    {/* Card CTA Final - WhatsApp */}
                    <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-3xl p-8 text-center shadow-2xl shadow-[#D4AF37]/20">
                        <p className="text-black text-xl md:text-2xl mb-6 font-[family-name:var(--font-montserrat)] leading-relaxed">
                            Quer aproveitar essa oportunidade de ler meu diário de{' '}
                            <span className="font-bold underline">Nail Designer</span>?
                        </p>

                        <a
                            href={WHATSAPP_GROUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] uppercase text-lg tracking-wide shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            CLIQUE AQUI PARA ENTRAR NO GRUPO!
                        </a>
                    </div>

                    {/* Footer pequeno */}
                    <div className="text-center mt-10 text-sm text-gray-600">
                        <p>© {new Date().getFullYear()} Mariana Nails • Todos os direitos reservados</p>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                @keyframes orderBumpPulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.15); }
                    50% { box-shadow: 0 0 35px rgba(212, 175, 55, 0.3); }
                }
                @keyframes ctaPulse {
                    0%, 100% { box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3); }
                    50% { box-shadow: 0 4px 30px rgba(34, 197, 94, 0.5); }
                }
            `}</style>
        </>
    );
}
