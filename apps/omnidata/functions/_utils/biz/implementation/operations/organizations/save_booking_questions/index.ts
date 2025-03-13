import _ from 'lodash-es'
import { randomUUID } from 'crypto'

import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Organization_Booking_Question_Insert_Input,
  Organization_Booking_Question_Save_Input,
  Organization_Booking_Questions_Save_Input,
  Preload_Organization_Booking_Questions_SaveQuery,
  Upsert_Booking_QuestionsMutationVariables
} from '../../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

const TYPE_MAPING = {
  [Booking_Question_Type_Enum.FreeText.toString().toLowerCase()]: Booking_Question_Type_Enum.FreeText,
  [Booking_Question_Type_Enum.Numeric.toString().toLowerCase()]: Booking_Question_Type_Enum.Numeric,
  [Booking_Question_Type_Enum.Select.toString().toLowerCase()]: Booking_Question_Type_Enum.Select,
}

const SCOPE_MAPING = {
  [Booking_Question_Scope_Enum.PerBooking.toString().toLowerCase()]: Booking_Question_Scope_Enum.PerBooking,
  [Booking_Question_Scope_Enum.PerPax.toString().toLowerCase()]: Booking_Question_Scope_Enum.PerPax,
  [Booking_Question_Scope_Enum.PerProduct.toString().toLowerCase()]: Booking_Question_Scope_Enum.PerProduct,
}

export function buildOrganizationQuestionsSave(
  arg: OperationRequest<Organization_Booking_Questions_Save_Input>,
  context: Preload_Organization_Booking_Questions_SaveQuery): Upsert_Booking_QuestionsMutationVariables {

  const context_booking_questions = context.organization_by_pk.booking_questions
  const organization_id = arg.body.organization_id

  const bookingQuestionsExistingAndNewOrModified = context_booking_questions.map(q => ({
    existing: q,
    newOrModified: arg.body.questions.find(qq => qq.id === q.id)
  }))

  const booking_questions_to_be_deleted = bookingQuestionsExistingAndNewOrModified
    .filter(q => !q.newOrModified)
    .map(({ existing }) => existing.id)

  const texts_to_be_deleted = bookingQuestionsExistingAndNewOrModified.map(({ existing }) => existing.text.id)

  const saveInputQuestions = arg.body.questions

  return {
    booking_questions_to_be_deleted,
    texts_to_be_deleted,
    booking_questions: saveInputQuestions.map((question, position) => mapToBookingQuestionInsertInput(question, organization_id, position)),
  }
}

function mapToBookingQuestionInsertInput(
  question: Organization_Booking_Question_Save_Input,
  organization_id: any,
  position: number): Organization_Booking_Question_Insert_Input {

  const value = question.type === Booking_Question_Type_Enum.Select
    ? {
      options: question.value.options.map(o => ({
        ...o,
        value: o.value ?? randomUUID(),
      }))
    }
    : question.value

  return {
    organization_id: organization_id,
    id: question.id,
    type: mapWithDefault(TYPE_MAPING, question.type),
    scope: mapWithDefault(SCOPE_MAPING, question.scope),
    position,
    value,
    text: {
      data: {
        ...question.text
      }
    },
  }
}

function mapWithDefault<T extends { [key: string]: E }, E>(obj: T, key: unknown): E {
  return obj[key.toString().toLowerCase()] ?? _.values(obj)[0]
}

