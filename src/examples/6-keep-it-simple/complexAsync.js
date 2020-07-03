const { pipeLineFunc } = require('./helper')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const calculate = async (transactions, amendments) => {
  transactions = await pipeLine.reduce(async (transactionsPromise, pipeLineFunction) => {
    return pipeLineFunction(await transactionsPromise, amendments)
  }, Promise.resolve(transactions))

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
