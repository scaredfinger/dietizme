import {
  Preload_Venue_Usps_SaveQuery,
  Venue_Usps_Save_Input,
} from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'
import { deleteFiles } from '../../connectors/nhost'

export function cleanupUsps(
  request: OperationRequest<Venue_Usps_Save_Input>,
  context: Preload_Venue_Usps_SaveQuery
) {
  const newFile = request.body.image_id
  const oldFile = context.venue_by_pk.usps.image_id

  if (newFile === oldFile) return Promise.resolve()

  return deleteFiles([oldFile])
}
