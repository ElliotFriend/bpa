import { startTransaction } from '$lib/utils/horizonQueries'
import { Operation, Asset, Memo } from 'stellar-sdk'
import { fail } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        // get the submitted form fields
        const data = await request.formData()
        const source = data.get('source')
        let destination = data.get('destination')
        const otherDestination = data.get('otherDestination')
        const amount = data.get('amount')
        const memo = data.get('memo')
        const createAccount = data.get('createAccount')

        // see if we have a destination from the <select> or "other" element
        const opDestination = destination === 'other' ? otherDestination : destination

        if (
            !destination ||
            !amount ||
            parseFloat(amount) <= 0
        ) {
            return fail(400, {
                error: true,
                destination,
                otherDestination,
                amount,
                memo,
                createAccount,
            })
        }

        // start the transaction
        let transaction = await startTransaction(source)

        // add a memo if it was supplied
        if (memo) {
            transaction.addMemo(Memo.text(memo))
        }

        // check if we need a `createAccount` operation, or if we need a
        // `payment` operation
        if (createAccount) {
            transaction.addOperation(
                Operation.createAccount({
                    destination: opDestination,
                    startingBalance: amount,
                })
            )
        } else {
            transaction.addOperation(
                Operation.payment({
                    destination: opDestination,
                    amount,
                    asset: Asset.native(),
                })
            )
        }

        transaction = transaction.setTimeout(30).build()

        console.log(transaction.toXDR())
        return {
            success: true,
            transaction: transaction.toXDR(),
        }
    },
}
