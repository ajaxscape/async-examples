const { calculate } = require('./calc')

module.exports.calculateResults = (lowVal, mediumVal, highVal) => {
  return Promise.all([
    calculate(lowVal),
    calculate(mediumVal),
    calculate(highVal)
  ]).then((totals) => {
    return {
      low: totals[0],
      medium: totals[1],
      high: totals[2]
    }
  })
}
