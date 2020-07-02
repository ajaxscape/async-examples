const { randomNumber } = require('../../../helpers/utils')

const throwDice = async (numberOfThrows) => {
  const rolls = []
  for (let count = 0; count < numberOfThrows; count++) {
    const number = await randomNumber()
    console.log(`${number} was thrown asynchronously`)
    rolls.push(number)
  }
  return rolls
}

throwDice(10).then((rolls) => console.log(`You rolled ${rolls.join(', ')}`))
