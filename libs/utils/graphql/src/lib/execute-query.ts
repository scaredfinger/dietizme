import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
  OperationVariables,
  ApolloError,
} from '@apollo/client/core'
import { Result, Future } from '@swan-io/boxed'

import { UnknownError } from './unknown-error'
import { replaceLanguage as replaceLanguage } from './replace-language'

export type ExecuteQueryError = ApolloError | UnknownError

export type ExecuteQueryResult<QueryResult> = Future<
  Result<QueryResult, ExecuteQueryError>
>

export function executeQuery<
  QueryResult,
  Variables extends OperationVariables = OperationVariables,
  CacheShape extends NormalizedCacheObject = NormalizedCacheObject,
>({
  query,
  variables,
  client,
  language = 'en',
  alias = 'value',
}: {
  query: DocumentNode
  language?: string
  alias?: string
  variables: Variables
  client: ApolloClient<CacheShape>
}): Future<Result<QueryResult, ExecuteQueryError>> {
  return Future.make((resolve) => {
    const abortController = new AbortController()

    const replacedQuery = replaceLanguage(query, language, alias)

    client
      .query<QueryResult, Variables>({
        query: replacedQuery,
        variables,
        context: {
          fetchOptions: {
            signal: abortController.signal,
          },
        },
      })
      .then((result) => {
        if (result.errors?.length) {
          resolve(
            Result.Error<QueryResult, ExecuteQueryError>(
              new ApolloError({ graphQLErrors: result.errors }),
            ),
          )
        }

        if (result.error) {
          resolve(Result.Error<QueryResult, ExecuteQueryError>(result.error))
        }

        resolve(Result.Ok<QueryResult, ExecuteQueryError>(result.data))
      })
      .catch((error) => {
        resolve(
          Result.Error<QueryResult, ExecuteQueryError>(new UnknownError(error)),
        )
      })

    return () => abortController.abort()
  })
}
