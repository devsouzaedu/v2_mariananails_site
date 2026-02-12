"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// ============================================
// COMPONENTES
// ============================================

interface LinkCardProps {
  imageSrc: string;
  href: string;
  title: string;
  subtitle: string;
  delay?: number;
}

const LinkCard = ({ imageSrc, href, title, subtitle, delay = 0 }: LinkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="block group"
      style={{ animationDelay: `${delay}ms`, animation: 'fadeInUp 0.6s ease-out both' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-[#1a1a1a] to-[#111]
        border border-gray-800 hover:border-[#D4AF37]/50
        transition-all duration-500 ease-out
        ${isHovered ? 'transform -translate-y-2 scale-[1.02] shadow-2xl shadow-[#D4AF37]/10' : 'shadow-lg'}
      `}>
        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={150}
            className={`
              w-full h-auto block
              transition-all duration-500
              ${isHovered ? 'scale-105 brightness-110' : ''}
            `}
            style={{ filter: isHovered ? 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.18))' : 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.12))' }}
            priority
          />
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg font-[family-name:var(--font-montserrat)] mb-1">{title}</h3>
          <p className="text-gray-400 text-sm font-[family-name:var(--font-poppins)]">{subtitle}</p>
          <div className={`
            flex items-center gap-2 mt-3 text-[#D4AF37] text-sm font-semibold
            transition-all duration-300
            ${isHovered ? 'translate-x-1' : ''}
          `}>
            <span>Saiba mais</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Check Item
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-white/90 font-[family-name:var(--font-poppins)]">
    <i className="fa-solid fa-check text-[#22C55E] text-lg mt-0.5"></i>
    <span>{children}</span>
  </li>
);

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function CursosPage() {
  const cursos = [
    {
      imageSrc: '/images/mca_topo_link1.png',
      href: '/cutilagem',
      title: 'Manual de Cutilagem Avançada',
      subtitle: 'Curso Digital • Acesso Imediato',
    },
    {
      imageSrc: '/images/smn_topo_link1.png',
      href: 'https://hub.la/r/St5rvAgOZLJUs03WOEzA',
      title: 'Sistema Mariana Nails',
      subtitle: 'Curso Digital Completo',
    },
    {
      imageSrc: '/images/IMPS_topo_link1.png',
      href: '/imersao',
      title: 'Imersão Presencial Nail Designer',
      subtitle: 'Curso Presencial em Barueri • 2 Dias',
    },
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] relative overflow-x-hidden">

        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-[#333] to-[#1a1a1a] -top-[100px] -right-[100px]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] bottom-[20%] -left-[50px]"></div>
          <div className="absolute w-[250px] h-[250px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-[#3d3d3d] to-[#252525] -bottom-[50px] right-[20%]"></div>
        </div>

        {/* ========== HERO SECTION ========== */}
        <section className="relative z-10 px-4 pt-8 pb-4 md:pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Hero Image */}
              <div className="relative mb-6 w-full max-w-[320px] md:max-w-[380px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/20 via-[#D4AF37]/15 to-[#C41E3A]/20 blur-3xl rounded-full scale-110"></div>
                <Image
                  src="/images/mariana_link_hero_top.png"
                  alt="Mariana Nails"
                  width={400}
                  height={500}
                  className="relative z-10 w-full h-auto object-cover"
                  priority
                  style={{ animation: 'fadeInUp 0.8s ease-out' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3 font-[family-name:var(--font-montserrat)]"
                style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Mariana Nails</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg tracking-wider mb-2 max-w-[350px]"
                style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
                Transformando sonhos em realidade através da arte em unhas
              </p>
            </div>
          </div>
        </section>

        {/* ========== CURSOS / LINKS SECTION ========== */}
        <section className="relative z-10 px-4 py-8 md:py-12">
          <div className="max-w-[500px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white font-[family-name:var(--font-montserrat)]">
              Meus <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Cursos</span>
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">Clique para saber mais</p>

            <div className="flex flex-col gap-5">
              {cursos.map((curso, index) => (
                <LinkCard
                  key={index}
                  imageSrc={curso.imageSrc}
                  href={curso.href}
                  title={curso.title}
                  subtitle={curso.subtitle}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== DIFERENCIAIS ========== */}
        <section className="relative z-10 py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white font-[family-name:var(--font-montserrat)]">
              Por que aprender com <span className="text-[#D4AF37]">Mariana Nails</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">+500 Alunas Formadas</h3>
                <p className="text-gray-400 text-sm">Centenas de profissionais transformaram suas carreiras com nossos cursos</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">Fature até R$10.000/mês</h3>
                <p className="text-gray-400 text-sm">Nossas alunas faturam de R$3.000 a R$10.000 trabalhando com unhas</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">Certificado Reconhecido</h3>
                <p className="text-gray-400 text-sm">Certificado válido em todo o Brasil para comprovar sua qualificação</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SOBRE A EXPERT ========== */}
        <section className="relative z-10 py-12 px-4 bg-[#111]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-10">
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
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-3 font-[family-name:var(--font-montserrat)]">Quem é Mariana Nails?</h3>
                <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-lora)] mb-4">
                  Instrutora Master e autoridade em <strong className="text-white">Nail Design</strong>, alongamento na fibra de vidro, molde F1, Molde Ruso e Molde Dual Frame.
                </p>
                <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-poppins)]">
                  Com mais de <strong className="text-white">8 anos de experiência</strong>, já formou mais de 500 alunas que hoje faturam de R$ 3.000 a R$ 10.000 por mês. É a maior vendedora de instrução de nail designer no digital.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.instagram.com/mariananailsz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4E4BC] transition-colors text-sm font-semibold"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @mariananailsz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="relative z-10 py-16 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-[family-name:var(--font-montserrat)]">
              Pronta para <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">transformar sua carreira</span>?
            </h3>
            <p className="text-white/70 mb-6 text-lg">Escolha o curso ideal para você e comece hoje mesmo</p>
            <a
              href="https://wa.me/5511944598264?text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20da%20Mariana%20Nails"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide font-[family-name:var(--font-montserrat)] w-full max-w-md mx-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com Mariana
            </a>
            <p className="text-xs text-gray-500 mt-3">Tire suas dúvidas diretamente pelo WhatsApp</p>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="relative z-10 py-8 px-4 bg-black text-center border-t border-gray-900">
          <div className="flex justify-center mb-4">
            <a href="https://www.instagram.com/mariananailsz/" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            © {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-700">
            <a href="#" className="hover:text-gray-400">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
            <span>•</span>
            <a href="https://wa.me/5511944598264" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Suporte via WhatsApp</a>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}