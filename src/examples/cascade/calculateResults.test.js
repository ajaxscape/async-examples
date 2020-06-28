const { expect } = require('@jest/globals')

const { calculateResults: calculateResultsWithPromises } = require('./promises/calc-results')
const { calculateResults: calculateResultsWithStackedPromises } = require('./stacked-promises/calc-results')
const { calculateResults: calculateResultsWithAsync } = require('./async/calc-results')

const expectedResults = {
  high: 995,
  low: 5,
  medium: 95
}

const args = [10, 100, 1000]

describe('Calculate results with:', () => {
  test('Nested promises', () => {
    expect(calculateResultsWithPromises(...args)).resolves.toStrictEqual(expectedResults)
  })

  test('Stacked promises', () => {
    expect(calculateResultsWithStackedPromises(...args)).resolves.toStrictEqual(expectedResults)
  })

  test('Async/await', () => {
    expect(calculateResultsWithAsync(...args)).resolves.toStrictEqual(expectedResults)
  })
})
