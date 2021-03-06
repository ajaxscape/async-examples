const add = async (x, y) => x + y

const report = (result) => {
  console.log(`The result was ${result}`)
}

const calculate = async () => {
  const a = await add(10, 20)
  report(a)

  const b = await add(11, 22)
  report(b)

  const c = await add(a, b)
  report(c)

  return c
}

calculate()
  .then(total => {
    console.log(`*** The final total is: ${total}`)
  })
