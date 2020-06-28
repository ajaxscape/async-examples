const { calculate } = require('./calc')

module.exports.calculateTotal = () => {
  return Promise.all([
    calculate(10),
    calculate(20),
    calculate(30),
    calculate(40),
    calculate(50)
  ]).then((totals) => {
    return totals.reduce((runningTotal, currentTotal) => {
      return runningTotal + currentTotal
    }, 0)
  })
}
