import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/lib/table'

import { withLoader } from '@otiuming/ui-common'

import {
  Get_Product_Groups_ListQuery,
  useGet_Product_Groups_ListQuery,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import Link from 'next/link'
import { Button, Col, Row } from 'antd'
import DataTable from '@/components/table/DataTable'
import { useRouter } from 'next/router'

type BookingQuestion = Get_Product_Groups_ListQuery

interface Props {
  value: Get_Product_Groups_ListQuery
  locale: string
  t: (key: string) => string
  push: (url: string) => void
}

const Inner: React.FC<Props> = ({ value, locale, t, push }) => {

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/product-groups',
      breadcrumbName: t('pages.product-groups.title'),
    },
  ]

  const buttons = [
    <>
      <Button
        type="primary"
        className="mr-2"
        onClick={() =>
          push(`/${locale}/admin/inventory/product-groups/create-new`)
        }
      >
        {t('actions.create-new.title')}
      </Button>
      ,
    </>,
  ]

  const columns: ColumnsType<Get_Product_Groups_ListQuery['product_group'][0]> =
    [
      {
        title: t('fields.name.title'),
        dataIndex: 'id',
        key: 'id',
        render: (_, record) => (
          <Link
            href={`/${locale}/admin/inventory/product-groups/${record.id}`}
          >
            {record.name[locale]}
          </Link>
        ),
      },
    ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.product-groups.title')}
        buttons={buttons}
      />

      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <>
                <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="p-[25px]">
                    <DataTable
                      tableData={value?.product_group}
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

const ProductGroups: React.FC = () => {
  const { data, loading } = useGet_Product_Groups_ListQuery()
  const { t } = useTranslation()
  const { locale, push } = useRouter()

  return (
    <InnerWithLoader value={data} locale={locale} t={t} loading={loading} push={push} />
  )
}

export default ProductGroups
