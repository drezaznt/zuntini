import Link from 'next/link'
import { Container } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20">
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          {/* Ilustração de folha */}
          <div className="w-24 h-24 mx-auto mb-8 text-sage-300">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10c-20 30-40 60-20 70s40-10 40-30-20-40-20-40zm-10 50c-5-5-5-15 0-25s15-20 20-20c-5 10-15 25-15 35s5 15 0 15-5-5-5-5z" />
            </svg>
          </div>

          <h1 className="text-6xl font-display font-light text-sage-800 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-display text-sage-700 mb-4">
            Página não encontrada
          </h2>
          <p className="text-sage-600 mb-8">
            Parece que você se perdeu no caminho. Não se preocupe, vamos te 
            guiar de volta.
          </p>

          <Link href="/" className="btn-primary">
            Voltar ao início
          </Link>
        </div>
      </Container>
    </main>
  )
}
