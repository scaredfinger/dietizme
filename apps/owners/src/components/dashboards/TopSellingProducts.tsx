import React, { useEffect, useMemo, useState } from 'react'
import { Table, Image } from 'antd'
import { Cards } from '@/components/cards/frame/cards-frame'
import { useTranslation } from 'react-i18next'
import { useCurrentOrganizationId, useImageUrlFunction } from '@otiuming/ui-common'
import { useGet_Products_In_BookingsQuery } from '@/data-access/generated'
//TODO: Change name to useGet_Products_In_Bookings
export default function TopSellingProducts() {
  const { t } = useTranslation()
  const [isLoadingSellingData, setIsLoadingSellingData] = useState<boolean>(true);
  const sellingColumns = [
    {
      title: t('dashboards.topSellingProducts.productName'),
      dataIndex: 'name',
      key: 'name',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden  ltr:rounded-l-4 rtl:rounded-r-4',
    },
    {
      title: t('dashboards.topSellingProducts.numberOfBookings'),
      dataIndex: 'sold',
      key: 'sold',
      className:
        'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
    }
  ]
  const [sellingData, setSellingData] = useState<Array<{
    key: number
    name: any
    sold: any
  }>>([]);


  const organization_id = useCurrentOrganizationId()
  const {
    data: bookings,
    loading: loadingBookings,
    refetch,
  } = useGet_Products_In_BookingsQuery({
    variables: {
      id: organization_id
    }
  })

  const makePreviewUrlFunction = useImageUrlFunction()

  useEffect(() => {
    if (!loadingBookings && bookings) {
      const topSaleProducts = Object.groupBy(bookings.booking, ({ products }) => {
        return products[0].rate.product.name.en
      })
      let index = 1;
      const auxData = [];
      for (const product in topSaleProducts) {
        const bookings = topSaleProducts[product]
        const numberOfBookings = bookings.length

        const fileId = bookings[0].products[0].rate.product.gallery.items[0].file_id
        const imageUrl = makePreviewUrlFunction(fileId, 320, 75)
        console.log("IMAGE URL", imageUrl)
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
                  alt={product}
                  preview={false}
                />
              </div>
              <span className="font-medium capitalize text-dark dark:text-white/[.87] text-15">
                {product}
              </span>
            </div>
          ),
          sold: (
            <span className="font-normal capitalize text-[14px] text-dark dark:text-white/[.87]">
              {numberOfBookings}
            </span>
          )
        })
        index++
      }
      setSellingData(auxData);
    }
  }, [bookings, loadingBookings])

  return (
    sellingData.length > 0 &&
    <div className="h-full">
      <Cards
        title={t('dashboards.topSellingProducts.title')}
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