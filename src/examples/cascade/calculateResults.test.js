const { describe, test, expect } = require('@jest/globals')

const { calculateResults: calculateResultsWithPromises } = require('./promises/calc-results')
const { calculateResults: calculateResultsWithStackedPromises } = require('./stacked-promises/calc-results')
const { calculateResults: calculateResultsWithAsync } = require('./async/calc-results')

const expectedResults = {
  high: 955,
  low: -35,
  medium: 55
}

const args = [10, 100, 1000]

describe('Calculate results with:', () => {
  test('Nested promises', async () => {
    await expect(calculateResultsWithPromises(...args)).resolves.toStrictEqual(expectedResults)
  })

  test('Stacked promises', async () => {
    await expect(calculateResultsWithStackedPromises(...args)).resolves.toStrictEqual(expectedResults)
  })

  test('Async/await', async () => {
    await expect(calculateResultsWithAsync(...args)).resolves.toStrictEqual(expectedResults)
  })
})
