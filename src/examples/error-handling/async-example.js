const { getJSON } = require('../data')

const getData = async (error) => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON(error))
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { getData }
