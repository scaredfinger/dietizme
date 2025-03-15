import { Option } from '@swan-io/boxed'

import { Locale } from '@otiuming/ui-i18n'

import {
  Get_Confirm_PageDocument,
  Get_Confirm_PageQuery,
  Get_Confirm_PageQueryVariables,
} from '@/data-access'
import { execureOnServerSide } from '@/utils'
import { createGetStaticProps } from '@/utils/handle-get-static-props'
import { executeQuery } from '@otiuming/utils-graphql'

import { Props } from './types'

export const getStaticPaths = () =>
  execureOnServerSide({
    page: 'confirm',
    func: 'getStaticPaths',
  })(async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  })

export const getStaticProps = createGetStaticProps<Props>({
  tags: {
    page: 'confirm',
    func: 'getStaticProps',
  },
  revalidate: 300,
})((client, { params, locale }) => {

  const domain = params.domain as string

  const result = executeQuery<Get_Confirm_PageQuery, Get_Confirm_PageQueryVariables>({
    client,
    query: Get_Confirm_PageDocument,
    language: locale as Locale,
    variables: {
      domain,
    },
  })

  return result.mapOk((ok) =>
    ok.matching_organizations.length > 0
      ? Option.Some({
        organization: ok.matching_organizations[0],
        bookingQuestions: ok.matching_organizations[0].booking_questions,
      })
      : Option.None(),
  )
})
