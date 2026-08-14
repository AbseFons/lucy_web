import { useCallback, useMemo, useState } from 'react'
import { memoryJarItems } from '../data/memoryJar'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'tu-y-yo-memory-jar-seen-v1'

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)]
}

export function useMemoryJar() {
  const [seenIds, setSeenIds] = useLocalStorage<string[]>(STORAGE_KEY, [])
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [drawCount, setDrawCount] = useState(0)

  const validSeenIds = useMemo(
    () => seenIds.filter((id) => memoryJarItems.some((item) => item.id === id)),
    [seenIds],
  )

  const unseenItems = useMemo(
    () => memoryJarItems.filter((item) => !validSeenIds.includes(item.id)),
    [validSeenIds],
  )

  const currentItem = useMemo(
    () => memoryJarItems.find((item) => item.id === currentId) ?? null,
    [currentId],
  )

  const allSeen = validSeenIds.length >= memoryJarItems.length

  const draw = useCallback(() => {
    if (unseenItems.length === 0) return null

    const selected = randomItem(unseenItems)
    setCurrentId(selected.id)
    setDrawCount((count) => count + 1)

    setSeenIds((previous) => {
      if (previous.includes(selected.id)) return previous
      return [...previous, selected.id]
    })

    return selected
  }, [setSeenIds, unseenItems])

  const close = useCallback(() => {
    setCurrentId(null)
  }, [])

  const reset = useCallback(() => {
    setSeenIds([])
    setCurrentId(null)
    setDrawCount((count) => count + 1)
  }, [setSeenIds])

  return {
    items: memoryJarItems,
    currentItem,
    seenIds: validSeenIds,
    unseenCount: Math.max(0, memoryJarItems.length - validSeenIds.length),
    seenCount: validSeenIds.length,
    totalCount: memoryJarItems.length,
    allSeen,
    drawCount,
    draw,
    close,
    reset,
  }
}
