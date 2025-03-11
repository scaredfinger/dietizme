import { Booking_Events_Event_Type_Enum } from '@otiuming/domain-omnidata-types'

import { EventBase } from '../types'
import { createTimeStamp, createUniqueEventId } from '../utils'

type AcceptPayload = unknown

type Booking = {
  id: string
  version: number
}

export interface Accepted extends EventBase<Booking_Events_Event_Type_Enum.Accepted, AcceptPayload> {

}

export function accept(booking: Booking, payload: unknown, existing_events: unknown[], user_id: string): Accepted {
  const timestamp = createTimeStamp()
  const booking_id = booking.id

  return {
    id: createUniqueEventId(),
    booking_id,
    timestamp,
    type: Booking_Events_Event_Type_Enum.Accepted,
    version: existing_events.length + 1,
    user_id,
    payload
  }
}