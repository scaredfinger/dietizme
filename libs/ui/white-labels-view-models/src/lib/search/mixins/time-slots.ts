import { ALL_EXACT_HOURS, ALL_HOURS, DateValue, ExactHour } from '@otiuming/domain-data-types'
import { TimeSlot, TimeSlotsPerPaxConfiguration } from '@otiuming/domain-rates'
import { DateTimeSelection } from '@otiuming/domain-shopping-cart'

import { ViewModelBase, ViewModelStateBase } from './bases'
import { WithDateTimeSelection } from './with-date-time-selection'
import { AsyncResult, Optional } from '../../tools'

export interface TimeSlotsState extends ViewModelStateBase {
  readonly timeSlot: Optional<TimeSlot>
  submitTimeSlotChanges(apply: (current: Optional<TimeSlot>) => Optional<TimeSlot>): void

  readonly date: DateValue
  submitDateChanges(apply: (current: DateValue) => DateValue): void
}

export type TimeSlotsConfiguration = Omit<TimeSlotsPerPaxConfiguration, 'pricePerPerson' | 'type'>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TimeSlotConstructor = new (...args: any[]) => ViewModelBase<TimeSlotsState, TimeSlotsConfiguration>

export function TimeSlotMixin<T extends TimeSlotConstructor>(Base: T) {

  return class extends Base implements WithDateTimeSelection {
    _timeSlots: TimeSlot[]
    _timeSlotsOptions: Record<ExactHour, ExactHour>
    _timeSlotsOptionsByStartHour: Record<ExactHour, TimeSlot>

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args)

      this._timeSlots = this.configuration?.startingHours
        ?.map(startingHour => {
          const startingHourIndex = ALL_HOURS.indexOf(startingHour)
          const start = ALL_EXACT_HOURS[startingHourIndex]
          const end = ALL_EXACT_HOURS[startingHourIndex + this.configuration.durationInHours]

          return { start, end }
        }) ?? []

      this._timeSlotsOptions = this._timeSlots.reduce((acc, timeSlot) => {
        acc[timeSlot.start] = `${timeSlot.start}`
        return acc
      }, {} as Record<ExactHour, ExactHour>)

      this._timeSlotsOptionsByStartHour = this._timeSlots.reduce((acc, timeSlot) => {
        acc[timeSlot.start] = timeSlot
        return acc
      }, {} as Record<ExactHour, TimeSlot>)
    }

    get timeSlot(): Optional<TimeSlot> {
      return this.state.timeSlot
    }
    setTimeSlot(timeSlot: TimeSlot): void {
      this.state.submitTimeSlotChanges(() => Optional.Some(timeSlot))
      this.searchWithModifiedParamsAndProcessResults(current => ({
        ...current,
        dateTimeSelection: {
          ...current.dateTimeSelection,
          timeSlot,
        }
      }))
    }
    get handleTimeSlotChange() {
      return (timeSlot: TimeSlot) => this.setTimeSlot(timeSlot)
    }

    get date(): DateValue {
      return this.state.date
    }
    setDate(date: DateValue): void {
      this.state.submitDateChanges(() => date)
      this.searchWithModifiedParamsAndProcessResults(current => ({
        ...current,
        dateTimeSelection: {
          ...current.dateTimeSelection,
          date,
        }
      }))
    }
    get handleDateChange() {
      return (date: DateValue) => this.setDate(date)
    }

    get dateTimeSelection(): Optional<DateTimeSelection> {
      return this.timeSlot.match({
        Some: timeSlot => Optional.Some({
          type: 'time-slot-selection',
          date: this.date,
          timeSlot: timeSlot,
        }),
        None: () => {
          const firstTimeSlot = this.timeSlots[0]
          if (firstTimeSlot) {
            return Optional.Some({
              type: 'time-slot-selection',
              date: this.date,
              timeSlot: firstTimeSlot,
            })
          }

          return  Optional.None<DateTimeSelection>()
        },
      })
    }

    get timeSlots(): TimeSlot[] {
      return this._timeSlots
    }

    get timeSlotOptions(): Record<ExactHour, ExactHour> {
      return this._timeSlotsOptions
    }
    setTimeSlotByStart(start: ExactHour): void {
      const timeSlot = this._timeSlotsOptionsByStartHour[start]
      if (timeSlot) {
        this.setTimeSlot(timeSlot)
      }
    }
    get handleTimeSlotByStartChange() {
      return (start: ExactHour) => this.setTimeSlotByStart(start)
    }
    override initialize(): void {
      const firstTimeSlot = this.timeSlots[0]
      if (firstTimeSlot) {
        this.setTimeSlot(firstTimeSlot)
      } else {
        this.state.submitSearchResultChanges(() => AsyncResult.Error('No time slots available'))
        this.state.submitSelectedRateChanges(() => AsyncResult.Error('No time slots available'))
      }
    }
  }
}

export type TimeSlotClass = InstanceType<ReturnType<typeof TimeSlotMixin>>
