import type { Metadata } from 'next'
import { Hero, About, Services, History, Contact } from '@/components/sections'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Home',
  description:
    'Andreza Zuntini - Terapeuta Sistêmica Integrativa. Constelação Familiar, Thetahealing, Reiki e mais. Transforme sua vida com leveza através do autoconhecimento.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <History />
      <Contact />
    </>
  )
}
