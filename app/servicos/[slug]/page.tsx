import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getService, getAllServices } from '@/lib/mdx'
import { generatePageMetadata, siteConfig } from '@/lib/seo'
import { mdxComponents } from '@/components/mdx'
import { Section, Container } from '@/components/ui'

interface PageProps {
  params: {
    slug: string
  }
}

// Gera paths estáticos para todos os serviços
export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Gera metadata dinâmica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getService(params.slug)

  if (!service) {
    return {}
  }

  return generatePageMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/servicos/${params.slug}`,
  })
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  const allServices = getAllServices()
  const currentIndex = allServices.findIndex((s) => s.slug === params.slug)
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null
  const nextService =
    currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null

  return (
    <>
      {/* Hero do serviço */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream-100 via-sage-50/30 to-cream-200">
        <Container size="narrow">
          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar aos serviços
          </Link>

          <div className="flex items-center gap-4 mb-6">
            {service.meta.icon && (
              <span className="text-5xl">{service.meta.icon}</span>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-light text-sage-900">
                {service.meta.title}
              </h1>
            </div>
          </div>

          <p className="text-xl text-sage-700 mb-8">{service.meta.description}</p>

          {/* Info rápida */}
          <div className="flex flex-wrap gap-4">
            {service.meta.duration && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-sage-700 shadow-sm">
                <ClockIcon className="w-4 h-4 text-sage-500" />
                {service.meta.duration}
              </span>
            )}
            {service.meta.modality?.map((mod) => (
              <span
                key={mod}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-sage-700 shadow-sm"
              >
                <LocationIcon className="w-4 h-4 text-sage-500" />
                {mod}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Conteúdo MDX */}
      <Section>
        <Container size="narrow">
          <article className="prose-custom">
            <MDXRemote source={service.content} components={mdxComponents} />
          </article>

          {/* CTA */}
          <div className="mt-12 pt-12 border-t border-sage-200">
            <div className="bg-sage-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display font-medium text-sage-900 mb-4">
                Pronta para começar sua transformação?
              </h3>
              <p className="text-sage-700 mb-6">
                Agende sua sessão de {service.meta.title} e dê o primeiro passo.
              </p>
              <Link
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar via WhatsApp
              </Link>
            </div>
          </div>

          {/* Navegação entre serviços */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {prevService && (
              <Link
                href={`/servicos/${prevService.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200 hover:border-sage-300 transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-sage-400 group-hover:text-sage-600 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <div>
                  <span className="text-xs text-sage-500 block">Anterior</span>
                  <span className="text-sage-800 font-medium">
                    {prevService.meta.title}
                  </span>
                </div>
              </Link>
            )}
            {nextService && (
              <Link
                href={`/servicos/${nextService.slug}`}
                className="flex items-center justify-end gap-3 p-4 bg-white rounded-xl border border-cream-200 hover:border-sage-300 transition-colors group sm:col-start-2"
              >
                <div className="text-right">
                  <span className="text-xs text-sage-500 block">Próximo</span>
                  <span className="text-sage-800 font-medium">
                    {nextService.meta.title}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-sage-400 group-hover:text-sage-600 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </Container>
      </Section>
    </>
  )
}

// Icons
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
