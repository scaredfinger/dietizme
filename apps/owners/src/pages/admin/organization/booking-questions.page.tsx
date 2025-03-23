import { useTranslation } from 'react-i18next'

import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import {
  BookingQuestionEditor,
  Form,
  FormProps,
  JSONSchema,
} from '@/components/forms'
import { sanitizeInput } from '@otiuming/utils-common'
import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
} from '@otiuming/domain-omnidata-types'

import {
  Get_Booking_QuestionsQuery,
  useGet_Booking_QuestionsQuery,
  useSave_Booking_QuestionsMutation,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'

type BookingQuestion = Get_Booking_QuestionsQuery['organization_by_pk']['booking_questions'][0]

const FormWithLoader = withLoader<FormProps<BookingQuestion[]>>(Form)

export default function BookingQuestions() {
  const organization_id = useCurrentOrganizationId()

  const variables = {
    organization_id,
  }

  const { data, loading, refetch } = useGet_Booking_QuestionsQuery({
    variables,
  })

  const [saveBookingQuestions] = useSave_Booking_QuestionsMutation()

  function onSubmit(source: BookingQuestion[]) {
    const questions = sanitizeInput(source).map((question) => ({
      id: question.id,
      type: question.type,
      scope: question.scope,
      text: question.text ?? {},
      value: {
        ...question,
        id: undefined,
        type: undefined,
        scope: undefined,
        text: undefined,
      },
    }))

    saveBookingQuestions({
      variables: {
        arg: {
          organization_id,
          questions,
        },
      },
    }).then(() => refetch(variables))
  }

  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'array',
    items: {
      type: 'object',
      editor: BookingQuestionEditor,
      properties: {
        scope: {
          type: 'string',
          default: Booking_Question_Scope_Enum.PerBooking,
        },
        type: {
          type: 'string',
          default: Booking_Question_Type_Enum.FreeText,
        },
        text: {
          type: 'object',
          default: {},
        },
      },
    },
  }

  const value = data?.organization_by_pk?.booking_questions.map((q) => {
    return {
      ...q,
      ...q.value,
      value: undefined,
    }
  })

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/booking-questions',
      breadcrumbName: t('pages.booking-questions.title'),
    },
  ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.booking-questions.title')}
      />
      <FormWithLoader
        value={value}
        loading={loading}
        t={t}
        schema={schema}
        onSubmit={onSubmit}
      />
    </>
  )
}
