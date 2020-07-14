const { pipeLineFunc } = require('./helper-promises')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const pipe = (fns) => async (collection, ...config) => fns.reduce(async (v, f) => f(await v, ...config), collection)

const transactions = [
  { type: 'a', val: 1 },
  { type: 'b', val: 2 },
  { type: 'c', val: 3 },
  { type: 'd', val: 4 }
]

console.log(transactions)

const calculate = pipe([
  ...pipeLine,
  (transactions) => transactions.map((transaction) => ({ ...transaction, complete: true }))
])

calculate(transactions, amendments).then((result) => console.log(result))
