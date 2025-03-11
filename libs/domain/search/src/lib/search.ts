import {DateRange} from '@otiuming/domain-data-types'

export interface Rate {
  id: string
  units: ResponseUnit[]
}

export interface WithPrices {
  daily: number[]
  hourly: number[]
  global: number
}

export interface ResponseUnit extends WithPrices {
  total: number
  mandatorySupplements?: Supplement[]
  optionalSupplements?: Supplement[]
}

export interface Supplement extends WithPrices {
  id: string
  index: number
  type: string
  sum: number
}

export type RateOnlyResponse = Rate[]

export interface SearchParams {
  dateRange: DateRange
  units: Unit[]
}

export interface Unit {
  people?: Person[]
}

export interface Person {
  age?: number
}

export interface Contact {
  name: string
  email: string
}
