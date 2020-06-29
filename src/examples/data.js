const data = [
  {
    id: 1,
    givenName: 'Billy',
    familyName: 'James',
    partnerId: 2
  },
  {
    id: 2,
    givenName: 'Beverly',
    familyName: 'James',
    partnerId: 1
  },
  {
    id: 4,
    givenName: 'Karen',
    familyName: 'Davis'
  }
]

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

const getPerson = (personId) => Promise.resolve(data.find(({ id }) => id === personId))
const getPartner = ({ partnerId }) => Promise.resolve(data.find(({ id }) => id === partnerId))
const hasPartner = ({ partnerId }) => partnerId !== undefined

module.exports = {
  expectedData: { ...data },
  getJSON,
  getPerson,
  getPartner,
  hasPartner,
  NO_ERROR,
  ASYNC_ERROR,
  SYNC_ERROR
}
