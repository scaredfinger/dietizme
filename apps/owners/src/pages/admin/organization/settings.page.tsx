import { useTranslation } from 'react-i18next'

import {
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextAreaEditor,
} from '@/components/forms'
import { sanitizeInput } from '@otiuming/utils-common'
import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'

import {
  useGet_Organization_SettingsQuery,
  useOrganization_Settings_SaveMutation,
  Get_Organization_SettingsQuery,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'
import { DefaultForm } from '@/components/page-containers'

type OrganizationSettings = Get_Organization_SettingsQuery['organization_by_pk']

const OrganizationSettingsForm = Form<OrganizationSettings>

export default function Page() {
  const { t } = useTranslation()
  const { schema } = useSchema()

  const { value, saveChanges, loading } = useOmnidata()

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/settings',
      breadcrumbName: t('pages.settings.title'),
    },
  ]

  return (
    <DefaultForm title={t('pages.settings.title')} loading={loading}>
      <OrganizationSettingsForm
        t={t}
        value={value}
        schema={schema}
        onSubmit={saveChanges}
      />
    </DefaultForm>
    // <>
    //   <PageHeaders
    //     routes={pageRoutes}
    //     title={t('pages.settings.title')}
    //   />
    //   <OrganizationSettingsForm
    //     loading={loading}
    //   />
    // </>
  )
}

function useSchema() {
  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      id: {
        title: t('fields.id.title'),
        type: 'string',
        readOnly: true,
      },
      name: {
        title: t('fields.name.title'),
        type: 'string',
      },
      headline: {
        type: 'object',
        title: t('fields.headline.title'),
        description: t('fields.headline.description'),
        editor: MultilanguageTextAreaEditor,
      },
      email: {
        title: t('fields.email.title'),
        type: 'string',
      },
      phone_number: {
        title: t('fields.phone_number.title'),
        type: 'string',
      },
      socials: {
        type: 'object',
        title: t('fields.links.title'),
        properties: {
          facebook: {
            title: t('fields.facebook.title'),
            type: 'string',
          },
          instagram: {
            title: t('fields.instagram.title'),
            type: 'string',
          },
          twitter: {
            title: t('fields.twitter.title'),
            type: 'string',
          },
          youtube: {
            title: t('fields.youtube.title'),
            type: 'string',
          },
        },
      },
      sites: {
        type: 'array',
        title: t('fields.sites.title'),
        description: t('fields.sites.description'),
        items: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
            },
          },
        },
      },
    },
  }

  return { schema }
}

function useOmnidata() {
  const organization = useCurrentOrganizationId()

  const variables = { id: organization }
  const {
    data,
    loading: dataLoading,
    refetch,
  } = useGet_Organization_SettingsQuery({
    variables,
  })

  const [saveOrganizationMutation, mutation] =
    useOrganization_Settings_SaveMutation()

  function saveChanges(current: OrganizationSettings) {
    const sanitizedOrganization = sanitizeInput(current)

    saveOrganizationMutation({
      variables: {
        organization: sanitizedOrganization,
      },
    }).then(() => refetch(variables))
  }

  const value = data?.organization_by_pk

  const loading = dataLoading || !value || mutation.loading

  return { value, loading, refetch, saveChanges }
}
