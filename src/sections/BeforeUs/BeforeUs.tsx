import { motion } from 'framer-motion'

export function BeforeUs() {
  return (
    <section className="section section--warm">
      <div className="section__inner split">
        <div className="split__copy">
          <p className="eyebrow">Capítulo I · 2016</p>
          <h2 className="display">Antes de nosotros.</h2>

          <div className="prose">
            <p>Quinto de secundaria.</p>
            <p>Nos sentamos juntos casi todo el año.</p>
            <motion.p
              className="prose__accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Nos gustábamos.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
            >
              El pequeño problema era que ninguno parecía haberse enterado.
            </motion.p>
          </div>
        </div>

        <div className="desk-scene" aria-label="Dos pupitres juntos">
          <motion.div
            className="desk desk--left"
            initial={{ x: -45, rotate: -5, opacity: 0 }}
            whileInView={{ x: 4, rotate: -2, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <span>Lucy</span>
          </motion.div>
          <motion.div
            className="desk desk--right"
            initial={{ x: 45, rotate: 5, opacity: 0 }}
            whileInView={{ x: -4, rotate: 2, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <span>Absé</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
