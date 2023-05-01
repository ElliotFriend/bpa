import { startTransaction } from "$lib/utils/horizonQueries";
import { Operation, Asset } from 'stellar-sdk'

/** @type {import('./$types').Actions} */
export const actions = {
    preview: async ({ request }) => {
        // get the submitted form fields
        const data = await request.formData()
        const source = data.get('source')
        const asset = data.get('asset')
        const addAsset = data.get('addAsset')

        // create the Asset object
        const assetObj = new Asset(
            asset.split('-')[0],
            asset.split('-')[1]
        )
        
        // start the transaction
        let transaction = await startTransaction(source)

        if (addAsset) {
            transaction.addOperation(Operation.changeTrust({
                asset: assetObj
            }))
        } else {
            transaction.addOperation(Operation.changeTrust({
                asset: assetObj,
                limit: "0"
            }))
        }

        transaction = transaction.setTimeout(30).build()

        console.log(transaction.toXDR())

        return {
            transaction: transaction.toXDR()
        }
    },
}
