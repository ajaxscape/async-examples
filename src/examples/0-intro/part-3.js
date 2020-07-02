const add = async (x, y) => x + y

const report = (result) => {
  console.log(`The result was ${result}`)
}

const calculate = () => {
  return add(10, 20)
    .then(a => {
      report(a)
      return add(11, 22)
        .then(b => {
          report(b)
          return add(a, b)
            .then(c => {
              report(c)
              return Promise.resolve(c)
            })
        })
    })
}

calculate()
  .then(total => {
    console.log(`*** The final total is: ${total}`)
  })
