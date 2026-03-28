'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { WhatsAppIcon, SectionEyebrow } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

export function FinalCTA() {
  const scrollToAutoavaliacao = useCallback(() => {
    document.getElementById('autoavaliacao')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden textured">
      {/* Vetor 4 — background dark com mesh radial */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 20% 50%, rgba(100,123,84,0.25) 0, transparent 65%),
            radial-gradient(ellipse 50% 70% at 80% 30%, rgba(176,140,107,0.15) 0, transparent 60%),
            #2f3629
          `,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <div className="animate-on-scroll">
          <SectionEyebrow light>O próximo passo é seu</SectionEyebrow>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-cream-100 mb-6 leading-tight tracking-tight">
            Você não precisa continuar{' '}
            <em className="text-sage-300 not-italic">carregando tudo sozinho</em>
          </h2>

          <p className="text-sage-400 text-lg mb-10 leading-relaxed">
            Existe um caminho para a leveza. E ele começa com um gesto simples:
            se permitir ser cuidado.
          </p>
        </div>

        <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAutoavaliacao}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-sage-800 font-medium text-lg hover:bg-cream-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Quero começar meu processo
          </button>
          <Link
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-sage-500 text-sage-300 font-medium text-lg hover:bg-sage-800 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com a Andreza
          </Link>
        </div>

        <p className="animate-on-scroll stagger-3 mt-8 label-upper text-sage-500">
          Presencial em Araras/SP · Online para todo o Brasil
        </p>
      </div>
    </section>
  )
}
