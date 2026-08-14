import { useCallback, useMemo, useState } from 'react'
import { loveNotes } from '../data/loveNotes'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'tu-y-yo-love-notes-opened-v1'

function isUnlocked(lockedUntil?: string) {
  if (!lockedUntil) return true

  if (import.meta.env.DEV) return true

  const today = new Date()
  const unlockDate = new Date(`${lockedUntil}T00:00:00`)

  return today >= unlockDate
}

export function useLoveNotes() {
  const [openedIds, setOpenedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeNote = useMemo(
    () => loveNotes.find((note) => note.id === activeId) ?? null,
    [activeId],
  )

  const openNote = useCallback(
    (id: string) => {
      const note = loveNotes.find((item) => item.id === id)
      if (!note || !isUnlocked(note.lockedUntil)) return false

      setActiveId(id)
      setOpenedIds((previous) =>
        previous.includes(id) ? previous : [...previous, id],
      )

      return true
    },
    [setOpenedIds],
  )

  const closeNote = useCallback(() => setActiveId(null), [])

  const validOpenedIds = useMemo(
    () => openedIds.filter((id) => loveNotes.some((note) => note.id === id)),
    [openedIds],
  )

  const unlockedNotes = useMemo(
    () => loveNotes.filter((note) => isUnlocked(note.lockedUntil)),
    [],
  )

  return {
    notes: loveNotes,
    activeNote,
    openedIds: validOpenedIds,
    openedCount: validOpenedIds.length,
    unlockedCount: unlockedNotes.length,
    totalCount: loveNotes.length,
    openNote,
    closeNote,
    isUnlocked,
  }
}
