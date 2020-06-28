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

module.exports = { add, subtract }
