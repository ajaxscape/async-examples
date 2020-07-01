const { pause } = require('../../helpers/utils')

const doRequest = () => {
  console.log('request made:')
  return pause(1000)
    .then(() => {
      return {
        firstName: 'Fred',
        surname: 'Flintstone'
      }
    })
}

const displayPerson = () => {
  return doRequest()
    .then(person => {
      console.log('*****************************')
      console.log(`${person.firstName} ${person.surname}`)
      console.log('*****************************')
    })
}

displayPerson()
