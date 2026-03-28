import type { Metadata } from 'next'
import {
  Hero,
  MirrorSection,
  DiagnosticSection,
  ApproachSection,
  About,
  HowItWorks,
  Services,
  History,
  FinalCTA,
  Contact,
} from '@/components/sections'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Home',
  description:
    'Você cuida de todo mundo… mas quem cuida de você? Andreza Zuntini, Terapeuta Sistêmica Integrativa, te ajuda a entender seus padrões emocionais e viver com mais leveza.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <MirrorSection />
      <DiagnosticSection />
      <ApproachSection />
      <About />
      <HowItWorks />
      <Services />
      <History />
      <FinalCTA />
      <Contact />
    </>
  )
}
