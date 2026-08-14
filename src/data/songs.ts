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
    title: 'Aprender A Quererte',
    artist: 'Morat',
    note: 'Escuchar esta canción me hace pensar en ti siempre.',
    audioSrc: '/music/aprender-quererte.ogg',
    coverSrc: '/music/aprender-quererte.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3zNcn4BaVfKORyx3uDfruW?si=f297e2b958094c83',
    youtubeUrl: 'https://music.youtube.com/watch?v=nzB0MvMZiqQ&si=f8tezQCP_rFMBvXq',
    featured: true,
  },
  {
    id: 'song-02',
    title: 'She Is The One',
    artist: 'Robbie Williams',
    note: 'Es la primera canción que te canté. No me salió como esperaba, pero me siento identificado al escucharla y pensar en ti.',
    audioSrc: '/music/shes-the-one.ogg',
    coverSrc: '/music/shes-the-one.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/4F9fv546vGr8cxEwbsiYxB?si=5e6a8e7a5e7a47db',
    youtubeUrl: 'https://music.youtube.com/watch?v=Vbw737_ZROo&si=wgvsJXsamx3aRCWS',
  },
  {
    id: 'song-03',
    title: 'No Hay Nadie Más',
    artist: 'Sebastián Yatra',
    note: 'No hay nadie más que te ame como yo te amo. No hay nadie más que me haga sentir como tú me haces sentir.',
    audioSrc: '/music/no-hay-nadie-mas.ogg',
    coverSrc: '/music/no-hay-nadie-mas.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3IPJg1sdqLj12kFIndaonN?si=18f34f4edc1b45c8',
    youtubeUrl: 'https://music.youtube.com/watch?v=qYnm4cGdHPs&si=DeUCnTcsE8BbVLfG',
  },
  {
    id: 'song-04',
    title: 'No Se Va',
    artist: 'Morat',
    note: 'La canción que escuchabas mucho, y amí me gusta también.',
    audioSrc: '/music/no-se-va.ogg',
    coverSrc: '/music/aprender-quererte.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/4khWEpnaijN0G1x019Uzdr?si=b188916d26394bb7',
    youtubeUrl: 'https://music.youtube.com/watch?v=Nf7j6ulpNro&si=aiTMOJfWRDaRp9d5',
  },
  {
    id: 'song-05',
    title: 'Te Amo',
    artist: 'Piso 21 ft. Paulo Londra',
    note: 'Cuando escucho esta canción pienso en ti, y te la canté hace poco xd',
    audioSrc: '/music/te-amo.ogg',
    coverSrc: '/music/te-amo.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2RVrdr062uLFxXwIxwdXPH?si=d7a2117afc3546f8',
    youtubeUrl: 'https://music.youtube.com/watch?v=gfDuo35ZIDc&si=-Ba2k59tEg7HE4kC',
  },
  {
    id: 'song-06',
    title: 'Todo Cambió',
    artist: 'Camila',
    note: 'La cantamos muy seguido, y quiero cantarla siempre contigo.',
    audioSrc: '/music/todo-cambio.ogg',
    coverSrc: '/music/todo-cambio.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/4OyzSXRSadNQt5EMwASdap?si=1cd635a382ed49c6',
    youtubeUrl: 'https://music.youtube.com/watch?v=vN6oReb9Avg&si=deZDCBtsOs5ud6mP',
  },
  {
    id: 'song-07',
    title: 'Fly Me To The Moon',
    artist: 'Frank Sinatra',
    note: 'No sé si recuerdes esta canción, fue la segunda que te canté. Tú me llevas a la luna, y quiero que me lleves siempre contigo.',
    audioSrc: '/music/fly-me-to-the-moon.ogg',
    coverSrc: '/music/fly-me-to-the-moon.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/7FXj7Qg3YorUxdrzvrcY25?si=2ccc7dcf5fda40ae',
    youtubeUrl: 'https://music.youtube.com/watch?v=ZEcqHA7dbwM&si=vYWiq8HgCbyDT8uY',
  },
  {
    id: 'song-08',
    title: 'Mi Persona Favorita',
    artist: 'Rio Roma',
    note: 'Otra canción que nos gusta bastante y la cantamos mucho!',
    audioSrc: '/music/persona-favorita.ogg',
    coverSrc: '/music/persona-favorita.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/70fVcEP5pRrxaIICY3DcPe?si=56f62777c4b14299',
    youtubeUrl: 'https://music.youtube.com/watch?v=MHDAt4Ho2Hg&si=16hr55MILsRwpqsB',
  },
  {
    id: 'song-09',
    title: 'ADMV',
    artist: 'Maluma',
    note: 'Me hiciste escuchar esta canción y me gustó mucho. Describe la vida que quiero tener contigo.',
    audioSrc: '/music/admv.ogg',
    coverSrc: '/music/admv.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3eJMSq78dDaFb7VvhNFnq6?si=d674b6c7291c4b0f',
    youtubeUrl: 'https://music.youtube.com/watch?v=Oe2u0QqauRw&si=_v-AbnxWSk47iL1Z',
  },
  {
    id: 'song-10',
    title: 'Amor Mío',
    artist: 'Daniela Darcourt',
    note: 'Me encantó cuando me la cantaste. Cada día me enamoro más de ti, y quiero que me sigas cantando esta canción siempre.',
    audioSrc: '/music/amor-mio.ogg',
    coverSrc: '/music/amor-mio.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2dYmb0tTGWs8mGfuJuowY3?si=73c9093badc14d7c',
    youtubeUrl: 'https://music.youtube.com/watch?v=-KzIjng1lbA&si=C5ySUMyl7XnPlSHl',
  },
  {
    id: 'song-11',
    title: 'Eres tu',
    artist: 'Reik',
    note: 'Me encantó esta canción desde la primera vez que me la hiciste escuchar.',
    audioSrc: '/music/eres-tu.ogg',
    coverSrc: '/music/eres-tu.webp',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3iVu49ZmRHsCdRA0RTGUkP?si=fe9838441ddc43d3',
    youtubeUrl: 'https://music.youtube.com/watch?v=IKpYAgbo2yI&si=ZCbyzXBouk2-ZWJz',
  }
]

export const featuredSongIndex = Math.max(
  0,
  songs.findIndex((song) => song.featured),
)
