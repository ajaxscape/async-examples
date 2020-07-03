const { describe, test, expect } = require('@jest/globals')

const { calculate: calculateWithPromises } = require('./promises/calc')
const { calculate: calculateWithStackedPromises } = require('./stacked-promises/calc')
const { calculate: calculateWithAsync } = require('./async/calc')

const inputValue = 95
const expectedResult = 50

describe('Calculate results with:', () => {
  test('Nested promises', async () => {
    await expect(calculateWithPromises(inputValue)).resolves.toStrictEqual(expectedResult)
  })

  test('Stacked promises', async () => {
    await expect(calculateWithStackedPromises(inputValue)).resolves.toStrictEqual(expectedResult)
  })

  test('Async/await', async () => {
    await expect(calculateWithAsync(inputValue)).resolves.toStrictEqual(expectedResult)
  })
})
