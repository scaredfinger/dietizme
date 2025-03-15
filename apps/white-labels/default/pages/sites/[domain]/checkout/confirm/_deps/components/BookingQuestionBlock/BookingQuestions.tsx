import React, { FC, useMemo } from 'react'
import _ from 'lodash'

import { Booking_Question_Scope_Enum } from '@otiuming/domain-omnidata-types'
import { AnswersByScope } from '@otiuming/domain-booking-questions'
import {
  NewExplainedSearchParams,
  PerPaxUnitSelection,
} from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

import {
  BookingQuestionQuestion,
  BookingQuestionShoppingCartItem,
} from './BookingQuestion.types'
import BookingQuestion from './BookingQuestion'
import {
  createChangeBookingHandler,
  createChangeProductHandler,
} from './BookingQuestions.helpers'
import { Guests } from '@otiuming/domain-data-types'

interface BookingQuestionsProps {
  questions: BookingQuestionQuestion[]
  items: BookingQuestionShoppingCartItem[]
  answers: AnswersByScope
  onChange: (answers: AnswersByScope) => void
}

const BookingQuestions: FC<BookingQuestionsProps> = ({
  questions,
  items,
  answers,
  onChange,
}) => {
  const { t } = useTranslation()

  const changeBookingQuestion = useMemo(
    () => createChangeBookingHandler(answers, onChange),
    [answers, onChange],
  )
  const changeProductQuestion = useMemo(
    () => createChangeProductHandler(answers, onChange, 'productAnswers'),
    [answers, onChange],
  )
  const changeAdultQuestion = useMemo(
    () => createChangeProductHandler(answers, onChange, 'adults'),
    [answers, onChange],
  )
  const changeChildQuestion = useMemo(
    () => createChangeProductHandler(answers, onChange, 'children'),
    [answers, onChange],
  )

  const {
    perPaxQuestions,
    perBookingQuestions,
    perProductQuestions,
    questionCount,
    perPaxQuestionCount,
    perBookingQuestionCount,
    perProductQuestionCount,
  } = useMemo(() => {
    const perBookingQuestions = questions.filter(
      (q) => q.scope === Booking_Question_Scope_Enum.PerBooking,
    )
    const perProductQuestions = questions.filter(
      (q) => q.scope === Booking_Question_Scope_Enum.PerProduct,
    )
    const perPaxQuestions = questions.filter(
      (q) => q.scope === Booking_Question_Scope_Enum.PerPax,
    )

    const perBookingQuestionCount = perBookingQuestions.length
    const perProductQuestionCount = perProductQuestions.length
    const perPaxQuestionCount = perPaxQuestions.length
    const questionCount =
      perBookingQuestionCount + perProductQuestionCount + perPaxQuestionCount

    return {
      perBookingQuestions,
      perProductQuestions,
      perPaxQuestions,
      questionCount,
      perBookingQuestionCount,
      perProductQuestionCount,
      perPaxQuestionCount,
    }
  }, [questions])

  const renderQuestion = (
    question: BookingQuestionQuestion,
    answer: unknown,
    onChange: (newValue: unknown) => void,
  ) => {
    return (
      <>
        <BookingQuestion
          question={question}
          value={answer}
          onChange={onChange}
        />
      </>
    )
  }

  const renderPaxQuestions = (
    units: {
      guests: Guests
    }[],
    productIndex: number,
  ) => {
    return (
      <>
        {units.map((unit, index) => (
          <>
            {mapN(unit.guests.adults, (adultIndex) => (
              <div
                key={adultIndex}
                className="border-solid border-2 my-2 p-2 rounded-lg border-neutral-200 dark:border-neutral-700"
              >
                <h5 className="text-lg pt-1 font-semibold">
                  {t('fields.questions.adult.title', {
                    ordinal: adultIndex + 1,
                  })}
                </h5>
                {perPaxQuestions.map((question, questionIndex) => (
                  <div key={questionIndex}>
                    {renderQuestion(
                      question,
                      answers.products[productIndex].productAnswers[
                        question.id
                      ],
                      (newValue) =>
                        changeAdultQuestion(
                          newValue,
                          productIndex,
                          question.id,
                          adultIndex,
                        ),
                    )}
                  </div>
                ))}
              </div>
            ))}
            {mapN(unit.guests.children, (childIndex) => (
              <div
                key={childIndex}
                className="border-solid border-2 my-2 p-2 rounded-lg border-neutral-200 dark:border-neutral-7o0"
              >
                <h5 className="text-lg pt-1 font-semibold">
                  {t('fields.questions.child.title', {
                    ordinal: childIndex + 1,
                  })}
                </h5>
                {perPaxQuestions.map((question, questionIndex) => (
                  <div key={questionIndex}>
                    {renderQuestion(
                      question,
                      answers.products[productIndex].productAnswers[
                        question.id
                      ],
                      (newValue) =>
                        changeChildQuestion(
                          newValue,
                          productIndex,
                          question.id,
                          childIndex,
                        ),
                    )}
                  </div>
                ))}
              </div>
            ))}
          </>
        ))}
      </>
    )
  }

  if (questionCount === 0) {
    return null
  }

  return (
    <div>
      <div className="mt-6">
        <div>
          <>
            <h3 className="text-2xl font-semibold">
              {t('fields.questions.title')}
            </h3>
            <sub className="text-lg">{t('fields.questions.subtitle')}</sub>
            <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-5"></div>
          </>

          <div className="pb-5 px-5 pt-1 mb-5 rounded-lg bg-neutral-100/50 dark:bg-neutral-800">
            {perBookingQuestions.map((question, i) => (
              <div key={i}>
                {renderQuestion(
                  question,
                  answers.booking[question.id],
                  (newValue) => changeBookingQuestion(newValue, question.id),
                )}
              </div>
            ))}
          </div>

          {!!(perProductQuestionCount + perPaxQuestionCount) &&
            items.map((item, productIndex) => (
              <div
                key={productIndex}
                className="py-5 px-5 rounded-lg bg-neutral-100/50 dark:bg-neutral-800"
              >
                <h4 className="text-lg font-semibold">
                  {t('fields.questions.product.title', { product: item.title })}
                </h4>
                {perProductQuestions.map((question, i) => (
                  <div key={i}>
                    {renderQuestion(
                      question,
                      answers.products[productIndex]?.productAnswers[
                        question.id
                      ],
                      (newValue) =>
                        changeProductQuestion(
                          newValue,
                          productIndex,
                          question.id,
                        ),
                    )}
                  </div>
                ))}

                {(item.explainedSearchParams as NewExplainedSearchParams).unitSelection.type === 'per-pax' &&
                  renderPaxQuestions(
                    ((item.explainedSearchParams as NewExplainedSearchParams).unitSelection as PerPaxUnitSelection).units,
                    productIndex,
                  )
                }
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BookingQuestions

function mapN<T>(n: number, fn: (i: number) => T): T[] {
  return Array(n)
    .fill(0)
    .map((_, i) => fn(i))
}
