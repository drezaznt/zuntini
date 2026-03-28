import { Section, SectionEyebrow } from '@/components/ui'

const steps = [
  {
    number: '01',
    title: 'Você entende seus padrões',
    description:
      'Juntas, olhamos para o que se repete na sua vida — reações, relacionamentos, emoções — e identificamos de onde vêm.',
  },
  {
    number: '02',
    title: 'Começa a enxergar com mais clareza',
    description:
      'O que antes parecia confuso ou inevitável começa a fazer sentido. E com sentido, vem a calma.',
  },
  {
    number: '03',
    title: 'Aprende a se posicionar',
    description:
      'Você desenvolve a capacidade de dizer "não" sem culpa, de se colocar em primeiro lugar sem egoísmo.',
  },
  {
    number: '04',
    title: 'Vive com mais leveza',
    description:
      'Os relacionamentos mudam. A energia muda. A maneira como você se sente ao acordar muda. Você muda — de dentro para fora.',
  },
]

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="textured">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <SectionEyebrow>O Processo</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-4 tracking-tight">
            Como funciona na prática
          </h2>
          <p className="text-lg text-sage-600 max-w-xl mx-auto">
            Cada pessoa tem seu tempo e seu caminho. Mas o processo costuma seguir uma direção natural:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll scale-up stagger-${i + 1} relative bg-white rounded-2xl p-8 border border-cream-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
            >
              {/* Número decorativo — Cormorant font-bold enorme = contraste de peso visual */}
              <span className="absolute -top-3 -right-1 text-[7rem] font-display font-bold text-sage-100/80 select-none pointer-events-none leading-none">
                {step.number}
              </span>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-sage-600 text-white flex items-center justify-center mb-5">
                  <span className="label-upper text-white text-[0.65rem]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-sage-900 mb-3 leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sage-600 leading-relaxed text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
