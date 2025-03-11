import { Result } from '@swan-io/boxed'

import {
  Rate_Type_Enum,
  Unit_Management_Enum,
} from '@otiuming/domain-omnidata-types'

import { createTimeSlotsRule } from './availability-rules'
import {
  BusinessModel,
  MAX_CHILD_AGE,
  MIN_ADULT_AGE,
  MIN_CHILD_AGE,
  ModifiedRate,
} from './domain'
import {
  DailyPerPaxConfiguration,
  DailyPerResourceConfiguration,
  TimeSlotsPerPaxConfiguration,
} from './types'
import { PerPaxPerDayCharge } from './price-rules/per-pax-per-day-charge'
import { PerPaxCharge } from './price-rules/per-pax-charge'

export function createModifiedRate<Configuration = unknown>(
  businessModel: BusinessModel,
  configuration: Configuration,
): Result<ModifiedRate, Error> {
  if (
    businessModel.time_management === Rate_Type_Enum.TimeSlots &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    const timeSlotsConfiguration = configuration as TimeSlotsPerPaxConfiguration

    const { durationInHours, pricePerPerson, pricePerChild, startingHours } =
      timeSlotsConfiguration

    const timeSlots = createTimeSlotsRule(timeSlotsConfiguration)

    const perAdultPerHourCharge: PerPaxCharge = {
      type: 'per-pax-charge',
      includedPax: 0,
      fromAge: MIN_ADULT_AGE,
      fixedAmount: pricePerPerson,
    }

    const perChildPerHourCharge: PerPaxCharge = {
      type: 'per-pax-charge',
      includedPax: 0,
      fromAge: MIN_CHILD_AGE,
      toAge: MAX_CHILD_AGE,
      fixedAmount: pricePerChild ?? pricePerPerson,
    }

    return Result.Ok({
      configuration: {
        type: 'time-slots-per-pax',
        durationInHours,
        pricePerPerson,
        pricePerChild,
        startingHours,
      },
      availabilityRules: [timeSlots],
      priceRules: [
        perAdultPerHourCharge, 
        perChildPerHourCharge
      ],
      calendar: [
        {
          from: '2000-01-01',
          to: '2999-12-31',
          hourly: 0,
        },
      ],
    })
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerResource
  ) {
    const dailyPerResourceConfiguration =
      configuration as DailyPerResourceConfiguration
    const { pricePerResource, maxResources } = dailyPerResourceConfiguration

    return Result.Ok({
      configuration: {
        type: 'daily-per-resource',
        pricePerResource,
        maxResources,
      },
      availabilityRules: [],
      priceRules: [],
      calendar: [
        {
          from: '2000-01-01',
          to: '2999-12-31',
          daily: pricePerResource,
        },
      ],
    })
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    const dailyPerPaxConfiguration = configuration as DailyPerPaxConfiguration
    const { pricePerPax, pricePerChild } = dailyPerPaxConfiguration

    const perAdultsPerDayCharge: PerPaxPerDayCharge = {
      type: 'per-pax-per-day-charge',
      includedPax: 0,
      fixedAmount: pricePerPax,
      fromAge: MIN_ADULT_AGE,
    }

    const perChildPerDayCharge: PerPaxPerDayCharge = {
      type: 'per-pax-per-day-charge',
      includedPax: 0,
      fixedAmount: pricePerChild,
      fromAge: MIN_CHILD_AGE,
      toAge: MAX_CHILD_AGE,
    }

    return Result.Ok({
      configuration: {
        type: 'daily-per-pax',
        pricePerPax,
        pricePerChild,
      },
      availabilityRules: [],
      priceRules: [perAdultsPerDayCharge, perChildPerDayCharge],
      calendar: [
        {
          from: '2000-01-01',
          to: '2999-12-31',
          daily: 0,
        },
      ],
    })
  }

  return Result.Ok({
    configuration: {
      type: 'empty',
    },
    availabilityRules: [],
    priceRules: [],
    calendar: [],
  })
}
