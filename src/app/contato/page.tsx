import { Metadata } from 'next'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { whatsappLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contato | Mariana Nails Studio',
  description: 'Fale com a Mariana Nails pelo WhatsApp para agendar um horário, consultar valores ou tirar dúvidas. Rua Veneza, 468 - Jardim Isaura, Santana de Parnaíba.',
}

const infos = [
  {
    titulo: 'Nosso Endereço',
    linhas: ['Rua Veneza, 468, Jardim Isaura', 'Santana de Parnaíba - SP'],
    icone: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'],
  },
  {
    titulo: 'Horário de Atendimento',
    linhas: ['Segunda a Sábado: 9h às 18h', 'Atendimento com hora marcada'],
    icone: ['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'],
  },
  {
    titulo: 'WhatsApp Studio',
    linhas: ['(11) 94459-8264'],
    icone: ['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'],
  },
  {
    titulo: 'E-mail',
    linhas: ['contato@mariananails.com.br'],
    icone: ['M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
  },
]

const atalhos = [
  { rotulo: 'Agendar atendimento', mensagem: 'Oi! Gostaria de agendar um atendimento no Mariana Nails Studio! Vim do site' },
  { rotulo: 'Consultar valores', mensagem: 'Oi! Gostaria de saber os valores dos servicos do Mariana Nails Studio! Vim do site' },
  { rotulo: 'Informações sobre cursos', mensagem: 'Oi Mariana! Gostaria de receber informacoes sobre os cursos! Vim do site' },
]

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-[#C41E3A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
            Entre em <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            O jeito mais rápido de falar com a gente é pelo WhatsApp. Agende seu horário, consulte valores ou tire qualquer dúvida sobre serviços e cursos.
          </p>
        </div>
      </section>

      {/* ========== INFOS + WHATSAPP ========== */}
      <section className="py-16 md:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* Informações */}
          <div className="space-y-6">
            {infos.map((info) => (
              <div key={info.titulo} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {info.icone.map((d) => (
                      <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path>
                    ))}
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-white font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wide mb-1">{info.titulo}</h2>
                  {info.linhas.map((linha) => (
                    <p key={linha} className="text-gray-300 text-sm leading-relaxed">{linha}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=Rua+Veneza,+468,+Jardim+Isaura,+Santana+de+Parnaiba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold py-3 px-6 rounded-full transition-all duration-300 text-xs md:text-sm font-[family-name:var(--font-montserrat)]"
              >
                Traçar Rota no Google Maps
              </a>
              <a
                href="https://www.instagram.com/mariananailsz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-xs md:text-sm font-[family-name:var(--font-montserrat)]"
              >
                @mariananailsz
              </a>
            </div>
          </div>

          {/* Card WhatsApp */}
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] mb-6">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">Fale com a Mariana</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Escolha o assunto e a conversa já abre com a mensagem pronta no seu WhatsApp.
              </p>
              <div className="space-y-3">
                {atalhos.map((atalho) => (
                  <a
                    key={atalho.rotulo}
                    href={whatsappLink(atalho.mensagem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/50 rounded-2xl px-5 py-4 text-white hover:text-[#D4AF37] transition-all duration-300 text-sm font-semibold"
                  >
                    {atalho.rotulo}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
              <a
                href={whatsappLink('Oi Mariana! Vim do site e gostaria de falar com voce!')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm font-[family-name:var(--font-montserrat)]"
              >
                <WhatsAppIcon />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
