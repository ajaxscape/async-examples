const { getJSON } = require('./data')

const getData = async (error) => {
  try {
    // this parse may fail
    const result = await getJSON(error)
    const data = JSON.parse(result)
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getData }
