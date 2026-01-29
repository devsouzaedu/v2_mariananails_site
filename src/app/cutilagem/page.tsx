"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";
const WHATSAPP_SUPORTE = "https://wa.me/5511999999999";

// ============================================
// ANIMAÇÕES
// ============================================
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

// Hook customizado para animação ao scroll
function useScrollAnimation() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return { ref, controls, isInView };
}

// Componente de Seção Animada
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className={className}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// COMPONENTES
// ============================================

// Ícone de Check elegante
const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

// Botão CTA Principal
const CTAButton = ({ children, pulse = false, className = "" }: { children: React.ReactNode, pulse?: boolean, className?: string }) => (
    <motion.a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`
      inline-flex items-center justify-center gap-2
      bg-gradient-to-r from-[#B76E79] to-[#C9949D]
      text-white font-semibold text-lg
      px-8 py-4 rounded-full
      shadow-lg shadow-[#B76E79]/30
      hover:shadow-xl hover:shadow-[#B76E79]/40
      transition-all duration-300
      ${pulse ? 'animate-pulse' : ''}
      ${className}
    `}
    >
        {children}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </motion.a>
);

// Card de Benefício
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <motion.div
        variants={scaleIn}
        className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#F5E6E0]/50"
    >
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5E6E0] to-[#E8D5CF] text-[#B76E79] mb-4">
            {icon}
        </div>
        <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">{title}</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
    </motion.div>
);

// Card de Conteúdo/Módulo
const ContentCard = ({ number, title, items }: { number: string, title: string, items: string[] }) => (
    <motion.div
        variants={fadeInUp}
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F5E6E0]/30 group"
    >
        <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#B76E79] to-[#C9949D] text-white font-serif text-lg">
                {number}
            </span>
            <h3 className="font-serif text-xl text-[#2D2D2D] group-hover:text-[#B76E79] transition-colors">
                {title}
            </h3>
        </div>
        <ul className="space-y-2 ml-14">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                    <CheckIcon />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function CutilagemLandingPage() {
    return (
        <div className="min-h-screen bg-[#FDFBFA] font-sans antialiased">

            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F6] via-[#F9F1EE] to-[#F5E6E0]" />

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#B76E79]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8D5CF]/30 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8"
                    >
                        <span className="w-2 h-2 bg-[#B76E79] rounded-full animate-pulse" />
                        <span className="text-sm text-[#6B6B6B] font-medium">Manual Digital Completo</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D2D2D] leading-tight mb-6"
                    >
                        Domine a{' '}
                        <span className="text-[#B76E79]">Cutilagem Perfeita</span>
                        <br className="hidden md:block" />
                        {' '}e Reduza seu Tempo de Atendimento pela Metade
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Aprenda o passo a passo do <strong className="text-[#2D2D2D]">corte contínuo</strong> e da{' '}
                        <strong className="text-[#2D2D2D]">cutilagem interna</strong> sem medo de tirar bife.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <CTAButton>Quero me tornar uma expert</CTAButton>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-[#9B9B9B]"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Compra Segura
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Acesso Imediato
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            7 Dias de Garantia
                        </span>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-[#B76E79]/30 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-3 bg-[#B76E79] rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ========== BENEFÍCIOS SECTION ========== */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] mb-4">
                            Por que dominar a cutilagem perfeita?
                        </h2>
                        <p className="text-[#6B6B6B] max-w-xl mx-auto">
                            A diferença entre uma profissional comum e uma expert está nos detalhes.
                        </p>
                    </AnimatedSection>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <BenefitCard
                            icon={
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            title="Cutilagem Funda"
                            description="Domine a técnica do corte contínuo e entregue um resultado limpo, sem bifes ou repuxados."
                        />
                        <BenefitCard
                            icon={
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            }
                            title="Agilidade = Mais Lucro"
                            description="Reduza o tempo de atendimento pela metade e atenda mais clientes por dia."
                        />
                        <BenefitCard
                            icon={
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            }
                            title="Acabamento Impecável"
                            description="Deixe a cutícula perfeita para receber qualquer tipo de esmaltação ou nail art."
                        />
                    </motion.div>
                </div>
            </section>

            {/* ========== CONTEÚDO/MÓDULOS SECTION ========== */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#FDFBFA] to-white">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block text-[#B76E79] text-sm font-semibold tracking-wider uppercase mb-4">
                            O que você vai aprender
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] mb-4">
                            Conteúdo do Manual
                        </h2>
                        <p className="text-[#6B6B6B] max-w-xl mx-auto">
                            4 pilares essenciais para você se tornar referência em cutilagem na sua região.
                        </p>
                    </AnimatedSection>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <ContentCard
                            number="1"
                            title="Preparação da Cutícula"
                            items={[
                                "Amolecimento correto sem danificar a pele",
                                "Uso do pusher no ângulo ideal",
                                "Identificação dos tipos de cutícula"
                            ]}
                        />
                        <ContentCard
                            number="2"
                            title="Técnica de Corte Contínuo"
                            items={[
                                "Posicionamento do alicate profissional",
                                "Movimento fluído sem interrupções",
                                "Como evitar o temido 'bife'"
                            ]}
                        />
                        <ContentCard
                            number="3"
                            title="Acabamento Premium"
                            items={[
                                "Hidratação pós-cutilagem",
                                "Polimento da pele ao redor",
                                "Preparação para esmaltação perfeita"
                            ]}
                        />
                        <ContentCard
                            number="4"
                            title="Biossegurança Essencial"
                            items={[
                                "Esterilização correta dos instrumentos",
                                "Cuidados com clientes sensíveis",
                                "Normas sanitárias atualizadas"
                            ]}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ========== SOBRE A INSTRUTORA SECTION ========== */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-[#FDF8F6] to-[#F9F1EE] rounded-3xl p-8 md:p-12">
                            {/* Imagem */}
                            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <Image
                                    src="/images/card_imagem_mariana1.png"
                                    alt="Mariana - Instrutora de Nail Design"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bio */}
                            <div className="text-center md:text-left">
                                <span className="inline-block text-[#B76E79] text-sm font-semibold tracking-wider uppercase mb-2">
                                    Sua Instrutora
                                </span>
                                <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] mb-4">
                                    Mariana Nails
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed mb-6">
                                    Especialista em Nail Design com mais de <strong className="text-[#2D2D2D]">8 anos de experiência</strong> no mercado da beleza.
                                    Já formou centenas de alunas que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas.
                                    <br /><br />
                                    Minha missão é compartilhar as técnicas que me tornaram referência, de forma simples e prática,
                                    para que você também conquiste sua <strong className="text-[#2D2D2D]">independência financeira</strong>.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#6B6B6B] shadow-sm">
                                        <span className="text-[#B76E79]">✓</span> +500 alunas formadas
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#6B6B6B] shadow-sm">
                                        <span className="text-[#B76E79]">✓</span> 8+ anos de experiência
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ========== OFERTA SECTION ========== */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#FDFBFA] to-[#F5E6E0]">
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block text-[#B76E79] text-sm font-semibold tracking-wider uppercase mb-4">
                            Oferta Especial
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] mb-4">
                            Comece sua transformação hoje
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Badge de Desconto */}
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#B76E79] to-[#C9949D] text-white text-sm font-bold px-6 py-2 rounded-bl-2xl">
                                -73% OFF
                            </div>

                            <div className="p-8 md:p-12">
                                <h3 className="font-serif text-2xl text-[#2D2D2D] text-center mb-8">
                                    Manual de Cutilagem Avançada
                                </h3>

                                {/* O que está incluso */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 p-4 bg-[#FDF8F6] rounded-xl">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B76E79]/10">
                                            <CheckIcon />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#2D2D2D]">Manual Completo em PDF</p>
                                            <p className="text-sm text-[#9B9B9B]">Download imediato</p>
                                        </div>
                                        <span className="ml-auto text-sm text-[#9B9B9B] line-through">R$ 97</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-[#FDF8F6] rounded-xl">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B76E79]/10">
                                            <CheckIcon />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#2D2D2D]">Vídeo-Aula Prática</p>
                                            <p className="text-sm text-[#9B9B9B]">Assista quando quiser</p>
                                        </div>
                                        <span className="ml-auto text-sm text-[#9B9B9B] line-through">R$ 147</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FDF8F6] to-[#F5E6E0] rounded-xl border border-[#B76E79]/20">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B76E79] text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#2D2D2D]">BÔNUS: Checklist de Materiais</p>
                                            <p className="text-sm text-[#B76E79]">Exclusivo para você</p>
                                        </div>
                                        <span className="ml-auto text-sm font-medium text-[#B76E79]">GRÁTIS</span>
                                    </div>
                                </div>

                                {/* Preço */}
                                <div className="text-center mb-8">
                                    <p className="text-[#9B9B9B] mb-2">
                                        De <span className="line-through">R$ 297,00</span>
                                    </p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-2xl text-[#6B6B6B]">por apenas</span>
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1 my-2">
                                        <span className="text-2xl text-[#2D2D2D]">R$</span>
                                        <span className="font-serif text-6xl md:text-7xl text-[#B76E79] font-bold">79</span>
                                        <span className="text-2xl text-[#2D2D2D]">,90</span>
                                    </div>
                                    <p className="text-sm text-[#9B9B9B]">ou 12x de R$ 7,99 no cartão</p>
                                </div>

                                {/* CTA */}
                                <div className="text-center">
                                    <CTAButton pulse className="w-full md:w-auto text-xl py-5 px-12">
                                        QUERO ACESSAR AGORA
                                    </CTAButton>

                                    <p className="mt-6 text-sm text-[#9B9B9B] flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Pagamento 100% seguro • 7 dias de garantia incondicional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer className="py-12 px-6 bg-[#2D2D2D] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Logo/Nome */}
                        <div className="text-center md:text-left">
                            <h3 className="font-serif text-xl mb-2">Mariana Nails</h3>
                            <p className="text-sm text-gray-400">Transformando vidas através da beleza</p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            <a href={WHATSAPP_SUPORTE} className="hover:text-white transition-colors">Suporte</a>
                            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        </div>

                        {/* Selo de Segurança */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Site Seguro</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.</p>
                        <p className="mt-2">CNPJ: XX.XXX.XXX/0001-XX</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
