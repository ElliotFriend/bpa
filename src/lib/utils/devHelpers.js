
import { startTransaction } from '$lib/utils/horizonQueries'
import { Server, Operation, Asset } from 'stellar-sdk'

export async function addContactTrustlines(keypair, assets) {
    let server = new Server('https://horizon-testnet.stellar.org');
    let transaction = await startTransaction(keypair.publicKey())
    for (let asset of assets.slice(1,5)) {
        let assetObj = new Asset(
            asset.asset.split('-')[0],
            asset.asset.split('-')[1]
        )

        transaction.addOperation(Operation.changeTrust({
            asset: assetObj
        }))
    }
    transaction = transaction.setTimeout(30).build()

    transaction.sign(keypair)
    return await server.submitTransaction(transaction)
}
