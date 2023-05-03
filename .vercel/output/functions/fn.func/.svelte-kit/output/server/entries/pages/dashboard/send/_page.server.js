import { s as startTransaction } from '../../../../chunks/horizonQueries.js'
import { Memo, Operation, Asset } from 'stellar-sdk'
const actions = {
    preview: async ({ request }) => {
        const data = await request.formData()
        const source = data.get('source')
        const destination = data.get('destination')
        const amount = data.get('amount')
        const memo = data.get('memo')
        const createAccount = data.get('createAccount')
        let transaction = await startTransaction(source)
        if (memo) {
            transaction.addMemo(Memo.text(memo))
        }
        if (createAccount) {
            transaction.addOperation(
                Operation.createAccount({
                    destination,
                    startingBalance: amount,
                })
            )
        } else {
            transaction.addOperation(
                Operation.payment({
                    destination,
                    amount,
                    asset: Asset.native(),
                })
            )
        }
        transaction = transaction.setTimeout(30).build()
        console.log(transaction.toXDR())
        return {
            transaction: transaction.toXDR(),
        }
    },
}
export { actions }
