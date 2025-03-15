import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { concatPagination } from '@apollo/client/utilities'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

function createApolloClient(url: string) {
  const httpLink = new HttpLink({
    uri: url,
    credentials: 'same-origin',
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(
  name: string,
  url: string,
  initialState?: NormalizedCacheObject,
) {
  const _apolloClient = createApolloClient(url)

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  return _apolloClient
}

export function getApolloState(
  name: string,
  client: ApolloClient<NormalizedCacheObject>,
) {
  return {
    [name]: client.cache.extract(),
  }
}
