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
    title: 'Mucho antes de “nosotros”',
    text:
      'En 2016 estábamos en quinto de secundaria y nos sentamos juntos durante casi todo el año. Lo curioso es que nos gustábamos sin terminar de saberlo.',
    date: '2016',
    handwritten: 'Qué paciencia tuvo nuestra historia.',
  },
  {
    id: 'jar-2017',
    kind: 'casi',
    title: 'Primer “casi”',
    text:
      'En 2017 volvimos a hablar. La historia intentó avanzar, aunque todavía no consiguió convertirse en nosotros.',
    date: '2017',
  },
  {
    id: 'jar-2018',
    kind: 'casi',
    title: 'Otra vuelta',
    text:
      'En 2018 volvimos a encontrarnos. Seguía existiendo algo entre los dos, pero todavía no era el momento.',
    date: '2018',
  },
  {
    id: 'jar-2025',
    kind: 'casi',
    title: 'Casi, otra vez',
    text:
      'En febrero de 2025 volvimos a hablar. Estuvimos cerca, pero nuestra historia todavía se guardó una vuelta más.',
    date: 'Febrero de 2025',
  },
  {
    id: 'jar-2603',
    kind: 'fecha',
    title: 'Esta vez sí',
    text:
      'El 26 de marzo de 2026 volvimos a hablar. Esta vez la conversación no se quedó en otro intento.',
    date: '26 · 03 · 2026',
    handwritten: 'Aquí empezó a cambiar todo.',
  },
  {
    id: 'jar-1405',
    kind: 'fecha',
    title: 'Nosotros',
    text:
      'Después de tantos años, encuentros y “casi”, el 14 de mayo de 2026 finalmente empezó nuestra relación.',
    date: '14 · 05 · 2026',
    handwritten: 'Por fin.',
  },
  {
    id: 'jar-personal-01',
    kind: 'detalle',
    title: 'Por completar · Una de esas pequeñas cosas',
    text:
      'Escribe aquí un detalle cotidiano de Lucy que te guste especialmente: una expresión, una costumbre, algo que haga cuando está feliz o cualquier cosa que solo tú notes.',
  },
  {
    id: 'jar-personal-02',
    kind: 'recuerdo',
    title: 'Por completar · Una cita que repetiría',
    text:
      'Cuenta aquí una cita concreta: dónde estuvieron, qué pasó y cuál es ese detalle que hace que quieras volver a vivirla.',
  },
  {
    id: 'jar-personal-03',
    kind: 'para-ti',
    title: 'Por completar · Algo que nunca te dije así',
    text:
      'Este papelito puede contener una frase breve que quieras decirle y que no necesite una fecha ni una fotografía.',
  },
  {
    id: 'jar-personal-04',
    kind: 'detalle',
    title: 'Por completar · Algo que me hace reír',
    text:
      'Añade una anécdota divertida, una frase interna o un momento absurdo que ambos recuerden.',
  },
  {
    id: 'jar-personal-05',
    kind: 'recuerdo',
    title: 'Por completar · Lima',
    text:
      'Elige uno de sus lugares importantes —Barranco, MAC, San Felipe, Magdalena u otro— y guarda aquí una escena concreta que haya ocurrido allí.',
  },
  {
    id: 'jar-personal-06',
    kind: 'para-ti',
    title: 'Por completar · Para un día cualquiera',
    text:
      'Un mensaje que Lucy pueda sacar del tarro cualquier día y que siga teniendo sentido sin importar cuándo lo lea.',
  },
]

export const memoryJarKindLabels: Record<MemoryJarKind, string> = {
  recuerdo: 'Recuerdo',
  detalle: 'Pequeño detalle',
  casi: 'Uno de nuestros casi',
  fecha: 'Una fecha',
  'para-ti': 'Para ti',
}
