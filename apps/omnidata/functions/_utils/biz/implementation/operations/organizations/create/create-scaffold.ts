import { OperationRequest } from '@otiuming/biz-builder'

import {
  Organization_Create_Input,
  Preload_Organization_CreateQuery,
  Role_Enum,
  Upsert_Organization_And_Verify_OwnerMutationVariables,
  Venue_Insert_Input,
  Multilanguage_Field_Input,
  Place_Insert_Input,
  Venue_Usps_Insert_Input,
  Media_Gallery_Insert_Input,
  Organization_Branding_Insert_Input,
  Rate_Type_Enum,
  Unit_Management_Enum,
} from '../../../../../generated'

export function createScaffoldOrganization(
  request: OperationRequest<Organization_Create_Input>,
  context: Preload_Organization_CreateQuery
): Upsert_Organization_And_Verify_OwnerMutationVariables {
  const {
    body: { name },
  } = request
  const { users } = context
  const user = users[0]

  return {
    owner_id: user.id,
    organization_id: '00000000-0000-0000-0000-000000000000',
    organization: {
      name,
      email: user.email,
      sites: dataOf(scaffoldSites(request, context)),
      members: dataOf(scaffoldMembers(request, context)),
      headline: dataOf(createScaffoldMultilanguageField()),
      branding: dataOf(scaffoldBranding()),
      venues: dataOf([createScaffoldVenue(request, context)]),
      business_model: dataOf({
        rate_type: Rate_Type_Enum.TimeSlots,
        unit_management: Unit_Management_Enum.PerPax
      }),
      socials: dataOf({
        // TODO: Add socials
      })
    },
  }
}
function scaffoldBranding(): Organization_Branding_Insert_Input {
  return {
    meta_title: dataOf(createScaffoldMultilanguageField()),
  }
}

function scaffoldMembers(
  request: OperationRequest<Organization_Create_Input>,
  context: Preload_Organization_CreateQuery
): { user_id: any; role: Role_Enum.Admin }[] {
  const {
    body: { name },
  } = request
  const { users } = context
  const user = users[0]

  return [
    {
      user_id: user.id,
      role: Role_Enum.Admin,
    },
  ]
}

function scaffoldSites(
  request: OperationRequest<Organization_Create_Input>,
  context: Preload_Organization_CreateQuery): { url: string }[] {
  const {
    body: { name },
  } = request
  const { users } = context

  const nameWithHyphens = name.replace(/\s+/g, '-').toLowerCase()

  return [
    {
      url: `${nameWithHyphens}.reservatr.com`,
    },
  ]
}

// creates a scaffold Venue_Insert_Input
export function createScaffoldVenue(
  { body: { name } }: OperationRequest<Organization_Create_Input>,
  { users }: Preload_Organization_CreateQuery
): Venue_Insert_Input {
  return {
    description: dataOf(createScaffoldMultilanguageField()),
    good_to_know: dataOf(createScaffoldMultilanguageField()),
    facilities: dataOf([]),
    usps: dataOf(scaffoldUSPs()),
    gallery: dataOf(scaffoldGallery()),
    place: dataOf(scaffoldPlace()),
  }
}
function scaffoldPlace(): Place_Insert_Input {
  return {
    name: 'Place Name',
    latitude: 40.4168,
    longitude: 3.7038,
  }
}

function scaffoldUSPs(): Venue_Usps_Insert_Input {
  return {}
}

function scaffoldGallery(): Media_Gallery_Insert_Input {
  return {
    headline: dataOf(createScaffoldMultilanguageField()),
    name: dataOf(createScaffoldMultilanguageField()),
  }
}

// creates a object with data containing the argument
export function dataOf<T>(data: T): { data: T } {
  return { data }
}

// create a scaffold Multilanguage_Field_Input
export function createScaffoldMultilanguageField(): Multilanguage_Field_Input {
  return {
    en: 'English',
  }
}
