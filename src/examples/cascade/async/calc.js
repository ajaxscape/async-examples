const { add, subtract } = require('../operators')

module.exports.calculate = async (val) => {
  const valA = await add(val, 10)
  const valB = await add(valA, 20)
  const valC = await add(valB, 5)
  const total = await subtract(valC, 40)
  return total
}
