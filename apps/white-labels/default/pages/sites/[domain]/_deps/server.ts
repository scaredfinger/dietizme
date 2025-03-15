import { Option } from '@swan-io/boxed'

import { executeQuery } from '@otiuming/utils-graphql'

import {
  Get_All_SitesDocument,
  Get_All_SitesQuery,
  Get_Home_PageDocument,
  Get_Home_PageQuery,
  Get_Home_PageQueryVariables,
} from '@/data-access'
import { execureOnServerSide } from '@/utils'
import { clientConfig } from '@/config'
import { createGetStaticProps } from '@/utils/handle-get-static-props'

import { Props } from './types'

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'home',
    func: 'getStaticPaths',
  })(async (client) => {
    if (
      !clientConfig.environment ||
      clientConfig.environment !== 'production'
    ) {
      return {
        paths: [],
        fallback: 'blocking',
      }
    }

    const queryResult = await client.query<Get_All_SitesQuery>({
      query: Get_All_SitesDocument,
    })

    const paths =
      queryResult?.data?.organization?.flatMap(
        ({ sites }) =>
          sites?.flatMap(({ domain }) => ({
            params: {
              domain,
            },
          })),
      ) || []

    return {
      paths,
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps<Props>({
  tags: {
    page: 'home',
    func: 'getStaticProps',
  },
})((client, { params, locale }) => {
  const domain = params.domain as string

  const result = executeQuery<Get_Home_PageQuery, Get_Home_PageQueryVariables>({
    client,
    query: Get_Home_PageDocument,
    language: locale,
    alias: 'value',
    variables: {
      domain,
    },
  })

  return result.mapOk((queryResult) =>
    queryResult.matching_organizations.length > 0
      ? Option.Some({
        organization: queryResult.matching_organizations[0],
        domain,
      })
      : Option.None(),
  )
})