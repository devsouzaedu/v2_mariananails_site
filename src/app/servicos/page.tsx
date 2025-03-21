import Image from 'next/image'

export const metadata = {
  title: 'Serviços | Mariana Nails',
  description: 'Conheça nossos serviços de manicure, pedicure, alongamento de unhas e nail design em Barueri e Alphaville.',
}

export default function ServicosPage() {
  const servicos = [
    {
      titulo: 'Manicure Tradicional',
      descricao: 'Tratamento completo para suas unhas, incluindo remoção de cutículas, lixamento, modelagem e esmaltação com produtos de alta qualidade.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (11).jpg',
      preco: 'A partir de R$ 50,00',
      duracao: '45 minutos',
    },
    {
      titulo: 'Pedicure Completa',
      descricao: 'Cuidado especial para seus pés, incluindo esfoliação, hidratação, remoção de cutículas, lixamento e esmaltação.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (12).jpg',
      preco: 'A partir de R$ 65,00',
      duracao: '60 minutos',
    },
    {
      titulo: 'Esmaltação em Gel',
      descricao: 'Esmaltação durável com acabamento perfeito e brilhante. Permanece por até 3 semanas sem descascar ou perder o brilho.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (4).jpg',
      preco: 'A partir de R$ 80,00',
      duracao: '60 minutos',
    },
    {
      titulo: 'Alongamento de Unhas',
      descricao: 'Técnicas de alongamento com fibra de vidro, acrigel ou gel para unhas mais longas e resistentes, personalizadas de acordo com seu estilo.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (2).jpg',
      preco: 'A partir de R$ 120,00',
      duracao: '90 minutos',
    },
    {
      titulo: 'Nail Art Personalizada',
      descricao: 'Designs exclusivos e criativos para suas unhas, desde decorações simples até nail arts elaboradas com pedras, adesivos e pinturas à mão.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (5).jpg',
      preco: 'A partir de R$ 30,00',
      duracao: 'Varia conforme a complexidade',
    },
    {
      titulo: 'Spa de Mãos',
      descricao: 'Tratamento completo de hidratação e revitalização para suas mãos, incluindo esfoliação, massagem e parafina.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (28).jpg',
      preco: 'A partir de R$ 90,00',
      duracao: '50 minutos',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossos Serviços</h1>
            <p className="text-lg text-gray-700">
              Conheça nossa variedade de serviços para suas unhas, todos realizados com produtos de alta qualidade e por profissionais experientes.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src={servico.imagem} 
                    alt={servico.titulo} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-semibold mb-3">{servico.titulo}</h2>
                  <p className="text-gray-600 mb-4">{servico.descricao}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{servico.preco}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{servico.duracao}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adicionais */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Adicionais</h2>
            <p className="text-gray-700">
              Personalize seu atendimento com nossos serviços adicionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { nome: 'Decoração com Pedrarias', preco: 'A partir de R$ 20,00' },
              { nome: 'Francesinha', preco: 'A partir de R$ 15,00' },
              { nome: 'Nail Art Simples', preco: 'A partir de R$ 25,00' },
              { nome: 'Remoção de Gel/Acrigel', preco: 'A partir de R$ 35,00' },
              { nome: 'Reparo de Unha (unidade)', preco: 'A partir de R$ 20,00' },
              { nome: 'Hidratação de Parafina', preco: 'A partir de R$ 40,00' },
            ].map((adicional, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">{adicional.nome}</h3>
                <p className="text-primary-600 font-semibold">{adicional.preco}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-gray-700">
              O que faz nosso atendimento ser único e especial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Produtos de Alta Qualidade</h3>
              <p className="text-gray-600">
                Utilizamos apenas produtos de marcas reconhecidas e aprovados pela ANVISA, garantindo segurança e durabilidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Cada cliente recebe um atendimento exclusivo, considerando suas preferências e necessidades específicas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Profissionais Experientes</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por profissionais qualificados e constantemente atualizados com as últimas tendências.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Pronta para agendar seu horário?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp e agende seu horário com facilidade.
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 