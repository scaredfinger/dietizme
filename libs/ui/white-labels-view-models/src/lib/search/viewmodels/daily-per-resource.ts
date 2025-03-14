import { DateRange, DateValue } from '@otiuming/domain-data-types'
import { ViewModelBase } from '../mixins/bases'
import { DailyMixin, DailyState, DailyConfiguration } from '../mixins/daily'
import {
  PerResourceConfiguration,
  PerResourceMixin,
  PerResourceState,
} from '../mixins/per-resource'
import { FinishMixin } from '../mixins/finishing'
import {
  NavigateToContactUsFunction,
  OpenChooseOptionsFunction,
  ReserveFunction,
  SearchFunction,
} from '../types'

export type DailyPerResourceViewModelConfiguration = DailyConfiguration &
  PerResourceConfiguration

export type DailyPerResourceState = DailyState & PerResourceState

const DailyPerResourceInner = FinishMixin(
  PerResourceMixin(
    DailyMixin(
      ViewModelBase<
        DailyPerResourceState,
        DailyPerResourceViewModelConfiguration
      >,
    ),
  ),
)
type DailyPerResourceInner = InstanceType<
  typeof DailyPerResourceInner
>

export class DailyPerResourceViewModel {
  private inner: DailyPerResourceInner

  constructor(
    state: DailyPerResourceState,
    configuration: DailyPerResourceViewModelConfiguration,
    search: SearchFunction,
    openChooseOptions: OpenChooseOptionsFunction,
    reserve: ReserveFunction,
    navigteToContactUs: NavigateToContactUsFunction,
  ) {
    this.inner = new DailyPerResourceInner(
      state,
      configuration,
      search,
      openChooseOptions,
      reserve,
      navigteToContactUs,
    )
  }

  get from() {
    return this.inner.from
  }
  setFrom(value: DateValue) {
    this.inner.setFrom(value)
  }
  get handleFromChange() {
    return this.inner.handleFromChange
  }

  get to() {
    return this.inner.to
  }
  setTo(value: DateValue) {
    this.inner.setTo(value)
  }
  get handleToChange() {
    return this.inner.handleToChange
  }

  get dateRange() {
    return this.inner.dateRange
  }
  setDateRange(value: DateRange) {
    this.inner.setDateRange(value)
  }
  get handleDateRangeChange() {
    return this.inner.handleDateRangeChange
  }

  get quantity() {
    return this.inner.quantity
  }
  setQuantity(value: number) {
    this.inner.setQuantity(value)
  }
  get handleQuantityChange() {
    return this.inner.handleQuantityChange
  }

  get maxResources() {
    return this.inner.maxResources
  }

  get handleExecuteAction() {
    return this.inner.handleExecuteAction
  }

  initialize() {
    this.inner.initialize()
  }

  get hasMultipleBookableOptions() {
    return this.inner.hasMultipleBookableOptions
  }

  get total() {
    return this.inner.total
  }

  get searchResult() {
    return this.inner.searchResult
  }

  get selectedSupplements() {
    return this.inner.selectedSupplements
  }

  get handleSupplementSelectionSet() {
    return this.inner.handleSupplementSelectionSet
  }

  get handleExecuteReserve() {
    return this.inner.handleExecuteReserve
  }
}
