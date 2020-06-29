const { describe, test, expect } = require('@jest/globals')
const { expectedData } = require('../data')

const { getApplicant: getApplicantWithPromises } = require('./promise.example')
const { getApplicant: getApplicantWithASync } = require('./async.example')

const [first, second, third] = expectedData

describe('Get Applicants with:', () => {
  test('Promises', async () => {
    await expect(getApplicantWithPromises(1)).resolves.toStrictEqual([first, second])
    await expect(getApplicantWithPromises(2)).resolves.toStrictEqual([second, first])
    await expect(getApplicantWithPromises(3)).resolves.toStrictEqual(third)
  })

  test('Async/await', async () => {
    await expect(getApplicantWithASync(1)).resolves.toStrictEqual([first, second])
    await expect(getApplicantWithASync(2)).resolves.toStrictEqual([second, first])
    await expect(getApplicantWithASync(3)).resolves.toStrictEqual(third)
  })
})
