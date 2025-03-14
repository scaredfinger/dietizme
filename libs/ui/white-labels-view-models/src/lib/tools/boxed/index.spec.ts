import { describe, it, expect } from "vitest"

import { Optional, OptionalAsyncResult } from "."

describe('boxed', () => {
  it('gets errors', () => {
    OptionalAsyncResult.Error(new Error('error'))
  })

  it('can create errors from strings', () => {
    OptionalAsyncResult.Error('error')
  })

  it('gets loading', () => {
    OptionalAsyncResult.Loading()
  })

  it('can create from nullable', () => {
    OptionalAsyncResult.FromNullable(null)
  })

  it('can create Optional from nullable', () => {
    Optional.FromNullable(null)
  })

  it('can merge several with all', () => {
    const all = Optional.All(Optional.Some(1), Optional.Some('foo'))

    expect(all).toBeDefined()
  })
})