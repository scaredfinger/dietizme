import {
  Product_Business_Model,
  Rate_Price_Range,
} from '@otiuming/domain-omnidata-types'

import { AvailabilityRule } from './availability-rules'
import { PriceRule } from './price-rules'
import { Configuration } from './types'

export const MAX_CHILD_AGE = 12
export const MIN_CHILD_AGE = 2
export const MIN_ADULT_AGE = 13

export type BusinessModel = Pick<Product_Business_Model, 'time_management' | 'unit_management'>

export interface HourlyPrice {
  hourly: number
}

export interface DailyPrice {
  daily: number
}

export type CalendarEntry = Pick<Rate_Price_Range, 'from' | 'to'> &
  (HourlyPrice | DailyPrice)

export interface ModifiedRate {
  configuration: Configuration
  availabilityRules: AvailabilityRule[]
  priceRules: PriceRule[]
  calendar: CalendarEntry[]
}
