import { Option } from '@swan-io/boxed'

import { execureOnServerSide } from '@/utils'

import { executeQuery } from '@otiuming/utils-graphql'
import { createGetStaticProps } from '@/utils/handle-get-static-props'

import { Props } from './types'
import { Get_Products_PageDocument, Get_Products_PageQuery, Get_Products_PageQueryVariables } from '@/data-access'

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'products',
    func: 'getStaticPaths',
  })(async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps<Props>({
  tags: {
    page: 'products',
    func: 'getStaticProps',
  },
})((client, { params, locale }) => {
  const domain = params.domain as string

  const result = executeQuery<Get_Products_PageQuery, Get_Products_PageQueryVariables>({
    client,
    query: Get_Products_PageDocument,
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
        products: queryResult.products,
        groups: queryResult.groups,
        domain,
      })
      : Option.None(),
  )
})
