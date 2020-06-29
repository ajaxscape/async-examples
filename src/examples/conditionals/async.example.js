const { getPerson, getPartner, hasPartner } = require('../data')

module.exports.getApplicants = async (id) => {
  const { person } = await getPerson(id)
  if (hasPartner(person)) {
    const { partner } = await getPartner(person)
    const couple = [person, partner]
    console.log(couple)
    return couple
  } else {
    console.log(person)
    return [person]
  }
}
