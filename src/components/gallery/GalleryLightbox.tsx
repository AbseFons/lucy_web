import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'
import { MemoryMedia } from './MemoryMedia'

type GalleryLightboxProps = {
  items: GalleryItem[]
  activeIndex: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const activeItem = activeIndex === null ? null : items[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()

      if (event.key === 'ArrowRight') {
        onChange((activeIndex + 1) % items.length)
      }

      if (event.key === 'ArrowLeft') {
        onChange((activeIndex - 1 + items.length) % items.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, items.length, onChange, onClose])

  const previous = () => {
    if (activeIndex === null) return
    onChange((activeIndex - 1 + items.length) % items.length)
  }

  const next = () => {
    if (activeIndex === null) return
    onChange((activeIndex + 1) % items.length)
  }

  return (
    <AnimatePresence>
      {activeItem && activeIndex !== null && (
        <motion.div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Recuerdo ${activeIndex + 1} de ${items.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gallery-lightbox__close"
            onClick={onClose}
            aria-label="Cerrar fotografía"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={previous}
            aria-label="Fotografía anterior"
          >
            <ChevronLeft size={25} />
          </button>

          <motion.div
            key={activeItem.id}
            className="gallery-lightbox__panel"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div
              className={`gallery-lightbox__media${
                activeItem.portrait ? ' gallery-lightbox__media--portrait' : ''
              }`}
            >
              <MemoryMedia
                item={activeItem}
                className="gallery-lightbox__image"
                eager
              />

              <span className="gallery-lightbox__count">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(items.length).padStart(2, '0')}
              </span>
            </div>

            <div className="gallery-lightbox__copy">
              <p className="gallery-lightbox__category">
                {activeItem.category}
              </p>

              <h3>{activeItem.title}</h3>
              <p>{activeItem.caption}</p>

              {(activeItem.date || activeItem.location) && (
                <div className="gallery-lightbox__meta">
                  {activeItem.date && <span>{activeItem.date}</span>}
                  {activeItem.location && (
                    <span>
                      <MapPin size={14} />
                      {activeItem.location}
                    </span>
                  )}
                </div>
              )}

              {activeItem.handwritten && (
                <span className="gallery-lightbox__handwritten">
                  {activeItem.handwritten}
                </span>
              )}
            </div>
          </motion.div>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={next}
            aria-label="Fotografía siguiente"
          >
            <ChevronRight size={25} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
