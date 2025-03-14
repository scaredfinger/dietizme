import { ViewModelBase } from '../mixins/bases'
import { PerPaxMixin, PerPaxState, PerPaxConfiguration } from '../mixins/per-pax'
import { DailyMixin, DailyState, DailyConfiguration } from '../mixins/daily'
import { FinishMixin } from '../mixins/finishing'
import {
  NavigateToContactUsFunction,
  OpenChooseOptionsFunction,
  ReserveFunction,
  SearchFunction,
} from '../types'
import { DateRange, DateValue, Guests } from '@otiuming/domain-data-types'

export type DailyPerPaxViewModelConfiguration = DailyConfiguration &
  PerPaxConfiguration

export type DailyPerPaxState = DailyState & PerPaxState

const DailyPerPaxInner = FinishMixin(
  PerPaxMixin(
    DailyMixin(
      ViewModelBase<DailyPerPaxState, DailyPerPaxViewModelConfiguration>,
    ),
  ),
)

type DailyPerPaxInner = InstanceType<typeof DailyPerPaxInner>

export class DailyPerPaxViewModel {
  private inner: DailyPerPaxInner

  constructor(
    state: DailyPerPaxState,
    configuration: DailyPerPaxViewModelConfiguration,
    search: SearchFunction,
    openChooseOptions: OpenChooseOptionsFunction,
    reserve: ReserveFunction,
    navigteToContactUs: NavigateToContactUsFunction,
  ) {
    this.inner = new DailyPerPaxInner(
      state,
      configuration,
      search,
      openChooseOptions,
      reserve,
      navigteToContactUs,
    )
  }

  get guests() {
    return this.inner.guests
  }
  setGuests(value: Guests) {
    this.inner.setGuests(value)
  }
  get handleGuestsChange() {
    return this.inner.handleGuestsChange
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
