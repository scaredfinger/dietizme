import { Guests } from '@otiuming/domain-data-types'
import { UnitSelection } from '@otiuming/domain-shopping-cart'

import { Optional } from '../../tools'

import { ViewModelBase, ViewModelStateBase } from './bases'
import { WithUnitSelection } from './with-unit-selection'

export interface PerPaxConfiguration { }
export interface PerPaxState extends ViewModelStateBase {
  readonly guests: Guests;
  submitGuestsChanges(apply: (current: Guests) => Guests): void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PerPaxConstructor = new (...args: any[]) => ViewModelBase<PerPaxState, PerPaxConfiguration>

export function PerPaxMixin<T extends PerPaxConstructor>(Base: T) {
  return class extends Base implements WithUnitSelection {
    get guests(): Guests {
      return this.state.guests
    }
    setGuests(guests: Guests): void {
      this.state.submitGuestsChanges(() => guests)
      this.searchWithModifiedParamsAndProcessResults((current) => {
        return {
          ...current,
          unitSelection: {
            type: 'per-pax',
            units: [
              {
                guests
              }
            ]
          }
        }
      })
    }
    get handleGuestsChange() {
      return (guests: Guests) => this.setGuests(guests)
    }

    get unitSelection(): Optional<UnitSelection> {
      return Optional.Some({
        type: 'per-pax',
        units: [
          {
            guests: this.state.guests
          }
        ]
      })
    }
  }
}

export type PerPax = InstanceType<ReturnType<typeof PerPaxMixin>>;