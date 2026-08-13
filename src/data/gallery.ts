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
    title: 'Una de nuestras favoritas',
    caption: 'Aquí irá una foto que merezca abrir la galería.',
    category: 'favoritas',
    featured: true,
    portrait: false,
    handwritten: 'de esas que uno guarda ♡',
  },
  {
    id: 'memory-02',
    title: 'Una cita',
    caption: 'Un espacio para una foto y la historia breve de ese día.',
    category: 'citas',
    portrait: true,
  },
  {
    id: 'memory-03',
    title: 'Nosotros siendo nosotros',
    caption: 'No todas las fotos favoritas tienen que ser perfectas.',
    category: 'nosotros',
    portrait: false,
  },
  {
    id: 'memory-04',
    title: 'Un lugar importante',
    caption: 'Podremos añadir aquí el lugar y la fecha cuando elijamos la foto.',
    category: 'lugares',
    portrait: true,
  },
  {
    id: 'memory-05',
    title: 'Un pequeño detalle',
    caption: 'Algo que quizá no necesite explicación para ustedes.',
    category: 'detalles',
    portrait: false,
  },
  {
    id: 'memory-06',
    title: 'Otra cita',
    caption: 'Una escena más para esta parte de la historia.',
    category: 'citas',
    portrait: false,
  },
  {
    id: 'memory-07',
    title: 'Una foto espontánea',
    caption: 'Para esas fotos que terminan gustando más de lo esperado.',
    category: 'nosotros',
    portrait: true,
  },
  {
    id: 'memory-08',
    title: 'Otro lugar de ustedes',
    caption: 'Lima tendrá varios puntos importantes cuando armemos el mapa.',
    category: 'lugares',
    featured: true,
    portrait: false,
  },
  {
    id: 'memory-09',
    title: 'Algo sencillo',
    caption: 'Un recuerdo pequeño también merece quedarse.',
    category: 'detalles',
    portrait: true,
  },
  {
    id: 'memory-10',
    title: 'Otra favorita',
    caption: 'Este espacio puede cerrar la primera selección de fotos.',
    category: 'favoritas',
    portrait: false,
    handwritten: 'esta sí va aquí',
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
