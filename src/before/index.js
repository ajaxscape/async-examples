const express = require('express')
const app = express()
const { getLaunches, getShip } = require('../helpers/spaceX')

function buildLaunchStats (data) {
  const ships = data.reduce(function (ships, launch) {
    launch.ships.forEach(function (ship) {
      ships[ship] = ships[ship] || { launches: 0 }
      ships[ship].launches++
    })
    return ships
  }, {})
  return Promise.all(Object.entries(ships).map(function ([shipId, ship]) {
    return getShip(shipId)
      .then(function (shipData) {
        return Promise.resolve({ ...ship, shipName: shipData.ship_name })
      })
  }))
}

app.get('/', function (req, res) {
  return getLaunches()
    .then(function (launchData) {
      return buildLaunchStats(launchData)
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
