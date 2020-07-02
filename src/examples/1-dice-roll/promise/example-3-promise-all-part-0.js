const { randomNumber } = require('../../../helpers/utils')

const throwDice = (numberOfThrows) => {
  return Promise.all([
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber()
  ])
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
