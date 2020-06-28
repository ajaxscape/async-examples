const { getJSON } = require('./data')

const getData = (error) => {
  try {
    return getJSON(error)
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
        return data
      })
      //  handle asynchronous errors
      .catch((err) => {
        console.log(err)
      })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getData }
