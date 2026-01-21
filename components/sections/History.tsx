import Image from 'next/image'
import { Section } from '@/components/ui'

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
    <Section id="historia" background="accent">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Conteúdo */}
        <div>
          <span className="text-sage-600 font-medium text-sm uppercase tracking-wider mb-4 block">
            Minha História
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6">
            Uma jornada de{' '}
            <span className="font-normal text-gradient">transformação</span>
          </h2>

          <div className="mb-8">
            <p className="text-sage-700 text-lg leading-relaxed mb-4">
              Nascida em Araras, interior de São Paulo, filha de pai agricultor e mãe 
              dona de casa, tive o privilégio de crescer em um sítio em contato com a natureza.
            </p>
            <p className="text-sage-700 text-lg leading-relaxed">
              Antes de 2008 eu acreditava que a medicina diagnosticava e o medicamento 
              curava. Quando comecei a me conhecer e ressignificar minhas crenças, 
              consegui a cura e hoje digo:
            </p>
          </div>

          <blockquote className="border-l-4 border-sage-500 pl-6 py-4 bg-white/50 rounded-r-xl mb-8">
            <p className="text-xl md:text-2xl font-display text-sage-800 italic">
              &ldquo;Sim, tudo é possível com a decisão da mudança&rdquo;
            </p>
          </blockquote>

          <p className="text-sage-700 text-lg leading-relaxed">
            Sou muito grata a tudo o que vivi até aqui, inclusive à doença, pois 
            somente com essa bagagem é que hoje sou quem eu sou e posso falar com 
            propriedade que sou uma mulher muito mais leve.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sage-300" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative pl-12"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Ponto na timeline */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                {/* Conteúdo */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                  <span className="text-sage-500 text-sm font-medium">{item.year}</span>
                  <h3 className="text-lg font-display font-medium text-sage-900 mt-1 mb-2">
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
