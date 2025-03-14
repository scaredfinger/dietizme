import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'
import * as _ from 'lodash-es'

import { Guests } from '@otiuming/domain-data-types'
import { Rate, RateOnlyResponse } from '@otiuming/domain-search'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import { OptionalAsyncResult, AsyncResult, delay } from '../../tools'
import { UnitSelectedSupplementsBySupplementId } from '../types'

import { ViewModelBase } from './bases'
import { PerPaxMixin, PerPaxState, PerPaxConfiguration, type PerPax } from './per-pax'

import { TestStateImplementation, TestableMixin, PER_PAX_SELECTION, DAILY_SELECTION } from './test-utils'

const TEST_EXPLAINED_SEARCH_PARAMS = {
  dateTimeSelection: DAILY_SELECTION,
  unitSelection: PER_PAX_SELECTION,
}

describe('PerPax', () => {
  let explainedSearchParamsUsedForSearching: NewExplainedSearchParams[]

  let sut: PerPax

  beforeEach(() => {
    explainedSearchParamsUsedForSearching = []

    const PerPax = TestableMixin(PerPaxMixin(ViewModelBase<PerPaxState, PerPaxConfiguration>), {
      baseExplainedSearchParams: TEST_EXPLAINED_SEARCH_PARAMS,
      onSearchWithModifiedParams: (params: NewExplainedSearchParams) => explainedSearchParamsUsedForSearching.push(params)
    })

    sut = new PerPax(
      new PerPaxStateImplementation(),
      {} as PerPaxConfiguration,
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
    describe('unitSelection', () => {
      it('returns the value', () => {
        sut.unitSelection.match({
          Some: unitSelection => {
            expect(unitSelection).toEqual({
              type: 'per-pax',
              units: [
                {
                  guests: { adults: 1, children: 0, infants: 0 }
                }
              ]
            })
          },
          None: () => fail('Expected Some')
        })
      })
    })

    describe('guests', () => {
      it('returns the value', () => {
        expect(sut.guests).toEqual({ adults: 1, children: 0, infants: 0 })
      })

      it('can be changed', async () => {
        sut.setGuests({ adults: 2, children: 1, infants: 0 })
        await delay()

        expect(sut.guests).toEqual({ adults: 2, children: 1, infants: 0 })
      })

      it('triggers a search with the new value', async () => {
        sut.setGuests({ adults: 2, children: 1, infants: 0 })
        await delay()

        expect(explainedSearchParamsUsedForSearching.pop()).toEqual({
          ...TEST_EXPLAINED_SEARCH_PARAMS,
          unitSelection: {
            type: 'per-pax',
            units: [
              {
                guests: { adults: 2, children: 1, infants: 0 }
              }
            ]
          }
        })
      })
    })
  })

  describe('handlers', () => {
    describe('guests', () => {
      it('changes the value', async () => {
        sut.handleGuestsChange({ adults: 2, children: 1, infants: 0 })
        await delay()

        expect(sut.guests).toEqual({ adults: 2, children: 1, infants: 0 })
      })
    })
  })
})

class PerPaxStateImplementation extends TestStateImplementation {
  constructor(
    selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.None(),
    searchResult: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    selectedSupplements: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]> = OptionalAsyncResult.None(),
    private _guests: Guests = { adults: 1, children: 0, infants: 0 }
  ) {
    super(selectedRate, searchResult, selectedSupplements)
  }

  get guests(): Guests {
    return this._guests
  }
  submitGuestsChanges(apply: (current: Guests) => Guests) {
    setTimeout(() => this._guests = apply(this._guests), 0)
  }
}