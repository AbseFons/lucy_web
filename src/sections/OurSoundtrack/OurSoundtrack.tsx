import { motion } from 'framer-motion'
import {
  ExternalLink,
  Headphones,
  Music2,
  Pause,
  Play,
} from 'lucide-react'
import { SongArtwork } from '../../components/music/SongArtwork'
import { useMusicPlayer } from '../../context/MusicPlayerContext'
import { songs } from '../../data/songs'

export function OurSoundtrack() {
  const {
    currentIndex,
    currentSong,
    isPlaying,
    hasPlayableSong,
    selectTrack,
    toggle,
  } = useMusicPlayer()

  const selectedPlayable = Boolean(currentSong.audioSrc)

  return (
    <section className="section soundtrack-section" id="musica">
      <div className="section__inner">
        <header className="soundtrack-heading">
          <div>
            <p className="eyebrow eyebrow--light">Nuestra banda sonora</p>
            <h2 className="display display--light">Hay canciones que ya son lugares.</h2>
          </div>

          <p className="soundtrack-heading__copy">
            Todas y cada una de estas canciones nos describen, nos recuerdan y nos acompañan. Algunas son nuestras favoritas, otras nos traen recuerdos de momentos que compartimos. Todas son parte de nuestra historia.
          </p>
        </header>

        <div className="soundtrack-layout">
          <motion.div
            className="soundtrack-feature"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.75 }}
          >
            <div className="soundtrack-feature__visual">
              <div
                className={`soundtrack-disc${isPlaying && hasPlayableSong ? ' is-playing' : ''}`}
              >
                <div className="soundtrack-disc__grooves" />
                <SongArtwork
                  song={currentSong}
                  index={currentIndex}
                  className="soundtrack-disc__cover"
                />
                <span className="soundtrack-disc__hole" />
              </div>

              <span className="soundtrack-feature__number">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(songs.length).padStart(2, '0')}
              </span>
            </div>

            <div className="soundtrack-feature__content">
              <p className="soundtrack-feature__label">
                <Headphones size={15} />
                {currentSong.featured ? 'Canción principal' : 'Ahora seleccionada'}
              </p>

              <h3>{currentSong.title}</h3>
              <span className="soundtrack-feature__artist">{currentSong.artist}</span>

              <p className="soundtrack-feature__note">{currentSong.note}</p>

              <div className="soundtrack-feature__actions">
                <button
                  type="button"
                  className="soundtrack-feature__play"
                  onClick={toggle}
                  disabled={!selectedPlayable}
                >
                  {isPlaying && selectedPlayable ? (
                    <>
                      <Pause size={17} />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Play size={17} />
                      {selectedPlayable ? 'Escuchar' : 'Audio pendiente'}
                    </>
                  )}
                </button>

                {currentSong.spotifyUrl && (
                  <a href={currentSong.spotifyUrl} target="_blank" rel="noreferrer">
                    Spotify
                    <ExternalLink size={14} />
                  </a>
                )}

                {currentSong.youtubeUrl && (
                  <a href={currentSong.youtubeUrl} target="_blank" rel="noreferrer">
                    YouTube
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {!selectedPlayable && (
                <p className="soundtrack-feature__helper">
                  Cuando elijas esta canción, agrega su archivo en{' '}
                  <code>public/music/</code> y enlázalo desde{' '}
                  <code>src/data/songs.ts</code>.
                </p>
              )}
            </div>
          </motion.div>

          <div className="soundtrack-list" aria-label="Canciones de nuestra historia">
            {songs.map((song, index) => {
              const active = index === currentIndex
              const playable = Boolean(song.audioSrc)

              return (
                <motion.button
                  key={song.id}
                  type="button"
                  className={[
                    'soundtrack-row',
                    active ? 'soundtrack-row--active' : '',
                    !playable ? 'soundtrack-row--pending' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => selectTrack(index, playable)}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ delay: index * 0.055, duration: 0.45 }}
                >
                  <span className="soundtrack-row__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="soundtrack-row__art">
                    <SongArtwork song={song} index={index} />
                  </span>

                  <span className="soundtrack-row__copy">
                    <strong>{song.title}</strong>
                    <small>{song.artist}</small>
                  </span>

                  <span className="soundtrack-row__status" aria-hidden="true">
                    {active && isPlaying && playable ? (
                      <span className="soundtrack-equalizer">
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : playable ? (
                      <Play size={15} />
                    ) : (
                      <Music2 size={15} />
                    )}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
