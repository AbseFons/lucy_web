import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useAnniversary } from '../hooks/useAnniversary'

export function AnniversaryBanner() {
  const { isDay14, completedMonths } = useAnniversary()

  if (!isDay14) return null

  return (
    <motion.aside
      className="anniversary-banner"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.6 }}
      aria-live="polite"
    >
      <Heart size={16} fill="currentColor" />
      <span>
        Feliz 14 · {completedMonths} {completedMonths === 1 ? 'mes' : 'meses'} juntos
      </span>
    </motion.aside>
  )
}
