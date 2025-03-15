import { Get_Facilities_PageQuery } from '@/data-access';

export type Facilities_Page_Facilities = Get_Facilities_PageQuery['matching_organizations'][0]['venues'][0]['facilities']
export type Facilities_Page_Organization = Get_Facilities_PageQuery['matching_organizations'][0]
export type Facilities_Page_Venue = Get_Facilities_PageQuery['matching_organizations'][0]['venues'][0]

export interface Props {
  facilities: Facilities_Page_Facilities
  organization: Facilities_Page_Organization
  venue: Facilities_Page_Venue
}
