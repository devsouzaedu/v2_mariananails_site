'use client'

import { useState } from 'react'
import { Quiz as QuizType, QuizResposta } from '@/types/database.types'
import { createClient } from '@/lib/supabase/client'
import { CheckCircle, XCircle, Brain } from 'lucide-react'

interface QuizProps {
  quiz: QuizType
  userId: string
  respostaExistente?: QuizResposta
  onComplete: () => void
}

export default function Quiz({ quiz, userId, respostaExistente, onComplete }: QuizProps) {
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(
    respostaExistente?.resposta_escolhida || null
  )
  const [respondido, setRespondido] = useState(!!respostaExistente)
  const [correto, setCorreto] = useState(respostaExistente?.correta || false)
  const [loading, setLoading] = useState(false)

  // Embaralhar respostas para não ficar sempre na mesma ordem
  const respostas = [quiz.resposta_correta, quiz.resposta_2, quiz.resposta_3].sort(
    () => Math.random() - 0.5
  )

  const handleResposta = async (resposta: string) => {
    if (respondido) return

    setRespostaSelecionada(resposta)
    setLoading(true)

    const estaCorreto = resposta === quiz.resposta_correta
    setCorreto(estaCorreto)
    setRespondido(true)

    // Salvar resposta no banco
    const supabase = createClient()
    await supabase.from('quiz_respostas').insert({
      user_id: userId,
      quiz_id: quiz.id,
      resposta_escolhida: resposta,
      correta: estaCorreto,
    })

    setLoading(false)

    // Aguardar 2 segundos antes de chamar onComplete
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 my-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
          <Brain className="text-purple-500" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Quiz - {quiz.modulo}</h3>
          <p className="text-zinc-400 text-sm">Teste seus conhecimentos!</p>
        </div>
      </div>

      {/* Pergunta */}
      <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-5 mb-6">
        <p className="text-white text-lg font-medium leading-relaxed">{quiz.pergunta}</p>
      </div>

      {/* Respostas */}
      <div className="space-y-3">
        {respostas.map((resposta, index) => {
          const isSelected = respostaSelecionada === resposta
          const isCorrect = resposta === quiz.resposta_correta
          const showResult = respondido

          let className =
            'w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between group '

          if (!respondido) {
            className +=
              'border-zinc-700 bg-zinc-800/50 hover:border-pink-500 hover:bg-zinc-800 cursor-pointer'
          } else if (isSelected && isCorrect) {
            className += 'border-green-500 bg-green-500/10'
          } else if (isSelected && !isCorrect) {
            className += 'border-red-500 bg-red-500/10'
          } else if (isCorrect) {
            className += 'border-green-500 bg-green-500/10'
          } else {
            className += 'border-zinc-700 bg-zinc-800/30 opacity-50'
          }

          return (
            <button
              key={index}
              onClick={() => handleResposta(resposta)}
              disabled={respondido || loading}
              className={className}
            >
              <span className="text-white font-medium">{resposta}</span>

              {showResult && isCorrect && (
                <CheckCircle className="text-green-500" size={24} />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircle className="text-red-500" size={24} />
              )}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {respondido && (
        <div
          className={`mt-6 p-4 rounded-lg border-2 ${
            correto
              ? 'border-green-500 bg-green-500/10'
              : 'border-yellow-500 bg-yellow-500/10'
          }`}
        >
          <p className={`font-semibold ${correto ? 'text-green-400' : 'text-yellow-400'}`}>
            {correto
              ? '🎉 Parabéns! Você acertou!'
              : '📚 Ops! Revise o conteúdo e continue aprendendo!'}
          </p>
          <p className="text-zinc-300 text-sm mt-1">
            {correto
              ? 'Continue assim, você está indo muito bem!'
              : 'A resposta correta era: ' + quiz.resposta_correta}
          </p>
        </div>
      )}
    </div>
  )
}

