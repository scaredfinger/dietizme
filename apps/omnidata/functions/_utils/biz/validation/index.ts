import { Organization_Create_Input, Preload_Organization_CreateQuery } from '../../generated'
import {
  OperationRequest,
  Role,
  ValidationResult,
  ValidatorFunction,
} from '@otiuming/biz-builder'

const VALIDATION_OK = {
  ok: true,
}

function error(errorMessage: string): ValidationResult {
  return {
    ok: false,
    errorMessage,
  }
}

interface HasPermissionsAdminPermissionsInputV2 {
  organization?: {
    members: {
      role?: string | null
    }[]
  }[]
  organization_by_pk?: {
    members: {
      role?: string | null
    }[]
  }
}

export function allowAnything() {
  return VALIDATION_OK
}

interface ContextWithOrganization {
  organization_by_pk?: unknown
  organization?: unknown[] | unknown
}

export function organizationExists<Context extends ContextWithOrganization, Body>(
  context: Context,
  request: OperationRequest<Body>
) {
  const organization = context.organization_by_pk
    || (context.organization && context.organization[0])
    || (context.organization)

  if (!organization) {
    return error(`Organization does not exist`)
  }

  return VALIDATION_OK
}

export function hasPermissionsAdminPermissions<
  Context extends HasPermissionsAdminPermissionsInputV2,
  Body
>(context: Context, request: OperationRequest<Body>) {
  const organization = context.organization_by_pk
    || context.organization[0]

  if (!organization?.members || organization.members[0]?.role !== Role.admin) {
    return error(
      `User '${request.user}' has not the required permissions`
    )
  }

  return VALIDATION_OK
}

export function noValidation() {
  return VALIDATION_OK
}

export function isGod<
  Context,
  Body
>(context: Context, request: OperationRequest<Body>) {
  if (request.user !== 'admin') {
    return error(
      `User '${request.user}' has not the required permissions`
    )
  }

  return VALIDATION_OK
}

// TODO: Un comment
// export function expectedPriceMatchesCurrent(
//   context: Preload_Booking_CreateQuery,
//   request: OperationRequest<Booking_Create_Input>
// ) {
//   if (
//     !context?.search_from_token?.result?.bookable_options 
//     || !context.search_from_token.result.bookable_options[0]?.total
//   ) {
//     return error(`Could not find a rate for specified token`)
//   }

//   const bookable_option = context.search_from_token.result.bookable_options[0]

//   if (
//     request.body.expected_price != bookable_option.total
//   ) {
//     return error(`Price don't match`)
//   }

//   return VALIDATION_OK
// }

export function and<Context, Body>(
  ...inner: ValidatorFunction<Context, Body>[]
): ValidatorFunction<Context, Body> {
  return function (context, request) {
    const results = inner.map((validate) => validate(context, request))

    const failingResults = results.filter((r) => !r.ok)
    if (failingResults.length > 0) {
      return error(failingResults.map((r) => r.errorMessage).join(', '))
    }

    return VALIDATION_OK
  }
}

export function userHasNoOrganization(
  context: Preload_Organization_CreateQuery,
  request: OperationRequest<Organization_Create_Input>
): ValidationResult {
  if (context.organizations_for_that_user.length > 0) {
    return error(`User '${request.user}' already has an organization`)
  }

  return VALIDATION_OK
}

export function thereIsNoOrganizationWithSameName(
  context: Preload_Organization_CreateQuery,
  request: OperationRequest<Organization_Create_Input>
): ValidationResult {
  if (context.organizations_with_same_name.length > 0) {
    return error(`Organization name '${request.body.name}' already exists`)
  }

  return VALIDATION_OK
}

export function userExists(
  context: {
    users: {
      id: string
      email?: string
    }[]
  },
  request: OperationRequest<Organization_Create_Input>
): ValidationResult {
  if (!context.users || context.users.length === 0) {
    return error(`User '${request.body.owner_email}' does not exist`)
  }

  return VALIDATION_OK
}