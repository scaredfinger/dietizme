import { OperationRequest } from '@otiuming/biz-builder'
import { 
  Booking_Add_Note_Input, 
  Preload_Booking_UpdateQuery 
} from '../../../../../sdk'
import { 
  reduceRejectedWithUpdates, 
  reject,
  rejectedToBookingHistoryEntry 
} from '@otiuming/domain-bookings'



export function buildRejectBookingSaveInput(r: OperationRequest<Booking_Add_Note_Input>, c: Preload_Booking_UpdateQuery) {
  const { id, expected_version } = r.body

  const rejectedEvent = reject(c.booking[0], r.body, c.booking_events_main, r.user)

  const { booking } = reduceRejectedWithUpdates(c.booking[0], rejectedEvent)

  const nodeAddedHistoryEntry = rejectedToBookingHistoryEntry(rejectedEvent)

  return {
    booking_id: id,
    expected_version: expected_version,
    new_version: rejectedEvent.version,
    booking_events: [rejectedEvent],
    booking_set_input: booking,
    history_entries: [nodeAddedHistoryEntry]
  }
}