import { OperationRequest } from '@otiuming/biz-builder'
import { 
  addNote, 
  noteAddedToBookingHistoryEntry, 
  reduceNoteAdded 
} from '@otiuming/domain-bookings'

import { 
  Booking_Add_Note_Input, 
  Preload_Booking_UpdateQuery 
} from '../../../../../sdk'

export function buildAddBookingNoteSaveInput(r: OperationRequest<Booking_Add_Note_Input>, c: Preload_Booking_UpdateQuery) {
  const { id, expected_version } = r.body

  const noteAddedEvent = addNote(c.booking[0], r.body, c.booking_events_main, r.user)

  const { booking } = reduceNoteAdded(c.booking[0], noteAddedEvent)

  const nodeAddedHistoryEntry = noteAddedToBookingHistoryEntry(noteAddedEvent)

  return {
    booking_id: id,
    expected_version: expected_version,
    new_version: noteAddedEvent.version,
    booking_events: [noteAddedEvent],
    booking_set_input: booking,
    history_entries: [nodeAddedHistoryEntry]
  }
}