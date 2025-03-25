import { useEffect, useState } from 'react'
import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
  OperationVariables,
} from '@apollo/client/core'

import { executeQuery, ExecuteQueryError } from '@otiuming/utils-graphql'
import { useApolloClient } from '@apollo/client'

export type UseQueryState<T> = {
  loading: boolean
  data: T | null
  error: ExecuteQueryError | null
}

export function useQuery<
  QueryResult,
  Variables extends OperationVariables = OperationVariables,
  CacheShape extends NormalizedCacheObject = NormalizedCacheObject,
>({
  query,
  variables = {} as Variables,
  language = 'en',
  alias = 'value',
  skip = false,
}: {
  query: DocumentNode
  language?: string
  alias?: string
  variables?: Variables
  skip?: boolean
}): UseQueryState<QueryResult> {
    const client = useApolloClient() as ApolloClient<CacheShape>

  const [state, setState] = useState<UseQueryState<QueryResult>>({
    loading: !skip,
    data: null,
    error: null,
  })

  useEffect(() => {
    if (skip) {
      setState({
        loading: false,
        data: null,
        error: null,
      })
      return
    }

    setState((prev) => ({ ...prev, loading: true }))

    const future = executeQuery<QueryResult, Variables, CacheShape>({
      query,
      variables,
      client,
      language,
      alias,
    })

    const unsubscribe = future.onResolve((result) => {
      result.match({
        Ok: (data) => {
          setState({
            loading: false,
            data,
            error: null,
          })
        },
        Error: (error) => {
          setState({
            loading: false,
            data: null,
            error,
          })
        },
      })
    })

    return unsubscribe
  }, [query, JSON.stringify(variables), client, language, alias, skip])

  return state
}
