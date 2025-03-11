import {
  Booking_Set_Input
} from '@otiuming/domain-omnidata-types'

import { NoteAdded } from '../action-creators'

import { BookingUpdate } from './types'

interface Booking {
  id: string
  version: number
}

export function reduceNoteAdded(booking: Booking, event: NoteAdded): BookingUpdate {
  const update: Booking_Set_Input = {
    last_modified_on: event.timestamp,
    version: event.version
  }

  return {
    type: 'UPDATE',
    booking: update
  }
}