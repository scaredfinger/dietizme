import { Button, Col, Image, Row, Tag } from 'antd'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  useCurrentOrganizationId,
  useImageUrlFunction,
} from '@otiuming/ui-common'
import { Question } from '@otiuming/domain-booking-questions'
import { Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'
import { parseExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import {
  useBooking_AcceptMutation,
  useBooking_CancelMutation,
  useBooking_RejectMutation,
  useGet_BookingQuery,
  useGet_Booking_QuestionsQuery,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import { ExplainedSearchParamsComponent } from '@/components/blocks/explained-search-params'
import { useDateFormaters } from '@/components/utilities/use-date-formatters'
import { useFormatCurrency } from '@/components/utilities/use-format-currency'
import { STATE_COLORS } from '@/utility/constants'

type Multilanguage = {
  __typeName?: string
  de?: string
  en?: string
  es?: string
  fr?: string
}

export default function Booking() {
  const { query, locale } = useRouter()
  const id = query.bookingId as string

  const { renderLongDateWithTime } = useDateFormaters()
  const { formatCurrency } = useFormatCurrency()

  const { t } = useTranslation()

  const {
    accept,
    booking,
    cancel,
    current_version,
    loadingBooking,
    explainedSearchParams,
    imageUrl,
    productName,
    questionsAndAnswers,
    refetch,
    reject,
    totalPrice,
  } = useBookingData({ id })

  async function onAcceptBooking() {
    await accept({
      //TODO: Control error
      variables: {
        arg: {
          id: id,
          expected_version: current_version,
        },
      },
    })

    await Promise.all([refetch()])
  }

  async function onRejectBooking() {
    await reject({
      //TODO: Control error
      variables: {
        arg: {
          id: id,
          expected_version: current_version,
        },
      },
    })

    await Promise.all([refetch()])
  }

  async function onCancelBooking() {
    await cancel({
      //TODO: Control error
      variables: {
        arg: {
          id: id,
          expected_version: current_version,
        },
      },
    })

    await Promise.all([refetch()])
  }

  function renderQuestionsAndAnswers(questionsAndAnswers: QuestionsAndAnswers) {
    return (
      <>
        {questionsAndAnswers.map((qa, i) => (
          <div key={i}>
            <b>{qa.question}</b>
            {': '}
            {qa.answer}
          </div>
        ))}
      </>
    )
  }

  function renderCard() {
    return (
      booking && (
        <div className='m-4 col-span-3 bg-white dark:bg-white/10 m-0 p-0 text-theme-gray dark:text-white/60 text-[15px] rounded-10'>
          <div className='p-4'>
            <>
              <Row>
                <Col span={12}>
                  <>
                    <Row gutter={16}>
                      <Col span={8}>
                        <div className='w-full overflow-hidden'>
                          <Image
                            className='rounded-lg'
                            src={imageUrl}
                            preview={false}
                            alt={t(productName)}
                          />
                        </div>
                      </Col>
                      <Col span={16}>
                        <h2 className='text-dark font-medium'>
                          {t(productName)}
                        </h2>
                        <ExplainedSearchParamsComponent
                          explainedSearchParams={explainedSearchParams}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <p className='mt-4'>
                        <b>{t('fields.total.title')}</b>
                        {': '}
                        {formatCurrency(totalPrice)}
                      </p>
                    </Row>
                  </>
                </Col>
                <Col span={12}>
                  <Row>
                    <h2 className='mt-4'>
                      {t('entities.customer.title')}
                    </h2>
                  </Row>
                  <Row className='mt-4'>
                    <p>
                      <b>{t('fields.name.title')}</b>
                      {': '}
                      {booking.booking_by_pk.contact.name}
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <b>{t('fields.email.title')}</b>
                      {': '}
                      {booking.booking_by_pk.contact.email}
                    </p>
                  </Row>
                  <Row className='mt-6'>
                    <p>
                      <b>{t('fields.booking-state.title')}</b>
                      {': '}
                      <Tag
                        className={`text-white border-none ltr:mr-0 rtl:ml-0 uppercase text-[10px] ${
                          STATE_COLORS[booking.booking_by_pk.state]
                        }`}
                      >
                        {booking.booking_by_pk.state}
                      </Tag>
                    </p>
                  </Row>
                  <Row gutter={16} className='mt-6'>
                    <Col>
                      <Button type="primary" onClick={onAcceptBooking}>
                        {t('actions.accept.title')}
                      </Button>
                    </Col>
                    <Col>
                      <Button onClick={onRejectBooking}>
                        {t('actions.reject.title')}
                      </Button>
                    </Col>
                    <Col>
                      <Button onClick={onCancelBooking}>
                        {t('actions.cancel.title')}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>{t('fields.booking-code.title')}</b>
                  {': '}
                  {booking.booking_by_pk.friendly_id}
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>{t('fields.created-on.title')}</b>
                  {': '}
                  {renderLongDateWithTime(booking.booking_by_pk.created_on)}
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <h3>{t('fields.booking-questions.title')}</h3>
                  {questionsAndAnswers.pax?.adults?.length > 0 && (
                    <div className="border rounded-md p-2 bg-gray-100 m-2">
                      <h4>{t('entities.pax.title')}</h4>

                      {questionsAndAnswers.pax.adults?.map((a, i) => (
                        <div key={i}>
                          {t('entities.adults.withIndex', { index: i + 1 })}
                          {renderQuestionsAndAnswers(a)}
                        </div>
                      ))}

                      {questionsAndAnswers.pax.children?.map((a, i) => (
                        <div key={i}>
                          {t('entities.children.withIndex', { index: i + 1 })}
                          {renderQuestionsAndAnswers(a)}
                        </div>
                      ))}

                      {questionsAndAnswers.pax.infants?.map((a, i) => (
                        <div key={i}>
                          {t('entities.infants.withIndex', { index: i + 1 })}
                          {renderQuestionsAndAnswers(a)}
                        </div>
                      ))}
                    </div>
                  )}

                  {questionsAndAnswers.product?.length > 0 && (
                    <div className="border rounded-md p-2 bg-gray-100 m-2">
                      <h4>{t('entities.product.title')}</h4>
                      {renderQuestionsAndAnswers(questionsAndAnswers.product)}
                    </div>
                  )}

                  {questionsAndAnswers.booking?.length > 0 && (
                    <div className="border rounded-md p-2 bg-gray-100 m-2">
                      <h4>{t('entities.booking.title')}</h4>
                      {renderQuestionsAndAnswers(questionsAndAnswers.booking)}
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <br/>
                  <h3>{t('fields.history-entries.title')}</h3>
                  <br/>
                  <Row>
                  <Col span={8}>
                    <h4>{t('fields.booking-state.title')}</h4>
                  </Col>
                  <Col span={8}>
                    <h4>Timestamp</h4>
                  </Col>
                  <Col span={8}>
                    <h4>{t('fields.user.title')}</h4>
                  </Col>
                  </Row>
                  {booking.booking_by_pk?.history_entries?.length > 0 && booking.booking_by_pk?.history_entries?.map((historyEntry, index) => 
                  <Row key={index}>
                    <Col span={8}>
                      <div className="border p-2 bg-gray-100 mt-2">
                        {historyEntry.type}
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="border p-2 bg-gray-100 mt-2">
                        {historyEntry.timestamp}
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="border p-2 bg-gray-100 mt-2">
                        {historyEntry.user?.displayName ?? '-'}
                      </div>
                    </Col>
                  </Row>
                  )}
                </Col>
              </Row>
            </>
          </div>
        </div>
      )
    )
  }

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: `/${locale}/admin/inventory/bookings`,
      breadcrumbName: t('pages.bookings.title'),
    },
    {
      path: `/${locale}/admin/inventory/bookings/[bookingId]`,
      breadcrumbName: t('pages.booking.title'),
    },
  ]

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.booking.title')} />
      {!loadingBooking && renderCard()}
    </>
  )
}

function useBookingData({ id }: { id: string }) {
  const organization_id = useCurrentOrganizationId()
  const { locale } = useRouter()

  const { data: bookingQuestions, loading: loadingBookingQuestions } =
    useGet_Booking_QuestionsQuery({
      variables: {
        organization_id,
      },
    })

  const {
    data: booking,
    loading: loadingBooking,
    refetch,
  } = useGet_BookingQuery({
    variables: {
      id,
    },
  })

  const [accept] = useBooking_AcceptMutation()
  const [reject] = useBooking_RejectMutation()
  const [cancel] = useBooking_CancelMutation()

  const getTextByLocale = useMemo(
    () => (o: Multilanguage) => {
      const languages = Object.entries(o)

      const [_, value] = languages.find((l) => locale === l[0]) // l[0] is the key ('es', 'fr', ...)

      return value
    },
    [locale],
  )

  const { productName, headline, fileId, current_version } = useMemo(() => {
    let productName = ''
    let headline = ''
    let fileId = ''
    let current_version = 0
    if (booking?.booking_by_pk?.products.length>0) {
      productName = getTextByLocale(
        booking.booking_by_pk.products[0].rate.product.name,
      )
      headline = getTextByLocale(
        booking.booking_by_pk.products[0].rate.product.headline,
      )
      fileId =
        booking.booking_by_pk.products[0].rate.product.gallery.items?.[0]
          ?.file_id
      current_version = booking.booking_by_pk.version
    }
    return { productName, headline, fileId, current_version }
  }, [booking, getTextByLocale])

  const totalPrice = useMemo(() => {
    if (booking) {
      return booking.booking_by_pk.amount
    }
    return 0
  }, [booking])

  const questionsAndAnswers = useMemo(() => {
    if (!booking || !bookingQuestions || booking?.booking_by_pk?.products.length<1) return {}

    const questions =
      bookingQuestions.organization_by_pk.booking_questions.reduce(
        (acc, question) => {
          acc[question.id] = question
          return acc
        },
        {},
      )

    const paxAnswers =
      booking?.booking_by_pk.products[0].pax_answers_by_pax_type_by_index_by_id
    const adults: QuestionsAndAnswers[] = paxAnswers.adults?.map((a) =>
      getQuestions(a, questions),
    )
    const children: QuestionsAndAnswers[] = paxAnswers.children?.map((a) =>
      getQuestions(a, questions),
    )
    const infants: QuestionsAndAnswers[] = paxAnswers.infants?.map((a) =>
      getQuestions(a, questions),
    )

    const pax = {
      adults,
      children,
      infants,
    }
    const product = getQuestions(
      booking?.booking_by_pk.products[0].product_answers_by_id,
      questions,
    )

    const booking2 = getQuestions(
      booking?.booking_by_pk.booking_answers_by_id,
      questions,
    )

    return {
      pax,
      product,
      booking: booking2,
    }
  }, [booking, bookingQuestions])

  const makePreviewUrlFunction = useImageUrlFunction()

  const imageUrl = useMemo(() => {
    return makePreviewUrlFunction(fileId, 320, 75)
  }, [fileId, makePreviewUrlFunction])

  const explainedSearchParams = useMemo(() => {
    if (booking?.booking_by_pk?.products.length>0) {
      return parseExplainedSearchParams(
        booking.booking_by_pk.products[0].explained_search_params,
      )
    }
    return undefined
  }, [booking])

  return {
    accept,
    booking,
    bookingQuestions,
    cancel,
    current_version,
    headline,
    loadingBooking,
    loadingBookingQuestions,
    imageUrl,
    productName,
    questionsAndAnswers,
    refetch,
    reject,
    totalPrice,
    explainedSearchParams,
  }
}

function getQuestions(
  a: Record<string, { question_id: string; value: unknown }>,
  questions: Record<string, Question>,
) {
  return Object.entries(a).map(([key, value]) => {
    const question = questions[key]
    const text = question.text.en
    const qvalue = question.value
    const type = question.type

    const mappedValue =
      type === Booking_Question_Type_Enum.Select
        ? (qvalue as any).options.find((o) => o.value === value.value)?.en
        : value.value

    return {
      question: text,
      answer: mappedValue,
    }
  })
}

type QuestionsAndAnswers = ReturnType<typeof getQuestions>
