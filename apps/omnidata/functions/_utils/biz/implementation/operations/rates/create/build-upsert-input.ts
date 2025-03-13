import {
  Preload_Create_RateQuery,
  Rate_Create_Input,
  Rate_UpsertMutationVariables,
} from '../../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'

export function buildNewRateUpsertInput(
  request: OperationRequest<Rate_Create_Input>,
  context: Preload_Create_RateQuery
): Rate_UpsertMutationVariables {
  const { id, organization_id, product_id } = request.body

  return {
    rate_price_ranges_to_delete: [],
    rate: {
      id,
      product_id,
      name: {
        data: {
          en: 'English',
          es: 'Español',
          de: 'Deutsch',
          fr: 'Français',
        },
      },
      headline: {
        data: {
          en: 'English',
          es: 'Español',
          de: 'Deutsch',
          fr: 'Français',
        },
      },
    },
  }
}
