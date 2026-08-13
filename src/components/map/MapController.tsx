import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import type { MemoryPlace } from '../../data/places'

type MapControllerProps = {
  activePlace: MemoryPlace | null
}

export function MapController({ activePlace }: MapControllerProps) {
  const map = useMap()

  useEffect(() => {
    if (!activePlace) return

    map.flyTo(activePlace.coordinates, 15, {
      animate: true,
      duration: 1.15,
    })
  }, [activePlace, map])

  return null
}
