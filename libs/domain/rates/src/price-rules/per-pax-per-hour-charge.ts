export interface PerPaxPerHourCharge {
  type: 'per-pax-per-hour-charge'
  includedPax: number
  fromAge?: number
  toAge?: number
  percentangeOverBaseForNonIncluded: number
}
