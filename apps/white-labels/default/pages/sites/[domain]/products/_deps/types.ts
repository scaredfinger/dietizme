import { Get_Products_PageQuery } from "@/data-access";

export type Products_Page_Organization = Get_Products_PageQuery['matching_organizations'][0]
export type Products_Page_Products = Get_Products_PageQuery['products']
export type Products_Page_Product_Groups = Get_Products_PageQuery['groups']

export interface Props {
  organization: Products_Page_Organization
  products: Products_Page_Products
  groups: Products_Page_Product_Groups
}
