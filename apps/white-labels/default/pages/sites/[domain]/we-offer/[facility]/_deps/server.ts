import { Option } from '@swan-io/boxed'

import { executeQuery } from '@otiuming/utils-graphql'
import {
  Get_Facility_PageDocument,
  Get_Facility_PageQuery,
  Get_Facility_PageQueryVariables,
} from '@/data-access'
import { execureOnServerSide } from '@/utils'
import { createGetStaticProps } from '@/utils/handle-get-static-props'

import { Props } from './types'

export const getStaticProps = createGetStaticProps<Props>({
  tags: {
    page: 'product',
    func: 'getStaticProps',
  },
  revalidate: 300,
})((client, { params, locale }) => {
  const domain = params.domain as string
  const facility = params.facility as string

  const query = executeQuery<
    Get_Facility_PageQuery,
    Get_Facility_PageQueryVariables
  >({
    client,
    query: Get_Facility_PageDocument,
    language: locale,
    alias: 'value',
    variables: {
      slug: facility,
      domain,
    },
  })

  return query.mapOk((queryResult) =>
    queryResult.matching_organizations.length > 0 && queryResult.facilities[0]
      ? Option.Some({
          organization: queryResult.matching_organizations[0],
          facility: queryResult.facilities[0],
          venue: queryResult.matching_organizations[0].venues[0],
          facilities: queryResult.matching_organizations[0].venues[0].facilities,
        })
      : Option.None(),
  )
})

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'product',
    func: 'getStaticPaths',
  })(async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })
