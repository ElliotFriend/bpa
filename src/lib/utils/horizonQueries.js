import { error } from "@sveltejs/kit";
import { Server, Networks, TransactionBuilder } from "stellar-sdk";

const server = new Server('https://horizon-testnet.stellar.org');

export async function fetchAccount(publicKey) {
    let res = await server.accounts().accountId(publicKey).call()
    
    return {
        account: res
    }
}

export async function loadAccount(publicKey) {
    try {
        const account = await server.loadAccount(publicKey)
        return { 
            funded: true,
            account 
        }
    } catch (err) {
        // We expect horizon to response with a 404 if the account isn't funded
        if (err.response.status === 404){
            return {
                funded: false
            }
        } else {
            throw error(err.response.status, `${err.response.title} - ${err.response.detail}`)
        }
    }
}

export async function startTransaction(sourcePublicKey) {
    const source = await loadAccount(sourcePublicKey)
    const transaction = new TransactionBuilder(
        source.account, {
            networkPassphrase: Networks.TESTNET,
            fee: 10000
        }
    )

    return transaction
}

export async function getAccountBalances(publicKey) {
    const { account } = await fetchAccount(publicKey)
    return {
        balances: account.balances
    }
}
