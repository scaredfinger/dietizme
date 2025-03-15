import { Option } from '@swan-io/boxed'

import { executeQuery } from '@otiuming/utils-graphql'

import {
  Get_Product_Group_PageDocument,
  Get_Product_Group_PageQuery,
  Get_Product_Group_PageQueryVariables,
} from '@/data-access'
import { execureOnServerSide } from '@/utils'
import { createGetStaticProps } from '@/utils/handle-get-static-props'
import { Props } from './types'

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'home',
    func: 'getStaticPaths',
  })(async (client) => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps<Props>({
  tags: {
    page: 'product-group',
    func: 'getStaticProps',
  },
})((client, { params, locale }) => {
  const domain = params.domain as string
  const slug = params.productGroup as string

  const query = executeQuery<Get_Product_Group_PageQuery, Get_Product_Group_PageQueryVariables>({
    client,
    query: Get_Product_Group_PageDocument,
    language: locale,
    alias: 'value',
    variables: {
      domain,
      slug,
    },
  })

  return query.mapOk((ok) => 
    ok.matching_organizations.length > 0
    && ok.product_group
      ? Option.Some({
        organization: ok.matching_organizations[0],
        productGroup: ok.product_group[0],
        domain,
        locale
      })
      : Option.None(),
  )
})
