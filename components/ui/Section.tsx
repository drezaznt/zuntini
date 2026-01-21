import { type ReactNode } from 'react'
import { clsx } from 'clsx'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  size?: 'default' | 'narrow' | 'wide' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  background?: 'default' | 'muted' | 'accent' | 'gradient'
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  size = 'default',
  padding = 'lg',
  background = 'default',
}: SectionProps) {
  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
  }

  const backgrounds = {
    default: 'bg-transparent',
    muted: 'bg-cream-200/50',
    accent: 'bg-sage-50',
    gradient: 'bg-nature-gradient',
  }

  return (
    <section
      id={id}
      className={clsx(paddings[padding], backgrounds[background], className)}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
