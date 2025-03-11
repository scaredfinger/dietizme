import { DateRange, DateValue, Guests } from '@otiuming/domain-data-types'
import { TimeSlot } from '@otiuming/domain-rates'
import { SearchParams } from '@otiuming/domain-search'

export interface ShoppingCartItem {
  searchParams: SearchParams
  explainedSearchParams: NewExplainedSearchParams
  title: string
  description: string
  price: number
  image: string
  rateId: string
  units: Unit[]
}

export interface TimeSlotSelection {
  type: 'time-slot-selection'
  date: DateValue
  timeSlot: TimeSlot
}

export interface DailySelection {
  type: 'daily-selection'
  dateRange: DateRange
}

export type DateTimeSelection = TimeSlotSelection | DailySelection

export type Legacy_Obsolete_ExplainedSearchParams =
  | Legacy_Obsolete_ExplainedDailyPerResourceSearchParams
  | Legacy_Obsolete_ExplainedTimeSlotPerPaxSearchParams
  | Legacy_Obsolete_ExplainedDailyPerPaxSearchParams

export interface Legacy_Obsolete_ExplainedTimeSlotPerPaxSearchParams {
  type: 'time-slot-per-pax'
  dateTimeSelection: TimeSlotSelection
  units: ExplainedUnit[]
}

export interface Legacy_Obsolete_ExplainedDailyPerResourceSearchParams {
  type: 'daily-per-resource'
  dateTimeSelection: DailySelection
  quantity: number
}

export interface Legacy_Obsolete_ExplainedDailyPerPaxSearchParams {
  type: 'daily-per-pax'
  dateTimeSelection: DailySelection
  units: ExplainedUnit[]
}

export interface PerPaxUnitSelection {
  type: 'per-pax'
  units: {
    guests: Guests
  }[]
}

export interface PerResourceUnitSelection {
  type: 'per-resource'
  quantity: number
}

export type UnitSelection = PerPaxUnitSelection | PerResourceUnitSelection

// interface DailyPerPaxExplainedSearchParams {
//   type: 'daily-per-pax'
//   dateTimeSelection: DailySelection
//   unitSelection: PerPaxUnitSelection
// }

// interface DailyPerResourceExplainedSearchParams {
//   type: 'daily-per-resource'
//   dateTimeSelection: DailySelection
//   unitSelection: PerResourceUnitSelection
// }

export interface NewExplainedSearchParams {
  dateTimeSelection: DateTimeSelection
  unitSelection: UnitSelection
}

// export type NewExplainedSearchParams = DailyPerPaxExplainedSearchParams
//   | DailyPerResourceExplainedSearchParams

export interface ExplainedUnit {
  type: 'per-pax'
  guests: Guests
}

export interface PerResourceUnit {
  type: 'per-resource'
}

export interface Supplement {
  id: string
  quantity: number
  unitPrice: number
  title: string
  description: string
  image: string
}

export interface Unit {
  supplements: Supplement[]
}
