export type MemoryPlace = {
  id: string
  name: string
  shortName: string
  district: string
  coordinates: [number, number]
  addressLabel: string
  memory: string
  date?: string
  photo?: string
  featured?: boolean
}

/**
 * Las coordenadas son puntos públicos de referencia para mostrar cada zona.
 * Cuando definamos el lugar exacto de una cita, se pueden ajustar sin tocar el mapa.
 *
 * No colocamos domicilios privados: este módulo está pensado para lugares públicos.
 */
export const places: MemoryPlace[] = [
  {
    id: 'malecon-barranco',
    name: 'Malecón de Barranco',
    shortName: 'Barranco',
    district: 'Barranco',
    coordinates: [-12.145388, -77.024343],
    addressLabel: 'Malecón de los Ingleses · Barranco',
    memory: 'Aquí podemos guardar la fecha, una foto y la historia de ese paseo.',
    featured: true,
  },
  {
    id: 'mac-lima',
    name: 'Museo MAC',
    shortName: 'MAC',
    district: 'Barranco',
    coordinates: [-12.13703, -77.02283],
    addressLabel: 'Av. Grau 1511 · Barranco',
    memory: 'Un espacio para contar qué recuerdan de esa visita y qué foto pertenece a ese día.',
  },
  {
    id: 'residencial-san-felipe',
    name: 'Residencial San Felipe',
    shortName: 'San Felipe',
    district: 'Jesús María',
    coordinates: [-12.087657, -77.053225],
    addressLabel: 'Residencial San Felipe · Jesús María',
    memory: 'Aquí puede ir el pequeño recuerdo que convirtió este lugar en uno de los suyos.',
  },
  {
    id: 'mercado-magdalena',
    name: 'Mercado de Magdalena',
    shortName: 'Magdalena',
    district: 'Magdalena del Mar',
    coordinates: [-12.09119, -77.074043],
    addressLabel: 'Jr. Bolognesi · Magdalena del Mar',
    memory: 'Podremos acompañar este punto con una foto, algo que comieron o una anécdota de la cita.',
  },
]
