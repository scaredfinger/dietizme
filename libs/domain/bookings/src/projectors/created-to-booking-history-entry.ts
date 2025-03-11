import { Booking_History_Entry_Insert_Input } from '@otiuming/domain-omnidata-types'

import { Created } from '../action-creators'

export function createdToBookingHistoryEntry(created: Created): Booking_History_Entry_Insert_Input {
  return {
    id: created.id,
    booking_id: created.booking_id,
    timestamp: created.timestamp,
    type: created.type,
    version: 1,
    value: {},
  }
}