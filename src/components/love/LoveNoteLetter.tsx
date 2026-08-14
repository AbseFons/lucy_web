import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { LoveNote } from '../../data/loveNotes'

type LoveNoteLetterProps = {
  note: LoveNote | null
  onClose: () => void
}

export function LoveNoteLetter({ note, onClose }: LoveNoteLetterProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!note) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [note, onClose])

  return (
    <AnimatePresence>
      {note && (
        <motion.div
          className="love-letter-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="love-letter-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.article
            className={`love-letter love-letter--${note.tone}`}
            initial={{ opacity: 0, y: 70, scale: 0.9, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.94 }}
            transition={{
              type: 'spring',
              stiffness: 190,
              damping: 22,
            }}
          >
            <button
              ref={closeRef}
              type="button"
              className="love-letter__close"
              onClick={onClose}
              aria-label="Cerrar sobre"
            >
              <X size={19} />
            </button>

            <span className="love-letter__number">
              Sobre {String(note.number).padStart(2, '0')}
            </span>

            {note.imageSrc && (
              <img
                className="love-letter__image"
                src={note.imageSrc}
                alt={note.imageAlt ?? note.title}
              />
            )}

            <h3 id="love-letter-title">{note.title}</h3>
            <p>{note.message}</p>

            {note.handwritten && (
              <span className="love-letter__handwritten">
                {note.handwritten}
              </span>
            )}

            <span className="love-letter__signature">— Absé</span>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
