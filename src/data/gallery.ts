export type GalleryCategory =
  | 'favoritas'
  | 'citas'
  | 'nosotros'
  | 'lugares'
  | 'detalles'

export type GalleryItem = {
  id: string
  title: string
  caption: string
  category: GalleryCategory
  date?: string
  location?: string
  src?: string
  alt?: string
  featured?: boolean
  portrait?: boolean
  handwritten?: string
}

/**
 * Estos elementos son contenedores de diseño.
 * No inventan recuerdos: cuando elijas las fotos, reemplaza title/caption/date/location
 * y agrega `src: '/memories/archivo.jpg'`.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'memory-01',
    title: 'Conocimos a Tomás',
    caption: 'Nuestra primera foto juntos, y diría que mi favorita.',
    category: 'favoritas',
    src: '/memories/tomas.jpeg',
    featured: true,
    portrait: false,
    handwritten: 'siempre recordaré esta foto ♡',
  },
  {
    id: 'memory-02',
    title: 'Una cita',
    caption: 'Cantar, comer y tomar contigo son mi pasatiempos favoritos .',
    category: 'citas',
    src: '/memories/cita.jpeg',
    portrait: true,
    handwritten: 'gracias por recordarme a tomar más fotos ♡',
  },
  {
    id: 'memory-03',
    title: 'Morita',
    caption: 'Me gusta mucho esta foto, tú sonriendo y con Morita.',
    category: 'favoritas',
    src: '/memories/morita.jpeg',
    portrait: false,
    handwritten: 'amo que me pases fotos tuyas ♡',
  },
  {
    id: 'memory-04',
    title: 'Nuestro primer juego presencial',
    caption: 'Aún no estoy tan de acuerdo con la decisión de la IA.',
    category: 'citas',
    src: '/memories/primer-juego.jpeg',
    portrait: true,
  },
  {
    id: 'memory-05',
    title: 'Pude verte en tu colegio',
    caption: 'Gracias por invitarme a conocer más de ti.',
    category: 'lugares',
    src: '/memories/colegio.webp',
    portrait: false,
  },
  {
    id: 'memory-06',
    title: 'Los tres',
    caption: 'Una foto que me gusta mucho, porque estamos juntos los tres.',
    category: 'nosotros',
    src: '/memories/los-tres.jpeg',
    portrait: false,
    handwritten: 'somos una familia ♡'
  },
  {
    id: 'memory-07',
    title: 'Primera cana',
    caption: 'Mi primera cana, tomada con el amor de mi vida.',
    category: 'nosotros',
    src: '/memories/cana.jpeg',
    portrait: true,
  },
  {
    id: 'memory-08',
    title: 'Tu y Morita',
    caption: 'Esta foto también me encanta y es de mis favoritas',
    category: 'favoritas',
    portrait: false,
    src: '/memories/foto-mora.jpeg',
    handwritten: 'amo las fotos tuyas ♡'
  },
  {
    id: 'memory-09',
    title: 'Nuestra primera salida oficial con Morita.',
    caption: 'Celebrando con Morita a lado, la pasé bonito esa noche.',
    category: 'nosotros',
    portrait: true,
    src: '/memories/celebrando.jpeg',
  },
  {
    id: 'memory-10',
    title: 'Morita invasiva xd',
    caption: 'Me dio mucha risa y me gustó saber que Morita es igual de cariñosa que tú.',
    category: 'favoritas',
    portrait: false,
    src: '/memories/primera-foto-mora.jpeg',
    handwritten: 'estaremos como chicles los tres ♡',
  },
]

export const galleryCategories: Array<{
  id: 'todas' | GalleryCategory
  label: string
}> = [
  { id: 'todas', label: 'Todas' },
  { id: 'favoritas', label: 'Favoritas' },
  { id: 'citas', label: 'Citas' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'lugares', label: 'Lugares' },
  { id: 'detalles', label: 'Detalles' },
]
