import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 via-primary-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-handwritten font-bold text-gray-900 mb-4">
                Transforme suas <span className="text-primary-600">unhas</span> em obras de arte!
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Especialista em Nail Design em Barueri e Alphaville. Aprenda a fazer nails profissionais com técnicas avançadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511944598264?text=Oi!%20gostaria%20de%20agendar%20um%20atendimento%20de%20unhas!%20vim%20do%20site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Agende seu Horário
                </a>
                <Link href="/galeria" className="btn-secondary text-center">
                  Ver Galeria
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (1).jpg" 
                alt="Mariana Nails - Serviços de Manicure em Barueri" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-4">Nossos Serviços</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Oferecemos uma variedade de serviços de nail design e cuidados com as unhas, todos realizados com produtos de alta qualidade e técnicas avançadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manicure Tradicional',
                description: 'Cuidados completos para suas unhas, incluindo corte, lixamento, cutículas e esmaltação.',
                image: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (11).jpg'
              },
              {
                title: 'Nail Design',
                description: 'Designs exclusivos e personalizados para suas unhas, desde arte simples até elaborada.',
                image: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (4).jpg'
              },
              {
                title: 'Alongamento de Unhas',
                description: 'Técnicas de alongamento com fibra de vidro, acrigel e gel para unhas mais longas e resistentes.',
                image: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (2).jpg'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/servicos" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    Saiba mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section bg-gradient-to-br from-white to-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (9).jpg" 
                alt="Mariana Nails - Especialista em Nail Design" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="rounded-lg"
                placeholder="empty"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-6">
                Sobre <span className="text-primary-600">Mariana Nails</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Com mais de +5 anos de experiência no mercado de beleza, Mariana se destaca pela excelência e qualidade nos serviços de manicure, pedicure e nail design.
              </p>
              <p className="text-gray-700 mb-6">
                Nossa missão é proporcionar momentos de autocuidado e bem-estar, realçando a beleza natural das suas unhas com técnicas modernas e produtos de alta qualidade.
              </p>
              <Link href="/contato" className="btn-primary inline-block">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-4">Galeria de Trabalhos</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Confira alguns dos nossos trabalhos mais recentes e se inspire para sua próxima visita.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/images/unhas_barueri_nail_art_a (1).jpg',
              '/images/unhas_barueri_nail_art_a (3).jpg',
              '/images/unhas_barueri_nail_art_a (4).jpg',
              '/images/unhas_barueri_nail_art_a (5).jpg',
              '/images/unhas_barueri_nail_art_a (6).jpg',
              '/images/unhas_barueri_nail_art_a (7).jpg',
              '/images/unhas_barueri_nail_art_a (12).jpg',
              '/images/unhas_barueri_nail_art_a (13).jpg',
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={image} 
                  alt={`Trabalho Mariana Nails ${index + 1}`} 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/galeria" className="btn-secondary">
              Ver Mais Trabalhos
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-6 text-white">
                Cursos de Nail Design
              </h2>
              <p className="mb-4 text-white">
                Inicie sua carreira como nail designer com nossos cursos profissionalizantes. Aprenda técnicas avançadas de nail art, alongamento e decoração de unhas.
              </p>
              <p className="mb-6 text-white">
                Oferecemos cursos para iniciantes e profissionais que desejam se aperfeiçoar, com certificado e material incluso.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-white">Turmas reduzidas com atendimento personalizado</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-white">Material didático e kit de ferramentas inclusos</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-white">Certificado de conclusão válido em todo o Brasil</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/cursos" className="bg-white text-primary-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  Conheça Nossos Cursos
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (33).jpg" 
                alt="Cursos de Nail Design" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-4">O que Nossas Clientes Dizem</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              A satisfação de nossas clientes é nossa maior recompensa. Confira alguns depoimentos de quem já conhece nosso trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amanda Silva',
                testimonial: 'A Mariana é incrível! Minhas unhas nunca estiveram tão bonitas. Super recomendo os serviços de alongamento de unhas.',
                image: '/images/unhas_mariananails_barueri (1).jpeg'
              },
              {
                name: 'Carla Oliveira',
                testimonial: 'Fiz o curso de nail design e foi uma experiência transformadora. Já estou atendendo minhas primeiras clientes!',
                image: '/images/unhas_mariananails_barueri (2).jpeg'
              },
              {
                name: 'Juliana Santos',
                testimonial: 'Ambiente aconchegante, atendimento pontual e um trabalho impecável. O melhor serviço de manicure de Barueri!',
                image: '/images/unhas_mariananails_barueri (3).jpeg'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4 w-12 h-12 relative overflow-hidden rounded-full">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                <div className="mt-4 flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-100">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-6">
              Pronta para transformar suas unhas?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Agende um horário hoje mesmo e experimente o melhor serviço de nail design de Barueri e Alphaville.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5511944598264?text=Oi!%20gostaria%20de%20agendar%20um%20atendimento%20de%20unhas!%20vim%20do%20site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Agende pelo WhatsApp
              </a>
              <Link href="/contato" className="btn-secondary text-center">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 