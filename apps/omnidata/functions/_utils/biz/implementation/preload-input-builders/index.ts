import { OperationRequest } from '@otiuming/biz-builder'

interface BodyWithOrganization {
  organization_id: string
}

interface BodyWithId {
  id: string
}

type BodyWithOrganizationAndId = BodyWithOrganization & BodyWithId

interface BodyWithNameAndOwnerEmail {
  name: string
  owner_email: string
}

export function organization({
  body: { organization_id }
}: OperationRequest<BodyWithOrganization>) {
  return {
    organization_id
  }
}

export function userAndId({
  user: user_id,
  body: { id },
}: OperationRequest<BodyWithId>) {
  return {
    id,
    user_id,
  }
}

export function nameAndOwnerEmail({
  body: { name, owner_email },
}: OperationRequest<BodyWithNameAndOwnerEmail>) {
  return {
    name,
    owner_email,
  }
}

export function userAndOrganization({
  user: user_id,
  body: { organization_id },
}: OperationRequest<BodyWithOrganization>) {
  return {
    organization_id,
    user_id,
  }
}

export function userOrganizationAndId({
  user: user_id,
  body: { organization_id, id },
}: OperationRequest<BodyWithOrganizationAndId>) {
  return {
    organization_id,
    user_id,
    id
  }
}

export function organizationAndId({
  body: { organization_id, id },
}: OperationRequest<BodyWithOrganizationAndId>) {
  return {
    organization_id,
    id
  }
}
