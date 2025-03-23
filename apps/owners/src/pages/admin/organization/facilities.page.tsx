import { useTranslation } from 'react-i18next'

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

import {
  Get_Venue_FacilitiesQuery,
  useGet_Venue_FacilitiesQuery,
  useVenue_Facilities_SaveMutation,
} from '@/data-access'
import { PageHeaders } from '@/components/page-headers'

type Facilities = Get_Venue_FacilitiesQuery['venue'][0]['facilities']

const FormWithLoader = withLoader<FormProps<Facilities>>(Form)

export default function VenueFacilitiesForm() {
  const organization_id = useCurrentOrganizationId()

  const variables = {
    organization_id,
  }
  const {
    data,
    loading: loadingFacilities,
    refetch,
  } = useGet_Venue_FacilitiesQuery({
    variables,
  })

  const id = data?.venue[0]?.id

  const [saveFacilities] = useVenue_Facilities_SaveMutation()

  function onSubmit(sourceFacilities: Facilities) {
    const items = sanitizeInput(sourceFacilities).map(
      ({ image_id, name, headline }) => ({
        image_id,
        name,
        headline,
      }),
    )
    const facilities = {
      id,
      items,
    }

    saveFacilities({ variables: { facilities } }).then(() => refetch(variables))
  }

  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        image_id: {
          type: 'string',
          editor: buildUploadEditor(`${id}-facilities-images-`),
        },
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
  }

  const value = data?.venue[0]?.facilities
  const loading = loadingFacilities || !value

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/facilities',
      breadcrumbName: t('pages.facilities.title'),
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
