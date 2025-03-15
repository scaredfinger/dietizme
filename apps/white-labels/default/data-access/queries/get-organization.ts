import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { Locale } from '@otiuming/ui-i18n'
import { executeQuery, ExecuteQueryError, ExecuteQueryResult } from '@otiuming/utils-graphql'

import { 
  Get_Organization_By_Domain_FullDocument,
  Get_Organization_By_Domain_FullQuery,
  Get_Organization_By_Domain_FullQueryVariables,
  Get_Organization_By_Domain_MinimalDocument,
  Get_Organization_By_Domain_MinimalQuery,
  Get_Organization_By_Domain_MinimalQueryVariables,
} from '../generated'
import { Future, Option, Result } from '@swan-io/boxed';

export function executeQueryGetOrganizationByDomainMinimal(
{ locale, domain, client }: { locale: Locale; domain: string; client: ApolloClient<NormalizedCacheObject> },
): ExecuteQueryResult<Get_Organization_By_Domain_MinimalQuery> {
  return executeQuery<
    Get_Organization_By_Domain_MinimalQuery,
    Get_Organization_By_Domain_MinimalQueryVariables
  >({
    client,
    query: Get_Organization_By_Domain_MinimalDocument,
    variables: {
      domain: domain,
    },
    language: locale,
    alias: 'value',
  })
}

export type Organization_By_Domain_Minimal = Get_Organization_By_Domain_MinimalQuery['matching_organizations'][0]

export function executeQueryGetOrganizationByDomainFull(
  { locale, domain, client }: { locale: Locale; domain: string; client: ApolloClient<NormalizedCacheObject> },
  ): Future<Result<Option<Organization_By_Domain_Full>, ExecuteQueryError>> {
    return executeQuery<
      Get_Organization_By_Domain_FullQuery,
      Get_Organization_By_Domain_FullQueryVariables
    >({
      client,
      query: Get_Organization_By_Domain_FullDocument,
      variables: {
        domain: domain,
      },
      language: locale,
      alias: 'value',
    }).mapOk((data) => {

      if (! data.matching_organizations.length) {
        return Option.None<Organization_By_Domain_Full>()
      }

      return Option.Some(data.matching_organizations[0])
    })
  }
  
  export type Organization_By_Domain_Full = Get_Organization_By_Domain_FullQuery['matching_organizations'][0]