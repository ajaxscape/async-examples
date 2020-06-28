const { expect } = require('@jest/globals')

const { expectedData, NO_ERROR, SYNC_ERROR, ASYNC_ERROR } = require('./data')

const { getData: getDataWithPromises } = require('./promise-example')
const { getData: getDataWithAsync } = require('./async-example')

describe('Get data should pass using:', () => {
  test('Promises', async () => {
    const data = await getDataWithPromises(NO_ERROR)
    expect(data).toStrictEqual(expectedData)
  })

  test('Async/await', async () => {
    const data = await getDataWithAsync(NO_ERROR)
    expect(data).toStrictEqual(expectedData)
  })
})

describe('Get data should raise an exception when returned data will not parse using:', () => {
  test('Promises', async () => {
    const data = await getDataWithPromises(SYNC_ERROR)
    expect(data).toStrictEqual(expectedData)
  })

  test('Async/await', async () => {
    const data = await getDataWithAsync(SYNC_ERROR)
    expect(data).toStrictEqual(expectedData)
  })
})
