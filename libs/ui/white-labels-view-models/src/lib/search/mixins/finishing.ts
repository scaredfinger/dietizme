import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'
import { SearchParams } from '@otiuming/domain-search'

import { Optional } from '../../tools/boxed'

import { ViewModelBase, ViewModelStateBase } from './bases'
import { WithUnitSelection } from './with-unit-selection'
import { WithDateTimeSelection } from './with-date-time-selection'
import { buildDate } from '@otiuming/domain-data-types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FinishingConstructor = new (...args: any[]) => FinishingConstraints

type FinishingConstraints = WithDateTimeSelection & WithUnitSelection & ViewModelBase<ViewModelStateBase, object>

export function FinishMixin<T extends FinishingConstructor>(Base: T) {
  return class extends Base {
    override get explainedSearchParams() {
      return Optional.All(this.dateTimeSelection, this.unitSelection)
        .map(([dateTimeSelection, unitSelection]) => ({
          dateTimeSelection,
          unitSelection,
        }))
    }

    override toSearchParams(explainedSearchParams: NewExplainedSearchParams): SearchParams {
      const dateRange = explainedSearchParams.dateTimeSelection.type === 'daily-selection'
        ? explainedSearchParams.dateTimeSelection.dateRange
        : explainedSearchParams.dateTimeSelection.type === 'time-slot-selection'
          ? {
            from: buildDate(explainedSearchParams.dateTimeSelection.date, explainedSearchParams.dateTimeSelection.timeSlot.start),
            to: buildDate(explainedSearchParams.dateTimeSelection.date, explainedSearchParams.dateTimeSelection.timeSlot.end),
          }
          : undefined

      const units = explainedSearchParams.unitSelection.type === 'per-pax'
        ? explainedSearchParams.unitSelection.units.map(unit => ({
          people: [
            ...Array(unit.guests.adults).fill({}),
            ...Array(unit.guests.children).fill({ age: 5 }),
            ...Array(unit.guests.infants).fill({ age: 0 }),
          ],
        }))
        : explainedSearchParams.unitSelection.type === 'per-resource'
          ? Array(explainedSearchParams.unitSelection.quantity).fill({})
          : undefined

      if (dateRange === undefined || units === undefined) {
        throw new Error('Invalid explainedSearchParams')
      }

      return {
        dateRange,
        units
      }
    }
  }
}
