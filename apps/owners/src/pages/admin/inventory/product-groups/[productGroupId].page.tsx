import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import _ from 'lodash'

import { sanitizeInput } from '@otiuming/utils-common'
import { useCurrentOrganizationId } from '@otiuming/ui-common'
import {
  useGet_Product_GroupQuery,
  useGet_Product_Groups_ListQuery,
  useGet_Product_ListQuery,
  useProduct_Group_SaveMutation,
} from '@/data-access'

import { ProductGroupEditForm } from '../../../../components/for-pages-pending-refactor/product-group-edit-form'

export default function Edit() {
  const { t } = useTranslation()
  const { locale, query } = useRouter()

  const productGroupId = query.productGroupId as string

  const organization_id = useCurrentOrganizationId()

  const { refetch: refetchProductGroupList } = useGet_Product_Groups_ListQuery()

  const {
    data: productGroups,
    loading: loadingProductGroup,
    refetch: refetchProductGroup,
  } = useGet_Product_GroupQuery({
    variables: {
      id: productGroupId,
    },
  })

  const { data: products, loading: loadingProducts } = useGet_Product_ListQuery(
    {
      variables: {
        organization_id,
      },
    },
  )

  const [save, { loading: saving }] = useProduct_Group_SaveMutation()

  function onSumit(value: any) {
    const sanitized = sanitizeInput(value)
    save({
      variables: {
        product_group: sanitized,
      },
    }).then(() =>
      Promise.all([refetchProductGroupList(), refetchProductGroup()]),
    )
  }

  return (
    <>
      <ProductGroupEditForm
        t={t}
        locale={locale}
        loading={loadingProductGroup || loadingProducts || saving}
        value={productGroups?.product_group_by_pk}
        mode="edit"
        onSubmit={onSumit}
        allProducts={products?.product || []}
      />
    </>
  )
}
