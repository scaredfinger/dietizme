import { NhostClient } from '@nhost/nhost-js'

import { OperationRequest } from '@otiuming/biz-builder'

import { Cleanup_Input, Preload_CleanupQuery } from '../../../../generated'
import { deleteFiles } from '../../connectors/nhost'

export async function cleanupOrganizationFiles(
  request: OperationRequest<Cleanup_Input>,
  context: Preload_CleanupQuery,
  variables: unknown
): Promise<void> {
  if (!context.organization_by_pk) {
    return
  }

  const files = [
    context.organization_by_pk.branding.logo_id,
    context.organization_by_pk.branding.logo_light_id,
    context.organization_by_pk.branding.favicon_id,
    ...context.organization_by_pk.venues.flatMap((v) =>
      v.gallery?.items.map((f) => f.file_id)
    ),
    ...context.organization_by_pk.venues.flatMap((v) =>
      v.facilities.map((f) => f.image_id)
    ),
    ...context.organization_by_pk.venues.flatMap((v) => v.usps.image_id),
    ...context.organization_by_pk.products.flatMap((p) =>
      p.gallery.items.map((f) => f.file_id)
    ),

    ...context.organization_by_pk.product_groups.map(pg => pg.image_id),
  ].filter(Boolean)

  await deleteFiles(files)
}