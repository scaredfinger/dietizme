import { describe, it, expect, beforeEach } from 'vitest'

import { Signal } from './index'

describe('Signal', () => {
  it('is defined', () => {
    expect(Signal).toBeDefined()
  })

  let sut: Signal

  beforeEach(() => {
    sut = new Signal()
  })

  it('can be created', () => {
    expect(sut).toBeDefined()
  })

  it('returns', async () => {
    const signal = new Signal()

    let itHasBeenSignaled = false
    const hasBeenSignaled = signal
      .untilSignaled()
      .then(() => (itHasBeenSignaled = true))

    expect(itHasBeenSignaled).toBe(false)

    signal.signal(null)

    await hasBeenSignaled
    expect(itHasBeenSignaled).toBe(true)
  })
})
