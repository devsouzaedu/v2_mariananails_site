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

            <div className="min-h-screen bg-gradient-to-b from-[#E8E0F0] via-[#D4E8E4] to-[#C8E0D8] font-[family-name:var(--font-poppins)]">

                {/* ========== CONTEÚDO PRINCIPAL ========== */}
                <div className="max-w-md mx-auto px-6 py-10">

                    {/* Título Principal */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#9B4D96] mb-2 font-[family-name:var(--font-montserrat)]">
                            Parabéns, meu amor!
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Leia o que escrevi aqui pra você com muita atenção...
                        </p>
                    </div>

                    {/* Imagem do Produto */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-40 h-40">
                            <Image
                                src="/images/card_imagem_mariana1.png"
                                alt="Mariana Nails"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Mensagem Selecionada */}
                    <div className="text-center mb-8">
                        <h2 className="text-xl text-gray-700 mb-2 font-[family-name:var(--font-poppins)]">
                            <span className="text-[#6B9B8A] font-semibold">Você foi selecionada</span> para<br />
                            ler o meu{' '}
                            <span className="font-[family-name:var(--font-lora)] italic text-2xl md:text-3xl text-[#9B4D96] block mt-1">
                                diário de uma nail designer
                            </span>
                        </h2>
                    </div>

                    {/* Descrição */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Um lugar onde vou compartilhar semanalmente um conteúdo gratuito para você aplicar e avançar na sua carreira.
                        </p>
                    </div>

                    {/* Divisor */}
                    <div className="border-t border-gray-300 my-8"></div>

                    {/* Seção de Benefícios */}
                    <div className="mb-8">
                        <h3 className="text-center text-gray-700 font-semibold mb-6 font-[family-name:var(--font-montserrat)]">
                            Você vai receber dicas de aperfeiçoamento de:
                        </h3>

                        <div className="space-y-4">
                            {/* Item 1 */}
                            <div className="flex items-start gap-3">
                                <span className="text-xl">💅</span>
                                <p className="text-gray-600 text-sm">
                                    <strong className="text-gray-700">Técnicas de alongamento, acabamento e decoração</strong>
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✨</span>
                                <p className="text-gray-600 text-sm">
                                    <strong className="text-gray-700">Posicionamento, Redes Sociais e Captação de Clientes</strong>
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🥰</span>
                                <p className="text-gray-600 text-sm">
                                    <strong className="text-gray-700">Atendimento, Fidelização de Clientes e Gestão Financeira</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Box Destaque */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-8 flex items-center gap-4 shadow-sm">
                        <div className="w-10 h-10 bg-[#6B9B8A] rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="fa-solid fa-check text-white"></i>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">
                            Tudo sem pagar um centavo por isso!
                        </p>
                    </div>

                    {/* Card CTA Final */}
                    <div className="bg-gradient-to-br from-[#2D1B4E] to-[#1A1030] rounded-3xl p-6 text-center shadow-xl">
                        <p className="text-white text-lg mb-4 font-[family-name:var(--font-montserrat)]">
                            Quer aproveitar essa oportunidade de ler meu diário de{' '}
                            <span className="text-[#9B4D96] font-semibold">Nail Designer</span>?
                        </p>

                        <a
                            href={WHATSAPP_GROUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] uppercase text-sm tracking-wide shadow-lg shadow-[#25D366]/30"
                        >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            CLIQUE AQUI PARA ENTRAR NO GRUPO!
                        </a>
                    </div>

                    {/* Footer pequeno */}
                    <div className="text-center mt-8 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} Mariana Nails</p>
                    </div>

                </div>
            </div>
        </>
    );
}
