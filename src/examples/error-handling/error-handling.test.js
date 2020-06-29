const { describe, test, expect } = require('@jest/globals')

const { expectedData, NO_ERROR, SYNC_ERROR, ASYNC_ERROR } = require('./data')

const { getData: getDataWithPromises } = require('./promise-example')
const { getData: getDataWithAsync } = require('./async-example')

describe('Get data should pass using:', () => {
  test('Promises', () => {
    return expect(getDataWithPromises(NO_ERROR)).resolves.toStrictEqual(expectedData)
  })

  test('Async/await', () => {
    return expect(getDataWithAsync(NO_ERROR)).resolves.toStrictEqual(expectedData)
  })
})

describe('Get data should raise an exception when getJSON fails using:', () => {
  test('Promises', () => {
    expect.assertions(1)
    return getDataWithPromises(ASYNC_ERROR).catch(e => {
      expect(e.message).toMatch('Unexpected token * in JSON at position 0')
    })
  })

  test('Async/await', () => {
    expect.assertions(1)
    return getDataWithAsync(ASYNC_ERROR).catch(e => {
      expect(e.message).toMatch('Unexpected token * in JSON at position 0')
    })
  })
})

describe('Get data should raise an exception when returned data will not parse using:', () => {
  test('Promises', () => {
    expect.assertions(1)
    return getDataWithPromises(SYNC_ERROR).catch(e => {
      expect(e.message).toMatch('Sync Error')
    })
  })

  test('Async/await', () => {
    expect.assertions(1)
    return getDataWithAsync(SYNC_ERROR).catch(e => {
      expect(e.message).toMatch('Sync Error')
    })
  })
})
