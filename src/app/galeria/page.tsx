import Image from 'next/image'
import { Metadata } from 'next'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { whatsappLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Galeria | Mariana Nails Studio',
  description: 'Confira trabalhos reais de alongamento, nail art e esmaltação feitos no Mariana Nails Studio em Santana de Parnaíba.',
}

const galeriaImages = [
  '/images/unhas_barueri_nail_art_a (1).webp',
  '/images/unhas_barueri_nail_art_a (3).webp',
  '/images/unhas_barueri_nail_art_a (4).webp',
  '/images/unhas_barueri_nail_art_a (5).webp',
  '/images/unhas_barueri_nail_art_a (6).webp',
  '/images/unhas_barueri_nail_art_a (7).webp',
  '/images/unhas_barueri_nail_art_a (8).webp',
  '/images/unhas_barueri_nail_art_a (9).webp',
  '/images/unhas_barueri_nail_art_a (10).webp',
  '/images/unhas_barueri_nail_art_a (11).webp',
  '/images/unhas_barueri_nail_art_a (12).webp',
  '/images/unhas_barueri_nail_art_a (13).webp',
  '/images/unhas_barueri_nail_art_a (14).webp',
  '/images/unhas_barueri_nail_art_a (15).webp',
  '/images/unhas_mariananails_barueri (1).webp',
  '/images/unhas_mariananails_barueri (2).webp',
  '/images/unhas_mariananails_barueri (3).webp',
  '/images/unhas_mariananails_barueri (4).webp',
  '/images/unhas_mariananails_barueri (5).webp',
  '/images/unhas_mariananails_barueri.webp',
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C41E3A]/10 via-[#D4AF37]/10 to-[#C41E3A]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-6">
            Trabalhos Reais
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
            Galeria de <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">Resultados</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Alongamentos, nail arts e esmaltações produzidos no nosso estúdio. Encontre inspiração para o seu próximo design de unhas.
          </p>
        </div>
      </section>

      {/* ========== GALERIA ========== */}
      <section className="py-12 md:py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galeriaImages.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 shadow-md group"
            >
              <Image
                src={image}
                alt={`Trabalho feito no Mariana Nails Studio ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-110"
                loading={index < 4 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] border border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Gostou do que <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent">viu</span>?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Mande uma foto da inspiração para a Mariana no WhatsApp e agende o seu horário.
          </p>
          <a
            href={whatsappLink('Oi Mariana! Vi a galeria no site e gostaria de agendar um horario!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#22C55E]/20 text-sm md:text-base font-[family-name:var(--font-montserrat)]"
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
