import {
  Booking_State_Enum,
  Booking_Set_Input
} from '@otiuming/domain-omnidata-types'

import { Accepted } from '../action-creators'

import { BookingUpdate } from './types'

interface Booking {
  id: string
  version: number
}

export function reduceAcceptedWithUpdates(booking: Booking, event: Accepted): BookingUpdate {
  const update: Booking_Set_Input = {
    state: Booking_State_Enum.Accepted,
    last_modified_on: event.timestamp,
    version: event.version
  }

  return {
    type: 'UPDATE',
    booking: update
  }
}