const axios = require('axios')
const SPACEX_URL = 'https://api.spacexdata.com/v3'

async function get (path) {
  const url = `${SPACEX_URL}${path}`
  console.log(`GET: ${url}`)
  const response = await axios.get(url)
  console.log(`Successful GET: ${url}`)
  return response.data
}

module.exports = {
  async getLaunches () {
    return get('/launches')
  },

  async getShip (shipId) {
    return get(`/ships/${shipId}`)
  }
}
