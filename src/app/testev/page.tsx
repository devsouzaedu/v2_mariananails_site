import Image from 'next/image'

export const metadata = {
  title: 'Teste Victor | Mariana Nails',
  description: 'Página de teste do Victor com muito conteúdo sobre linguiça',
}

export default function TesteVictorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-red-600 mb-4 font-handwritten">
            🌭 Victor e a Linguiça Suprema 🌭
          </h1>
          <p className="text-2xl text-gray-700 font-semibold">
            Uma jornada épica através do mundo das linguiças
          </p>
        </div>

        {/* Seção Principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">A História de Victor</h2>
            <p className="text-lg text-gray-700 mb-4">
              Victor sempre foi um apaixonado por linguiças. Desde pequeno, quando sua avó italiana 
              preparava aquelas linguiças artesanais com temperos secretos, ele sabia que esse seria 
              seu destino. A linguiça não era apenas comida para Victor - era arte, era paixão, era vida!
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
              Aos 15 anos, Victor já dominava 47 tipos diferentes de linguiça: linguiça calabresa, 
              linguiça toscana, linguiça portuguesa, linguiça alemã, linguiça argentina, linguiça 
              mexicana com pimenta jalapeño, linguiça francesa com ervas finas, linguiça espanhola 
              com páprica defumada, e até mesmo a exótica linguiça tailandesa com capim-limão.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Mas Victor não parou por aí. Ele criou sua própria linguiça especial: a "Linguiça 
              Victor Supreme Deluxe Ultra Mega Power", feita com uma mistura secreta de 23 temperos 
              diferentes, carne suína selecionada, um toque de vinho tinto italiano, e o ingrediente 
              secreto que só ele conhece (dizem que é amor puro destilado).
            </p>
          </div>

          {/* Grid de Linguiças */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-4">🇧🇷 Linguiças Brasileiras do Victor</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Linguiça Calabresa Tradicional Victor</li>
                <li>• Linguiça Toscana com Queijo Victor</li>
                <li>• Linguiça de Frango Temperada Victor</li>
                <li>• Linguiça Artesanal Mineira Victor</li>
                <li>• Linguiça Defumada Gaúcha Victor</li>
                <li>• Linguiça Apimentada Nordestina Victor</li>
                <li>• Linguiça de Porco Caipira Victor</li>
                <li>• Linguiça Vegana Especial Victor</li>
              </ul>
            </div>

            <div className="bg-orange-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">🌍 Linguiças Internacionais do Victor</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Chorizo Espanhol Victor Style</li>
                <li>• Bratwurst Alemã Victor Edition</li>
                <li>• Salsiccia Italiana Victor Premium</li>
                <li>• Merguez Francesa Victor Gourmet</li>
                <li>• Kielbasa Polonesa Victor Special</li>
                <li>• Linguiça Portuguesa Victor Tradicional</li>
                <li>• Sausage Inglesa Victor Classic</li>
                <li>• Linguiça Mexicana Victor Picante</li>
              </ul>
            </div>
          </div>

          {/* Receita Secreta */}
          <div className="bg-yellow-100 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-yellow-800 mb-6">📜 A Receita Secreta de Victor</h3>
            <p className="text-lg text-gray-700 mb-4">
              Depois de anos de pesquisa e experimentação, Victor desenvolveu a receita perfeita. 
              Ele viajou por 32 países, estudou com mestres linguiceiros centenários, meditou 
              por 40 dias em uma montanha na Itália comendo apenas linguiça, e finalmente 
              descobriu a fórmula mágica.
            </p>
            
            <div className="bg-white rounded-lg p-6 mt-4">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Ingredientes da Linguiça Victor Supreme:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-1">
                  <li>• 2kg de carne suína premium</li>
                  <li>• 500g de toucinho defumado</li>
                  <li>• Sal marinho do Himalaia</li>
                  <li>• Pimenta-do-reino moída na hora</li>
                  <li>• Alho roxo orgânico</li>
                  <li>• Vinho tinto reserva especial</li>
                  <li>• Ervas finas francesas</li>
                  <li>• Páprica doce húngara</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Cominho egípcio autêntico</li>
                  <li>• Orégano grego selvagem</li>
                  <li>• Tomilho fresco do jardim</li>
                  <li>• Pimenta calabresa artesanal</li>
                  <li>• Açúcar mascavo orgânico</li>
                  <li>• Tripa natural de cordeiro</li>
                  <li>• E o ingrediente secreto de Victor...</li>
                  <li>• 💖 Uma pitada de amor puro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academia de Linguiças */}
          <div className="bg-purple-100 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-purple-800 mb-6">🎓 Academia Victor de Linguiças</h3>
            <p className="text-lg text-gray-700 mb-4">
              Victor não guardou seu conhecimento para si. Ele fundou a "Academia Victor de Linguiças", 
              onde ensina a arte milenar da fabricação de linguiças para estudantes do mundo inteiro. 
              Já formou mais de 10.000 linguiceiros profissionais!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🥇</div>
                <h4 className="font-bold text-purple-700">Curso Básico</h4>
                <p className="text-sm text-gray-600">10 tipos de linguiça</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-bold text-purple-700">Curso Avançado</h4>
                <p className="text-sm text-gray-600">50 tipos de linguiça</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👑</div>
                <h4 className="font-bold text-purple-700">Curso Master</h4>
                <p className="text-sm text-gray-600">200+ tipos de linguiça</p>
              </div>
            </div>
          </div>

          {/* Curiosidades */}
          <div className="bg-green-100 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-green-800 mb-6">🤔 Curiosidades sobre Victor e suas Linguiças</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                🌭 Victor já comeu linguiça no café da manhã, almoço e jantar por 365 dias seguidos 
                (foi um experimento científico para testar os limites do prazer gastronômico).
              </p>
              <p>
                🏃‍♂️ Ele correu uma maratona inteira comendo linguiça a cada quilômetro. Terminou em 
                primeiro lugar e ainda estava com fome para mais linguiça.
              </p>
              <p>
                🎵 Victor compôs 47 músicas sobre linguiça, incluindo a famosa "Sinfonia da Linguiça 
                em Dó Maior" que foi executada pela Orquestra Sinfônica de Viena.
              </p>
              <p>
                📚 Ele escreveu 12 livros sobre linguiça, sendo o mais famoso "50 Tons de Linguiça: 
                Uma Jornada Sensorial pelo Mundo dos Embutidos".
              </p>
              <p>
                🏠 A casa de Victor tem formato de linguiça gigante e pode ser vista do espaço. 
                A NASA usa como ponto de referência para navegação espacial.
              </p>
              <p>
                🦸‍♂️ Victor tem superpoderes relacionados à linguiça: consegue identificar qualquer 
                tipo de linguiça apenas pelo cheiro a 5km de distância.
              </p>
            </div>
          </div>

          {/* Festival da Linguiça */}
          <div className="bg-pink-100 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-pink-800 mb-6">🎪 Festival Anual da Linguiça Victor</h3>
            <p className="text-lg text-gray-700 mb-4">
              Todo ano, Victor organiza o maior festival de linguiça do mundo. O evento dura 7 dias 
              e 7 noites, com degustação de mais de 1.000 tipos diferentes de linguiça, shows 
              musicais temáticos, competições de comer linguiça, e até casamentos temáticos onde 
              os noivos trocam anéis feitos de linguiça (comestível, é claro).
            </p>
            
            <div className="bg-white rounded-lg p-6 mt-4">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Atrações do Festival:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>🎪 Circo da Linguiça Voadora</li>
                  <li>🎠 Carrossel de Linguiças Gigantes</li>
                  <li>🎢 Montanha-russa Linguiça Express</li>
                  <li>🎯 Tiro ao alvo com linguiças</li>
                  <li>🏊‍♂️ Piscina de molho de linguiça</li>
                </ul>
                <ul className="space-y-2">
                  <li>🎭 Teatro Musical da Linguiça</li>
                  <li>🎨 Oficina de Arte com Linguiça</li>
                  <li>🧘‍♂️ Yoga da Linguiça Zen</li>
                  <li>💃 Dança da Linguiça Flamenca</li>
                  <li>🏆 Campeonato Mundial de Linguiça</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão Épica */}
          <div className="bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-red-800 mb-6">🌟 Victor: O Lendário Mestre das Linguiças 🌟</h3>
            <p className="text-xl text-gray-700 mb-4">
              E assim, Victor continua sua jornada épica pelo universo infinito das linguiças, 
              espalhando alegria, sabor e muito amor por onde passa. Sua missão é clara: 
              fazer do mundo um lugar mais saboroso, uma linguiça de cada vez.
            </p>
            <p className="text-2xl font-bold text-orange-600">
              🌭 "A vida é como uma linguiça: quanto mais tempero você coloca, mais saborosa ela fica!" 🌭
            </p>
            <p className="text-lg text-gray-600 mt-4 italic">
              - Victor, O Grande Mestre das Linguiças
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
