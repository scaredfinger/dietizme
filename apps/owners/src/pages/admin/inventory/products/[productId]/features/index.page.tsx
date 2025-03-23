import _ from 'lodash'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { withLoader } from '@otiuming/ui-common'
import { sanitizeInput } from '@otiuming/utils-common'

import {
  Form,
  FormProps,
  JSONSchema,
} from '@/components/forms'
import { PageHeaders } from '@/components/page-headers'
import { useRoutes } from '@/components/use-routes'

import { useData } from './_deps/useData'
import { getSchema } from './_deps/getSchema'
import { getFormData } from './_deps/getFormData'

type FormData = ReturnType<typeof getFormData>

const FormWithLoader = withLoader<FormProps<FormData>>(Form)

export default function ProductSingleRateForm() {
  const { t } = useTranslation()

  const { locale } = useRouter()
  const routes = useRoutes()

  const {
    organization_features,
    product_features,
    organization_id,
    product_id,
    loading,
    refetch,
    save,
    saving,
  } = useData()

  const schema: JSONSchema = getSchema(organization_features, t, locale)

  async function onSubmit(modified: FormData) {
    const sanitized = sanitizeInput({
      organization_id,
      product_id,
      features: modified.map(f => ({
        feature_id: f.feature_id,
        value: f.value,
      })),
    })

    await save({
      variables: {
        arg: sanitized
      },    
    })

    refetch()
  }

  const value = getFormData(product_features, organization_features)

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: routes.productList(),
      breadcrumbName: t('pages.products.title'),
    },
    {
      path: routes.productDetails(product_id),
      breadcrumbName: t('pages.product.title'),
    },
    {
      path: routes.productFeatures(product_id),
      breadcrumbName: t('pages.features.title'),
    },
  ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.features.title')}
      />
      <FormWithLoader
        value={value}
        loading={loading || saving}
        schema={schema}
        t={t}
        onSubmit={onSubmit}
      />
    </>
  )
}
