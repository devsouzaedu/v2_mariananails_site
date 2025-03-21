import Image from 'next/image'

export const metadata = {
  title: 'Contato | Mariana Nails',
  description: 'Entre em contato com a Mariana Nails para agendar um horário ou esclarecer dúvidas sobre nossos serviços e cursos.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Entre em Contato</h1>
            <p className="text-lg text-gray-700">
              Estamos à disposição para agendar seu horário ou tirar qualquer dúvida sobre nossos serviços e cursos.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Endereço</h3>
                    <p className="text-gray-600">Alphaville - Barueri, SP</p>
                    <p className="text-gray-600 mt-1">Atendimento com hora marcada</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 flex items-center mt-2 hover:text-primary-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8179L0 24L6.30536 22.3446C8.01429 23.2982 9.98036 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.47679 21.3107 6.95893 20.4107L6.59464 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1482C2.63036 15.5732 2.11071 13.7571 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1161 3.0375 18.9857 4.91786C20.8554 6.79821 21.9964 9.27321 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4214 14.3839C17.1214 14.2339 15.6589 13.5161 15.3804 13.4143C15.1018 13.3125 14.8982 13.2589 14.6946 13.5643C14.4911 13.8696 13.9232 14.5339 13.7411 14.7429C13.5589 14.9518 13.3768 14.9786 13.0768 14.8286C12.7768 14.6786 11.8179 14.3625 10.6821 13.3446C9.79286 12.5464 9.2089 11.5607 9.02679 11.2554C8.84464 10.95 9.00536 10.7786 9.15893 10.6196C9.29464 10.4768 9.46071 10.25 9.61071 10.0679C9.76071 9.88571 9.81429 9.75714 9.91607 9.55357C10.0179 9.35 9.96429 9.16786 9.8875 9.01786C9.81071 8.86786 9.22143 7.40357 8.96429 6.79286C8.71429 6.2 8.46071 6.2 8.26786 6.19286C8.08571 6.18571 7.88214 6.18571 7.67857 6.18571C7.475 6.18571 7.14643 6.26786 6.86786 6.57321C6.58929 6.87857 5.82321 7.59643 5.82321 9.06071C5.82321 10.525 6.88393 11.9357 7.03393 12.1393C7.18393 12.3429 9.20714 15.5464 12.3893 16.8339C13.0821 17.1393 13.6232 17.3196 14.05 17.4589C14.7589 17.6929 15.4018 17.6607 15.9107 17.5821C16.4768 17.4946 17.6464 16.8607 17.9036 16.1429C18.1607 15.425 18.1607 14.8143 18.0839 14.7429C18.0071 14.6714 17.7214 14.5339 17.4214 14.3839Z" fill="currentColor"/>
                      </svg>
                      Fale pelo WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@mariananails.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sábado: 9h às 19h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/mariana_nails" target="_blank" rel="noopener noreferrer" className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors">
                    <Image src="/images/instagram (1).png" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="https://tiktok.com/@mariana_nails" target="_blank" rel="noopener noreferrer" className="bg-primary-100 p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors">
                    <Image src="/images/tiktok.png" alt="TikTok" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Envie uma Mensagem</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="agendamento">Agendamento</option>
                    <option value="cursos">Informações sobre Cursos</option>
                    <option value="precos">Preços</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full btn-primary"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 