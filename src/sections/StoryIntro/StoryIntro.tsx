import { motion } from 'framer-motion'
import { couple } from '../../data/couple'

export function StoryIntro() {
  return (
    <section className="section section--cream story-intro">
      <div className="section__inner section__inner--center">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Absé + Lucy
        </motion.p>

        <motion.h2
          className="display display--hero"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9 }}
        >
          {couple.site.title}
        </motion.h2>

        <motion.p
          className="story-intro__subtitle"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {couple.site.subtitle}
        </motion.p>

        <div className="story-intro__years" aria-label="2016 a 2026">
          <span>2016</span>
          <div className="story-intro__line" />
          <span>2026</span>
        </div>
      </div>
    </section>
  )
}
