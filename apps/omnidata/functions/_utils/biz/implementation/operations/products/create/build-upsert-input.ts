import { sluggifyObject } from '@otiuming/utils-common'
import {
  Preload_Create_ProductQuery,
  Product_Create_Input,
  Product_UpsertMutationVariables,
  Slug_Constraint,
  Slug_Update_Column,
} from '../../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'

export function buildCreateProductInput(
  request: OperationRequest<Product_Create_Input>,
  context: Preload_Create_ProductQuery
): Product_UpsertMutationVariables {
  const organization_id = request.body.organization_id
  const id = request.body.id

  const business_model = context.organization_by_pk.business_model

  const name = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français',
  }

  return {
    product: {
      id,
      organization_id,
      name: {
        data: name,
      },
      slug: {
        data: {
          ...sluggifyObject(name)
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
      },
      allotment_calendar: {
        data: [],
      },
      gallery: {
        data: {
          name: {
            data: {},
          },
          headline: {
            data: {},
          },
        },
      },
      price_from: 0,
      rates: {
        data: [
          {
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
          }
        ],
      },
      business_model: {
        data: business_model
      }
    },
    gallery_items_to_delete: [],
    places_to_delete: [],
    product_updates: []
  }
}
