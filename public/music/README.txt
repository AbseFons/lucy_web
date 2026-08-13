AQUÍ VAN LOS ARCHIVOS DE AUDIO Y LAS PORTADAS.

Ejemplo:

public/
└── music/
    ├── cancion-principal.mp3
    └── cancion-principal.webp

Luego en src/data/songs.ts:

{
  id: 'song-01',
  title: 'Título real',
  artist: 'Artista',
  note: 'Por qué esta canción es importante para ustedes.',
  audioSrc: '/music/cancion-principal.mp3',
  coverSrc: '/music/cancion-principal.webp',
  spotifyUrl: 'https://open.spotify.com/...',
  youtubeUrl: 'https://www.youtube.com/...',
  featured: true,
}

RECOMENDACIONES:
- Audio: MP3 o M4A compatible con navegador.
- No subas archivos innecesariamente pesados.
- Portadas: WebP/JPG, idealmente cuadradas.
- No publiques música comercial sin considerar las licencias aplicables.
- Si prefieres no alojar el audio, puedes omitir audioSrc y usar solo enlaces externos.
