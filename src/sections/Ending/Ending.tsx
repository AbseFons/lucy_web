import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { ending } from '../../data/ending'

export function Ending() {
  const [secretOpen, setSecretOpen] = useState(false)

  return (
    <section className="ending-section" id="final">
      <div className="ending-stars" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, index) => (
          <motion.span
            key={index}
            style={{
              left: `${(index * 37) % 97}%`,
              top: `${(index * 53) % 92}%`,
            }}
            animate={{
              opacity: [0.12, 0.7, 0.12],
              scale: [1, 1.7, 1],
            }}
            transition={{
              duration: 3.2 + (index % 5) * 0.4,
              repeat: Infinity,
              delay: (index % 8) * 0.3,
            }}
          />
        ))}
      </div>

      <div className="ending-glow ending-glow--red" aria-hidden="true" />
      <div className="ending-glow ending-glow--blue" aria-hidden="true" />

      <motion.div
        className="ending-content"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9 }}
      >
        <p className="ending-eyebrow">{ending.eyebrow}</p>

        <h2>{ending.title}</h2>

        <div className="ending-copy">
          <p>{ending.lineOne}</p>
          <p>{ending.lineTwo}</p>
        </div>

        <div className="ending-divider" aria-hidden="true">
          <span />
          <Heart size={15} fill="currentColor" />
          <span />
        </div>

        <div className="ending-signature">
          <strong>{ending.signature}</strong>
          <span>{ending.years}</span>
        </div>

        <button
          type="button"
          className="ending-secret-trigger"
          onClick={() => setSecretOpen((open) => !open)}
          aria-expanded={secretOpen}
          aria-label={ending.secret.triggerLabel}
        >
          <Sparkles size={14} />
          <span>{ending.secret.triggerLabel}</span>
        </button>

        <AnimatePresence>
          {secretOpen && (
            <motion.div
              className="ending-secret"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.32 }}
            >
              <strong>{ending.secret.message}</strong>
              <p>{ending.secret.submessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="ending-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span>Tú y yo</span>
        <i />
        <span>14 · 05 · 2026</span>
      </motion.div>
    </section>
  )
}
