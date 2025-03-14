import { NhostClient } from '@nhost/nhost-js'
import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../generated'
import {
  createSeedData
} from '../common-operations'

// import { mallorcaCyclingTours } from './mallorca-cycling-tours'
// import { ricciRetreat } from './ricci-retreat'
import { handy4you } from './handy4you'

// import {config} from 'dotenv'
import { describe } from 'vitest'

import { getValidatedEnv } from '../env'
import { beforeAll, it, expect } from 'vitest'

// config({
//   path: '/workspaces/core/.env.staging'
// })

const { GRAPHQL_SERVER, ADMIN_SECRET, NHOST_DOMAIN, NHOST_REGION, VITEST_VSCODE } = getValidatedEnv()

if (VITEST_VSCODE)
describe('generate sample organizations', () => {
  let graphql: GraphQLClient
  let sdk: ReturnType<typeof getSdk>
  let nhost: NhostClient
  let getUserSdk: (user: unknown) => ReturnType<typeof getSdk>

  beforeAll(() => {
    graphql = new GraphQLClient(GRAPHQL_SERVER, {
      headers: {
        'x-hasura-admin-secret': ADMIN_SECRET,
      },
    })

    nhost = new NhostClient({
      subdomain: NHOST_DOMAIN,
      region: NHOST_REGION,
      adminSecret: ADMIN_SECRET
    })

    sdk = getSdk(graphql)

    getUserSdk = (user: unknown) => {
      const userGraphql = new GraphQLClient(GRAPHQL_SERVER, {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
          'x-hasura-user-id': `${user}`,
          'x-hasura-role': 'user'
        },
      })

      return getSdk(userGraphql)
    }
  })

  it('test connectivity', async () => {
    const result = await sdk.get_organizations()
    expect(result).toBeTruthy()
  })

  it('create default data', async () => {

    const sampleOrganizations = [
      // mallorcaCyclingTours,
      // ricciRetreat,
      handy4you
    ]

    for (const org of sampleOrganizations) {
      nhost.auth.signOut({ all: true })
      await createSeedData(
        nhost,
        sdk,
        graphql,
        getUserSdk,
        org)
    }

  })

  it('deletes old organization', async () => {
    const promises = [
    ]
      .map((organizationId) =>
        sdk.cleanup({
          organization_id: organizationId
        })
      )

    await Promise.all(promises)
  })
})
