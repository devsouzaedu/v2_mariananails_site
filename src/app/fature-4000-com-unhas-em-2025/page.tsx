"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Fature4000ComUnhasEm2025() {
  // Estados para fallback dos ícones
  const [iconGrowthError, setIconGrowthError] = useState(false);
  const [iconMoneyError, setIconMoneyError] = useState(false);
  const [iconCertificateError, setIconCertificateError] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Imagem de Topo */}
      <div className="relative w-full h-auto mb-2">
        <Image 
          src="/images/mariana_nails_rota_curso_topo2.png" // Imagem atualizada
          alt="Mariana Nails - Fature R$4000 com Unhas em 2025"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      {/* Cabeçalho Principal - Fundo Preto, Letras Amarelas */}
      <header className="bg-black text-[#ffcd10] py-8 px-2 text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#ffcd10]"> {/* Amarelo */}
          Torne-se uma Nail Designer de Sucesso e Fature <br className="hidden md:inline"/> +R$4.000 por Mês em 2025 com Mariana Nails!
        </h1>
        <p className="text-base md:text-lg font-light max-w-3xl mx-auto text-[#ffcd10] mb-2">
          Conquiste sua independência financeira, seja sua própria chefe e transforme sua paixão por unhas em uma carreira lucrativa e valorizada no mercado da beleza!
        </p>
      </header>

      {/* Seção de Benefícios - Fundo Branco, Letras Pretas */}
      <section className="py-8 px-2 bg-white border-b-4 border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-6">
            Por Que Escolher o Curso Mariana Nails?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-pink-300 flex flex-col items-center">
              {iconGrowthError ? (
                <span style={{ fontSize: '2rem' }}>📈</span>
              ) : (
                <img
                  src="/images/icon-growth.svg"
                  alt="Crescimento Profissional"
                  className="h-10 w-10 mb-2"
                  onError={() => setIconGrowthError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900">Do Zero ao Avançado</h3>
              <p className="text-gray-700 text-sm">
                Mesmo sem experiência, você aprenderá todas as técnicas para se tornar uma Nail Designer completa e confiante.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-pink-300 flex flex-col items-center">
              {iconMoneyError ? (
                <span style={{ fontSize: '2rem' }}>💰</span>
              ) : (
                <img
                  src="/images/icon-money.svg"
                  alt="Alta Renda"
                  className="h-10 w-10 mb-2"
                  onError={() => setIconMoneyError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fature +R$4.000/Mês</h3>
              <p className="text-gray-700 text-sm">
                Descubra como transformar suas habilidades em uma fonte de renda sólida e lucrativa, alcançando sua independência financeira.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-pink-300 flex flex-col items-center">
              {iconCertificateError ? (
                <span style={{ fontSize: '2rem' }}>🎓</span>
              ) : (
                <img
                  src="/images/icon-certificate.svg"
                  alt="Certificação Profissional"
                  className="h-10 w-10 mb-2"
                  onError={() => setIconCertificateError(true)}
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900">Certificação Reconhecida</h3>
              <p className="text-gray-700 text-sm">
                Receba 20 certificados profissionais que validarão suas habilidades e abrirão portas no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que o Curso Oferece - Fundo Preto, Letras Amarelas */}
      <section className="py-8 px-2 bg-black text-[#ffcd10] border-b-4 border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#ffcd10]">
            O Que Você Vai Aprender no Curso Mariana Nails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500">
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Módulos Completos e Didáticos</h3>
              <ul className="list-disc list-inside text-[#ffcd10] space-y-1 text-sm">
                <li>+100 aulas em vídeo, passo a passo, pensadas para iniciantes e avançadas.</li>
                <li>Técnicas de alongamento: Fibra de Vidro, Gel Moldado, Polygel e Gel na Tip.</li>
                <li>Cutilagem perfeita, Esmaltação em Gel e Tradicional.</li>
                <li>Manicure e Pedicure Profissional.</li>
                <li>Decoração de Unhas (Nail Art) e Francesinha.</li>
                <li>Remoção Segura e Manutenção.</li>
                <li>Marketing para Nail Designers: Como atrair clientes e precificar seus serviços.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500">
              <h3 className="text-xl font-bold mb-2 text-[#ffcd10]">Diferenciais Exclusivos</h3>
              <ul className="list-disc list-inside text-[#ffcd10] space-y-1 text-sm">
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

      {/* Seção de Bônus - Fundo Branco, Letras Pretas */}
      <section className="py-8 px-2 bg-white border-b-4 border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-6">
            Bônus Exclusivos Para Você (Vagas Limitadas!)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-300">
              <img src="/images/bonus-cilios.svg" alt="Bônus Extensão de Cílios" className="h-12 w-12 mx-auto mb-4 text-pink-500"/>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Curso de Extensão de Cílios</h3>
              <p className="text-gray-700 text-sm">Aprenda uma nova habilidade e amplie seus serviços com certificado exclusivo.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-300">
              <img src="/images/bonus-masculino.svg" alt="Bônus Manicure Masculina" className="h-12 w-12 mx-auto mb-4 text-pink-500"/>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Manicure Masculina</h3>
              <p className="text-gray-700 text-sm">Domine as técnicas para atender o público masculino com excelência.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-300">
              <img src="/images/bonus-spa.svg" alt="Bônus Spa dos Pés" className="h-12 w-12 mx-auto mb-4 text-pink-500"/>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Spa dos Pés Profissional</h3>
              <p className="text-gray-700 text-sm">Relaxe seus clientes e ofereça um serviço completo e diferenciado.</p>
            </div>
          </div>
          <p className="text-red-600 text-base font-semibold mt-4">Corre! Bônus Limitados e com Certificado!</p>
        </div>
      </section>

      {/* Seção de Depoimentos - Fundo Preto, Letras Amarelas */}
      <section className="py-8 px-2 bg-black text-[#ffcd10] border-b-4 border-pink-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#ffcd10]">
            Histórias de Sucesso Reais de Nossas Alunas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500">
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Eu estava desempregada e desacreditada, mas o curso da Mariana Nails mudou minha vida! Hoje tenho minha própria clientela e faturo mais de R$4.000 por mês. É um sonho!"</p>
              <p className="font-bold text-pink-400 text-xs">Ana Paula, 29 anos - São Paulo/SP</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500">
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Sempre amei unhas, mas nunca pensei que poderia viver disso. O curso é super didático, e a Mariana é uma excelente professora. Conquistei minha independência!"</p>
              <p className="font-bold text-pink-400 text-xs">Juliana Costa, 35 anos - Rio de Janeiro/RJ</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-xl border border-pink-500">
              <p className="italic mb-2 text-[#ffcd10] text-sm">"Em menos de 3 meses após o curso, já estava com a agenda lotada! A qualidade do ensino é incrível, e o suporte me deu toda a confiança que eu precisava."</p>
              <p className="font-bold text-pink-400 text-xs">Carla Santos, 25 anos - Belo Horizonte/MG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação (CTA) - Fundo Degradê original, texto branco/amarelo */}
      <section className="py-8 px-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center shadow-lg border-b-4 border-pink-200">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Não Perca Mais Tempo! Torne-se Uma Nail Designer de Sucesso Hoje!
        </h2>
        <p className="text-base md:text-lg mb-4 font-light">
          Garanta seu acesso completo e comece sua jornada para faturar alto com unhas em 2025!
        </p>
        <div className="bg-yellow-300 text-purple-800 p-4 rounded-lg shadow-2xl inline-block mb-4 animate-pulse border border-pink-500">
          <p className="text-2xl md:text-3xl font-bold">De <span className="line-through">R$199,90</span> por Apenas</p>
          <p className="text-4xl md:text-5xl font-extrabold mt-1">10x de R$9,90</p>
          <p className="text-2xl md:text-3xl font-bold">ou R$79,90 à vista!</p>
        </div>
        <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full text-xl md:text-2xl uppercase transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white">
          Quero me Tornar uma Nail Designer Agora!
        </a>
        <p className="text-base mt-4 font-light">Vagas Limitadas para as 10 Primeiras Alunas!</p>
      </section>

      {/* Seção de Garantia - Fundo Branco, Letras Pretas */}
      <section className="py-8 px-2 bg-white border-b-4 border-pink-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-4">
            Sua Satisfação Garantida ou Seu Dinheiro de Volta!
          </h2>
          <img src="/images/icon-guarantee.svg" alt="Garantia de 7 Dias" className="h-16 w-16 mx-auto mb-4 text-green-500"/>
          <p className="text-base text-gray-700 leading-relaxed">
            Temos tanta certeza da qualidade do nosso curso que oferecemos uma <strong>garantia incondicional de 7 dias</strong>. Se por qualquer motivo você não se sentir satisfeita, basta solicitar o reembolso total, sem burocracia ou letras miúdas. Seu investimento está 100% seguro!
          </p>
        </div>
      </section>

      {/* Seção de FAQ - Fundo Preto, Letras Amarelas */}
      <section className="py-8 px-2 bg-black text-[#ffcd10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#ffcd10] text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Preciso de experiência prévia para fazer o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Não! O curso foi desenvolvido do zero ao avançado, ideal para quem nunca teve contato com o mundo das unhas e para profissionais que buscam aprimoramento.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Preciso ter todos os materiais para começar o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Não necessariamente. No curso, ensinamos detalhadamente quais materiais você precisará, onde comprá-los com os melhores preços e como montar seu kit inicial.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">O pagamento é único ou mensal?</h3>
              <p className="text-[#ffcd10] text-sm">O pagamento é único! Você paga apenas uma vez e tem acesso vitalício a todas as aulas, módulos e futuras atualizações do curso. Sem mensalidades ou taxas escondidas.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-pink-500">
              <h3 className="text-lg font-bold mb-2 text-[#ffcd10]">Recebo certificados ao finalizar o curso?</h3>
              <p className="text-[#ffcd10] text-sm">Sim! Ao concluir os módulos, você receberá 20 certificados profissionais, que comprovam sua qualificação e são reconhecidos no mercado da beleza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Unhas do Curso */}
      <section className="py-8 px-2 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-6">
            Veja o que você vai aprender a fazer!
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'unhas_mariana_nails_curso (1).JPG',
              'unhas_mariana_nails_curso (2).jpg',
              'unhas_mariana_nails_curso (3).jpg',
              'unhas_mariana_nails_curso (4).jpg',
              'unhas_mariana_nails_curso (5).jpg',
              'unhas_mariana_nails_curso (6).jpg',
              'unhas_mariana_nails_curso (7).jpg',
              'unhas_mariana_nails_curso (8).jpg',
              'unhas_mariana_nails_curso (9).jpg',
              'unhas_mariana_nails_curso (10).jpg',
              'unhas_mariana_nails_curso (11).JPG',
              'unhas_mariana_nails_curso (12).JPG',
            ].map((img, idx) => (
              <div key={img} className="overflow-hidden rounded-lg border-2 border-pink-200 shadow-sm hover:shadow-lg transition-all">
                <img
                  src={`/images/${img}`}
                  alt={`Unhas do curso Mariana Nails ${idx + 1}`}
                  className="w-full h-40 object-cover object-center hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé - Fundo Preto */}
      <footer className="bg-black text-white py-4 px-2 text-center">
        <p className="text-xs mb-1">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-xs">Suporte: <a href="mailto:suporte@mariananails.com" className="text-pink-400 hover:underline">suporte@mariananails.com</a></p>
      </footer>
    </div>
  );
}