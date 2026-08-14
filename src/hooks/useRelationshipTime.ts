import { useEffect, useMemo, useState } from 'react'
import {
  differenceInCalendarYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'
import { couple } from '../data/couple'

function getBreakdown(now: Date) {
  const start = new Date(`${couple.dates.relationship}T00:00:00`)

  if (now < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
    }
  }

  let cursor = new Date(start)

  const years = differenceInCalendarYears(now, cursor)
  cursor.setFullYear(cursor.getFullYear() + years)

  let months = differenceInMonths(now, cursor)
  cursor.setMonth(cursor.getMonth() + months)

  if (cursor > now) {
    months -= 1
    cursor = new Date(start)
    cursor.setFullYear(cursor.getFullYear() + years)
    cursor.setMonth(cursor.getMonth() + months)
  }

  const days = differenceInDays(now, cursor)
  cursor.setDate(cursor.getDate() + days)

  const hours = differenceInHours(now, cursor)
  cursor.setHours(cursor.getHours() + hours)

  const minutes = differenceInMinutes(now, cursor)
  cursor.setMinutes(cursor.getMinutes() + minutes)

  const seconds = differenceInSeconds(now, cursor)

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays: differenceInDays(now, start),
  }
}

export function useRelationshipTime() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1_000)
    return () => window.clearInterval(id)
  }, [])

  return useMemo(() => getBreakdown(now), [now])
}
