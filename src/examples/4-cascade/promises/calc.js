const { add, subtract } = require('../operators')

module.exports.calculate = (val) => {
  return add(val, 10)
    .then((valA) => {
      return subtract(valA, 20)
        .then((valB) => {
          return add(valB, 5)
            .then((valC) => {
              return subtract(valC, 40)
                .then((total) => {
                  return total
                })
            })
        })
    })
}
