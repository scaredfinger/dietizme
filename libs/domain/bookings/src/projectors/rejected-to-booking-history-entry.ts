import { Booking_History_Entry_Insert_Input } from '@otiuming/domain-omnidata-types'
import { Rejected } from '../action-creators/reject'


export function rejectedToBookingHistoryEntry(rejected: Rejected): Booking_History_Entry_Insert_Input {
  return {
    id: rejected.id,
    booking_id: rejected.booking_id,
    timestamp: rejected.timestamp,
    type: rejected.type,
    version: rejected.version,
    user_id: rejected.user_id,
    value: {},
  }  
}