import { useEffect, useMemo, useState } from 'react'
import { couple } from '../data/couple'

function getState(now: Date) {
  const relationship = new Date(`${couple.dates.relationship}T00:00:00`)
  const isDay14 = now.getDate() === 14 && now >= relationship
  const completedMonths =
    (now.getFullYear() - relationship.getFullYear()) * 12 +
    (now.getMonth() - relationship.getMonth())

  return {
    isDay14,
    completedMonths: Math.max(0, completedMonths),
    isRelationshipStart:
      now.getFullYear() === relationship.getFullYear() &&
      now.getMonth() === relationship.getMonth() &&
      now.getDate() === relationship.getDate(),
  }
}

export function useAnniversary() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return useMemo(() => getState(now), [now])
}
