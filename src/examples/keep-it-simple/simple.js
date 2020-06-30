const { pipeLineFunc } = require('./helper')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const calculate = async (transactions, amendments) => {
  for (let index = 0; index < pipeLine.length; index++) {
    const pipeLineFunction = pipeLine[index]
    transactions = await pipeLineFunction(transactions, amendments)
  }

  return transactions.map((trans) => ({ ...trans, complete: true }))
}

calculate([
  { type: 'a', val: 1 },
  { type: 'b', val: 2 },
  { type: 'c', val: 3 },
  { type: 'd', val: 4 }
], amendments).then((result) => {
  console.log(result)
})
