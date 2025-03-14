import { DateValue, ExactHour, Guests } from '@otiuming/domain-data-types'
import { TimeSlot } from '@otiuming/domain-rates'

import { ViewModelBase } from '../mixins/bases'
import { PerPaxMixin, PerPaxState, PerPaxConfiguration } from '../mixins/per-pax'
import {
  TimeSlotMixin,
  TimeSlotsConfiguration,
  TimeSlotsState,
} from '../mixins/time-slots'
import { FinishMixin } from '../mixins/finishing'
import {
  NavigateToContactUsFunction,
  OpenChooseOptionsFunction,
  ReserveFunction,
  SearchFunction,
} from '../types'

export type TimeSlotsPerPaxViewModelConfiguration = TimeSlotsConfiguration &
  PerPaxConfiguration

export type TimeSlotsPerPaxState = TimeSlotsState & PerPaxState

const TimeSlotsPerInner = FinishMixin(
  PerPaxMixin(
    TimeSlotMixin(
      ViewModelBase<
        TimeSlotsPerPaxState,
        TimeSlotsPerPaxViewModelConfiguration
      >,
    ),
  ),
)

type TimeSlotsPerPaxInner = InstanceType<
  typeof TimeSlotsPerInner
>

export class TimeSlotsPerPaxViewModel {
  private inner: TimeSlotsPerPaxInner

  constructor(
    state: TimeSlotsPerPaxState,
    configuration: TimeSlotsPerPaxViewModelConfiguration,
    search: SearchFunction,
    openChooseOptions: OpenChooseOptionsFunction,
    reserve: ReserveFunction,
    navigteToContactUs: NavigateToContactUsFunction,
  ) {
    this.inner = new TimeSlotsPerInner(
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

  get date() {
    return this.inner.date
  }
  setDate(value: DateValue) {
    this.inner.setDate(value)
  }
  get handleDateChange() {
    return this.inner.handleDateChange
  }

  get timeSlot() {
    return this.inner.timeSlot
  }
  setTimeSlot(value: TimeSlot) {
    this.inner.setTimeSlot(value)
  }
  get handleTimeSlotChange() {
    return this.inner.handleTimeSlotChange
  }

  get timeSlots() {
    return this.inner.timeSlots
  }
  get timeSlotOptions() {
    return this.inner.timeSlotOptions
  }
  setTimeSlotByStart(start: ExactHour) {
    this.inner.setTimeSlotByStart(start)
  }
  get handleTimeSlotByStartChange() {
    return this.inner.handleTimeSlotByStartChange
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
