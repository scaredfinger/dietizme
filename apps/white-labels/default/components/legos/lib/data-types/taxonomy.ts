import { TwMainColor } from './tw-main-color'

export interface TaxonomyType {
  id: string | number
  name: string
  href: string
  count?: number
  thumbnail?: string
  desc?: string
  color?: TwMainColor | string
  taxonomy: 'category' | 'tag'
  listingType?: 'stay' | 'experiences' | 'car'
  onClick?: () => void
}
