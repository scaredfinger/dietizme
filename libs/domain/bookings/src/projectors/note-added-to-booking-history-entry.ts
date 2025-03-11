import { Booking_History_Entry_Insert_Input } from '@otiuming/domain-omnidata-types'

import { NoteAdded } from '../action-creators'

export function noteAddedToBookingHistoryEntry(noteAdded: NoteAdded): Booking_History_Entry_Insert_Input {
  return {
    id: noteAdded.id,
    booking_id: noteAdded.booking_id,
    timestamp: noteAdded.timestamp,
    type: noteAdded.type,
    version: noteAdded.version,
    user_id: noteAdded.user_id,
    value: noteAdded.payload.note,
  }  
}