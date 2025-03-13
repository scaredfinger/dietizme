import { Preload_Booking_UpdateQuery } from '../../../../sdk'
import { ValidationResult } from '@otiuming/biz-builder'

export function bookingCanBeUpdatedByCurrentUser(c: Preload_Booking_UpdateQuery): ValidationResult {
  return c.booking.length === 1
    ? { ok: true }
    : { ok: false, errorMessage: 'Booking does not exist or user has no permission' }
}