import { GraphQLClient } from 'graphql-request'

import { config } from './config'

import { getSdk } from './generated'

export * from './generated'

export const defaultGraphQLClient = new GraphQLClient(
  config.omnidataBackend, {
    headers: {
      'x-hasura-admin-secret': config.omnidataAdminSecret,
      'x-hasura-role': 'admin'
    },
  })

export const defaultSdk = getSdk(defaultGraphQLClient)
