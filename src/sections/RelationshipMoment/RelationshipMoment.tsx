import { motion } from 'framer-motion'

export function RelationshipMoment() {
  return (
    <section className="relationship-moment">
      <div className="relationship-moment__veil" />

      <div className="relationship-moment__content">
        <motion.p
          className="relationship-moment__date"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.28em' }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          14 · 05 · 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          Nosotros.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          Después de tantos casi, por fin llegó nuestro momento.
        </motion.p>
      </div>
    </section>
  )
}
