import {
  Preload_Venue_Facilities_SaveQuery,
  Venue_Facilities_Save_Input,
} from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'
import { deleteFiles } from '../../connectors/nhost'

export function cleanupFacilitiesImages(
  request: OperationRequest<Venue_Facilities_Save_Input>,
  context: Preload_Venue_Facilities_SaveQuery
) {
  const newFiles = request.body.items?.map((i) => i.image_id)
  const existingFiles = context.venue_by_pk.facilities.map((i) => i.image_id)
  const toBeDeleted = existingFiles.filter((f) => !newFiles.includes(f))

  return deleteFiles(toBeDeleted)
}
