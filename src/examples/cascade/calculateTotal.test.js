const { describe, test, expect } = require('@jest/globals')

const { calculateTotal: calculateTotalWithPromises } = require('./promises/calc-total')
const { calculateTotal: calculateTotalWithStackedPromises } = require('./stacked-promises/calc-total')
const { calculateTotal: calculateTotalWithAsync } = require('./async/calc-total')

const expectedTotal = -75

describe('Calculate total with:', () => {
  test('Nested promises', () => {
    return expect(calculateTotalWithPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Stacked promises', () => {
    return expect(calculateTotalWithStackedPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Async/await', () => {
    return expect(calculateTotalWithAsync()).resolves.toStrictEqual(expectedTotal)
  })
})
