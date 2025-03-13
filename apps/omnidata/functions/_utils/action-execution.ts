import * as _ from 'lodash'
import { camelCase } from 'change-case'
import { Result } from '@swan-io/boxed'

import { Error, ErrorType, OperationResponse, OperationResult } from '@otiuming/biz-builder'

import { logger } from './logger'

export type ErrorWithStatusCode = Error & { statusCode: number }

export type OperationResultWithStatusCode<T = any> = Result<T, ErrorWithStatusCode>

export type OperationResponseWithStatusCode<T = any> = Promise<OperationResultWithStatusCode<T>>

export type ActionResponse = OperationResponseWithStatusCode

export interface ActionRequest<Body> {
  action?: string
  body?: Body
  language?: string
  organization?: string
  user?: string
}

type BizFunction = (request: ActionRequest<unknown>) => OperationResponseWithStatusCode

export async function executeAction(
  request: ActionRequest<unknown>,
  biz: Record<string, BizFunction>
): OperationResponseWithStatusCode {
  const errorResult = validateInput(request)

  return errorResult.match({
    Ok: async () => {
      const camelCasedAction = camelCase(request.action)

      const executeBizAction = biz[camelCasedAction]

      if (executeBizAction) {
        try {
          const actionResult: OperationResult<unknown> = await executeBizAction.bind(biz)(request)

          return actionResult.match({
            Ok: (r) => Result.Ok<any, ErrorWithStatusCode>(r),
            Error: (r) => Result.Error({
              ...r,
              statusCode: 400 <= r.errorCode && r.errorCode <= 499? 400 : 500,
            })
          })
        } catch (error) {
          logger.error({
            eventId: 'UNKNOWN_SERVER_ERROR',
            error
          })
          return Result.Error<any, ErrorWithStatusCode>(buildServerError())
        }
      }

      return buildMissingActionError(request.action)
    },
    Error: (err) => {
      logger.error({
        eventId: 'INVALID_INPUT',
        message: err.toString()
      })
      return Promise.resolve(Result.Error<any, ErrorWithStatusCode>(err))
    }
  })

}

function validateInput(
  request: ActionRequest<unknown>
): Result<unknown, ErrorWithStatusCode> {
  if (!request) {
    return Result.Error( {
      errorType: ErrorType.business,
      errorCode: 400,
      errorMessage: 'Empty request',
      statusCode: 400,
    })
  }

  if (!request.action || !request.body || !request.user) {
    const fields = [
      reportFieldError('action', !!request.action),
      reportFieldError('body', !!request.body),
      reportFieldError('user', !!request.user),
    ]
    return Result.Error({
      errorType: ErrorType.business,
      errorCode: 400,
      errorMessage: `Missing required fields from request: ${fields.join(',')}`,
      statusCode: 400,
    })
  }

  if (!_.isString(request.action) || !_.isString(request.user)) {
    const fields = [
      reportFieldError('action', _.isString(request.action)),
      reportFieldError('user', _.isString(request.user)),
    ]
    return Result.Error({
      errorType: ErrorType.business,
      errorCode: 400,
      errorMessage: `Invalid type for required fields from request: ${fields.join(',')}`,
      statusCode: 400,
    })
  }

  return Result.Ok({})
}

function reportFieldError(field: string, condition: boolean): string {
  return condition ? `${field}: ok` : `${field}: ko`
}

function buildMissingActionError(action: string): OperationResultWithStatusCode {
  return Result.Error({
    errorType: ErrorType.business,
    errorCode: 400,
    errorMessage: `Missing action: ${action}`,
    statusCode: 400
  })
}

function buildServerError(): ErrorWithStatusCode {
  return {
    errorType: ErrorType.technical,
    errorCode: 500,
    errorMessage: 'Unknown server error',
    statusCode: 500,
  }
}
