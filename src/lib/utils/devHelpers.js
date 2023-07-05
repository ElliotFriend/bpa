import { startTransaction, submit, fundWithFriendbot } from '$lib/utils/horizonQueries'
import { Operation, Asset, Keypair } from 'stellar-sdk'

export async function addContactTrustlines(keypair, assets) {
    // let server = new Server('https://horizon-testnet.stellar.org')
    let transaction = await startTransaction(keypair.publicKey())
    transaction.addOperation(
        Operation.changeTrust({
            asset: new Asset('SRT', 'GCDNJUBQSX7AJWLJACMJ7I4BC3Z47BQUTMHEICZLE6MU4KQBRYG5JY6B'),
        })
    )
    for (let asset of assets.slice(1, 4)) {
        let assetObj = new Asset(asset.asset.split('-')[0], asset.asset.split('-')[1])

        transaction.addOperation(
            Operation.changeTrust({
                asset: assetObj,
            })
        )
    }
    transaction = transaction.setTimeout(30).build()
    transaction.sign(keypair)

    return await submit(transaction)
}

export async function mergeFriendbotAccount(publicKey) {
    let kp = Keypair.random()
    await fundWithFriendbot(kp.publicKey())
    let transaction = await startTransaction(kp.publicKey())
    transaction = transaction
        .addOperation(
            Operation.accountMerge({
                destination: publicKey,
            })
        )
        .setTimeout(30)
        .build()

    transaction.sign(kp)
    return await submit(transaction)
}
