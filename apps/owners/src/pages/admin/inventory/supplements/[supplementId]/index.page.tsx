import { Button, Col, Row } from 'antd'
import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/lib/table'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMemo } from 'react'

import { useCurrentOrganizationId, useImageUrlFunction, withLoader } from '@otiuming/ui-common'

import {
  Get_Product_Groups_ListQuery,
  Get_Product_ListQuery,
  Get_SupplementQuery,
  useGet_Product_Groups_ListQuery,
  useGet_Product_ListQuery,
  useGet_SupplementQuery,
  useGet_Supplement_ListQuery,
  useSupplement_SaveMutation,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import { useRoutes } from '@/components/use-routes'
import {
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextEditor,
  buildEnumFields,
  buildItemSetEditor,
  buildUploadEditor,
} from '@/components/forms'
import { Supplement_Save_Input, Supplement_Type_Enum } from '@otiuming/domain-omnidata-types'
import { sanitizeInput } from '@otiuming/utils-common'

type Supplement = Get_SupplementQuery['supplement']
type ProductList = Get_Product_ListQuery['product']

interface Props {
  value: Get_SupplementQuery
  productList: Get_Product_ListQuery
  locale: string
  loading: boolean
  supplementId: string
  organizationId: string
  t: (key: string) => string
  push: (url: string) => void
  save: (input: Supplement_Save_Input) => Promise<unknown>
}

const FormWithLoader = withLoader<FormProps<Supplement | undefined>>(Form)

const Inner: React.FC<Props> = ({
  value,
  productList,
  locale,
  loading,
  supplementId,
  organizationId,
  save,
  t,
}) => {
  const { home, supplementList, supplementEdit } = useRoutes()

  const makePreviewUrlFunction = useImageUrlFunction()
  const makePreviewUrl = (fileId: string) =>
    makePreviewUrlFunction(fileId, 320, 75)

  const allProducts = useMemo(() => {
    if (!productList?.product) return []

    return productList.product.map((p) => ({
      text: p.name[locale],
      value: p.id,
    }))
  }, [locale, productList?.product])

  const pageRoutes = [
    {
      path: home(),
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: supplementList(),
      breadcrumbName: t('pages.supplements.title'),
    },
    {
      path: supplementEdit(supplementId),
      breadcrumbName: t('pages.supplement.title'),
    },
  ]

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      name: {
        type: 'object',
        title: t('fields.name.title'),
        editor: MultilanguageTextEditor,
        properties: {},
      },
      headline: {
        type: 'object',
        title: t('fields.headline.title'),
        editor: MultilanguageTextEditor,
        properties: {},
      },
      description: {
        type: 'object',
        title: t('fields.description.title'),
        editor: MultilanguageTextEditor,
        properties: {},
      },
      type: buildEnumFields({
        title: t('fields.type.title'),
        enumValues: [
          {
            label: t('enums.supplement-type.per-unit.title'),
            value: Supplement_Type_Enum.PerUnit,
          },
          {
            label: t('enums.supplement-type.per-pax.title'),
            value: Supplement_Type_Enum.PerPax,
          },
          {
            label: t('enums.supplement-type.per-pax-per-day.title'),
            value: Supplement_Type_Enum.PerPaxPerDay,
          },
        ]
      }),
      price: {
        type: 'number',
        title: t('fields.price.title'),
      },
      image_id: {
        type: 'string',
        title: t('fields.image.title'),
        editor: buildUploadEditor(`supplement-image-`),
      },
      products: {
        type: 'array',
        editor: buildItemSetEditor(allProducts),
        title: t('fields.products.title'),
      }
    },
  }

  function onSubmit(modified: Supplement) {
    const sanitized = sanitizeInput(modified)

    return save({
      ...sanitized,
      organization_id: organizationId,
    } as any)
  }

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t(`pages.supplement.title`)} />
      <FormWithLoader
        loading={loading}
        value={value?.supplement}
        schema={schema}
        t={t}
        onSubmit={onSubmit}
      />
    </>
  )
}

const InnerWithLoader = withLoader(Inner)

const SupplementEdit: React.FC = () => {
  const { t } = useTranslation()
  const { locale, push } = useRouter()
  const { query } = useRouter()
  const supplementId = query.supplementId as string

  const organization_id = useCurrentOrganizationId()
  const { data: supplementData, loading: loadingSupplement, refetch } = useGet_SupplementQuery({
    variables: {
      id: supplementId,
    },
  })
  const { data: productListData, loading: loadingProductList } = useGet_Product_ListQuery({
      variables: {
        organization_id,
      },
    },
  )

  const [saveFunction, { loading: saving }] = useSupplement_SaveMutation()

  async function save(arg: Supplement_Save_Input) {
    await saveFunction({
      variables: {
        arg
      },
    })

    await refetch()
  }

  return (
    <InnerWithLoader
      value={supplementData}
      productList={productListData}
      locale={locale}
      supplementId={supplementId}
      organizationId={organization_id}
      t={t}
      save={save}
      loading={loadingSupplement || loadingProductList || saving}
      push={push}
    />
  )
}

export default SupplementEdit
