import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Navigation, Plus } from 'lucide-react'
import { OurMapCanvas } from '../../components/map/OurMapCanvas'
import { places } from '../../data/places'

export function OurPlaces() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activePlace = useMemo(
    () => places.find((place) => place.id === activeId) ?? null,
    [activeId],
  )

  const mapsUrl = activePlace
    ? `https://www.google.com/maps/search/?api=1&query=${activePlace.coordinates.join(',')}`
    : '#'

  return (
    <section className="section places-section" id="lugares">
      <div className="section__inner">
        <header className="places-heading">
          <div>
            <p className="eyebrow">Nuestros lugares</p>
            <h2 className="display">Nuestro pequeño mapa.</h2>
          </div>

          <p className="places-heading__copy">
            Lima también puede contar una historia. Cada punto guarda un paseo, una cita o
            una de esas pequeñas cosas que hacen que un lugar deje de ser solamente un lugar.
          </p>
        </header>

        <div className="places-layout">
          <motion.div
            className="places-map-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="places-map-label">
              <Navigation size={15} />
              <span>Lima · {String(places.length).padStart(2, '0')} lugares guardados</span>
            </div>

            <OurMapCanvas places={places} activeId={activeId} onSelect={setActiveId} />

            <div className="places-map-hint">Toca un punto para abrir su recuerdo</div>
          </motion.div>

          <aside className="places-panel" aria-live="polite">
            {!activePlace && (
              <div className="place-feature place-feature--empty">
                <span className="place-feature__compass">✦</span>
                <p className="eyebrow">Explora el mapa</p>
                <h3>Un lugar, un recuerdo.</h3>
                <p className="place-feature__memory">
                  Elige cualquiera de los puntos. Más adelante podremos completar cada uno
                  con la fecha real, una foto y la historia de esa cita.
                </p>
              </div>
            )}

            {activePlace && (
              <motion.div
                key={activePlace.id}
                className="place-feature"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="place-feature__topline">
                  <span>{activePlace.district}</span>
                  <span>
                    {String(places.findIndex((place) => place.id === activePlace.id) + 1).padStart(
                      2,
                      '0',
                    )}
                    /{String(places.length).padStart(2, '0')}
                  </span>
                </div>

                <h3>{activePlace.name}</h3>

                <p className="place-feature__address">
                  <MapPin size={15} />
                  {activePlace.addressLabel}
                </p>

                <p className="place-feature__memory">{activePlace.memory}</p>

                {activePlace.photo ? (
                  <img
                    className="place-feature__photo"
                    src={activePlace.photo}
                    alt={`Recuerdo en ${activePlace.name}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="place-feature__photo-placeholder">
                    <span>Foto del lugar / cita</span>
                    <small>opcional</small>
                  </div>
                )}

                <a
                  className="place-feature__link"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver ubicación
                  <ExternalLink size={15} />
                </a>
              </motion.div>
            )}
          </aside>
        </div>

        <div className="places-list" aria-label="Lugares importantes">
          {places.map((place, index) => {
            const selected = place.id === activeId

            return (
              <motion.button
                key={place.id}
                type="button"
                className={`place-row${selected ? ' place-row--active' : ''}`}
                onClick={() => setActiveId(place.id)}
                whileTap={{ scale: 0.985 }}
              >
                <span className="place-row__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="place-row__copy">
                  <strong>{place.name}</strong>
                  <small>{place.district}</small>
                </span>
                <MapPin size={18} />
              </motion.button>
            )
          })}

          <div className="place-row place-row--future">
            <span className="place-row__number">
              <Plus size={16} />
            </span>
            <span className="place-row__copy">
              <strong>Los que todavía faltan</strong>
              <small>La estructura ya está lista para seguir creciendo.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
