import { Section, SectionEyebrow } from '@/components/ui'

const pillars = [
  {
    icon: '🌱',
    title: 'Padrões não surgem do nada',
    text: 'Tudo o que você sente tem uma origem. Comportamentos, reações e emoções repetitivas geralmente estão enraizados em experiências que ficaram sem ressignificação.',
  },
  {
    icon: '🌳',
    title: 'A família deixa marcas',
    text: 'Muito do que vivemos reflete histórias que vêm de gerações anteriores — lealdades invisíveis, dores não resolvidas, papéis que assumimos sem perceber.',
  },
  {
    icon: '🌿',
    title: 'A transformação é possível',
    text: 'Quando você entende de onde vêm seus padrões, começa a ter escolha. E com escolha, vem a leveza — não de ignorar, mas de compreender e se libertar.',
  },
]

export function ApproachSection() {
  return (
    <Section id="abordagem" background="accent" className="textured">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <SectionEyebrow>A Abordagem</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-4 tracking-tight">
            Um olhar diferente{' '}
            <em className="text-gradient not-italic">sobre o que você sente</em>
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto leading-relaxed">
            A terapia sistêmica integrativa não te coloca num rótulo. Ela olha para você
            como um todo — sua história, suas relações, seu corpo e sua emoção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll scale-up stagger-${i + 1} bg-white rounded-2xl p-8 shadow-sm border border-cream-200 hover:shadow-md transition-shadow`}
            >
              <span className="text-4xl block mb-5">{pillar.icon}</span>
              <h3 className="text-xl font-display font-semibold text-sage-900 mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sage-600 leading-relaxed text-[0.95rem]">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 animate-on-scroll">
          <div
            className="p-6 md:p-8 rounded-2xl border border-sage-200/80 text-center"
            style={{ background: 'rgba(64,77,53,0.06)' }}
          >
            <p className="text-sage-800 text-xl leading-relaxed font-display font-light tracking-tight">
              Não se trata de encontrar culpados.{' '}
              <em className="text-sage-700 not-italic">
                Trata-se de encontrar clareza — e a partir dela, liberdade.
              </em>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
