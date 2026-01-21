// Tipos globais para conteúdo

export interface BaseMeta {
  title: string
  description: string
  slug: string
}

export interface PageMeta extends BaseMeta {
  layout?: 'default' | 'wide' | 'narrow'
  order?: number
}

export interface ServiceMeta extends BaseMeta {
  icon?: string
  duration?: string
  price?: string
  modality?: string[]
  featured?: boolean
  order?: number
}

export interface TestimonialMeta extends BaseMeta {
  author: string
  role?: string
  avatar?: string
  rating?: number
}

export interface ContentItem<T extends BaseMeta = BaseMeta> {
  meta: T
  content: string
  slug: string
}

// Para uso com CMS futuro
export interface CMSContentSource<T extends BaseMeta = BaseMeta> {
  getBySlug: (slug: string) => Promise<ContentItem<T> | null>
  getAll: () => Promise<ContentItem<T>[]>
  getSlugs: () => Promise<string[]>
}
