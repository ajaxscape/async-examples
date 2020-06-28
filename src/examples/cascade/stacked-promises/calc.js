const { add, subtract } = require('../operators')

module.exports.calculate = (val) => {
  return add(val, 10)
    .then((valA) => add(valA, 20))
    .then((valB) => add(valB, 5))
    .then((valC) => subtract(valC, 40))
    .then((total) => total)
}
