const express = require('express')
const router = express.Router()
const { getLaunches, getShip } = require('../../helpers/spaceX')

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

router.get('/', function (req, res) {
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

module.exports = router
