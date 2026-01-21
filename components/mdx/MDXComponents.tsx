import Image from 'next/image'
import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'
import { Button, Section } from '@/components/ui'

// Componentes customizados para MDX
export const mdxComponents = {
  // Elementos HTML básicos
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-sage-900 mb-6"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="text-3xl md:text-4xl font-display font-light text-sage-900 mb-4 mt-12 first:mt-0"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="text-2xl font-display font-normal text-sage-800 mb-3 mt-8"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p
      className="text-lg text-sage-700 leading-relaxed mb-6"
      {...props}
    />
  ),
  a: ({ href, ...props }: ComponentPropsWithoutRef<'a'>) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-600 border-b border-sage-300 hover:border-sage-600 transition-colors"
          {...props}
        />
      )
    }
    return (
      <Link
        href={href || '#'}
        className="text-sage-600 border-b border-sage-300 hover:border-sage-600 transition-colors"
        {...props}
      />
    )
  },
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-sage-700" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-sage-700" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-lg leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-sage-400 bg-sage-50 px-6 py-4 my-6 rounded-r-lg text-sage-800 italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-sage-200" />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-sage-900" {...props} />
  ),

  // Componentes customizados para uso no MDX
  Image: ({
    src,
    alt,
    width = 800,
    height = 600,
    className = '',
    priority = false,
  }: {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    priority?: boolean
  }) => (
    <div className="my-8 rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto ${className}`}
        priority={priority}
      />
    </div>
  ),

  Button: Button,
  Section: Section,

  // Callout/Destaque
  Callout: ({
    type = 'info',
    children,
  }: {
    type?: 'info' | 'warning' | 'success'
    children: React.ReactNode
  }) => {
    const styles = {
      info: 'bg-sage-50 border-sage-400 text-sage-800',
      warning: 'bg-earth-50 border-earth-400 text-earth-800',
      success: 'bg-sage-100 border-sage-500 text-sage-900',
    }

    return (
      <div className={`border-l-4 px-6 py-4 my-6 rounded-r-lg ${styles[type]}`}>
        {children}
      </div>
    )
  },

  // Card de serviço
  ServiceCard: ({
    title,
    description,
    icon,
    href,
  }: {
    title: string
    description: string
    icon?: React.ReactNode
    href?: string
  }) => (
    <div className="card p-6 md:p-8">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-display font-medium text-sage-900 mb-2">{title}</h3>
      <p className="text-sage-600 mb-4">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-sage-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          Saiba mais
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  ),

  // Grid de cards
  CardGrid: ({
    children,
    columns = 3,
  }: {
    children: React.ReactNode
    columns?: 2 | 3 | 4
  }) => {
    const gridCols = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-2 lg:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
    }
    return (
      <div className={`grid gap-6 ${gridCols[columns]}`}>{children}</div>
    )
  },

  // Seção de destaque/Hero
  Hero: ({
    title,
    subtitle,
    description,
    cta,
    ctaHref,
    image,
  }: {
    title: string
    subtitle?: string
    description?: string
    cta?: string
    ctaHref?: string
    image?: string
  }) => (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          {subtitle && (
            <span className="text-sage-600 font-medium mb-2 block">{subtitle}</span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-sage-900 mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-sage-700 mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
          )}
          {cta && ctaHref && (
            <Link href={ctaHref} className="btn-primary">
              {cta}
            </Link>
          )}
        </div>
        {image && (
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  ),

  // Wrapper para vídeo responsivo
  Video: ({ src, title }: { src: string; title?: string }) => (
    <div className="relative aspect-video rounded-2xl overflow-hidden my-8">
      <iframe
        src={src}
        title={title || 'Video'}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ),
}
