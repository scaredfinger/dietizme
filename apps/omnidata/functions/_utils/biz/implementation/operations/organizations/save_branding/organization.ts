import {
  Organization_Branding_Meta_Description_Constraint,
  Organization_Branding_Meta_Description_Update_Column,
  Organization_Branding_Meta_Title_Constraint,
  Organization_Branding_Meta_Title_Update_Column,
  Organization_Branding_Save_Input,
  Preload_Organization_Branding_SaveQuery,
  Upsert_Organization_BrandingMutationVariables,
} from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function organizationBranding(
  request: OperationRequest<Organization_Branding_Save_Input>, 
  context: Preload_Organization_Branding_SaveQuery): 
  Upsert_Organization_BrandingMutationVariables {
  const branding = context.organization_by_pk.branding
  const body = request.body

  return {
    branding: {
      id: branding.id,
      logo_id: body.logo_id,
      logo_light_id: body.logo_light_id,
      favicon_id: body.favicon_id,
      meta_title: {
        data: {
          ...body.meta_title
        },
        on_conflict: {
          constraint: Organization_Branding_Meta_Title_Constraint.OrganizationBrandingMetaTitlePkey,
          update_columns: [
            Organization_Branding_Meta_Title_Update_Column.En,
            Organization_Branding_Meta_Title_Update_Column.Es,
            Organization_Branding_Meta_Title_Update_Column.Fr,
            Organization_Branding_Meta_Title_Update_Column.De,
          ]
        }
      },
      meta_description: {
        data: {
          ...body.meta_description
        },
        on_conflict: {
          constraint: Organization_Branding_Meta_Description_Constraint.OrganizationBrandingMetaDescriptionPkey,
          update_columns: [
            Organization_Branding_Meta_Description_Update_Column.En,
            Organization_Branding_Meta_Description_Update_Column.Es,
            Organization_Branding_Meta_Description_Update_Column.Fr,
            Organization_Branding_Meta_Description_Update_Column.De,
          ]
        }
      }
    }
  }
}