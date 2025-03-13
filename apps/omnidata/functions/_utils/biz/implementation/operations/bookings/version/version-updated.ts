import { Preload_Booking_Update_VersionMutation } from '../../../../../sdk'
import { ValidationResult } from '@otiuming/biz-builder'

export function versionUpdated(c: Preload_Booking_Update_VersionMutation): ValidationResult {
  return c.update_booking_events_version.affected_rows === 1
    ? { ok: true }
    : { ok: false }
}