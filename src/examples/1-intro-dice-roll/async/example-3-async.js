const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = async (numberOfThrows) => {
  const rolls = []
  for (let count = 0; count < numberOfThrows; count++) {
    const number = await diceRoll()
    console.log(`${number} was thrown asynchronously`)
    rolls.push(number)
  }
  return rolls
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
