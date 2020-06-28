
const data = {
  givenName: 'Ben',
  familyName: 'Surgison'
}

const getJSON = (error) => {
  switch (error) {
    case 'none': return Promise.resolve(JSON.stringify(data))
    case 'async': return Promise.resolve('*')
    case 'sync': throw new Error('Sync Error')
  }
}

const myRequest = async (error) => {
  try {
    // this parse may fail
    const result = await getJSON(error)
    const data = JSON.parse(result)
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

myRequest('none')
// myRequest('sync')
// myRequest('async')
