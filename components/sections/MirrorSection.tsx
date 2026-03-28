import { Section, SectionEyebrow } from '@/components/ui'

const patterns = [
  'Sente que carrega mais do que deveria',
  'Tem dificuldade em dizer "não" sem se sentir culpado(a)',
  'Se sente responsável pelo estado emocional dos outros',
  'Vive situações que parecem se repetir, sem entender por quê',
  'Se coloca em segundo plano com frequência',
  'Sente um cansaço que vai além do físico',
]

export function MirrorSection() {
  return (
    <Section id="espelho" background="muted" className="textured">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <SectionEyebrow>Você se reconhece?</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6 tracking-tight">
            Se você se identifica com{' '}
            <em className="text-gradient not-italic">algo assim…</em>
          </h2>
          <p className="text-lg text-sage-600 mb-12">
            Muitas pessoas chegam até a Andreza carregando exatamente isso:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
          {patterns.map((pattern, i) => (
            <div
              key={pattern}
              className={`animate-on-scroll scale-up stagger-${(i % 6) + 1} flex items-start gap-4 p-5 bg-white rounded-2xl border border-cream-200 shadow-sm`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-sage-600" />
              </div>
              <span className="text-sage-800 leading-snug">{pattern}</span>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll bg-sage-800 text-cream-100 rounded-2xl px-8 py-8 md:py-10">
          <p className="text-xl md:text-2xl font-display font-light leading-relaxed tracking-tight">
            Isso não é fraqueza.{' '}
            <em className="text-sage-300 not-italic">
              São padrões que podem ser compreendidos e transformados.
            </em>
          </p>
          <p className="mt-4 text-sage-400 text-base">
            Com o olhar certo, o que parece um peso pode se tornar o caminho para a leveza.
          </p>
        </div>
      </div>
    </Section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
