const { pipeLineFunc } = require('./helper')

const pipeLine = [pipeLineFunc, pipeLineFunc, pipeLineFunc, pipeLineFunc]

const amendments = [
  { type: 'a', adjustment: 10 },
  { type: 'c', adjustment: -5 }
]

const calculate = (transactions, amendments) => {
  return pipeLine.reduce((transactionsPromise, pipeLineFunction) => {
    return transactionsPromise
      .then((trans) => {
        return pipeLineFunction(trans, amendments)
      })
  }, Promise.resolve(transactions))
    .then((initialAmendedTrans) => {
      return Promise.resolve(initialAmendedTrans.map((trans) => {
        return { ...trans, complete: true }
      }))
    })
}

calculate([
  { type: 'a', val: 1 },
  { type: 'b', val: 2 },
  { type: 'c', val: 3 },
  { type: 'd', val: 4 }
], amendments).then((result) => {
  console.log(result)
})
