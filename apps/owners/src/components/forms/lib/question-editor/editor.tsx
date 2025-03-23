import React, { FC, useMemo } from 'react'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
} from '@otiuming/domain-omnidata-types'
import {
  Question
} from '@otiuming/domain-booking-questions'

import { EditorProps, Form, JSONSchema } from '../form'
import { Collapse } from 'antd'
import { useRouter } from 'next/router'

export const BookingQuestionEditor: FC<EditorProps<Question>> = ({
  formData,
  onChange,
}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const questionTypeTexts = useMemo(() => {
    return {
      [Booking_Question_Type_Enum.FreeText]: t(
        'enums.question-type.free-text.title',
      ),
      [Booking_Question_Type_Enum.Numeric]: t(
        'enums.question-type.numeric.title',
      ),
      [Booking_Question_Type_Enum.Select]: t(
        'enums.question-type.select.title',
      ),
    }
  }, [t])

  const questionScopeTexts = useMemo(() => {
    return {
      [Booking_Question_Scope_Enum.PerPax]: t(
        'enums.question-scope.per-pax.title',
      ),
      [Booking_Question_Scope_Enum.PerBooking]: t(
        'enums.question-scope.per-booking.title',
      ),
      // TODO: Re-enable when we have per-product questions
      // [Booking_Question_Scope_Enum.PerProduct]: t(
      //   'enums.question-scope.per-product.title',
      // ),
    }
  }, [t])

  const questionSchemas = useMemo(() => {
    const result: Record<Booking_Question_Type_Enum, JSONSchema> = {
      [Booking_Question_Type_Enum.FreeText]: {
        type: 'object',
        properties: {
          multiline: {
            title: 'Multiline',
            type: 'boolean',
          },
        },
      },
      [Booking_Question_Type_Enum.Numeric]: {
        type: 'object',
        properties: {
          min: {
            title: t('fields.min.title'),
            type: 'number',
          },
          max: {
            title: t('fields.max.title'),
            type: 'number',
          },
          step: {
            title: t('fields.step.title'),
            type: 'number',
          }
        },
      },
      [Booking_Question_Type_Enum.Select]: {
        type: 'object',
        properties: {
          options: {
            type: 'array',
            title: t('fields.options.title'),
            className: 'border-2 border-gray-200 rounded-md p-2',
            items: {
              type: 'object',
              className: 'border-1 border-gray-200 rounded-md p-2 my-4',
              title: t('fields.option.title'),
              properties: {
                value: {
                  type: 'string',
                  hidden: true,
                },
                en: {
                  type: 'string',
                  title: t('languages.en'),
                },
                es: {
                  type: 'string',
                  title: t('languages.es'),
                },
                de: {
                  type: 'string',
                  title: t('languages.de'),
                },
                fr: {
                  type: 'string',
                  title: t('languages.fr'),
                },
              },
            },
          },
        },
      },
    }

    return result
  }, [t])

  const outterSchema: JSONSchema = useMemo(
    () => ({
      type: 'object',
      properties: {
        text: {
          type: 'object',
          title: t('fields.text.title'),
          default: {},
          className: 'border-2 border-gray-200 rounded-md p-2',
          properties: {
            en: {
              type: 'string',
              title: t('languages.en'),
              className: 'text-sm',
            },
            es: {
              type: 'string',
              title: t('languages.es'),
            },
            de: {
              type: 'string',
              title: t('languages.de'),
            },
            fr: {
              type: 'string',
              title: t('languages.fr'),
            },
          },
        },
        scope: {
          type: 'string',
          title: t('fields.question-scope.title'),
          enum: _.map(questionScopeTexts, (text, type) => type),
          enumNames: _.map(questionScopeTexts, (text, type) => text),
        },
        type: {
          type: 'string',
          title: t('fields.question-type.title'),
          enum: _.map(questionTypeTexts, (text, type) => type),
          enumNames: _.map(questionTypeTexts, (text, type) => text),
        },
      },
    }),
    [questionScopeTexts, questionTypeTexts, t],
  )

  const actualSchema = useMemo(() => {
    return {
      ...outterSchema,
      properties: {
        ...outterSchema.properties,
        ...questionSchemas[formData.type].properties,
      },
    }
  }, [formData.type, outterSchema, questionSchemas])

  const questionLabel = useMemo(() => {
    return questionTypeTexts[formData.type] + ': ' + (formData.text?.[locale] ?? t('placeholders.question.title'))
  }, [formData.text, locale, formData.type, questionTypeTexts, t])

  const onChangeInner = (newValue: any) => {
    if (_.isEqual(newValue, formData)) return
    onChange(newValue)
  }

  return (
    <>
      <Collapse 
        items={[
          {
            label: questionLabel,
            children: (
              <Form
                schema={actualSchema}
                value={formData}
                t={t}
                onChange={onChangeInner}
                hideSubmitButton
                />
            )
          }
        ]}  
      >
        
      </Collapse>
    </>
  )
}
