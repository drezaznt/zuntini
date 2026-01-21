'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { Container } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quem Sou', href: '/#quem-sou' },
  { name: 'Serviços', href: '/#servicos' },
  { name: 'Minha História', href: '/#historia' },
  { name: 'Contato', href: '/#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Função para fechar o menu
  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Portal mount check
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu mobile ao mudar de rota ou hash
  useEffect(() => {
    closeMenu()
    
    // Listener para mudanças de hash (links âncora)
    const handleHashChange = () => {
      closeMenu()
    }
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [pathname, closeMenu])

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-custom shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={siteConfig.name}
          >
            <div className="relative">
              {/* Logo AZ - Andreza Zuntini */}
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 text-sage-600 transition-transform duration-300 group-hover:scale-110"
              >
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text
                  x="20"
                  y="26"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="16"
                  fontWeight="600"
                  fontFamily="serif"
                >
                  AZ
                </text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-semibold text-sage-800 leading-tight">
                Andreza Zuntini
              </span>
              <span className="text-[10px] text-sage-500 hidden sm:block tracking-wide">
                Terapeuta Sistêmica Integrativa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'nav-link px-4 py-2 text-sm',
                  pathname === item.href && 'active'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-sage-700 hover:text-sage-900 focus-ring rounded-lg relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 relative">
              <span
                className={clsx(
                  'absolute left-0 w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen
                    ? 'top-[11px] rotate-45'
                    : 'top-1'
                )}
              />
              <span
                className={clsx(
                  'absolute left-0 top-[11px] w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={clsx(
                  'absolute left-0 w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen
                    ? 'top-[11px] -rotate-45'
                    : 'top-[19px]'
                )}
              />
            </div>
          </button>
        </nav>
      </Container>

    </header>

      {/* Mobile Menu - Rendered via Portal to ensure proper overlay */}
      {mounted && isMobileMenuOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop overlay - covers entire screen */}
          <div
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9998 }}
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-cream-100 shadow-2xl"
            style={{ zIndex: 9999 }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeMenu}
              className="absolute top-5 right-4 p-2 text-sage-600 hover:text-sage-800 focus-ring rounded-lg"
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-16 pb-6 px-6">
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          'block px-4 py-3 text-lg font-display text-sage-800',
                          'rounded-xl transition-colors duration-200',
                          'hover:bg-sage-100 active:bg-sage-200',
                          pathname === item.href && 'bg-sage-100 text-sage-900'
                        )}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-sage-200">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={closeMenu}
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Agendar Atendimento
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
