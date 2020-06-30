const express = require('express')
const router = express.Router()
const { getPeople } = require('../../helpers/data')

const getPeopleByAgeCategory = (category, lowerAgeLimit, upperAgeLimit) => {
  return getPeople()
    .then((people) => {
      const members = people
        .filter(({ age }) => age >= lowerAgeLimit && age <= upperAgeLimit)
        .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
      const percentage = members.length * 100 / people.length

      return {
        category,
        percentage,
        members
      }
    })
}

const getResults = () => {
  return Promise.all([
    getPeopleByAgeCategory('junior', 18, 24),
    getPeopleByAgeCategory('intermediate', 25, 44),
    getPeopleByAgeCategory('senior', 45, 60)
  ])
}

router.get('/', function (req, res) {
  getResults()
    .then((results) => {
      res.send(results)
    })
})

module.exports = router
