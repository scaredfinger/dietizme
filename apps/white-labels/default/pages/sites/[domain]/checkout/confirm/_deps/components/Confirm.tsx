import _ from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'

import {
  Organization_Booking_Question,
} from '@otiuming/domain-omnidata-types'
import { useShoppingCart } from '@otiuming/ui-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'
import {
  AnswersByScope,
  buildAnswers,
  mapAnswersToServerInput,
} from '@otiuming/domain-booking-questions'

import { Label, Input, ButtonPrimary } from '@/components/legos'

import { ConfirmForm } from './Confirm.types'
import {
  NewExplainedSearchParams,
  PerPaxUnitSelection,
} from '@otiuming/domain-shopping-cart'
import ShoppingCartItem from '@/components/legos/lib/blocks/shopping-cart/ShoppingCartItem'
import BookingQuestions from './BookingQuestionBlock/BookingQuestions'

interface Props {
  bookingQuestions: Organization_Booking_Question[]
  className?: string
  onConfirm: (form: ConfirmForm) => void
}

export const Confirm: React.FC<Props> = ({
  className = '',
  onConfirm,
  bookingQuestions,
}) => {
  const { t } = useTranslation()

  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@grr.la')

  const shoppingCart = useShoppingCart()
  const firstShoppingCartItem = shoppingCart?.items?.[0]

  const firstShoppingCartItemExplainedSearchParams =
    firstShoppingCartItem?.explainedSearchParams

  const guests =
    (firstShoppingCartItemExplainedSearchParams as NewExplainedSearchParams)
      ?.unitSelection.type === 'per-pax'
      ? (
          (
            firstShoppingCartItemExplainedSearchParams as NewExplainedSearchParams
          )?.unitSelection as PerPaxUnitSelection
        ).units?.[0].guests
      : { adults: 0, children: 0 }

  const answersInitialValue = useMemo(() => {
    return buildAnswers({
      questions: bookingQuestions,
      adults: guests?.adults,
      children: guests?.children,
      products: 1,
    })
  }, [bookingQuestions, guests?.adults, guests?.children])

  const [answers, setAnswers] = useState<AnswersByScope>({
    booking: {},
    products: [],
  })

  useEffect(() => {
    setAnswers(answersInitialValue)
  }, [answersInitialValue])

  const renderSidebar = () => {
    const firstItem = _.first(shoppingCart.items)

    return <ShoppingCartItem item={firstItem} />
  }

  function handleOnChanged(newAnswersValue) {
    console.log('DEBUG', {
      newValue: newAnswersValue,
    })

    setAnswers(newAnswersValue)
  }

  function handleOnClick() {
    const mappedAnswers = mapAnswersToServerInput(answers)

    console.log('DEBUG', {
      answers,
      mappedAnswers,
    })

    onConfirm({
      contact: {
        name,
        email,
      },
      answers: mappedAnswers,
    })
  }

  const renderMain = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {t('pages.confirm.title')}
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        <div className="mt-6">
          <div>
            <h3 className="text-2xl font-semibold">
              {t('fields.contact.title')}
            </h3>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

            <div className="mt-6">
              <div className="space-y-5">
                <div className="space-y-1">
                  <Label>{t('fields.name.title')}</Label>
                  <Input
                    defaultValue={name}
                    onChange={({ target: { value } }) => setName(value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label>{t('fields.email.title')}</Label>
                  <Input
                    defaultValue={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                  ></Input>
                </div>
              </div>

              <BookingQuestions
                answers={answers}
                items={shoppingCart.items}
                questions={bookingQuestions}
                onChange={handleOnChanged}
              />

              {/* <BookingQuestionsBlock
                value={answers}
                guests={
                  shoppingCart?.items?.[0]?.explainedSearchParams.units?.[0]
                    .guests
                }
                questions={bookingQuestions}
                onChange={handleOnChaned}
              /> */}

              {/* <div className="mt-8">
                <h3 className="text-2xl font-semibold">
                  {t('fields.booking-questions.title')}
                </h3>
                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

                <div className="mt-6">
                  <div className="space-y-5">
                    <div className="space-y-1">
                      {JSON.stringify(bookingQuestions)}
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="pt-8">
                <ButtonPrimary onClick={handleOnClick}>
                  {t('actions.confirm.title')}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
        <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
      </main>
    </div>
  )
}

export default Confirm
