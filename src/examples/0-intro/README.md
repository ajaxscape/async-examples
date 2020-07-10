# Introduction
The following three examples demonstrate a simple synchronous coding example that is converted to deal with a function that is changed to run asynchronously.  First of all using promises and then with async and await syntax.

The original code is as follows:
```js
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
```

If the "add" function is converted to be an asynchronous function, the "calculate" function, and the code calling that function will need to be converted to use promises as follows:
```js
const add = (x, y) => Promise.resolve(x + y)

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
```

If instead with async and await syntax, the following can be done:
```js
const add = (x, y) => Promise.resolve(x + y)

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
```

Please note that even the "add" function could be changed to:
```js
const add = async (x, y) => x + y
```

Remember that the async keyword indicates that whatever the function returns it will be within a promise, hence dealing with results returned from an async function is called is the same way you deal with any function returning a promise.