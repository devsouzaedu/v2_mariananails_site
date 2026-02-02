"use client";
import React from 'react';
import Head from 'next/head';

// ============================================
// CONFIGURAÇÕES
// ============================================
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/C4OEbYEh5e3ENVB70cu7v6";

// ============================================
// COMPONENTES
// ============================================

// Botão CTA Verde para WhatsApp
const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <a
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
      inline-flex items-center justify-center gap-3
      bg-[#25D366] hover:bg-[#128C7E]
      text-white font-bold text-lg md:text-xl
      py-4 px-8 rounded-full
      shadow-lg shadow-[#25D366]/30
      transition-all duration-300 transform hover:scale-[1.02]
      uppercase tracking-wide
      font-[family-name:var(--font-montserrat)]
      ${className}
    `}
    >
        <i className="fa-brands fa-whatsapp text-2xl"></i>
        {children}
    </a>
);

// Item de benefício
const BenefitItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="flex items-start gap-4 p-4 bg-[#111] border border-gray-800 rounded-xl">
        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/5 rounded-full flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
        </div>
        <div>
            <h3 className="text-white font-bold mb-1 font-[family-name:var(--font-montserrat)]">{title}</h3>
            <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">{description}</p>
        </div>
    </div>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function ObrigadoCutilagemPage() {
    return (
        <>
            {/* Font Awesome CDN */}
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </Head>

            <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)]">

                {/* ========== HERO SECTION ========== */}
                <section className="relative px-4 py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center">

                        {/* Ícone de Sucesso */}
                        <div className="mb-8">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center shadow-lg shadow-[#22C55E]/30 animate-pulse">
                                <i className="fa-solid fa-check text-4xl text-white"></i>
                            </div>
                        </div>

                        {/* Título Principal */}
                        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight font-[family-name:var(--font-montserrat)]">
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Parabéns</span>, meu amor!
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-[family-name:var(--font-poppins)]">
                            Sua compra foi confirmada com sucesso! 🎉
                        </p>

                        {/* Divisor */}
                        <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] mx-auto mb-8 rounded-full"></div>

                        {/* Mensagem Principal */}
                        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 mb-10 text-left">
                            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 font-[family-name:var(--font-lora)] italic">
                                "Leia o que escrevi aqui pra você com muita atenção..."
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Você foi selecionada para ler o meu <strong className="text-[#22C55E]">Diário de uma Nail Designer</strong> —
                                um lugar onde vou compartilhar <strong className="text-white">semanalmente um conteúdo gratuito</strong> para você aplicar e avançar na sua carreira.
                            </p>

                            <h2 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
                                Você vai receber dicas de aperfeiçoamento de:
                            </h2>

                            <div className="space-y-4 mb-6">
                                <BenefitItem
                                    icon="💅"
                                    title="Técnicas Avançadas"
                                    description="Alongamento, acabamento e decoração que vão impressionar suas clientes"
                                />
                                <BenefitItem
                                    icon="✨"
                                    title="Posicionamento & Redes Sociais"
                                    description="Captação de clientes e como se destacar no Instagram"
                                />
                                <BenefitItem
                                    icon="🥰"
                                    title="Atendimento & Gestão"
                                    description="Fidelização de clientes e gestão financeira do seu negócio"
                                />
                            </div>

                            <div className="bg-gradient-to-r from-[#22C55E]/20 to-transparent border-l-4 border-[#22C55E] p-4 rounded-r-xl">
                                <p className="text-white font-semibold font-[family-name:var(--font-montserrat)]">
                                    <i className="fa-solid fa-gift text-[#22C55E] mr-2"></i>
                                    Tudo sem pagar um centavo por isso!
                                </p>
                            </div>
                        </div>

                        {/* Pergunta CTA */}
                        <p className="text-xl text-white mb-6 font-[family-name:var(--font-montserrat)]">
                            Quer aproveitar essa oportunidade de ler meu<br />
                            <span className="text-[#22C55E] font-bold">Diário de Nail Designer</span>?
                        </p>

                        {/* Botão CTA */}
                        <CTAButton className="mb-6">
                            CLIQUE AQUI PARA ENTRAR NO GRUPO!
                        </CTAButton>

                        <p className="text-sm text-gray-500">
                            <i className="fa-solid fa-lock mr-2"></i>
                            Grupo exclusivo e gratuito no WhatsApp
                        </p>

                    </div>
                </section>

                {/* ========== SEÇÃO EXTRA: PRÓXIMOS PASSOS ========== */}
                <section className="py-12 px-4 bg-[#111]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8 text-white font-[family-name:var(--font-montserrat)]">
                            <i className="fa-solid fa-arrow-right text-[#22C55E] mr-2"></i>
                            Próximos Passos
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 text-center">
                                <div className="w-12 h-12 mx-auto bg-[#22C55E] rounded-full flex items-center justify-center mb-3 text-white font-bold font-[family-name:var(--font-montserrat)]">
                                    1
                                </div>
                                <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-montserrat)]">Acesse seu E-mail</h3>
                                <p className="text-gray-400 text-sm">Você receberá o acesso ao material no e-mail cadastrado</p>
                            </div>

                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 text-center">
                                <div className="w-12 h-12 mx-auto bg-[#22C55E] rounded-full flex items-center justify-center mb-3 text-white font-bold font-[family-name:var(--font-montserrat)]">
                                    2
                                </div>
                                <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-montserrat)]">Entre no Grupo</h3>
                                <p className="text-gray-400 text-sm">Clique no botão acima e participe do grupo exclusivo</p>
                            </div>

                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 text-center">
                                <div className="w-12 h-12 mx-auto bg-[#22C55E] rounded-full flex items-center justify-center mb-3 text-white font-bold font-[family-name:var(--font-montserrat)]">
                                    3
                                </div>
                                <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-montserrat)]">Aplique o Conteúdo</h3>
                                <p className="text-gray-400 text-sm">Coloque em prática e veja sua carreira decolar!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINAL ========== */}
                <section className="py-12 px-4 bg-[#0a0a0a]">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-gray-400 mb-6 font-[family-name:var(--font-poppins)]">
                            Não perca essa oportunidade única!
                        </p>
                        <CTAButton>
                            ENTRAR NO GRUPO AGORA
                        </CTAButton>
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
        </>
    );
}
