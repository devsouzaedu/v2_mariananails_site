import React, { Suspense } from 'react';
import Image from 'next/image';
import { UrgencyHeader, CTAButtonWithParams } from './components';

// ============================================
// CONFIGURAÇÕES
// ============================================
const PRECO_PARCELADO = "5,29";
const PRECO_AVISTA = "14,90";
const PARCELAS = "3x";

// ============================================
// COMPONENTES (Server-side)
// ============================================

// Check Item com SVG inline (sem Font Awesome)
const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-white/90 font-[family-name:var(--font-poppins)]">
        <svg className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>{children}</span>
    </li>
);

// SVG do escudo (sem Font Awesome)
const ShieldIcon = () => (
    <svg className="w-6 h-6 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    </svg>
);

// ============================================
// PÁGINA PRINCIPAL (Server Component)
// ============================================
export default function CutilagemLandingPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

            {/* ========== HEADER URGÊNCIA COM CONTADOR ========== */}
            <UrgencyHeader />

            {/* ========== HERO SECTION ========== */}
            <section className="relative px-4 py-8 md:py-12">
                <div className="max-w-5xl mx-auto">

                    {/* Título do Produto */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
                            O Manual de<br />
                            <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Cutilagem Avançada</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-xl tracking-wider uppercase font-[family-name:var(--font-poppins)]">Para Nail Designer</p>
                    </div>

                    {/* Imagem Principal + Copy */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="w-full md:w-1/2 relative flex justify-center">
                            <div className="relative">
                                {/* Efeito de brilho atrás da foto */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/30 via-[#D4AF37]/20 to-[#C41E3A]/30 blur-3xl rounded-full scale-110"></div>
                                <Image
                                    src="/images/mariana_png.png"
                                    alt="Mariana Nails - Especialista em Nail Design"
                                    width={450}
                                    height={500}
                                    className="relative z-10 w-full max-w-[400px] h-auto object-contain mx-auto drop-shadow-2xl"
                                    priority
                                    fetchPriority="high"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                {/* Badge flutuante - apenas desktop */}
                                <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-2">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-[#D4AF37]">Mariana Nails</strong> • Especialista em Nail Design
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                                Copie os meus movimentos de uma <strong className="text-[#D4AF37]">Cutilagem Perfeita</strong> e entregue
                                unhas impecáveis para suas clientes.
                            </p>
                            <p className="text-lg text-gray-300 mb-8">
                                Aprenda o passo a passo e veja a diferença já na próxima cliente.
                            </p>

                            {/* Preço Hero - Box Verde igual à referência */}
                            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#22C55E]/50 rounded-2xl p-6 mb-6 shadow-lg shadow-[#22C55E]/10">
                                <p className="text-white text-base mb-2">
                                    Preço de Lançamento: <span className="text-red-500 line-through font-bold">R$ 308,00</span>
                                </p>
                                <p className="text-white text-lg mb-4">Somente hoje por apenas {PARCELAS} de:</p>
                                <div className="flex items-baseline justify-center md:justify-start gap-2 my-2">
                                    <span className="text-3xl text-[#22C55E] font-bold">R$</span>
                                    <span className="text-7xl md:text-8xl font-black text-[#22C55E]">{PRECO_PARCELADO}</span>
                                </div>
                                <p className="text-sm text-gray-400">ou R$ {PRECO_AVISTA} à vista</p>
                            </div>

                            <Suspense fallback={
                                <div className="block w-full text-center bg-[#22C55E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full uppercase tracking-wide font-[family-name:var(--font-montserrat)]">
                                    SIM, QUERO COMPRAR AGORA!
                                </div>
                            }>
                                <CTAButtonWithParams>
                                    SIM, QUERO COMPRAR AGORA!
                                </CTAButtonWithParams>
                            </Suspense>
                            <p className="text-xs text-gray-500 mt-3 text-center">Acesso imediato • Pagamento seguro</p>

                            {/* Imagem de cutícula */}
                            <div className="mt-6">
                                <Image
                                    src="/images/unha_bemfeita_cuticula.jpeg"
                                    alt="Resultado de cutilagem profissional"
                                    width={400}
                                    height={300}
                                    className="w-full max-w-[350px] h-auto mx-auto rounded-xl shadow-lg"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 350px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== DOR / PROBLEMA ==========  */}
            <section className="py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight text-white font-[family-name:var(--font-montserrat)]">
                        SE ERRAR NA CUTILAGEM,<br />
                        <span className="text-[#C41E3A]">SUA UNHA VAI PARECER BARATA.</span>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                        Compre o <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Manual de Cutilagem Avançada</span>, se você quer
                    </h2>

                    <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 md:p-8">
                        <ul className="space-y-4">
                            <CheckItem>✅ Fazer uma cutilagem fundinha, sem dar bife e sem machucar a cliente</CheckItem>
                            <CheckItem>✅ Cobrar mais caro por um acabamento visivelmente superior</CheckItem>
                            <CheckItem>✅ Aprender a técnica do corte contínuo de uma vez por todas</CheckItem>
                            <CheckItem>✅ Ter confiança ao pegar o alicate, sem medo de errar</CheckItem>
                            <CheckItem>✅ Deixar a cutícula pronta para receber qualquer tipo de esmaltação</CheckItem>
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

                    {/* Grid de Capas dos Módulos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {/* Módulo 1 - Cutilagem com Alicate */}
                        <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <Image
                                src="/images/capa_mca_cutilagem_com_alicate.png"
                                alt="Cutilagem com Alicate"
                                width={300}
                                height={400}
                                className="w-full h-auto rounded-xl"
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>

                        {/* Módulo 2 - Cutilagem Combinada */}
                        <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <Image
                                src="/images/capa_mca_cutilagem_combinada.png"
                                alt="Cutilagem Combinada"
                                width={300}
                                height={400}
                                className="w-full h-auto rounded-xl"
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>

                        {/* Módulo 3 - Cutilagem com Cera */}
                        <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <Image
                                src="/images/capa_mca_cutiagem_com_cera.png"
                                alt="Cutilagem com Cera"
                                width={300}
                                height={400}
                                className="w-full h-auto rounded-xl"
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>

                        {/* Módulo 4 - Apostila (BÔNUS) */}
                        <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <div className="absolute top-2 right-2 z-10 bg-[#22C55E] text-white text-xs font-bold px-2 py-1 rounded">
                                BÔNUS
                            </div>
                            <Image
                                src="/images/capa_mca_apostila.png"
                                alt="Apostila - BÔNUS"
                                width={300}
                                height={400}
                                className="w-full h-auto rounded-xl"
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                    </div>


                </div>
            </section>

            {/* ========== FEEDBACKS DAS ALUNAS ========== */}
            <section className="py-12 px-4 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-white font-[family-name:var(--font-montserrat)]">
                        Veja o que as alunas estão <span className="text-[#22C55E]">falando:</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-10 font-[family-name:var(--font-poppins)]">
                        Feedbacks reais das nossas alunas no WhatsApp
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:border-[#22C55E]/30 transition-all duration-300 hover:shadow-[#22C55E]/10 hover:shadow-xl">
                            <Image
                                src="/images/feedback_alunas_MCA.PNG (1).PNG"
                                alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                width={400}
                                height={800}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:border-[#22C55E]/30 transition-all duration-300 hover:shadow-[#22C55E]/10 hover:shadow-xl">
                            <Image
                                src="/images/feedback_alunas_MCA.PNG (2).PNG"
                                alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                width={400}
                                height={800}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:border-[#22C55E]/30 transition-all duration-300 hover:shadow-[#22C55E]/10 hover:shadow-xl">
                            <Image
                                src="/images/feedback_alunas_MCA.PNG (3).PNG"
                                alt="Feedback de aluna - Conversa WhatsApp sobre o Manual de Cutilagem Avançada"
                                width={400}
                                height={800}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
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
                                O Manual de <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Cutilagem Avançada</span>
                            </h3>
                            <p className="text-white/90 font-medium text-sm uppercase tracking-wider">Oferta Especial de Lançamento</p>
                        </div>

                        <div className="p-6 md:p-8 text-center">
                            <h3 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-montserrat)]">Leve todo o conteúdo por um preço SIMBÓLICO:</h3>

                            {/* Preço */}
                            <div className="mb-6">
                                <p className="text-white text-sm mb-2 font-[family-name:var(--font-poppins)]">De: <span className="text-red-500 line-through">R$ 308,00</span></p>
                                <p className="text-white mb-4 font-[family-name:var(--font-poppins)]">Por apenas {PARCELAS} de:</p>
                                <div className="flex items-baseline justify-center gap-2 mb-2">
                                    <span className="text-2xl text-[#22C55E] font-[family-name:var(--font-montserrat)]">R$</span>
                                    <span className="text-6xl md:text-7xl font-black text-[#22C55E] font-[family-name:var(--font-montserrat)]">{PRECO_PARCELADO}</span>
                                </div>
                                <p className="text-gray-400 font-[family-name:var(--font-poppins)]">Ou R$ {PRECO_AVISTA} à vista</p>
                            </div>

                            <Suspense fallback={
                                <div className="block w-full text-center bg-[#22C55E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full uppercase tracking-wide font-[family-name:var(--font-montserrat)] mb-6">
                                    SIM, QUERO COMPRAR AGORA!
                                </div>
                            }>
                                <CTAButtonWithParams className="mb-6">
                                    SIM, QUERO COMPRAR AGORA!
                                </CTAButtonWithParams>
                            </Suspense>

                            {/* Garantia */}
                            <div className="flex items-center justify-center gap-3 text-white text-sm font-[family-name:var(--font-poppins)]">
                                <ShieldIcon />
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
                        Agora é com você: continuar ouvindo reclamações do tipo <span className="text-[#C41E3A]">&quot;ficou tortinha...&quot;</span>
                    </h2>
                    <p className="text-white text-lg mb-8 font-[family-name:var(--font-poppins)]">
                        Ou finalmente dominar a cutilagem e <strong className="text-[#22C55E]">entregar um trabalho digno de elogios</strong> toda vez que a cliente postar no Instagram.
                    </p>
                    <Suspense fallback={
                        <div className="block w-full text-center bg-[#22C55E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full uppercase tracking-wide font-[family-name:var(--font-montserrat)] max-w-md mx-auto">
                            SIM, QUERO COMPRAR AGORA!
                        </div>
                    }>
                        <CTAButtonWithParams className="max-w-md mx-auto">
                            SIM, QUERO COMPRAR AGORA!
                        </CTAButtonWithParams>
                    </Suspense>
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
                                loading="lazy"
                                sizes="(max-width: 768px) 192px, 224px"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 font-[family-name:var(--font-montserrat)]">Quem é Mariana Nails?</h3>
                            <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-lora)] mb-4">
                                Especialista em Nail Design com mais de <strong className="text-white">8 anos de experiência</strong>. Já formou mais de 500 alunas
                                que hoje faturam de R$ 3.000 a R$ 10.000 por mês trabalhando com unhas.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-poppins)]">
                                Conhecida por suas técnicas práticas e resultados rápidos, Mariana criou o Manual de Cutilagem Avançada para ajudar nail designers a dominarem a base de todo serviço de qualidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA FINAL ========== */}
            <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-[family-name:var(--font-montserrat)]">
                        O Manual de <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Cutilagem Avançada</span>
                    </h3>
                    <p className="text-white mb-6 text-lg">Essa oferta pode sair do ar a qualquer momento</p>
                    <Suspense fallback={
                        <div className="block w-full text-center bg-[#22C55E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full uppercase tracking-wide font-[family-name:var(--font-montserrat)] mb-4">
                            SIM, QUERO COMPRAR AGORA!
                        </div>
                    }>
                        <CTAButtonWithParams className="mb-4">
                            SIM, QUERO COMPRAR AGORA!
                        </CTAButtonWithParams>
                    </Suspense>
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
                    <a id="btn-whatsapp-mca" href="https://wa.me/5511944598264" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Suporte via WhatsApp</a>
                </div>
            </footer>
        </div>
    );
}
