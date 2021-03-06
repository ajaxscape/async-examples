const pause = async ms => new Promise(resolve => {
  setTimeout(resolve, ms)
})

const randomNumber = async (max = 6) => pause().then(() => Promise.resolve(Math.ceil(Math.random() * 6)))

const set = val => {
  console.log(`Starting with ${val}`)
  return Promise.resolve(val)
}

const add = val => async function (total) {
  total += val
  console.log(`Add ${val} to get ${total}`)
  return Promise.resolve(total)
}

const subtract = val => async function (total) {
  total -= val
  console.log(`Subtract ${val} to get ${total}`)
  return Promise.resolve(total)
}

const print = () => async function (total) {
  console.log(`Answer is ${total}`)
  return Promise.resolve(total)
}

module.exports = {
  pause,
  randomNumber,
  set,
  add,
  subtract,
  print
}
