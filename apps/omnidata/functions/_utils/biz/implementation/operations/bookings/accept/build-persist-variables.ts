import { OperationRequest } from '@otiuming/biz-builder'
import { 
    accept,
  acceptedToBookingHistoryEntry,
  reduceAcceptedWithUpdates, 
} from '@otiuming/domain-bookings'

import { 
    Booking_Accept_Input,
  Preload_Booking_UpdateQuery 
} from '../../../../../sdk'

export function buildAcceptBookingSaveInput(r: OperationRequest<Booking_Accept_Input>, c: Preload_Booking_UpdateQuery) {
  const { id, expected_version } = r.body

  const acceptedEvent = accept(c.booking[0], r.body, c.booking_events_main, r.user)

  const { booking } = reduceAcceptedWithUpdates(c.booking[0], acceptedEvent)

  const acceptedHistoryEntry = acceptedToBookingHistoryEntry(acceptedEvent)

  return {
    booking_id: id,
    expected_version: expected_version,
    new_version: acceptedEvent.version,
    booking_events: [acceptedEvent],
    booking_set_input: booking,
    history_entries: [acceptedHistoryEntry]
  }
}