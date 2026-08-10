import { motion } from 'framer-motion'
import { timeline } from '../../data/timeline'

export function Reconnection() {
  const items = timeline.slice(1, 5)

  return (
    <section className="section section--navy">
      <div className="section__inner">
        <p className="eyebrow eyebrow--light">Capítulo II</p>
        <h2 className="display display--light">Todos nuestros “casi”.</h2>

        <div className="almost">
          <div className="almost__track" aria-hidden="true">
            <motion.div
              className="almost__track-fill"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>

          <div className="almost__items">
            {items.map((item, index) => (
              <motion.article
                key={item.title + index}
                className={`almost__item almost__item--${item.tone ?? 'quiet'}`}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ delay: index * 0.1, duration: 0.65 }}
              >
                <span className="almost__date">{item.year ?? item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
