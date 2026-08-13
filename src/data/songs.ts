export type Song = {
  id: string
  title: string
  artist: string
  note: string
  audioSrc?: string
  coverSrc?: string
  spotifyUrl?: string
  youtubeUrl?: string
  featured?: boolean
}

export const musicSettings = {
  /**
   * Cuando ya exista una canción principal con `audioSrc`,
   * puedes cambiar esto a true para que intente iniciar al pulsar
   * "Entrar" en la portada. El clic del usuario permite cumplir
   * con las restricciones de autoplay de la mayoría de navegadores.
   */
  playFeaturedOnEnter: false,
} as const

/**
 * Son espacios de contenido, no canciones inventadas.
 * Reemplaza título, artista, nota y agrega audio/portada cuando elijas
 * las canciones reales de ustedes.
 */
export const songs: Song[] = [
  {
    id: 'song-01',
    title: 'Canción 01',
    artist: 'Pendiente',
    note: 'Aquí irá la canción principal de ustedes y por qué significa algo especial.',
    featured: true,
  },
  {
    id: 'song-02',
    title: 'Canción 02',
    artist: 'Pendiente',
    note: 'Una canción asociada a una cita, conversación o momento concreto.',
  },
  {
    id: 'song-03',
    title: 'Canción 03',
    artist: 'Pendiente',
    note: 'Otro espacio para una canción que tenga una historia detrás.',
  },
  {
    id: 'song-04',
    title: 'Canción 04',
    artist: 'Pendiente',
    note: 'Puede ser una canción divertida, no todas tienen que ser sentimentales.',
  },
  {
    id: 'song-05',
    title: 'Canción 05',
    artist: 'Pendiente',
    note: 'Una canción para uno de esos recuerdos que inmediatamente vuelven al escucharla.',
  },
  {
    id: 'song-06',
    title: 'Canción 06',
    artist: 'Pendiente',
    note: 'La lista puede seguir creciendo sin modificar el reproductor.',
  },
]

export const featuredSongIndex = Math.max(
  0,
  songs.findIndex((song) => song.featured),
)
