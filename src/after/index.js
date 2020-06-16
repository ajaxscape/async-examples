const express = require('express')
const axios = require('axios')
const SPACEX_URL = 'https://api.spacexdata.com/v3'

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
    const url = `${SPACEX_URL}/ships/${shipId}`
    console.log(`GET: ${url}`)
    const response = await axios.get(url)
    return { ...response.data, ...ship }
  }))
}

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${SPACEX_URL}/launches`)
    const launchStats = await buildLaunchStats(response.data)
    return res.send(launchStats)
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
