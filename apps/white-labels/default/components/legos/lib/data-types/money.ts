export type CurrencySymbol = '$' | '€' | '£' | '¥'
export type Amount = number

export function formatMoney(
  amount: Amount,
  currencySymbol: CurrencySymbol = '$',
): string {
  switch (currencySymbol) {
    case '€':
      return `${amount}${currencySymbol}`
    case '£':
      return `${currencySymbol}${amount}`
    case '¥':
      return `${currencySymbol}${amount}`
    case '$':
      return `${currencySymbol}${amount}`
  }
}
