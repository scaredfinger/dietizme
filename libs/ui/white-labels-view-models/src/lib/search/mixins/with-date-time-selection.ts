import { DateTimeSelection } from '@otiuming/domain-shopping-cart'

import { Optional } from '../../tools'

export interface WithDateTimeSelection {
  readonly dateTimeSelection: Optional<DateTimeSelection>
}