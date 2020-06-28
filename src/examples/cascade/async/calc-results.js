const { calculate } = require('./calc')

module.exports.calculateResults = async (lowVal, mediumVal, highVal) => {
  const [low, medium, high] = await Promise.all([
    calculate(lowVal),
    calculate(mediumVal),
    calculate(highVal)
  ])
  return { low, medium, high }
}
