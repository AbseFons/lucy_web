export type TimelineItem = {
  year?: number
  date?: string
  title: string
  description: string
  tone?: 'warm' | 'quiet' | 'featured'
}

export const timeline: TimelineItem[] = [
  {
    year: 2016,
    title: 'Nos conocimos',
    description:
      'Quinto de secundaria. Nos sentamos juntos casi todo el año. Nos gustábamos, aunque ninguno parecía haberse enterado.',
    tone: 'warm',
  },
  {
    year: 2017,
    title: 'Volvimos a hablar',
    description:
      'La historia intentó continuar, pero todavía no era nuestro momento.',
    tone: 'quiet',
  },
  {
    year: 2018,
    title: 'Otra vez',
    description:
      'Seguíamos encontrando el camino de vuelta, sin llegar a concretar nada.',
    tone: 'quiet',
  },
  {
    date: '2025-02',
    title: 'Nos encontramos de nuevo',
    description:
      'Volvimos a hablar en febrero. Estuvimos cerca, pero la historia todavía guardaba una vuelta más.',
    tone: 'quiet',
  },
  {
    date: '2026-03-26',
    title: 'Esta vez fue diferente',
    description:
      'Volvimos a hablar. Y esta vez la conversación no se quedó en un intento.',
    tone: 'featured',
  },
  {
    date: '2026-05-14',
    title: 'Tú y yo',
    description:
      'Después de tantos casi, finalmente empezamos nuestra relación.',
    tone: 'featured',
  },
]
