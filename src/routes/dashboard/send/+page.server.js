// import { TransactionBuilder, Server, Network } from 'stellar-sdk';
import { startTransaction, loadAccount } from '$lib/utils/horizonQueries';
import { Operation, Asset, MemoText, Memo } from 'stellar-sdk';

/** @type {import('./$types').Actions} */
export const actions = {
    preview: async ({ request }) => {
        const data = await request.formData()
        const source = data.get('source')
        const destination = data.get('destination')
        const amount = data.get('amount')
        const memo = data.get('memo')
        // get sequence number from horizon
        let transaction = await startTransaction(source)
        if (memo) {
            transaction.addMemo(Memo.text(memo))
        }
        // console.log(transaction)
        try {
            await loadAccount(destination)
            transaction.addOperation(Operation.payment({
                destination,
                amount,
                asset: Asset.native(),
            }))
        } catch (err) {
            console.log('err', err)
            transaction.addOperation(Operation.createAccount({
                destination,
                startingBalance: amount,
            }))
        }

        transaction = transaction.setTimeout(30).build()
        // check if destination exists
        // -> if exists add payment operation
        // -> if not exists add createAccount operation
        // check if memo was supplied
        // -> if exists add memo to transaction
        console.log(transaction.toXDR())
        return { 
            transaction: transaction.toXDR()
        }
    }
};
