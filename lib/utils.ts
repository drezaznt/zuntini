import { type ClassValue, clsx } from 'clsx'

/**
 * Combina classes CSS com clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Formata número de telefone para link WhatsApp
 */
export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '')
}

/**
 * Gera URL de WhatsApp com mensagem
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone)
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Verifica se está no lado do cliente
 */
export function isClient(): boolean {
  return typeof window !== 'undefined'
}

/**
 * Scroll suave para elemento
 */
export function scrollToElement(elementId: string, offset = 80): void {
  if (!isClient()) return

  const element = document.getElementById(elementId)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
