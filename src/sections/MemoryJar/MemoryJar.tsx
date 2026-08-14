import { motion } from 'framer-motion'
import { Check, RefreshCcw, Sparkles } from 'lucide-react'
import { MemoryJarVisual } from '../../components/memories/MemoryJarVisual'
import { MemoryPaper } from '../../components/memories/MemoryPaper'
import { memoryJarKindLabels } from '../../data/memoryJar'
import { useMemoryJar } from '../../hooks/useMemoryJar'

export function MemoryJar() {
  const {
    items,
    currentItem,
    seenIds,
    seenCount,
    totalCount,
    unseenCount,
    allSeen,
    drawCount,
    draw,
    close,
    reset,
  } = useMemoryJar()

  const percentage = totalCount === 0 ? 0 : (seenCount / totalCount) * 100

  return (
    <section className="section memory-jar-section" id="tarro">
      <div className="section__inner">
        <header className="memory-jar-heading">
          <div>
            <p className="eyebrow">Un papelito a la vez</p>
            <h2 className="display">Tarro de recuerdos.</h2>
          </div>

          <p className="memory-jar-heading__copy">
            Hay recuerdos demasiado pequeños para una gran sección y demasiado
            importantes para dejarlos perder. Este tarro guarda justamente esos.
          </p>
        </header>

        <div className="memory-jar-layout">
          <div className="memory-jar-stage">
            <div className="memory-jar-stage__glow" aria-hidden="true" />

            <MemoryJarVisual
              items={items}
              seenIds={seenIds}
              drawCount={drawCount}
              allSeen={allSeen}
            />

            <motion.div
              className="memory-jar-stage__spark memory-jar-stage__spark--one"
              aria-hidden="true"
              animate={{ y: [0, -9, 0], opacity: [0.2, 0.65, 0.2] }}
              transition={{ duration: 3.4, repeat: Infinity }}
            >
              <Sparkles size={17} />
            </motion.div>

            <motion.div
              className="memory-jar-stage__spark memory-jar-stage__spark--two"
              aria-hidden="true"
              animate={{ y: [0, 7, 0], opacity: [0.18, 0.5, 0.18] }}
              transition={{ duration: 4.1, repeat: Infinity, delay: 0.6 }}
            >
              <Sparkles size={13} />
            </motion.div>
          </div>

          <div className="memory-jar-panel">
            <p className="memory-jar-panel__kicker">
              {allSeen ? 'Los encontraste todos' : 'Saca uno sin mirar'}
            </p>

            <h3>
              {allSeen
                ? 'Ya conoces todo lo que había aquí.'
                : `${unseenCount} ${unseenCount === 1 ? 'papelito espera' : 'papelitos esperan'}.`}
            </h3>

            <div className="memory-jar-progress">
              <div className="memory-jar-progress__top">
                <span>Descubiertos</span>
                <strong>
                  {seenCount} / {totalCount}
                </strong>
              </div>

              <div
                className="memory-jar-progress__track"
                role="progressbar"
                aria-label="Recuerdos descubiertos"
                aria-valuemin={0}
                aria-valuemax={totalCount}
                aria-valuenow={seenCount}
              >
                <motion.span
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                />
              </div>
            </div>

            {!allSeen ? (
              <motion.button
                type="button"
                className="memory-jar-draw"
                onClick={draw}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.975 }}
              >
                <Sparkles size={17} />
                Sacar un recuerdo
              </motion.button>
            ) : (
              <button
                type="button"
                className="memory-jar-reset"
                onClick={reset}
              >
                <RefreshCcw size={16} />
                Volver a mezclar
              </button>
            )}

            <div className="memory-jar-types">
              {Object.entries(memoryJarKindLabels).map(([kind, label]) => {
                const totalForKind = items.filter((item) => item.kind === kind).length
                const seenForKind = items.filter(
                  (item) => item.kind === kind && seenIds.includes(item.id),
                ).length

                return (
                  <span key={kind}>
                    {seenForKind === totalForKind && totalForKind > 0 && (
                      <Check size={12} />
                    )}
                    {label}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <MemoryPaper item={currentItem} onClose={close} />
    </section>
  )
}
