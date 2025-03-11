import { Hour } from '@otiuming/domain-data-types'

export interface EmptyConfiguration {
  type: 'empty'
}

export interface TimeSlotsPerPaxConfiguration {
  type: 'time-slots-per-pax'
  durationInHours: number
  pricePerPerson: number
  pricePerChild?: number
  startingHours: Hour[]
}

export interface TimeSlotsPerResourceConfiguration {
  type: 'time-slots-per-resource'
  durationInHours: number
  pricePerResource: number
  maxResources: number
  startingHours: Hour[]
}

export interface DailyPerResourceConfiguration {
  type: 'daily-per-resource'
  pricePerResource: number
  maxResources: number
}

export interface DailyPerPaxConfiguration {
  type: 'daily-per-pax'
  pricePerPax: number
  pricePerChild: number
}

export type Configuration = EmptyConfiguration
  | TimeSlotsPerPaxConfiguration 
  | TimeSlotsPerResourceConfiguration 
  | DailyPerResourceConfiguration
  | DailyPerPaxConfiguration