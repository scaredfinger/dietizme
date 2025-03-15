import { v4 } from 'uuid'
import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { logger } from '@otiuming/utils-logging'
import { useShoppingCart } from '@otiuming/ui-shopping-cart'
import { createBookingId } from '@otiuming/utils-common'
import { useTranslation } from '@otiuming/ui-i18n'
import { Organization_Booking_Question } from '@otiuming/domain-omnidata-types'

import {
  Organization,
  useBooking_CreateMutation,
} from '@/data-access'

import { Layout } from '@/components/Layout'
import { ConfirmForm } from '@/pages/sites/[domain]/checkout/confirm/_deps/components/Confirm.types'
import { useRoutes } from '@/components/use-routes'

export { getStaticPaths, getStaticProps } from './_deps/server'

const Confirm = dynamic(() => import('@/pages/sites/[domain]/checkout/confirm/_deps/components/Confirm'), {
  loading: () => <p>Loading...</p>,
})

interface Props {
  organization: Organization
  bookingQuestions: Organization_Booking_Question[]
}

export const ConfirmPage: React.FC<Props> = ({
  organization,
  bookingQuestions,
}) => {
  const { t, locale } = useTranslation()
  const [create] = useBooking_CreateMutation()

  const shoppingCart = useShoppingCart()

  const { push } = useRouter()

  const { thankYou, error } = useRoutes()

  function onConfirm({ contact, answers }: ConfirmForm) {
    logger.info({
      eventId: 'APP_BOOKING_CONFIRM',
      contact,
      answers,
      shoppingCart,
    })

    const friendly_id = createBookingId()
    const contact_email = contact.email

    create({
      variables: {
        arg: {
          id: v4(),
          friendly_id,
          organization_id: organization.id,
          contact,
          answers,
          locale,
          items: shoppingCart.items.map((item) => ({
            rate_id: item.rateId,
            search_params: {
              date_range: item.searchParams.dateRange,
              units: item.searchParams.units,
            },
            expected_price: item.price,
            explained_search_params: item.explainedSearchParams,
            units: item.units.map((unit) => ({
              supplements: unit.supplements.map((supplement) => ({
                id: supplement.id,
                quantity: supplement.quantity,
                expected_unit_price: supplement.unitPrice,
              }))
            })),
          })),
        },
      },
    })
      .then((respose) => {
        if (respose.data?.booking_create) {
          shoppingCart.clear()
          push({
            pathname: thankYou(),
            query: {
              friendly_id,
              contact_email,
            },
          })
        }
      })
      .catch((e) => {
        logger.error({
          eventId: 'APP_BOOKING_CONFIRM_ERROR',
          error: e,
        })
        push(error())
      })
  }

  return (
    <Layout
      pageTitle={t('pages.confirm.title')}
      pageDescription={t('pages.confirm.description')}
      organization={organization}
    >
      <Confirm onConfirm={onConfirm} bookingQuestions={bookingQuestions} />
    </Layout>
  )
}

export default ConfirmPage

