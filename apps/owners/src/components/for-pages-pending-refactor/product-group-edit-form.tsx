import { useMemo } from 'react'

import { withLoader } from '@otiuming/ui-common'

import { PageHeaders } from '@/components/page-headers'
import {
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextEditor,
  buildUploadEditor,
  buildItemSetEditor
} from '@/components/forms'
import { Get_Product_GroupQuery, Get_Product_ListQuery } from '@/data-access'

type Product = Get_Product_ListQuery['product'][0]
type ProductGroup = Get_Product_GroupQuery['product_group_by_pk']

interface Props {
  value?: ProductGroup
  t: (key: string) => string
  loading: boolean
  locale: string
  mode: 'add' | 'edit'
  onSubmit: (value: ProductGroup) => void
  allProducts: Product[]
}

const FormWithLoader = withLoader<FormProps<ProductGroup>>(Form)

export const ProductGroupEditForm: React.FC<Props> = ({
  t,
  value,
  loading,
  mode,
  locale,
  allProducts,
  onSubmit,
}) => {
  const allItems = useMemo(
    () => allProducts?.map(
        (p) =>
          ({
            text: p.name[locale],
            value: p.id,
          })
      ) ?? [],
    [allProducts, locale],
  )

  const pageRoutes = [
    {
      path: '/admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: '/admin/organization/product-groups',
      breadcrumbName: t('pages.product-groups.title'),
    },
    {
      path:
        mode === 'add'
          ? '/admin/organization/product-groups/add'
          : 'admin/organization/product-groups/[productGroupId]',
      breadcrumbName: t(`pages.product-group-${mode}.title`),
    },
  ]

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        hidden: true,
      },
      name: {
        type: 'object',
        editor: MultilanguageTextEditor,
        title: t('fields.name.title'),
      },
      headline: {
        type: 'object',
        editor: MultilanguageTextEditor,
        title: t('fields.headline.title'),
      },
      description: {
        type: 'object',
        editor: MultilanguageTextEditor,
        title: t('fields.description.title'),
      },
      organization_id: {
        type: 'string',
        hidden: true,
      },
      image_id: {
        type: 'string',
        title: t('fields.image.title'),
        editor: buildUploadEditor(`facilities-images-`),
      },
      products: {
        type: 'array',
        editor: buildItemSetEditor(allItems),
        title: t('fields.products.title'),
      },
    },
  }

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t(`pages.product-group-${mode}.title`)}
      />
      <FormWithLoader
        loading={loading}
        value={value}
        schema={schema}
        t={t}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default ProductGroupEditForm