import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createLogger, logger, Logger, Level } from './logging'

// Mock pino library
vi.mock('pino', () => {
  const childMock = vi.fn().mockReturnValue({
    trace: vi.fn(),
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    fatal: vi.fn(),
    child: vi.fn().mockImplementation(() => childMock())
  })

  return {
    pino: vi.fn().mockReturnValue({
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
      child: childMock
    })
  }
})

describe('Logger', () => {
  let mockPino: any
  
  beforeEach(async () => {
    vi.resetAllMocks()
    mockPino = (await import('pino')).pino()
  })

  describe('createLogger', () => {
    it('should create a logger with specified level', async () => {
      const testLogger = createLogger('error')
      expect(vi.mocked(await import('pino')).pino).toHaveBeenCalledWith({ level: 'error' })
    })

    it('should create a logger with default info level when not specified', async () => {
      const testLogger = createLogger()
      expect(vi.mocked(await import('pino')).pino).toHaveBeenCalledWith({ level: 'info' })
    })
  })

  describe('logger methods', () => {
    const testCases: { method: keyof Logger, level: Level }[] = [
      { method: 'trace', level: 'trace' },
      { method: 'debug', level: 'debug' },
      { method: 'info', level: 'info' },
      { method: 'warn', level: 'warn' },
      { method: 'error', level: 'error' },
      { method: 'fatal', level: 'fatal' },
    ]

    testCases.forEach(({ method, level }) => {
      it(`should call pino.${level} with correct arguments`, () => {
        const testBody = { eventId: 'test-id', foo: 'bar' }
        logger[method](testBody)
        
        expect(mockPino[level]).toHaveBeenCalledWith(
          testBody,
          `eventId: ${testBody.eventId}`
        )
      })
    })
  })

  describe('section', () => {
    it('should create a new logger with child context', () => {
      const sectionBody = { component: 'test-component' }
      const sectionLogger = logger.section(sectionBody)
      
      expect(mockPino.child).toHaveBeenCalledWith(sectionBody)
      
      // Test that the section logger works correctly
      const logBody = { eventId: 'test-section-id', message: 'test message' }
      sectionLogger.info(logBody)
      
      const childLogger = mockPino.child()
      expect(childLogger.info).toHaveBeenCalledWith(
        logBody,
        `eventId: ${logBody.eventId}`
      )
    })
  })
})
