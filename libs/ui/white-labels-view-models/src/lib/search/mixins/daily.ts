import { DateRange, DateValue } from '@otiuming/domain-data-types'
import { DailySelection, DateTimeSelection, NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import { ViewModelBase, ViewModelStateBase } from './bases'
import { WithDateTimeSelection } from './with-date-time-selection'
import { Optional } from '../../tools';

export interface DailyConfiguration { }
export interface DailyState extends ViewModelStateBase {
  readonly from: DateValue;
  submitFromChanges(apply: (current: DateValue) => DateValue): void

  readonly to: DateValue;
  submitToChanges(apply: (current: DateValue) => DateValue): void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DailyContructor = new (...args: any[]) => ViewModelBase<DailyState, DailyConfiguration>;

export function DailyMixin<T extends DailyContructor>(Base: T) {
  return class extends Base implements WithDateTimeSelection {
    get from() {
      return this.state.from;
    }
    setFrom(newValue: DateValue) {
      this.state.submitFromChanges(() => newValue);
      this.searchWithDailyParamsModified(current => ({
        ...current,
        dateRange: {
          ...current.dateRange,
          from: newValue,
        }
      }))
    }
    searchWithDailyParamsModified(modifyDailySelection: (current: DailySelection) => DailySelection) {
      this.searchWithModifiedParamsAndProcessResults(current => ({
        ...current,
        dateTimeSelection: modifyDailySelection(current.dateTimeSelection as DailySelection)
      } as unknown as NewExplainedSearchParams))
    }
    get handleFromChange() {
      return (newValue: DateValue) => this.setFrom(newValue)
    }

    get to() {
      return this.state.to;
    }
    setTo(newValue: DateValue) {
      this.state.submitToChanges(() => newValue);
      this.searchWithDailyParamsModified(current => ({
        ...current,
        dateRange: {
          ...current.dateRange,
          to: newValue,
        }
      }))
    }
    get handleToChange() {
      return (newValue: DateValue) => this.setTo(newValue)
    }

    get dateRange() {
      return {
        from: this.state.from,
        to: this.state.to,
      }
    }
    setDateRange(newValue: DateRange) {
      this.state.submitFromChanges(() => newValue.from);
      this.state.submitToChanges(() => newValue.to);
      this.searchWithDailyParamsModified(current => ({
        ...current,
        dateRange: newValue,
      }))
    }
    get handleDateRangeChange() {
      return (newValue: DateRange) => this.setDateRange(newValue)
    }
    
    get dateTimeSelection(): Optional<DateTimeSelection> {
      return Optional.Some({
        type: 'daily-selection',
        dateRange: {
          from: this.state.from,
          to: this.state.to,
        }
      })
    }
  }
}

export type Daily = InstanceType<ReturnType<typeof DailyMixin>>

