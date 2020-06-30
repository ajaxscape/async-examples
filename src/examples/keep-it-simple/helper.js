
module.exports.pipeLineFunc = async (transactions, amendments) => {
  return transactions.map(({ val, type }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      val += amendment.adjustment
    }
    return { val, type }
  })
}
