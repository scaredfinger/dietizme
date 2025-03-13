import { Get_Booking_Input, Preload_Get_BookingQuery } from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function validateGetBooking(
  context: Preload_Get_BookingQuery,
  request: OperationRequest<Get_Booking_Input>) {

  if (context.booking.length != 1) {
    return {
      ok: false,
      errorMessage: `Could not load booking`,
    }
  }

  return {
    ok: true,
  }
}