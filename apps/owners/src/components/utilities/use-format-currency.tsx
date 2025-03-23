import { useMemo } from 'react'

export function useFormatCurrency() {
  return useMemo(
    () => ({
      formatCurrency(value: number) {
        return new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'EUR',
        }).format(value)
      },
    }),
    [],
  )
}
