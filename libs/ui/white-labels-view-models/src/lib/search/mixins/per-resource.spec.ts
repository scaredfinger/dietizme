import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'
import * as _ from 'lodash-es'

import { Rate, RateOnlyResponse } from '@otiuming/domain-search'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import { OptionalAsyncResult, AsyncResult, delay } from '../../tools'
import { UnitSelectedSupplementsBySupplementId } from '../types'

import { ViewModelBase } from './bases'
import { PerResourceMixin, PerResourceState, PerResourceConfiguration, type PerResource } from './per-resource'

import { TestStateImplementation, TestableMixin, PER_RESOURCE_SELECTION, DAILY_SELECTION } from './test-utils'

const MAX_RESOURCES = 12

const TEST_EXPLAINED_SEARCH_PARAMS = {
  dateTimeSelection: DAILY_SELECTION,
  unitSelection: PER_RESOURCE_SELECTION,
}

describe('PerResource', () => {
  let explainedSearchParamsUsedForSearching: NewExplainedSearchParams[]
  
  let sut: PerResource

  beforeEach(() => {
    explainedSearchParamsUsedForSearching = []

    const PerResource = TestableMixin(PerResourceMixin(ViewModelBase<PerResourceState, PerResourceConfiguration>), {
      baseExplainedSearchParams: TEST_EXPLAINED_SEARCH_PARAMS,
      onSearchWithModifiedParams: (params: NewExplainedSearchParams) => explainedSearchParamsUsedForSearching.push(params)
    })

    sut = new PerResource(
      new PerResourceStateImplementation(),
      {
        maxResources: MAX_RESOURCES
      } as PerResourceConfiguration,
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
          Some: (value) => expect(value).toEqual(PER_RESOURCE_SELECTION),
          None: () => expect(false).toBeTruthy(),
        })
      })
    })

    describe('quantity', () => {
      it('returns the value', () => {
        expect(sut.quantity).toEqual(1)
      })

      it('can be changed', async () => {
        sut.setQuantity(10)
        await delay()

        expect(sut.quantity).toEqual(10)
      })

      it('triggers a search with the new quantity', async () => {
        sut.setQuantity(10)
        await delay()

        expect(explainedSearchParamsUsedForSearching.pop()).toEqual({
          ...TEST_EXPLAINED_SEARCH_PARAMS,
          unitSelection: {
            ...PER_RESOURCE_SELECTION,
            quantity: 10
          }
        })
      })
    })

    describe('maxResources', () => {
      it('returns the value', () => {
        expect(sut.maxResources).toEqual(MAX_RESOURCES)
      })
    })
  })

  describe('handlers', () => {
    describe('handleSetQuantity', () => {
      it('changes the value', async () => {
        sut.handleQuantityChange(10)
        await delay()
        
        expect(sut.quantity).toEqual(10)
      })
    })
  })
})

class PerResourceStateImplementation extends TestStateImplementation {
  constructor(
    selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.None(),
    searchResult: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    selectedSupplements: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]> = OptionalAsyncResult.None(),
    private _quantity: number = 1
  ) {
    super(selectedRate, searchResult, selectedSupplements)
  }
  get quantity(): number {
    return this._quantity
  }
  submitQuantityChanges(apply: (current: number) => number): void {
    setTimeout(() => this._quantity = apply(this._quantity))
  }
}