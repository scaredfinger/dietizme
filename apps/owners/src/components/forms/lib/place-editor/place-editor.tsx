import { useEffect, useMemo, useRef, useState } from 'react'

import Map, {
  GeolocateControl,
  MapRef,
  Marker,
  NavigationControl,
} from 'react-map-gl'
import { debounce } from 'lodash'

import { Place_Input } from '@otiuming/domain-omnidata-types'
import { EditorProps } from '@/components/forms'
import { useLogger, withLoader } from '@otiuming/ui-common'

import { useGeolocate } from '@/data-access'
import { clientConfig } from '@/config/env'
import { AutoComplete, Button, Col, Input, Row } from 'antd'

const ACCESS_TOKEN = clientConfig.maps.mapboxToken

export function PlaceEditor(props: EditorProps<Place_Input>) {
  const [address, setAddress] = useState('')
  const [currentLocation, setCurrentLocation] = useState<Place_Input>(
    props.formData ?? {
      name: '',
      latitude: 0,
      longitude: 0,
    },
  )
  const map = useRef<MapRef>(null)

  const logger = useLogger()

  const { data, loading } = useGeolocate(address)

  const options = useMemo(() => {
    if (data) {
      return data.map((p) => ({
        value: p.name,
        label: p.name,
      }))
    }

    return []
  }, [data])

  const onSearch = useMemo(() => debounce(setAddress, 800), [])

  const onChange = useMemo(() => (name: string) => {
    const place = data?.find((p) => p.name === name)
    if (!place) {
      return
    }

    setCurrentLocation(place)              
    props.onChange({
      name: place.name,
      latitude: place.latitude,
      longitude: place.longitude,
    })
    map.current.setCenter([place.longitude, place.latitude])
  }, [data, props])

  logger.info({
    eventId: 'PLACE_EDIT',
    gelocateResults: data,
  })

  return (
    <div className="form-group field field-object">
      <label htmlFor="place">{props.schema.title}</label>
      <Row>
        <Col className='pl-1'>{props.formData?.name}</Col>
      </Row>
      <Row>
        <Col className="w-full pt-2">
          <AutoComplete
            className="w-full"
            onSearch={onSearch}
            options={options}
            onChange={onChange}
          >
          </AutoComplete>
        </Col>
      </Row>
      <Row>
        <Col className='pt-4'>
          <Map
            ref={map}
            initialViewState={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              zoom: 14,
            }}
            style={{ width: '600px', height: '400px' }}
            mapboxAccessToken={ACCESS_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <GeolocateControl />
            <NavigationControl />
            {currentLocation && (
              <Marker
                latitude={currentLocation.latitude}
                longitude={currentLocation.longitude}
              ></Marker>
            )}
          </Map>
        </Col>
      </Row>
    </div>
  )
}
