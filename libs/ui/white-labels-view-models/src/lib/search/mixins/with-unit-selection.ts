import { UnitSelection } from '@otiuming/domain-shopping-cart'

import { Optional } from '../../tools'

export interface WithUnitSelection {
  readonly unitSelection: Optional<UnitSelection>;
}
