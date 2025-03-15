import {
  Get_Home_PageQuery,
} from '@/data-access'

export interface Props {
  organization: Get_Home_PageQuery['matching_organizations'][0]
  domain: string
}
