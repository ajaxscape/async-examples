const express = require('express')
const router = express.Router()
const { getPeople } = require('../../helpers/data')

const getPeopleByAgeCategory = async (category, lowerAgeLimit, upperAgeLimit) => {
  const people = await getPeople()
  const members = people
    .filter(({ age }) => age >= lowerAgeLimit && age <= upperAgeLimit)
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
  const percentage = members.length * 100 / people.length

  return {
    category,
    percentage,
    members
  }
}

const getResults = async () => {
  const membership = await Promise.all([
    getPeopleByAgeCategory('junior', 18, 24),
    getPeopleByAgeCategory('intermediate', 25, 44),
    getPeopleByAgeCategory('senior', 45, 60)
  ])
  return membership
}

router.get('/', async (req, res) => res.send(await getResults()))

module.exports = router
