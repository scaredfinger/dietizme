import {
  Get_Venue_UspsQuery,
  useGet_Venue_UspsQuery,
  useVenue_Usps_SaveMutation,
} from '@/data-access'
import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import {
  buildUploadEditor,
  Form,
  FormProps,
  JSONSchema,
  MultilanguageTextAreaEditor,
  MultilanguageTextEditor,
} from '@/components/forms'
import { sanitizeInput } from '@otiuming/utils-common'
import { Venue_Usps_Save_Input } from '@otiuming/domain-omnidata-types'
import { useTranslation } from 'react-i18next'
import { PageHeaders } from '@/components/page-headers'

type Usps = Get_Venue_UspsQuery['venue'][0]['usps']

const FormWithLoader = withLoader<FormProps<Usps>>(Form)

export default function VenueUspsForm() {
  const organization_id = useCurrentOrganizationId()

  const variables = {
    organization_id,
  }
  const {
    data,
    loading: loadingGallery,
    refetch,
  } = useGet_Venue_UspsQuery({
    variables,
  })

  const id = data?.venue[0]?.id

  const [saveVenueUsps] = useVenue_Usps_SaveMutation()

  function onSubmit(sourceUsps: Usps) {
    const sanitizedSourceUsps = sanitizeInput(sourceUsps)
    const image_id = sourceUsps.image_id
    const lines = sanitizedSourceUsps?.lines.map(({ name, headline }) => ({
      name,
      headline,
    }))

    const arg: Venue_Usps_Save_Input = {
      id,
      image_id,
      lines,
    }

    saveVenueUsps({ variables: { arg } }).then(() => refetch(variables))
  }

  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      image_id: {
        type: 'string',
        editor: buildUploadEditor(`venues-${id}-`),
      },
      lines: {
        type: 'array',
        maxItems: 3,
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'object',
              editor: MultilanguageTextEditor,
            },
            headline: {
              type: 'object',
              editor: MultilanguageTextAreaEditor,
            },
          },
        },
      },
    },
  }

  const value = data?.venue[0]?.usps
  const loading = loadingGallery || !value

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/highlights',
      breadcrumbName: t('pages.highlights.title'),
    },
  ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.facilities.title')}
      />
      <FormWithLoader
        value={value}
        loading={loading}
        t={t}
        schema={schema}
        onSubmit={onSubmit}
      />
    </>
  )
}
