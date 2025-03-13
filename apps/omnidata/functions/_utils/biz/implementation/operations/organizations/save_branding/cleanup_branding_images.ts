import {
  Organization_Branding_Save_Input,
  Preload_Organization_Branding_SaveQuery,
} from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'
import { deleteFiles } from '../../../connectors/nhost'

export function cleanupBrandingImages(
  requet: OperationRequest<Organization_Branding_Save_Input>,
  context: Preload_Organization_Branding_SaveQuery
): Promise<void> {
  return deleteFiles(
    [
      requet.body.logo_id === context.organization_by_pk.branding.logo_id
        ? null
        : context.organization_by_pk.branding.logo_id,
      requet.body.logo_light_id ===
      context.organization_by_pk.branding.logo_light_id
        ? null
        : context.organization_by_pk.branding.logo_light_id,
      requet.body.favicon_id === context.organization_by_pk.branding.favicon_id
        ? null
        : context.organization_by_pk.branding.favicon_id,
    ].filter(Boolean) as string[]
  )
}
