const { pipeLineFunc } = require('./helper')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const processPipeline = async (callback) => {
  for (let [fn, ...fns] = pipeLine; fn !== undefined; fn = fns.shift()) {
    await callback(fn)
  }
}

const calculate = async (transactions, amendments) => {
  await processPipeline(async (fn) => {
    transactions = await fn(transactions, amendments)
  })

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
