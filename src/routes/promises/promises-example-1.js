const express = require('express')
const router = express.Router()
const { getPeople } = require('../../helpers/data')

function getPeopleByAgeCategory (people, lowerAgeLimit, upperAgeLimit) {
  return {
    people: people.filter((person) => person.age >= lowerAgeLimit && person.age <= upperAgeLimit)
  }
}

function getResults () {
  return getPeople()
    .then((people) => {
      return Promise.all([
        getPeopleByAgeCategory(people, { category: 'junior', ageRange: [18, 24] }),
        getPeopleByAgeCategory(people, { category: 'intermediate', ageRange: [25, 44] }),
        getPeopleByAgeCategory(people, { category: 'senior', ageRange: [45, 60] })
      ])
        .then((categories) => {
          const resultData = categories.map((category) => {
            return {
              category: category.type,
              total: category.people.length,
              members: category.people.map((member) => {
                return member.firstName + ' ' + member.lastName
              })
            }
          })
          return resultData
        })
    })
}

router.get('/', function (req, res) {
  getResults()
    .then((results) => {
      res.send(results)
    })
})

module.exports = router
