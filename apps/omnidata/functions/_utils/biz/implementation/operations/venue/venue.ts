import { sluggifyObject } from '@otiuming/utils-common'
import {
  Media_Gallery_Insert_Input,
  Place_Constraint,
  Place_Update_Column,
  Preload_Venue_Facilities_SaveQuery,
  Preload_Venue_Gallery_SaveQuery,
  Preload_Venue_SaveQuery,
  Preload_Venue_Usps_SaveQuery,
  Translated_Text_Constraint,
  Venue_Description_Constraint,
  Venue_Description_Update_Column,
  Venue_Facilities_Save_Input,
  Venue_Facilities_UpsertMutationVariables,
  Venue_Facility_Insert_Input,
  Venue_Gallery_Save_Input,
  Venue_Good_To_Know_Constraint,
  Venue_Good_To_Know_Update_Column,
  Venue_Main_Save_Input,
  Venue_UpsertMutationVariables,
  Venue_Usps_Insert_Input,
  Venue_Usps_Line_Insert_Input,
  Venue_Usps_Save_Input,
  Venue_Usps_UpsertMutationVariables,
} from '../../../../generated'

import { OperationRequest } from '@otiuming/biz-builder'
import { Translated_Text_Update_Column } from '@otiuming/domain-omnidata-types'
import { text } from 'stream/consumers'

export function buildVenueSaveInput(
  request: OperationRequest<Venue_Main_Save_Input>,
  context: Preload_Venue_SaveQuery
): Venue_UpsertMutationVariables {
  const body = request.body
  const existingVenue = context.venue_by_pk

  return {
    venue: {
      id: body.id,
      organization_id: existingVenue.organization_id,
      gallery_id: existingVenue.gallery_id,
      usps_id: existingVenue.usps_id,

      description: {
        data: {
          id: existingVenue.description_id,
          ...body.description,
        },
        on_conflict: {
          constraint: Venue_Description_Constraint.VenueDescriptionPkey,
          update_columns: [
            Venue_Description_Update_Column.En,
            Venue_Description_Update_Column.Es,
            Venue_Description_Update_Column.De,
            Venue_Description_Update_Column.Fr,
          ],
        },
      },

      good_to_know: {
        data: {
          id: existingVenue.good_to_know_id,
          ...body.good_to_know,
        },
        on_conflict: {
          constraint: Venue_Good_To_Know_Constraint.VenueGoodToKnowPkey,
          update_columns: [
            Venue_Good_To_Know_Update_Column.En,
            Venue_Good_To_Know_Update_Column.Es,
            Venue_Good_To_Know_Update_Column.Fr,
            Venue_Good_To_Know_Update_Column.De,
          ],
        },
      },

      place: {
        data: {
          id: existingVenue.place_id,
          ...body.place
        },
        on_conflict: {
          constraint: Place_Constraint.PlacePkey,
          update_columns: [
            Place_Update_Column.Name,
            Place_Update_Column.Latitude,
            Place_Update_Column.Longitude,
          ]
        }
      }
    },
  }
}

export function buildVenueGallerySaveInput(
  request: OperationRequest<Venue_Gallery_Save_Input>,
  context: Preload_Venue_Gallery_SaveQuery
) {
  const { gallery: requestGallery } = request.body

  const { gallery_id, gallery: { name_id, headline_id } } = context.venue_by_pk

  const gallery: Media_Gallery_Insert_Input = {
    id: gallery_id,
    name: {
      data: {
        id: name_id,
        ...(requestGallery.name || {})
      },
      on_conflict: {
        constraint: Translated_Text_Constraint.TranslatedTextPkey,
        update_columns: [
          Translated_Text_Update_Column.En,
          Translated_Text_Update_Column.Es,
          Translated_Text_Update_Column.De,
          Translated_Text_Update_Column.Fr,
        ]
      }
    },
    headline: {
      data: {
        id: headline_id,
        ...(requestGallery.headline || {})
      },
      on_conflict: {
        constraint: Translated_Text_Constraint.TranslatedTextPkey,
        update_columns: [
          Translated_Text_Update_Column.En,
          Translated_Text_Update_Column.Es,
          Translated_Text_Update_Column.De,
          Translated_Text_Update_Column.Fr,
        ]
      }
    },
    items: {
      data: requestGallery.items.map((image, position) => ({
        file_id: image.file_id,
        position,
        name: {
          data: image.name || {},
        },
        headline: {
          data: image.headline || {},
        },
      })),
    },
  }

  return {
    gallery_id,
    gallery,
    texts_to_be_cleaned_up: [
      ...context.venue_by_pk.gallery.items.map((i) => i.name_id),
      ...context.venue_by_pk.gallery.items.map((i) => i.headline_id),
    ]
  }
}

export function buildVenueUspsSaveInput(
  request: OperationRequest<Venue_Usps_Save_Input>,
  context: Preload_Venue_Usps_SaveQuery
) {
  const { id, image_id, lines: requestLines } = request.body
  const { id: usps_id, lines: existingLines } = context.venue_by_pk.usps

  const venue_usp_lines_to_delete = existingLines.map((l) => l.id)
  // TODO: Do garbage collector about these 2
  const names_to_delete = existingLines.map((e) => e.name_id)
  const headlines_to_delete = existingLines.map((e) => e.headline_id)

  const linesData: Venue_Usps_Line_Insert_Input[] = requestLines.map(
    ({ name, headline }, position) => ({
      position,
      name: {
        data: {
          ...name,
        },
      },
      headline: {
        data: {
          ...headline,
        },
      },
    })
  )

  const usps: Venue_Usps_Insert_Input = {
    id: usps_id,
    image_id,
    lines: {
      data: linesData,
    },
  }

  const variables: Venue_Usps_UpsertMutationVariables = {
    usps,
    venue_usp_lines_to_delete,
    texts_to_be_cleaned_up: [
      ...names_to_delete,
      ...headlines_to_delete,
    ]
  }

  return variables
}

export function buildVenueFacilitiesSaveInput(
  request: OperationRequest<Venue_Facilities_Save_Input>,
  context: Preload_Venue_Facilities_SaveQuery
) {
  const venue_id = request.body.id
  const requestFacilities = request.body.items

  const contextFacilities = context.venue_by_pk.facilities

  const facility_to_delete = contextFacilities.map((f) => f.id)
  const names_to_delete = contextFacilities.map((f) => f.name_id)
  const headlines_to_delete = contextFacilities.map((f) => f.headline_id)
  const slugs_to_delete = contextFacilities.map((f) => f.slug_id)

  const facilities: Venue_Facility_Insert_Input[] = requestFacilities.map(
    ({ image_id, name, headline }, position) => ({
      venue_id,
      image_id,
      position,
      name: {
        data: name,
      },
      headline: {
        data: headline,
      },
      slug: {
        data: {
          ...sluggifyObject(name)
        }
      }
    })
  )

  const variables: Venue_Facilities_UpsertMutationVariables = {
    facility_to_delete,
    names_to_delete,
    headlines_to_delete,
    slugs_to_delete,
    facilities,
  }

  return variables
}
