const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = (numberOfThrows) => {
  return Promise.all([
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll(),
    diceRoll()
  ])
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
