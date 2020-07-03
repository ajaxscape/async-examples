const { pipeLineFunc } = require('./helper')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const calculate = (transactions, amendments) => {
  for (let index = 0; index < pipeLine.length; index++) {
    const pipeLineFunction = pipeLine[index]
    transactions = pipeLineFunction(transactions, amendments)
  }

  return transactions.map((trans) => ({ ...trans, complete: true }))
}

const transactions = [
  { type: 'a', val: 1 },
  { type: 'b', val: 2 },
  { type: 'c', val: 3 },
  { type: 'd', val: 4 }
]

console.log(transactions)
const results = calculate(transactions, amendments)
console.log(results)
