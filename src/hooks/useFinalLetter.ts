import { useEffect, useMemo, useState } from 'react'
import { finalLetter } from '../data/finalLetter'
import { useLocalStorage } from './useLocalStorage'

const READ_KEY = 'tu-y-yo-final-letter-read-v1'

function getUnlockDate() {
  return new Date(`${finalLetter.lockedUntil}T00:00:00`)
}

function getRemaining(now: Date) {
  const target = getUnlockDate()
  const difference = Math.max(0, target.getTime() - now.getTime())

  const totalMinutes = Math.floor(difference / 60_000)
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60

  return { difference, days, hours, minutes }
}

export function useFinalLetter() {
  const [now, setNow] = useState(() => new Date())
  const [opened, setOpened] = useState(false)
  const [hasRead, setHasRead] = useLocalStorage<boolean>(READ_KEY, false)

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  const remaining = useMemo(() => getRemaining(now), [now])

  const unlocked =
    import.meta.env.DEV || remaining.difference <= 0

  const open = () => {
    if (!unlocked) return
    setOpened(true)
  }

  const close = () => {
    setOpened(false)
  }

  const markAsRead = () => {
    setHasRead(true)
  }

  return {
    letter: finalLetter,
    unlocked,
    opened,
    hasRead,
    remaining,
    open,
    close,
    markAsRead,
  }
}
