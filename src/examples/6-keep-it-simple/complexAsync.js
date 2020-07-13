const { pipeLineFunc } = require('./helper-promises')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const pipe = (...fns) => async (x, ...y) => fns.reduce(async (v, f) => f(await v, ...y), Promise.resolve(x))

const calculate = async (transactions) => {
  transactions = await pipe(...pipeLine)(transactions, amendments)
  return transactions.map((trans) => ({ ...trans, complete: true }))
}

const transactions = [
  { type: 'a', val: 1 },
  { type: 'b', val: 2 },
  { type: 'c', val: 3 },
  { type: 'd', val: 4 }
]

console.log(transactions)
calculate(transactions, amendments).then((result) => {
  console.log(result)
})
