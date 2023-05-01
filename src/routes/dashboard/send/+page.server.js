import { startTransaction } from '$lib/utils/horizonQueries';
import { Operation, Asset, Memo } from 'stellar-sdk';

/** @type {import('./$types').Actions} */
export const actions = {
    preview: async ({ request }) => {
        // get the submitted form fields
        const data = await request.formData()
        const source = data.get('source')
        const destination = data.get('destination')
        const amount = data.get('amount')
        const memo = data.get('memo')
        const createAccount = data.get('createAccount')

        // start the transaction
        let transaction = await startTransaction(source)

        // add a memo if it was supplied
        if (memo) {
            transaction.addMemo(Memo.text(memo))
        }

        // check if we need a `createAccount` operation, or if we need a
        // `payment` operation
        if (createAccount) {
            transaction.addOperation(Operation.createAccount({
                destination,
                startingBalance: amount,
            }))
        } else {
            transaction.addOperation(Operation.payment({
                destination,
                amount,
                asset: Asset.native(),
            }))
        }

        
        transaction = transaction.setTimeout(30).build()

        console.log(transaction.toXDR())
        return { 
            transaction: transaction.toXDR()
        }
    }
};
