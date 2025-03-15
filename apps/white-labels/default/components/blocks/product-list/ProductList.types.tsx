import {
  Product_Group_Minimal_With_Product_Ids_And_StatsFragment,
  Product_List_ItemFragment,
  Product_With_Rates_MinimalFragment,
} from '@/data-access'

export type ProductListItem = Product_List_ItemFragment & Product_With_Rates_MinimalFragment
export type GroupListItem = Product_Group_Minimal_With_Product_Ids_And_StatsFragment
