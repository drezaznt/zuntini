import { type ReactNode } from 'react'

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`label-upper mb-4 block ${light ? 'text-sage-300' : 'text-sage-500'}`}>
      {children}
    </span>
  )
}
