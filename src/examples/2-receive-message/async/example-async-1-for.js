const { getNextWord } = require('../utils')

const reportMessageWithPromises = async () => {
  const message = []
  console.log('Message start:')

  for (let word = ''; word !== undefined; word = await getNextWord()) {
    message.push(word)
  }

  console.log('Message complete:')
  console.log()
  console.log('Message received is as follows:')
  console.log(message.join(' '))
}

reportMessageWithPromises()
