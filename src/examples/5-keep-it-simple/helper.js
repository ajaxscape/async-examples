const pipeLineFunc = (transactions, amendments) => {
  return transactions.map(({ val, type, prev = [], adjustments = [] }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      const { adjustment } = amendment
      prev.push(val)
      adjustments.push(adjustment)
      val += adjustment
    }
    return { val, type, prev, adjustments }
  })
}

module.exports = {
  pipeLineFunc
}
