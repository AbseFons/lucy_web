import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, X } from 'lucide-react'
import {
  memoryJarKindLabels,
  type MemoryJarItem,
} from '../../data/memoryJar'

type MemoryPaperProps = {
  item: MemoryJarItem | null
  onClose: () => void
}

export function MemoryPaper({ item, onClose }: MemoryPaperProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="memory-paper-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="memory-paper-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.article
            className={`memory-paper memory-paper--${item.kind}`}
            initial={{ opacity: 0, y: 90, rotate: -4, scale: 0.84 }}
            animate={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
            exit={{ opacity: 0, y: 60, rotate: 3, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 190,
              damping: 21,
              mass: 0.9,
            }}
          >
            <button
              ref={closeRef}
              type="button"
              className="memory-paper__close"
              onClick={onClose}
              aria-label="Cerrar recuerdo"
            >
              <X size={19} />
            </button>

            <span className="memory-paper__kind">
              {memoryJarKindLabels[item.kind]}
            </span>

            {item.date && (
              <span className="memory-paper__date">
                <CalendarDays size={14} />
                {item.date}
              </span>
            )}

            {item.imageSrc && (
              <img
                className="memory-paper__image"
                src={item.imageSrc}
                alt={item.imageAlt ?? item.title}
                loading="eager"
              />
            )}

            <h3 id="memory-paper-title">{item.title}</h3>
            <p>{item.text}</p>

            {item.handwritten && (
              <span className="memory-paper__handwritten">
                {item.handwritten}
              </span>
            )}

            {item.signature && (
              <span className="memory-paper__signature">{item.signature}</span>
            )}

            <span className="memory-paper__fold memory-paper__fold--one" />
            <span className="memory-paper__fold memory-paper__fold--two" />
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
