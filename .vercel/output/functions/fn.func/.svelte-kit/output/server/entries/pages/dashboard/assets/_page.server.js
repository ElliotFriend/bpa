import { s as startTransaction } from '../../../../chunks/horizonQueries.js'
import { Asset, Operation } from 'stellar-sdk'
const actions = {
    preview: async ({ request }) => {
        const data = await request.formData()
        const source = data.get('source')
        const asset = data.get('asset')
        const addAsset = data.get('addAsset')
        const assetObj = new Asset(asset.split('-')[0], asset.split('-')[1])
        let transaction = await startTransaction(source)
        if (addAsset) {
            transaction.addOperation(
                Operation.changeTrust({
                    asset: assetObj,
                })
            )
        } else {
            transaction.addOperation(
                Operation.changeTrust({
                    asset: assetObj,
                    limit: '0',
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
