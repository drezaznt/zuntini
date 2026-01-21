'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sage-50/30 to-cream-200" />
      
      {/* Elementos decorativos de folhas */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-10">
        <LeafDecoration className="w-full h-full text-sage-600" />
      </div>
      <div className="absolute bottom-20 left-0 w-48 h-48 opacity-10 rotate-180">
        <LeafDecoration className="w-full h-full text-sage-600" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span 
              className="inline-block text-sage-600 font-medium text-sm uppercase tracking-wider mb-4 animate-fade-in"
            >
              Terapeuta Sistêmica Integrativa
            </span>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-sage-900 mb-6 leading-tight animate-fade-in-up"
            >
              Um{' '}
              <span className="text-gradient font-normal">raio de luz</span>
              {' '}em sua jornada
            </h1>
            
            <p 
              className="text-lg md:text-xl text-sage-700 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200"
            >
              Sou Andreza Zuntini e te guio na jornada do autoconhecimento 
              para que você viva com mais leveza, sendo a sua melhor versão.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300"
            >
              <Link
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Atendimento
              </Link>
              <Link
                href="#servicos"
                className="btn-secondary text-lg px-8 py-4"
              >
                Conhecer Serviços
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-sage-200/50 animate-fade-in-up animation-delay-400"
            >
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-sage-800">+20mil</span>
                <span className="text-sm text-sage-600">Horas de atendimento</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-sage-800">+17</span>
                <span className="text-sm text-sage-600">Anos de experiência</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-semibold text-sage-800">10+</span>
                <span className="text-sm text-sage-600">Formações</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in"
          >
            <div className="relative">
              {/* Frame decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-300/30 to-earth-300/30 rounded-[2rem] blur-2xl" />
              
              {/* Imagem principal */}
              <div className="relative aspect-[3/4] w-[280px] sm:w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-sage-900/10">
                <Image
                  src="/images/andreza-hero.jpg"
                  alt="Andreza Zuntini - Terapeuta Sistêmica Integrativa"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                    <LightIcon className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <span className="block text-xs text-sage-500">Transformação</span>
                    <span className="block text-sm font-semibold text-sage-800">com leveza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#quem-sou"
          className="flex flex-col items-center text-sage-500 hover:text-sage-700 transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs mb-2 hidden sm:block">Deslize para conhecer</span>
          <ChevronDownIcon className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}

// Icons
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function LightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor">
      <path d="M100 10c-30 40-60 80-40 140 20 60 60 40 80 20s20-60-20-100c40 40 40 100 20 120s-60 0-60-40c0-40 20-100 20-140z" />
    </svg>
  )
}
