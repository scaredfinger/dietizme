import { UnitSelection } from '@otiuming/domain-shopping-cart'

import { Optional } from '../../tools'

import { ViewModelBase, ViewModelStateBase } from './bases'
import { WithUnitSelection } from './with-unit-selection'

export interface PerResourceConfiguration {
  maxResources: number;
}
export interface PerResourceState extends ViewModelStateBase {
  readonly quantity: number
  submitQuantityChanges(apply: (current: number) => number): void
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PerResourceConstructor = new (...args: any[]) => ViewModelBase<PerResourceState, PerResourceConfiguration>
export function PerResourceMixin<T extends PerResourceConstructor>(Base: T) {
  return class extends Base implements WithUnitSelection {
    get quantity(): number {
      return this.state.quantity
    }
    setQuantity(quantity: number): void {
      this.state.submitQuantityChanges(() => quantity)
      this.searchWithModifiedParamsAndProcessResults(current => ({
        ...current,
        unitSelection: {
          type: 'per-resource',
          quantity,
        }
      }))
    }
    get handleQuantityChange() {
      return (quantity: number) => this.setQuantity(quantity)
    }

    get unitSelection(): Optional<UnitSelection> {
      return Optional.Some({
        type: 'per-resource',
        quantity: this.state.quantity
      })
    }

    get maxResources(): number {
      return this.configuration.maxResources
    }
  }
}

export type PerResource = InstanceType<ReturnType<typeof PerResourceMixin>>