import { OperationRequest } from '@otiuming/biz-builder'
import { 
  create, 
  reduceCreated, 
  createdToBookingHistoryEntry
} from '@otiuming/domain-bookings'

import {
  Booking_Create_Input,
  Booking_UpsertMutationVariables,
  Preload_Booking_CreateQuery
} from '../../../../../generated'

export function buildUpsertBookingVars(
  request: OperationRequest<Booking_Create_Input>,
  context: Preload_Booking_CreateQuery,
): Booking_UpsertMutationVariables {

  const created = create(request.body, context.organization, context.rates)

  const createdHistoryEntry = createdToBookingHistoryEntry(created)

  const { booking } = reduceCreated(created)

  return {
    booking_id: created.booking_id,
    booking_events: [
      created
    ],
    booking,
    booking_history_entries: [
      createdHistoryEntry
    ],
  }
  
}
