const { randomNumber } = require('../../../helpers/utils')

const throwDice = (numberOfThrows) => {
  const rolls = []
  for (let count = 0; count < numberOfThrows; count++) {
    randomNumber()
      .then((number) => {
        console.log(`${number} was thrown with a promise`)
        rolls.push(number)
      })
  }
  return Promise.resolve(rolls)
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
