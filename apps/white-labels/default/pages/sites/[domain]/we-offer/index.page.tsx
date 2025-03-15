import { useLogger } from '@otiuming/ui-common'
import {
  BackgroundSection,
  CardType,
  CategorySlider,
  ContactForm,
  SendOptions,
  TaxonomyType,
} from '@otiuming/ui-chisfis'
import { useTranslation } from '@otiuming/ui-i18n'

import { Layout } from '@/components/Layout'
import { useRoutes } from '@/components/use-routes'
import { useImageMediumUrlFunction } from '@/utils'

import { Props } from './_deps/types'
import { useApolloClient } from '@apollo/client'
import { ContactDocument } from '@/data-access'

export { getStaticPaths, getStaticProps } from './_deps/server'

export function App({ organization }: Props) {
  const logger = useLogger()
  logger.info({
    eventId: 'APP_FACILITIES',
    organization,
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
    organization.venues[0].facilities.map(
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
      pageTitle={t('pages.we-offer.title')}
      pageDescription={t('pages.we-offer.title')}
      organization={organization}
    >
      <div className="nc-HomePage relative overflow-hidden pb-10">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
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
          <ContactForm
            address={organization.venues[0].place.name}
            onSent={onContactFormSent}
          />
        </div>
      </div>
    </Layout>
  )
}

export default App
