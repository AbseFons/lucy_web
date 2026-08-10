import { Image as ImageIcon } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'

type MemoryMediaProps = {
  item: GalleryItem
  className?: string
  eager?: boolean
}

export function MemoryMedia({ item, className = '', eager = false }: MemoryMediaProps) {
  if (item.src) {
    return (
      <img
        className={className}
        src={item.src}
        alt={item.alt ?? item.title}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }

  return (
    <div
      className={`memory-media-placeholder ${className}`}
      role="img"
      aria-label={`Espacio reservado para: ${item.title}`}
    >
      <ImageIcon size={24} strokeWidth={1.5} />
      <span>Tu foto aquí</span>
      <small>{item.id}</small>
    </div>
  )
}
