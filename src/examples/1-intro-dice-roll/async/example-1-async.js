const { pause } = require('../../../helpers/utils')
const diceRoll = () => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const throwDice = async () => {
  const number = await diceRoll()
  console.log(`${number} was thrown asynchronously`)
}

throwDice()
