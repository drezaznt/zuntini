'use client'

import { useState, type FormEvent } from 'react'
import { Section } from '@/components/ui'
import { siteConfig } from '@/lib/seo'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Montar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Telefone: ${formData.phone}\n` +
      `🌿 Interesse: ${formData.service || 'Gostaria de saber mais'}\n\n` +
      `💬 Mensagem:\n${formData.message}`
    )
    
    window.open(`https://wa.me/${siteConfig.social.whatsapp}?text=${whatsappMessage}`, '_blank')
  }

  return (
    <Section id="contato" background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <div>
          <span className="text-sage-600 font-medium text-sm uppercase tracking-wider mb-4 block">
            Contato
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-sage-900 mb-6">
            Vamos conversar?
          </h2>

          <p className="text-sage-700 text-lg leading-relaxed mb-8">
            Será uma alegria te acompanhar nesta jornada do autoconhecimento. 
            Entre em contato para agendar sua sessão ou tirar dúvidas.
          </p>

          {/* Contatos diretos */}
          <div className="space-y-4 mb-8">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-cream-200 hover:shadow-md hover:border-sage-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <WhatsAppIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <span className="text-sage-500 text-sm block">WhatsApp</span>
                <span className="text-sage-900 font-medium">{siteConfig.contact.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-cream-200 hover:shadow-md hover:border-sage-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors">
                <EmailIcon className="w-6 h-6 text-sage-600" />
              </div>
              <div>
                <span className="text-sage-500 text-sm block">E-mail</span>
                <span className="text-sage-900 font-medium">{siteConfig.contact.email}</span>
              </div>
            </a>

            <a
              href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-cream-200 hover:shadow-md hover:border-sage-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <InstagramIcon className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <span className="text-sage-500 text-sm block">Instagram</span>
                <span className="text-sage-900 font-medium">{siteConfig.social.instagram}</span>
              </div>
            </a>
          </div>

        {/* Endereço com Como Chegar */}
        <div className="p-4 bg-sage-100 rounded-xl">
          <div className="flex items-start gap-3 mb-3">
            <LocationIcon className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-sage-900 font-medium block">Localização</span>
              <span className="text-sage-700 text-sm block mt-1">
                {siteConfig.address.street}
              </span>
              <span className="text-sage-600 text-sm">
                {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
              </span>
              <span className="text-sage-500 text-sm block">
                CEP: {siteConfig.address.zipCode}
              </span>
            </div>
          </div>
          <a
            href={siteConfig.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors mt-2"
          >
            <MapPinIcon className="w-4 h-4" />
            Como chegar
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
        </div>

        {/* Formulário */}
        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-display font-medium text-sage-900 mb-6">
            Envie uma mensagem
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-1.5">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  placeholder="(19) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-sage-700 mb-1.5">
                Serviço de interesse
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
              >
                <option value="">Selecione um serviço</option>
                <option value="Terapia Sistêmica">Terapia Sistêmica</option>
                <option value="Constelação Familiar">Constelação Familiar</option>
                <option value="Thetahealing">Thetahealing</option>
                <option value="Reiki">Reiki</option>
                <option value="Leitura Intuitiva">Leitura Intuitiva</option>
                <option value="Cacau Sagrado">Cacau Sagrado - Cerimônia</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1.5">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all resize-none"
                placeholder="Conte um pouco sobre você e suas expectativas..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-4">
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}

// Icons
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  )
}
