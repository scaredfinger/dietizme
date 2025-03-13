import * as _ from 'lodash-es'
import { Result } from '@swan-io/boxed'

import {
  ErrorType,
  OperationRequest,
  OperationResponse,
  ValidatorFunction,
} from './interfaces'
import { constantCase } from '@otiuming/utils-common'

interface LogEvent {
  eventId: string
  [otherFields: string]: unknown
}

interface Logger {
  debug: (e: LogEvent) => void
  error: (e: LogEvent) => void
  warn: (e: LogEvent) => void
}

function renderObject(o: unknown) {
  return JSON.stringify(o, null, 2)
}

type LoadContextFunction<Context, LoadContextVariables> = (
  v: LoadContextVariables,
) => Promise<Context>

type PersistFunction<PersistVariables, Result> = (
  v: PersistVariables,
) => Promise<Result>

type BuildLoadContextVariablesFunction<Body, LoadContextVariables> = (
  request: OperationRequest<Body>,
) => LoadContextVariables

type BuildPersistVariablesFunction<Body, Context, LoadContextVariables> = (
  request: OperationRequest<Body>,
  context: Context,
) => LoadContextVariables

type WhenDoneFunction<Body, Context, PersistVariables> = (
  b: OperationRequest<Body>,
  c: Context,
  v: PersistVariables,
) => Promise<void>

class Execute<
  Body,
  LoadContextVariables,
  Context,
  LoadContext extends LoadContextFunction<Context, LoadContextVariables>,
  PersistVariables,
  Result,
  Sdk,
> {
  private whenDoneActions: WhenDoneFunction<Body, Context, PersistVariables> =
    () => Promise.resolve()

  constructor(
    private buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
    private loadContext: LoadContext,
    private validators: ValidatorFunction<Context, Body>[],
    private buildPersistVariables: BuildPersistVariablesFunction<
      Body,
      Context,
      PersistVariables
    >,
    private persist: PersistFunction<PersistVariables, Result>,
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  private async sdkExecuteWithSafety<Variables, Result>(
    method: (v: Variables) => Promise<Result>,
    variables: Variables,
  ): Promise<Result | Error> {
    const methodName = method.name
    try {
      return await method.bind(this.sdk)(variables)
    } catch (e) {
      const eventId = constantCase(methodName)

      const error = e ? e : Error('Unknown error')

      this.logger.error({ eventId, error })
      return error as Error
    }
  }

  public whenDone(
    ...actions: WhenDoneFunction<Body, Context, PersistVariables>[]
  ): Execute<
    Body,
    LoadContextVariables,
    Context,
    LoadContext,
    PersistVariables,
    Result,
    Sdk
  > {
    this.whenDoneActions = (r, c, v) =>
      Promise.allSettled(
        actions.map((a) => a(r, c, v)),
      ) as unknown as Promise<void>

    return this
  }

  async execute(request: OperationRequest<Body>): OperationResponse<Result> {
    let loadContextVariables: LoadContextVariables
    try {
      loadContextVariables = this.buildLoadContextVariables(request)
    } catch (error) {
      this.logger.error({
        eventId: 'BUILD_LOAD_CONTEXT_VARIABLES_ERROR',
        error,
      })

      return Result.Error({
        errorCode: 500,
        errorType: ErrorType.technical,
        errorMessage: 'Could not create load context variables',
        error,
      })
    }
    const context = await this.sdkExecuteWithSafety<
      LoadContextVariables,
      Context
    >(this.loadContext, loadContextVariables)
    this.logger.debug({
      eventId: 'CONTEXT_LOADED',
      loadContextVariables: renderObject(loadContextVariables),
      context: renderObject(context),
    })
    if (_.isError(context)) {
      this.logger.error({
        eventId: 'CONTEXT_LOAD_ERROR',
        context,
      })

      return Result.Error({
        errorCode: -1,
        errorType: ErrorType.technical,
        errorMessage: 'Could not load context',
        error: context,
      })
    }

    try {
      for (const validator of this.validators) {
        this.logger.debug({
          eventId: 'VALIDATING',
          validator: validator.name,
        })
        const validationResult = validator(context, request)
        if (!validationResult.ok) {
          this.logger.warn({
            eventId: 'VALIDATION_ERROR',
            validator: validator.name,
            errorMessage:
              validationResult.errorMessage || 'Unknown error validation error',
          })

          return Result.Error({
            errorType: ErrorType.business,
            errorCode: 400,
            errorMessage:
              validationResult.errorMessage || 'Unknown error validation error',
          })
        }
      }

      this.logger.debug({
        eventId: 'VALIDATION_OK',
      })
    } catch (e) {
      return Result.Error({
        errorType: ErrorType.technical,
        errorCode: 500,
        errorMessage: 'Validation engine error',
        error: e,
      })
    }

    let persistVariables: PersistVariables

    try {
      persistVariables = this.buildPersistVariables(request, context)

      this.logger.debug({
        eventId: 'PERSIST_VARIABLES',
        persistVariables: renderObject(persistVariables),
      })
    } catch (e) {
      return Result.Error({
        errorType: ErrorType.technical,
        errorCode: 500,
        errorMessage: 'Error building persistVariables',
        error: e,
      })
    }

    const persistResult = await this.sdkExecuteWithSafety(
      this.persist,
      persistVariables,
    )

    this.logger.debug({
      eventId: 'PERSIST_RESULT',
      persistResult,
    })

    if (_.isError(persistResult)) {
      this.logger.error({
        eventId: 'PERSIST_ERROR',
        persistResult,
      })
      return Result.Error({
        errorType: ErrorType.technical,
        errorCode: 500,
        errorMessage: 'There was a problem saving changes.',
        error: persistResult,
      })
    }

    try {
      await this.whenDoneActions(request, context, persistVariables)
    } catch (e) {
      this.logger.warn({
        eventId: 'WHEN_DONE_ACTIONS_ERROR',
        error: e,
      })
    }

    return Result.Ok(persistResult)
  }
}

class Persist<
  Body,
  LoadContextVariables,
  Context,
  LoadContext extends LoadContextFunction<Context, LoadContextVariables>,
  PersistVariables,
  Sdk,
> {
  constructor(
    private buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
    private loadContext: LoadContext,
    private validators: ValidatorFunction<Context, Body>[],
    private buildPersistVariables: BuildPersistVariablesFunction<
      Body,
      Context,
      PersistVariables
    >,
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  persistWith<Result>(
    getPersist: (d: Sdk) => PersistFunction<PersistVariables, Result>,
  ) {
    return new Execute<
      Body,
      LoadContextVariables,
      Context,
      LoadContext,
      PersistVariables,
      Result,
      Sdk
    >(
      this.buildLoadContextVariables,
      this.loadContext,
      this.validators,
      this.buildPersistVariables,
      getPersist(this.sdk),
      this.sdk,
      this.logger,
    )
  }
}

class BuildPersistVariables<
  Body,
  LoadContextVariables,
  Context,
  LoadContext extends LoadContextFunction<Context, LoadContextVariables>,
  Sdk,
> {
  constructor(
    private buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
    private loadContext: LoadContext,
    private validators: ValidatorFunction<Context, Body>[],
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  buildPersistVariablesWith<PersistVariables>(
    buildPersistVariables: BuildPersistVariablesFunction<
      Body,
      Context,
      PersistVariables
    >,
  ) {
    return new Persist(
      this.buildLoadContextVariables,
      this.loadContext,
      this.validators,
      buildPersistVariables,
      this.sdk,
      this.logger,
    )
  }
}

class Validate<
  Body,
  LoadContextVariables,
  Context,
  LoadContext extends LoadContextFunction<Context, LoadContextVariables>,
  Sdk,
> {
  constructor(
    private buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
    private loadContext: LoadContext,
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  validateWith(...validators: ValidatorFunction<Context, Body>[]) {
    return new BuildPersistVariables<
      Body,
      LoadContextVariables,
      Context,
      LoadContext,
      Sdk
    >(
      this.buildLoadContextVariables,
      this.loadContext,
      validators,
      this.sdk,
      this.logger,
    )
  }
}

class LoadContext<Body, LoadContextVariables, Sdk> {
  constructor(
    private buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  loadContextWith<Context>(
    getLoadContext: (d: Sdk) => (v: LoadContextVariables) => Promise<Context>,
  ) {
    return new Validate<
      Body,
      LoadContextVariables,
      Context,
      LoadContextFunction<Context, LoadContextVariables>,
      Sdk
    >(
      this.buildLoadContextVariables,
      getLoadContext(this.sdk),
      this.sdk,
      this.logger,
    )
  }
}

class BuildLoadContextVariables<Body, Sdk> {
  constructor(
    private sdk: Sdk,
    private logger: Logger,
  ) {}

  buildLoadContextVariablesWith<LoadContextVariables>(
    buildLoadContextVariables: BuildLoadContextVariablesFunction<
      Body,
      LoadContextVariables
    >,
  ) {
    return new LoadContext<Body, LoadContextVariables, Sdk>(
      buildLoadContextVariables,
      this.sdk,
      this.logger,
    )
  }
}

export function using<Body, Sdk>(sdk: Sdk, logger: Logger) {
  return new BuildLoadContextVariables<Body, Sdk>(sdk, logger)
}

