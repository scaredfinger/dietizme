import { useTranslation } from 'react-i18next'
import _ from 'lodash'
import { useRouter } from 'next/router'

import { withLoader } from '@otiuming/ui-common'
import { sanitizeInput } from '@otiuming/utils-common'

import {
  buildGalleryEditor,
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextAreaEditor,
  MultilanguageTextEditor,
  PlaceEditor,
} from '@/components/forms'
import {
  Get_ProductQuery,
  useGet_ProductQuery,
  useProduct_SaveMutation,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import { Button } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import {
  Rate_Type_Enum,
  Unit_Management_Enum,
} from '@otiuming/domain-omnidata-types'
import { useRoutes } from '@/components/use-routes'

type Product = Get_ProductQuery['product_by_pk']

type FormDataType = Product & { useLocation: boolean } & { business_model: { unit_management: Unit_Management_Enum, time_management: Rate_Type_Enum } }

const FormWithLoader = withLoader<FormProps<FormDataType>>(Form)

export default function ProductForm() {
  const { t } = useTranslation()
  const { query, locale, push } = useRouter()
  const routes = useRoutes()
  const { productId: maybeProductId } = query
  const productId: string = maybeProductId as string
  const id = productId

  const { data, loading, refetch } = useGet_ProductQuery({
    variables: {
      id,
    },
  })

  const [useLocation, setUseLocation] = useState(false)

  const organizationBusinessModel =
    data?.product_by_pk.organization.business_model
  const defaultBusinessModel = {
    time_management: organizationBusinessModel?.rate_type,
    unit_management: organizationBusinessModel?.unit_management,
  }

  const value = {
    ...(data?.product_by_pk ?? {}),
    business_model: data?.product_by_pk.business_model
      ? data?.product_by_pk.business_model
      : defaultBusinessModel,
    useLocation,
  }

  useEffect(() => {
    if (data?.product_by_pk.place) {
      setUseLocation(true)
    }
  }, [data?.product_by_pk.place])

  const schema: JSONSchema = useMemo(
    () => ({
      type: 'object',
      properties: {
        name: {
          type: 'object',
          title: t('fields.name.title'),
          editor: MultilanguageTextEditor,
        },
        published: {
          type: 'boolean',
          title: t('fields.published.title'),
        },
        headline: {
          type: 'object',
          title: t('fields.headline.title'),
          description: t('fields.headline.description'),
          editor: MultilanguageTextAreaEditor,
        },
        description: {
          type: 'object',
          title: t('fields.description.title'),
          description: t('fields.description.description'),
          editor: MultilanguageTextAreaEditor,
        },
        business_model: {
          type: 'object',
          title: t('fields.business-model-with-warning.title'),
          properties: {
            time_management: {
              type: 'string',
              title: t('fields.time-management.title'),
              enum: [
                Rate_Type_Enum.Daily,
                Rate_Type_Enum.TimeSlots,
                Rate_Type_Enum.Taximeter,
              ],
              enumNames: [
                t('enums.time-management.daily.title'),
                t('enums.time-management.time-slots.title'),
                t('enums.time-management.taximeter.title'),
              ],
            },
            unit_management: {
              type: 'string',
              title: t('fields.unit-management.title'),
              enum: [
                Unit_Management_Enum.PerPax,
                Unit_Management_Enum.PerResource,
              ],
              enumNames: [
                t('enums.unit-management.per-pax.title'),
                t('enums.unit-management.per-resource.title'),
              ],
            },
          },
        },
        price_from: {
          type: 'number',
          title: t('fields.price_from.title'),
          description: t('fields.price_from.description'),
          minimum: 0,
        },
        useLocation: {
          type: 'boolean',
          title: t('fields.use-address.title'),
          default: false,
        },
        place: {
          type: 'object',
          title: t('fields.address.title'),
          editor: PlaceEditor,
          hidden: !useLocation,
        },
        gallery: {
          type: 'object',
          title: t('fields.gallery.title'),
          description: t('fields.gallery.description'),
          properties: {
            items: {
              type: 'array',
              editor: buildGalleryEditor(id),
            },
          },
        },
      },
    }),
    [id, t, useLocation],
  )

  const [saveProduct, { loading: saving }] = useProduct_SaveMutation()

  function onSubmit(modified: FormDataType) {
    const sanitized = sanitizeInput(modified)

    if (!sanitized.useLocation) {
      delete sanitized.place
    }

    delete sanitized.useLocation
    
    if (sanitized?.place?.id) {
      delete sanitized.place.id
    }

    delete sanitized.organization

    saveProduct({
      variables: {
        product: {
          ...sanitized
        },
      },
    }).then(() => refetch({ id }))
  }

  function onChange(modified: FormDataType) {
    if (useLocation !== modified.useLocation) {
      setUseLocation(modified.useLocation)
    }
  }

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
      path: `/${locale}/admin/inventory/products/[productId]`,
      breadcrumbName: t('pages.product.title'),
    },
  ]

  const buttons = [
    <>
      <Button
        type="primary"
        className="mr-2"
        onClick={() =>
          push(routes.productPrices(productId))
        }
      >
        {t('pages.prices.title')}
      </Button>
      <Button
        type="primary"
        className='mr-2'
        onClick={() =>
          push(routes.productFeatures(productId))
        }
      >
        Features
      </Button>
    </>,
  ]

  // TODO: There is a type problem here
  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.product.title')}
        buttons={buttons}
      />
      <FormWithLoader
        value={value as any}
        loading={loading || saving}
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        t={t}
      />
    </>
  )
}
