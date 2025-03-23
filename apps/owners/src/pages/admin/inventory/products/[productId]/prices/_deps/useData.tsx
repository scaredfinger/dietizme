import { useRouter } from 'next/router'

import { useCurrentOrganizationId } from '@otiuming/ui-common'
import { sanitizeInput } from '@otiuming/utils-common'

import {
  useGet_OrganizationQuery,
  useGet_Product_Single_RateQuery,
  useRate_SaveMutation,
} from '@/data-access'

import { FormRate } from './types'

export function useData() {
  const { query } = useRouter()
  const { productId: maybeProductId } = query
  const product_id: string = maybeProductId as string
  const currentOrganization = useCurrentOrganizationId()

  const { data: organizationData, loading: loadingOrganization } =
    useGet_OrganizationQuery({
      variables: {
        id: currentOrganization,
      },
    })

  const {
    data: rateData,
    loading: loadingRate,
    refetch,
  } = useGet_Product_Single_RateQuery({
    variables: {
      product_id,
    },
  })

  const [saveRate, { loading: savingRate }] = useRate_SaveMutation()

  async function saveRateWithReload(modified: FormRate) {
    const sanitized = sanitizeInput(modified)

    await saveRate({
      variables: {
        rate: {
          ...sanitized,
          price_rules: undefined,
          availability_rules: undefined,
        } as any,
      },
    })

    await refetch({ product_id })
  }

  return {
    organization: organizationData?.organization_by_pk,
    rate: rateData?.rate[0],
    product: rateData?.product,
    loading: loadingOrganization || loadingRate || savingRate,
    refetch,
    productId: product_id,
    saveRateWithReload,
  }
}
