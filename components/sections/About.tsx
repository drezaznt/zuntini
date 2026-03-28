import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionEyebrow } from '@/components/ui'

const credentials = [
  'Constelação Familiar - IDESV',
  'Thetahealing (+10 formações)',
  'Reiki Usui, Kundalini e Source',
  'Medicina do Cacau',
  'Florais de Bach e Saint Germain',
  'Cromoterapia',
]

export function About() {
  return (
    <Section id="quem-sou" background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/IMG_4608insta.jpg"
              alt="Andreza Zuntini"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-sage-300 rounded-2xl" />

          <div className="absolute bottom-8 -right-4 md:right-8 bg-white rounded-xl shadow-lg p-6 max-w-[200px]">
            <span className="text-4xl font-display font-bold text-sage-600">+20mil</span>
            <span className="block text-sm text-sage-700 mt-1">horas caminhando ao lado de pessoas</span>
          </div>
        </div>

        <div>
          <SectionEyebrow>Quem Sou</SectionEyebrow>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6">
            Muito prazer, eu sou a{' '}
            <span className="font-normal text-gradient">Andreza Zuntini</span>
          </h2>

          <div className="space-y-4 text-sage-700 text-lg leading-relaxed">
            <p>
              Já ajudei centenas de pessoas a entenderem padrões que pareciam confusos, repetitivos e
              sem saída — e vi, com meus próprios olhos, o que acontece quando alguém finalmente
              enxerga de onde vêm suas histórias.
            </p>
            <p>
              Minha jornada começou de dentro para fora. Fui diagnosticada com uma doença autoimune e,
              em vez de aceitar um prognóstico definitivo, decidi me olhar de verdade. Essa escolha
              mudou tudo — inclusive minha missão de vida.
            </p>
            <p>
              Hoje, com mais de 17 anos de experiência e múltiplas formações, caminho ao lado de quem
              está pronto para deixar o peso para trás e viver com mais leveza.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-sage-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-800 mb-4">
              Formações
            </h3>
            <div className="flex flex-wrap gap-2">
              {credentials.map((item) => (
                <span key={item} className="px-3 py-1 bg-sage-100 text-sage-700 text-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link href="#historia" className="btn-secondary">
              Conhecer minha história
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
