import {
  useGet_Venue_GalleryQuery,
  Get_Venue_GalleryQuery,
  useVenue_Gallery_SaveMutation,
} from '@/data-access'
import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import {
  buildGalleryEditor,
  Form,
  FormProps,
  JSONSchema,
} from '@/components/forms'
import { sanitizeInput } from '@otiuming/utils-common'
import { useTranslation } from 'react-i18next'
import { PageHeaders } from '@/components/page-headers'

type Gallery = Get_Venue_GalleryQuery['venue'][0]['gallery']

const FormWithLoader = withLoader<FormProps<Gallery>>(Form)

export default function VenueGalleryForm() {
  const organization_id = useCurrentOrganizationId()

  const variables = {
    organization_id,
  }
  const {
    data,
    loading: loadingGallery,
    refetch,
  } = useGet_Venue_GalleryQuery({
    variables,
  })

  const id = data?.venue[0]?.id

  const [saveVenueGallery] = useVenue_Gallery_SaveMutation()

  function onSubmit(g: Gallery) {
    const gallery = sanitizeInput(g)

    const arg = {
      id,
      gallery,
    }

    saveVenueGallery({ variables: { arg } }).then(() => refetch(variables))
  }

  const { t } = useTranslation()

  const schema: JSONSchema = {
    type: 'object',
    properties: {
      // name: {
      //   type: 'object',
      //   editor: MultilanguageTextEditor,
      // },
      // headline: {
      //   type: 'object',
      //   editor: MultilanguageTextAreaEditor,
      // },
      items: {
        type: 'array',
        editor: buildGalleryEditor(`venues/${id}/gallery-`),
      },
    },
  }

  const value = data?.venue[0]?.gallery
  const loading = loadingGallery || !value

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/gallery',
      breadcrumbName: t('pages.gallery.title'),
    },
  ]

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.gallery.title')} />
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
