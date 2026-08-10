import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useAnniversary } from '../hooks/useAnniversary'

export function AnniversaryBanner() {
  const { isDay14, completedMonths, isRelationshipStart } = useAnniversary()

  if (!isDay14) return null

  const message = isRelationshipStart
    ? 'Aquí empezó Tú y yo'
    : `Feliz ${completedMonths} ${completedMonths === 1 ? 'mes' : 'meses'} juntos`

  return (
    <motion.aside
      className="anniversary-banner"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.6 }}
      aria-live="polite"
    >
      <Heart size={16} fill="currentColor" />
      <span>{message}</span>
    </motion.aside>
  )
}
