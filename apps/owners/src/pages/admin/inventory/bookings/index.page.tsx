/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Col, Row, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useTranslation } from 'react-i18next'

import Link from 'next/link'
import { withLoader } from '@otiuming/ui-common'

import { Get_BookingsQuery, useGet_BookingsQuery } from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import DataTable from '@/components/table/DataTable'
import { useFormatCurrency } from '@/components/utilities/use-format-currency'
import { STATE_COLORS } from '@/utility/constants'
import { useAuth } from '@/authentication/AuthContext'

interface Props {
  value: Get_BookingsQuery
  locale: string
}

const Inner: React.FC<Props> = ({ value, locale }) => {
  const { i18n, t } = useTranslation()
  // const {push} = useRouter()
  // function onProductClick(product_id: string) {
  //   push(`/${locale}/products/${product_id}`)
  // }
  const { formatCurrency } = useFormatCurrency()

  if (!value?.booking) {
    return <></>
  }

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/gallery',
      breadcrumbName: t('pages.gallery.title'),
    },
  ]

  const columns: ColumnsType<Get_BookingsQuery['booking'][0]> = [
    {
      title: t('fields.booking-code.title'),
      dataIndex: 'friendly_id',
      key: 'friendly_id',
      render: (_, record) => (
        <Link
          href={`/${locale}/admin/inventory/bookings/${record.id}`}
          className='cursor-pointer'
        >
          {record.friendly_id}
        </Link>
      )
    },
    {
      title: t('fields.booking-state.title'),
      dataIndex: 'state',
      key: 'state',
      render: (_, record) => (
        <Tag className={`text-white border-none ltr:mr-0 rtl:ml-0 uppercase text-[10px] ${STATE_COLORS[record.state]}`}>{record.state}</Tag>
      ),
    },
    {
      title: t('fields.amount.title'),
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record) => formatCurrency(record.amount),
    },
    {
      title: t('fields.contact-name.title'),
      dataIndex: 'contact.name',
      key: 'contact.name',
      render: (_, record) => record.contact?.name,
    },
    {
      title: t('fields.contact-email.title'),
      dataIndex: 'contact.email',
      key: 'contact.email',
      render: (_, record) => record.contact?.email,
    },
  ]

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.bookings.title')} />

      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <>
                <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="p-[25px]">
                    <DataTable
                      tableData={value?.booking}
                      columns={columns}
                      rowSelection={false}
                    />
                  </div>
                </div>
              </>
            </Col>
          </Row>
        </>
      </div>
    </>
  )
}

const InnerWithLoader = withLoader(Inner)

export default function BookingListForm() {
  const { currentUser } = useAuth()

  const { data, loading, refetch } = useGet_BookingsQuery({
    variables: {
      from: '2000-01-01',
      to: '2999-12-31',
    },
    skip: !currentUser,
  })

  const { locale } = useRouter()

  useEffect(() => {

    refetch()
  }, [refetch])

  return <InnerWithLoader loading={loading} value={data} locale={locale} />
}
