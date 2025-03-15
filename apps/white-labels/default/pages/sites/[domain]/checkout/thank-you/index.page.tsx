import { useRouter } from 'next/router'
import React from 'react'

import { Booking } from '@otiuming/domain-omnidata-types'
import { Locale, useTranslation } from '@otiuming/ui-i18n'

import { useRoutes } from '@/components/use-routes'

import { ButtonPrimary } from '../../../../../components/legos'
import { useGet_BookingQuery } from '../../../../../data-access'
import { BookingDetails } from '../../../../../components'
import { useImageThumbailUrlFunction } from '../../../../../utils'

interface Props {
  className?: string
}

const ThankYou: React.FC<Props> = ({ className = '' }) => {
  const { query, locale } = useRouter()
  const contact_email = query.contact_email as string
  const friendly_id = query.friendly_id as string

  const { t } = useTranslation()

  const { home } = useRoutes()

  const { data } = useGet_BookingQuery({
    variables: {
      friendly_id,
      contact_email,
    },
  })

  const getImageUrl = useImageThumbailUrlFunction()

  const { booking_by_pk }: { booking_by_pk: Booking } = data?.get_booking || {
    booking_by_pk: null,
  }

  const renderContent = (booking: Booking) => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {t('sections.congratulations.title')} 🎉
        </h2>

        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        <BookingDetails
          booking={booking}
          getImageUrl={getImageUrl}
          locale={locale as Locale}
        />

        <div>
          <ButtonPrimary href={home()}>
            {t('actions.explore-more.title')}
          </ButtonPrimary>
        </div>
      </div>
    )
  }

  return (
    <div className={`nc-PayPage ${className}`} data-nc-id="PayPage">
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">
          {booking_by_pk && renderContent(booking_by_pk)}
        </div>
      </main>
    </div>
  )
}

export default ThankYou
