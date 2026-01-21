import type { Metadata } from 'next'

// Configuração global do site
export const siteConfig = {
  name: 'Andreza Zuntini | Terapeuta Sistêmica Integrativa',
  shortName: 'Andreza Zuntini',
  description: 'Andreza Zuntini - Terapeuta Sistêmica Integrativa. Constelação Familiar, Thetahealing, Reiki e mais. Um raio de luz em sua jornada de transformação.',
  url: 'https://andrezazuntini.com.br',
  // Conceito poético - usar como metáfora, não como marca
  concept: 'Raio de Luz',
  author: 'Andreza Zuntini',
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#667b54',
  keywords: [
    'terapia sistêmica',
    'constelação familiar',
    'thetahealing',
    'reiki',
    'terapeuta integrativa',
    'autoconhecimento',
    'bem-estar',
    'andreza zuntini',
    'araras',
    'são paulo',
  ],
  social: {
    instagram: '@andreza_zuntini',
    whatsapp: '5519992807263',
  },
  contact: {
    email: 'contato@andrezazuntini.com.br',
    phone: '(19) 99280-7263',
    whatsapp: 'https://wa.me/5519992807263',
  },
  address: {
    street: 'R. Benedita Nogueira, 346',
    neighborhood: 'Centro',
    city: 'Araras',
    state: 'SP',
    zipCode: '13600-120',
    full: 'R. Benedita Nogueira, 346 - Centro, Araras - SP, 13600-120',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Benedita+Nogueira,+346+-+Centro,+Araras+-+SP,+13600-120',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8!2d-47.38!3d-22.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIxJzAwLjAiUyA0N8KwMjInNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  },
}

// Tipo para metadados de página
interface PageSEO {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
  noIndex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

/**
 * Gera metadados completos para uma página
 */
export function generatePageMetadata(page: PageSEO): Metadata {
  const url = page.path ? `${siteConfig.url}${page.path}` : siteConfig.url
  const title = page.title === 'Home' 
    ? siteConfig.name 
    : `${page.title} | ${siteConfig.shortName}`
  
  const ogImage = page.image || `${siteConfig.url}/og-image.jpg`

  return {
    title,
    description: page.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: page.type || 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.imageAlt || page.title,
        },
      ],
      ...(page.publishedTime && { publishedTime: page.publishedTime }),
      ...(page.modifiedTime && { modifiedTime: page.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.description,
      images: [ogImage],
      creator: siteConfig.social.instagram,
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    verification: {
      // Adicionar quando disponível
      // google: 'seu-codigo-google',
    },
  }
}

/**
 * Gera JSON-LD para Schema.org
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Benedita Nogueira, 346',
      addressLocality: 'Araras',
      addressRegion: 'SP',
      postalCode: '13600-120',
      addressCountry: 'BR',
    },
    priceRange: '$$',
    image: `${siteConfig.url}/og-image.jpg`,
    sameAs: [
      `https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`,
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  }
}

/**
 * Gera JSON-LD para pessoa/profissional
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andreza Zuntini',
    jobTitle: 'Terapeuta Sistêmica Integrativa',
    description: 'Terapeuta com mais de 20 mil horas em atendimentos. Especialista em Constelação Familiar, Thetahealing, Reiki e terapias integrativas.',
    url: siteConfig.url,
    sameAs: [
      `https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`,
    ],
    knowsAbout: [
      'Constelação Familiar',
      'Thetahealing',
      'Reiki',
      'Terapia Sistêmica',
      'Leitura Intuitiva',
    ],
  }
}

/**
 * Gera JSON-LD para serviço
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  duration?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Andreza Zuntini',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: service.url,
      availableLanguage: {
        '@type': 'Language',
        name: 'Portuguese',
      },
    },
  }
}
