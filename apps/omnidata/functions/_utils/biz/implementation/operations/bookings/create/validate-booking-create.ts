import { Booking_Create_Input, Preload_Booking_CreateQuery } from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function validateBookingCreate(
  context: Preload_Booking_CreateQuery,
  request: OperationRequest<Booking_Create_Input>) {

  if (context.booking.length > 0) {
    return {
      ok: false,
      errorMessage: `Booking '${request.body.id}' already exists`,
    }
  }

  return {
    ok: true,
  }
}