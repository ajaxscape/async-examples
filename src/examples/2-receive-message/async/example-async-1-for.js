const { getNextWord } = require('../utils')

const getMessage = async () => {
  const message = []
  console.log('Message start:')

  for (let word = ''; word !== undefined; word = await getNextWord()) {
    message.push(word)
  }

  return message
}

getMessage().then(message => {
  console.log('Message complete:')
  console.log()
  console.log('Message received is as follows:')
  console.log(message.join(' '))
})
