import React, { useEffect, useMemo, useState } from 'react'
import { Table, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { useTranslation } from 'react-i18next'
import { useCurrentOrganizationId, useImageUrlFunction } from '@otiuming/ui-common'
import { useGet_Products_In_Bookings_By_Arrival_DateQuery } from '@/data-access/generated'
import { useRouter } from 'next/router'
import Link from 'next/link'
import moment from 'moment'

type Multilanguage = {
    __typeName?: string
    de?: string
    en?: string
    es?: string
    fr?: string
  }
  
const today = moment().toISOString()
export default function BookingsByArrivalDate() {
    const { t } = useTranslation()
    const { locale } = useRouter()
    const sellingColumns = [
        {
            title: t('dashboards.bookingsByArrivalDate.productName'),
            dataIndex: 'name',
            key: 'name',
            className:
                'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
        },
        {
            title: t('dashboards.bookingsByArrivalDate.bookingId'),
            dataIndex: 'friendlyId',
            key: 'friendlyId',
            className:
                'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
        },
        {
            title: t('dashboards.bookingsByArrivalDate.date'),
            dataIndex: 'arrivalDate',
            key: 'arrivalDate',
            className:
                'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
        }
    ]
    const [sellingData, setSellingData] = useState<Array<{
        key: number
        name: any
        friendlyId: any
        arrivalDate: any
    }>>([]);


    const organization_id = useCurrentOrganizationId()
    
    const {
        data: bookingProducts,
        loading: loadingBookingProducts
    } = useGet_Products_In_Bookings_By_Arrival_DateQuery({
        variables: {
            id: organization_id,
            today: today
        }
    })

    const makePreviewUrlFunction = useImageUrlFunction()

    useEffect(() => {
        if (!loadingBookingProducts && bookingProducts) {
            let index = 1;
            const auxData = [];
            bookingProducts.booking_product.forEach((product)=> {
                const fileId = product.rate.product.gallery.items[0].file_id
                const imageUrl = makePreviewUrlFunction(fileId, 320, 75)
                auxData.push({
                    key: index,
                    name: (
                        <div className="flex items-center">
                            <div className="ltr:mr-2.5 rtl:ml-2.5 w-[34px] h-[34px]">
                                <Image
                                    className="w-[34px] h-[34px] rounded-4"
                                    src={imageUrl}
                                    width="32"
                                    height="32"
                                    alt={getTextByLocale(product.rate.product.name)}
                                    preview={false}
                                />
                            </div>
                            <span className="font-medium capitalize text-dark dark:text-white/[.87] text-15">
                                {getTextByLocale(product.rate.product.name)}
                            </span>
                        </div>
                    ),
                    friendlyId: (
                        <span className="font-normal capitalize text-[14px] text-dark dark:text-white/[.87]">
                            <Link
                                href={`/${locale}/admin/inventory/bookings/${product.booking.id}`}
                                className='cursor-pointer'
                                >
                                {product.booking.friendly_id}
                            </Link>
                        </span>
                    ),
                    arrivalDate:(
                        <span className="font-normal capitalize text-[14px] text-dark dark:text-white/[.87]">
                            {product.starts_on}
                        </span>
                    )
                })
                index++
            })
            setSellingData(auxData);
        }
    }, [bookingProducts, loadingBookingProducts])

    const getTextByLocale = useMemo(
        () => (o: Multilanguage) => {
          const languages = Object.entries(o)
    
          const [_, value] = languages.find((l) => locale === l[0]) // l[0] is the key ('es', 'fr', ...)
    
          return value
        },
        [locale],
      )

    return (
        sellingData.length > 0 &&
        <div className="h-full">
            <Cards
                title={t('dashboards.bookingsByArrivalDate.title')}
                size="large"
                className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
            >
                <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive [&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-s-4 [&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-e-4">
                    <Table
                        columns={sellingColumns}
                        dataSource={sellingData}
                        pagination={false}
                    />
                </div>
            </Cards>
        </div>
    )
} 