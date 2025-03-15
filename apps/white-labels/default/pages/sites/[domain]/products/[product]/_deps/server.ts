import { Option } from '@swan-io/boxed'

import { executeQuery } from '@otiuming/utils-graphql'
import {
  Get_Product_PageDocument,
  Get_Product_PageQuery,
  Get_Product_PageQueryVariables,
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
  const product = params.product as string

  const query = executeQuery<
    Get_Product_PageQuery,
    Get_Product_PageQueryVariables
  >({
    client,
    query: Get_Product_PageDocument,
    language: locale,
    alias: 'value',
    variables: {
      slug: product,
      domain,
    },
  })

  return query.mapOk((queryResult) =>
    queryResult.matching_organizations.length > 0 && queryResult.products[0]
      ? Option.Some({
          organization: queryResult.matching_organizations[0],
          product: queryResult.products[0],
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
