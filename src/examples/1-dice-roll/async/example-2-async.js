const { randomNumber } = require('../../../helpers/utils')

const throwDice = async (numberOfThrows) => {
  for (let count = 0; count < numberOfThrows; count++) {
    const number = await randomNumber()
    console.log(`${number} was thrown asynchronously`)
  }
}

throwDice(10)
