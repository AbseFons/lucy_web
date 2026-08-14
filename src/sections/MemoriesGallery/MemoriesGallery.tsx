import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from '../../data/gallery'
import { GalleryLightbox } from '../../components/gallery/GalleryLightbox'
import { MemoryMedia } from '../../components/gallery/MemoryMedia'

type Filter = 'todas' | GalleryCategory

export function MemoriesGallery() {
  const [filter, setFilter] = useState<Filter>('todas')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const visibleItems = useMemo(
    () =>
      filter === 'todas'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <section className="section gallery-section" id="recuerdos">
      <div className="section__inner">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow eyebrow--light">Un montón de nosotros</p>
            <h2 className="display display--light">Recuerdos.</h2>
          </div>

          <p className="gallery-heading__copy">
            Necesitamos documentar lo nuestro, la vida contigo es muy bonita. Aquí hay un espacio para guardar nuestros recuerdos.<br/>
            Psdt. Mi amor, debemos tomarnos más fotos xd
          </p>
        </div>

        <div className="gallery-filters" role="group" aria-label="Filtrar recuerdos">
          {galleryCategories.map((category) => {
            const selected = filter === category.id

            return (
              <button
                key={category.id}
                type="button"
                className={`gallery-filter${selected ? ' gallery-filter--active' : ''}`}
                onClick={() => {
                  setFilter(category.id)
                  setActiveIndex(null)
                }}
                aria-pressed={selected}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <motion.div layout className="memory-grid">
          {visibleItems.map((item, index) => (
            <motion.button
              layout
              key={item.id}
              type="button"
              className={[
                'memory-card',
                item.featured ? 'memory-card--featured' : '',
                item.portrait ? 'memory-card--portrait' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: Math.min(index, 5) * 0.045, duration: 0.55 }}
              whileHover={{ y: -4 }}
              aria-label={`Abrir recuerdo: ${item.title}`}
            >
              <div className="memory-card__media">
                <MemoryMedia item={item} className="memory-card__image" />

                <span className="memory-card__open" aria-hidden="true">
                  <Maximize2 size={17} />
                </span>

                <span className="memory-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="memory-card__caption">
                <span>{item.title}</span>
                {item.handwritten && <small>{item.handwritten}</small>}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        items={visibleItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </section>
  )
}
