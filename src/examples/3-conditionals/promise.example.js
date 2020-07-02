const { getPerson, getPartner, hasPartner } = require('../data')

const getApplicant = (id) => {
  return getPerson(id)
    .then((person) => {
      if (hasPartner(person)) {
        return getPartner(person)
          .then((partner) => {
            const couple = [person, partner]
            console.log(couple)
            return couple
          })
      } else {
        console.log(person)
        return person
      }
    })
}

module.exports = {
  getApplicant
}
