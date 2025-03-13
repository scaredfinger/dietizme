import {
  Preload_Venue_Gallery_SaveQuery,
  Venue_Gallery_Save_Input,
} from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'
import { deleteFiles } from '../../connectors/nhost'

export function cleanupVenueImages(
  request: OperationRequest<Venue_Gallery_Save_Input>,
  context: Preload_Venue_Gallery_SaveQuery
) {
  const newFiles = request.body.gallery?.items?.map((i) => i.file_id)
  const existingFiles = context.venue_by_pk.gallery.items.map((i) => i.file_id)
  const toBeDeleted = existingFiles.filter((f) => !newFiles.includes(f))

  return deleteFiles(toBeDeleted)
}
