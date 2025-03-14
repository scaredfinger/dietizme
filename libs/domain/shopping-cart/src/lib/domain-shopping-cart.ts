import * as _ from 'lodash-es'

import { Contact } from '@otiuming/domain-search'

import { ShoppingCartItem } from './types'

export interface ShoppingCartState {
  readonly items: ShoppingCartItem[]
  submitChangeItems(
    apply: (current: ShoppingCartItem[]) => ShoppingCartItem[],
  ): void

  readonly contact: Contact
  submitChangeContact(apply: (current: Contact) => Contact): void
}

export class ShoppingCartViewModel {
  constructor(private readonly state: ShoppingCartState) { }

  get items(): ShoppingCartItem[] {
    return this.state.items
  }

  get contact(): Contact {
    return this.state.contact
  }

  get total(): number {
    return _.sum(this.items.map((item) => item.price))
  }

  fillContact(name: string, email: string) {
    this.state.submitChangeContact(() => ({ name, email }))
  }

  addItem(item: ShoppingCartItem) {
    this.state.submitChangeItems((current) => [...current, item])
  }

  replaceItemsWith(item: ShoppingCartItem) {
    this.state.submitChangeItems(() => [item])
  }

  clear() {
    this.state.submitChangeItems(() => [])
    this.state.submitChangeContact(() => ({ name: '', email: '' }))
  }
}

