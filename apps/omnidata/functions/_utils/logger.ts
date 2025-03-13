import { config } from './config'
import pino from 'pino'

import { Request as ExpressRequest } from 'express'

import { ActionResponse, ActionRequest } from './action-execution'

interface WithEventId {
  eventId: string
}
type Body = Record<string, unknown>
type LogBody = Body & WithEventId

export interface Logger {
  section(body: Body): Logger
  info(body: LogBody): void
  debug(body: LogBody): void
  warn(body: LogBody): void
  error(body: LogBody): void
}

export class PinoLogger implements Logger {
  constructor(private inner = pino({ level: config.logging.level })) {}

  section(body: Body): Logger {
    return new PinoLogger(this.inner.child(body))
  }
  info(body: LogBody): void {
    this.inner.info(body)
  }
  debug(body: LogBody): void {
    this.inner.debug(body)
  }
  warn(body: LogBody): void {
    this.inner.warn(body)
  }
  error(body: LogBody): void {
    this.inner.error(body)
  }
}

export class ConsoleLogger implements Logger {
  constructor(private inner = console) {}

  section(body: Body): Logger {
    return new ConsoleLogger()
  }
  info(body: LogBody): void {
    this.inner.info(body)
  }
  debug(body: LogBody): void {
    this.inner.debug(body)
  }
  warn(body: LogBody): void {
    this.inner.warn(body)
  }
  error(body: LogBody): void {
    this.inner.error(body)
  }
}

export const logger: Logger = new ConsoleLogger()

export function logRequest(
  requestLogger: Logger,
  req: ExpressRequest<unknown, ActionResponse, ActionRequest<unknown>>
) {
  const {
    path,
    headers,
    hostname,
    query,
    httpVersion,
    body,
    ip,
    ips,
    baseUrl,
    method,
    originalUrl,
    xhr,
    url,
  } = req
  requestLogger.info({
    eventId: 'REQUEST_IN',
    url,
    method,
    hostname,
    httpVersion,
  })
  requestLogger.debug({
    eventId: 'REQUEST_IN',
    path,
    query,
    headers,
    body,
    ip,
    ips,
    baseUrl,
    originalUrl,
    xhr,
  })
}
