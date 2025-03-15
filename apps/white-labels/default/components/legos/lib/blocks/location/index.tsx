import React from 'react'
import { useTranslation } from '@otiuming/ui-i18n'
import Map, { Marker } from 'react-map-gl'

const DEFAULT_ADDRESS =
  'San Diego, CA, United States of America (SAN-San Diego Intl.)'

interface Props {
  address: string
  mapboxToken: string
  latitude: number
  longitude: number
}

export const Location: React.FC<Props> = ({
  address = DEFAULT_ADDRESS,
  mapboxToken,
  latitude,
  longitude,
}) => {
  const { t } = useTranslation()

  return (
    <div className="listingSection__wrap">
      {/* HEADING */}
      <div>
        <h2 className="text-2xl font-semibold">
          {t('sections.location.title')}
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {address}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

      {/* MAP */}
      <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
        <div className="rounded-xl overflow-hidden">
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ width: '100%', height: '800px' }}
            cooperativeGestures={true}
            initialViewState={{
              zoom: 14,
              padding: {
                top: 25,
                bottom: 25,
                left: 0,
                right: 0,
              },
              latitude,
              longitude,
            }}
          >
            <Marker latitude={latitude} longitude={longitude}></Marker>
          </Map>
        </div>
      </div>
    </div>
  )
}
