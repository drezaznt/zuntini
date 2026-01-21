import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui'

export function About() {
  return (
    <Section id="quem-sou" background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Imagem */}
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
          
          {/* Decoração */}
          <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-sage-300 rounded-2xl" />
          
          {/* Card de destaque */}
          <div className="absolute bottom-8 -right-4 md:right-8 bg-white rounded-xl shadow-lg p-6 max-w-[200px]">
            <span className="text-4xl font-display font-bold text-sage-600">+20mil</span>
            <span className="block text-sm text-sage-700 mt-1">horas em atendimentos e treinamentos</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <span className="text-sage-600 font-medium text-sm uppercase tracking-wider mb-4 block">
            Quem Eu Sou
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6">
            Muito prazer, eu sou a{' '}
            <span className="font-normal text-gradient">Andreza Zuntini</span>
          </h2>

          <div className="space-y-4 text-sage-700 text-lg leading-relaxed">
            <p>
              Terapeuta Sistêmica Integrativa com mais de 17 anos de experiência 
              no caminho do autoconhecimento.
            </p>
            <p>
              Meu objetivo é te guiar nesta jornada para que você viva 
              relacionamentos com mais leveza sendo a sua melhor versão!
            </p>
            <p>
              Iremos ressignificar crenças, traumas e bloqueios que paralisam 
              ou assombram sua vida, trazendo um significado melhor através 
              de terapia individual, em grupo, palestras e treinamentos.
            </p>
          </div>

          {/* Formações */}
          <div className="mt-8 pt-8 border-t border-sage-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-800 mb-4">
              Minhas Formações
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Constelação Familiar - IDESV',
                'Thetahealing (+10 formações)',
                'Reiki Usui, Kundalini e Source',
                'Medicina do Cacau',
                'Florais de Bach e Saint Germain',
                'Cromoterapia',
              ].map((formacao) => (
                <span
                  key={formacao}
                  className="px-3 py-1 bg-sage-100 text-sage-700 text-sm rounded-full"
                >
                  {formacao}
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
