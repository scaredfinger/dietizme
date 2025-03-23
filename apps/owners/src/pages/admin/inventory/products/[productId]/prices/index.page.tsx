import _ from 'lodash'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { withLoader } from '@otiuming/ui-common'
import {
  Form,
  FormProps,
  JSONSchema,
} from '@/components/forms'
import { sanitizeInput } from '@otiuming/utils-common'
import { PageHeaders } from '@/components/page-headers'

import { getFormData } from './_deps/getFormData'
import { getSchema } from './_deps/getSchema'
import { useData } from './_deps/useData'
import { FormRate } from './_deps/types'

const FormWithLoader = withLoader<FormProps<FormRate>>(Form)

export default function ProductSingleRateForm() {
  const { t } = useTranslation()

  const { locale } = useRouter()

  const {
    rate,
    product,
    organization,
    loading,
    refetch,
    productId,
    saveRateWithReload: saveRate,
  } = useData()

  const schema: JSONSchema = getSchema(rate, product, organization, t)

  function onSubmit(modified: FormRate) {
    const sanitized = sanitizeInput(modified)

    saveRate(sanitized)
  }

  const value = getFormData(rate, organization)

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: `/${locale}/admin/inventory/products`,
      breadcrumbName: t('pages.products.title'),
    },
    {
      path: `/${locale}/admin/inventory/products/${productId}`,
      breadcrumbName: t('pages.product.title'),
    },
    {
      path: `/${locale}/admin/inventory/products/${productId}/prices`,
      breadcrumbName: t('pages.prices.title'),
    },
  ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.prices.title')}
      />
      <FormWithLoader
        value={value}
        loading={loading}
        schema={schema}
        t={t}
        onSubmit={onSubmit}
      />
    </>
  )
}
