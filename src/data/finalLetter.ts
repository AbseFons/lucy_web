export type FinalLetterData = {
  recipient: string
  dateLabel: string
  lockedUntil: string
  preface: string
  paragraphs: string[]
  closing: string
  signature: string
  postscript?: string
}

/**
 * Esta es una PRIMERA VERSIÓN editable de la carta.
 *
 * Está escrita únicamente con hechos ya definidos para la web:
 * 2016, los reencuentros, 26/03/2026, 14/05/2026 y el regalo por los
 * tres meses del 14/08/2026.
 *
 * Antes de publicar, conviene que Absé cambie o agregue frases que solo
 * podrían salir de él: anécdotas, expresiones internas y lo que siente por Lucy.
 */
export const finalLetter: FinalLetterData = {
  recipient: 'Lucy',
  dateLabel: '14 de agosto de 2026',
  lockedUntil: '2026-08-14',
  preface: 'Hay algo que quería decirte sin esconderlo detrás de una animación.',
  paragraphs: [
    'Cuando pienso en nosotros, me sigue pareciendo curioso que esta historia no haya empezado realmente este año. En 2016 ya estábamos ahí, sentados juntos casi todo quinto de secundaria, gustándonos sin terminar de saberlo.',
    'Después vinieron 2017, 2018 y hasta 2025. Nos encontramos, nos alejamos y volvimos a encontrarnos. Durante mucho tiempo fuimos una colección de “casi”. Y ahora me gusta mirar hacia atrás porque todos esos intentos forman parte de cómo llegamos hasta aquí.',
    'El 26 de marzo de 2026 volvimos a hablar una vez más. Solo que esta vez fue diferente. Y el 14 de mayo dejamos de ser una posibilidad pendiente para convertirnos finalmente en nosotros.',
    'Hoy cumplimos tres meses. Puede parecer poco comparado con todos los años que llevamos conociéndonos, pero también siento que en estos meses empezamos a construir algo que durante mucho tiempo no consiguió encontrar su momento.',
    'Esta página no intenta resumirte ni resumirnos. Solo quería dejar un lugar donde guardar fechas, canciones, fotos, lugares, pequeñas cosas y recuerdos que para cualquiera podrían parecer normales, pero que para mí ya tienen tu nombre.',
    'Y si dentro de unos meses o unos años volvemos a entrar aquí, espero que todo esto se vea pequeño comparado con la cantidad de recuerdos nuevos que hayamos conseguido añadir.',
  ],
  closing: 'Feliz tres meses, Lucy.',
  signature: 'Absé',
  postscript: '2016 — ∞',
}
