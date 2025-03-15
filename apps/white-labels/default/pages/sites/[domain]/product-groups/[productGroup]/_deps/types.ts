import {
  Get_Product_Group_PageQuery,
} from '@/data-access'

export type Product_Groups_Page_Organization = Get_Product_Group_PageQuery['matching_organizations'][0]
export type Product_Groups_Page_Product_Group = Get_Product_Group_PageQuery['product_group'][0]

export interface Props {
  organization: Product_Groups_Page_Organization
  productGroup: Product_Groups_Page_Product_Group
  domain: string
  locale: string
}