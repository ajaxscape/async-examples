
const doItWithAPromise = (pass) => {
  const myPromise = new Promise((resolve, reject) => {
    if (pass) {
      resolve('Passed')
    } else {
      reject(new Error('Failed'))
    }
  })
  return myPromise
}

const testWithPromise = (pass) => {
  doItWithAPromise(pass)
    .then((result) => {
      console.log('Promise has ' + result)
    })
    .catch((error) => {
      console.log('Promise has ' + error.message)
    })
}

const testWithAsync = async (pass) => {
  try {
    const result = await doItWithAPromise(pass)
    console.log('Async has ' + result)
  } catch (error) {
    console.log('Async has ' + error.message)
  }
}

testWithAsync(false)
testWithPromise(false)
