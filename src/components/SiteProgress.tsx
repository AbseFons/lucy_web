import { motion, useScroll, useSpring } from 'framer-motion'

export function SiteProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="site-progress" style={{ scaleX }} />
}
