import fetch from 'cross-fetch'

import { logger } from '@otiuming/utils-logging'

import { clientConfig, getServerEnv } from '../../config'

export default async function handler(req, res) {
  logger.debug({
    eventId: 'HEALTHZ',
    req,
    res,
  })

  const serverConfig = getServerEnv()
  const response = await fetch(serverConfig.NEXT_BACKEND_HEALTHZ)
  const json = await response.json()

  const success = response.status == 200 && json?.organizations?.length >= 0

  if (!success) {
    res
      .status(500)
      .json({
        success: false,
        error: 'Backend is not healthy',
        config: clientConfig,
      })

    logger.warn({
      eventId: 'HEALTHZ',
      message: 'Backend is not healthy',
      json,
    })

    return
  }

  res.status(200).json({ success: true, config: clientConfig })
}
