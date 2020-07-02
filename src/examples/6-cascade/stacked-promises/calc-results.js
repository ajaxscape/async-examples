const { calculate } = require('./calc')

module.exports.calculateResults = (lowVal, mediumVal, highVal) => {
  return Promise.all([
    calculate(lowVal),
    calculate(mediumVal),
    calculate(highVal)
  ]).then(([low, medium, high]) => ({ low, medium, high }))
}
