import { sluggifyObject } from '@otiuming/utils-common'
import {
  Preload_Product_Group_SaveQuery,
  Product_Group_Save_Input,
  Product_Group_UpsertMutationVariables,
  Slug_Constraint,
  Slug_Update_Column
} from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function buildProductGroupSaveInput(
  request: OperationRequest<Product_Group_Save_Input>,
  context: Preload_Product_Group_SaveQuery
): Product_Group_UpsertMutationVariables {

  const existingGroup = context.product_group_by_pk

  const files_to_delete = existingGroup
    ? context.product_group_by_pk.image_id !== request.body.image_id
      ? [context.product_group_by_pk.image_id]
      : []
    : []

  const texts_to_delete = existingGroup
    ? [existingGroup.name_id, existingGroup.headline_id, existingGroup.description_id]
    : []

  const body = request.body
  const slug_id = existingGroup ? existingGroup.slug_id : undefined

  return {
    id: request.body.id,
    group: {
      id: request.body.id,
      organization_id: request.body.organization_id,
      name: {
        data: {
          ...request.body.name
        },
      },
      headline: {
        data: {
          ...request.body.headline
        },
      },
      description: {
        data: {
          ...request.body.description
        },
      },

      slug: {
        data: {
          id: slug_id,
          ...sluggifyObject(body.name)
        },
        on_conflict: {
          constraint: Slug_Constraint.SlugPkey,
          update_columns: [
            Slug_Update_Column.En,
            Slug_Update_Column.Es,
            Slug_Update_Column.De,
            Slug_Update_Column.Fr,
          ]
        }
      },

      image_id: request.body.image_id,
      products: {
        data: request.body.products.map((product, position) => ({
          product_id: product.value,
          position,
        }))
      }
    },
    files_to_delete,
    texts_to_delete,
  }
}