"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "#"; // Adicionar URL do checkout aqui
const WHATSAPP_URL = "https://wa.me/5511944598264?text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20Presencial%20Nail%20Designer%20em%20Barueri";

// ============================================
// COMPONENTES
// ============================================

// Botão CTA Verde - Garanta sua Vaga
const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <a
        id="btn-garanta-vaga-curso"
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
      font-[family-name:var(--font-montserrat)]
      ${className}
    `}
    >
        {children}
    </a>
);

// Botão WhatsApp
const WhatsAppButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <a
        id="btn-whatsapp-curso"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
      block w-full text-center
      bg-[#25D366] hover:bg-[#128C7E]
      text-white font-bold text-lg md:text-xl
      py-4 px-8 rounded-full
      shadow-lg shadow-[#25D366]/30
      transition-all duration-300 transform hover:scale-[1.02]
      uppercase tracking-wide
      font-[family-name:var(--font-montserrat)]
      flex items-center justify-center gap-3
      ${className}
    `}
    >
        <i className="fa-brands fa-whatsapp text-2xl"></i>
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
                    🔥 VAGAS LIMITADAS - IMERSÃO PRESENCIAL:
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
export default function CursoNailDesignerBarueriPage() {
    return (
        <>
            {/* Font Awesome CDN */}
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <title>Curso Presencial Nail Designer em Barueri | Imersão Mariana Nails & Gilmara Oliver</title>
                <meta name="description" content="Aprenda Nail Design do zero ao profissional na imersão presencial em Barueri com Mariana Nails e Gilmara Oliver. 2 dias intensivos de prática." />
            </Head>

            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== HEADER URGÊNCIA COM CONTADOR ========== */}
                <UrgencyHeader />

                {/* ========== HERO SECTION ========== */}
                <section className="relative px-4 py-8 md:py-12">
                    <div className="max-w-5xl mx-auto">

                        {/* Título do Produto */}
                        <div className="text-center mb-8">
                            <p className="text-[#D4AF37] text-sm md:text-base uppercase tracking-widest mb-2 font-[family-name:var(--font-poppins)]">
                                Curso Presencial em Barueri - SP
                            </p>
                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                Imersão<br />
                                <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Nail Designer</span>
                            </h1>
                            <p className="text-gray-400 text-base md:text-xl tracking-wider font-[family-name:var(--font-poppins)]">
                                Com <strong className="text-white">Mariana Nails</strong> & <strong className="text-white">Gilmara Oliver</strong>
                            </p>
                        </div>

                        {/* Imagem Principal + Copy */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-full md:w-1/2 relative flex justify-center">
                                <div className="relative">
                                    {/* Efeito de brilho atrás da foto */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/30 via-[#D4AF37]/20 to-[#C41E3A]/30 blur-3xl rounded-full scale-110"></div>
                                    <Image
                                        src="/images/mariana_png.png"
                                        alt="Mariana Nails - Nail Designer"
                                        width={450}
                                        height={500}
                                        className="relative z-10 w-full max-w-[400px] h-auto object-contain mx-auto drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Badge flutuante - apenas desktop */}
                                    <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-2">
                                        <p className="text-sm text-gray-300">
                                            <strong className="text-[#D4AF37]">2 Dias Intensivos</strong> • Domingo & Segunda
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                    Domine a arte do <strong className="text-[#D4AF37]">Nail Design</strong> em uma imersão presencial de 2 dias e comece a faturar alto com suas unhas!
                                </p>
                                <p className="text-lg text-gray-300 mb-8">
                                    Aprenda técnicas exclusivas de alongamento, esmaltação e nail art com quem realmente entende do assunto.
                                </p>

                                {/* Info do Curso */}
                                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#D4AF37]/50 rounded-2xl p-6 mb-6 shadow-lg shadow-[#D4AF37]/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-calendar-days text-2xl text-[#D4AF37]"></i>
                                        <div>
                                            <p className="text-white font-bold text-lg">Domingo e Segunda</p>
                                            <p className="text-gray-400 text-sm">2 dias de imersão presencial</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-location-dot text-2xl text-[#D4AF37]"></i>
                                        <div>
                                            <p className="text-white font-bold text-lg">Barueri - SP</p>
                                            <p className="text-gray-400 text-sm">Endereço enviado após confirmação</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-certificate text-2xl text-[#D4AF37]"></i>
                                        <div>
                                            <p className="text-white font-bold text-lg">Certificado Incluso</p>
                                            <p className="text-gray-400 text-sm">Reconhecido no mercado</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <CTAButton>
                                        Garanta sua Vaga Agora
                                    </CTAButton>
                                    <WhatsAppButton>
                                        Conversar via Whatsapp
                                    </WhatsAppButton>
                                </div>
                                <p className="text-xs text-gray-500 mt-3 text-center">Vagas limitadas • Material incluso</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== GALERIA ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            Veja o que você vai <span className="text-[#D4AF37]">aprender</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={num} className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    <Image
                                        src={`/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (${num}).webp`}
                                        alt={`Resultado do curso de Nail Design ${num}`}
                                        width={300}
                                        height={300}
                                        className="w-full h-auto rounded-xl object-cover aspect-square"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== DOR / PROBLEMA ==========  */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-white font-[family-name:var(--font-montserrat)]">
                            Cansada de trabalhar SEM ter<br />
                            <span className="text-[#C41E3A]">RESULTADOS PROFISSIONAIS?</span>
                        </h2>
                        <p className="text-white text-lg leading-relaxed mb-8">
                            Se você quer sair do básico e se tornar uma <strong className="text-[#D4AF37]">Nail Designer completa</strong>,
                            capaz de cobrar mais e atrair mais clientes, essa imersão é para você.
                        </p>
                    </div>
                </section>

                {/* ========== PARA QUEM É ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            Essa <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Imersão</span> é para você que quer:
                        </h2>

                        <div className="bg-[#111] border border-gray-800 rounded-xl p-6 md:p-8">
                            <ul className="space-y-4">
                                <CheckItem>✅ Aprender técnicas profissionais de alongamento de unhas</CheckItem>
                                <CheckItem>✅ Dominar a esmaltação perfeita sem borrar</CheckItem>
                                <CheckItem>✅ Criar nail arts incríveis que encantam as clientes</CheckItem>
                                <CheckItem>✅ Cobrar muito mais pelo seu trabalho</CheckItem>
                                <CheckItem>✅ Ter um diferencial no mercado e se destacar da concorrência</CheckItem>
                                <CheckItem>✅ Receber certificado reconhecido no mercado</CheckItem>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== O QUE VOCÊ VAI APRENDER ========== */}
                <section className="py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                            O que você vai <span className="text-[#22C55E]">aprender:</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Dia 1 */}
                            <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#D4AF37] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">1</div>
                                    <h3 className="text-xl font-bold text-[#D4AF37]">Dia 1 - Domingo</h3>
                                </div>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Preparação e cuidados com a cutícula</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Técnicas de alongamento</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Aplicação de fibra de vidro</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Modelagem perfeita</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Dia 2 */}
                            <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#D4AF37] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">2</div>
                                    <h3 className="text-xl font-bold text-[#D4AF37]">Dia 2 - Segunda</h3>
                                </div>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Esmaltação em gel profissional</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Nail art tendência</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Técnicas de decoração</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-circle text-[4px] text-[#D4AF37] mt-2"></i>
                                        <span>Como precificar seus serviços</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CTA MEIO ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-[#0a0a0a] border-2 border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/10">
                            {/* Header do Card */}
                            <div className="bg-gradient-to-r from-[#8B0000] to-[#C41E3A] py-5 px-6 text-center">
                                <h3 className="text-2xl font-black text-white mb-1 font-[family-name:var(--font-montserrat)]">
                                    Imersão <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Nail Designer</span>
                                </h3>
                                <p className="text-white/90 font-medium text-sm uppercase tracking-wider">Mariana Nails & Gilmara Oliver</p>
                            </div>

                            <div className="p-6 md:p-8 text-center">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="text-center">
                                        <i className="fa-solid fa-calendar-days text-3xl text-[#D4AF37] mb-2"></i>
                                        <p className="text-gray-400 text-sm">2 Dias</p>
                                    </div>
                                    <div className="w-px h-12 bg-gray-700"></div>
                                    <div className="text-center">
                                        <i className="fa-solid fa-location-dot text-3xl text-[#D4AF37] mb-2"></i>
                                        <p className="text-gray-400 text-sm">Barueri - SP</p>
                                    </div>
                                    <div className="w-px h-12 bg-gray-700"></div>
                                    <div className="text-center">
                                        <i className="fa-solid fa-certificate text-3xl text-[#D4AF37] mb-2"></i>
                                        <p className="text-gray-400 text-sm">Certificado</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <CTAButton>
                                        Garanta sua Vaga Agora
                                    </CTAButton>
                                    <WhatsAppButton>
                                        Conversar via Whatsapp
                                    </WhatsAppButton>
                                </div>

                                {/* Garantia */}
                                <div className="flex items-center justify-center gap-3 text-white text-sm font-[family-name:var(--font-poppins)] mt-6">
                                    <i className="fa-solid fa-users text-xl text-[#22C55E]"></i>
                                    <span>Turmas reduzidas para melhor aprendizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SOBRE AS EXPERTS ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
                            Suas <span className="text-[#D4AF37]">Instrutoras</span>
                        </h2>

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
                                <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 font-[family-name:var(--font-montserrat)]">Mariana Nails & Gilmara Oliver</h3>
                                <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-lora)] mb-4">
                                    Especialistas em Nail Design com mais de <strong className="text-white">8 anos de experiência</strong>. Juntas, já formaram mais de 500 alunas
                                    que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas.
                                </p>
                                <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-poppins)]">
                                    Conhecidas por suas técnicas práticas e resultados rápidos, Mariana e Gilmara criaram essa imersão para transformar iniciantes em profissionais completas em apenas 2 dias.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== MAIS RESULTADOS ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            Resultados das nossas <span className="text-[#D4AF37]">alunas</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                                <div key={num} className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    <Image
                                        src={`/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (${num}).webp`}
                                        alt={`Resultado do curso de Nail Design ${num}`}
                                        width={300}
                                        height={300}
                                        className="w-full h-auto rounded-xl object-cover aspect-square"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINAL ========== */}
                <section className="py-16 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-[family-name:var(--font-montserrat)]">
                            Imersão <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Nail Designer</span>
                        </h3>
                        <p className="text-gray-400 mb-2 text-lg">Mariana Nails & Gilmara Oliver</p>
                        <p className="text-white mb-6 text-lg font-bold">As vagas são limitadas e podem acabar a qualquer momento!</p>
                        <div className="space-y-4">
                            <CTAButton>
                                Garanta sua Vaga Agora
                            </CTAButton>
                            <WhatsAppButton>
                                Conversar via Whatsapp
                            </WhatsAppButton>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">Pagamento seguro • Certificado incluso • Material incluso</p>
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
                        <a id="btn-whatsapp-footer" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Suporte via WhatsApp</a>
                    </div>
                </footer>
            </div>
        </>
    );
}
