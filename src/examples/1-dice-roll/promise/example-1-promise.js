const { randomNumber } = require('../../../helpers/utils')

const throwDice = () => {
  randomNumber()
    .then((number) => {
      console.log(`${number} was thrown with a promise`)
    })
}

throwDice()
