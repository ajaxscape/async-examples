
const add = (x, y) => {
  const result = x + y
  console.log(`Adding ${x} to ${y} gives ${result}`)
  return Promise.resolve(result)
}

const subtract = (x, y) => {
  const result = x - y
  console.log(`Subtracting ${y} from ${x} gives ${result}`)
  return Promise.resolve(result)
}

const calculate = (val) => {
  return add(val, 10)
    .then((valA) => add(valA, 20))
    .then((valB) => add(valB, 5))
    .then((valC) => subtract(valC, 40))
    .then((total) => total)
}

const calculateAll = () => {
  console.log('******* Calculating *******')
  return Promise.all([
    calculate(10),
    calculate(20),
    calculate(30),
    calculate(40),
    calculate(50)
  ]).then((totals) => {
    console.log('****** Getting final result ******')
    return totals.reduce((runningTotal, currentTotal) => runningTotal + currentTotal, 0)
  })
}

calculateAll()
  .then((result) => console.log(`The result is ${result}`))
