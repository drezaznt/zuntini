import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Tipos para o conteúdo MDX
export interface ContentMeta {
  title: string
  description: string
  slug: string
  date?: string
  image?: string
  imageAlt?: string
  author?: string
  tags?: string[]
  order?: number
}

export interface ContentItem<T extends ContentMeta = ContentMeta> {
  meta: T
  content: string
  slug: string
}

// Diretório base de conteúdo
const CONTENT_DIR = path.join(process.cwd(), 'content')

/**
 * Obtém o caminho de um diretório de conteúdo específico
 */
function getContentPath(contentType: string): string {
  return path.join(CONTENT_DIR, contentType)
}

/**
 * Lista todos os arquivos MDX de um tipo de conteúdo
 */
export function getContentSlugs(contentType: string): string[] {
  const contentPath = getContentPath(contentType)
  
  if (!fs.existsSync(contentPath)) {
    return []
  }

  return fs
    .readdirSync(contentPath)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

/**
 * Obtém o conteúdo de um arquivo MDX específico
 */
export function getContentBySlug<T extends ContentMeta = ContentMeta>(
  contentType: string,
  slug: string
): ContentItem<T> | null {
  const contentPath = getContentPath(contentType)
  const fullPath = path.join(contentPath, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      ...data,
      slug,
    } as T,
    content,
    slug,
  }
}

/**
 * Obtém todos os itens de conteúdo de um tipo
 */
export function getAllContent<T extends ContentMeta = ContentMeta>(
  contentType: string
): ContentItem<T>[] {
  const slugs = getContentSlugs(contentType)
  
  const items = slugs
    .map((slug) => getContentBySlug<T>(contentType, slug))
    .filter((item): item is ContentItem<T> => item !== null)

  // Ordena por order ou date
  return items.sort((a, b) => {
    if (a.meta.order !== undefined && b.meta.order !== undefined) {
      return a.meta.order - b.meta.order
    }
    if (a.meta.date && b.meta.date) {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    }
    return 0
  })
}

/**
 * Obtém metadados de todas as páginas para o sitemap
 */
export function getAllPagesMeta(): ContentMeta[] {
  const pages = getAllContent('pages')
  return pages.map((page) => page.meta)
}

// ============================================
// Tipos específicos para cada tipo de conteúdo
// ============================================

// Páginas
export interface PageMeta extends ContentMeta {
  layout?: 'default' | 'wide' | 'narrow'
}

export function getPage(slug: string): ContentItem<PageMeta> | null {
  return getContentBySlug<PageMeta>('pages', slug)
}

export function getAllPages(): ContentItem<PageMeta>[] {
  return getAllContent<PageMeta>('pages')
}

// Serviços
export interface ServiceMeta extends ContentMeta {
  icon?: string
  duration?: string
  price?: string
  modality?: string[]
  featured?: boolean
}

export function getService(slug: string): ContentItem<ServiceMeta> | null {
  return getContentBySlug<ServiceMeta>('services', slug)
}

export function getAllServices(): ContentItem<ServiceMeta>[] {
  return getAllContent<ServiceMeta>('services')
}

export function getFeaturedServices(): ContentItem<ServiceMeta>[] {
  return getAllServices().filter((service) => service.meta.featured)
}

// Depoimentos
export interface TestimonialMeta extends ContentMeta {
  author: string
  role?: string
  avatar?: string
  rating?: number
}

export function getAllTestimonials(): ContentItem<TestimonialMeta>[] {
  return getAllContent<TestimonialMeta>('testimonials')
}

// ============================================
// Utilitários para preparação de conteúdo CMS
// ============================================

/**
 * Interface abstrata para fonte de conteúdo
 * Facilita migração futura para Headless CMS
 */
export interface ContentSource<T extends ContentMeta = ContentMeta> {
  getBySlug: (slug: string) => Promise<ContentItem<T> | null>
  getAll: () => Promise<ContentItem<T>[]>
  getSlugs: () => Promise<string[]>
}

/**
 * Cria uma fonte de conteúdo MDX local
 * Pode ser substituída por fonte CMS futuramente
 */
export function createMDXSource<T extends ContentMeta>(
  contentType: string
): ContentSource<T> {
  return {
    getBySlug: async (slug: string) => getContentBySlug<T>(contentType, slug),
    getAll: async () => getAllContent<T>(contentType),
    getSlugs: async () => getContentSlugs(contentType),
  }
}
