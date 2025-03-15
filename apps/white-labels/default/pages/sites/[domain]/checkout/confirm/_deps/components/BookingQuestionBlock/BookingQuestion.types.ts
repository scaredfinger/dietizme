import {
  Organization_Booking_Question,
  Translated_Text,
} from '@otiuming/domain-omnidata-types'
import {
  ShoppingCartItem,
} from '@otiuming/domain-shopping-cart'

export type BookingQuestionQuestion = Pick<
  Organization_Booking_Question,
  'id' | 'scope' | 'type' | 'value'
> & {
  text: Omit<Translated_Text, 'id'>
}

export type BookingQuestionShoppingCartItem = Pick<
  ShoppingCartItem,
  'explainedSearchParams' | 'title'
>