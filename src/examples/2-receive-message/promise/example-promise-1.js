const { pause } = require('../../../helpers/utils')
const randomTimeout = () => Math.ceil(Math.random() * 250) + 250

const sentence = ['The', 'idea', 'is', 'to', 'make', 'sure', 'this', 'sentence', 'is', 'returned', 'in', 'the', 'correct', 'order']

const getNextWord = () => pause(randomTimeout())
  .then(() => {
    const word = sentence.shift()
    console.log(`Processing "${word}"`)
    return Promise.resolve(word)
  })

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
