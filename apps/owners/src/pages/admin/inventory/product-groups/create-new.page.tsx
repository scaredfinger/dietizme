import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'
import { useMemo } from 'react'

import { useCurrentOrganizationId } from '@otiuming/ui-common'
import {
  Product_Group_Save_Input,
  useGet_Product_Groups_ListQuery,
  useGet_Product_ListQuery,
  useProduct_Group_SaveMutation,
} from '@/data-access'
import { sanitizeInput } from '@otiuming/utils-common'

import { ProductGroupEditForm } from '../../../../components/for-pages-pending-refactor/product-group-edit-form'

export default function CreateNew() {
  const { t } = useTranslation()
  const { locale, push } = useRouter()

  const organization_id = useCurrentOrganizationId()

  const { refetch } = useGet_Product_Groups_ListQuery()

  const { data: products, loading: loadingProducts } = useGet_Product_ListQuery(
    {
      variables: {
        organization_id,
      },
    },
  )

  const [save] = useProduct_Group_SaveMutation()

  const value = useMemo(
    () => ({
      id: v4(),
      name: {},
      headline: {},
      description: {},
      organization_id: organization_id,
      products: [],
    }),
    [organization_id],
  )

  function onSumit(value: Product_Group_Save_Input) {
    const sanitized = sanitizeInput(value)
    save({
      variables: {
        product_group: sanitized,
      },
    }).then(() => {
      refetch()
      push(`/${locale}/admin/inventory/product-groups/${value.id}`)
    })
  }

  return (
    <ProductGroupEditForm
      t={t}
      locale={locale}
      loading={loadingProducts}
      value={value}
      mode="add"
      onSubmit={onSumit}
      allProducts={products?.product ?? []}
    />
  )
}
