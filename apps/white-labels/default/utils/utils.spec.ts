import { dateFormat } from '.'

describe('Date format', () => {
  it('is', () => {
    const actual = dateFormat(new Date('2020-01-01'))

    expect(actual).toEqual('1/1')
  })
})
