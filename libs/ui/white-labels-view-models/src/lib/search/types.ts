import { RateOnlyResponse, SearchParams } from "@otiuming/domain-search"
import { NewExplainedSearchParams, ShoppingCartItem, Supplement } from "@otiuming/domain-shopping-cart"

import { FutureResult } from "../tools"

export type ReserveArguments = Omit<
  ShoppingCartItem,
  'title' | 'description' | 'image' | 'units'
> & {
  units: Array<{
    supplements: Array<
      Omit<
        Supplement,
        'title' | 'description' | 'image'
      >
    >
  }>
}

export type NewReserveArguments = Omit<
  ShoppingCartItem,
  'title' | 'description' | 'image' | 'units' | 'explainedSearchParams'
> & {
  explainedSearchParams: NewExplainedSearchParams
  units: Array<{
    supplements: Array<
      Omit<
        Supplement,
        'title' | 'description' | 'image'
      >
    >
  }>
}

export type ReserveFunction = (params: ReserveArguments) => void
export type NewReserveFunction = (params: NewReserveArguments) => void
export type OpenChooseOptionsFunction = () => void
export type NavigateToContactUsFunction = () => void

export type SearchFunction = (
  params: SearchParams,
) => FutureResult<RateOnlyResponse>


export interface UnitSelectedSupplement {
  id: string
  quantity: number
  unitPrice: number
}

export interface UnitSelectedSupplementsBySupplementId {
  [supplementId: string]: UnitSelectedSupplement
}

export interface SupplementSelectionArgs {
  unitIndex: number
  supplementId: string
  count?: number
}
