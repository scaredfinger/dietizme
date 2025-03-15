import { useLogger } from '@otiuming/ui-common'

import { Layout } from '@/components/Layout'

import { Props } from './_deps/types'
import {
  BackgroundSection,
  CardType,
  CategorySlider,
  ContactForm,
  ProductHero,
  SendOptions,
  TaxonomyType,
} from '@otiuming/ui-chisfis'
import { useImageMediumUrlFunction } from '@/utils'
import { useApolloClient } from '@apollo/client'
import { ContactDocument } from '@/data-access'
import { useRoutes } from '@/components/use-routes'
import { useTranslation } from '@otiuming/ui-i18n'

export { getStaticPaths, getStaticProps } from './_deps/server'

export function FacilityPage({ facility, organization, venue, facilities }: Props) {
  const logger = useLogger()
  logger.info({
    eventId: 'APP_FACILITY',
    facility,
  })

  const { t } = useTranslation()

  const { facilityDetails } = useRoutes()

  const buildPublicUrl = useImageMediumUrlFunction()

  const apolloClient = useApolloClient()
  const onContactFormSent = (o: SendOptions) =>
    apolloClient.mutate({
      mutation: ContactDocument,
      variables: {
        arg: {
          organization_id: organization.id,
          ...o,
        },
      },
    })

  const facilityCards: TaxonomyType[] =
    facilities
      .map(
        (f) =>
          ({
            id: f.id,
            name: f.name.value,
            desc: f.headline.value,
            thumbnail: buildPublicUrl(f.image_id),
            href: facilityDetails(f),
          }) as TaxonomyType,
      ) || []

  return (
    <Layout
      pageTitle={facility.name.value}
      pageDescription={facility.headline.value}
      organization={organization}
    >
      <div className="nc-HomePage relative overflow-hidden pb-10">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <ProductHero
            image={buildPublicUrl(facility.image_id)}
            name={facility.name.value}
            headline={facility.headline.value}
          ></ProductHero>

          <>
            <CategorySlider
              uniqueClassName="facilities"
              categories={facilityCards}
              heading={t('sections.we-offer.title')}
              subHeading={t('sections.we-offer.subtitle')}
              categoryCardType={CardType.tall}
            />
          </>
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          <ContactForm address={venue.place.name} onSent={onContactFormSent} />
        </div>
      </div>
    </Layout>
  )
}

export default FacilityPage
