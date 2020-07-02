const { randomNumber } = require('../../../helpers/utils')

const throwDice = (numberOfThrows) => {
  const rolls = []
  for (let count = 0; count < numberOfThrows; count++) {
    rolls.push(() =>
      randomNumber()
        .then((number) => {
          console.log(`${number} was thrown with a promise`)
          return Promise.resolve(number)
        }))
  }
  return Promise.all((rolls.map((roll) => roll())))
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
