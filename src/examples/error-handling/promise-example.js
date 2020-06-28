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
      .catch((err) => {
        // handle asynchronous errors
        console.log(err)
        return Promise.reject(err)
      })
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}

module.exports = { getData }
