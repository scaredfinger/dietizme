import { ViewModelBase } from '../mixins/bases'
import {
  PerResourceConfiguration,
  PerResourceMixin,
  PerResourceState,
} from '../mixins/per-resource'
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

export type TimeSlotsPerResourceViewModelConfiguration =
  TimeSlotsConfiguration & PerResourceConfiguration

export type TimeSlotsPerResourceState = TimeSlotsState & PerResourceState

const TimeSlotsPerResourceInner = FinishMixin(
  PerResourceMixin(
    TimeSlotMixin(
      ViewModelBase<
        TimeSlotsPerResourceState,
        TimeSlotsPerResourceViewModelConfiguration
      >,
    ),
  ),
)

type TimeSlotsPerResourceInner = InstanceType<
  typeof TimeSlotsPerResourceInner
>

export class TimeSlotsPerResourceViewModel {
  private inner: TimeSlotsPerResourceInner

  constructor(
    state: TimeSlotsPerResourceState,
    configuration: TimeSlotsPerResourceViewModelConfiguration,
    search: SearchFunction,
    openChooseOptions: OpenChooseOptionsFunction,
    reserve: ReserveFunction,
    navigteToContactUs: NavigateToContactUsFunction,
  ) {
    this.inner = new TimeSlotsPerResourceInner(
      state,
      configuration,
      search,
      openChooseOptions,
      reserve,
      navigteToContactUs,
    )
  }
}
