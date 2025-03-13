import {
  Preload_Create_SupplementQuery,
  Supplement_Create_Input,
  Supplement_Type_Enum,
  Supplement_UpsertMutationVariables,
} from '../../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'

export function buildCreateSupplementInput(
  request: OperationRequest<Supplement_Create_Input>,
  context: Preload_Create_SupplementQuery
): Supplement_UpsertMutationVariables {
  const organization_id = request.body.organization_id
  const id = request.body.id

  const business_model = context.organization_by_pk.business_model

  return {
    id,
    supplement: {
      id,
      organization_id,
      type: Supplement_Type_Enum.PerUnit,
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
      description: {
        data: {
          en: 'English',
          es: 'Español',
          de: 'Deutsch',
          fr: 'Français',
        },
      }
    },
    files_to_delete: [],
    texts_to_delete: []
  }
}
