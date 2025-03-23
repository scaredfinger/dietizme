import { DateRangeWithValue } from '@/components/forms'
import {
  Get_OrganizationQuery,
  Get_Product_Single_RateQuery,
  Get_Rate_FullQuery,
} from '@/data-access'

type RateByPk = Get_Rate_FullQuery['rate_by_pk']
export type FormRate = Omit<RateByPk, 'price_calendar'> & {
  price_calendar?: DateRangeWithValue[]
}
export type Organization = Get_OrganizationQuery['organization_by_pk']
export type Rate = Get_Rate_FullQuery['rate_by_pk']

export type RateProduct = Get_Product_Single_RateQuery['product']
