import { useEffect, useMemo, useState } from 'react'

import {
  ShoppingCartItem,
  ShoppingCartViewModel,
  parseShoppingCartItems,
} from '@otiuming/domain-shopping-cart'
import { Contact } from '@otiuming/domain-search'

export function useShoppingCart() {
  const [items, setItems] = useState<ShoppingCartItem[]>([])
  const [contact, setContact] = useState<Contact>({ email: '', name: '' })

  useEffect(() => {
    const items = parseShoppingCartItems(
      localStorage.getItem('otiuming-shoppingcart-items') || '[]',
    )
    setItems(items)

    const contact = JSON.parse(
      localStorage.getItem('otiuming-shoppingcart-contact') || '{ }',
    )
    setContact(contact)
  }, [])

  function submitChangeItems(
    apply: (current: ShoppingCartItem[]) => ShoppingCartItem[],
  ) {
    setItems((prevState) => {
      const newItems = apply(prevState)
      localStorage.setItem(
        'otiuming-shoppingcart-items',
        JSON.stringify(newItems),
      )
      return newItems
    })
  }

  function submitChangeContact(apply: (current: Contact) => Contact) {
    setContact((prevState) => {
      const newContact = apply(prevState)
      localStorage.setItem(
        'otiuming-shoppingcart-contact',
        JSON.stringify(newContact),
      )
      return newContact
    })
  }

  const state = useMemo(
    () => ({
      get items() {
        return items
      },

      submitChangeItems,

      get contact() {
        return contact
      },
      submitChangeContact,
    }),
    [items, contact],
  )

  const viewModel = useMemo(() => {
    return new ShoppingCartViewModel(state)
  }, [state])

  return viewModel
}
