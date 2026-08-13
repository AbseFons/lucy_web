import { divIcon, type LatLngBoundsExpression } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import type { MemoryPlace } from '../../data/places'
import { MapController } from './MapController'

const pinIcon = (index: number, active: boolean) =>
  divIcon({
    className: 'memory-map-pin-wrapper',
    html: `<span class="memory-map-pin${active ? ' memory-map-pin--active' : ''}"><b>${String(
      index + 1,
    ).padStart(2, '0')}</b></span>`,
    iconSize: [46, 46],
    iconAnchor: [23, 23],
  })

type OurMapCanvasProps = {
  places: MemoryPlace[]
  activeId: string | null
  onSelect: (id: string) => void
}

export function OurMapCanvas({ places, activeId, onSelect }: OurMapCanvasProps) {
  const activePlace = places.find((place) => place.id === activeId) ?? null
  const bounds = places.map((place) => place.coordinates) as LatLngBoundsExpression

  return (
    <MapContainer
      className="memory-map"
      bounds={bounds}
      boundsOptions={{ padding: [44, 44] }}
      scrollWheelZoom={false}
      zoomControl
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {places.map((place, index) => (
        <Marker
          key={place.id}
          position={place.coordinates}
          icon={pinIcon(index, place.id === activeId)}
          eventHandlers={{
            click: () => onSelect(place.id),
          }}
        >
          <Tooltip direction="top" offset={[0, -19]} opacity={1}>
            <strong>{place.name}</strong>
            <span>{place.district}</span>
          </Tooltip>
        </Marker>
      ))}

      <MapController activePlace={activePlace} />
    </MapContainer>
  )
}
