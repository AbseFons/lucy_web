import { motion } from 'framer-motion'
import { Heart, LockKeyhole } from 'lucide-react'
import { EnvelopeCard } from '../../components/love/EnvelopeCard'
import { LoveNoteLetter } from '../../components/love/LoveNoteLetter'
import { useLoveNotes } from '../../hooks/useLoveNotes'

export function ThingsILove() {
  const {
    notes,
    activeNote,
    openedIds,
    openedCount,
    totalCount,
    openNote,
    closeNote,
    isUnlocked,
  } = useLoveNotes()

  const percentage = totalCount === 0 ? 0 : (openedCount / totalCount) * 100

  return (
    <section className="section things-i-love-section" id="cosas-que-amo">
      <div className="section__inner">
        <header className="things-i-love-heading">
          <div>
            <p className="eyebrow eyebrow--light">Doce sobres</p>
            <h2 className="display display--light">Cosas que amo de ti.</h2>
          </div>

          <p className="things-i-love-heading__copy">
            Te amo, mi vida! Y quiero que sepas que cada día me enamoro más de ti. Aunque las razones para amartes son infinitas, he preparado doce sobres para ti. Cada uno tiene un mensaje especial. Espero que los disfrutes tanto como yo disfruté prepararlos para ti.
          </p>
        </header>

        <div className="things-i-love-progress">
          <div className="things-i-love-progress__copy">
            <span>
              <Heart size={13} fill="currentColor" />
              Sobres abiertos
            </span>
            <strong>
              {openedCount} / {totalCount}
            </strong>
          </div>

          <div
            className="things-i-love-progress__track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalCount}
            aria-valuenow={openedCount}
            aria-label="Sobres abiertos"
          >
            <motion.span
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className="love-envelope-grid">
          {notes.map((note, index) => {
            const unlocked = isUnlocked(note.lockedUntil)
            const opened = openedIds.includes(note.id)

            return (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(index, 6) * 0.055, duration: 0.5 }}
              >
                <EnvelopeCard
                  note={note}
                  opened={opened}
                  unlocked={unlocked}
                  onOpen={() => openNote(note.id)}
                />
              </motion.div>
            )
          })}
        </div>

        {/**<div className="things-i-love-note">
          <span>
            <LockKeyhole size={14} />
            Un sobre especial
          </span>
          <p>
            El número 12 queda reservado para el 14 de agosto. En desarrollo se muestra
            desbloqueado para que puedas diseñarlo antes de regalar la página.
          </p>
        </div>*/}
      </div>

      <LoveNoteLetter note={activeNote} onClose={closeNote} />
    </section>
  )
}
