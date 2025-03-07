import { ApolloClient, ApolloError, DocumentNode, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client'

import { UnknownError } from './unknown-error'
import { executeQuery } from './execute-query'

describe('executeQuery function', () => {
  let mockClient: ApolloClient<NormalizedCacheObject>
  let mockQuery: DocumentNode
  let mockVariables: { id: string }
  let language: string
  let alias: string

  beforeEach(() => {
    mockClient = new ApolloClient({
      uri: 'http://test-api.com/graphql',
      cache: new InMemoryCache(),
    })

    mockQuery = gql`
      query TestQuery($id: ID!) {
        test(id: $id) {
          id
          name
        }
      }
    `

    mockVariables = { id: '1' }

    language = 'en'
    alias = 'text'

    jest.mock('./replace-language', () => ({
      replaceLanguage: jest.fn().mockImplementation((query, lang, als) => query),
    }))
  })

  it('works with default arguments too', async () => {
    jest.spyOn(mockClient, 'query').mockResolvedValue({
      data: { test: { id: '1', name: 'Test Name' } },
      loading: false,
      networkStatus: 7,
    })

    const result = await executeQuery({
      query: mockQuery,
      variables: mockVariables,
      client: mockClient,
    })

    result.match({
      Ok: data => {
        expect(data).toEqual({ test: { id: '1', name: 'Test Name' } })
      },
      Error: fail
    })
  
  })

  it('should execute a query and return data on success', async () => {
    jest.spyOn(mockClient, 'query').mockResolvedValue({
      data: { test: { id: '1', name: 'Test Name' } },
      loading: false,
      networkStatus: 7,
    })

    const result = await executeQuery({
      query: mockQuery,
      variables: mockVariables,
      client: mockClient,
      language,
      alias
    })

    result.match({
      Ok: data => {
        expect(data).toEqual({ test: { id: '1', name: 'Test Name' } })
      },
      Error: fail
    })
  })

  it('should handle GraphQL errors correctly', async () => {
    jest.spyOn(mockClient, 'query').mockResolvedValue({
      errors: [{ message: 'An error occurred' } as any],
      data: {},
      loading: false,
      networkStatus: 7,
    })

    const result = await executeQuery({
      query: mockQuery,
      variables: mockVariables,
      client: mockClient,
      language,
      alias
    })

    result.match({
      Ok: fail,
      Error: error => {
        expect(error).toBeInstanceOf(ApolloError)
      }
    })
  })

  it('should handle network or unknown errors correctly', async () => {
    jest.spyOn(mockClient, 'query').mockRejectedValue(new Error('Network error'))

    const result = await executeQuery({
      query: mockQuery,
      variables: mockVariables,
      client: mockClient,
      language,
      alias
    })

    result.match({
      Ok: fail,
      Error: error => {
        expect(error).toBeInstanceOf(UnknownError)
      }
    })
  })

  describe('executeQuery function', () => {
  
    it('should handle non-standard result.error correctly', async () => {
      jest.spyOn(mockClient, 'query').mockResolvedValue({
        error: new ApolloError({ errorMessage: 'Non-standard error' }),
        data: {},
        loading: false,
        networkStatus: 7,
      })
  
      const result = await executeQuery({
        query: mockQuery,
        variables: mockVariables,
        client: mockClient,
        language,
        alias
      })
  
      result.match({
        Ok: fail,
        Error: error => {
          expect(error).toBeInstanceOf(ApolloError)
          expect(error.message).toContain('Non-standard error')
        }
      })
    })
  
    it('should handle query cancellation correctly', async () => {
      const abort = jest.fn()

      jest.spyOn(mockClient, 'query').mockImplementation(({ context }) => {
        return new Promise((resolve) => {  

          function onAbort() {
            abort()
            resolve({ data: {}, loading: false, networkStatus: 7 })
          }
          
          context?.['fetchOptions']?.signal.addEventListener('abort', onAbort)
        })
      })
  
      const future = executeQuery({
        query: mockQuery,
        variables: mockVariables,
        client: mockClient,
        language,
        alias
      })
  
      future.cancel()
      expect(abort).toHaveBeenCalled()
    })
  
  })

})
