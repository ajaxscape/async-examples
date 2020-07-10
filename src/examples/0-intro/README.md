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

If the "add" function is asynchronous, the "calculate" function will involve nested promises as follows:
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

If using async and await syntax, the following code can be written instead:
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

Even the "add" function could be changed to:
```js
const add = async (x, y) => x + y
```

Notice that the code using async and await syntax is almost the same as the original code.  Only the addition of the async and await keywords are the difference.  The functionality however, is identical to the code using promises.

This clearly shows that by using the async and await syntax, it is now possible to write asynchronous code using synchronous code structure.  This prevents compromising the readability and therefore maintainability of code when converting it to run asynchronously.