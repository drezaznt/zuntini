'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui'
import { siteConfig } from '@/lib/seo'
import { clsx } from 'clsx'

const services = [
  {
    id: 'terapia-sistemica',
    title: 'Terapia Sistêmica',
    shortDescription: 'Conexões do passado com o presente para romper padrões e bloqueios.',
    description: `Abordagem terapêutica focada nas interações e relações. Durante as sessões, 
      fazemos conexões do passado com o presente, observando como padrões familiares 
      influenciam o comportamento individual.`,
    duration: '50 min',
    modality: 'Presencial ou Online',
    frequency: 'Semanal ou quinzenal',
    icon: '🌿',
  },
  {
    id: 'constelacao-familiar',
    title: 'Constelação Familiar',
    shortDescription: 'Identificar e resolver padrões familiares que causam bloqueios.',
    description: `Desenvolvida por Bert Hellinger, busca identificar e resolver padrões 
      familiares que causam problemas emocionais. Através das constelações podemos 
      identificar e resolver conflitos internos e externos.`,
    duration: 'Até 1h30',
    modality: 'Presencial ou Online',
    frequency: 'Conforme avaliação',
    icon: '🌳',
  },
  {
    id: 'thetahealing',
    title: 'Thetahealing',
    shortDescription: 'Técnica de cura quântica para transformação de crenças limitantes.',
    description: `Técnica de cura quântica que possibilita a identificação e transformação 
      imediata de crenças limitantes, traumas e bloqueios em sentimentos positivos, 
      em todos os níveis: energético, físico, mental e emocional.`,
    duration: '50 min',
    modality: 'Presencial ou Online',
    frequency: 'Pontual ou frequente',
    icon: '✨',
  },
  {
    id: 'reiki',
    title: 'Reiki',
    shortDescription: 'Alinhamento dos chakras e desbloqueio energético.',
    description: `Técnica de alinhamento dos chakras, desbloqueio energético e 
      energização através da imposição de mãos. União entre a energia REI 
      (cósmica universal) e KI (vital).`,
    duration: '50 min',
    modality: 'Presencial ou Online',
    frequency: 'Conforme necessidade',
    icon: '🙏',
  },
  {
    id: 'leitura-intuitiva',
    title: 'Leitura Intuitiva',
    shortDescription: 'Orientação através das Cartas dos Oráculos.',
    description: `A leitura intuitiva tem o objetivo de auxiliar em questões 
      específicas e pontuais. Não responde sim ou não, mas direciona 
      através das mensagens das cartas.`,
    duration: 'Via WhatsApp',
    modality: 'Online',
    frequency: 'Resposta em até 24h',
    icon: '🔮',
  },
  {
    id: 'cacau-sagrado',
    title: 'Cacau Sagrado',
    shortDescription: 'Cerimônia em grupo para conexão e cura emocional.',
    description: `Cerimônia em grupo com cacau em sua forma mais pura para fins 
      espirituais, de cura, conexão com a natureza e com o eu interior. 
      Inspirado nas tradições indígenas.`,
    duration: 'Evento em grupo',
    modality: 'Presencial',
    frequency: 'Datas especiais',
    icon: '🍫',
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const currentService = services.find((s) => s.id === activeService) || services[0]

  return (
    <Section id="servicos">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-sage-600 font-medium text-sm uppercase tracking-wider mb-4 block">
          Serviços
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-4">
          Como posso te ajudar
        </h2>
        <p className="text-lg text-sage-700 max-w-2xl mx-auto">
          Cada técnica é uma ferramenta poderosa para sua transformação. 
          Juntas, elas compõem uma abordagem integrativa completa.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Lista de serviços - Mobile: Grid compacto, Desktop: Sidebar */}
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={clsx(
                  'text-left p-3 lg:p-4 rounded-xl transition-all duration-300',
                  'border-2 w-full',
                  activeService === service.id
                    ? 'bg-sage-600 border-sage-600 text-white shadow-lg'
                    : 'bg-white border-cream-300 text-sage-800 hover:border-sage-300 hover:shadow'
                )}
              >
                <span className="text-xl lg:text-2xl mb-1 lg:mb-2 block">{service.icon}</span>
                <span className="font-display font-medium text-sm lg:text-lg block leading-tight">
                  {service.title}
                </span>
                <span
                  className={clsx(
                    'text-xs lg:text-sm hidden lg:block mt-1',
                    activeService === service.id ? 'text-cream-200' : 'text-sage-600'
                  )}
                >
                  {service.shortDescription}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detalhes do serviço selecionado */}
        <div className="lg:col-span-2">
          <div className="card p-5 sm:p-6 md:p-8 lg:p-10 h-full overflow-hidden">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0">{currentService.icon}</span>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-sage-900 break-words">
                  {currentService.title}
                </h3>
              </div>
            </div>

            <p className="text-sage-700 text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              {currentService.description}
            </p>

            {/* Info cards - Stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-sage-50 rounded-xl p-3 sm:p-4">
                <span className="text-sage-500 text-xs sm:text-sm block mb-1">Duração</span>
                <span className="text-sage-900 font-medium text-sm sm:text-base">{currentService.duration}</span>
              </div>
              <div className="bg-sage-50 rounded-xl p-3 sm:p-4">
                <span className="text-sage-500 text-xs sm:text-sm block mb-1">Modalidade</span>
                <span className="text-sage-900 font-medium text-sm sm:text-base">{currentService.modality}</span>
              </div>
              <div className="bg-sage-50 rounded-xl p-3 sm:p-4">
                <span className="text-sage-500 text-xs sm:text-sm block mb-1">Frequência</span>
                <span className="text-sage-900 font-medium text-sm sm:text-base">{currentService.frequency}</span>
              </div>
            </div>

            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="truncate">Agendar {currentService.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
