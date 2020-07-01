const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = (numberOfThrows) => {
  for (let count = 0; count < numberOfThrows; count++) {
    diceRoll()
      .then((number) => {
        console.log(`${number} was thrown with a promise`)
      })
  }
}

throwDice(10)
