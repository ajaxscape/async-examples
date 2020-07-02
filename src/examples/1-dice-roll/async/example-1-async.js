const { randomNumber } = require('../../../helpers/utils')

const throwDice = async () => {
  const number = await randomNumber()
  console.log(`${number} was thrown asynchronously`)
}

throwDice()
