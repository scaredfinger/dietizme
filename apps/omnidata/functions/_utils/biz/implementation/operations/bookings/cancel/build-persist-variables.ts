import { OperationRequest } from '@otiuming/biz-builder'
import { 
  cancel, 
  cancelledToBookingHistoryEntry, 
  reduceCancelledWithUpdates,
} from '@otiuming/domain-bookings'

import { 
  Booking_Cancel_Input,
  Preload_Booking_UpdateQuery 
} from '../../../../../sdk'

export function buildCancelBookingSaveInput(r: OperationRequest<Booking_Cancel_Input>, c: Preload_Booking_UpdateQuery) {
  const { id, expected_version } = r.body

  const cancelledEvent = cancel(c.booking[0], r.body, c.booking_events_main, r.user)

  const { booking } = reduceCancelledWithUpdates(c.booking[0], cancelledEvent)

  const cancelledHistoryEntry = cancelledToBookingHistoryEntry(cancelledEvent)

  return {
    booking_id: id,
    expected_version: expected_version,
    new_version: cancelledEvent.version,
    booking_events: [cancelledEvent],
    booking_set_input: booking,
    history_entries: [cancelledHistoryEntry]
  }
}