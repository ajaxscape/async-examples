const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = (numberOfThrows) => {
  return Promise.all(Array(numberOfThrows).fill(0).map(() =>
    diceRoll()
      .then((number) => {
        console.log(`${number} was thrown with a promise`)
        return Promise.resolve(number)
      })
  ))
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
