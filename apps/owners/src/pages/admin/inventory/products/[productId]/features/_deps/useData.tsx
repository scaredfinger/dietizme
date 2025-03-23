import { useRouter } from 'next/router'

import { useCurrentOrganizationId } from '@otiuming/ui-common'

import {
  useGet_Product_Features_PageQuery,
  useSave_Product_FeaturesMutation,
} from '@/data-access'

export function useData() {
  const { query } = useRouter()
  const { productId: maybeProductId } = query
  const product_id: string = maybeProductId as string
  const organization_id = useCurrentOrganizationId()

  const { data, refetch, loading } = useGet_Product_Features_PageQuery({
    variables: {
      organization_id,
      product_id,
    },
  })

  const [save, { loading: saving }] = useSave_Product_FeaturesMutation()

  return {
    ...data,
    product_id,
    organization_id,
    refetch,
    loading,
    save,
    saving,
  }
}
