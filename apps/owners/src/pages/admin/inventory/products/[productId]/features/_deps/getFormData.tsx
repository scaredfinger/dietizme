import { OrganizationFeature, ProductFeature } from './types'

export function getFormData(
  product_features: ProductFeature[],
  organization_features: OrganizationFeature[],
) {
  if (!product_features || !organization_features) {
    return []
  }

  return product_features.map((pf) => {
    
    return {
      feature_id: pf.feature_id,
      value: pf.value,
    }
  })
}
