import { couple } from '../data/couple'

export function useAnniversary() {
  const now = new Date()
  const relationship = new Date(`${couple.dates.relationship}T00:00:00`)

  const isDay14 = now.getDate() === 14 && now >= relationship
  const completedMonths =
    (now.getFullYear() - relationship.getFullYear()) * 12 +
    (now.getMonth() - relationship.getMonth())

  return {
    isDay14,
    completedMonths: Math.max(0, completedMonths),
  }
}
