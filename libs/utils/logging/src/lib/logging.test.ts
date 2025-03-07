import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import { createLogger, logger, Logger, Level } from './logging'

// Mock pino library
vi.mock('pino', () => {
  // Create mock functions to track calls
  const mockTrace = vi.fn();
  const mockDebug = vi.fn();
  const mockInfo = vi.fn();
  const mockWarn = vi.fn();
  const mockError = vi.fn();
  const mockFatal = vi.fn();

  const mockLoggerInstance = {
    trace: mockTrace,
    debug: mockDebug,
    info: mockInfo,
    warn: mockWarn,
    error: mockError,
    fatal: mockFatal,
  };

  const pino = vi.fn()
  pino.mockImplementation(() => {
    return mockLoggerInstance;
  })

  // Define a mock logger instance that we can track
  return {
    pino
  };
});

describe('Logger', () => {
  let pinoMock: any;
  let mockLoggerInstance: any;

  beforeEach(async () => {
    vi.resetAllMocks();
    pinoMock = vi.mocked(await import('pino')).pino;
    mockLoggerInstance = (await import('pino')).pino();
  });

  describe('createLogger', () => {

    beforeEach(async () => {
    })

    it('should create a logger with specified level', async () => {
      const testLogger = createLogger('error');

      // Expect pino to be called with the correct level
      expect(pinoMock).toHaveBeenCalledWith({ level: 'error' });
    });

    it('should create a logger with default info level when not specified', () => {
      const testLogger = createLogger();

      expect(pinoMock).toHaveBeenCalledWith({ level: 'info' });
    });
  });

  // describe('logger methods', () => {
  //   const testCases: { method: keyof Logger, level: Level }[] = [
  //     { method: 'trace', level: 'trace' },
  //     { method: 'debug', level: 'debug' },
  //     { method: 'info', level: 'info' },
  //     { method: 'warn', level: 'warn' },
  //     { method: 'error', level: 'error' },
  //     { method: 'fatal', level: 'fatal' },
  //   ];

  //   testCases.forEach(({ method, level }) => {
  //     it(`should call pino.${level} with correct arguments`, () => {
  //       const testBody = { eventId: 'test-id', foo: 'bar' };
  //       logger[method](testBody);

  //       expect(mockLoggerInstance[level]).toHaveBeenCalledWith(
  //         testBody,
  //         `eventId: ${testBody.eventId}`
  //       );
  //     });
  //   });
  // });

  // describe('section', () => {
  //   it('should create a new logger with child context', () => {
  //     const sectionBody = { component: 'test-component' };
  //     const sectionLogger = logger.section(sectionBody);

  //     expect(mockChild).toHaveBeenCalledWith(sectionBody);

  //     // Test that the section logger works correctly
  //     const logBody = { eventId: 'test-section-id', message: 'test message' };
  //     sectionLogger.info(logBody);

  //     expect(mockInfo).toHaveBeenCalledWith(
  //       logBody,
  //       `eventId: ${logBody.eventId}`
  //     );
  //   });
  // });
});
