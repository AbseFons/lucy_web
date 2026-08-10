import { timeline } from '../data/timeline'

/**
 * Capa mínima preparada para que el contenido deje de ser local en el futuro.
 * Más adelante puede apuntar a Supabase, Firebase o una API propia sin obligar
 * a reescribir los componentes visuales.
 */
export const contentService = {
  async getTimeline() {
    return timeline
  },
}
