import { moveDown, moveToBottom, moveToTop, moveUp, remove } from './gallery-editor'

describe('gallery editor', () => {
  describe('moveUp', () => {
    it('moves up', () => {
      const list = ['a', 'b', 'c']

      const actual = moveUp(list, 1)

      expect(actual).toEqual(['b', 'a', 'c'])
    })

    it('does not move when empty', () => {
      const list: number[] = []

      const actual = moveUp(list, 0)

      expect(actual).toEqual([])
    })

    it('moves the last', () => {
      const list = ['a', 'b', 'c']

      const actual = moveUp(list, 2)

      expect(actual).toEqual(['a', 'c', 'b'])
    })

    it('works with 2 elements', () => {
      const list = ['a', 'b']

      const actual = moveUp(list, 1)

      expect(actual).toEqual(['b', 'a'])
    })

    it('works with 1 element', () => {
      const list = ['a']

      const actual = moveUp(list, 0)

      expect(actual).toEqual(['a'])
    })

    it('works out of bounds', () => {
      const list = ['a', 'b']

      const actual = moveUp(list, 0)

      expect(actual).toEqual(['a', 'b'])
    })
  })

  describe('moveDown', () => {
    it('moves down middle element', () => {
      const list = ['a', 'b', 'c']

      const actual = moveDown(list, 1)

      expect(actual).toEqual(['a', 'c', 'b'])
    })

    it('does not move when empty', () => {
      const list: number[] = []

      const actual = moveDown(list, 0)

      expect(actual).toEqual([])
    })

    it('moves the first', () => {
      const list = ['a', 'b', 'c']

      const actual = moveDown(list, 0)

      expect(actual).toEqual(['b', 'a', 'c'])
    })

    it('works with 2 elements', () => {
      const list = ['a', 'b']

      const actual = moveDown(list, 0)

      expect(actual).toEqual(['b', 'a'])
    })

    it('works with 1 element', () => {
      const list = ['a']

      const actual = moveDown(list, 0)

      expect(actual).toEqual(['a'])
    })

    it('works out of bounds', () => {
      const list = ['a', 'b']

      const actual = moveDown(list, 3)

      expect(actual).toEqual(['a', 'b'])
    })
  })

  describe('moveToTop', () => {
    it('move last element to first', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToTop(list, 2)

      expect(actual).toEqual(['c', 'a', 'b'])
    })

    it('move middle element', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToTop(list, 1)

      expect(actual).toEqual(['b', 'a', 'c'])
    })

    it('does nothing if first element', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToTop(list, 0)

      expect(actual).toEqual(['a', 'b', 'c'])
    })

    it('does nothing if empty', () => {
      const list: string[] = []

      const actual = moveToTop(list, 0)

      expect(actual).toEqual([])
    })

    it('does nothing if out of bounder', () => {
      const list = ['a']

      const actual = moveToTop(list, 3)

      expect(actual).toEqual(['a'])
    })
  })

  describe('moveToBottom', () => {
    it('move first element to last', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToBottom(list, 0)

      expect(actual).toEqual(['b', 'c', 'a'])
    })

    it('move middle element', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToBottom(list, 1)

      expect(actual).toEqual(['a', 'c', 'b'])
    })

    it('does nothing if last element', () => {
      const list = ['a', 'b', 'c']

      const actual = moveToBottom(list, 2)

      expect(actual).toEqual(['a', 'b', 'c'])
    })

    it('does nothing if empty', () => {
      const list: string[] = []

      const actual = moveToBottom(list, 0)

      expect(actual).toEqual([])
    })

    it('does nothing if out of bounder', () => {
      const list = ['a']

      const actual = moveToBottom(list, 3)

      expect(actual).toEqual(['a'])
    })
  })

  describe('remove', () => {
    it('remove first element', () => {
      const list = ['a', 'b', 'c']

      const actual = remove(list, 0)

      expect(actual).toEqual(['b', 'c'])
    })
  })
})
