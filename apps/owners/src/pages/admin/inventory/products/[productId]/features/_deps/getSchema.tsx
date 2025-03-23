import { JSONSchema } from '@/components/forms'

import { OrganizationFeature } from './types'
import { buildFeatureEditor } from './buildFeatureEditor'

export function getSchema(
  organization_features: OrganizationFeature[],
  t: (key: string, interpolation?: unknown) => string,
  locale: string,
): JSONSchema {
  if (!organization_features) {
    return {
      type: 'object',
      properties: {},
    }
  }

  const FeatureEditor = buildFeatureEditor(organization_features, locale, t)

  return {
    type: 'array',
    items: {
      type: 'object',
      editor: FeatureEditor
    },
  }
}
