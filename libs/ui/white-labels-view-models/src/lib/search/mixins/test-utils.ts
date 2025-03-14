import {
  DailySelection,
  NewExplainedSearchParams,
  PerPaxUnitSelection,
  PerResourceUnitSelection,
  TimeSlotSelection
} from '@otiuming/domain-shopping-cart'
import { Rate, RateOnlyResponse } from '@otiuming/domain-search'
import { dateValue } from '@otiuming/domain-data-types'

import { AsyncResult, OptionalAsyncResult } from '../../tools'
import { UnitSelectedSupplementsBySupplementId } from '../types'

import { ViewModelBase, ViewModelStateBase } from './bases'

export const DAILY_SELECTION: DailySelection = {
  type: 'daily-selection',
  dateRange: {
    from: dateValue('2021-01-01'),
    to: dateValue('2021-01-02'),
  }
}

export const TIMESLOT_SELECTION: TimeSlotSelection = {
  type: 'time-slot-selection',
  date: dateValue('2021-01-01'),
  timeSlot: {
    start: '10:00',
    end: '11:00',
  },
}

export const PER_PAX_SELECTION: PerPaxUnitSelection = {
  type: 'per-pax',
  units: [
    {
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      }
    }
  ],
}

export const PER_RESOURCE_SELECTION: PerResourceUnitSelection = {
  type: 'per-resource',
  quantity: 1,
}

type TestableContructor<
  State extends ViewModelStateBase, 
  Configuration extends object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
> = new (...args: any[]) => ViewModelBase<State, Configuration>;

export function TestableMixin<
  T extends TestableContructor<State, Configuration>,
  State extends ViewModelStateBase, 
  Configuration extends object
>(
  Base: T, 
  options: {
    baseExplainedSearchParams: NewExplainedSearchParams
    onSearchWithModifiedParams: (modifiedParams: NewExplainedSearchParams) => void
  }
) {
  return class extends Base {
    override searchWithModifiedParamsAndProcessResults(modifyParams: (current: NewExplainedSearchParams) => NewExplainedSearchParams) {
      const modifiedParams = modifyParams(options.baseExplainedSearchParams)
      options.onSearchWithModifiedParams(modifiedParams)
    }
  }
}

export class TestStateImplementation implements ViewModelStateBase {
  constructor(
    private _selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.None(),
    private _searchResult: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    private _selectedSupplements: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]> = OptionalAsyncResult.None(),
  ) {

  }

  get selectedSupplements(): OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]> {
    return this._selectedSupplements
  }
  submitSelectedSupplementsChanges(apply: (current: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>) => OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>): void {
    setTimeout(() => this._selectedSupplements = apply(this._selectedSupplements))
  }

  get selectedRate(): OptionalAsyncResult<Rate> {
    return this._selectedRate
  }
  submitSelectedRateChanges(
    apply: (current: OptionalAsyncResult<Rate>) => OptionalAsyncResult<Rate>,
  ): void {
    setTimeout(() => this._selectedRate = apply(this._selectedRate))
  }

  get searchResult(): AsyncResult<RateOnlyResponse> {
    return this._searchResult
  }
  submitSearchResultChanges(apply: (current: AsyncResult<RateOnlyResponse>) => AsyncResult<RateOnlyResponse>): void {
    setTimeout(() => this._searchResult = apply(this._searchResult))
  }
}
