export type Anniversary = {
  id: string
  date: string
  monthNumber: number
  eyebrow: string
  title: string
  shortText: string
  message: string
  featured?: boolean
  image?: string
}

export const anniversaries: Anniversary[] = [
  {
    id: '2026-05-14',
    date: '2026-05-14',
    monthNumber: 0,
    eyebrow: '14 de mayo de 2026',
    title: 'Aquí empezó “nosotros”.',
    image: '/memories/tomas1.webp',
    shortText: 'El día en que dejamos de ser un casi.',
    message:
      'Después de tantos años, conversaciones que iban y venían y momentos que no terminaban de coincidir, este fue el día en que por fin empezamos nuestra relación. Aquí comienza oficialmente Tú y yo.',
  },
  {
    id: '2026-06-14',
    date: '2026-06-14',
    monthNumber: 1,
    eyebrow: '14 de junio de 2026',
    title: 'Nuestro primer mes.',
    image: '/memories/portada.webp',
    shortText: 'Treinta y un días siendo tú y yo.',
    message:
      'Amé mucho tu carta. Me hizo sentir que todo lo que hemos vivido hasta ahora ha valido la pena y que lo que nos espera es aún mejor. Gracias por ser tú, por elegirme y por hacerme sentir tan especial cada día.',
  },
  {
    id: '2026-07-14',
    date: '2026-07-14',
    monthNumber: 2,
    eyebrow: '14 de julio de 2026',
    title: 'Dos meses.',
    image: '/memories/cana.webp',
    shortText: 'La historia ya tenía nuevas escenas favoritas.',
    message:
      'Dos meses de amor, risas y momentos inolvidables. Cada día contigo es un regalo y estoy emocionado por todos los recuerdos que aún nos esperan. Gracias por ser mi compañera de vida.',
  },
  {
    id: '2026-08-14',
    date: '2026-08-14',
    monthNumber: 3,
    eyebrow: '14 de agosto de 2026',
    title: 'Tres meses.',
    image: '/memories/los-tres.webp',
    shortText: 'Y un pequeño lugar en internet hecho para nosotros.',
    message:
      'Este es el 14 para el que nació esta página. Espero que te guste y que la disfrutes tanto como yo. Te amo y estoy muy feliz de que estemos construyendo nuestra historia juntos.',
    featured: true,
  },
]
