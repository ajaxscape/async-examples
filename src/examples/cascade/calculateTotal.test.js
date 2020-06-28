const { describe, test, expect } = require('@jest/globals')

const { calculateTotal: calculateTotalWithPromises } = require('./promises/calc-total')
const { calculateTotal: calculateTotalWithStackedPromises } = require('./stacked-promises/calc-total')
const { calculateTotal: calculateTotalWithAsync } = require('./async/calc-total')

const expectedTotal = 125

describe('Calculate total with:', () => {
  test('Nested promises', () => {
    expect(calculateTotalWithPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Stacked promises', () => {
    expect(calculateTotalWithStackedPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Async/await', () => {
    expect(calculateTotalWithAsync()).resolves.toStrictEqual(expectedTotal)
  })
})
