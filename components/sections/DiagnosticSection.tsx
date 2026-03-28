'use client'

import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Section, SectionEyebrow, WhatsAppIcon } from '@/components/ui'
import { siteConfig } from '@/lib/seo'
import { clsx } from 'clsx'

const QUESTIONS_PER_AXIS = 5

const axes = [
  {
    label: 'Autocuidado',
    questions: [
      'Com que frequência você coloca as necessidades dos outros antes das suas?',
      'Sente dificuldade em dizer "não" sem se sentir culpado(a)?',
      'Quando faz algo apenas para você, sente que "deveria estar fazendo outra coisa"?',
      'Você se esquece de cuidar de si mesma por estar sempre cuidando dos outros?',
      'Tem dificuldade em acreditar que merece atenção e cuidado tanto quanto as outras pessoas?',
    ],
  },
  {
    label: 'Relacionamentos',
    questions: [
      'Sente que assume a responsabilidade emocional das pessoas ao seu redor?',
      'Tem dificuldade em estabelecer limites nos seus relacionamentos?',
      'Percebe que seus relacionamentos frequentemente te deixam esgotado(a)?',
      'Você se sente responsável pelo humor ou bem-estar de quem está perto de você?',
      'Com que frequência evita conflitos mesmo quando se sente prejudicado(a) ou desrespeitado(a)?',
    ],
  },
  {
    label: 'Padrões Familiares',
    questions: [
      'Percebe que repete situações ou padrões que não quer repetir?',
      'Sente que carrega histórias, dores ou responsabilidades que não são suas?',
      'Tem dificuldade em se distanciar emocionalmente de quem te faz mal?',
      'Percebe que certos temas na sua família geram tensão ou são evitados?',
      'Reage de forma mais intensa do que esperaria em certas situações emocionais?',
    ],
  },
  {
    label: 'Energia Emocional',
    questions: [
      'Sente um cansaço que vai além do físico, como se carregasse um peso interior?',
      'Tem dificuldade em sentir leveza ou alegria genuína no dia a dia?',
      'Sente que está "funcionando no automático" na maior parte do tempo?',
      'Tem pensamentos recorrentes de que algo está errado, mas não sabe o quê?',
      'Sente que merece viver com mais leveza do que está vivendo agora?',
    ],
  },
]

const scaleLabels = ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre']

type Step = 'q0' | 'q1' | 'q2' | 'q3' | 'contact' | 'result'
const STEPS: Step[] = ['q0', 'q1', 'q2', 'q3', 'contact', 'result']
const isQuestionStep = (step: Step): boolean =>
  step !== 'contact' && step !== 'result'

function getResult(score: number) {
  if (score <= 40) return {
    level: 'Padrões Sutis',
    color: 'text-sage-600',
    bar: 'bg-sage-400',
    message: 'Você já tem uma boa consciência de si mesma. Ainda assim, alguns padrões podem estar atuando de forma sutil. Uma conversa terapêutica pode trazer ainda mais clareza e leveza.',
  }
  if (score <= 60) return {
    level: 'Padrões Ativos',
    color: 'text-earth-600',
    bar: 'bg-earth-400',
    message: 'Você carrega padrões que já estão interferindo no seu bem-estar. Eles são reais, mas têm origem e podem ser transformados. Você não precisa continuar assim.',
  }
  if (score <= 80) return {
    level: 'Padrões Intensos',
    color: 'text-orange-600',
    bar: 'bg-orange-400',
    message: 'Seus padrões emocionais estão bastante ativos e provavelmente afetam várias áreas da sua vida. Isso pede atenção — e cuidado. Você merece esse espaço.',
  }
  return {
    level: 'Padrões Muito Intensos',
    color: 'text-red-600',
    bar: 'bg-red-400',
    message: 'Você está carregando muito. Esses padrões precisam de um olhar cuidadoso e especializado. Um processo terapêutico pode ser um ponto de virada na sua vida.',
  }
}

function DiagnosticModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>('q0')
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [contact, setContact] = useState({ name: '', email: '' })

  const axisIndex = STEPS.indexOf(step)

  const currentAxisQuestions = useMemo(() =>
    isQuestionStep(step)
      ? axes[axisIndex].questions.map((q, i) => ({ q, globalIndex: axisIndex * QUESTIONS_PER_AXIS + i }))
      : [],
    [step, axisIndex]
  )

  const { totalScore, axisScores } = useMemo(() => {
    const scores = axes.map((_, i) =>
      Array.from({ length: QUESTIONS_PER_AXIS }, (_, j) => answers[i * QUESTIONS_PER_AXIS + j] ?? 0)
        .reduce((sum, v) => sum + v, 0)
    )
    return { axisScores: scores, totalScore: scores.reduce((a, b) => a + b, 0) }
  }, [answers])

  const result = useMemo(() => getResult(totalScore), [totalScore])

  const canProceed = step === 'contact'
    ? contact.name.trim() !== '' && contact.email.trim() !== ''
    : currentAxisQuestions.every(({ globalIndex }) => answers[globalIndex] !== undefined)

  const totalAnswered = Object.keys(answers).length
  const progressPct = step === 'result' ? 100
    : step === 'contact' ? 95
    : Math.round((totalAnswered / (axes.length * QUESTIONS_PER_AXIS)) * 90)

  const goNext = () => {
    const idx = STEPS.indexOf(step)
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1])
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-cream-50 w-full sm:max-w-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[95dvh] sm:max-h-[90vh] rounded-t-3xl overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <div className="flex-1">
            <p className="text-xs text-sage-500 font-medium uppercase tracking-wider mb-1">
              {step === 'contact' ? 'Quase lá'
                : step === 'result' ? 'Seu resultado'
                : `Eixo ${axisIndex + 1} de ${axes.length} — ${axes[axisIndex].label}`}
            </p>
            <div className="w-full h-1.5 bg-sage-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 text-sage-400 hover:text-sage-700 transition-colors rounded-lg"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 pb-2">
          {isQuestionStep(step) && (
            <div className="space-y-6 py-2">
              <p className="text-sage-500 text-sm italic mb-2">
                Escala: 1 = Nunca &nbsp;→&nbsp; 5 = Sempre
              </p>
              {currentAxisQuestions.map(({ q, globalIndex }) => (
                <div key={globalIndex} className="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
                  <p className="text-sage-800 font-medium mb-4 leading-snug">
                    <span className="text-sage-400 text-sm mr-1">{globalIndex + 1}.</span> {q}
                  </p>
                  <div className="flex gap-2 justify-between">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => setAnswers((prev) => ({ ...prev, [globalIndex]: val }))}
                        className={clsx(
                          'flex-1 flex flex-col items-center gap-1 py-2 rounded-xl border-2 transition-all text-sm font-semibold',
                          answers[globalIndex] === val
                            ? 'bg-sage-600 border-sage-600 text-white'
                            : 'bg-cream-50 border-cream-200 text-sage-600 hover:border-sage-400'
                        )}
                      >
                        {val}
                        <span className="text-[9px] font-normal leading-none hidden sm:block opacity-70">
                          {scaleLabels[val - 1]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 'contact' && (
            <div className="py-4">
              <h3 className="text-2xl font-display font-light text-sage-900 mb-2">
                Para onde enviamos seu resultado?
              </h3>
              <p className="text-sage-600 mb-6">
                Preencha abaixo e veja sua análise na próxima tela.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="diag-name" className="block text-sm font-medium text-sage-700 mb-1.5">
                    Seu nome
                  </label>
                  <input
                    id="diag-name"
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    placeholder="Como posso te chamar?"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="diag-email" className="block text-sm font-medium text-sage-700 mb-1.5">
                    Seu e-mail
                  </label>
                  <input
                    id="diag-email"
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all"
                  />
                </div>
                <p className="text-sage-400 text-xs">
                  Seus dados são usados apenas para personalizar sua experiência. Sem spam.
                </p>
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="py-4 space-y-6">
              <div>
                <p className="text-sage-600 text-sm mb-1">
                  Olá, <strong className="text-sage-800">{contact.name}</strong>! Seu resultado indica:
                </p>
                <h3 className={clsx('text-3xl font-display font-semibold mb-3', result.color)}>
                  {result.level}
                </h3>
                <div className="w-full h-3 bg-sage-100 rounded-full overflow-hidden mb-4">
                  <div
                    className={clsx('h-full rounded-full transition-all duration-1000', result.bar)}
                    style={{ width: `${Math.round((totalScore / 100) * 100)}%` }}
                  />
                </div>
                <p className="text-sage-700 leading-relaxed">{result.message}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-700 mb-3">
                  Análise por área
                </h4>
                <div className="space-y-3">
                  {axes.map((axis, i) => {
                    const pct = Math.round((axisScores[i] / (QUESTIONS_PER_AXIS * 5)) * 100)
                    return (
                      <div key={axis.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-sage-700 font-medium">{axis.label}</span>
                          <span className="text-sage-500">{pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-sage-100 rounded-full overflow-hidden">
                          <div className="h-full bg-sage-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-sage-50 rounded-2xl p-5 border border-sage-200">
                <p className="text-sage-800 font-medium mb-3">
                  Quer aprofundar isso com a Andreza?
                </p>
                <Link
                  href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Olá, Andreza! Fiz a autoavaliação e meu resultado foi "${result.level}". Gostaria de conversar sobre meu processo. Me chamo ${contact.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={onClose}
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Quero aprofundar isso com a Andreza
                </Link>
              </div>
            </div>
          )}
        </div>

        {step !== 'result' && (
          <div className="px-6 py-4 border-t border-cream-200 flex-shrink-0">
            <button
              onClick={goNext}
              disabled={!canProceed}
              className={clsx(
                'w-full py-4 rounded-xl font-medium text-base transition-all',
                canProceed
                  ? 'bg-sage-700 text-white hover:bg-sage-800 shadow-md'
                  : 'bg-sage-100 text-sage-400 cursor-not-allowed'
              )}
            >
              {step === 'contact' ? 'Ver meu resultado' : 'Próxima parte →'}
            </button>
            {!canProceed && isQuestionStep(step) && (
              <p className="text-center text-sage-400 text-xs mt-2">
                Responda todas as perguntas para continuar
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function DiagnosticSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Section id="autoavaliacao">
        <div className="max-w-2xl mx-auto text-center">
          <SectionEyebrow>
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              2 minutos
            </span>
          </SectionEyebrow>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-4">
            Descubra o que pode estar{' '}
            <span className="text-gradient font-normal">por trás disso</span>
          </h2>

          <p className="text-lg text-sage-700 mb-8 leading-relaxed">
            Responda algumas perguntas simples e receba uma análise inicial dos seus padrões emocionais.
            Rápido, gratuito e sem julgamentos.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            Fazer minha autoavaliação agora
          </button>

          <p className="mt-4 text-sage-400 text-sm">
            20 perguntas · gratuito · resultado imediato
          </p>
        </div>
      </Section>

      {open && createPortal(<DiagnosticModal onClose={() => setOpen(false)} />, document.body)}
    </>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}
