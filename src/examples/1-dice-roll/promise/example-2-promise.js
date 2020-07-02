const { randomNumber } = require('../../../helpers/utils')

const throwDice = (numberOfThrows) => {
  for (let count = 0; count < numberOfThrows; count++) {
    randomNumber()
      .then((number) => {
        console.log(`${number} was thrown with a promise`)
      })
  }
}

throwDice(10)
