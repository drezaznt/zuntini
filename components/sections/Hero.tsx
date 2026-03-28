'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, WhatsAppIcon } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

export function Hero() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className="relative min-h-dvh flex items-center pt-20 pb-8 overflow-hidden">
      {/* Vetor 4 — Background atmosférico em camadas */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, rgba(100,123,84,0.18) 0, transparent 65%),
            radial-gradient(ellipse 60% 50% at 85% 10%, rgba(176,140,107,0.13) 0, transparent 60%),
            radial-gradient(ellipse 50% 80% at 50% 100%, rgba(100,123,84,0.10) 0, transparent 55%),
            #faf8f3
          `,
        }}
      />
      {/* Grain texture */}
      <div className="absolute inset-0 textured pointer-events-none" />

      {/* Folhas decorativas */}
      <div className="absolute top-20 right-0 w-72 h-72 opacity-[0.07]">
        <LeafDecoration className="w-full h-full text-sage-700" />
      </div>
      <div className="absolute bottom-10 left-0 w-52 h-52 opacity-[0.06] rotate-180">
        <LeafDecoration className="w-full h-full text-earth-500" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Conteúdo — Vetor 3: orquestração com stagger */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-sage-900 mb-4 leading-[1.08] tracking-tighter animate-fade-in-up stagger-1">
              Você cuida de{' '}
              <em className="text-gradient not-italic font-light">todo mundo…</em>
              <br />
              mas quem cuida{' '}
              <span className="font-light">de você?</span>
            </h1>

            <p className="text-base md:text-lg text-sage-600 mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up stagger-3" style={{ fontWeight: 400 }}>
              Descubra padrões emocionais e familiares que podem estar te sobrecarregando
              — e comece a se priorizar sem culpa, com mais leveza e clareza.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up stagger-4">
              <button
                onClick={() => scrollTo('autoavaliacao')}
                className="btn-primary px-7 py-3"
              >
                Quero entender o que estou sentindo
              </button>
              <Link
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-7 py-3"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar com a Andreza
              </Link>
            </div>

            {/* Vetor 1 — números: Cormorant font-bold 700 vs label-upper Inter abaixo */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 pt-5 border-t border-sage-200/60 animate-fade-in stagger-5">
              {[
                { value: '+20mil', label: 'Horas de atendimento' },
                { value: '+17',    label: 'Anos de experiência' },
                { value: '10+',    label: 'Formações' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-sage-800 tracking-tight">
                    {value}
                  </span>
                  <span className="label-upper text-sage-500 mt-0.5 block">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem — Vetor 3: scale-in com delay */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in stagger-2">
            <div className="relative">
              {/* Halo atmosférico atrás da imagem */}
              <div
                className="absolute -inset-8 rounded-[2.5rem] blur-3xl"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 40%, rgba(100,123,84,0.22) 0, transparent 70%),
                    radial-gradient(ellipse at 70% 70%, rgba(176,140,107,0.18) 0, transparent 60%)
                  `,
                }}
              />

              <div className="relative aspect-[3/4] w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] rounded-2xl overflow-hidden shadow-sage-lg">
                <Image
                  src="/images/IMG_4493insta.jpg"
                  alt="Andreza Zuntini - Terapeuta Sistêmica Integrativa"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/25 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-sage-md p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                    <svg viewBox="0 0 40 40" className="w-6 h-6 text-sage-600">
                      <text x="20" y="28" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="700" fontFamily="serif">AZ</text>
                    </svg>
                  </div>
                  <div>
                    <span className="label-upper text-sage-400 block">Comece hoje</span>
                    <span className="block text-sm font-display font-semibold text-sage-800">com leveza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollTo('espelho')}
          className="flex flex-col items-center text-sage-400 hover:text-sage-600 transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="label-upper text-[0.6rem] mb-2 hidden sm:block">Você se identifica?</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
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
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M100 10c-30 40-60 80-40 140 20 60 60 40 80 20s20-60-20-100c40 40 40 100 20 120s-60 0-60-40c0-40 20-100 20-140z" />
    </svg>
  )
}
