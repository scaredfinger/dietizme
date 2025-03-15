import { Get_Product_PageQuery } from "@/data-access";

export type Product_Page_Product = Get_Product_PageQuery['products'][0]
export type Product_Page_Organization = Get_Product_PageQuery['matching_organizations'][0]
export type Supplement = Get_Product_PageQuery['products'][0]['supplements'][0]['supplement']

export interface Props {
  product: Product_Page_Product
  organization: Product_Page_Organization
}