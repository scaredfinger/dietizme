import { randomUUID } from 'crypto'
import { Request, Response } from 'express'
import * as Sentry from '@sentry/node'
import { env } from 'process'

import { Error } from '@otiuming/biz-builder'

import { ActionRequest, ErrorWithStatusCode, executeAction } from './_utils/action-execution'
import { BizImplementation } from './_utils/biz/implementation'
import { logger, logRequest } from './_utils/logger'
import { defaultSdk } from './_utils/sdk'

Sentry.init({
  dsn: "https://e1e4680ac69461831c304d1a45f60f95@o4506163896385536.ingest.sentry.io/4506263479386112",
  tracesSampleRate: 1.0,
  sendClientReports: false,
  environment: env.ENVIRONMENT,
})

export default async function (req: Request, res: Response) {
  const requestId = randomUUID()
  const requestLogger = logger.section({ requestId })
  logRequest(requestLogger, req)

  const actionRequest: ActionRequest<unknown> = req.body

  // const transaction = Sentry.startTransaction({
  //   op: 'request',
  //   name: actionRequest.action,
  //   traceId: requestId
  // })
  const biz = new BizImplementation(logger, defaultSdk)
  const result = await executeAction(actionRequest, biz as any)

  res.header['content-type'] = 'application/json'

  result.match({
    Ok: (r) => {
      requestLogger.debug({ eventId: 'REQUEST_OK' })
      res.statusCode = 200
      res.send(r)
    },
    Error: (r) => {
      Sentry.captureException({
        ...r
      }, {
        tags: {
          action: actionRequest.action,
          user: actionRequest.user,
          requestId
        }
      })
      requestLogger.warn({ eventId: 'REQUEST_FAILED', ...r })
      res.statusCode = r.statusCode
      const graphQLError = buildGraphQLError(r)
      res.send(graphQLError)
    },
  })

  // transaction.finish()
}

interface GraphQLError {
  message: string
  extensions: {
    code: string
    error: Error
  }
}

function buildGraphQLError(error: ErrorWithStatusCode): GraphQLError {
  return {
    message: error.errorMessage,
    extensions: {
      code: error.errorCode.toString(),
      error
    },
  }
}
