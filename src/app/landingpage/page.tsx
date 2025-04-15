import Image from "next/image";

export default function Landingpage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero section with background image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px]">
        {/* Background div with image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/mariana_landingpage.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
        
        {/* Overlay para melhorar a legibilidade */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
        ></div>

        {/* Conteúdo */}
        <div 
          className="relative flex flex-col items-center justify-end h-full px-6 text-center pb-6"
          style={{ zIndex: 2 }}
        >
          {/* Ícones de redes sociais */}
          <div className="flex space-x-4 mb-5">
            <a
              href="https://www.youtube.com/@mariananailsz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 p-1.5">
                <Image 
                  src="/images/youtube-app-white-icon.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                />
              </div>
            </a>
            <a
              href="https://wa.me/5511900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 p-1.5">
                <Image 
                  src="/images/whatsapp-white-icon.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
              </div>
            </a>
          </div>

          {/* Nome */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Mariana Souza
          </h1>
          
          {/* Instagram */}
          <p className="text-lg md:text-xl mb-4 text-white" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            @mariananailsz
          </p>
        </div>
      </div>

      {/* Bio section - Removido padding superior (pt-6) e inferior (pb-12) */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="mb-6 text-base md:text-lg text-white">
            Mariana Nails é Nail Designer há mais de 3 anos, atendendo com excelência clientes de Barueri e região. 
            Especialista em alongamento, decoração e cuidado das unhas, Mariana é conhecida por sua atenção aos 
            detalhes e estilo autêntico, trazendo beleza e autoestima para cada cliente que passa por suas mãos.
          </p>
          <p className="mb-6 text-base md:text-lg text-white">
            Hoje, ela une sua experiência, criatividade e sensibilidade para transformar não só unhas, mas também 
            histórias — empoderando, ensinando e inspirando diariamente por meio do seu trabalho e dos seus conteúdos.
          </p>
        </div>
      </div>

      {/* Cards section - Removido padding superior (py-12 virou pb-12) */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Link adicionado */}
          <a 
            href="https://pay.kiwify.com.br/0DJ2eOj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_cursos.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Cursos & Apostilas</h3>
                <p>Apostilas</p>
              </div>
            </div>
          </a>

          {/* Card 2 - Link adicionado */}
          <a 
            href="https://wa.me/5511944598264?text=Gostaria%20de%20agendar%20um%20horario%20%2F%20conhecer%20mais%20do%20seu%20trabalho%20Mariana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_agendar.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Agendar Agora</h3>
                <p>Garanta seu horário de forma rápida e fácil.</p>
              </div>
            </div>
          </a>

          {/* Card 3 - Link adicionado */}
          <a 
            href="https://www.espacooliverbeauty.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana_espacobeauty.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Conheça o Espaço Beauty</h3>
                <p>Veja fotos e saiba mais sobre nosso ambiente.</p>
              </div>
            </div>
          </a>

          {/* Card 4 - Link adicionado */}
          <a 
            href="https://www.mariananails.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div 
              className="relative h-48"
              style={{
                backgroundImage: `url('/images/card_imagem_mariana1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Site Mariana Nails</h3>
                <p>Acesse o site completo para mais informações e serviços.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 