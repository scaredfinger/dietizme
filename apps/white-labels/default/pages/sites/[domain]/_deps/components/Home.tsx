import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useApolloClient } from '@apollo/client'

import { useTranslation } from '@otiuming/ui-i18n'
import {
  Gallery,
  CategorySlider,
  Highlights,
  ContactForm,
  TaxonomyType,
  CardsGrid,
  Location,
  SimpleTextBlock,
  SendOptions,
  BackgroundSection,
  FullPictureHero,
  CardInfo,
  CardType,
} from '@/components/legos'

import { ContactDocument, Media_Gallery, Organization } from '@/data-access'
import { clientConfig } from '@/config'
import { useImageLargeUrlFunction, useImageMediumUrlFunction } from '@/utils'
import { useRoutes } from '@/components/use-routes'
import { Get_Home_Page_Organization } from './Home.types'

const ProductList: any = dynamic(
  () => import('@/components/blocks/product-list/ProductList'),
  {
    loading: () => <p>Loading...</p>,
  },
)

interface Props {
  organization: Get_Home_Page_Organization
  domain: string
}

export const HomePage: React.FC<Props> = ({ organization }) => {
  const { push, locale } = useRouter()
  const makeLarge = useImageLargeUrlFunction()
  const makeMedium = useImageMediumUrlFunction()

  const { t } = useTranslation()

  const { productList, productGroupDetails, facilityDetails } = useRoutes()

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

  if (!organization || !organization.home) {
    return <div>Organization not found</div>
  }

  const organization_id = organization.id

  const home = organization?.home[0]?.value || {}
  const heroImage = home?.hero_image_id

  console.log('DEBUG', home)

  const dataGalleries = organization?.venues?.map((v) => v.gallery)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
  const mediaGallery: Media_Gallery = dataGalleries
    ? (dataGalleries[0] as unknown as Media_Gallery)
    : ({} as unknown as Media_Gallery)

  const heroImageUrl = heroImage ? makeLarge(heroImage) : undefined

  const imageUrls = mediaGallery.items.map((item) => makeLarge(item.file_id))

  const usps = organization.venues[0]?.usps
  const usps_lines =
    usps?.lines.map((l) => ({
      title: l.name.value || '',
      description: l.headline.value || '',
    })) || []

  const facilities: TaxonomyType[] =
    organization.venues
      .flatMap((v) => v.facilities)
      .map(
        (f) =>
          ({
            id: f.id,
            name: f.name.value,
            desc: f.headline.value,
            thumbnail: makeMedium(f.image_id),
            href: facilityDetails(f),
          }) as TaxonomyType,
      ) || []

  const productGroups: TaxonomyType[] = organization.product_groups.map(
    (group) => {
      return {
        id: group.id,
        name: group.name.value,
        desc: `${group.stats.aggregate.count} ${t(
          'entities.products.title',
        )}`,
        thumbnail: makeMedium(group.image_id),
        href: productGroupDetails(group),
      } as TaxonomyType
    },
  )

  const { products, product_groups } = organization

  const venue_description = organization.venues[0].description.value

  const venue_goodToKnow = organization.venues[0].good_to_know.value

  const venue_place = organization.venues[0].place

  const heroTitle = home.title ? home.title[locale] : undefined

  const heroSubtitle = home.subtitle ? home.subtitle[locale] : undefined

  return (
    <>
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <FullPictureHero
            image={heroImageUrl}
            title={heroTitle}
            subtitle={heroSubtitle}
            onClick={() => push(productList())}
            // className="flex flex-col lg:flex-row pt-10 lg:pt-16 lg:pb-16"
          />

          <>
            <Highlights
              points={usps_lines}
              image={makeLarge(usps?.image_id)}
              title={t('sections.highlights.title')}
              subtitle={t('sections.highlights.description')}
            />
          </>

          <>
            {productGroups.length > 0 && (
              <div className="relative p-16">
                <BackgroundSection />
                <CategorySlider
                  uniqueClassName="product-groups"
                  categories={productGroups}
                  heading={t('sections.our-selection.title')}
                  subHeading={t('sections.our-selection.subtitle')}
                  categoryCardType={CardType.medium}
                />
              </div>
            )}
          </>

          <>
            <Gallery urls={imageUrls} />
          </>

          <>
            <CategorySlider
              uniqueClassName="facilities"
              categories={facilities}
              heading={t('sections.we-offer.title')}
              subHeading={t('sections.we-offer.subtitle')}
              categoryCardType={CardType.tall}
            />
          </>
        </div>
      </div>

      <ProductList
        organization={organization}
        products={products}
        groups={product_groups}
        t={t}
        push={push}
        makeImageUrl={makeMedium}
      />

      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <>
            <SimpleTextBlock
              title={t('sections.good-to-know.title')}
              description={venue_goodToKnow}
            />
          </>

          <>
            <SimpleTextBlock
              title={t('sections.description.title')}
              description={venue_description}
            />
          </>

          {/* <>
          <ListingStayDetailPage
            description={venue_description}
            goodToKnow={venue_goodToKnow}
            />
        </> */}

          <>
            <Location
              address={venue_place.name}
              latitude={venue_place.latitude}
              longitude={venue_place.longitude}
              mapboxToken={clientConfig.maps.mapboxToken}
            />
          </>

          <div className="relative py-16">
            <BackgroundSection />
            <ContactForm
              address={venue_place.name}
              onSent={onContactFormSent}
            />
          </div>

          {/*
           */}
        </div>
      </div>
    </>
  )
}

export default HomePage