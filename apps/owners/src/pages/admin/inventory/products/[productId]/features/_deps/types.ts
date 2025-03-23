import { Get_Product_Features_PageQuery } from '@/data-access'

export type ProductFeature =
  Get_Product_Features_PageQuery['product_features'][0]
export type OrganizationFeature =
  Get_Product_Features_PageQuery['organization_features'][0]
