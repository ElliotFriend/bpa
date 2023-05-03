import { json } from '@sveltejs/kit'
import { BPA_SECRET_KEY } from '$env/static/private'
import { Keypair, Server, Networks, Operation, TransactionBuilder } from 'stellar-sdk'
import { fundWithFriendbot } from '$lib/utils/horizonQueries'

export async function POST({ request }) {
    const { publicKey } = await request.json()

    const server = new Server('https://horizon-testnet.stellar.org')
    const kp = Keypair.fromSecret(BPA_SECRET_KEY)
    let account
    try {
        account = await server.loadAccount(kp.publicKey())
        // console.log(account)
    } catch (err) {
        // if our account creator is not funded (testnet reset, likely), let's fund it right quick
        await fundWithFriendbot(kp.publicKey())
        account = await server.loadAccount(kp.publicKey())
    }

    const transaction = new TransactionBuilder(account, {
        networkPassphrase: Networks.TESTNET,
        fee: 10000,
    })
        .addOperation(
            Operation.createAccount({
                destination: publicKey,
                startingBalance: '1', // to avoid worrying about sponsored reserves and such
            })
        )
        .setTimeout(30)
        .build()

    transaction.sign(kp)

    try {
        const res = await server.submitTransaction(transaction)
        return json({
            success: true,
            hash: res.hash,
        })
    } catch (err) {
        return json({
            success: false,
            data: err.response.data,
            extras: err.response.data.extras,
        })
    }
}
