import { useTranslation } from 'react-i18next'
import {
  Organization_Branding,
  Get_Organization_BrandingQuery,
  useGet_Organization_BrandingQuery,
  useOrganization_Branding_SaveMutation,
} from '@/data-access'
import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import {
  buildUploadEditor,
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextEditor,
} from '@/components/forms'

import { sanitizeInput } from '@otiuming/utils-common'
import { useRouter } from 'next/router'
import { PageHeaders } from '@/components/page-headers'

type Branding = Get_Organization_BrandingQuery['organization_branding'][0]

const FormWithLoader = withLoader<FormProps<Branding>>(Form)

export default function BrandingForm() {
  const organization_id = useCurrentOrganizationId()

  const {
    data,
    loading: dataLoading,
    refetch,
  } = useGet_Organization_BrandingQuery({
    variables: {
      organization_id,
    },
  })

  const [saveOrganizationChanges] = useOrganization_Branding_SaveMutation()

  const { locale } = useRouter()

  const { t } = useTranslation()

  const schema = useSchema()

  function onSubmit(branding: Organization_Branding) {
    const sanitizedBranding = sanitizeInput(branding)
    return saveOrganizationChanges({
      variables: {
        branding: {
          ...sanitizedBranding,
          id: organization_id,
        },
      },
    }).then(() => refetch({ organization_id }))
  }

  const value = data?.organization_branding[0]
  const loading = dataLoading || !value

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: `/${locale}/admin/my-web/branding`,
      breadcrumbName: t('pages.branding.title'),
    },
  ]

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.branding.title')} />
      <FormWithLoader
        value={value}
        onSubmit={onSubmit}
        loading={loading}
        schema={schema}
        t={t}
      />
    </>
  )
}

function useSchema(): JSONSchema {
  const { t } = useTranslation()

  return {
    type: 'object',
    properties: {
      meta_title: {
        type: 'object',
        title: t('fields.meta_title.title'),
        description: t('fields.meta_title.description'),
        editor: MultilanguageTextEditor,
      },
      meta_description: {
        type: 'object',
        title: t('fields.meta_description.title'),
        description: t('fields.meta_description.description'),
        editor: MultilanguageTextEditor,
      },
      favicon_id: {
        type: 'string',
        title: t('fields.favicon.title'),
        description: t('fields.favicon.description'),
        editor: buildUploadEditor('favicon-'),
      },
      logo_id: {
        type: 'string',
        title: t('fields.logo.title'),
        description: t('fields.logo.description'),
        editor: buildUploadEditor('logo-'),
      },
      logo_light_id: {
        type: 'string',
        title: t('fields.logo_light.title'),
        description: t('fields.logo_light.description'),
        editor: buildUploadEditor('logo-light-'),
      },
    },
  }
}
