import { Booking_History_Entry_Insert_Input } from '@otiuming/domain-omnidata-types'

import { Accepted } from '../action-creators'

export function acceptedToBookingHistoryEntry(accepted: Accepted): Booking_History_Entry_Insert_Input {
  return {
    id: accepted.id,
    booking_id: accepted.booking_id,
    timestamp: accepted.timestamp,
    type: accepted.type,
    version: accepted.version,
    user_id: accepted.user_id,
    value: {},
  }  
}