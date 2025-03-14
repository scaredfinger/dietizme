import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'
import * as _ from 'lodash-es'

import { DateValue, dateValue } from '@otiuming/domain-data-types'
import { Rate, RateOnlyResponse } from '@otiuming/domain-search'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import { OptionalAsyncResult, AsyncResult, delay } from '../../tools'
import { UnitSelectedSupplementsBySupplementId } from '../types'

import { ViewModelBase } from './bases'
import { DailyMixin, DailyState, DailyConfiguration, type Daily } from './daily'

import { TestStateImplementation, TestableMixin, DAILY_SELECTION, PER_PAX_SELECTION } from './test-utils'

const TEST_EXPLAINED_SEARCH_PARAMS = {
  dateTimeSelection: DAILY_SELECTION,
  unitSelection: PER_PAX_SELECTION,
}

describe('PerPax', () => {
  let explainedSearchParamsUsedForSearching: NewExplainedSearchParams[]
  let sut: Daily

  beforeEach(() => {
    explainedSearchParamsUsedForSearching = []

    const Daily = TestableMixin(
      DailyMixin(
        ViewModelBase<DailyState, DailyConfiguration>
      ), {
        baseExplainedSearchParams: TEST_EXPLAINED_SEARCH_PARAMS,
        onSearchWithModifiedParams: (params: NewExplainedSearchParams) => explainedSearchParamsUsedForSearching.push(params)
      }
    )

    sut = new Daily(
      new DailyStateImplementation(),
      {} as DailyConfiguration,
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

  describe('properties', () => {
    describe('dateTimeSelection', () => {
      it('returns the value', () => {
        sut.dateTimeSelection.match({
          Some: dateTimeSelection => {
            expect(dateTimeSelection).toEqual({
              type: 'daily-selection',
              dateRange: {
                from: dateValue('2021-01-01'),
                to: dateValue('2021-01-02'),
              }
            })
          },
          None: () => fail('Expected Some')
        })
      })
    })

    describe('from', () => {
      it('returns the value', () => {
        expect(sut.from).toEqual(dateValue('2021-01-01'))
      })

      it('can be changed', async () => {
        sut.setFrom(dateValue('2021-02-01'))
        await delay()

        expect(sut.from).toEqual(dateValue('2021-02-01'))
      })

      it('triggers a search with the new value', async () => {
        sut.setFrom(dateValue('2021-02-01'))
        await delay()

        expect(explainedSearchParamsUsedForSearching.pop()).toEqual({
          ...TEST_EXPLAINED_SEARCH_PARAMS,
          dateTimeSelection: {
            type: 'daily-selection',
            dateRange: {
              ...(DAILY_SELECTION.dateRange),
              from: dateValue('2021-02-01'),
            }
          }
        })
      })
    })

    describe('to', () => {
      it('returns the value', () => {
        expect(sut.to).toEqual(dateValue('2021-01-02'))
      })

      it('can be changed', async () => {
        sut.setTo(dateValue('2021-02-02'))
        await delay()

        expect(sut.to).toEqual(dateValue('2021-02-02'))
      })

      it('triggers a search with the new value', async () => {
        sut.setTo(dateValue('2021-02-02'))
        await delay()

        expect(explainedSearchParamsUsedForSearching.pop()).toEqual({
          ...TEST_EXPLAINED_SEARCH_PARAMS,
          dateTimeSelection: {
            type: 'daily-selection',
            dateRange: {
              ...(DAILY_SELECTION.dateRange),
              to: dateValue('2021-02-02'),
            }
          }
        })
      })
    })

    describe('dateRange', () => {
      it('returns the value', () => {
        expect(sut.dateRange).toEqual({
          from: dateValue('2021-01-01'),
          to: dateValue('2021-01-02'),
        })
      })

      it('can be changed', async () => {
        sut.setDateRange({
          from: dateValue('2021-02-01'),
          to: dateValue('2021-02-02'),
        })
        await delay()

        expect(sut.dateRange).toEqual({
          from: dateValue('2021-02-01'),
          to: dateValue('2021-02-02'),
        })
      })

      it('triggers a search with the new value', async () => {
        sut.setDateRange({
          from: dateValue('2021-02-01'),
          to: dateValue('2021-02-02'),
        })
        await delay()

        expect(explainedSearchParamsUsedForSearching.pop()).toEqual({
          ...TEST_EXPLAINED_SEARCH_PARAMS,
          dateTimeSelection: {
            type: 'daily-selection',
            dateRange: {
              from: dateValue('2021-02-01'),
              to: dateValue('2021-02-02'),
            }
          }
        })
      })
    })
  })

  describe('handlers', () => {
    describe('handleFromChanged', () => {
      it('changes the value', async () => {
        sut.handleFromChange(dateValue('2021-02-01'))
        await delay()

        expect(sut.from).toEqual(dateValue('2021-02-01'))
      })
    })

    describe('handleToChanged', () => {
      it('changes the value', async () => {
        sut.handleToChange(dateValue('2021-02-02'))
        await delay()

        expect(sut.to).toEqual(dateValue('2021-02-02'))
      })
    })

    describe('handleDateRangeChanged', () => {
      it('changes the value', async () => {
        sut.handleDateRangeChange({
          from: dateValue('2021-02-01'),
          to: dateValue('2021-02-02'),
        })
        await delay()

        expect(sut.dateRange).toEqual({
          from: dateValue('2021-02-01'),
          to: dateValue('2021-02-02'),
        })
      })
    })
  })
})

class DailyStateImplementation extends TestStateImplementation {
  constructor(
    selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.None(),
    searchResult: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    selectedSupplements: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]> = OptionalAsyncResult.None(),
    private _from: DateValue = dateValue('2021-01-01'),
    private _to: DateValue = dateValue('2021-01-02')
  ) {
    super(selectedRate, searchResult, selectedSupplements)
  }

  get from(): DateValue {
    return this._from
  }
  submitFromChanges(apply: (current: DateValue) => DateValue): void {
    setTimeout(() => this._from = apply(this._from))
  }

  get to(): DateValue {
    return this._to
  }
  submitToChanges(apply: (current: DateValue) => DateValue): void {
    setTimeout(() => this._to = apply(this._to))
  }
}
