import { Organization_Insert_Input } from '../../../generated'
import { logger } from '../../../logger'

import fetch from 'cross-fetch'
import { config } from '../../../config';

export async function createMissingDomains(
  request: unknown,
  context: unknown,
  variables: { organization_id: any; organization: Organization_Insert_Input }
): Promise<void> {
  const url = `https://api.vercel.com/v9/projects/${config.vercelProjectId}/domains`
  logger.debug({ eventId: 'CREATE_ORGANIZATION_SITES', variables, url })

  const sites = variables.organization.sites.data.map((s) => s.url)
  for (const site of sites) {
    logger.debug({ eventId: 'VERCEL_DOMAIN_CREATE', site })
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.vercelApiToken}`,
        },
        body: JSON.stringify({ name: site }),
      })
      if (!response.ok && response.status !== 409) {
        const responseBody = await response.json()
        logger.warn({ eventId: 'VERCEL_DOMAIN_CREATE', responseBody })
      }
    } catch (error) {
      logger.error({ eventId: 'VERCEL_DOMAIN_CREATE', error })
    }
  }
}
