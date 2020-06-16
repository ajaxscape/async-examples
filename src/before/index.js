const express = require('express')
const axios = require('axios')
const SPACEX_URL = 'https://api.spacexdata.com/v3'

const app = express()

function buildLaunchStats (data) {
  const ships = data.reduce(function (ships, launch) {
    launch.ships.forEach(function (ship) {
      ships[ship] = ships[ship] || { launches: 0 }
      ships[ship].launches++
    })
    return ships
  }, {})
  return Promise.all(Object.entries(ships).map(function ([shipId, ship]) {
    const url = `${SPACEX_URL}/ships/${shipId}`
    console.log(`GET: ${url}`)
    return axios.get(url)
      .then(function (response) {
        return Promise.resolve({ ...response.data, ...ship })
      })
  }))
}

app.get('/', function (req, res) {
  return axios.get(`${SPACEX_URL}/launches`)
    .then(function (response) {
      return buildLaunchStats(response.data)
        .then(function (launchStats) {
          return res.send(launchStats)
        })
    })
    .catch(function (err) {
      console.log(err)
      return res.status(500).send({ message: 'Something went wrong!' })
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
