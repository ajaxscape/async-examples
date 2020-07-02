const add = (x, y) => x + y

const report = (result) => {
  console.log(`The result was ${result}`)
}

const calculate = () => {
  const a = add(10, 20)
  report(a)

  const b = add(11, 22)
  report(b)

  const c = add(a, b)
  report(c)

  return c
}

const total = calculate()
console.log(`*** The final total is: ${total}`)
