import { Place } from '@otiuming/domain-omnidata-types'

import { clientConfig } from '@/config/env'

export async function geolocate(query: string): Promise<Place[]> {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=ip&access_token=${clientConfig.maps.mapboxToken}`
  )
  const parsedResponse = await response.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const features: any[] = parsedResponse.features

  return features.map((f) => ({
    id: f.id,
    name: f.place_name,
    latitude: f.center[1],
    longitude: f.center[0],
  }))
}
