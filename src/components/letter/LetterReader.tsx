import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'
import type { FinalLetterData } from '../../data/finalLetter'

type LetterReaderProps = {
  letter: FinalLetterData
  open: boolean
  onClose: () => void
  onRead: () => void
}

export function LetterReader({
  letter,
  open,
  onClose,
  onRead,
}: LetterReaderProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    const readTimer = window.setTimeout(() => {
      onRead()
    }, 1800)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(readTimer)
    }
  }, [open, onClose, onRead])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="final-letter-reader"
          role="dialog"
          aria-modal="true"
          aria-label="Carta para Lucy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            ref={closeRef}
            type="button"
            className="final-letter-reader__close"
            onClick={onClose}
            aria-label="Cerrar carta"
          >
            <X size={20} />
          </button>

          <motion.article
            className="final-letter-paper"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35 }}
            transition={{ duration: 0.65, ease: [0.2, 0.75, 0.2, 1] }}
          >
            <header className="final-letter-paper__header">
              <span>{letter.dateLabel}</span>
              <Heart size={16} fill="currentColor" />
            </header>

            <p className="final-letter-paper__recipient">{letter.recipient},</p>

            <p className="final-letter-paper__preface">{letter.preface}</p>

            <div className="final-letter-paper__body">
              {letter.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 13 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.18 + index * 0.08,
                    duration: 0.55,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="final-letter-paper__closing">
              <p>{letter.closing}</p>
              <strong>— {letter.signature}</strong>
            </div>

            {letter.postscript && (
              <p className="final-letter-paper__postscript">
                {letter.postscript}
              </p>
            )}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
