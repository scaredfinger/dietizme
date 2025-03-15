import { Get_Facility_PageQuery, Get_Product_PageQuery } from "@/data-access";

export type Facility_Page_Facility = Get_Facility_PageQuery['facilities'][0]
export type Facility_Page_Organization = Get_Facility_PageQuery['matching_organizations'][0]
export type Facility_Page_Venue = Get_Facility_PageQuery['matching_organizations'][0]['venues'][0]
export type Facility_Page_Organization_Facilities = Get_Facility_PageQuery['matching_organizations'][0]['venues'][0]['facilities']

export interface Props {
  facility: Facility_Page_Facility
  organization: Facility_Page_Organization
  venue: Facility_Page_Venue
  facilities: Facility_Page_Organization_Facilities
}