/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from 'vitest'

import { AsyncStub, createAsyncStubs } from './index'

describe('Stub', () => {
  it('is defined', () => {
    expect(AsyncStub).toBeDefined()
  })

  let sut: AsyncStub<any, any>

  beforeEach(() => {
    sut = new AsyncStub()
  })

  it('can be created', () => {
    expect(sut).toBeDefined()
  })

  describe('with no arguments', () => {
    let itHasBeenSignaled: boolean
    let untilSignaledPromise: Promise<any>

    beforeEach(() => {
      itHasBeenSignaled = false
      untilSignaledPromise = sut
        .untilSignaled()
        .then(() => (itHasBeenSignaled = true))
    })

    it('does not signal', () => {
      expect(itHasBeenSignaled).toBe(false)
    })

    describe('when signaled with `null`', () => {
      beforeEach(() => {
        sut.signal(null)
      })

      it('signals', async () => {
        await untilSignaledPromise
        expect(itHasBeenSignaled).toBe(true)
      })
    })
  })

  describe('when signaled before getting the promise', () => {
    describe('with argument', () => {
      beforeEach(() => {
        sut.signal('foo', 1, 2)
      })

      it('signals', async () => {
        expect(1).toBeTruthy()
      })
    })

    describe('when signaled with error', () => {
      beforeEach(() => {
        sut.signalError(new Error('foo'), 1, 3)
      })

      it('signals', async () => {
        expect(1).toBeTruthy()
      })
    })
  })

  describe('can create using the factory', () => {
    it('returns a stub', () => {
      const stub = createAsyncStubs()

      expect(stub).toBeDefined()
    })
  })

  describe('with arguments', () => {
    let barHasBeenSignaled: boolean
    let untilBarSignaledPromise: Promise<any>

    let fooHasBeenSignaled: boolean
    let untilFooSignaledPromise: Promise<any>

    beforeEach(() => {
      barHasBeenSignaled = false
      untilBarSignaledPromise = sut
        .untilSignaled('bar')
        .then(() => (barHasBeenSignaled = true))

      fooHasBeenSignaled = false
      untilFooSignaledPromise = sut
        .untilSignaled('foo')
        .then(() => (fooHasBeenSignaled = true))
    })

    it('is not signaled', () => {
      expect(barHasBeenSignaled).toBe(false)
      expect(fooHasBeenSignaled).toBe(false)
    })

    describe('when signaled with bar', () => {
      beforeEach(() => {
        sut.signal(null, 'bar')
      })

      it('does not signal foo', async () => {
        await untilBarSignaledPromise
        expect(fooHasBeenSignaled).toBe(false)
      })

      it('does signal bar', async () => {
        await untilBarSignaledPromise
        expect(barHasBeenSignaled).toBe(true)
      })

      describe('when signaled with foo', () => {
        beforeEach(() => {
          sut.signal(null, 'foo')
        })

        it('does signal foo', async () => {
          await untilFooSignaledPromise
          expect(fooHasBeenSignaled).toBe(true)
        })
      })
    })

    describe('when signaled with foo', () => {
      beforeEach(() => {
        sut.signal(null, 'foo')
      })

      it('does not signal bar', async () => {
        await untilFooSignaledPromise
        expect(barHasBeenSignaled).toBe(false)
      })

      it('does signal foo', async () => {
        await untilFooSignaledPromise
        expect(fooHasBeenSignaled).toBe(true)
      })
    })
  })

  describe('untilNorMorePendingTasks', () => {
    it('returns inmediately', async () => {
      await sut.untilNoMorePendingTasks()
    })

    describe('when function called', () => {
      let thereAreNoMorePendingTasks: boolean

      beforeEach(() => {
        sut.call('foo')

        thereAreNoMorePendingTasks = false
        sut
          .untilNoMorePendingTasks()
          .then(() => (thereAreNoMorePendingTasks = true))
      })

      it('has pending tasks', async () => {
        expect(thereAreNoMorePendingTasks).toBe(false)
      })

      describe('when signaled', () => {
        beforeEach(() => {
          sut.signal(null, 'foo')
        })

        it('has no more pending tasks', async () => {
          await sut.untilNoMorePendingTasks()

          expect(thereAreNoMorePendingTasks).toBe(true)
        })
      })
    })
  })

  describe('call', () => {
    describe('when called', () => {
      let hasItFinished: boolean
      let callReturned: any

      beforeEach(() => {
        hasItFinished = false

        sut.call().then((returned: any) => {
          callReturned = returned
          hasItFinished = true
        })
      })

      it('does not finish until signaled', async () => {
        expect(hasItFinished).toBe(false)
      })

      it('finishes when signaled', async () => {
        sut.signal(null)
        await sut.untilNoMorePendingTasks()

        expect(hasItFinished).toBe(true)
      })

      it('returns what is signaled', async () => {
        sut.signal('foo')
        await sut.untilNoMorePendingTasks()

        expect(callReturned).toBe('foo')
      })
    })
  })
})
