const people = require('./people.json')

async function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function getPeople () {
  await wait(1000)
  return people
}

module.exports = {
  getPeople
}
