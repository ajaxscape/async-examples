module.exports.pipeLineFunc = async (transactions, amendments) => {
  return Promise.all(transactions.map(async ({ val, type, prev = [], adjustments = [] }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      const { adjustment } = amendment
      prev.push(val)
      adjustments.push(adjustment)
      val += adjustment
    }

    return { val, type, prev, adjustments }
  }))
}
