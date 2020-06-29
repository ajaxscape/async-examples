const { describe, test, expect } = require('@jest/globals')
const { expectedData } = require('../data')

const { getApplicants: getApplicantsWithPromises } = require('./promise.example')
const { getApplicants: getApplicantsWithASync } = require('./async.example')

const expectedCouple = []
const expectedSingle = []

describe('Get Applicants with:', () => {
  test('Promises', async () => {
    await expect(getApplicantsWithPromises(1)).resolves.toStrictEqual(expectedCouple)
    await expect(getApplicantsWithPromises(2)).resolves.toStrictEqual(expectedCouple)
    await expect(getApplicantsWithPromises(3)).resolves.toStrictEqual(expectedSingle)
  })

  test('Async/await', async () => {
    await expect(getApplicantsWithASync(1)).resolves.toStrictEqual(expectedCouple)
    await expect(getApplicantsWithASync(2)).resolves.toStrictEqual(expectedCouple)
    await expect(getApplicantsWithASync(3)).resolves.toStrictEqual(expectedSingle)
  })
})
