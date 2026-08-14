import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { Heart } from 'lucide-react'
import type { MemoryJarItem } from '../../data/memoryJar'

type MemoryJarVisualProps = {
  items: MemoryJarItem[]
  seenIds: string[]
  drawCount: number
  allSeen: boolean
}

const slipTransforms = [
  { x: '-37%', y: '30%', rotate: -12 },
  { x: '-8%', y: '43%', rotate: 9 },
  { x: '25%', y: '31%', rotate: -5 },
  { x: '-30%', y: '5%', rotate: 7 },
  { x: '3%', y: '12%', rotate: -9 },
  { x: '31%', y: '7%', rotate: 11 },
  { x: '-19%', y: '-19%', rotate: -4 },
  { x: '17%', y: '-15%', rotate: 6 },
  { x: '-2%', y: '-37%', rotate: 2 },
  { x: '34%', y: '-34%', rotate: -10 },
  { x: '-37%', y: '-39%', rotate: 13 },
  { x: '8%', y: '-52%', rotate: -7 },
]

export function MemoryJarVisual({
  items,
  seenIds,
  drawCount,
  allSeen,
}: MemoryJarVisualProps) {
  return (
    <motion.div
      key={drawCount}
      className={`memory-jar-visual${allSeen ? ' memory-jar-visual--complete' : ''}`}
      animate={
        drawCount > 0
          ? {
              rotate: [0, -1.5, 1.5, -1, 1, 0],
              y: [0, -2, 1, -1, 0],
            }
          : undefined
      }
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      aria-label="Tarro de recuerdos"
    >
      <div className="memory-jar-visual__lid">
        <span />
        <span />
        <span />
      </div>

      <div className="memory-jar-visual__neck" />

      <div className="memory-jar-visual__glass">
        <div className="memory-jar-visual__shine" />

        <div className="memory-jar-visual__slips" aria-hidden="true">
          {items.map((item, index) => {
            const transform = slipTransforms[index % slipTransforms.length]
            const seen = seenIds.includes(item.id)

            return (
              <motion.span
                key={item.id}
                className={`memory-slip memory-slip--${item.kind}${
                  seen ? ' memory-slip--seen' : ''
                }`}
                initial={false}
                animate={{
                  opacity: seen ? 0.35 : 0.9,
                  scale: seen ? 0.88 : 1,
                }}
                style={{
                  '--slip-x': transform.x,
                  '--slip-y': transform.y,
                  '--slip-rotate': `${transform.rotate}deg`,
                } as CSSProperties}
              >
                <i />
              </motion.span>
            )
          })}
        </div>

        <div className="memory-jar-visual__label">
          <Heart size={15} />
          <strong>Tú y yo</strong>
          <span>cosas que no quiero olvidar</span>
        </div>
      </div>

      <span className="memory-jar-visual__shadow" aria-hidden="true" />
    </motion.div>
  )
}
