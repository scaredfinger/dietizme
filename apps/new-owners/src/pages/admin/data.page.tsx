import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  Get_Product_Groups_ListDocument,
  Get_Product_Groups_ListQuery,
  Get_Product_Groups_ListQueryVariables,
} from '@/data-access/generated'
import AdminLayout from '@/components/layouts/admin-layout'
import { useQuery } from '@/data-access/use-query'
import Table from '@/components/ui/table'
import { TableColumn } from '@/components/ui/table'

const ProductGroups: React.FC = () => {
  const { t } = useTranslation()
  const { locale, push } = useRouter()

  const { data, loading, error } = useQuery<
    Get_Product_Groups_ListQuery,
    Get_Product_Groups_ListQueryVariables
  >({
    query: Get_Product_Groups_ListDocument,
    language: locale,
  })

  // Define table columns
  const columns: TableColumn<(typeof data.product_group)[0]>[] = [
    {
      key: 'id',
      header: t('ID'),
    },
    {
      key: 'name',
      header: t('Name'),
      cell: (item) => item.name.en,
    },
    {
      key: 'actions',
      header: t('Actions'),
      cell: (item) => (
        <>
          <button
            onClick={() => push(`/admin/product-groups/${item.id}`)}
            className="text-blue-600 hover:text-blue-800 mr-2"
          >
            {t('View')}
          </button>
          <button
            onClick={() => push(`/admin/product-groups/${item.id}/edit`)}
            className="text-green-600 hover:text-green-800"
          >
            {t('Edit')}
          </button>
        </>
      ),
    },
  ]

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">{t('Product Groups')}</h1>

        <Table
          data={data?.product_group || []}
          columns={columns}
          isLoading={loading}
          error={error ? new Error(t('Error loading product groups')) : null}
          emptyState={
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700">{t('No product groups found')}</p>
            </div>
          }
        />
      </div>
    </AdminLayout>
  )
}

export default ProductGroups
