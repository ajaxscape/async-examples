const { getNextWord } = require('../utils')

const getMessage = async () => {
  const message = []
  console.log('Message start:')

  let word
  do {
    word = await getNextWord()
    if (word) {
      message.push(word)
    }
  } while (word)

  return message
}

getMessage().then(message => {
  console.log('Message complete:')
  console.log()
  console.log('Message received is as follows:')
  console.log(message.join(' '))
})
