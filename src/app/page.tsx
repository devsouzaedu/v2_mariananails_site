import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// ============================================
// METADADOS DE SEO
// ============================================
export const metadata: Metadata = {
  title: 'Mariana Nails Studio | Santana de Parnaíba - Alongamento, Manicure e Cursos',
  description: 'Visite o Mariana Nails Studio em Santana de Parnaíba. Alongamento premium de unhas (fibra e molde F1), manicure tradicional, spa dos pés e mãos com Mariana e Simone. Cursos presenciais VIP.',
  openGraph: {
    title: 'Mariana Nails Studio | Alongamento, Manicure e Cursos em Santana de Parnaíba',
    description: 'Espaço exclusivo Mariana Nails Studio. Atendimento com Mariana e Simone. Alongamentos premium, esmaltação em gel, spa dos pés e das mãos. Cursos presenciais VIP a partir de R$ 1.000,00.',
    type: 'website',
    url: 'https://mariananails.com.br/',
    locale: 'pt_BR',
  },
};

// Checkmark SVG para listas de especialidades
const GoldCheck = () => (
  <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-[#C41E3A]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto do Hero */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
                Novo Espaço em Santana de Parnaíba
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
                Mariana Nails <br />
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Studio</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Seja bem-vinda ao nosso estúdio exclusivo! Aqui, unimos técnica avançada, materiais premium e um ambiente acolhedor para transformar o cuidado com as suas unhas. Sob o comando de <strong className="text-white">Mariana</strong> e sua parceira <strong className="text-white">Simone</strong>, oferecemos o melhor em alongamento, nail art, manicure clássica e spas de tratamento.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="https://wa.me/5511944598264?text=Oi!%20Gostaria%20de%20agendar%20um%20atendimento%20no%20Mariana%20Nails%20Studio!%20Vim%20do%20site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-center py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
                >
                  Agende pelo WhatsApp
                </a>
                <Link 
                  href="/galeria" 
                  className="bg-transparent border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold text-center py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
                >
                  Ver Nosso Trabalho
                </Link>
              </div>
            </div>

            {/* Imagem do Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] md:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                {/* Efeito de brilho atrás da foto */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-[#000]/60 z-10"></div>
                <Image 
                  src="/images/mariana_png.png" 
                  alt="Mariana Nails Studio - Santana de Parnaíba" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="relative z-0"
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-4">
                  <p className="text-xs text-[#D4AF37] uppercase tracking-wider font-semibold mb-1">Espaço Profissional</p>
                  <p className="text-sm font-medium text-white">Mariana & Simone prontas para atender você.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== PROFISSIONAIS & ESPECIALIDADES ========== */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Profissionais & <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Especialidades</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              No Mariana Nails Studio, cada detalhe é planejado. Nosso atendimento é dividido por especialidades para garantir que você receba o melhor serviço técnico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card Mariana */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                    <Image 
                      src="/images/mariana_site.png" 
                      alt="Mariana Nails" 
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-white">Mariana</h3>
                    <p className="text-[#D4AF37] text-sm font-medium tracking-wide">Foco em Alongamentos & Estrutura</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Especialista com anos de experiência em técnicas modernas de alongamento. Seu foco principal é a construção de unhas resistentes, simétricas e decorações artísticas de alto nível.
                </p>

                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Alongamento em Fibra de Vidro:</strong> Naturalidade e resistência incomparáveis.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Alongamento em Molde F1 / Russo:</strong> Perfeição simétrica e rapidez na aplicação.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Nail Art:</strong> Decorações exclusivas, feitas de forma manual e personalizada.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Banho de Gel:</strong> Blindagem especial para unhas naturais crescerem fortes.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Esmaltação em Gel:</strong> Cor impecável com brilho duradouro por semanas.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Manutenção de Alongamento:</strong> Cuidados periódicos para manter a saúde e estrutura.</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://wa.me/5511944598264?text=Oi%20Mariana!%20Gostaria%20de%20agendar%20um%20alongamento%20ou%20manutencao%20com%20voce!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold py-3.5 px-6 rounded-full transition-all duration-300 text-sm font-[family-name:var(--font-montserrat)]"
              >
                Falar com Mariana
              </a>
            </div>

            {/* Card Simone */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C41E3A] flex items-center justify-center border-2 border-[#D4AF37]">
                    <span className="text-xl font-bold font-[family-name:var(--font-montserrat)] text-white">S</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-white">Simone</h3>
                    <p className="text-[#D4AF37] text-sm font-medium tracking-wide">Foco em Estética Tradicional & Spa</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Profissional focada no cuidado minucioso e saúde diária das mãos e pés. Especialista em técnicas de cutilagem precisa, esmaltação perfeita e tratamentos profundos de relaxamento e hidratação.
                </p>

                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Manicure Tradicional:</strong> Remoção de cutículas detalhada e esmaltação clássica de alto brilho.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Pedicure Tradicional:</strong> Higienização completa, remoção de peles e esmaltação duradoura nos pés.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Spa dos Pés:</strong> Tratamento relaxante com esfoliação, hidratação profunda e massagem para pés cansados.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Spa das Mãos:</strong> Nutrição celular intensiva para recuperar a elasticidade e maciez da pele das mãos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <GoldCheck />
                    <span><strong>Esmaltação em Gel:</strong> Aplicação sob cabine LED/UV para secagem instantânea e máxima duração.</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://wa.me/5511944598264?text=Oi!%20Gostaria%20de%20agendar%20manicure/pedicure%20ou%20spa%20com%20a%20Simone!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold py-3.5 px-6 rounded-full transition-all duration-300 text-sm font-[family-name:var(--font-montserrat)]"
              >
                Falar com Simone
              </a>
            </div>

          </div>

          {/* Aviso Importante sobre Podologia */}
          <div className="mt-12 bg-[#1a0f0f] border border-[#C41E3A]/30 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 text-sm font-[family-name:var(--font-poppins)]">
              ⚠️ <strong className="text-white uppercase tracking-wider text-xs mr-2">Atenção:</strong> 
              Focamos exclusivamente em procedimentos estéticos e de embelezamento de unhas (alongamentos, esmaltação comum/gel e tratamentos de hidratação). <span className="text-[#C41E3A] font-bold">Não realizamos procedimentos de podologia clínica</span> (como tratamento de micoses, unhas infeccionadas ou encravadas graves).
            </p>
          </div>

        </div>
      </section>

      {/* ========== COMODIDADES DO ESTÚDIO ========== */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              O espaço <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Mariana Nails Studio</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              Nosso espaço foi cuidadosamente planejado para que o seu momento de fazer as unhas seja também um momento de descanso e descontração. Conheça o que oferecemos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Comodidade 1 */}
            <div className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-3.08-3.071a8.5 8.5 0 016.14 0M7.3 10.95a11.5 11.5 0 019.4 0M5.6 7.64a14.5 14.5 0 0112.8 0"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-montserrat)]">Wi-Fi Liberado</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Fique conectada durante o seu atendimento com internet Wi-Fi rápida e estável.
              </p>
            </div>

            {/* Comodidade 2 */}
            <div className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-montserrat)]">Child Friendly</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Ambiente preparado e acolhedor caso você precise trazer o seu filho com segurança.
              </p>
            </div>

            {/* Comodidade 3 */}
            <div className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-montserrat)]">Banheiro no Local</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Privacidade e higiene com banheiro limpo e equipado disponível para nossas clientes.
              </p>
            </div>

            {/* Comodidade 4 */}
            <div className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-montserrat)]">Cantinho do Café</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Café quentinho feito na hora e biscoitos selecionados servidos como cortesia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========== CURSOS E FORMAÇÃO ========== */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              <div>
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
                  VIP & Presencial
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)]">
                  Formação <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Nail Designer VIP</span>
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  Inicie uma profissão altamente lucrativa ou aperfeiçoe suas técnicas de alongamento com a mentoria exclusiva e presencial da Mariana. Um treinamento 100% VIP no estúdio, adaptado ao seu ritmo.
                </p>

                <div className="mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Preço da Formação</p>
                  <p className="text-2xl md:text-3xl font-black text-[#D4AF37] font-[family-name:var(--font-montserrat)]">
                    A partir de R$ 1.000,00
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Materiais para uso no curso inclusos + Certificado Profissional</p>
                </div>

                <a 
                  href="https://wa.me/5511944598264?text=Oi%20Mariana!%20Gostaria%20de%20receber%20informacoes%20sobre%20a%20Formacao%20Presencial%20VIP%20de%20Nail%20Designer!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-center py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-xs md:text-sm font-[family-name:var(--font-montserrat)]"
                >
                  Garantir minha vaga VIP
                </a>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-800">
                <Image 
                  src="/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (33).webp" 
                  alt="Curso Presencial de Nail Designer com Mariana Nails" 
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 450px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALERIA DE TRABALHOS ========== */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Galeria de <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Resultados</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              Trabalhos reais produzidos no nosso estúdio. Unhas perfeitas, resistentes, simétricas e com excelente acabamento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/unhas_barueri_nail_art_a (1).webp',
              '/images/unhas_barueri_nail_art_a (3).webp',
              '/images/unhas_barueri_nail_art_a (4).webp',
              '/images/unhas_barueri_nail_art_a (5).webp',
              '/images/unhas_barueri_nail_art_a (6).webp',
              '/images/unhas_barueri_nail_art_a (7).webp',
              '/images/unhas_barueri_nail_art_a (12).webp',
              '/images/unhas_barueri_nail_art_a (13).webp',
            ].map((imgSrc, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 shadow-md group">
                <Image 
                  src={imgSrc} 
                  alt={`Trabalho feito no Mariana Nails Studio ${index + 1}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">Ver Trabalho</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/galeria" 
              className="inline-block bg-transparent border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 text-sm font-[family-name:var(--font-montserrat)]"
            >
              Acessar Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* ========== LOCALIZAÇÃO E CONTATO ========== */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111] border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Infos de Funcionamento e Endereço */}
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
                Venha nos <br />
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Visitar</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wide mb-1">Nosso Endereço</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Rua Veneza, 468, Jardim Isaura<br />
                      Santana de Parnaíba - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wide mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Segunda a Sábado: 9h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wide mb-1">WhatsApp Studio</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      (11) 94459-8264
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://wa.me/5511944598264?text=Oi!%20Gostaria%20de%20tirar%20uma%20duvida%20ou%20agendar%20um%20horario%20no%20Studio!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-center py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 shadow-lg shadow-[#22C55E]/20 text-xs md:text-sm font-[family-name:var(--font-montserrat)]"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Mapa Ilustrado / Card Visual */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
              <div className="relative z-10 text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-montserrat)] text-white">Como chegar?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                  Estamos localizados no bairro Jardim Isaura, em Santana de Parnaíba. Clique no botão abaixo para abrir a localização no Google Maps e traçar a rota diretamente do seu celular.
                </p>
                <a 
                  href="https://maps.google.com/?q=Rua+Veneza,+468,+Jardim+Isaura,+Santana+de+Parnaiba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-xs md:text-sm font-[family-name:var(--font-montserrat)]"
                >
                  Traçar Rota no Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}