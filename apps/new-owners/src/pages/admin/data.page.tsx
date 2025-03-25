import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  Get_Product_Groups_ListDocument,
  Get_Product_Groups_ListQuery,
  Get_Product_Groups_ListQueryVariables,
} from '@/data-access/generated'
import AdminLayout from '@/components/layouts/admin-layout'
import { useQuery } from '@/data-access/use-query'

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

  // const { data, loading, error } = useGet_Product_Groups_ListQuery()

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">{t('Product Groups')}</h1>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert"
          >
            <p>{t('Error loading product groups')}</p>
          </div>
        )}

        {data?.product_group && data.product_group.length > 0 ? (
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                    {t('ID')}
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                    {t('Name')}
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                    {t('Actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.product_group.map((group) => (
                  <tr key={group.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{group.id}</td>
                    <td className="py-3 px-4 font-medium">{group.name.en}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() =>
                          push(`/admin/product-groups/${group.id}`)
                        }
                        className="text-blue-600 hover:text-blue-800 mr-2"
                      >
                        {t('View')}
                      </button>
                      <button
                        onClick={() =>
                          push(`/admin/product-groups/${group.id}/edit`)
                        }
                        className="text-green-600 hover:text-green-800"
                      >
                        {t('Edit')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700">{t('No product groups found')}</p>
            </div>
          )
        )}
      </div>
    </AdminLayout>
  )
}

export default ProductGroups
