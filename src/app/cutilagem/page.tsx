import React, { Suspense } from 'react';
import Image from 'next/image';
import { UrgencyHeader, CTAButtonWithParams, ModuleGallery } from './components';

// ============================================
// CONFIGURAÇÕES
// ============================================
const PRECO_PARCELADO = "12,38";
const PRECO_AVISTA = "34,90";
const PARCELAS = "3x";

const CTA_FALLBACK = (
    <div className="flex items-center justify-between gap-3 w-full min-h-[56px] bg-gradient-to-b from-[#00C863] to-[#00994B] text-white font-extrabold text-[13px] sm:text-[15px] py-3.5 px-5 sm:px-7 rounded-xl border-t border-[#5EEAD4]/40 uppercase tracking-[0.06em] font-[family-name:var(--font-inter-cutilagem)]">
        <span className="flex-1 text-center pl-6 sm:pl-8">QUERO DOMINAR A CUTILAGEM AGORA</span>
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#00994B]">→</span>
    </div>
);

// Check Item com SVG inline no tema editorial escuro
const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-[#EAE0D5] text-sm sm:text-base font-[family-name:var(--font-inter-cutilagem)] leading-relaxed">
        <span className="w-5 h-5 rounded-full bg-[#00B85C]/15 border border-[#00B85C]/35 flex items-center justify-center mt-0.5 flex-shrink-0">
            <svg className="w-3 h-3 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </span>
        <span>{children}</span>
    </li>
);

const ShieldIcon = () => (
    <svg className="w-5 h-5 text-[#4ADE80] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    </svg>
);

// ============================================
// PÁGINA PRINCIPAL (Server Component)
// ============================================
export default function CutilagemLandingPage() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#140F0B] text-[#FAF6F0] font-[family-name:var(--font-inter-cutilagem)]">

            {/* ========== HEADER URGÊNCIA STICKY (ESTILO IMAGEM 2) ========== */}
            <UrgencyHeader />

            {/* ========== HERO EDITORIAL CENTRALIZADO (ESTILO IMAGEM 2) ========== */}
            <section className="relative overflow-hidden bg-[#140F0B] px-5 pt-3 pb-12 sm:pt-6 sm:pb-16">
                {/* Brilho ambiente quente e arcos decorativos sutis atrás do retrato */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[420px] bg-[radial-gradient(circle_at_center,rgba(196,154,116,0.22)_0%,rgba(20,15,11,0)_70%)]"
                />
                <svg
                    aria-hidden="true"
                    viewBox="0 0 600 400"
                    className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-[480px] sm:w-[620px] h-auto text-[#C9AA8E]/20"
                    fill="none"
                >
                    <path
                        d="M70 320C120 130 330 40 530 105"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M120 345C205 165 395 110 565 185"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                </svg>

                <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
                    {/* Retrato Centralizado com fade suave na base */}
                    <div className="relative w-[248px] sm:w-[290px] md:w-[320px] mx-auto">
                        <Image
                            src="/images/mca/mariana-hero.webp"
                            alt="Mariana Nails - Especialista em Cutilagem Avançada"
                            width={640}
                            height={640}
                            className="relative z-10 w-full h-auto object-contain mx-auto"
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 639px) 248px, (max-width: 767px) 290px, 320px"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 z-20 bg-gradient-to-t from-[#140F0B] via-[#140F0B]/85 to-transparent"
                        />
                    </div>

                    {/* Pill Badge sobre a transição do retrato */}
                    <div className="-mt-7 relative z-30 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1510]/90 border border-[#564436] backdrop-blur-sm shadow-md">
                        <svg className="w-3.5 h-3.5 text-[#C9AA8E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                        </svg>
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EAE0D5] font-[family-name:var(--font-inter-cutilagem)]">
                            MANUAL DE CUTILAGEM • ACESSO IMEDIATO
                        </span>
                    </div>

                    {/* Título Principal em Playfair Display */}
                    <h1 className="font-[family-name:var(--font-playfair-cutilagem)] text-[32px] leading-[1.12] sm:text-[42px] md:text-[46px] md:leading-[1.1] font-semibold text-[#FAF6F0] mt-5 mb-4 tracking-[-0.01em]">
                        Domine uma{" "}
                        <span className="italic font-medium text-[#C9AA8E]">cutilagem</span>
                        <br />
                        <span className="italic font-medium text-[#C9AA8E]">funda, limpa</span> e sem{" "}
                        <span className="italic font-medium text-[#C9AA8E]">bife</span> na mesa.
                    </h1>

                    {/* Subtítulo Editorial */}
                    <p className="text-sm sm:text-base text-[#CFC5BB] leading-relaxed max-w-md mx-auto mb-6 font-[family-name:var(--font-inter-cutilagem)]">
                        Copie os movimentos exatos para entregar{" "}
                        <strong className="text-[#FAF6F0] font-semibold">acabamento de alto padrão</strong>{" "}
                        sem cortes e reduzindo seu tempo em mesa — por apenas{" "}
                        <strong className="text-[#FAF6F0] font-semibold">{PARCELAS} de R$ {PRECO_PARCELADO}</strong>{" "}
                        (ou R$ {PRECO_AVISTA} à vista).
                    </p>

                    {/* CTA Principal */}
                    <div className="w-full max-w-md mx-auto">
                        <Suspense fallback={CTA_FALLBACK}>
                            <CTAButtonWithParams location="hero">
                                QUERO DOMINAR A CUTILAGEM AGORA
                            </CTAButtonWithParams>
                        </Suspense>
                        <p className="text-[11px] sm:text-xs text-[#9D9287] mt-3 font-[family-name:var(--font-inter-cutilagem)]">
                            De <span className="line-through">R$ 308,00</span> por {PARCELAS} de R$ {PRECO_PARCELADO} • 7 dias de garantia na Hubla
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== SEÇÃO CLARA ARREDONDADA: DOR + PROVA VISUAL + RESULTADOS (ESTILO IMAGEM 3) ========== */}
            <section className="relative overflow-hidden bg-[#EFE5DA] text-[#1A1410] rounded-t-[28px] sm:rounded-t-[36px] py-14 sm:py-16 px-5">
                {/* Marca d'água sutil em curvas */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 600 600"
                    className="pointer-events-none absolute -left-24 top-10 w-[420px] h-auto text-[#E2D4C5]"
                    fill="none"
                >
                    <path
                        d="M40 480C120 220 340 80 560 120"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M90 540C200 280 410 180 590 250"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Dor / Problema + Prova Visual */}
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7B6554] font-[family-name:var(--font-inter-cutilagem)]">
                            — ACABAMENTO PROFISSIONAL
                        </p>

                        <h2 className="font-[family-name:var(--font-playfair-cutilagem)] text-3xl sm:text-4xl font-semibold leading-[1.14] text-[#1A1410] mt-3 mb-4">
                            Se errar na cutilagem,{" "}
                            <span className="italic font-medium text-[#9E7B5F]">
                                sua unha vai parecer barata.
                            </span>
                        </h2>

                        <p className="text-[#4E4239] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-inter-cutilagem)]">
                            A cutilagem é a base de qualquer serviço de unhas. Se fica pele levantada, corte irregular ou
                            &ldquo;bife&rdquo;, não importa o quão bonita seja a nail art — o resultado parece amador e você
                            perde tempo tentando disfarçar na mesa.
                        </p>

                        {/* Card com Foto de Resultado + Overlay Editorial (Estilo Imagem 3) */}
                        <div className="relative max-w-sm mx-auto mt-7 rounded-2xl overflow-hidden border border-[#D8C8B8] shadow-xl">
                            <Image
                                src="/images/mca/cuticula-resultado.webp"
                                alt="Resultado de cutilagem profissional funda, limpa e sem bife"
                                width={480}
                                height={851}
                                className="w-full aspect-[4/5] object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 340px, 384px"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140F0B]/95 via-[#140F0B]/60 to-transparent p-5 text-left">
                                <p className="font-[family-name:var(--font-playfair-cutilagem)] italic text-3xl sm:text-4xl font-medium text-[#FAF6F0] leading-none mb-1.5">
                                    Funda &amp; limpa
                                </p>
                                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#D8BFA8] font-[family-name:var(--font-inter-cutilagem)]">
                                    ZERO CORTES • ACABAMENTO DE ALTO PADRÃO
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Resultados / Feedbacks das Alunas */}
                    <div className="mt-16 pt-12 border-t border-[#DFD1C2] text-center">
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7B6554] font-[family-name:var(--font-inter-cutilagem)]">
                            — RESULTADOS
                        </p>

                        <h2 className="font-[family-name:var(--font-playfair-cutilagem)] text-3xl sm:text-4xl font-semibold leading-[1.14] text-[#1A1410] mt-3 mb-3">
                            O que{" "}
                            <span className="italic font-medium text-[#9E7B5F]">
                                nossas alunas
                            </span>{" "}
                            falam do manual?
                        </h2>

                        <p className="text-[#4E4239] text-sm sm:text-base max-w-md mx-auto mb-8 font-[family-name:var(--font-inter-cutilagem)]">
                            Algumas começaram do zero, outras já atendiam em mesa. Olha os feedbacks reais no WhatsApp:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                            <div className="max-w-[340px] md:max-w-none mx-auto w-full rounded-2xl overflow-hidden border border-[#D8C8B8] shadow-md bg-white">
                                <Image
                                    src="/images/mca/feedback-1.webp"
                                    alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                    width={540}
                                    height={1169}
                                    className="w-full h-auto"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 340px, 300px"
                                />
                            </div>
                            <div className="max-w-[340px] md:max-w-none mx-auto w-full rounded-2xl overflow-hidden border border-[#D8C8B8] shadow-md bg-white">
                                <Image
                                    src="/images/mca/feedback-2.webp"
                                    alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                    width={540}
                                    height={1169}
                                    className="w-full h-auto"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 340px, 300px"
                                />
                            </div>
                            <div className="max-w-[340px] md:max-w-none mx-auto w-full rounded-2xl overflow-hidden border border-[#D8C8B8] shadow-md bg-white">
                                <Image
                                    src="/images/mca/feedback-3.webp"
                                    alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                    width={540}
                                    height={1169}
                                    className="w-full h-auto"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 340px, 300px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SEÇÃO ESCURA: PARA QUEM É + MÓDULOS + PREÇO (ESTILO IMAGEM 4) ========== */}
            <section className="bg-[#140F0B] text-[#FAF6F0] py-14 sm:py-16 px-5">
                <div className="max-w-3xl mx-auto">

                    {/* Para Quem É */}
                    <div className="text-center mb-16">
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9AA8E] font-[family-name:var(--font-inter-cutilagem)]">
                            — PARA QUEM É
                        </p>
                        <h2 className="font-[family-name:var(--font-playfair-cutilagem)] text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#FAF6F0] mt-3 mb-7">
                            O Manual de{" "}
                            <span className="italic font-medium text-[#C9AA8E]">Cutilagem Avançada</span>{" "}
                            é para você que quer:
                        </h2>

                        <div className="bg-[#1E1712] border border-[#3B2E24] rounded-2xl p-6 sm:p-8 text-left max-w-2xl mx-auto shadow-lg">
                            <ul className="space-y-4">
                                <CheckItem>Fazer uma cutilagem fundinha, limpa e sem dar bife (zero cortes)</CheckItem>
                                <CheckItem>Reduzir seu tempo em mesa usando os movimentos e ângulos certos</CheckItem>
                                <CheckItem>Dominar a técnica do corte contínuo de uma vez por todas</CheckItem>
                                <CheckItem>Ter segurança ao pegar no alicate e na broca, sem medo de machucar</CheckItem>
                                <CheckItem>Cobrar mais caro por um acabamento visivelmente superior</CheckItem>
                            </ul>
                        </div>
                    </div>

                    {/* O Que Você Recebe Hoje (Cards no Estilo Imagem 4) */}
                    <div>
                        <div className="text-center mb-8">
                            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9AA8E] font-[family-name:var(--font-inter-cutilagem)]">
                                — O QUE VOCÊ RECEBE HOJE
                            </p>
                            <h2 className="font-[family-name:var(--font-playfair-cutilagem)] text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#FAF6F0] mt-3 mb-2">
                                Tudo o que está{" "}
                                <span className="italic font-medium text-[#C9AA8E]">incluso no manual</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-[#BFB5AB] font-[family-name:var(--font-inter-cutilagem)]">
                                Toque em cada módulo para ver os detalhes do conteúdo.
                            </p>
                        </div>

                        <ModuleGallery />

                        {/* Card Resumo / Somando (Estilo Imagem 4) */}
                        <div className="max-w-2xl mx-auto mt-5 bg-[#1E1712] border border-[#3B2E24] rounded-2xl p-5 shadow-lg">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9AA8E] mb-1 font-[family-name:var(--font-inter-cutilagem)]">
                                        VALOR INDIVIDUAL
                                    </p>
                                    <p className="font-[family-name:var(--font-playfair-cutilagem)] text-2xl sm:text-3xl font-bold text-[#FAF6F0] line-through decoration-[#E11D48] decoration-2 tabular-nums">
                                        R$ 308,00
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-[family-name:var(--font-playfair-cutilagem)] italic text-2xl sm:text-3xl font-medium text-[#FAF6F0] leading-none">
                                        4
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-[#BFB5AB] mt-1 font-[family-name:var(--font-inter-cutilagem)]">
                                        conteúdos completos
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#C9AA8E]/60 via-[#E8D2BD] to-[#C9AA8E]/60 rounded-full" />
                        </div>

                        {/* Bloco Dramático de Preço (Estilo Imagem 4) */}
                        <div className="max-w-md mx-auto text-center mt-12">
                            <p className="font-[family-name:var(--font-playfair-cutilagem)] text-xl sm:text-2xl text-[#D6CEC5] leading-snug">
                                E todo esse passo a passo por apenas:
                            </p>
                            <p className="font-[family-name:var(--font-playfair-cutilagem)] italic text-2xl sm:text-3xl text-[#C9AA8E] mt-2">
                                {PARCELAS} de
                            </p>
                            <div className="my-1 tabular-nums">
                                <span className="font-[family-name:var(--font-playfair-cutilagem)] font-bold text-5xl sm:text-7xl tracking-tight bg-gradient-to-b from-[#FAF6F0] via-[#E5CEB8] to-[#B59272] bg-clip-text text-transparent">
                                    R$ {PRECO_PARCELADO}
                                </span>
                            </div>
                            <p className="text-sm sm:text-base font-bold text-[#FAF6F0] mb-6 font-[family-name:var(--font-inter-cutilagem)]">
                                ou R$ {PRECO_AVISTA} à vista
                            </p>

                            <Suspense fallback={CTA_FALLBACK}>
                                <CTAButtonWithParams location="pricing">
                                    SIM, QUERO COMPRAR AGORA
                                </CTAButtonWithParams>
                            </Suspense>

                            <div className="flex items-center justify-center gap-2 text-[#CFC5BB] text-xs mt-4 font-[family-name:var(--font-inter-cutilagem)]">
                                <ShieldIcon />
                                <span>7 dias de garantia incondicional • Acesso imediato na Hubla</span>
                            </div>
                        </div>
                    </div>

                    {/* Sobre a Expert */}
                    <div className="mt-16 max-w-2xl mx-auto">
                        <div className="bg-[#1E1712] border border-[#3B2E24] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
                            <div className="relative w-40 sm:w-44 aspect-square flex-shrink-0 rounded-2xl overflow-hidden border border-[#564436] bg-[radial-gradient(circle_at_center,rgba(196,154,116,0.22)_0%,#140F0B_75%)]">
                                <Image
                                    src="/images/mca/mariana-hero.webp"
                                    alt="Mariana Nails"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-contain object-bottom"
                                    loading="lazy"
                                    sizes="(max-width: 640px) 160px, 176px"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9AA8E] mb-1.5 font-[family-name:var(--font-inter-cutilagem)]">
                                    — SUA PROFESSORA
                                </p>
                                <h3 className="font-[family-name:var(--font-playfair-cutilagem)] text-2xl sm:text-3xl font-semibold text-[#FAF6F0] mb-3">
                                    Quem é{" "}
                                    <span className="italic font-medium text-[#C9AA8E]">Mariana Nails?</span>
                                </h3>
                                <p className="text-[#CFC5BB] leading-relaxed text-sm mb-3 font-[family-name:var(--font-inter-cutilagem)]">
                                    Especialista em Nail Design com mais de{" "}
                                    <strong className="text-[#FAF6F0] font-semibold">8 anos de experiência</strong>. Já formou mais de 500 alunas que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas.
                                </p>
                                <p className="text-[#BFB5AB] leading-relaxed text-xs sm:text-sm font-[family-name:var(--font-inter-cutilagem)]">
                                    Conhecida por suas técnicas práticas e resultados rápidos, Mariana criou o Manual de Cutilagem Avançada para ajudar nail designers a dominarem a base de todo serviço de qualidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SEÇÃO FINAL CLARA COM CARD ELEVADO E FOOTER (ESTILO IMAGEM 5) ========== */}
            <section className="bg-[#EFE5DA] text-[#1A1410] rounded-t-[28px] sm:rounded-t-[36px] pt-12 pb-10 px-5">
                <div className="relative overflow-hidden max-w-md mx-auto bg-[#F8F3ED] border border-[#E2D5C8] rounded-3xl p-7 sm:p-9 text-center shadow-sm">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 400 320"
                        className="pointer-events-none absolute -top-6 -left-10 w-[340px] h-auto text-[#EAE0D5]"
                        fill="none"
                    >
                        <path
                            d="M20 260C80 120 230 30 380 70"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>

                    <div className="relative z-10">
                        <h2 className="font-[family-name:var(--font-playfair-cutilagem)] text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#1A1410] mb-3">
                            Nenhuma manicure deveria{" "}
                            <span className="italic font-medium text-[#9E7B5F]">
                                sofrer na mesa.
                            </span>
                        </h2>

                        <p className="text-sm text-[#5C4E44] leading-relaxed mb-6 font-[family-name:var(--font-inter-cutilagem)]">
                            Por apenas {PARCELAS} de R$ {PRECO_PARCELADO} (ou R$ {PRECO_AVISTA} à vista), você garante acesso imediato ao Manual de Cutilagem Avançada.
                        </p>

                        <Suspense fallback={CTA_FALLBACK}>
                            <CTAButtonWithParams location="footer">
                                QUERO GARANTIR MEU ACESSO
                            </CTAButtonWithParams>
                        </Suspense>

                        <p className="text-[11px] text-[#6E5F53] mt-3 font-[family-name:var(--font-inter-cutilagem)]">
                            Pagamento 100% seguro via Hubla • Acesso imediato
                        </p>
                    </div>
                </div>

                {/* Footer Editorial Minimalista (Estilo Imagem 5) */}
                <footer className="max-w-md mx-auto mt-10 text-center">
                    <p className="font-[family-name:var(--font-playfair-cutilagem)] text-2xl font-semibold text-[#1A1410] leading-tight">
                        <span className="text-xs uppercase tracking-[0.2em] block font-[family-name:var(--font-inter-cutilagem)] font-medium text-[#6E5F53] mb-0.5">
                            O Manual de
                        </span>
                        <span className="italic">Cutilagem Avançada</span>
                    </p>

                    <p className="text-[#6E5F53] text-xs mt-4 mb-3 font-[family-name:var(--font-inter-cutilagem)]">
                        © {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-[#6E5F53] font-[family-name:var(--font-inter-cutilagem)]">
                        <a href="#" className="py-1.5 px-2 text-[#6E5F53] hover:text-[#1A1410]">Termos de Uso</a>
                        <span aria-hidden="true">•</span>
                        <a href="#" className="py-1.5 px-2 text-[#6E5F53] hover:text-[#1A1410]">Política de Privacidade</a>
                        <span aria-hidden="true">•</span>
                        <a
                            id="btn-whatsapp-mca"
                            href="https://wa.me/5511944598264"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1.5 px-2 text-[#6E5F53] hover:text-[#1A1410]"
                        >
                            Suporte via WhatsApp
                        </a>
                    </div>
                </footer>
            </section>
        </div>
    );
}
