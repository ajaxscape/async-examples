const { getNextWord } = require('../utils')

const reportMessageWithPromises = async () => {
  const message = []
  console.log('Message start:')

  let word
  do {
    word = await getNextWord()
    if (word) {
      message.push(word)
    }
  } while (word)

  console.log('Message complete:')
  console.log()
  console.log('Message received is as follows:')
  console.log(message.join(' '))
}

reportMessageWithPromises()
