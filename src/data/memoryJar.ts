export type MemoryJarKind =
  | 'recuerdo'
  | 'detalle'
  | 'casi'
  | 'fecha'
  | 'para-ti'

export type MemoryJarItem = {
  id: string
  kind: MemoryJarKind
  title: string
  text: string
  date?: string
  signature?: string
  imageSrc?: string
  imageAlt?: string
  handwritten?: string
}

/**
 * Tarro inicial.
 *
 * Los recuerdos concretos incluidos aquí salen de la historia ya definida
 * para la web. Los elementos marcados como "Por completar" están preparados
 * para que Absé añada anécdotas reales antes de publicar la página.
 */
export const memoryJarItems: MemoryJarItem[] = [
  {
    id: 'jar-2016-pupitres',
    kind: 'recuerdo',
    title: 'Apoyaste tu cabeza en mi hombro',
    text:
      'Fue uno de los momentos que más recuerdo de 2016. Estábamos en el salón de quinto de secundaria, y me sentí muy feliz de que apoyaras tu cabeza en mi hombro mientras hablábamos.',
    date: '2016',
    handwritten: 'Qué paciencia tuvo nuestra historia.',
  },
  {
    id: 'jar-2018',
    kind: 'casi',
    title: 'Teléfono malogrado',
    text:
      'En 2018 volvimos a encontrarnos. Fue el momento donde más cerca estuvimos de empezar nuestra historia, pero todavía no fue posible (por Maraboto).',
    date: '2018',
  },
  {
    id: 'jar-2603',
    kind: 'fecha',
    title: 'Esta vez sí',
    text:
      'El 26 de marzo de 2026 volvimos a hablar. Yo siempre te iba a contestar, mi amor',
    date: '26 · 03 · 2026',
    handwritten: 'Aquí empezó a cambiar todo.',
  },
  {
    id: 'jar-1405',
    kind: 'fecha',
    title: 'Nosotros',
    text:
      'Te vi después de 8 años. Estabas tan hermosa como siempre. Y yo estaba tan feliz de verte y abrazarte. Ese día me di cuenta de que no podía dejarte ir.',
    date: '14 · 05 · 2026',
    handwritten: 'Por fin.',
  },
  {
    id: 'jar-personal-01',
    kind: 'detalle',
    title: 'Besos',
    text:
      'Besarte por primera vez fue un momento que nunca olvidaré. Fue espontáneo, lindo, mágico y me hizo sentir que todo era perfecto.',
  },
  {
    id: 'jar-personal-02',
    kind: 'recuerdo',
    title: 'Gustos contrarios?',
    text:
      'Es gracioso que tengamos gustos tan diferentes en muchas cosas xd pero eso no nos impide disfrutar de lo que nos gusta a cada uno.',
  },
  {
    id: 'jar-personal-03',
    kind: 'para-ti',
    title: 'Algo que nunca te dije así',
    text:
      'Cada vez que revisaba tus redes o te stalkeaba, tenía la esperanza de ver algo tuyo, una foto, un comentario, un video. A veces solo quería ver para sentirme cerca de ti, y otras veces para saber cómo estabas y qué hacías. Nunca te lo dije, pero me hacía feliz.',
  },
]

export const memoryJarKindLabels: Record<MemoryJarKind, string> = {
  recuerdo: 'Recuerdo',
  detalle: 'Pequeño detalle',
  casi: 'Uno de nuestros casi',
  fecha: 'Una fecha',
  'para-ti': 'Para ti',
}
