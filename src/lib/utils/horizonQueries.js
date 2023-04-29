import { Server, Networks, TransactionBuilder } from "stellar-sdk";

const server = new Server('https://horizon-testnet.stellar.org');

export async function fetchAccount(publicKey) {
    let res = await server.accounts().accountId(publicKey).call()
    
    return {
        account: res
    }
}

export async function loadAccount(publicKey) {
    const account = await server.loadAccount(publicKey)
    return { 
        account 
    }
}

export async function startTransaction(publicKey) {
    const source = await loadAccount(publicKey)
    const transaction = new TransactionBuilder(
        source.account, {
            networkPassphrase: Networks.TESTNET,
            fee: 10000
        }
    )

    return transaction
}
