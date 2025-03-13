import {
  Preload_Save_SupplementQuery,
  Supplement_Save_Input,
  Supplement_Type_Enum,
  Supplement_UpsertMutationVariables,
} from '../../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'

export function buildSaveSupplementInput(
  request: OperationRequest<Supplement_Save_Input>,
  context: Preload_Save_SupplementQuery
): Supplement_UpsertMutationVariables {
  const organization_id = request.body.organization_id
  const id = request.body.id

  const files_to_delete = context.supplement_by_pk.image_id === request.body.image_id 
    ? [] 
    : context.supplement_by_pk.image_id
      ? [context.supplement_by_pk.image_id]
      : []

  return {
    id,
    supplement: {
      id,
      organization_id,
      type: Supplement_Type_Enum.PerUnit,
      image_id: request.body.image_id,
      price: request.body.price,
      name: {
        data: request.body.name,
      },
      headline: {
        data: request.body.headline,
      },
      description: {
        data: request.body.description,
      },
      products: {
        data: request.body.products.map((p) => ({
          product_id: p.value,
        })),
      }
    },
    files_to_delete,
    texts_to_delete: [
      context.supplement_by_pk.name_id,
      context.supplement_by_pk.headline_id,
      context.supplement_by_pk.description_id,
    ]
  }
}
