const { pause } = require('../../helpers/utils')
const randomTimeout = () => Math.ceil(Math.random() * 250) + 250

const sentence = ['The', 'idea', 'is', 'to', 'make', 'sure', 'this', 'sentence', 'is', 'returned', 'in', 'the', 'correct', 'order']

const getNextWord = () => pause(randomTimeout())
  .then(() => {
    const word = sentence.shift()
    console.log(`Processing "${word}"`)
    return Promise.resolve(word)
  })

module.exports = {
  getNextWord
}
