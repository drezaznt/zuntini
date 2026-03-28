import Link from 'next/link'
import { Container, WhatsAppIcon } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

const footerNavigation = {
  services: [
    { name: 'Terapia Sistêmica', href: '/#servicos' },
    { name: 'Constelação Familiar', href: '/#servicos' },
    { name: 'Thetahealing', href: '/#servicos' },
    { name: 'Reiki', href: '/#servicos' },
    { name: 'Leitura Intuitiva', href: '/#servicos' },
  ],
  links: [
    { name: 'Home', href: '/' },
    { name: 'Quem Sou', href: '/#quem-sou' },
    { name: 'Minha História', href: '/#historia' },
    { name: 'Contato', href: '/#contato' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-900 text-cream-200">
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10 text-sage-400 transition-transform duration-300 group-hover:scale-110"
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
                <div className="flex flex-col">
                  <span className="text-xl font-display font-semibold text-cream-100">
                    Andreza Zuntini
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-sm text-sage-400 leading-relaxed max-w-xs">
                Terapeuta Sistêmica Integrativa. Como um raio de luz,
                guio você na jornada do autoconhecimento e transformação.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center text-sage-400 hover:bg-sage-700 hover:text-cream-100 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center text-sage-400 hover:bg-sage-700 hover:text-cream-100 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100 mb-4">
                Serviços
              </h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-sage-400 hover:text-cream-100 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100 mb-4">
                Navegação
              </h3>
              <ul className="space-y-3">
                {footerNavigation.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-sage-400 hover:text-cream-100 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100 mb-4">
                Contato
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-sage-400 hover:text-cream-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <EmailIcon className="w-4 h-4" />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sage-400 hover:text-cream-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sage-400 hover:text-cream-100 transition-colors duration-200 flex items-start gap-2"
                  >
                    <LocationIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      {siteConfig.address.street}<br />
                      {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-800">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-sage-500">
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-sage-500">
              Feito com 💚 para transformar vidas
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

// Icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}


function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
