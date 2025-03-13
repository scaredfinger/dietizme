import { OperationRequest } from '@otiuming/biz-builder'
import {
  Activate_Organization_Features_Input,
  Preload_Activate_Organization_FeaturesQueryVariables
} from '@/generated'

export function userOrganizationAndCategoryIds(
  request: OperationRequest<Activate_Organization_Features_Input>,
): Preload_Activate_Organization_FeaturesQueryVariables {
  return {
    ...request.body,
    user_id: request.user
  }
}
