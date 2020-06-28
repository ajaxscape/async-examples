
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

const calculate = async (val) => {
  const valA = await add(val, 10)
  const valB = await add(valA, 20)
  const valC = await add(valB, 5)
  const total = await subtract(valC, 40)
  return total
}

const calculateAll = async () => {
  console.log('******* Calculating *******')
  const totals = await Promise.all([
    calculate(10),
    calculate(20),
    calculate(30),
    calculate(40),
    calculate(50)
  ])
  console.log('****** Getting final result ******')
  return totals.reduce((runningTotal, currentTotal) => runningTotal + currentTotal, 0)
}

calculateAll()
  .then((result) => console.log(`The result is ${result}`))
