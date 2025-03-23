import { useQuery } from '@tanstack/react-query'

import { Place } from '../generated'
import { geolocate } from './mapbox'

export function useGeolocate(query: string) {
  const { data, isLoading } = useQuery<Place[]>(['geolocate', query], async () => {
    if (!query || query.length < 3) {
      return Promise.resolve([])
    }

    return geolocate(query)
  })

  return { data, loading: isLoading }
}
