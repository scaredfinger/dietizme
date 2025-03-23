import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Booking_Question_Scope_Enum, Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'

import { Form, JSONSchema } from '@/components/forms'
import {
  BookingQuestionEditor,
} from '@/components/forms/lib/question-editor/editor'

export default function Playground() {
  const [value, setValue] = useState<any>([])

  const schema: JSONSchema = {
    type: 'array',
    items: {
      type: 'object',
      editor: BookingQuestionEditor,
      properties: {
        type: {
          type: 'string',
          default: Booking_Question_Type_Enum.FreeText,
        },
        scope: {
          type: 'string',
          default: Booking_Question_Scope_Enum.PerBooking,
        },
      },
    },
  }

  const { t } = useTranslation()

  return (
    <div className="mx-6 mt-2 mb-10 col-span-3 bg-white dark:bg-white/10 text-theme-gray dark:text-white/60 text-[15px] rounded-10">
      <div className="p-4">
        <Form value={value} onChange={setValue} schema={schema} t={t} />
      </div>
    </div>
  )
}
