"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { generateEventId } from '@/lib/meta/metaIds';

// Declaração global para dataLayer (GTM)
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Forçar renderização dinâmica (evita prerender)
export const dynamic = 'force-dynamic';

// Componente que usa useSearchParams (precisa estar em Suspense)
function ObrigadoContent() {
  const searchParams = useSearchParams();
  const [transactionData, setTransactionData] = useState({
    transactionId: '',
    value: 50.00,
    currency: 'BRL',
    productName: 'Curso Mariana Nails - Fature +R$4000/Mês'
  });


  // Capturar dados da transação da URL (enviados pela Kiwify)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Kiwify envia alguns parâmetros via URL
      const transId = searchParams?.get('transaction_id') || 
                      searchParams?.get('order_id') || 
                      searchParams?.get('txn_id') ||
                      generateEventId();
      
      const orderValue = searchParams?.get('order_value') || 
                         searchParams?.get('amount') || 
                         '50.00';
      
      const productName = searchParams?.get('product_name') || 
                          'Curso Mariana Nails - Fature +R$4000/Mês';

      setTransactionData({
        transactionId: transId,
        value: parseFloat(orderValue),
        currency: 'BRL',
        productName: productName
      });

      console.log('Dados da transação capturados:', {
        transactionId: transId,
        value: orderValue,
        productName: productName
      });
    }
  }, [searchParams]);

  // Disparar evento Purchase via dataLayer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && transactionData.transactionId) {
        // Reutilizar event_id do checkout ou gerar novo
        const eventId = searchParams?.get('event_id') || generateEventId();
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'purchase',
          event_id: eventId,
          value: transactionData.value,
          currency: transactionData.currency,
          transaction_id: transactionData.transactionId
        });
        
        console.log('✅ Evento purchase enviado via dataLayer:', {
          event_id: eventId,
          value: transactionData.value,
          currency: transactionData.currency,
          transaction_id: transactionData.transactionId
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [transactionData, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Container Principal */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Ícone de Sucesso com Animação */}
        <div className="text-center mb-8 animate-bounce">
          <div className="inline-block bg-green-500 rounded-full p-6 mb-4">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffcd10] mb-4">
            🎉 Parabéns! Sua Compra Foi Confirmada!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2">
            Bem-vinda à Família Mariana Nails! 💎
          </p>
          <p className="text-lg text-gray-300">
            Sua jornada para faturar +R$4.000/mês começa agora!
          </p>
        </div>

        {/* Card de Confirmação */}
        <div className="bg-gray-900 border-2 border-[#ffcd10] rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-6xl mb-4 block">✅</span>
            <h2 className="text-2xl font-bold text-[#ffcd10] mb-2">
              Pagamento Confirmado com Sucesso!
            </h2>
            <p className="text-gray-300 text-sm">
              {transactionData.transactionId && (
                <>ID da Transação: <span className="text-[#ffcd10] font-mono">{transactionData.transactionId}</span></>
              )}
            </p>
          </div>

          {/* Próximos Passos */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-xl font-bold text-[#ffcd10] mb-4 text-center">
              📋 Próximos Passos:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start bg-black/50 p-4 rounded-lg">
                <span className="text-3xl mr-4 flex-shrink-0">📧</span>
                <div>
                  <h4 className="font-bold text-white mb-1">1. Confira seu E-mail</h4>
                  <p className="text-gray-300 text-sm">
                    Você receberá um e-mail com todas as informações de acesso ao curso e seus dados de login.
                    <span className="text-[#ffcd10] block mt-1">⚠️ Verifique também a caixa de SPAM/Lixo Eletrônico</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-black/50 p-4 rounded-lg">
                <span className="text-3xl mr-4 flex-shrink-0">🎓</span>
                <div>
                  <h4 className="font-bold text-white mb-1">2. Acesse a Plataforma</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Entre na plataforma de ensino e comece suas aulas imediatamente. Seu acesso é VITALÍCIO!
                  </p>
                  <a 
                    href="/plataforma/login" 
                    className="inline-block bg-[#ffcd10] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 ACESSAR PLATAFORMA AGORA
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-black/50 p-4 rounded-lg">
                <span className="text-3xl mr-4 flex-shrink-0">💬</span>
                <div>
                  <h4 className="font-bold text-white mb-1">3. Entre no Grupo VIP do WhatsApp</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Junte-se a mais de 200 alunas ativas, tire dúvidas e receba suporte direto da Mariana!
                  </p>
                  <a 
                    href="https://chat.whatsapp.com/SEU_LINK_DO_GRUPO" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💬 ENTRAR NO GRUPO AGORA
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-black/50 p-4 rounded-lg">
                <span className="text-3xl mr-4 flex-shrink-0">📄</span>
                <div>
                  <h4 className="font-bold text-white mb-1">4. Baixe Seus Certificados</h4>
                  <p className="text-gray-300 text-sm">
                    Após concluir os módulos, você terá acesso a 3 certificados internacionais para baixar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* O que está incluso */}
        <div className="bg-gray-900 border-2 border-[#E4B7B2] rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#E4B7B2] mb-6 text-center">
            ✨ O Que Está Incluso no Seu Curso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Acesso Vitalício ao Curso</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>+30 Videoaulas Práticas</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>3 Certificados Internacionais</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Grupo VIP no WhatsApp</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Suporte 24 Horas</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Material em PDF</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Atualizações Gratuitas</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffcd10] text-2xl mr-3">✅</span>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-green-900/30 border-2 border-green-500 rounded-2xl p-6 mb-8 text-center">
          <span className="text-5xl block mb-3">🛡️</span>
          <h3 className="text-xl font-bold text-green-400 mb-2">
            Garantia de 7 Dias ou Seu Dinheiro de Volta
          </h3>
          <p className="text-gray-300 text-sm">
            Se por qualquer motivo você não ficar satisfeita com o curso, basta solicitar o reembolso 
            em até 7 dias e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia!
          </p>
        </div>

        {/* Suporte */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-[#ffcd10] mb-3">
            💬 Precisa de Ajuda?
          </h3>
          <p className="text-gray-300 mb-4">
            Nossa equipe está pronta para te ajudar com qualquer dúvida!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:suporte@mariananails.com"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              📧 suporte@mariananails.com
            </a>
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20acabei%20de%20comprar%20o%20curso%20e%20preciso%20de%20ajuda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              💬 WhatsApp Suporte
            </a>
          </div>
        </div>

        {/* Mensagem Final */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#ffcd10]/10 to-[#E4B7B2]/10 rounded-2xl border border-[#ffcd10]/30">
          <p className="text-xl text-white mb-2">
            🌟 <strong className="text-[#ffcd10]">Estamos muito felizes por ter você conosco!</strong> 🌟
          </p>
          <p className="text-gray-300">
            Prepare-se para transformar sua vida e alcançar a independência financeira 
            que você sempre sonhou. Vamos juntas nessa jornada! 💪✨
          </p>
          <p className="text-[#E4B7B2] font-bold mt-4 text-lg">
            Com carinho, <br />
            Mariana Nails 💅
          </p>
        </div>

      </div>

      {/* Rodapé */}
      <footer className="bg-black text-white py-6 px-6 text-center border-t border-gray-800 mt-12">
        <p className="text-sm mb-2">COPYRIGHT 2025 – Mariana Nails – Todos os direitos reservados</p>
        <p className="text-sm">
          Suporte: <a href="mailto:suporte@mariananails.com" className="text-[#ffcd10] hover:underline">suporte@mariananails.com</a>
        </p>
      </footer>
    </div>
  );
}

// Componente principal com Suspense
export default function ObrigadoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#ffcd10] mx-auto mb-4"></div>
          <p className="text-xl text-[#ffcd10]">Carregando...</p>
        </div>
      </div>
    }>
      <ObrigadoContent />
    </Suspense>
  );
}

