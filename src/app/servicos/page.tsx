import Image from 'next/image'
import { Metadata } from 'next'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { whatsappLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Serviços | Mariana Nails Studio - Santana de Parnaíba',
  description: 'Alongamento em fibra de vidro e molde F1, nail art, banho de gel, esmaltação em gel, manicure, pedicure e spa dos pés e mãos no Mariana Nails Studio em Santana de Parnaíba.',
}

const servicos = [
  {
    titulo: 'Alongamento em Fibra de Vidro',
    descricao: 'Unhas longas, leves e com aparência natural. A fibra garante resistência sem pesar, ideal para quem quer naturalidade no dia a dia.',
    imagem: '/images/unhas_mariananails_barueri (1).webp',
    profissional: 'Mariana',
  },
  {
    titulo: 'Alongamento em Molde F1 / Russo',
    descricao: 'Construção simétrica e precisa com moldes, curvatura perfeita e aplicação mais rápida. Resultado impecável e duradouro.',
    imagem: '/images/unhas_mariananails_barueri (5).webp',
    profissional: 'Mariana',
  },
  {
    titulo: 'Nail Art Personalizada',
    descricao: 'Decorações exclusivas feitas à mão: do detalhe minimalista à arte elaborada, criadas de acordo com o seu estilo.',
    imagem: '/images/unhas_barueri_nail_art_a (8).webp',
    profissional: 'Mariana',
  },
  {
    titulo: 'Banho de Gel',
    descricao: 'Blindagem especial sobre a unha natural para que ela cresça forte, protegida e com brilho por semanas.',
    imagem: '/images/unhas_mariananails_barueri (2).webp',
    profissional: 'Mariana',
  },
  {
    titulo: 'Esmaltação em Gel',
    descricao: 'Cor impecável, secagem instantânea na cabine LED/UV e brilho que dura semanas sem descascar.',
    imagem: '/images/unhas_mariananails_barueri (3).webp',
    profissional: 'Mariana & Simone',
  },
  {
    titulo: 'Manutenção de Alongamento',
    descricao: 'Cuidados periódicos para manter a saúde da unha natural, a estrutura e o acabamento do seu alongamento.',
    imagem: '/images/unhas_barueri_nail_art_a (15).webp',
    profissional: 'Mariana',
  },
  {
    titulo: 'Manicure & Pedicure Tradicional',
    descricao: 'Cutilagem detalhada, higienização completa e esmaltação clássica de alto brilho nas mãos e nos pés.',
    imagem: '/images/unhas_mariananails_barueri.webp',
    profissional: 'Simone',
  },
  {
    titulo: 'Spa dos Pés & das Mãos',
    descricao: 'Esfoliação, hidratação profunda e massagem relaxante para recuperar a maciez e o bem-estar de mãos e pés.',
    imagem: '/images/unhas_mariananails_barueri (4).webp',
    profissional: 'Simone',
  },
]

const diferenciais = [
  {
    titulo: 'Materiais Premium',
    texto: 'Trabalhamos apenas com produtos de marcas reconhecidas e aprovados pela ANVISA.',
    icone: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    titulo: 'Atendimento Personalizado',
    texto: 'Cada cliente recebe um atendimento exclusivo, pensado no seu estilo e na saúde das suas unhas.',
    icone: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    titulo: 'Profissionais Especialistas',
    texto: 'Mariana e Simone dividem o atendimento por especialidade para entregar o melhor resultado técnico.',
    icone: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-[#C41E3A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
            Mariana Nails Studio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
            Nossos <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Serviços</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Técnica avançada, materiais premium e um ambiente acolhedor. Escolha o seu serviço e fale com a gente no WhatsApp para consultar valores e horários disponíveis.
          </p>
          <a
            href={whatsappLink('Oi! Gostaria de saber os valores dos serviços do Mariana Nails Studio! Vim do site')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
          >
            <WhatsAppIcon />
            Consultar valores no WhatsApp
          </a>
        </div>
      </section>

      {/* ========== LISTA DE SERVIÇOS ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col shadow-xl"
            >
              <div className="relative h-60">
                <Image
                  src={servico.imagem}
                  alt={`${servico.titulo} - Mariana Nails Studio`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-3 py-1 text-xs text-[#D4AF37] font-semibold tracking-wide">
                  com {servico.profissional}
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">{servico.titulo}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{servico.descricao}</p>
                <a
                  href={whatsappLink(`Oi! Gostaria de saber o valor e agendar: ${servico.titulo}. Vim do site`)}
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

        {/* Aviso sobre Podologia */}
        <div className="mt-12 bg-[#1a0f0f] border border-[#C41E3A]/30 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-sm">
            ⚠️ <strong className="text-white uppercase tracking-wider text-xs mr-2">Atenção:</strong>
            Focamos exclusivamente em procedimentos estéticos. <span className="text-[#C41E3A] font-bold">Não realizamos procedimentos de podologia clínica</span> (como tratamento de micoses, unhas infeccionadas ou encravadas graves).
          </p>
        </div>
      </section>

      {/* ========== DIFERENCIAIS ========== */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Nossos <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Diferenciais</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              O que faz o nosso atendimento ser único e especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="bg-[#0c0c0c] border border-gray-800 rounded-2xl p-8 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 text-center flex flex-col items-center">
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

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Pronta para <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">agendar</span>?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Fale diretamente com a Mariana pelo WhatsApp: ela te passa os valores atualizados e os horários disponíveis.
          </p>
          <a
            href={whatsappLink('Oi Mariana! Gostaria de saber os valores e agendar um horario! Vim do site')}
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
