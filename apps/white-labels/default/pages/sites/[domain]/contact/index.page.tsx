import { useApolloClient } from '@apollo/client'

import { useLogger } from '@otiuming/ui-common'
import {
  BackgroundSection,
  ContactForm,
  SendOptions,
} from '../../../../components/legos'

import { ContactDocument } from '../../../../data-access'
import { Layout } from '../../../../components/Layout'
import { execureOnServerSide } from '../../../../utils'
import { createGetStaticProps } from '@/utils/handle-get-static-props'
import {
  Organization_By_Domain_Full,
  executeQueryGetOrganizationByDomainFull,
} from '@/data-access/queries/get-organization'
import { Locale } from '@otiuming/ui-i18n'

interface Props {
  organization: Organization_By_Domain_Full
}

export function App({ organization }: Props) {
  const logger = useLogger()
  logger.debug({
    eventId: 'APP_HOME',
  })
  const organization_id = organization.id

  const branding = organization?.branding

  const venue_place = organization.venues[0].place

  const apolloClient = useApolloClient()
  const onContactFormSent = (o: SendOptions) =>
    apolloClient.mutate({
      mutation: ContactDocument,
      variables: {
        arg: {
          organization_id,
          ...o,
        },
      },
    })

  return (
    <Layout
      pageTitle="Contact"
      pageDescription={branding?.meta_description?.value}
      organization={organization}
    >
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <div className="relative py-16">
            <BackgroundSection />
            <ContactForm
              address={venue_place.name}
              onSent={onContactFormSent}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'contact',
    func: 'getStaticPaths',
  })(async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps({
  tags: {
    page: 'facilities',
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
