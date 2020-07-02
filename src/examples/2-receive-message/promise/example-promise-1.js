const { getNextWord } = require('../utils')

const reportMessageWithPromises = () => {
  console.log('Message start:')

  const processMessage = (message = []) => {
    return getNextWord()
      .then((word) => {
        if (word) {
          message.push(word)
          return processMessage(message)
        } else {
          return Promise.resolve(message)
        }
      })
  }

  processMessage()
    .then((message) => {
      console.log('Message complete:')
      console.log()
      console.log('Message received is as follows:')
      console.log(message.join(' '))
    })
}

reportMessageWithPromises()
