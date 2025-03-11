import {
  Booking_State_Enum,
  Booking_Set_Input
} from '@otiuming/domain-omnidata-types'

import { Cancelled } from '../action-creators'

import { BookingUpdate } from './types'

interface Booking {
  id: string
  version: number
}

export function reduceCancelledWithUpdates(booking: Booking, event: Cancelled): BookingUpdate {
  const update: Booking_Set_Input = {
    state: Booking_State_Enum.Cancelled,
    last_modified_on: event.timestamp,
    version: event.version
  }

  return {
    type: 'UPDATE',
    booking: update
  }
}