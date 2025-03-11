import { Booking_Events_Event_Type_Enum } from '@otiuming/domain-omnidata-types'

import { EventBase } from '../types'
import { createTimeStamp, createUniqueEventId } from '../utils'

type CancelPayload = unknown

type Booking = {
  id: string
  version: number
}

export interface Cancelled extends EventBase<Booking_Events_Event_Type_Enum.OwnerCancelled, CancelPayload> {

}

export function cancel(booking: Booking, payload: unknown, existing_events: unknown[], user_id: string): Cancelled {
  const timestamp = createTimeStamp()
  const booking_id = booking.id

  return {
    id: createUniqueEventId(),
    booking_id,
    timestamp,
    type: Booking_Events_Event_Type_Enum.OwnerCancelled,
    version: existing_events.length + 1,
    user_id,
    payload
  }
}