"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// CONFIGURAÇÕES
// ============================================
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/C4OEbYEh5e3ENVB70cu7v6";
const COMBO_CHECKOUT_URL = "https://pay.hub.la/DnlbWknGq7EVsblY3yG9";
const COMBO_PRECO_AVISTA = "27,90";
const COMBO_PARCELAS = "3x";
const COMBO_PRECO_PARCELADO = "9,97";

// ============================================
// SVG Icons inline
// ============================================
const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
);
const LockIcon = () => (
    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
);
const ShieldIcon = () => (
    <svg className="w-5 h-5 text-[#22C55E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5C17.944 5.656 18 6.323 18 7c0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.677.056-1.344.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
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
// COMPONENTE: Top Banner Countdown (02:06)
// ============================================
const TopBannerTimer = () => {
    const [time, setTime] = useState({ minutes: 2, seconds: 6 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    return { minutes: 2, seconds: 6 };
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[#C41E3A] py-2.5 px-4 text-center">
            <p className="text-white text-sm md:text-base font-bold">
                ⏳ Essa oferta expira em{' '}
                <span className="font-black text-base md:text-lg">
                    {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
                </span>
            </p>
        </div>
    );
};

// ============================================
// DADOS DOS PRODUTOS DO COMBO
// ============================================
const COMBO_PRODUCTS = [
    {
        id: 1,
        src: "/images/SMN_sistema_mariana_nails.png",
        alt: "Sistema Mariana Nails",
        name: "Sistema Mariana Nails",
        price: "47,90",
        description: "O sistema completo que a Mariana usa no dia a dia para garantir resultados perfeitos em todas as clientes. Aprenda o passo a passo do método que já transformou centenas de nail designers.",
        highlights: [
            "Método completo passo a passo",
            "Técnicas exclusivas da Mariana",
            "Resultados profissionais garantidos",
            "Aplicável desde a primeira aula",
        ],
    },
    {
        id: 2,
        src: "/images/square_GDL_capa.png",
        alt: "O Código da Fibra Realista",
        name: "O Código da Fibra Realista",
        price: "14,90",
        description: "Domine a técnica da fibra realista e ofereça um serviço premium para suas clientes. Aprenda a criar unhas com fibra que parecem naturais e duram muito mais.",
        highlights: [
            "Fibra com acabamento natural",
            "Maior durabilidade",
            "Técnica passo a passo",
            "Diferencial competitivo",
        ],
    },
    {
        id: 3,
        src: "/images/square_AMF1_CAPA.png",
        alt: "Arquitetura do Molde F1",
        name: "Arquitetura do Molde F1",
        price: "14,90",
        description: "A técnica de moldagem F1 para criar alongamentos perfeitos com curvatura ideal. Aprenda a posicionar o molde corretamente e construir unhas simétricas e impecáveis.",
        highlights: [
            "Posicionamento perfeito do molde",
            "Curvatura C ideal",
            "Simetria em todas as unhas",
            "Alongamentos impecáveis",
        ],
    },
];

// ============================================
// COMPONENTE: Card de Produto no Combo (clicável)
// ============================================
const ProductCard = ({ src, alt, name, price, onClick }: { src: string; alt: string; name: string; price: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="w-full bg-[#141414] rounded-xl border border-white/10 overflow-hidden flex items-center gap-4 p-3 cursor-pointer hover:border-white/25 hover:bg-[#1a1a1a] transition-all duration-200 group text-left"
    >
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10 group-hover:ring-white/25 transition-all">
            <Image
                src={src}
                alt={alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold leading-tight">{name}</p>
            <p className="text-gray-500 text-xs line-through mt-0.5">R$ {price}</p>
            <p className="text-[#22C55E] text-[10px] font-bold mt-1.5 uppercase tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">Toque para ver mais →</p>
        </div>
    </button>
);

// ============================================
// COMPONENTE: Modal de Produto Expandido
// ============================================
const ProductModal = ({ product, onClose }: { product: typeof COMBO_PRODUCTS[0]; onClose: () => void }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            style={{ animation: 'prodModalFadeIn 0.25s ease-out' }}
        >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <div
                className="relative z-10 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111] border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'prodModalSlideUp 0.3s ease-out' }}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Fechar"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Product Image */}
                <div className="relative w-full bg-[#0a0a0a] flex items-center justify-center p-6">
                    <Image
                        src={product.src}
                        alt={product.alt}
                        width={280}
                        height={280}
                        className="w-full max-w-[260px] h-auto rounded-xl shadow-lg"
                    />
                </div>

                {/* Details */}
                <div className="p-5">
                    <h3 className="text-xl font-black text-white mb-1 font-[family-name:var(--font-montserrat)]">
                        {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-through mb-3">Valor separado: R$ {product.price}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                        {product.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-5">
                        {product.highlights.map((h, i) => (
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
                            ✅ Incluído no Combo Nail Designer de Sucesso
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function ObrigadoCutilagemPage() {
    const [bumpChecked, setBumpChecked] = useState(false);
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

    const activeProduct = expandedProduct !== null ? COMBO_PRODUCTS.find(p => p.id === expandedProduct) : null;

    return (
        <>
            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== TOP BANNER TIMER ========== */}
                <TopBannerTimer />

                {/* ========== HEADER COM LOGO ========== */}
                <header className="py-5 px-4 border-b border-gray-800/50">
                    <div className="max-w-lg mx-auto flex justify-center">
                        <Image
                            src="/images/logo_mca.png"
                            alt="Manual de Cutilagem Avançada"
                            width={240}
                            height={120}
                            className="h-auto brightness-110"
                            priority
                        />
                    </div>
                </header>

                {/* ========== CONTEÚDO PRINCIPAL ========== */}
                <div className="max-w-lg mx-auto px-6 py-8">

                    {/* Título Principal */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-3 font-[family-name:var(--font-montserrat)]">
                            Parabéns, meu amor!
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg">
                            Leia o que escrevi aqui pra você com <strong className="text-white">muita atenção...</strong>
                        </p>
                    </div>

                    {/* Imagem da Mariana */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent blur-2xl rounded-full scale-110"></div>
                            <Image
                                src="/images/mariana_png.png"
                                alt="Mariana Nails"
                                width={200}
                                height={260}
                                className="relative z-10 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Mensagem Selecionada */}
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl text-white mb-2 font-[family-name:var(--font-montserrat)] leading-tight">
                            <span className="text-white font-bold">Você foi selecionada</span> para<br />
                            ler o meu
                        </h2>
                        <p className="font-[family-name:var(--font-lora)] italic text-3xl md:text-4xl text-white leading-tight">
                            diário de uma<br />
                            <span className="text-gray-300">nail designer</span>
                        </p>
                    </div>

                    {/* Descrição */}
                    <div className="text-center mb-8">
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Um lugar onde vou compartilhar <strong className="text-white">semanalmente</strong> um conteúdo <strong className="text-white">gratuito</strong> para você aplicar e avançar na sua carreira.
                        </p>
                    </div>

                    {/* Benefícios compactos */}
                    <div className="mb-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                                <span className="text-2xl">💅</span>
                                <p className="text-gray-300 text-base">
                                    <strong className="text-white">Técnicas</strong> de alongamento, acabamento e decoração
                                </p>
                            </div>
                            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                                <span className="text-2xl">✨</span>
                                <p className="text-gray-300 text-base">
                                    <strong className="text-white">Posicionamento</strong>, Redes Sociais e Captação de Clientes
                                </p>
                            </div>
                            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                                <span className="text-2xl">🥰</span>
                                <p className="text-gray-300 text-base">
                                    <strong className="text-white">Atendimento</strong>, Fidelização e Gestão Financeira
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Box Destaque */}
                    <div className="bg-[#22C55E]/10 border border-[#22C55E]/25 rounded-2xl p-5 mb-8 flex items-center gap-4">
                        <div className="w-11 h-11 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-white font-bold text-lg font-[family-name:var(--font-montserrat)]">
                            Tudo sem pagar um centavo por isso!
                        </p>
                    </div>

                    {/* ================================================================ */}
                    {/* ========== UPSELL COMBO — NAIL DESIGNER DE SUCESSO ========== */}
                    {/* ================================================================ */}

                    {/* Seta pulsante */}
                    <div className="text-center mb-3">
                        <span className="inline-block text-[#C41E3A] text-lg md:text-xl font-black animate-bounce">
                            👇 ESPERA! TENHO ALGO ESPECIAL PRA VOCÊ 👇
                        </span>
                    </div>

                    <div className="mb-8 relative">
                        <div className={`relative overflow-hidden rounded-2xl border-[3px] transition-all duration-500 ${bumpChecked ? 'border-[#22C55E] shadow-2xl shadow-[#22C55E]/20' : 'border-white/20 shadow-2xl shadow-white/5'}`}
                            style={{ animation: 'orderBumpPulse 2s ease-in-out infinite' }}>

                            {/* Header do Upsell */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-3 px-5">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-300 text-lg">⚡</span>
                                    <span className="text-white font-black text-sm md:text-base uppercase tracking-wide">Oferta Exclusiva — Somente Nesta Página!</span>
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
                                    <div className={`w-7 h-7 rounded-md border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all duration-300 ${bumpChecked ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-500 group-hover:border-white'}`}>
                                        {bumpChecked && <CheckIcon className="w-4 h-4 text-white" />}
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-tight">
                                            SIM! Eu quero o <span className="text-[#22C55E]">Combo Nail Designer de Sucesso</span> com desconto exclusivo!
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">Marque a caixa para garantir essa condição única</p>
                                    </div>
                                </button>

                                {/* Capa do COMBO */}
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg w-[220px]">
                                        <Image
                                            src="/images/square_COMBO_capa.png"
                                            alt="Combo Nail Designer de Sucesso - Capa"
                                            width={220}
                                            height={220}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Título do Combo */}
                                <div className="mb-5">
                                    <h4 className="text-white font-bold text-xl md:text-2xl mb-2 font-[family-name:var(--font-montserrat)] text-center">
                                        Combo — Nail Designer de Sucesso
                                    </h4>
                                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                                        Leve <strong className="text-white">3 cursos completos</strong> pelo preço que não paga nem <strong className="text-white">um deles separado</strong>.
                                    </p>
                                </div>

                                {/* ========== 3 PRODUTOS DO COMBO ========== */}
                                <div className="mb-5">
                                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-3 text-center">O que vem no combo:</p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {COMBO_PRODUCTS.map((product) => (
                                            <ProductCard
                                                key={product.id}
                                                src={product.src}
                                                alt={product.alt}
                                                name={product.name}
                                                price={product.price}
                                                onClick={() => setExpandedProduct(product.id)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Valor separado vs combo */}
                                <div className="bg-white/[0.03] rounded-xl p-4 mb-5 border border-white/10">
                                    <div className="space-y-2.5">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Sistema Mariana Nails</span>
                                            <span className="text-gray-500 line-through">R$ 47,90</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Código da Fibra Realista</span>
                                            <span className="text-gray-500 line-through">R$ 14,90</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Arquitetura do Molde F1</span>
                                            <span className="text-gray-500 line-through">R$ 14,90</span>
                                        </div>
                                        <div className="border-t border-white/10 pt-2.5 flex justify-between items-center">
                                            <span className="text-gray-300 font-bold text-sm">Total se comprar separado:</span>
                                            <span className="text-red-500 line-through font-bold">R$ 77,70</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Garantia */}
                                <div className="bg-[#1a1a1a] rounded-xl p-4 mb-5 border border-[#22C55E]/20">
                                    <div className="flex items-center gap-3">
                                        <ShieldIcon />
                                        <div>
                                            <p className="text-white font-bold text-sm">Garantia de 7 dias — Risco ZERO</p>
                                            <p className="text-gray-500 text-xs mt-0.5">Não gostou? Devolvo 100% sem perguntas.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Preço do Combo */}
                                <div className="bg-[#1a1a1a] rounded-xl p-5 mb-5 text-center border border-white/10">
                                    <p className="text-gray-400 text-sm mb-1">
                                        De <span className="text-red-500 line-through font-bold">R$ 297,00</span> por apenas:
                                    </p>
                                    <p className="text-white text-base mb-2 font-semibold">Leve os 3 cursos por {COMBO_PARCELAS} de:</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-2xl text-[#22C55E] font-bold font-[family-name:var(--font-montserrat)]">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{COMBO_PRECO_PARCELADO}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-1">ou <strong className="text-white">R$ {COMBO_PRECO_AVISTA}</strong> à vista</p>
                                    <p className="text-[#22C55E] font-bold text-sm mt-2">Economia de mais de R$ 269! 💰</p>
                                </div>

                                {/* CTA do Upsell */}
                                <a
                                    id="btn-upsell-combo"
                                    href={COMBO_CHECKOUT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-lg md:text-xl py-5 px-8 rounded-full shadow-lg shadow-[#22C55E]/30 transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide font-[family-name:var(--font-montserrat)]"
                                    style={{ animation: 'ctaPulse 2s ease-in-out infinite' }}
                                >
                                    🔥 QUERO O COMBO COMPLETO!
                                </a>

                                <p className="text-center text-gray-500 text-xs mt-3">
                                    <LockIcon />
                                    Pagamento 100% seguro • Acesso imediato • 7 dias de garantia
                                </p>

                                {/* Aviso de urgência */}
                                <div className="mt-5 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-lg p-3 flex items-start gap-2">
                                    <WarningIcon />
                                    <p className="text-[#C41E3A] text-sm font-bold">
                                        Essa oferta de R$ {COMBO_PRECO_AVISTA} pelos 3 cursos é EXCLUSIVA para quem acabou de comprar o Manual de Cutilagem. Se sair desta página, o preço volta ao normal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========== FIM UPSELL COMBO ========== */}

                    {/* Card CTA Final - WhatsApp */}
                    <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-7 text-center">
                        <p className="text-white text-lg md:text-xl mb-5 font-[family-name:var(--font-montserrat)] leading-relaxed">
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
                    <div className="text-center mt-8 text-sm text-gray-600">
                        <p>© {new Date().getFullYear()} Mariana Nails • Todos os direitos reservados</p>
                    </div>

                </div>
            </div>

            {/* Modal de Produto Expandido */}
            {activeProduct && (
                <ProductModal
                    product={activeProduct}
                    onClose={() => setExpandedProduct(null)}
                />
            )}

            <style jsx global>{`
                @keyframes orderBumpPulse {
                    0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.05); }
                    50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.1); }
                }
                @keyframes ctaPulse {
                    0%, 100% { box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3); }
                    50% { box-shadow: 0 4px 30px rgba(34, 197, 94, 0.5); }
                }
                @keyframes prodModalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes prodModalSlideUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </>
    );
}
