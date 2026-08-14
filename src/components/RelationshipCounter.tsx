import { motion } from 'framer-motion'
import { useRelationshipTime } from '../hooks/useRelationshipTime'

export function RelationshipCounter() {
  const time = useRelationshipTime()

  const blocks = [
    ['Años', time.years],
    ['Meses', time.months],
    ['Días', time.days],
    ['Horas', time.hours],
    ['Minutos', time.minutes],
    ['Segundos', time.seconds],
  ] as const

  return (
    <div className="section__inner">
      <div className="counter">
        <p className="eyebrow">Juntos desde el 14 de mayo de 2026</p>
        <h2 className="display">El tiempo contigo.</h2>

        <div className="counter__grid">
          {blocks.map(([label, value], index) => (
            <motion.div
              key={label}
              className="counter__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.06 }}
            >
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        <p className="counter__days">
          {time.totalDays} días desde que dejamos de ser un “casi”. Llenemos este contador hasta que se quede sin números.
        </p>
      </div>
    </div>
  )
}
