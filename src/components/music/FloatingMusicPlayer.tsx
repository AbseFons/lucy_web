import { AnimatePresence, motion } from 'framer-motion'
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'
import { useMusicPlayer } from '../../context/MusicPlayerContext'
import { SongArtwork } from './SongArtwork'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
}

export function FloatingMusicPlayer() {
  const {
    currentIndex,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    hasPlayableSong,
    toggle,
    next,
    previous,
    seek,
    setVolume,
  } = useMusicPlayer()

  return (
    <AnimatePresence>
      {hasPlayableSong && (
        <motion.aside
          className="floating-player"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          aria-label="Reproductor de música"
        >
          <div className={`floating-player__art${isPlaying ? ' is-playing' : ''}`}>
            <SongArtwork
              song={currentSong}
              index={currentIndex}
              className="floating-player__cover"
            />
          </div>

          <div className="floating-player__body">
            <div className="floating-player__top">
              <div className="floating-player__copy">
                <strong>{currentSong.title}</strong>
                <span>{currentSong.artist}</span>
              </div>

              <div className="floating-player__controls">
                <button type="button" onClick={previous} aria-label="Canción anterior">
                  <SkipBack size={16} />
                </button>

                <button
                  type="button"
                  className="floating-player__play"
                  onClick={toggle}
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                </button>

                <button type="button" onClick={next} aria-label="Canción siguiente">
                  <SkipForward size={16} />
                </button>
              </div>
            </div>

            <div className="floating-player__timeline">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={Math.max(duration, 0)}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => seek(Number(event.target.value))}
                aria-label="Posición de la canción"
              />
              <span>{formatTime(duration)}</span>
            </div>

            <div className="floating-player__volume">
              <Volume2 size={13} />
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                aria-label="Volumen"
              />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
