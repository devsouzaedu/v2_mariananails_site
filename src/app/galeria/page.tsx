import Image from 'next/image'

export const metadata = {
  title: 'Galeria | Mariana Nails',
  description: 'Confira nossos trabalhos mais recentes de nail design, nail art e alongamento de unhas.',
}

export default function GaleriaPage() {
  // Array com as imagens da galeria
  const galeriaImages = [
    '/images/unhas_barueri_nail_art_a (1).jpg',
    '/images/unhas_barueri_nail_art_a (3).jpg',
    '/images/unhas_barueri_nail_art_a (4).jpg',
    '/images/unhas_barueri_nail_art_a (5).jpg',
    '/images/unhas_barueri_nail_art_a (6).jpg',
    '/images/unhas_barueri_nail_art_a (7).jpg',
    '/images/unhas_barueri_nail_art_a (8).jpg',
    '/images/unhas_barueri_nail_art_a (9).jpg',
    '/images/unhas_barueri_nail_art_a (10).jpg',
    '/images/unhas_barueri_nail_art_a (11).jpg',
    '/images/unhas_barueri_nail_art_a (12).jpg',
    '/images/unhas_barueri_nail_art_a (13).jpg',
    '/images/unhas_barueri_nail_art_a (14).jpg',
    '/images/unhas_barueri_nail_art_a (15).jpg',
    '/images/unhas_mariananails_barueri (1).jpeg',
    '/images/unhas_mariananails_barueri (2).jpeg',
    '/images/unhas_mariananails_barueri (3).jpeg',
    '/images/unhas_mariananails_barueri (4).jpeg',
    '/images/unhas_mariananails_barueri (5).jpeg',
    '/images/unhas_mariananails_barueri.jpeg',
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Galeria de Trabalhos</h1>
            <p className="text-lg text-gray-700">
              Confira alguns dos nossos trabalhos mais recentes e encontre inspiração para o seu próximo design de unhas. Nossa equipe é especializada em nail art, alongamentos e design personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galeriaImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md group h-80 transition-transform hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Trabalho Mariana Nails ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif">Design {index + 1}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Gostou do que viu?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Agende um horário hoje mesmo e experimente o melhor serviço de nail design de Barueri e Alphaville.
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Agende pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 