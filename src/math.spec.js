import { add } from './math'

describe('math', () => {
  describe('add', () => {
    it('returns 5 with arguments 2 and 3', () => {
      const result = add(2, 3)
      expect(result).toBe(5)
    })
  })
})
