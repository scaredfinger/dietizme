/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'
import { t } from 'i18next'
import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import { ColumnsType } from 'antd/lib/table'

import {
  useCurrentOrganizationId,
  useImageUrlFunction,
  withLoader,
} from '@otiuming/ui-common'

import {
  Get_Product_ListDocument,
  Get_Product_ListQuery,
  useCreate_ProductMutation,
  useGet_Product_ListQuery,
} from '@/data-access'
import DataTable from '@/components/table/DataTable'
import { PageHeaders } from '@/components/page-headers'

interface Props {
  value: Get_Product_ListQuery
  locale: string
}

const Inner: React.FC<Props> = ({ value, locale }) => {
  const { push } = useRouter()

  const makePreviewUrlFunction = useImageUrlFunction()
  const makePreviewUrl = (fileId: string) =>
    makePreviewUrlFunction(fileId, 320, 75)

  const organization_id = useCurrentOrganizationId()

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: `/${locale}/admin/inventory/products`,
      breadcrumbName: t('pages.products.title'),
    },
  ]

  const columns: ColumnsType<Get_Product_ListQuery['product'][0]> = [
    {
      title: t('entities.product.title'),
      render: (_, record) => (
        <Row>
          <Col span={2}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="w-20 h-20 object-fit rounded"
              src={makePreviewUrl(record.gallery.items?.[0]?.file_id)}
            />
          </Col>
          <Col span={22}>
            <Link href={`/${locale}/admin/inventory/products/${record.id}`}>
              <div className="text-sm font-bold">{record.name?.[locale]}</div>
              <div className="text-sm text-gray-500">
                {record.headline?.[locale]}
              </div>
            </Link>
          </Col>
        </Row>
      ),
    },
  ]

  const [createProduct] = useCreate_ProductMutation({
    refetchQueries: [Get_Product_ListDocument],
  })

  const [disabled, setDisabled] = useState(false)

  async function onCreateProduct() {
    setDisabled(true)
    const id = v4()
    await createProduct({
      variables: {
        arg: {
          organization_id,
          id,
        },
      },
    })

    push(`/${locale}/admin/inventory/products/${id}`)
  }

  const buttons = [
    <Button
      disabled={disabled}
      key="create-new"
      type="primary"
      className="mr-2"
      onClick={onCreateProduct}
    >
      {t('actions.create-new.title')}
    </Button>,
  ]

  if (!value?.product) {
    return <></>
  }

  return (
    <>
      <PageHeaders 
        routes={pageRoutes} 
        title={t('pages.products.title')} 
        buttons={buttons}
      />

      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <>
                <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="p-[25px]">
                    <DataTable columns={columns} tableData={value?.product} />
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

export default function ProductListForm() {
  const organization_id = useCurrentOrganizationId()
  const { data, loading } = useGet_Product_ListQuery({
    variables: {
      organization_id,
    },
  })
  const { locale } = useRouter()

  return <InnerWithLoader loading={loading} value={data} locale={locale} />
}
