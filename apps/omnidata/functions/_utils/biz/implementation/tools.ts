export function zeroLeftPadd(value: number, padding = 3) {
  const mask = '0'.repeat(padding + 1)
  const stringedValue = value.toString()
  const sanitizedPadding = Math.max(stringedValue.length, padding)
  const padded = mask + value
  return padded.slice(-1 * sanitizedPadding)
}

interface BuildAllotmentCalendarInputEntry {
  from: unknown
  to: unknown
  value: number
}

interface AllotmentCalendarInputEntry {
  from: unknown
  to: unknown
  value: number
  product_id: string
  id: string
}

export function buildAllotmentCalendar(
  product_id: string,
  input: BuildAllotmentCalendarInputEntry[]): AllotmentCalendarInputEntry[] {
  return input.map((r, i) => ({
    from: r.from,
    to: r.to,
    value: r.value,
    product_id,
    id: `${product_id}-${zeroLeftPadd(i, 3)}`
  }))
}