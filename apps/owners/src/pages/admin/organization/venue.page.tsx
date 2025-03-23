import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import { sanitizeInput } from '@otiuming/utils-common'

import {
  Get_VenueQuery,
  useGet_Venue_ListQuery,
  useVenue_Main_SaveMutation,
} from '@/data-access'
import {
  Form,
  FormProps,
  JSONSchema,
  MultilanguageRichTextEditor,
  PlaceEditor,
} from '@/components/forms'
import { PageHeaders } from '@/components/page-headers'

type Venue = Get_VenueQuery['venue_by_pk']

const FormWithLoader = withLoader<FormProps<Venue>>(Form)

export default function VenueForm() {
  const { locale, t } = useLocaleAndTranslations()

  const schema = useVenueSchema()

  const { value, loading, saveChanges } = useVenueOmnidata()

  const props = {
    locale,
    loading,
    value,
    schema,
    t,
    onSubmit: saveChanges,
  }

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/venue',
      breadcrumbName: t('pages.venue.title'),
    },
  ]

  return (
    <>
      <PageHeaders
        routes={pageRoutes}
        title={t('pages.venue.title')}
      />
      <FormWithLoader {...props} />
    </>
  )
}

function useLocaleAndTranslations() {
  const { locale } = useRouter()

  const { t } = useTranslation()

  return { locale, t }
}

function useVenueSchema(): JSONSchema {
  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      place: {
        type: 'object',
        title: t('fields.address.title'),
        editor: PlaceEditor,
      },
      description: {
        type: 'object',
        title: t('fields.description.title'),
        description: t('fields.description.description'),
        editor: MultilanguageRichTextEditor,
      },
      good_to_know: {
        type: 'object',
        title: t('fields.good_to_know.title'),
        description: t('fields.good_to_know.description'),
        editor: MultilanguageRichTextEditor,
      },
    },
  }

  return schema
}

function useVenueOmnidata() {
  const organization_id = useCurrentOrganizationId()

  const [saveVenueMutation, mutation] = useVenue_Main_SaveMutation()

  const variables = {
    organization_id,
  }

  const {
    data,
    loading: dataLoading,
    refetch,
  } = useGet_Venue_ListQuery({ variables })

  const value = data?.venue[0]

  function saveChanges(input: Venue) {
    const { id, description, good_to_know, place } = sanitizeInput(input)

    const venue = {
      id,
      description,
      good_to_know,
      place,
    }

    saveVenueMutation({
      variables: {
        venue,
      },
    }).then(() => refetch(variables))
  }

  const loading = dataLoading || !value || mutation.loading

  return {
    value,
    loading,
    saveChanges,
  }
}
