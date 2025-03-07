/* eslint-disable @typescript-eslint/no-unused-vars */
import * as _ from 'lodash-es'
import { describe, expect, it } from 'vitest'
import { fail } from 'assert'

import { using } from './biz-builder'
import { OperationRequest, ValidationResult } from './interfaces'

describe('bizBuilder', () => {
  const SAMPLE_REQUEST: OperationRequest<Request> = {
    body: {
      requestField: 'request',
    },
    user: 'User-01',
    organization: 'organization-01',
  }

  it('returns ok with result from persist if no errors', async () => {
    const result = await using<Request, typeof sdk>(sdk, logger)
      .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
      .loadContextWith((s) => s.loadContextWithNoError)
      .validateWith(validateWithNoErrors)
      .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
      .persistWith((s) => s.persistWithNoErrors)
      .whenDone(whenDoneWithNoErrors)
      .execute(SAMPLE_REQUEST)

    result.match({
      Ok: (r) => {
        expect(
          r.persistVariables.context.loadContextVariables.request.requestField,
        ).toEqual('request')
        expect(r.persistVariables.request).toEqual(SAMPLE_REQUEST)
      },
      Error: () => fail(),
    })
  })

  it('returns business error if validations returns not ok', async () => {
    const result = await using<Request, typeof sdk>(sdk, logger)
      .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
      .loadContextWith((s) => s.loadContextWithNoError)
      .validateWith(validationNotOk)
      .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
      .persistWith((s) => s.persistWithNoErrors)
      .whenDone(whenDoneWithNoErrors)
      .execute(SAMPLE_REQUEST)

    result.match({
      Ok: () => fail(),
      Error: () => expect(1).toBeTruthy(),
    })
  })

  describe('Unhandled, technical, errors', () => {
    it('returns error if context load variables building fails', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(throwError<LoadContextVariables>)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if context loading fails even before returning a promise', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithErrorBeforeReturingPromise)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if context loading fails with a promies', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if validation fails', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(throwError)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if build persist variables fails', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(throwError<PersistVariables>)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if persist fails', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithError)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('returns error if persist fails event before returning a Promise', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithErrorBeforeReturningPromise)
        .whenDone(whenDoneWithNoErrors)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => fail(),
        Error: () => expect(1).toBeTruthy(),
      })
    })

    it('does not return any error if whenDone fails', async () => {
      const result = await using<Request, typeof sdk>(sdk, logger)
        .buildLoadContextVariablesWith(buildLoadContextVariablesWithNoErrors)
        .loadContextWith((s) => s.loadContextWithNoError)
        .validateWith(validateWithNoErrors)
        .buildPersistVariablesWith(buildPersistVariablesWithNoErrors)
        .persistWith((s) => s.persistWithNoErrors)
        .whenDone(throwError)
        .execute(SAMPLE_REQUEST)

      result.match({
        Ok: () => expect(1).toBeTruthy(),
        Error: () => fail(),
      })
    })
  })
})

interface Request {
  requestField: string
}

interface LoadContextVariables {
  loadContextVariablesField: string
  request: Request
}

interface Context {
  contextField: string
  loadContextVariables: LoadContextVariables
}

interface PersistVariables {
  persistVariablesField: string
  context: Context
  request: OperationRequest<Request>
}

interface PersistResult {
  persisteResultField: string
  persistVariables: PersistVariables
}

const sdk = {
  loadContextWithNoError(
    loadContextVariables: LoadContextVariables,
  ): Promise<Context> {
    return Promise.resolve({
      contextField: 'context',
      loadContextVariables,
    })
  },

  persistWithNoErrors(
    persistVariables: PersistVariables,
  ): Promise<PersistResult> {
    return Promise.resolve({
      persistVariables,
      persisteResultField: 'persistResult',
    })
  },

  loadContextWithError(
    loadContextVariables: LoadContextVariables,
  ): Promise<Context> {
    return Promise.reject()
  },

  loadContextWithErrorBeforeReturingPromise(
    loadContextVariables: LoadContextVariables,
  ): Promise<Context> {
    throw Error()
  },

  persistWithError(persistVariables: PersistVariables): Promise<PersistResult> {
    return Promise.reject()
  },

  persistWithErrorBeforeReturningPromise(
    persistVariables: PersistVariables,
  ): Promise<PersistResult> {
    throw Error()
  },
}

const logger = {
  info: _.noop,
  error: _.noop,
  warn: _.noop,
  debug: _.noop,
}

function whenDoneWithNoErrors(): Promise<void> {
  return Promise.resolve()
}

function buildPersistVariablesWithNoErrors(
  request: OperationRequest<Request>,
  context: Context,
): PersistVariables {
  return {
    context,
    request,
    persistVariablesField: 'persistVariables',
  }
}

function throwError<Result>(...args: unknown[]): Result {
  throw Error('error')
}

function validateWithNoErrors(): ValidationResult {
  return {
    ok: true,
  }
}

function validationNotOk(): ValidationResult {
  return {
    ok: false,
    errorMessage: 'error',
  }
}

function buildLoadContextVariablesWithNoErrors(
  request: OperationRequest<Request>,
): LoadContextVariables {
  return {
    loadContextVariablesField: 'loadContextVariables',
    request: request.body,
  }
}
