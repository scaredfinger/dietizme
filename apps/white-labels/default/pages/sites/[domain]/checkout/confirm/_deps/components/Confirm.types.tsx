import { Booking_Questions_Answers_By_Scope } from '@/data-access'
import { Contact } from '@otiuming/domain-search'

export interface ConfirmForm {
  contact: Contact
  answers: Booking_Questions_Answers_By_Scope
}