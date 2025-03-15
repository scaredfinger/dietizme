import React from 'react'

import { Booking } from '@otiuming/domain-omnidata-types'
import { shortDate } from '@otiuming/ui-text-formatting'
import { Locale, useTranslation } from '@otiuming/ui-i18n'

import { NcImage } from '@/components/legos/lib/atoms/nc-image'
import { Calendar } from '@/components/legos/lib/atoms/images/calendar'
import { Guests } from '@/components/legos/lib/atoms/images/guests'

interface Props {
  className?: string
  booking: Booking
  locale: Locale
  getImageUrl: (fileId: string) => string
}

export const BookingDetails: React.FC<Props> = ({
  booking,
  locale,
  getImageUrl,
}) => {
  const { t } = useTranslation()

  const firstItem = booking.products[0]
  const imageUrl = getImageUrl(firstItem.rate.product.gallery.items[0]?.file_id)

  return (
    <>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">
          {t('fields.your-booking.title')}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <NcImage src={imageUrl} />
            </div>
          </div>
          <div className="pt-5 sm:pb-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                {booking.products[0].rate.product.name[locale]}
              </span>
              <span className="text-base sm:text-lg font-medium mt-1 block">
                {booking.products[0].rate.product.headline[locale]}
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400"></span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
          </div>
        </div>
        <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
          <div className="flex-1 p-5 flex space-x-4">
            <Calendar />

            <div className="flex flex-col">
              <span className="text-sm text-neutral-400">
                {t('fields.date.title')}
              </span>
              <span className="mt-1.5 text-lg font-semibold">
                {firstItem.explained_search_params.dateTimeSelection.type === 'time-slot-selection'
                ? (
                  <>
                    {shortDate(
                      firstItem.explained_search_params?.dateTimeSelection.date,
                    )}
                    ,{' '}
                    {
                      firstItem.explained_search_params?.dateTimeSelection
                        .timeSlot.start
                    }{' '}
                    -
                    {
                      firstItem.explained_search_params?.dateTimeSelection
                        .timeSlot.end
                    }
                  </>
                ) : (
                  <>
                    {shortDate(
                      firstItem.explained_search_params?.dateTimeSelection
                        .dateRange.from,
                    )}
                    {' - '}
                    {shortDate(
                      firstItem.explained_search_params?.dateTimeSelection
                        .dateRange.to,
                    )}
                    {', '}
                    {firstItem.explained_search_params?.quantity}
                    {'x'}
                  </>
                )}
              </span>
            </div>
          </div>
          {firstItem.explained_search_params.type === 'time-slot-per-pax' && (
            <div className="flex-1 p-5 flex space-x-4">
              <Guests />

              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">
                  {t('fields.pax.title')}
                </span>
                <span className="mt-1.5 text-lg font-semibold">
                  {t('fields.search-pax.format', {
                    adults:
                      firstItem.explained_search_params?.units[0].guests.adults,
                    children:
                      firstItem.explained_search_params?.units[0].guests
                        .children,
                    infants:
                      firstItem.explained_search_params?.units[0].guests
                        .infants,
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------ */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">
          {t('fields.booking-details.title')}
        </h3>
        <div className="flex flex-col space-y-4">
          <div className="flex text-neutral-6000 dark:text-neutral-300">
            <span className="flex-1">{t('fields.booking-code.title')}</span>
            <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
              {booking.friendly_id}
            </span>
          </div>
          <div className="flex text-neutral-6000 dark:text-neutral-300">
            <span className="flex-1">{t('fields.total.title')}</span>
            <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
              {booking.amount}
            </span>
          </div>
          {/* <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Payment method</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                Credit card
              </span>
            </div> */}
        </div>
      </div>
    </>
  )
}
