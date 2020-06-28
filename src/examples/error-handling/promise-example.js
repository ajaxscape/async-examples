
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

const myRequest = (error) => {
  try {
    getJSON(error)
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      //  handle asynchronous errors
      .catch((err) => {
        console.log(err)
      })
  } catch (err) {
    console.log(err)
  }
}

// myRequest('none')
// myRequest('sync')
myRequest('async')
