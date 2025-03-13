import { Update_Booking_Version_With_Optimistic_Lock_Input } from '../../../../../sdk'

import { OperationRequest } from '@otiuming/biz-builder'

export function buildLoadContextVersionUpdate(
  {
    body: {
      booking_id,
      expected_version,
      new_version
    }
  }:  OperationRequest<Update_Booking_Version_With_Optimistic_Lock_Input>
) {
  return {
    booking_id,
    expected_version,
    new_version
  }
}