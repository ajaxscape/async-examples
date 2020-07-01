const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = (numberOfThrows) => {
  const rolls = []
  for (let count = 0; count < numberOfThrows; count++) {
    rolls.push(() =>
      diceRoll()
        .then((number) => {
          console.log(`${number} was thrown with a promise`)
          return Promise.resolve(number)
        }))
  }
  return Promise.all((rolls.map((roll) => roll())))
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
