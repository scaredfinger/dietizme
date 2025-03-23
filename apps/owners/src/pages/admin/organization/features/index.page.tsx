import { useTranslation } from 'react-i18next'
import { Button, Col, Row } from 'antd'
import { use } from 'react'

import { useCurrentOrganizationId } from '@otiuming/ui-common'

import {
  useActivate_FeaturesMutation,
  useGet_Active_FeaturesQuery,
} from '@/data-access'

import { PageHeaders } from '@/components/page-headers'
import { SimpleContainer } from '@/components/containers/SimpleContainer'
import { useRouter } from 'next/router'

export default function VenueForm() {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const organization_id = useCurrentOrganizationId()

  const {
    data: features,
    loading,
    refetch,
  } = useGet_Active_FeaturesQuery({
    variables: {
      organization_id,
    },
  })

  const [activateFeatures] = useActivate_FeaturesMutation()

  const pageRoutes = [
    {
      path: 'admin',
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: 'admin/organization/features',
      breadcrumbName: t('pages.features.title'),
    },
  ]

  async function activateAccommodation() {
    await activateFeatures({
      variables: {
        organization_id,
        category: 'ACCOMMODATIONS',
      },
    })

    refetch()
  }

  async function activateGeneric() {
    await activateFeatures({
      variables: {
        organization_id,
        category: 'GENERIC_PRODUCTS',
      },
    })

    refetch()
  }

  async function activateActivities() {
    await activateFeatures({
      variables: {
        organization_id,
        category: 'ACTIVITIES',
      },
    })

    refetch()
  }

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.features.title')} />

      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col xs={24} xxl={8}>
            <SimpleContainer>
              <Button
                type="primary"
                className="block"
                onClick={activateAccommodation}
              >
                {t('entities.features.product-types.accommodations.title')}
              </Button>
            </SimpleContainer>
          </Col>
          <Col xs={24} xxl={8}>
            <SimpleContainer>
              <Button type="primary" onClick={activateGeneric}>
                {t('entities.features.product-types.generic-products.title')}
              </Button>
            </SimpleContainer>
          </Col>
          <Col xs={24} xxl={8}>
            <SimpleContainer>
              <Button type="primary" onClick={activateActivities}>
                {t('entities.features.product-types.activities.title')}
              </Button>
            </SimpleContainer>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xxl={24}>
            <SimpleContainer className="mt-10">
              <div className="flex flex-wrap">
                {features?.feature?.map((feature) => (
                  <div
                    className="border-1 rounded-xl dark:border-gray-700 border-gray-500 m-4 p-2"
                    key={feature.id}
                  >
                    {feature.name[locale]}
                  </div>
                ))}
              </div>
            </SimpleContainer>
          </Col>
        </Row>
      </div>
    </>
  )
}
