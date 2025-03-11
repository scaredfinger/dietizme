import { Booking_Events_Event_Type_Enum } from '@otiuming/domain-omnidata-types'

import { EventBase } from '../types'
import { createTimeStamp, createUniqueEventId } from '../utils'

interface NoteAddedPayload {
  note: string
}

type Booking = {
  id: string
  version: number
}

export interface NoteAdded extends EventBase<Booking_Events_Event_Type_Enum.NoteAdded, NoteAddedPayload> {

}

export function addNote(booking: Booking, payload: NoteAddedPayload, existing_events: unknown[], user_id: string): NoteAdded {
  const timestamp = createTimeStamp()
  const booking_id = booking.id

  return {
    id: createUniqueEventId(),
    booking_id,
    timestamp,
    type: Booking_Events_Event_Type_Enum.NoteAdded,
    version: existing_events.length + 1,
    user_id,
    payload
  }
}