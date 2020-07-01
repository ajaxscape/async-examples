const report = async (message) => {
  console.log(message)
}

module.exports.pipeLineFunc = async (transactions, amendments) => {
  const amendedTransactions = await Promise.all(transactions.map(async ({ val, type }) => {
    const amendment = amendments.find(({ type: transType }) => transType === type)
    if (amendment) {
      const prevVal = val
      val += amendment.adjustment
      await report(`Adjusted transaction type: "${type}" from ${prevVal} to ${val}`)
    }

    return { val, type }
  }))

  return Promise.all(amendedTransactions.map(async (transaction) => ({ ...transaction, status: 'amended' })))
}
