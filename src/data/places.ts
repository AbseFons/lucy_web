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
    name: 'Caminata por Barranco',
    shortName: 'Barranco',
    district: 'Barranco',
    coordinates: [-12.145388, -77.024343],
    addressLabel: 'Malecón de los Ingleses · Barranco',
    memory: 'Aquí caminamos, conversamos, nos conocimos más. Hablamos de nuestro presente y futuro, en tan solo el segundo día ya estuve muy enamorado de ti.',
    featured: true,
  },
  {
    id: 'mac-lima',
    name: 'Museo MAC',
    shortName: 'MAC',
    district: 'Barranco',
    coordinates: [-12.13703, -77.02283],
    addressLabel: 'Av. Grau 1511 · Barranco',
    memory: 'Fue bonito ver cada pintura o escultura, tratar de darle un significado y puntuarlo según nuestros gustos. Fue gracioso y bonito xd',
  },
  {
    id: 'residencial-san-felipe',
    name: 'Residencial San Felipe',
    shortName: 'San Felipe',
    district: 'Jesús María',
    coordinates: [-12.087657, -77.053225],
    addressLabel: 'Residencial San Felipe · Jesús María',
    memory: 'Una de mis citas favoritas! Tú y yo, caminando de la mano, hablando de todo y de nada, y disfrutando de la compañía del otro. Fue un momento muy feliz para mí.',
  },
  {
    id: 'mercado-magdalena',
    name: 'Mercado de Magdalena',
    shortName: 'Magdalena',
    district: 'Magdalena del Mar',
    coordinates: [-12.09119, -77.074043],
    addressLabel: 'Jr. Bolognesi · Magdalena del Mar',
    memory: 'Caminamos mientras comíamos helado, fue bonito y el helado se acabó rápido. Faltó tomar fotos, mi amor. Desde ahora es obligatorio tomar fotos.',
  },
]
