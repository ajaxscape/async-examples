const { calculate } = require('./calc')

module.exports.calculateTotal = async () => {
  const totals = await Promise.all([
    calculate(10),
    calculate(20),
    calculate(30),
    calculate(40),
    calculate(50)
  ])

  return totals.reduce((runningTotal, currentTotal) => runningTotal + currentTotal, 0)
}
