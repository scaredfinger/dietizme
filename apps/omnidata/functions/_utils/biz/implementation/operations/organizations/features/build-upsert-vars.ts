import { OperationRequest } from '@otiuming/biz-builder'
import { Feature_Insert_Input } from '@otiuming/domain-omnidata-types'

import {
  Activate_Organization_Features_Input,
  Preload_Activate_Organization_FeaturesQuery,
  Upsert_Organization_FeaturesMutationVariables,
} from '../../../../../generated'

import { GENERIC_FEATURES } from './generic'
import { ACCOMMODATION_FEATURES } from './accomodation'
import { ACTIVITY_FEATURES } from './activities'

const ALL_FEATURES = [
  ...GENERIC_FEATURES,
  ...ACCOMMODATION_FEATURES,
  ...ACTIVITY_FEATURES,
]

export function buildActivateOrganizationFeatures(
  request: OperationRequest<Activate_Organization_Features_Input>,
  context: Preload_Activate_Organization_FeaturesQuery,
): Upsert_Organization_FeaturesMutationVariables {
  const existingCategories = context.category.map((c) => c.id)
  const featureCategoriesThatHasBeenAdded = context.feature.flatMap((f) => f.categories.map((c) => c.category_id))

  const featuresToBeAdded: Feature_Insert_Input[] = ALL_FEATURES.filter((f) =>
    f.categories.some((c) => existingCategories.includes(c)),
  )
  .filter((f) => !featureCategoriesThatHasBeenAdded.some(c => f.categories.includes(c)))
  .map((f) => {
    return {
      organization_id: request.body.organization_id,
      internal_name: f.id,
      name: {
        data: f.name,
      },
      headline: {
        data: f.headline,
      },
      symbol: f.symbol,
      type: f.type,
      config: {},
      categories: {
        data: f.categories.map((category_id) => ({ 
          category_id
        })),
      },
    }
  })

  return {
    features: featuresToBeAdded,
  }
}
