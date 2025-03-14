/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncData, Future, Option, Result } from '@swan-io/boxed'

export type AsyncResult<T> = AsyncData<Result<T, Error>>

export const AsyncResult = {
  Ok<T>(value: T) {
    return AsyncData.Done(Result.Ok<T, Error>(value))
  },
  Error<T = any>(error: Error | string) {
    if (typeof error === 'string') {
      error = new Error(error)
    }
    return AsyncData.Done(Result.Error<T, Error>(error))
  },
  NotAsked<T = any>() {
    return AsyncData.NotAsked<Result<T, Error>>()
  },
  Loading<T = any>() {
    return AsyncData.Loading<Result<T, Error>>()
  },
}

export type FutureResult<T> = Future<Result<T, Error>>

export const FutureResult = {
  fromPromise<T>(promise: Promise<T>): FutureResult<T> {
    return Future.fromPromise(promise) as FutureResult<T>
  },
}

export type Optional<T> = Option<T>

export const Optional = {
  Some<T>(value: T) {
    return Option.Some(value)
  },
  None<T>() {
    return Option.None<T>()
  },
  FromNullable<T>(value: T | null | undefined) {
    return Option.fromNullable(value)
  },
  All<T1, T2>(option1: Option<T1>, option2: Option<T2>): Option<[T1, T2]> {
    return Option.all([option1, option2])
  }
}

export type OptionalAsyncResult<T> = AsyncData<Result<Option<T>, Error>>

export const OptionalAsyncResult = {
  Some<T>(value: T) {
    return AsyncData.Done(Result.Ok(Option.Some(value)))
  },
  None() {
    return AsyncData.Done(Result.Ok(Option.None()))
  },
  Error(error: Error | string) {
    return AsyncResult.Error(error)
  },
  NotAsked<T = any>() {
    return AsyncData.NotAsked<Result<Option<T>, Error>>()
  },
  Loading<T = any>() {
    return AsyncData.Loading<Result<Option<T>, Error>>()
  },
  FromNullable<T>(value: T | null | undefined) {
    return AsyncData.Done(Result.Ok(Option.fromNullable(value)))
  }
}
