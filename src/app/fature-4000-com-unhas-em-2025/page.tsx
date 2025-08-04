import Image from 'next/image';

export default function Fature4000ComUnhasEm2025() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Imagem de Topo */}
      <div className="relative w-full h-auto">
        <Image 
          src="/images/mariana_nails_rota_curso_topo.png"
          alt="Mariana Nails - Fature R$4000 com Unhas em 2025"
          width={1920} // Ajuste conforme a largura real da imagem ou a largura desejada no layout
          height={1080} // Ajuste conforme a altura real da imagem ou a altura desejada no layout
          layout="responsive" // Garante que a imagem seja responsiva
          objectFit="cover" // Garante que a imagem cubra a área sem distorção
          priority // Otimiza o carregamento para a primeira visualização
        />
      </div>

      {/* Cabeçalho Principal */}
      <header className="bg-gradient-to-r from-pink-400 to-rose-500 text-white py-16 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Torne-se uma Nail Designer de Sucesso e Fature <br className="hidden md:inline"/> +R$4.000 por Mês em 2025 com Mariana Nails!
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Conquiste sua independência financeira, seja sua própria chefe e transforme sua paixão por unhas em uma carreira lucrativa e valorizada no mercado da beleza!
        </p>
      </header>

      {/* Seção de Benefícios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-12">
            Por Que Escolher o Curso Mariana Nails?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="/images/icon-growth.svg" alt="Crescimento Profissional" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Do Zero ao Avançado</h3>
              <p className="text-gray-700">
                Mesmo sem experiência, você aprenderá todas as técnicas para se tornar uma Nail Designer completa e confiante.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="/images/icon-money.svg" alt="Alta Renda" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fature +R$4.000/Mês</h3>
              <p className="text-gray-700">
                Descubra como transformar suas habilidades em uma fonte de renda sólida e lucrativa, alcançando sua independência financeira.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="/images/icon-certificate.svg" alt="Certificação Profissional" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Certificação Reconhecida</h3>
              <p className="text-gray-700">
                Receba 20 certificados profissionais que validarão suas habilidades e abrirão portas no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que o Curso Oferece */}
      <section className="py-16 px-4 bg-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-12">
            O Que Você Vai Aprender no Curso Mariana Nails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Módulos Completos e Didáticos</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>+100 aulas em vídeo, passo a passo, pensadas para iniciantes e avançadas.</li>
                <li>Técnicas de alongamento: Fibra de Vidro, Gel Moldado, Polygel e Gel na Tip.</li>
                <li>Cutilagem perfeita, Esmaltação em Gel e Tradicional.</li>
                <li>Manicure e Pedicure Profissional.</li>
                <li>Decoração de Unhas (Nail Art) e Francesinha.</li>
                <li>Remoção Segura e Manutenção.</li>
                <li>Marketing para Nail Designers: Como atrair clientes e precificar seus serviços.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diferenciais Exclusivos</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Acesso vitalício ao curso e a todas as atualizações futuras.</li>
                <li>Suporte direto com a instrutora Mariana Nails.</li>
                <li>Comunidade exclusiva de alunas para troca de experiências e dicas.</li>
                <li>Material de apoio em PDF para download.</li>
                <li>Dicas de onde comprar materiais com os melhores preços.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Bônus */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-12">
            Bônus Exclusivos Para Você (Vagas Limitadas!)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-pink-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/images/bonus-cilios.svg" alt="Bônus Extensão de Cílios" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Curso de Extensão de Cílios</h3>
              <p className="text-gray-700">Aprenda uma nova habilidade e amplie seus serviços com certificado exclusivo.</p>
            </div>
            <div className="bg-pink-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/images/bonus-masculino.svg" alt="Bônus Manicure Masculina" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Manicure Masculina</h3>
              <p className="text-gray-700">Domine as técnicas para atender o público masculino com excelência.</p>
            </div>
            <div className="bg-pink-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/images/bonus-spa.svg" alt="Bônus Spa dos Pés" className="h-16 w-16 mx-auto mb-6 text-pink-500"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Spa dos Pés Profissional</h3>
              <p className="text-gray-700">Relaxe seus clientes e ofereça um serviço completo e diferenciado.</p>
            </div>
          </div>
          <p className="text-red-600 text-xl font-semibold mt-10">Corre! Bônus Limitados e com Certificado!</p>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-16 px-4 bg-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-12">
            Histórias de Sucesso Reais de Nossas Alunas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <p className="italic text-gray-700 mb-4">"Eu estava desempregada e desacreditada, mas o curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês. É um sonho!"</p>
              <p className="font-bold text-pink-600">Ana Paula, 29 anos - São Paulo/SP</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <p className="italic text-gray-700 mb-4">"Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, e a Mariana é uma excelente professora. Conquistei minha independência!"</p>
              <p className="font-bold text-pink-600">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <p className="italic text-gray-700 mb-4">"Em menos de 3 meses após o curso, já estava com a agenda lotada! A qualidade do ensino é incrível, e o suporte me deu toda a confiança que eu precisava."</p>
              <p className="font-bold text-pink-600">Carla Santos, 25 anos - Belo Horizonte/MG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação (CTA) */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Não Perca Mais Tempo! Torne-se Uma Nail Designer de Sucesso Hoje!
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Garanta seu acesso completo e comece sua jornada para faturar alto com unhas em 2025!
        </p>
        <div className="bg-yellow-300 text-purple-800 p-6 rounded-lg shadow-2xl inline-block mb-8 animate-pulse">
          <p className="text-3xl md:text-4xl font-bold">De <span className="line-through">R$199,90</span> por Apenas</p>
          <p className="text-5xl md:text-6xl font-extrabold mt-2">10x de R$9,90</p>
          <p className="text-3xl md:text-4xl font-bold">ou R$79,90 à vista!</p>
        </div>
        <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full text-2xl md:text-3xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg">
          Quero me Tornar uma Nail Designer Agora!
        </a>
        <p className="text-lg mt-6 font-light">Vagas Limitadas para as 10 Primeiras Alunas!</p>
      </section>

      {/* Seção de Garantia */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-8">
            Sua Satisfação Garantida ou Seu Dinheiro de Volta!
          </h2>
          <img src="/images/icon-guarantee.svg" alt="Garantia de 7 Dias" className="h-24 w-24 mx-auto mb-6 text-green-500"/>
          <p className="text-xl text-gray-700 leading-relaxed">
            Temos tanta certeza da qualidade do nosso curso que oferecemos uma <strong>garantia incondicional de 7 dias</strong>. Se por qualquer motivo você não se sentir satisfeita, basta solicitar o reembolso total, sem burocracia ou letras miúdas. Seu investimento está 100% seguro!
          </p>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section className="py-16 px-4 bg-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-12 text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Preciso de experiência prévia para fazer o curso?</h3>
              <p className="text-gray-700">Não! O curso foi desenvolvido do zero ao avançado, ideal para quem nunca teve contato com o mundo das unhas e para profissionais que buscam aprimoramento.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Preciso ter todos os materiais para começar o curso?</h3>
              <p className="text-gray-700">Não necessariamente. No curso, ensinamos detalhadamente quais materiais você precisará, onde comprá-los com os melhores preços e como montar seu kit inicial.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">O pagamento é único ou mensal?</h3>
              <p className="text-gray-700">O pagamento é único! Você paga apenas uma vez e tem acesso vitalício a todas as aulas, módulos e futuras atualizações do curso. Sem mensalidades ou taxas escondidas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Recebo certificados ao finalizar o curso?</h3>
              <p className="text-gray-700">Sim! Ao concluir os módulos, você receberá 20 certificados profissionais, que comprovam sua qualificação e são reconhecidos no mercado da beleza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p className="text-sm mb-2">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-sm">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>
    </div>
  );
}