import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'
import * as _ from 'lodash-es'

import { DateValue, dateValue } from '@otiuming/domain-data-types'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'
import {
  TimeSlot as DomainTimeSlot,
  TimeSlotsPerPaxConfiguration,
} from '@otiuming/domain-rates'
import { Rate, RateOnlyResponse } from '@otiuming/domain-search'

import { AsyncResult, Optional, OptionalAsyncResult, delay } from '../../tools'
import { UnitSelectedSupplementsBySupplementId } from '../types'

import { ViewModelBase } from './bases'
import { TimeSlotMixin, TimeSlotsConfiguration, TimeSlotsState, type TimeSlotClass } from './time-slots'
import {
  TestStateImplementation,
  TestableMixin,
  TIMESLOT_SELECTION,
  PER_RESOURCE_SELECTION,
} from './test-utils'

const TEST_EXPLAINED_SEARCH_PARAMS: NewExplainedSearchParams = {
  dateTimeSelection: TIMESLOT_SELECTION,
  unitSelection: PER_RESOURCE_SELECTION,
}

describe('TimeSlot', () => {
  let explainedSearchParamsUsedForSearching: NewExplainedSearchParams[]

  let sut: TimeSlotClass

  beforeEach(() => {
    explainedSearchParamsUsedForSearching = []

    const TimeSlot = TestableMixin(
      TimeSlotMixin(
        ViewModelBase<
          TimeSlotsState,
          Omit<TimeSlotsPerPaxConfiguration, 'pricePerPerson' | 'type'>
        >,
      ),
      {
        baseExplainedSearchParams: TEST_EXPLAINED_SEARCH_PARAMS,
        onSearchWithModifiedParams: (params: NewExplainedSearchParams) =>
          explainedSearchParamsUsedForSearching.push(params),
      },
    )

    sut = new TimeSlot(
      new TimeSlotsStateImplementation(),
      {
        durationInHours: 2,
        startingHours: [0, 12],
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _.noop as any,
      _.noop,
      _.noop,
      _.noop,
    )
  })

  it('can be instanciated', () => {
    expect(sut).toBeDefined()
  })

  it('returns dateTimeSelection', () => {
    sut.dateTimeSelection.match({
      Some: () => {
        expect(1).toBeTruthy()
      },
      None: () => {
        fail('Expected explainedSearchParams to be defined')
      },
    })
  })

  describe('properties', () => {
    describe('dateTimeSelection', () => {
      it('returns the value', () => {
        sut.dateTimeSelection.match({
          Some: (dateTimeSelection) => {
            expect(dateTimeSelection).toEqual({
              type: 'time-slot-selection',
              date: dateValue('2021-01-01'),
              timeSlot: { start: '00:00', end: '02:00' },
            })
          },
          None: () => {
            fail('Expected dateTimeSelection to be defined')
          },
        })
      })
    })

    describe('timeSlot', () => {
      it('returns the timeSlot', () => {
        sut.timeSlot.match({
          Some: () => {
            fail('Expected timeSlot to be defined')
          },
          None: () => {
            expect(1).toBeTruthy()
          },
        })
      })

      it('can be set', async () => {
        sut.setTimeSlot({ start: '12:00', end: '14:00' })
        await delay()

        sut.timeSlot.match({
          Some: (timeSlot) => {
            expect(timeSlot).toEqual({ start: '12:00', end: '14:00' })
          },
          None: () => {
            fail('Expected timeSlot to be defined')
          },
        })

        sut.dateTimeSelection.match({
          Some: (dateTimeSelection) => {
            expect(dateTimeSelection).toEqual({
              type: 'time-slot-selection',
              date: dateValue('2021-01-01'),
              timeSlot: { start: '12:00', end: '14:00' },
            })
          },
          None: () => {
            fail('Expected dateTimeSelection to be defined')
          },
        })
      })
    })

    describe('date', () => {
      it('returns the date', () => {
        expect(sut.date).toEqual(dateValue('2021-01-01'))
      })

      it('can be set', async () => {
        sut.setDate(dateValue('2021-01-02'))
        await delay()

        expect(sut.date).toEqual(dateValue('2021-01-02'))
      })
    })

    describe('timeSlotOptions', () => {
      it('returns the timeSlotsInConfig aggregated as a object with the key and value being the start time', () => {
        expect(sut.timeSlotOptions).toEqual({
          '00:00': '00:00',
          '12:00': '12:00',
        })
      })
    })
  })

  describe('handlers', () => {
    describe('handleTimeSlotChange', () => {
      it('sets the timeSlot', async () => {
        sut.handleTimeSlotChange({ start: '12:00', end: '14:00' })
        await delay()

        sut.timeSlot.match({
          Some: (timeSlot) => {
            expect(timeSlot).toEqual({ start: '12:00', end: '14:00' })
          },
          None: () => {
            fail('Expected timeSlot to be defined')
          },
        })
      })
    })

    describe('handleDateChange', () => {
      it('sets the date', async () => {
        sut.handleDateChange(dateValue('2021-01-02'))
        await delay()

        expect(sut.date).toEqual(dateValue('2021-01-02'))
      })
    })

    describe('handleTimeSlotByStartChange', () => {
      it('sets the timeSlot', async () => {
        sut.handleTimeSlotByStartChange('12:00')
        await delay()

        sut.timeSlot.match({
          Some: (timeSlot) => {
            expect(timeSlot).toEqual({ start: '12:00', end: '14:00' })
          },
          None: () => {
            fail('Expected timeSlot to be defined')
          },
        })
      })

      it('does nothing if the timeSlot does not exist', async () => {
        sut.handleTimeSlotByStartChange('13:00')
        await delay()

        sut.timeSlot.match({
          Some: () => {
            fail('Expected timeSlot to be defined')
          },
          None: () => {
            expect(true).toBe(true)
          },
        })
      })
    })
  })

  describe('initialize', () => {
    beforeEach(async () => {
      sut.initialize()

      await delay()
    })

    it('selects the first timeSlot', () => {
      sut.timeSlot.match({
        Some: (timeSlot) => {
          expect(timeSlot).toEqual(sut.timeSlots[0])
        },
        None: () => {
          fail('Expected timeSlot to be defined')
        },
      })
    })
  })
})

;[
  {
    title: 'there are no time slots',
    configruation: { durationInHours: 2, startingHours: [] },
  },
  {
    title: 'configuration is empty',
    configruation: {},
  },
  {
    title: 'configuration is null',
    configruation: null,
  }
].forEach(({ title, configruation }) => {
  describe(`when ${title}`, () => {
    let explainedSearchParamsUsedForSearching: NewExplainedSearchParams[]

    let sut: TimeSlotClass

    beforeEach(async () => {
      explainedSearchParamsUsedForSearching = []

      const TimeSlot = TestableMixin(
        TimeSlotMixin(
          ViewModelBase<
            TimeSlotsState,
            Omit<TimeSlotsPerPaxConfiguration, 'pricePerPerson' | 'type'>
          >,
        ),
        {
          baseExplainedSearchParams: TEST_EXPLAINED_SEARCH_PARAMS,
          onSearchWithModifiedParams: (params: NewExplainedSearchParams) =>
            explainedSearchParamsUsedForSearching.push(params),
        },
      )

      sut = new TimeSlot(
        new TimeSlotsStateImplementation(
          OptionalAsyncResult.None(),
          AsyncResult.NotAsked(),
          OptionalAsyncResult.None(),
          Optional.None(),
        ),
        configruation as unknown as TimeSlotsConfiguration,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _.noop as any,
        _.noop,
        _.noop,
        _.noop,
      )
    })

    it('returns no timeslot', () => {
      expect(sut.timeSlot).toEqual(Optional.None())
    })

    it('return no dateTimeSelection', () => {
      expect(sut.dateTimeSelection).toEqual(Optional.None())
    })

    it('returns no timeSlots', () => {
      expect(sut.timeSlots).toEqual([])
    })

    it('returns no timeSlotOptions', () => {
      expect(sut.timeSlotOptions).toEqual({})
    })

    describe('initialize', () => {
      beforeEach(async () => {
        sut.initialize()

        await delay()
      })

      it('does not select any timeSlot', () => {
        sut.timeSlot.match({
          Some: () => {
            fail('Expected timeSlot to be None')
          },
          None: () => {
            expect(true).toBe(true)
          },
        })
      })

      it('sets search result to error', () => {
        sut.searchResult.match({
          Done: (doneResult) => {
            doneResult.match({
              Ok: () => fail('Expected search result to be an error'),
              Error: () => expect(true).toBe(true),
            })
          },
          NotAsked: () => fail('Expected search result to be done'),
          Loading: () => fail('Expected search result to be done'),
        })
      })

      it('returns error for hasMultipleBookableOptions', () => {
        sut.hasMultipleBookableOptions.match({
          Done: doneResult => doneResult.match({
            Ok: () => fail('Expected hasMultipleBookableOptions to be an error'),
            Error: () => expect(true).toBe(true),
          }),
          Loading: () => fail('Expected hasMultipleBookableOptions to be not asked'),
          NotAsked: () => fail('Expected hasMultipleBookableOptions to be not asked'),
        })
      })

      it('returns error for `total`', () => {
        sut.total.match({
          Done: doneResult => doneResult.match({
            Ok: () => fail('Expected hasMultipleBookableOptions to be an error'),
            Error: () => expect(true).toBe(true),
          }),
          Loading: () => fail('Expected hasMultipleBookableOptions to be not asked'),
          NotAsked: () => fail('Expected hasMultipleBookableOptions to be not asked'),
        })
      })
    })
  })
})

class TimeSlotsStateImplementation extends TestStateImplementation {
  constructor(
    selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.None(),
    searchResult: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    selectedSupplements: OptionalAsyncResult<
      UnitSelectedSupplementsBySupplementId[]
    > = OptionalAsyncResult.None(),
    private _timeSlot: Optional<DomainTimeSlot> = Optional.None(),
    private _date: DateValue = dateValue('2021-01-01'),
  ) {
    super(selectedRate, searchResult, selectedSupplements)
  }

  public get timeSlot(): Optional<DomainTimeSlot> {
    return this._timeSlot
  }
  public submitTimeSlotChanges(
    apply: (current: Optional<DomainTimeSlot>) => Optional<DomainTimeSlot>,
  ): void {
    this._timeSlot = apply(this._timeSlot)
  }

  public get date(): DateValue {
    return this._date
  }
  public submitDateChanges(apply: (current: DateValue) => DateValue): void {
    this._date = apply(this._date)
  }
}
