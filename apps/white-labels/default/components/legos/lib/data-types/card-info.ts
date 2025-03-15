import { ReviewInfo } from './review-info'
import { BadgeWithIconInfo } from './badge-with-icon-info'
import { FeatureInfo } from './feature-info'

export interface CardInfo {
  galleryImgs: string[]
  title: string
  subtitle?: string
  titleBadge?: BadgeWithIconInfo
  href?: string
  like?: boolean
  saleOff?: string
  price?: string
  id: string
  features?: FeatureInfo[]
  badges?: BadgeWithIconInfo[]
  review?: ReviewInfo
  onClick?: () => void
}
