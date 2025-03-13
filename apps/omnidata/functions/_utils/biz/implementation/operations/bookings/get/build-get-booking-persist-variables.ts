import { OperationRequest } from '@otiuming/biz-builder'

import { Get_BookingQueryVariables, Get_Booking_Input, Preload_Get_BookingQuery } from '../../../../../generated'

export function buildGetBookingPersistVariables(
  request: OperationRequest<Get_Booking_Input>,
  context: Preload_Get_BookingQuery): Get_BookingQueryVariables {
  return {
    id: context.booking[0].id,
  }
}