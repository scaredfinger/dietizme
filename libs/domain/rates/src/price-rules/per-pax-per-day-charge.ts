export interface PerPaxPerDayCharge {
  type: 'per-pax-per-day-charge'
  includedPax: number
  fixedAmount: number
  fromAge?: number
  toAge?: number
}

