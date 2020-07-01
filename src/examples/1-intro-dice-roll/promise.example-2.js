const { pause } = require('../../helpers/utils')
const randomTimeout = () => Math.ceil(Math.random() * 1000)

const sentence = ['The', 'idea', 'is', 'to', 'make', 'sure', 'this', 'sentence', 'is', 'returned', 'in', 'the', 'correct', 'order']

const getNextWord = () => pause(randomTimeout())
  .then(() => Promise.resolve(sentence.shift()))

const reportMessageWithPromises = () => {
  const message = []
  console.log('Message start:')
  getNextWord()
    .then((word) => {
      console.log(`Processing "${word}"`)
      message.push(word)
    })
  console.log('Message complete:')
  console.log('Message received:')
  console.log(message.join(', '))
}

reportMessageWithPromises()
