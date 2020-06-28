const people = require('./people.json')
const { pause } = require('./utils')

async function getPeople () {
  await pause(1000)
  return people
}

module.exports = {
  getPeople
}
