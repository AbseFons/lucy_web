import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { couple } from '../../data/couple'

type IntroProps = {
  onEnter: () => void
}

export function Intro({ onEnter }: IntroProps) {
  return (
    <section className="intro">
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              left: `${(index * 37) % 97}%`,
              top: `${(index * 53) % 91}%`,
              animationDelay: `${(index % 7) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="intro__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="intro__name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {couple.names.her}
        </motion.p>

        <motion.h1
          className="intro__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          Tengo algo para ti.
        </motion.h1>

        <motion.button
          className="intro__button"
          onClick={onEnter}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Entrar
          <Heart size={17} />
        </motion.button>
      </motion.div>

      <p className="intro__hint">Hecho para una sola persona.</p>
    </section>
  )
}
