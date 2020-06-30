
module.exports.pipeLineFunc = async (transactions, amendments) => {
  return Promise.all(transactions.map(async ({ val, type }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      val += amendment.adjustment
    }
    return { val, type }
  }))
}
