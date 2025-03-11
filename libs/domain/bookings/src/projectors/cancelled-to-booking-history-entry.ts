import { Booking_History_Entry_Insert_Input } from '@otiuming/domain-omnidata-types'

import { Cancelled } from '../action-creators'

export function cancelledToBookingHistoryEntry(cancelled: Cancelled): Booking_History_Entry_Insert_Input {
  return {
    id: cancelled.id,
    booking_id: cancelled.booking_id,
    timestamp: cancelled.timestamp,
    type: cancelled.type,
    version: cancelled.version,
    user_id: cancelled.user_id,
    value: {},
  }  
}