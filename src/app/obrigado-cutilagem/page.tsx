"use client";
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

// ============================================
// CONFIGURAÇÕES
// ============================================
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/C4OEbYEh5e3ENVB70cu7v6";

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

                    {/* Card CTA Final */}
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
        </>
    );
}
