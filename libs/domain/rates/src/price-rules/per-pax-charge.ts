export interface PerPaxCharge {
  type: 'per-pax-charge'
  includedPax: number
  fixedAmount: number
  fromAge?: number
  toAge?: number
}
