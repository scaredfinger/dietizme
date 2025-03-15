import { useMemo } from 'react'

export function useFormatCurrency() {
  return useMemo(
    () => ({
      formatCurrency(value: number, {
        currency = 'EUR',
        locale = 'en',
        hideDecimals = false,
      }: {
        currency?: string
        locale?: string
        hideDecimals?: boolean
      } = {
        currency: 'EUR',
        locale: 'en',
        hideDecimals: false,
      }) {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency,
          maximumFractionDigits: hideDecimals ? 0 : 2,
        }).format(value)
      },
    }),
    [],
  )
}
