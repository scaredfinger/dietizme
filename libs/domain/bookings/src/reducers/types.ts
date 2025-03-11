import {
  Booking_Insert_Input,
  Booking_Set_Input
} from '@otiuming/domain-omnidata-types'

export interface BookingUpdate {
  type: 'UPDATE'
  booking: Booking_Set_Input
}

export interface BookingInsert {
  type: 'INSERT'
  booking: Booking_Insert_Input
}

export type BookingReducerResult = BookingUpdate | BookingInsert