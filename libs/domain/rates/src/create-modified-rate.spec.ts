import { Result } from '@swan-io/boxed'
import { fail } from 'assert'
import { describe, it, expect, beforeEach } from 'vitest'

import { Rate_Type_Enum, Unit_Management_Enum } from '@otiuming/domain-omnidata-types'

import { createModifiedRate } from './create-modified-rate'
import { TimeSlots } from './availability-rules'
import { DailyPrice, HourlyPrice, MAX_CHILD_AGE, MIN_ADULT_AGE, MIN_CHILD_AGE, ModifiedRate } from './domain'
import { DailyPerPaxConfiguration, DailyPerResourceConfiguration, TimeSlotsPerPaxConfiguration } from './types'
import { PerPaxCharge } from './price-rules/per-pax-charge'
import { PerPaxPerDayCharge } from './price-rules/per-pax-per-day-charge'

const PRICE_PER_ADULT = 10
const PRICE_PER_CHILD = 5
const DURATION_HOURS = 3
const PRICE_PER_DAY = 100

describe('createModifiedRate', () => {
  it('is defined', () => {
    expect(createModifiedRate).toBeTruthy()
  })

  describe('time slots, per pax business model', () => {
    let modifiedRate: Result<ModifiedRate, Error>

    beforeEach(() => {
      modifiedRate = createModifiedRate<TimeSlotsPerPaxConfiguration>(
        {
          time_management: Rate_Type_Enum.TimeSlots,
          unit_management: Unit_Management_Enum.PerPax
        },
        {
          type: 'time-slots-per-pax',
          durationInHours: DURATION_HOURS,
          pricePerPerson: PRICE_PER_ADULT,
          pricePerChild: PRICE_PER_CHILD,
          startingHours: [10, 14],
        },
      )
    })

    it('returns Ok', () => {
      expect(modifiedRate.isOk()).toBe(true)
    })

    describe('calendar', () => {
      it('has one item', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar.length).toBe(1)
          },
          Error: () => {
            fail()
          },
        })
      })

      it('ranges from 2000 till 2999', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar[0].from).toEqual('2000-01-01')
            expect(rate.calendar[0].to).toEqual('2999-12-31')
          },
          Error: () => {
            fail()
          },
        })
      })

      it('returns hourly rate of price per person divided my duration hours', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const hourlyCalendar: HourlyPrice = rate.calendar[0] as HourlyPrice
            expect(hourlyCalendar.hourly).toBe(0)
          },
          Error: () => {
            fail()
          },
        })
      })
    })

    describe('availabilityRules', () => {
      it('returns time-slots availability rule', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const asTimeSlots: TimeSlots = rate
              .availabilityRules[0] as TimeSlots

            expect(asTimeSlots.type).toBe('time-slots')

            expect(asTimeSlots.slots[0].start).toBe('10:00')
            expect(asTimeSlots.slots[0].end).toBe('13:00')

            expect(asTimeSlots.slots[1].start).toBe('14:00')
            expect(asTimeSlots.slots[1].end).toBe('17:00')
          },
          Error: () => {
            fail()
          },
        })
      })
    })

    describe('priceRules', () => {
      let priceRules: PerPaxCharge[]

      beforeEach(() => {
        modifiedRate.match({
          Ok: (rate) => {
            priceRules = rate.priceRules as PerPaxCharge[]
          },
          Error: () => {
            fail()
          },
        })
      })

      describe('per-person-charge', () => {
        describe('adults', () => {
          it('returns the min age', () => {
            expect(priceRules[0].fromAge).toBe(MIN_ADULT_AGE)
          })

          it('returns 100%', () => {
            expect(priceRules[0].fixedAmount).toBe(10)
          })

          it('returns included pax = 0', () => {
            expect(priceRules[0].includedPax).toBe(0)
          })
        })

        describe('children', () => {
          it('returns 1 for children', () => {
            expect(priceRules[1].fromAge).toBe(MIN_CHILD_AGE)
            expect(priceRules[1].toAge).toBe(MAX_CHILD_AGE)
          })

          it('returns 50%', () => {
            expect(priceRules[1].fixedAmount).toBe(5)
          })

          it('returns included pax=0', () => {
            expect(priceRules[1].includedPax).toBe(0)
          })
        })
      })

      it('returns 2 items of type per-person-per-hour-charge', () => {
        expect(priceRules.length).toBe(2)
        expect(priceRules[0].type).toBe('per-pax-charge')
        expect(priceRules[1].type).toBe('per-pax-charge')
      })
    })

    describe('configuration', () => {
      it('is is a time-slots-per-pax configuration', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.configuration.type).toBe('time-slots-per-pax')
            
            const timeSlotsConfiguration = rate.configuration as TimeSlotsPerPaxConfiguration
            expect(timeSlotsConfiguration.durationInHours).toEqual(DURATION_HOURS)
            expect(timeSlotsConfiguration.pricePerPerson).toEqual(PRICE_PER_ADULT)
            expect(timeSlotsConfiguration.pricePerChild).toEqual(PRICE_PER_CHILD)
            expect(timeSlotsConfiguration.startingHours).toEqual([10, 14])
          },
          Error: () => {
            fail()
          },
        })
      })

      it('does not have any addtional properties', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const timeSlotsConfiguration = rate.configuration as TimeSlotsPerPaxConfiguration
            expect(Object.keys(timeSlotsConfiguration).length).toBe(5)
          },
          Error: () => {
            fail()
          },
        })
      })
    })
  })

  describe('daily, per resource business model', () => {
    let modifiedRate: Result<ModifiedRate, Error>

    beforeEach(() => {
      modifiedRate = createModifiedRate<DailyPerResourceConfiguration>(
        {
          time_management: Rate_Type_Enum.Daily,
          unit_management: Unit_Management_Enum.PerResource
        },
        {
          type: 'daily-per-resource',
          pricePerResource: PRICE_PER_DAY,
          maxResources: 1
        },
      )
    })

    it('returns Ok', () => {
      expect(modifiedRate.isOk()).toBe(true)
    })

    describe('calendar', () => {
      it('has one item', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar.length).toBe(1)
          },
          Error: () => {
            fail()
          },
        })
      })

      it('ranges from 2000 till 2999', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar[0].from).toEqual('2000-01-01')
            expect(rate.calendar[0].to).toEqual('2999-12-31')
          },
          Error: () => {
            fail()
          },
        })
      })

      it('has a daily rate equal to the one set in the configuration', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const dailyRate: DailyPrice = rate.calendar[0] as DailyPrice
            expect(dailyRate.daily).toEqual(PRICE_PER_DAY)
          },
          Error: () => fail()
        })
      })
    })

    describe('configuration', () => {
      it('is is a daily-per-resource', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.configuration.type).toBe('daily-per-resource')
            
            const dailyPerResourceConfiguration = rate.configuration as DailyPerResourceConfiguration
            expect(dailyPerResourceConfiguration.pricePerResource).toEqual(PRICE_PER_DAY)
            expect(dailyPerResourceConfiguration.maxResources).toEqual(1)
          },
          Error: () => {
            fail()
          },
        })
      })
      
      it('does not have any addtional properties', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const dailyPerResourceConfiguration = rate.configuration as DailyPerResourceConfiguration
            expect(Object.keys(dailyPerResourceConfiguration).length).toBe(3)
          },
          Error: () => {
            fail()
          },
        })
      })
    })    
  })

  describe('daily, per pax business model', () => {
    let modifiedRate: Result<ModifiedRate, Error>

    beforeEach(() => {
      modifiedRate = createModifiedRate<DailyPerPaxConfiguration>(
        {
          time_management: Rate_Type_Enum.Daily,
          unit_management: Unit_Management_Enum.PerPax
        },
        {
          type: 'daily-per-pax',
          pricePerPax: PRICE_PER_DAY,
          pricePerChild: PRICE_PER_CHILD,
        },
      )
    })

    it('returns Ok', () => {
      expect(modifiedRate.isOk()).toBe(true)
    })

    describe('calendar', () => {
      it('has one item', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar.length).toBe(1)
          },
          Error: () => {
            fail()
          },
        })
      })

      it('ranges from 2000 till 2999', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.calendar[0].from).toEqual('2000-01-01')
            expect(rate.calendar[0].to).toEqual('2999-12-31')
          },
          Error: () => {
            fail()
          },
        })
      })

      it('has a daily rate equal to the one set in the configuration', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const dailyRate: DailyPrice = rate.calendar[0] as DailyPrice
            expect(dailyRate.daily).toEqual(0)
          },
          Error: () => fail()
        })
      })
    })

    describe('configuration', () => {
      it('is is a daily-per-pax', () => {
        modifiedRate.match({
          Ok: (rate) => {
            expect(rate.configuration.type).toBe('daily-per-pax')
            
            const dailyPerPaxConfiguration = rate.configuration as DailyPerPaxConfiguration
            expect(dailyPerPaxConfiguration.pricePerPax).toEqual(PRICE_PER_DAY)
            expect(dailyPerPaxConfiguration.pricePerChild).toEqual(PRICE_PER_CHILD)
          },
          Error: () => {
            fail()
          },
        })
      })
      
      it('does not have any addtional properties', () => {
        modifiedRate.match({
          Ok: (rate) => {
            const dailyPerPaxConfiguration = rate.configuration as DailyPerPaxConfiguration
            expect(Object.keys(dailyPerPaxConfiguration).length).toBe(3)
          },
          Error: () => {
            fail()
          },
        })
      })
    })

    describe('priceRules', () => {
      let priceRules: PerPaxPerDayCharge[]

      beforeEach(() => {
        modifiedRate.match({
          Ok: (rate) => {
            priceRules = rate.priceRules as PerPaxPerDayCharge[]
          },
          Error: () => {
            fail()
          },
        })
      })

      describe('per-pax-per-day-charge', () => {
        describe('adults', () => {
          it('returns the min age', () => {
            expect(priceRules[0].fromAge).toBe(MIN_ADULT_AGE)
          })

          it('returns 100%', () => {
            expect(priceRules[0].fixedAmount).toBe(PRICE_PER_DAY)
          })

          it('returns included pax = 0', () => {
            expect(priceRules[0].includedPax).toBe(0)
          })
        })

        describe('children', () => {
          it('returns 1 for children', () => {
            expect(priceRules[1].fromAge).toBe(MIN_CHILD_AGE)
            expect(priceRules[1].toAge).toBe(MAX_CHILD_AGE)
          })

          it('returns 50%', () => {
            expect(priceRules[1].fixedAmount).toBe(PRICE_PER_CHILD)
          })

          it('returns included pax=0', () => {
            expect(priceRules[1].includedPax).toBe(0)
          })
        })
      })

      it('returns 2 items of type per-pax-per-hour-charge', () => {
        expect(priceRules.length).toBe(2)
        expect(priceRules[0].type).toBe('per-pax-per-day-charge')
        expect(priceRules[1].type).toBe('per-pax-per-day-charge')
      })
    })
  })
})
