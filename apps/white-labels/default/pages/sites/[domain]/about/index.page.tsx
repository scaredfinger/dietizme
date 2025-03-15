import { useLogger } from '@otiuming/ui-common'
import { Locale, useTranslation } from '@otiuming/ui-i18n'

import {
  executeQueryGetOrganizationByDomainFull,
  Organization_By_Domain_Full,
} from '@/data-access/queries/get-organization'
import {
  Gallery,
  ProductHero,
  Location,
  SimpleTextBlock,
} from '@/components/legos'
import { Layout } from '@/components/Layout'
import { execureOnServerSide, useImageMediumUrlFunction } from '@/utils'
import { clientConfig } from '@/config'
import { createGetStaticProps } from '@/utils/handle-get-static-props'

interface Props {
  organization: Organization_By_Domain_Full
  domain: string
}

export function About({ organization }: Props) {
  const { t } = useTranslation()

  const buildPublicUrl = useImageMediumUrlFunction()

  const logger = useLogger()
  logger.debug({
    eventId: 'APP_ABOUT',
  })

  const branding = organization?.branding

  const imageUrls = organization?.venues[0]?.gallery?.items?.map((item) =>
    buildPublicUrl(item.file_id),
  )

  const venue = organization.venues[0]
  const venue_place = venue.place
  const venue_description = venue.description.value
  const venue_goodToKnow = venue.good_to_know.value

  return (
    <Layout
      pageTitle="About"
      pageDescription={branding?.meta_description?.value}
      organization={organization}
    >
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <ProductHero
            headline={organization.headline.value}
            name={organization.name}
            image={buildPublicUrl(
              organization.venues[0].gallery.items[0].file_id,
            )}
          />

          <SimpleTextBlock
            title={t('sections.description.title')}
            description={venue_description}
          />

          <Gallery urls={imageUrls} />

          <SimpleTextBlock
            title={t('sections.good-to-know.title')}
            description={venue_goodToKnow}
          />

          <Location
            address={venue_place.name}
            latitude={venue_place.latitude}
            longitude={venue_place.longitude}
            mapboxToken={clientConfig.maps.mapboxToken}
          />
        </div>
      </div>
    </Layout>
  )
}

export default About

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'about',
    func: 'getStaticPaths',
  })(async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps({
  tags: {
    page: 'about',
    func: 'getStaticProps',
  },
})((client, { params, locale }) => {
  const domain = params.domain as string

  const result = executeQueryGetOrganizationByDomainFull({
    locale: locale as Locale,
    domain,
    client,
  })

  return result.mapOk((maybeOrganization) =>
    maybeOrganization.map((organization) => ({
      organization,
      domain,
    })),
  )
})
