const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = () => {
  diceRoll()
    .then((number) => {
      console.log(`${number} was thrown with a promise`)
    })
}

throwDice()
