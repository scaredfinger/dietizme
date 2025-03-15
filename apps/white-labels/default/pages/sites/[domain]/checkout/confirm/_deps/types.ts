import { Get_Confirm_PageQuery } from "@/data-access";

export type Confirm_Page_Organization = Get_Confirm_PageQuery['matching_organizations'][0]
export type Confirm_Page_Booking_Question = Get_Confirm_PageQuery['matching_organizations'][0]['booking_questions'][0]

export interface Props {
  organization: Confirm_Page_Organization,
  bookingQuestions: Confirm_Page_Booking_Question[],
}
