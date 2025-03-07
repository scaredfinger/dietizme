import { Result } from '@swan-io/boxed'

export interface OperationRequest<Body> {
  user: string
  organization: string
  body: Body
}

export enum ErrorType {
  technical = 'TECHNICAL',
  business = 'BUSINESS',
}

export interface Error {
  errorType: ErrorType
  errorCode: number
  errorMessage: string
  [key: string]: unknown
}

export type OperationResult<T> = Result<T, Error>

export type OperationResponse<T = unknown> = Promise<OperationResult<T>>

export enum Role {
  admin = 'ADMIN',
  editor = 'EDITOR',
  viewer = 'VIEWER',
}

export interface ValidationResult {
  ok: boolean
  errorMessage?: string
}

export type ValidatorFunction<Context, Body> = (
  context: Context,
  request: OperationRequest<Body>,
) => ValidationResult
