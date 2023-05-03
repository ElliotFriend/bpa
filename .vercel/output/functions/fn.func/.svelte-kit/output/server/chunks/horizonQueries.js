import { e as error } from './index.js'
import { Server, TransactionBuilder, Networks } from 'stellar-sdk'
const server = new Server('https://horizon-testnet.stellar.org')
async function fetchAccount(publicKey) {
    let res = await server.accounts().accountId(publicKey).call()
    return {
        account: res,
    }
}
async function loadAccount(publicKey) {
    try {
        const account = await server.loadAccount(publicKey)
        return {
            funded: true,
            account,
        }
    } catch (err) {
        if (err.response.status === 404) {
            return {
                funded: false,
            }
        } else {
            throw error(err.response.status, `${err.response.title} - ${err.response.detail}`)
        }
    }
}
async function startTransaction(sourcePublicKey) {
    const source = await loadAccount(sourcePublicKey)
    const transaction = new TransactionBuilder(source.account, {
        networkPassphrase: Networks.TESTNET,
        fee: 1e4,
    })
    return transaction
}
async function getAccountBalances(publicKey) {
    const { account } = await fetchAccount(publicKey)
    return {
        balances: account.balances,
    }
}
export { fetchAccount as f, getAccountBalances as g, startTransaction as s }
