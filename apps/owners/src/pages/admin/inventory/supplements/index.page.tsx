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
  Get_Supplement_ListDocument,
  Get_Supplement_ListQuery,
  useCreate_SupplementMutation,
  useGet_Supplement_ListQuery,
} from '@/data-access'
import DataTable from '@/components/table/DataTable'
import { PageHeaders } from '@/components/page-headers'

interface Props {
  value: Get_Supplement_ListQuery
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
      path: `/${locale}/admin/inventory/supplements`,
      breadcrumbName: t('pages.supplements.title'),
    },
  ]

  const columns: ColumnsType<Get_Supplement_ListQuery['supplements'][0]> = [
    {
      title: t('entities.supplement.title'),
      render: (_, record) => (
        <Row>
          <Col span={2}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="w-20 h-20 object-fit rounded"
              src={makePreviewUrl(record.image_id)}
            />
          </Col>
          <Col span={22}>
            <Link href={`/${locale}/admin/inventory/supplements/${record.id}`}>
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

  const [createSupplement] = useCreate_SupplementMutation({
    refetchQueries: [Get_Supplement_ListDocument]
  })

  const [disabled, setDisabled] = useState(false)

  async function onCreateProduct() {
    setDisabled(true)
    const id = v4()
    await createSupplement({
      variables: {
        arg: {
          organization_id,
          id,
        },
      },
    })

    push(`/${locale}/admin/inventory/supplements/${id}`)
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

  if (!value?.supplements) {
    return <></>
  }

  return (
    <>
      <PageHeaders 
        routes={pageRoutes} 
        title={t('pages.supplements.title')} 
        buttons={buttons}
      />

      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <>
                <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="p-[25px]">
                    <DataTable columns={columns} tableData={value?.supplements} />
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
  const { data, loading } = useGet_Supplement_ListQuery({
    variables: {
      organization_id,
    },
  })

  const { locale } = useRouter()

  return <InnerWithLoader loading={loading} value={data} locale={locale} />
}
