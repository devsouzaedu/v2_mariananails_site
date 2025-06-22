import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Especialização em Nail Design | Mariana Nails',
  description: 'Cursos avançados de especialização em Nail Art, Nail Design, Alongamento em Fibra e técnicas russas em Barueri e Alphaville.',
}

export default function EspecializacaoCursosPage() {
  const especializacoes = [
    {
      titulo: 'Nail Art Avançada',
      slug: 'nail-art-avancada',
      descricao: 'Aprofunde suas habilidades em decoração de unhas com técnicas avançadas, criando verdadeiras obras de arte.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (19).jpg',
      duracao: '16 horas',
      preco: 'R$ 1.680,00',
      detalhes: 'A Nail Art é uma forma de expressão artística que transforma as unhas em verdadeiras telas para criações únicas. Nossa especialização em Nail Art Avançada oferece técnicas exclusivas para profissionais que desejam se destacar no mercado, com técnicas inovadoras e tendências internacionais. Você aprenderá desde desenhos complexos até aplicação de elementos 3D, tornando-se referência em decoração de unhas.',
      conteudo: [
        'Técnicas avançadas de pintura à mão livre',
        'Nail art 3D com acrílico e gel',
        'Aplicação de elementos decorativos complexos',
        'Técnicas de degradê avançadas',
        'Design de unhas temáticas e sazonais',
        'Marmorização e técnicas aquarela',
        'Nail art japonesa e coreana',
        'Criação de portfólio profissional'
      ]
    },
    {
      titulo: 'Nail Design Profissional',
      slug: 'nail-design-profissional',
      descricao: 'Torne-se um Nail Designer completo dominando técnicas de cor, forma e tendências para criar designs exclusivos.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (20).jpg',
      duracao: '24 horas',
      preco: 'R$ 2.100,00',
      detalhes: 'O Nail Design vai além da simples decoração, envolvendo o planejamento estético completo das unhas, considerando formato, comprimento, cor e elementos decorativos. Nossa especialização em Nail Design Profissional forma designers completos, capazes de criar looks personalizados e exclusivos para cada cliente. Você aprenderá a analisar a anatomia das mãos, tom de pele e estilo pessoal para criar designs que realçam a beleza natural de cada pessoa.',
      conteudo: [
        'Princípios de design aplicados às unhas',
        'Teoria da cor avançada para nail design',
        'Análise de formato de unhas e mãos',
        'Personalização de designs para cada cliente',
        'Tendências sazonais e previsão de tendências',
        'Técnicas de fotografia para portfólio',
        'Criação de coleções temáticas',
        'Marketing para nail designers'
      ]
    },
    {
      titulo: 'Alongamento em Fibra Especialista',
      slug: 'alongamento-fibra-especialista',
      descricao: 'Domine a técnica de alongamento em fibra de vidro com foco em durabilidade e designs naturais perfeitos.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (30).jpg',
      duracao: '32 horas',
      preco: 'R$ 2.400,00',
      detalhes: 'O alongamento em fibra de vidro é reconhecido pela leveza, naturalidade e resistência. Nossa especialização forma profissionais experts nesta técnica, capazes de criar unhas artificiais indistinguíveis das naturais. Você aprenderá desde a preparação adequada até técnicas avançadas de modelagem e acabamento, garantindo trabalhos duradouros e esteticamente perfeitos. A técnica de fibra é ideal para clientes que buscam naturalidade com resistência.',
      conteudo: [
        'Análise avançada da unha natural',
        'Preparação especializada para máxima aderência',
        'Aplicação de fibra com precisão máxima',
        'Técnicas de modelagem para diferentes formatos',
        'Construção de curvaturas perfeitas',
        'Técnicas de refile e acabamento profissional',
        'Soluções para casos complexos e unhas problemáticas',
        'Manutenção e remoção sem danos'
      ]
    },
    {
      titulo: 'Alongamento em Molde Russo',
      slug: 'alongamento-molde-russo',
      descricao: 'Aprenda a renomada técnica russa de alongamento com moldes para criar unhas perfeitas com curvatura C ideal.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (25).jpg',
      duracao: '40 horas',
      preco: 'R$ 2.800,00',
      detalhes: 'A técnica russa de alongamento de unhas revolucionou o mercado pela precisão e perfeição dos resultados. Nossa especialização oferece treinamento completo nesta metodologia que utiliza moldes específicos e técnicas diferenciadas para criar unhas com formato, curvatura e resistência incomparáveis. Você aprenderá desde a confecção dos moldes personalizados até a construção arquitetônica da unha, garantindo resultados que se destacam pela beleza e durabilidade.',
      conteudo: [
        'História e fundamentos da técnica russa',
        'Confecção de moldes personalizados',
        'Preparação diferenciada da unha natural',
        'Construção arquitetônica da estrutura',
        'Técnicas de apex e stress point',
        'Criação de curvaturas perfeitas',
        'Acabamento e pintura com técnica russa',
        'Manutenção e adaptação para diferentes tipos de unhas'
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-50 py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Especializações em <span className="text-primary-600">Nail Design</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Eleve sua carreira a outro nível com nossas especializações exclusivas para profissionais que desejam se destacar no mercado
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://pay.kiwify.com.br/lf9IZHj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Fale com uma Consultora
                </a>
                <Link href="#especializacoes" className="btn-secondary text-lg px-8 py-4">
                  Ver Especializações
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Por que se especializar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6">Por que se Especializar?</h2>
            <p className="text-lg text-gray-700 mb-8">
              O mercado de nail design está cada vez mais exigente e competitivo. Profissionais especializados conseguem cobrar até 3x mais pelos seus serviços e têm agenda sempre cheia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Valorização Profissional</h3>
              <p className="text-gray-700">
                Profissionais especializados podem cobrar até 300% mais pelos serviços exclusivos que oferecem.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Clientela Diferenciada</h3>
              <p className="text-gray-700">
                Especialistas atraem clientes que buscam qualidade e exclusividade, dispostos a pagar mais.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reconhecimento</h3>
              <p className="text-gray-700">
                Torne-se referência em técnicas específicas, atraindo outros profissionais para aprender com você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especializações */}
      <section id="especializacoes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Nossas Especializações</h2>
            <p className="text-gray-700">
              Cursos avançados para profissionais que já dominam as técnicas básicas e desejam se aperfeiçoar
            </p>
          </div>

          <div className="space-y-20">
            {especializacoes.map((curso, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-72 lg:h-auto">
                    <Image 
                      src={curso.imagem} 
                      alt={curso.titulo} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <h2 className="text-3xl font-serif font-semibold mb-4">{curso.titulo}</h2>
                    <p className="text-xl text-gray-700 mb-6">{curso.descricao}</p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-primary-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="font-semibold text-lg">{curso.preco}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-lg">{curso.duracao}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {curso.detalhes}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">O que você vai dominar:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {curso.conteudo.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="https://pay.kiwify.com.br/lf9IZHj"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Quero Me Especializar
                      </a>
                      <Link href={`/cursos/${curso.slug}`} className="btn-secondary">
                        Detalhes do Curso
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Especialista */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-auto rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/unhas_mariananails_barueri (1).jpeg" 
                alt="Mariana Silva - Especialista em Nail Art"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Conheça Nossa Especialista</h2>
              <h3 className="text-2xl text-primary-600 font-semibold mb-4">Mariana Silva</h3>
              <p className="text-lg text-gray-700 mb-6">
                Especialista em Nail Design com mais de 15 anos de experiência e formação internacional. 
                Certificada pelas maiores escolas de nail art da Europa e participante de competições 
                internacionais, onde conquistou prêmios por suas técnicas inovadoras.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Mariana é reconhecida por seu olhar clínico e capacidade de ensinar técnicas complexas 
                de forma simples e acessível. Seus cursos combinam teoria sólida com muita prática, 
                garantindo que cada aluno desenvolva habilidades reais e aplicáveis.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <span className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full">Nail Artist Certificada</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full">Técnica Russa</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full">Educadora Internacional</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full">Especialista em Fibra</span>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/mariana_nails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Siga no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-700">
              Tudo o que você precisa saber sobre nossas especializações
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {[
              {
                pergunta: 'Preciso ter experiência prévia para fazer os cursos de especialização?',
                resposta: 'Sim, nossas especializações são destinadas a profissionais que já possuem conhecimento básico nas técnicas de manicure e design de unhas. Recomendamos pelo menos 6 meses de experiência prática para melhor aproveitamento.'
              },
              {
                pergunta: 'O material está incluso no valor do curso?',
                resposta: 'Sim, todos os materiais necessários para as aulas práticas estão inclusos no valor do curso. Você receberá um kit profissional com produtos de alta qualidade para utilizar durante as aulas e iniciar seus atendimentos.'
              },
              {
                pergunta: 'Qual a forma de pagamento?',
                resposta: 'Oferecemos diversas formas de pagamento: à vista com desconto, parcelamento em até 12x no cartão de crédito ou boleto bancário. Também temos condições especiais para quem fizer mais de uma especialização.'
              },
              {
                pergunta: 'Como são as turmas?',
                resposta: 'Nossas turmas são reduzidas, com no máximo 6 alunas por classe, garantindo atendimento personalizado e acompanhamento individual durante todo o processo de aprendizagem.'
              },
              {
                pergunta: 'Vocês oferecem suporte após o término do curso?',
                resposta: 'Sim, todos os alunos têm acesso a um grupo exclusivo de suporte por 3 meses após a conclusão do curso, onde podem tirar dúvidas e receber acompanhamento da instrutora Mariana.'
              },
              {
                pergunta: 'O certificado é reconhecido?',
                resposta: 'Sim, nossos certificados são reconhecidos em todo o Brasil e podem ser utilizados para comprovar sua qualificação profissional. Eles são emitidos pelo Studio Mariana Nails, referência em nail design na região.'
              }
            ].map((item, index) => (
              <div key={index} className="py-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{item.pergunta}</h3>
                </div>
                <div className="mt-3">
                  <p className="text-gray-700">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Transforme sua Carreira com Nossas Especializações
            </h2>
            <p className="text-xl mb-10 text-primary-100">
              Garanta sua vaga em uma de nossas turmas exclusivas e torne-se referência em nail design
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://pay.kiwify.com.br/lf9IZHj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-600 text-lg px-8 py-4 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
              >
                Inscreva-se Agora
              </a>
              <Link href="/contato" className="border-2 border-white text-white text-lg px-8 py-4 rounded-md shadow-lg hover:bg-primary-700 transition-colors">
                Solicitar Informações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 