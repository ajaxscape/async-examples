const { expect } = require('@jest/globals')

const { calculateTotal: calculateTotalWithPromises } = require('./promises/calc-total')
const { calculateTotal: calculateTotalWithStackedPromises } = require('./stacked-promises/calc-total')
const { calculateTotal: calculateTotalWithAsync } = require('./async/calc-total')

const expectedTotal = 125

describe('Calculate total with:', () => {
  test('Nested promises', async () => {
    const total = await calculateTotalWithPromises()
    expect(total).toStrictEqual(expectedTotal)
  })

  test('Stacked promises', async () => {
    const total = await calculateTotalWithStackedPromises()
    expect(total).toStrictEqual(expectedTotal)
  })

  test('Async/await', async () => {
    const total = await calculateTotalWithAsync()
    expect(total).toStrictEqual(expectedTotal)
  })
})
