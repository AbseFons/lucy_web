import { useEffect, useMemo, useState } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'
import { couple } from '../data/couple'

function getBreakdown(now: Date) {
  const start = new Date(`${couple.dates.relationship}T00:00:00`)
  const totalDays = Math.max(0, differenceInDays(now, start))
  const totalHours = Math.max(0, differenceInHours(now, start))
  const totalMinutes = Math.max(0, differenceInMinutes(now, start))

  const months = Math.floor(totalDays / 30.436875)
  const days = Math.max(0, Math.floor(totalDays - months * 30.436875))
  const hours = totalHours % 24
  const minutes = totalMinutes % 60

  return { months, days, hours, minutes, totalDays }
}

export function useRelationshipTime() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return useMemo(() => getBreakdown(now), [now])
}
