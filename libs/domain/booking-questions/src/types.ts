import {
  Booking_Question_Type_Enum,
  Multilanguage_Field_Input,
  Organization_Booking_Question
} from "@otiuming/domain-omnidata-types"

interface WithValue {
  value: unknown
}

type SelectQuestionOption = WithValue & Omit<Multilanguage_Field_Input, 'id'>

type BaseQuestion = Omit<Organization_Booking_Question, 'value' | '__typename'>

export interface SelectQuestionValue {
  options: SelectQuestionOption[]
}

export interface SelectQuestion {
  type: Booking_Question_Type_Enum.Select
  value: SelectQuestionValue
}

export interface FreeTextQuestionValue {
  multiline?: boolean
}

export interface FreeTextQuestion {
  type: Booking_Question_Type_Enum.FreeText
  value: FreeTextQuestionValue
}

export interface NumericQuestionValue {
  min?: number
  max?: number
  step?: number
}

export interface NumericQuestion {
  type: Booking_Question_Type_Enum.Numeric
  value: NumericQuestionValue
}

export type Question = BaseQuestion &
  (NumericQuestion | SelectQuestion | FreeTextQuestion)

export interface Answers {
  [questionId: string]: unknown
}

export interface AnswersByScope {
  booking: Answers
  products: {
    productAnswers: Answers
    adults: Answers[]
    children: Answers[]
  }[]
}