import { motion } from 'framer-motion'
import { Heart, LockKeyhole, MailOpen } from 'lucide-react'
import { LetterReader } from '../../components/letter/LetterReader'
import { useFinalLetter } from '../../hooks/useFinalLetter'

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function FinalLetter() {
  const {
    letter,
    unlocked,
    opened,
    hasRead,
    remaining,
    open,
    close,
    markAsRead,
  } = useFinalLetter()

  return (
    <section className="section final-letter-section" id="carta">
      <div className="final-letter-atmosphere" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 43) % 96}%`,
              top: `${(index * 61) % 92}%`,
            }}
          />
        ))}
      </div>

      <div className="section__inner final-letter-layout">
        <div className="final-letter-copy">
          <p className="eyebrow eyebrow--light">Una última cosa</p>
          <h2 className="display display--light">Carta.</h2>

          <p className="final-letter-copy__intro">
            Después de tantas fotos, fechas, canciones y pequeños recuerdos, quería que
            hubiera una parte sin distracciones. Solo palabras.
          </p>

          {!unlocked && (
            <div className="final-letter-countdown" aria-live="polite">
              <span>
                <LockKeyhole size={15} />
                Se abre el 14 de agosto
              </span>

              <div>
                <strong>{pad(remaining.days)}</strong>
                <small>días</small>
              </div>
              <div>
                <strong>{pad(remaining.hours)}</strong>
                <small>horas</small>
              </div>
              <div>
                <strong>{pad(remaining.minutes)}</strong>
                <small>min</small>
              </div>
            </div>
          )}

          {unlocked && (
            <div className="final-letter-ready">
              <Heart size={15} fill="currentColor" />
              <span>
                {hasRead ? 'Puedes volver a leerla cuando quieras.' : 'Ya puedes abrirla.'}
              </span>
            </div>
          )}
        </div>

        <motion.button
          type="button"
          className={[
            'final-letter-object',
            unlocked ? 'final-letter-object--unlocked' : '',
            hasRead ? 'final-letter-object--read' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={open}
          disabled={!unlocked}
          whileHover={unlocked ? { y: -7, rotate: -0.6 } : {}}
          whileTap={unlocked ? { scale: 0.985 } : {}}
          aria-label={unlocked ? 'Abrir carta para Lucy' : 'Carta bloqueada hasta el 14 de agosto'}
        >
          <span className="final-letter-object__paper">
            <span>Para Lucy</span>
            <small>{letter.dateLabel}</small>
          </span>

          <span className="final-letter-object__envelope">
            <span className="final-letter-object__flap" />
            <span className="final-letter-object__fold final-letter-object__fold--left" />
            <span className="final-letter-object__fold final-letter-object__fold--right" />

            <span className="final-letter-object__seal">
              {unlocked ? (
                hasRead ? <MailOpen size={21} /> : <Heart size={21} fill="currentColor" />
              ) : (
                <LockKeyhole size={20} />
              )}
            </span>
          </span>

          <span className="final-letter-object__label">
            {!unlocked ? '14 · 08 · 2026' : hasRead ? 'Leer otra vez' : 'Abrir carta'}
          </span>
        </motion.button>
      </div>

      <LetterReader
        letter={letter}
        open={opened}
        onClose={close}
        onRead={markAsRead}
      />
    </section>
  )
}
