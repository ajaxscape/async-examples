const { randomNumber } = require('../../../helpers/utils')

const throwDice = (numberOfThrows) => {
  return Promise.all(Array(numberOfThrows).fill(0).map(() =>
    randomNumber()
      .then((number) => {
        console.log(`${number} was thrown with a promise`)
        return Promise.resolve(number)
      })
  ))
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
