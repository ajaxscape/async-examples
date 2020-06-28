const { getJSON } = require('./data')

const getData = async (error) => {
  try {
    // this parse may fail
    const result = await getJSON(error)
    const data = JSON.parse(result)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { getData }
