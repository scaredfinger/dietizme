import { 
  Organization, 
  Organization_Booking_Question 
} from '@otiuming/domain-omnidata-types'

export interface EventBase<Type, Payload> {
  id: string
  booking_id: string
  timestamp: string
  version: number
  type: Type
  payload: Payload
  user_id?: string
}

export type ReducedOrganizationBookingQuestion = Omit<Organization_Booking_Question, 'position' | 'organization_id' | 'text_id'>

export type MiniOrganization = Pick<Organization, 'id' | 'email' | 'name' | 'phone_number'> & { booking_questions: ReducedOrganizationBookingQuestion[] }
