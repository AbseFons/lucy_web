import { Music2 } from 'lucide-react'
import type { Song } from '../../data/songs'

type SongArtworkProps = {
  song: Song
  index: number
  className?: string
}

export function SongArtwork({ song, index, className = '' }: SongArtworkProps) {
  if (song.coverSrc) {
    return (
      <img
        className={className}
        src={song.coverSrc}
        alt={`Portada de ${song.title}`}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div
      className={`song-artwork-placeholder song-artwork-placeholder--${(index % 4) + 1} ${className}`}
      aria-label={`Portada pendiente de ${song.title}`}
      role="img"
    >
      <span className="song-artwork-placeholder__ring" />
      <Music2 size={24} strokeWidth={1.4} />
      <small>Portada</small>
    </div>
  )
}
