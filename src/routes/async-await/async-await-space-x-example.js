const express = require('express')
const router = express.Router()
const { getLaunches, getShip } = require('../../helpers/spaceX')

const buildLaunchStats = data => {
  const ships = data.reduce((ships, launch) => {
    launch.ships.forEach(ship => {
      ships[ship] = ships[ship] || { launches: 0 }
      ships[ship].launches++
    })
    return ships
  }, {})
  return Promise.all(Object.entries(ships).map(async ([shipId, ship]) => {
    const { ship_name: shipName } = await getShip(shipId)
    return { ...ship, shipName }
  }))
}

router.get('/', async (req, res) => {
  try {
    const launchData = await getLaunches()
    const launchStats = await buildLaunchStats(launchData)
    return res.send(launchStats)
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

module.exports = router
