import { useEffect, useMemo, useState } from 'react'
import { differenceInCalendarDays, intervalToDuration } from 'date-fns'
import { couple } from '../data/couple'

function getBreakdown(now: Date) {
  const start = new Date(`${couple.dates.relationship}T00:00:00`)

  if (now < start) {
    return { months: 0, days: 0, hours: 0, minutes: 0, totalDays: 0 }
  }

  const duration = intervalToDuration({ start, end: now })

  return {
    months: duration.months ?? 0,
    days: duration.days ?? 0,
    hours: duration.hours ?? 0,
    minutes: duration.minutes ?? 0,
    totalDays: differenceInCalendarDays(now, start),
  }
}

export function useRelationshipTime() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return useMemo(() => getBreakdown(now), [now])
}
