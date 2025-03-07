import { pino } from 'pino'

interface WithEventId {
  eventId: string
}
type Body = Record<string, unknown>
type LogBody = Body & WithEventId

export type Level = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'

export interface Logger {
  section(body: Body): Logger
  trace(body: LogBody): void
  debug(body: LogBody): void
  info(body: LogBody): void
  warn(body: LogBody): void
  error(body: LogBody): void
  fatal(body: LogBody): void
}

class PinoLogger implements Logger {
  constructor(private inner = pino({ level: 'debug' })) {}

  section(body: Body): Logger {
    return new PinoLogger(this.inner.child(body))
  }
  trace(body: LogBody): void {
    this.inner.trace(body, `eventId: ${body.eventId}`)
  }
  debug(body: LogBody): void {
    this.inner.debug(body, `eventId: ${body.eventId}`)
  }
  info(body: LogBody): void {
    this.inner.info(body, `eventId: ${body.eventId}`)
  }
  warn(body: LogBody): void {
    this.inner.warn(body, `eventId: ${body.eventId}`)
  }
  error(body: LogBody): void {
    this.inner.error(body, `eventId: ${body.eventId}`)
  }
  fatal(body: LogBody): void {
    this.inner.fatal(body, `eventId: ${body.eventId}`)
  }
}

export const createLogger = (level: Level = 'info') =>
  new PinoLogger(pino({ level }))

export const logger: Logger = new PinoLogger()
