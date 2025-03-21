import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Cursos | Mariana Nails',
  description: 'Cursos profissionalizantes de Nail Design, Alongamento de Unhas e Nail Art em Barueri e Alphaville.',
}

export default function CursosPage() {
  const cursos = [
    {
      titulo: 'Curso de Manicure e Pedicure Profissional',
      descricao: 'Aprenda técnicas de manicure e pedicure profissional com foco em atendimento de qualidade, higienização e esterilização de materiais.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (19).jpg',
      duracao: '24 horas',
      preco: 'R$ 1.200,00',
      conteudo: [
        'Anatomia da unha',
        'Higienização e esterilização de materiais',
        'Técnicas de corte e lixamento',
        'Cuticulagem sem lesões',
        'Esmaltação perfeita',
        'Cuidados com os pés',
        'Massagem relaxante',
        'Marketing para manicures'
      ]
    },
    {
      titulo: 'Curso de Alongamento de Unhas',
      descricao: 'Curso completo para aprender diferentes técnicas de alongamento com fibra de vidro, acrigel e gel, com foco em durabilidade e acabamento perfeito.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (20).jpg',
      duracao: '32 horas',
      preco: 'R$ 1.800,00',
      conteudo: [
        'Preparação da unha natural',
        'Técnica de alongamento com fibra de vidro',
        'Técnica de alongamento com acrigel',
        'Técnica de alongamento com gel',
        'Construção de curvatura c',
        'Acabamento perfeito',
        'Manutenção e remoção segura',
        'Dicas para evitar problemas comuns'
      ]
    },
    {
      titulo: 'Curso de Nail Design e Nail Art',
      descricao: 'Desenvolva sua criatividade e aprenda técnicas avançadas de decoração de unhas, desde desenhos simples até nail arts elaboradas.',
      imagem: '/images/curso_unhas_nail_design_barueri_alphaville_nail_art_designer (30).jpg',
      duracao: '20 horas',
      preco: 'R$ 1.400,00',
      conteudo: [
        'Técnicas básicas de pintura',
        'Nail art com adesivos e carimbos',
        'Desenhos à mão livre',
        'Aplicação de pedrarias e enfeites',
        'Técnicas de degradê',
        'Baby boomer e ombré',
        'Técnicas de efeito mármore',
        'Tendências atuais em nail art'
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Cursos Profissionalizantes</h1>
            <p className="text-lg text-gray-700">
              Inicie ou aperfeiçoe sua carreira como nail designer com nossos cursos completos e certificados.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/clique_video.jpg"
              >
                <source src="/images/unhas_nail_art_curso_completo_mariana_nails_barueri_alphaville.mp4" type="video/mp4" />
                <source src="/images/unhas_nail_art_curso_completo_mariana_nails_barueri_alphaville.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Nossos Cursos</h2>
            <p className="text-gray-700">
              Desenvolvidos para capacitar desde iniciantes até profissionais que desejam se aperfeiçoar
            </p>
          </div>

          <div className="space-y-12">
            {cursos.map((curso, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-3 gap-0"
              >
                <div className="relative h-64 md:h-auto">
                  <Image 
                    src={curso.imagem} 
                    alt={curso.titulo} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6 col-span-2">
                  <h2 className="text-2xl font-serif font-semibold mb-3">{curso.titulo}</h2>
                  <p className="text-gray-600 mb-4">{curso.descricao}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-semibold">{curso.preco}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{curso.duracao}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">O que você vai aprender:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {curso.conteudo.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20curso%20de%20nail%20design." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Quero Me Inscrever
                    </a>
                    <Link href="/contato" className="btn-secondary">
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">O que Nossas Alunas Dizem</h2>
            <p className="text-gray-700">
              Veja os depoimentos de quem já realizou nossos cursos e transformou sua carreira
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nome: 'Fernanda Lima',
                depoimento: 'O curso de alongamento foi excelente! Em apenas um mês, já estava atendendo minhas primeiras clientes. O material didático é muito completo e a Mariana é uma excelente professora.',
                avatar: '/images/unhas_mariananails_barueri (1).jpeg'
              },
              {
                nome: 'Patrícia Souza',
                depoimento: 'Fiz o curso de Nail Art e descobri um novo talento! As técnicas ensinadas são práticas e atuais. Agora estou gerando uma renda extra fazendo unhas decoradas nas minhas clientes.',
                avatar: '/images/unhas_mariananails_barueri (4).jpeg'
              },
              {
                nome: 'Camila Ferreira',
                depoimento: 'Já trabalhava como manicure, mas o curso de aperfeiçoamento elevou meu trabalho a outro nível. Aprendi técnicas que me permitiram aumentar meu preço e atrair clientes mais exigentes.',
                avatar: '/images/unhas_mariananails_barueri (5).jpeg'
              }
            ].map((depoimento, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4 w-12 h-12 relative overflow-hidden rounded-full">
                    <Image 
                      src={depoimento.avatar} 
                      alt={depoimento.nome} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="font-medium">{depoimento.nome}</h3>
                </div>
                <p className="text-gray-700 italic">"{depoimento.depoimento}"</p>
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

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Por que Escolher Nossos Cursos</h2>
            <p className="text-gray-700">
              Conheça os diferenciais que fazem nossos cursos serem referência em Barueri e região
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Material Incluso</h3>
              <p className="text-gray-600">
                Kit completo de ferramentas e produtos de qualidade inclusos em todos os nossos cursos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Turmas Reduzidas</h3>
              <p className="text-gray-600">
                Turmas com número limitado de alunas para garantir atenção individualizada e melhor aprendizado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-5 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certificado Reconhecido</h3>
              <p className="text-gray-600">
                Certificado de conclusão válido em todo o Brasil para comprovar sua qualificação profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Pronta para Iniciar sua Carreira?
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              Entre em contato agora mesmo e saiba mais sobre nossas próximas turmas e condições especiais de pagamento.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20cursos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
              >
                Quero Me Inscrever
              </a>
              <Link href="/contato" className="border border-white text-white px-6 py-3 rounded-md shadow-md hover:bg-primary-700 transition-colors">
                Mais Informações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 