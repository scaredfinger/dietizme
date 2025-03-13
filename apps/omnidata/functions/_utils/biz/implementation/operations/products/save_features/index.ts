import { OperationRequest } from '@otiuming/biz-builder'

import { Preload_Save_Product_FeaturesQuery, Preload_Save_Product_FeaturesQueryVariables, Product_Feature_Insert_Input, Save_Product_FeaturesMutationVariables, Save_Product_Features_Input } from '../../../../../generated'

export function buildSaveFeaturesUpsertInput(
  request: OperationRequest<Save_Product_Features_Input>,
  context: Preload_Save_Product_FeaturesQuery
): Save_Product_FeaturesMutationVariables {
  const product_id = request.body.product_id
  const product_features: Product_Feature_Insert_Input[] = request.body.features.map((f, position) => ({
    product_id,
    position,
    ...f
  }))

  return {
    product_features
  }
}

export function organizationUserAndProduct(request: OperationRequest<Save_Product_Features_Input>): Preload_Save_Product_FeaturesQueryVariables {
  return {
    organization_id: request.body.organization_id,
    user_id: request.user,
    product_id: request.body.product_id
  }
}