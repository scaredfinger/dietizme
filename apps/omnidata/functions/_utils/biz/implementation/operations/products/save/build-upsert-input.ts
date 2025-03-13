import _ from 'lodash'
import {
  Media_Gallery_Constraint,
  Media_Gallery_Insert_Input,
  Media_Gallery_Update_Column,
  Multilanguage_Field_Input,
  Place_Constraint,
  Place_Insert_Input,
  Place_Obj_Rel_Insert_Input,
  Place_Update_Column,
  Preload_Product_SaveQuery,
  Product_Business_Model_Constraint,
  Product_Business_Model_Update_Column,
  Product_Description_Constraint,
  Product_Description_Update_Column,
  Product_Headline_Constraint,
  Product_Headline_Update_Column,
  Product_Insert_Input,
  Product_Name_Constraint,
  Product_Name_Update_Column,
  Product_Save_Input,
  Product_Updates,
  Product_UpsertMutationVariables,
  Rate_Type_Enum,
  Scalars,
  Slug_Constraint,
  Slug_Update_Column,
  Unit_Management_Enum,
} from '../../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'
import { Product_Business_Model_Insert_Input } from '@otiuming/domain-omnidata-types'
import { sluggifyObject } from '@otiuming/utils-common'

function sanitize(input: Multilanguage_Field_Input | null): Multilanguage_Field_Input {
  return {
    ...(input || {})
  }
}

const TIME_MANAGEMENT = {
  [Rate_Type_Enum.Daily.toString().toLowerCase()]: Rate_Type_Enum.Daily,
  [Rate_Type_Enum.Taximeter.toString().toLowerCase()]: Rate_Type_Enum.Taximeter,
  [Rate_Type_Enum.TimeSlots.toString().toLowerCase()]: Rate_Type_Enum.TimeSlots,
}

const UNIT_MANAGEMENT = {
  [Unit_Management_Enum.PerPax.toString().toLowerCase()]: Unit_Management_Enum.PerPax,
  [Unit_Management_Enum.PerResource.toString().toLowerCase()]: Unit_Management_Enum.PerResource,
}

export function buildProductSaveInput(
  request: OperationRequest<Product_Save_Input>,
  context: Preload_Product_SaveQuery
): Product_UpsertMutationVariables {
  const { body } = request

  const {
    id,
    organization_id,
    name_id,
    headline_id,
    description_id,
    gallery: existing_gallery,
    slug_id
  } = context.product_by_pk

  const gallery_items_to_delete: Scalars['uuid'][] = existing_gallery.items.map(
    (i) => i.id
  )

  const gallery: Media_Gallery_Insert_Input = {
    id: existing_gallery.id,
    name: {
      data: sanitize(body.gallery.name),
    },
    headline: {
      data: sanitize(body.gallery.headline),
    },
    items: {
      data: body.gallery.items.map(({ file_id, name, headline }) => ({
        file_id,
        name: {
          data: sanitize(name),
        },
        headline: {
          data: sanitize(headline),
        },
      })),
    },
  }

  const context_place_id = context.product_by_pk.place_id

  let places_to_delete: any[] = []
  let place: Place_Obj_Rel_Insert_Input = undefined
  let product_updates: Product_Updates[] = []

  if (body.place) {
    place = {
      data: {
        ...body.place,
        id: undefined
      },
      on_conflict: {
        constraint: Place_Constraint.PlacePkey,
        update_columns: [
          Place_Update_Column.Name,
          Place_Update_Column.Latitude,
          Place_Update_Column.Longitude,
        ],
      },
    }
    if (context_place_id) {
      places_to_delete = [context_place_id]
    }
  } else {
    if (context_place_id) {
      places_to_delete = [context_place_id]
      product_updates.push({
        where: {
          id: {
            _eq: id,
          },
        },
        _set: {
          place_id: null,
        },
      })
    }
  }
  
  const product_business_model: Product_Business_Model_Insert_Input = {
    id: context.product_by_pk.business_model_id 
      ? context.product_by_pk.business_model_id
      : undefined,
    time_management: mapWithDefault(TIME_MANAGEMENT, body.business_model.time_management) as Rate_Type_Enum,
    unit_management: mapWithDefault(UNIT_MANAGEMENT, body.business_model.unit_management) as Unit_Management_Enum,
  }

  const product: Product_Insert_Input = {
    id,
    organization_id,
    price_from: body.price_from,
    published: body.published,

    name: {
      data: {
        id: name_id,
        ...body.name,
      },
      on_conflict: {
        constraint: Product_Name_Constraint.ProductNamePkey,
        update_columns: [
          Product_Name_Update_Column.En,
          Product_Name_Update_Column.Es,
          Product_Name_Update_Column.De,
          Product_Name_Update_Column.Fr,
        ],
      },
    },

    headline: {
      data: {
        id: headline_id,
        ...body.headline,
      },
      on_conflict: {
        constraint: Product_Headline_Constraint.ProductHeadlinePkey,
        update_columns: [
          Product_Headline_Update_Column.En,
          Product_Headline_Update_Column.Es,
          Product_Headline_Update_Column.De,
          Product_Headline_Update_Column.Fr,
        ],
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

    description: {
      data: {
        id: description_id,
        ...body.description,
      },
      on_conflict: {
        constraint: Product_Description_Constraint.ProductDescriptionPkey,
        update_columns: [
          Product_Description_Update_Column.En,
          Product_Description_Update_Column.Es,
          Product_Description_Update_Column.De,
          Product_Description_Update_Column.Fr,
        ],
      },
    },

    gallery: {
      data: gallery,
      on_conflict: {
        constraint: Media_Gallery_Constraint.MediaGalleryPkey,
        update_columns: [
          Media_Gallery_Update_Column.NameId,
          Media_Gallery_Update_Column.HeadlineId,
        ]
      }
    },

    place,

    business_model: {
      data: product_business_model,
      on_conflict: {
        constraint: Product_Business_Model_Constraint.ProductBusinessModelPkey,
        update_columns: [
          Product_Business_Model_Update_Column.TimeManagement,
          Product_Business_Model_Update_Column.UnitManagement,
        ],
      },
    }
  }

  return {
    product,
    gallery_items_to_delete,
    places_to_delete,
    product_updates,
  }
}

function mapWithDefault<T extends { [key: string]: E }, E>(obj: T, key: unknown): E {
  return obj[key.toString().toLowerCase()] ?? _.values(obj)[0]
}