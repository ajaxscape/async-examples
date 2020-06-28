const data = {
  givenName: 'Ben',
  familyName: 'Surgison'
}

const NO_ERROR = 'none'
const ASYNC_ERROR = 'async'
const SYNC_ERROR = 'sync'

const getJSON = (error) => {
  switch (error) {
    case NO_ERROR: return Promise.resolve(JSON.stringify({ ...data }))
    case ASYNC_ERROR: return Promise.resolve('*')
    case SYNC_ERROR: throw new Error('Sync Error')
  }
}

module.exports = {
  expectedData: { ...data },
  getJSON,
  NO_ERROR,
  ASYNC_ERROR,
  SYNC_ERROR
}
