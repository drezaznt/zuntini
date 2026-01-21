import Link from 'next/link'
import { Container } from '@/components/ui'
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
                  fill="currentColor"
                >
                  <path d="M20 2l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10l3-10z" opacity="0.3"/>
                  <path d="M20 6l2 7h7l-6 4 2 7-5-4-5 4 2-7-6-4h7l2-7z"/>
                  <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
