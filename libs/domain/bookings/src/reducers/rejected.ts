import {
  Booking_State_Enum,
  Booking_Set_Input
} from '@otiuming/domain-omnidata-types'

import { BookingUpdate } from './types'
import { Rejected } from '../action-creators/reject'

interface Booking {
  id: string
  version: number
}

export function reduceRejectedWithUpdates(booking: Booking, event: Rejected): BookingUpdate {
  const update: Booking_Set_Input = {
    state: Booking_State_Enum.Rejected,
    last_modified_on: event.timestamp,
    version: event.version
  }

  return {
    type: 'UPDATE',
    booking: update
  }
}