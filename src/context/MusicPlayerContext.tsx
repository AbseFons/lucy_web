import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { featuredSongIndex, songs } from '../data/songs'

type MusicPlayerContextValue = {
  currentIndex: number
  currentSong: (typeof songs)[number]
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  hasPlayableSong: boolean
  selectTrack: (index: number, autoplay?: boolean) => void
  toggle: () => void
  next: () => void
  previous: () => void
  seek: (seconds: number) => void
  setVolume: (value: number) => void
}

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null)

type MusicPlayerProviderProps = {
  children: ReactNode
}

export function MusicPlayerProvider({ children }: MusicPlayerProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const shouldAutoplayRef = useRef(false)

  const [currentIndex, setCurrentIndex] = useState(featuredSongIndex)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(0.72)

  const currentSong = songs[currentIndex]
  const hasPlayableSong = Boolean(currentSong?.audioSrc)

  useEffect(() => {
    const audio = new Audio()
    audio.preload = 'metadata'
    audio.volume = volume
    audioRef.current = audio

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0)
    const handleLoadedMetadata = () =>
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const handleDurationChange = () =>
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)

      const playableIndices = songs
        .map((song, index) => (song.audioSrc ? index : -1))
        .filter((index) => index >= 0)

      if (playableIndices.length <= 1) {
        audio.currentTime = 0
        setCurrentTime(0)
        return
      }

      const position = playableIndices.indexOf(currentIndex)
      const nextIndex =
        playableIndices[(position + 1 + playableIndices.length) % playableIndices.length]

      shouldAutoplayRef.current = true
      setCurrentIndex(nextIndex)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('durationchange', handleDurationChange)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('durationchange', handleDurationChange)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    setCurrentTime(0)
    setDuration(0)

    if (!currentSong?.audioSrc) {
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
      shouldAutoplayRef.current = false
      return
    }

    audio.src = currentSong.audioSrc
    audio.load()

    if (shouldAutoplayRef.current) {
      shouldAutoplayRef.current = false

      void audio.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [currentIndex, currentSong?.audioSrc])

  const selectTrack = useCallback(
    (index: number, autoplay = true) => {
      if (index < 0 || index >= songs.length) return

      const audio = audioRef.current
      const selectedSong = songs[index]

      if (index === currentIndex) {
        if (!selectedSong.audioSrc || !audio) return

        if (autoplay && audio.paused) {
          void audio.play().catch(() => setIsPlaying(false))
        }
        return
      }

      shouldAutoplayRef.current = autoplay && Boolean(selectedSong.audioSrc)
      setCurrentIndex(index)
    },
    [currentIndex],
  )

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !currentSong?.audioSrc) return

    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [currentSong?.audioSrc])

  const getPlayableSibling = useCallback(
    (direction: 1 | -1) => {
      const playableIndices = songs
        .map((song, index) => (song.audioSrc ? index : -1))
        .filter((index) => index >= 0)

      if (playableIndices.length === 0) return null

      const currentPlayablePosition = playableIndices.indexOf(currentIndex)

      if (currentPlayablePosition === -1) {
        return direction === 1
          ? playableIndices[0]
          : playableIndices[playableIndices.length - 1]
      }

      const nextPosition =
        (currentPlayablePosition + direction + playableIndices.length) %
        playableIndices.length

      return playableIndices[nextPosition]
    },
    [currentIndex],
  )

  const next = useCallback(() => {
    const index = getPlayableSibling(1)
    if (index === null) return
    selectTrack(index, true)
  }, [getPlayableSibling, selectTrack])

  const previous = useCallback(() => {
    const index = getPlayableSibling(-1)
    if (index === null) return
    selectTrack(index, true)
  }, [getPlayableSibling, selectTrack])

  const seek = useCallback((seconds: number) => {
    const audio = audioRef.current
    if (!audio || !Number.isFinite(seconds)) return

    audio.currentTime = Math.max(0, Math.min(seconds, audio.duration || seconds))
    setCurrentTime(audio.currentTime)
  }, [])

  const setVolume = useCallback((value: number) => {
    const nextVolume = Math.max(0, Math.min(1, value))
    setVolumeState(nextVolume)

    if (audioRef.current) {
      audioRef.current.volume = nextVolume
    }
  }, [])

  const value = useMemo<MusicPlayerContextValue>(
    () => ({
      currentIndex,
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      hasPlayableSong,
      selectTrack,
      toggle,
      next,
      previous,
      seek,
      setVolume,
    }),
    [
      currentIndex,
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      hasPlayableSong,
      selectTrack,
      toggle,
      next,
      previous,
      seek,
      setVolume,
    ],
  )

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext)

  if (!context) {
    throw new Error('useMusicPlayer debe utilizarse dentro de MusicPlayerProvider')
  }

  return context
}
