import { NhostClient } from '@nhost/nhost-js'
import { GraphQLClient } from 'graphql-request'
import { env, exit } from 'process'
import { basename } from 'path'

import { getSdk } from './generated'

const { GRAPHQL_SERVER, ADMIN_SECRET, NHOST_DOMAIN, NHOST_REGION } = env

const fullFileName = __filename
const baseFileName = basename(fullFileName)

const shouldRunThisFile = process.argv.filter((a) => a.includes(baseFileName))

if (!shouldRunThisFile) exit(0)

jest.setTimeout(1_000_000)

describe('generate sample organizations', () => {
  let graphql: GraphQLClient
  let sdk: ReturnType<typeof getSdk>
  let nhost: NhostClient
  let getUserSdk: (user: any) => ReturnType<typeof getSdk>

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

    getUserSdk = (user: any) => {
      const userGraphql = new GraphQLClient(GRAPHQL_SERVER, {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
          'x-hasura-user-id': user,
          'x-hasura-role': 'user'
        },
      })

      return getSdk(userGraphql)
    }
  })

  it('test connectivity', async () => {
    console.log('test connectivity', {
      GRAPHQL_SERVER,
      NHOST_DOMAIN,
      NHOST_REGION,
      ADMIN_SECRET
    })
    const result = await sdk.get_organizations()
    expect(result).toBeTruthy()
  })

})
