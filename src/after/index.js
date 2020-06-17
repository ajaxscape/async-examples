const express = require('express')
const { getLaunches, getShip } = require('../helpers/spaceX')

const app = express()

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
    return { shipName, ...ship }
  }))
}

app.get('/', async (req, res) => {
  try {
    const launchData = await getLaunches()
    const launchStats = await buildLaunchStats(launchData)
    return res.send(launchStats)
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
