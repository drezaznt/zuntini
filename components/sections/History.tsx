import { Section, SectionEyebrow } from '@/components/ui'

const timeline = [
  {
    year: '2005',
    title: 'Formação em Farmácia',
    description: 'Graduação em Farmácia com pós-graduações em Farmacologia Clínica, Fitoterapia, Farmácia Hospitalar e MBA em Gestão Empresarial.',
  },
  {
    year: '2008',
    title: 'O início da jornada',
    description: 'Diagnosticada com retocolite ulcerativa, uma doença autoimune. A não aceitação do prognóstico iniciou o caminho do autoconhecimento.',
  },
  {
    year: '2014',
    title: 'A cura através do autoconhecimento',
    description: 'Após 6 anos de dedicação, conseguiu a retirada total das medicações sem recidiva. Prova de que a mudança interior transforma.',
  },
  {
    year: '2017',
    title: 'Início da transformação de vidas',
    description: 'Começou a dedicar-se a levar conhecimento e a possibilidade de uma vida mais leve para quem cruza seu caminho.',
  },
  {
    year: 'Hoje',
    title: '+20 mil horas de atendimentos',
    description: 'Múltiplas formações em Constelação Familiar, Thetahealing, Reiki, Medicina do Cacau e muito mais.',
  },
]

export function History() {
  return (
    <Section id="historia" background="accent" className="textured">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <div className="animate-on-scroll">
          <SectionEyebrow>Minha História</SectionEyebrow>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6 tracking-tight">
            Uma jornada de{' '}
            <em className="not-italic text-gradient">transformação</em>
          </h2>

          <div className="mb-8 space-y-4">
            <p className="text-sage-700 text-lg leading-relaxed">
              Nascida em Araras, interior de São Paulo, filha de pai agricultor e mãe
              dona de casa, tive o privilégio de crescer em um sítio em contato com a natureza.
            </p>
            <p className="text-sage-700 text-lg leading-relaxed">
              Antes de 2008 eu acreditava que a medicina diagnosticava e o medicamento
              curava. Quando comecei a me conhecer e ressignificar minhas crenças,
              consegui a cura e hoje digo:
            </p>
          </div>

          <blockquote className="border-l-4 border-sage-500 pl-6 py-4 bg-white/60 rounded-r-xl mb-8">
            <p className="text-xl md:text-2xl font-display font-light text-sage-800 italic tracking-tight">
              &ldquo;Sim, tudo é possível com a decisão da mudança&rdquo;
            </p>
          </blockquote>

          <p className="text-sage-700 text-lg leading-relaxed">
            Sou muito grata a tudo o que vivi até aqui, inclusive à doença, pois
            somente com essa bagagem é que hoje sou quem eu sou e posso falar com
            propriedade que sou uma pessoa muito mais leve.
          </p>
        </div>

        {/* Timeline com scroll stagger */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sage-300 via-sage-400 to-transparent" />

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`animate-on-scroll stagger-${Math.min(index + 1, 6)} relative pl-12`}
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center shadow-sage-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200 hover:shadow-sage-sm transition-shadow">
                  {/* Vetor 1 — ano em bold + label-upper, título em display font-semibold */}
                  <span className="label-upper text-sage-400">{item.year}</span>
                  <h3 className="text-base font-display font-semibold text-sage-900 mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
