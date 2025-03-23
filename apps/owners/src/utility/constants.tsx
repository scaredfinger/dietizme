import { Booking_State_Enum } from '@otiuming/domain-omnidata-types'

export const STATE_COLORS = {
  [Booking_State_Enum.Accepted]: 'bg-primary',
  [Booking_State_Enum.Cancelled]: 'bg-danger',
  [Booking_State_Enum.Created]: 'bg-gray-500',
  [Booking_State_Enum.Rejected]: 'bg-warning',
}