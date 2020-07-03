const pipeLineFunc = (transactions, amendments) => {
  return Promise.all(transactions.map(({ val, type, prev = [], adjustments = [] }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      const { adjustment } = amendment
      prev.push(val)
      adjustments.push(adjustment)
      val += adjustment
    }
    return Promise.resolve({ val, type, prev, adjustments })
  }))
}

module.exports = {
  pipeLineFunc
}
