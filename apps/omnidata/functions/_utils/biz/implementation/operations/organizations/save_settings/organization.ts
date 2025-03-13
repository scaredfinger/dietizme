import {
  Organization_Headline_Constraint,
  Organization_Headline_Update_Column,
  Organization_Settings_Save_Input,
  Organization_Socials_Constraint,
  Organization_Socials_Update_Column,
  Preload_Organization_Settings_SaveQuery,
  Upsert_OrganizationMutationVariables,
} from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function organizationSettings(
  request: OperationRequest<Organization_Settings_Save_Input>,
  context: Preload_Organization_Settings_SaveQuery
): Upsert_OrganizationMutationVariables {
  const requestOrganization = request.body

  return {
    organization_id: requestOrganization.id,
    organization: {
      id: requestOrganization.id,
      name: requestOrganization.name,
      email: requestOrganization.email,
      phone_number: requestOrganization.phone_number,
      headline: {
        data: requestOrganization.headline,
        on_conflict: {
          constraint: Organization_Headline_Constraint.OrganizationHeadlinePkey,
          update_columns: [
            Organization_Headline_Update_Column.En,
            Organization_Headline_Update_Column.Es,
            Organization_Headline_Update_Column.De,
            Organization_Headline_Update_Column.Fr,
          ],
        },
      },
      sites: {
        data: requestOrganization.sites.map(({ url }) => ({
          url,
        })),
      },
      socials: {
        data: requestOrganization.socials,
        on_conflict: {
          constraint: Organization_Socials_Constraint.OrganizationSocialsPkey,
          update_columns: [
            Organization_Socials_Update_Column.Facebook,
            Organization_Socials_Update_Column.Instagram,
            Organization_Socials_Update_Column.Twitter,
            Organization_Socials_Update_Column.Youtube,
          ]
        }
      },
      branding_id: context.organization_by_pk.branding_id,
    },
  }
}
