import { Booking_Create_Input } from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function buildBookingCreateBuildLoadContextVariables({ 
  body: {
    organization_id,
    id,
    friendly_id,
    items
  },
}: OperationRequest<Booking_Create_Input>) {
  return {
    id,
    friendly_id,
    organization_id,
    rate_ids: items.map(r => r.rate_id),
  }
}