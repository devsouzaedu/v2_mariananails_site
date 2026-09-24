import Image from 'next/image'
import { Metadata } from 'next'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { whatsappLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Especializações em Nail Design | Mariana Nails',
  description: 'Especializações em Nail Art, Nail Design, Alongamento em Fibra de Vidro e Molde F1 / Russo com a Mariana Nails. Fale pelo WhatsApp para consultar valores e disponibilidade.',
}

const especializacoes = [
  {
    titulo: 'Alongamento em Fibra Especialista',
    descricao: 'Domine o alongamento em fibra de vidro com foco em durabilidade, leveza e unhas indistinguíveis das naturais.',
    imagem: '/images/unhas_mariananails_barueri (1).webp',
    conteudo: [
      'Análise avançada da unha natural',
      'Preparação para máxima aderência',
      'Aplicação de fibra com precisão',
      'Modelagem para diferentes formatos',
      'Refile e acabamento profissional',
      'Manutenção e remoção sem danos',
    ],
  },
  {
    titulo: 'Alongamento em Molde F1 / Russo',
    descricao: 'Construção arquitetônica da unha com moldes: curvatura perfeita, simetria e rapidez na aplicação.',
    imagem: '/images/unhas_mariananails_barueri (5).webp',
    conteudo: [
      'Fundamentos do molde F1 e Russo',
      'Preparação diferenciada da unha natural',
      'Construção da estrutura e apex',
      'Criação de curvaturas perfeitas',
      'Acabamento de alto padrão',
      'Adaptação para diferentes tipos de unha',
    ],
  },
  {
    titulo: 'Nail Art Avançada',
    descricao: 'Transforme as unhas em verdadeiras telas com técnicas de pintura, degradê e elementos decorativos.',
    imagem: '/images/unhas_barueri_nail_art_a (8).webp',
    conteudo: [
      'Pintura à mão livre avançada',
      'Degradês e efeitos especiais',
      'Aplicação de elementos decorativos',
      'Designs temáticos e sazonais',
      'Marmorizado e aquarela',
      'Criação de portfólio profissional',
    ],
  },
  {
    titulo: 'Nail Design Profissional',
    descricao: 'Planejamento estético completo: formato, comprimento, cor e decoração pensados para cada cliente.',
    imagem: '/images/unhas_barueri_nail_art_a (14).webp',
    conteudo: [
      'Princípios de design aplicados às unhas',
      'Teoria da cor para nail design',
      'Análise de formato de unhas e mãos',
      'Personalização para cada cliente',
      'Fotografia para portfólio',
      'Marketing para nail designers',
    ],
  },
]

const beneficios = [
  {
    titulo: 'Valorização Profissional',
    texto: 'Profissionais especializadas cobram mais pelos serviços exclusivos que oferecem.',
    icone: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    titulo: 'Clientela Diferenciada',
    texto: 'Especialistas atraem clientes que buscam qualidade e exclusividade.',
    icone: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    titulo: 'Reconhecimento',
    texto: 'Torne-se referência em uma técnica e destaque-se no mercado de nail design.',
    icone: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
]

const faq = [
  {
    pergunta: 'Preciso ter experiência para fazer uma especialização?',
    resposta: 'As especializações são indicadas para quem já tem noções básicas de manicure ou alongamento. Se você está começando do zero, fale com a Mariana no WhatsApp que ela te indica o melhor caminho.',
  },
  {
    pergunta: 'Qual é o valor das especializações?',
    resposta: 'Os valores e formas de pagamento são passados diretamente pela Mariana no WhatsApp, de acordo com a especialização escolhida.',
  },
  {
    pergunta: 'Recebo certificado?',
    resposta: 'Sim. Ao concluir a especialização você recebe o certificado Mariana Nails para comprovar sua qualificação profissional.',
  },
  {
    pergunta: 'Tenho suporte depois do curso?',
    resposta: 'Sim. A Mariana acompanha as alunas e tira dúvidas após a conclusão. Os detalhes do suporte de cada especialização você confere no WhatsApp.',
  },
]

export default function EspecializacaoCursosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-[#C41E3A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
            Para Nail Designers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
            Especializações em <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Nail Design</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Eleve sua carreira a outro nível dominando as técnicas mais procuradas do mercado com a Mariana Nails.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappLink('Oi Mariana! Gostaria de saber mais sobre as especializacoes em Nail Design! Vim do site')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
            >
              <WhatsAppIcon />
              Falar com a Mariana
            </a>
            <a
              href="#especializacoes"
              className="bg-transparent border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold text-center py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
            >
              Ver Especializações
            </a>
          </div>
        </div>
      </section>

      {/* ========== POR QUE SE ESPECIALIZAR ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Por que se <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Especializar</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              O mercado de nail design está cada vez mais exigente. Quem domina uma técnica se destaca e mantém a agenda cheia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((item) => (
              <div key={item.titulo} className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icone}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ESPECIALIZAÇÕES ========== */}
      <section id="especializacoes" className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Nossas <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Especializações</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              Escolha a técnica que você quer dominar e fale com a Mariana para consultar valores e disponibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {especializacoes.map((curso) => (
              <div key={curso.titulo} className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col shadow-xl">
                <div className="relative h-56">
                  <Image
                    src={curso.imagem}
                    alt={`${curso.titulo} - Mariana Nails`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">{curso.titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{curso.descricao}</p>
                  <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold mb-3">O que você vai dominar</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 flex-grow">
                    {curso.conteudo.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/90 text-sm">
                        <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Oi Mariana! Gostaria de saber o valor da especializacao: ${curso.titulo}. Vim do site`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold py-3.5 px-6 rounded-full transition-all duration-300 text-sm font-[family-name:var(--font-montserrat)]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Consultar valor no WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOBRE A MARIANA ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-3xl p-6 md:p-10">
            <div className="w-48 md:w-56 flex-shrink-0 relative">
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
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-3 font-[family-name:var(--font-montserrat)]">Quem é Mariana Nails?</h2>
              <p className="text-gray-300 leading-relaxed text-lg font-[family-name:var(--font-lora)] mb-4">
                Instrutora Master e autoridade em <strong className="text-white">Nail Design</strong>, alongamento na fibra de vidro, molde F1, Molde Russo e Molde Dual Frame.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Com mais de <strong className="text-white">8 anos de experiência</strong>, já formou mais de 500 alunas que hoje faturam de R$ 3.000 a R$ 10.000 por mês.
              </p>
              <a
                href="https://www.instagram.com/mariananailsz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#D4AF37] hover:text-[#F4E4BC] transition-colors text-sm font-semibold"
              >
                @mariananailsz no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-10 text-center font-[family-name:var(--font-montserrat)]">
            Perguntas <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.pergunta} className="group bg-[#111] border border-gray-800 rounded-2xl p-5 open:border-[#D4AF37]/40 transition-colors">
                <summary className="flex justify-between items-center gap-4 cursor-pointer list-none text-white font-semibold font-[family-name:var(--font-montserrat)]">
                  {item.pergunta}
                  <span className="text-[#D4AF37] text-xl transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-400 text-sm leading-relaxed mt-3">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Pronta para <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">se especializar</span>?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Chame a Mariana no WhatsApp para consultar valores, formas de pagamento e disponibilidade.
          </p>
          <a
            href={whatsappLink('Oi Mariana! Quero me especializar em Nail Design! Pode me passar os valores? Vim do site')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
          >
            <WhatsAppIcon />
            Falar com a Mariana
          </a>
        </div>
      </section>
    </div>
  )
}
