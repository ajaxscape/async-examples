const { describe, test, expect } = require('@jest/globals')

const { calculateTotal: calculateTotalWithPromises } = require('./promises/calc-total')
const { calculateTotal: calculateTotalWithStackedPromises } = require('./stacked-promises/calc-total')
const { calculateTotal: calculateTotalWithAsync } = require('./async/calc-total')

const expectedTotal = -75

describe('Calculate total with:', () => {
  test('Nested promises', async () => {
    await expect(calculateTotalWithPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Stacked promises', async () => {
    await expect(calculateTotalWithStackedPromises()).resolves.toStrictEqual(expectedTotal)
  })

  test('Async/await', async () => {
    await expect(calculateTotalWithAsync()).resolves.toStrictEqual(expectedTotal)
  })
})
