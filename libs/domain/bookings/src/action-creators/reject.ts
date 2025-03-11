import { Booking_Events_Event_Type_Enum } from '@otiuming/domain-omnidata-types'

import { EventBase } from '../types'
import { createTimeStamp, createUniqueEventId } from '../utils'

type RejectedPayload = unknown

type Booking = {
  id: string
  version: number
}

export interface Rejected extends EventBase<Booking_Events_Event_Type_Enum.Rejected, RejectedPayload> {

}

export function reject(booking: Booking, payload: unknown, existing_events: unknown[], user_id: string): Rejected {
  const timestamp = createTimeStamp()
  const booking_id = booking.id

  return {
    id: createUniqueEventId(),
    booking_id,
    timestamp,
    type: Booking_Events_Event_Type_Enum.Rejected,
    version: existing_events.length + 1,
    user_id,
    payload
  }
}