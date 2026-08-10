import { AnimatePresence, motion } from 'framer-motion'
import { CalendarHeart, ChevronDown, LockKeyhole } from 'lucide-react'
import { anniversaries } from '../../data/anniversaries'
import { useLocalStorage } from '../../hooks/useLocalStorage'

function isUnlocked(date: string) {
  // En desarrollo mostramos todo para poder diseñar y probar el regalo antes del 14.
  if (import.meta.env.DEV) return true

  const unlockDate = new Date(`${date}T00:00:00`)
  const now = new Date()
  return now >= unlockDate
}

export function OurFourteens() {
  const [opened, setOpened] = useLocalStorage<string[]>('tu-y-yo-opened-fourteens', [])

  const toggle = (id: string) => {
    setOpened((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <section className="section section--fourteens" id="nuestros-14">
      <div className="section__inner">
        <div className="fourteens__heading">
          <div>
            <p className="eyebrow">Una fecha que se volvió nuestra</p>
            <h2 className="display">Nuestros 14.</h2>
          </div>
          <p className="fourteens__intro">
            Cada mes suma una página nueva. Algunas ya tienen historia; otras todavía
            están esperando que lleguemos a ellas.
          </p>
        </div>

        <div className="fourteens__rail" aria-hidden="true">
          <motion.div
            className="fourteens__rail-fill"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </div>

        <div className="fourteens__grid">
          {anniversaries.map((anniversary, index) => {
            const unlocked = isUnlocked(anniversary.date)
            const isOpen = opened.includes(anniversary.id)

            return (
              <motion.article
                key={anniversary.id}
                className={`fourteen-card${anniversary.featured ? ' fourteen-card--featured' : ''}${!unlocked ? ' fourteen-card--locked' : ''}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <div className="fourteen-card__number" aria-hidden="true">
                  14
                </div>

                <div className="fourteen-card__topline">
                  <span>{anniversary.eyebrow}</span>
                  {unlocked ? (
                    <CalendarHeart size={18} />
                  ) : (
                    <LockKeyhole size={17} />
                  )}
                </div>

                <h3>{anniversary.title}</h3>
                <p className="fourteen-card__short">{anniversary.shortText}</p>

                {unlocked ? (
                  <button
                    type="button"
                    className="fourteen-card__button"
                    onClick={() => toggle(anniversary.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Cerrar recuerdo' : 'Abrir recuerdo'}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                ) : (
                  <p className="fourteen-card__locked-copy">
                    Se desbloquea el {anniversary.eyebrow.toLowerCase()}.
                  </p>
                )}

                <AnimatePresence initial={false}>
                  {unlocked && isOpen && (
                    <motion.div
                      className="fourteen-card__reveal"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="fourteen-card__reveal-inner">
                        <p>{anniversary.message}</p>
                        {anniversary.image ? (
                          <img src={anniversary.image} alt="" />
                        ) : (
                          <div className="fourteen-card__media-placeholder">
                            <span>Foto o video de este 14</span>
                            <small>Lo añadiremos cuando elijamos el recuerdo.</small>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {import.meta.env.DEV && anniversary.date > new Date().toISOString().slice(0, 10) && (
                  <span className="fourteen-card__preview-badge">Vista previa</span>
                )}
              </motion.article>
            )
          })}
        </div>

        <motion.p
          className="fourteens__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          14 de mayo fue el primero. Los demás todavía los estamos escribiendo.
        </motion.p>
      </div>
    </section>
  )
}
