import { error } from '@sveltejs/kit'
import { Server, Networks, TransactionBuilder } from 'stellar-sdk'
import { validPublicKey } from './generateKeypair'

const server = new Server('https://horizon-testnet.stellar.org')

export async function fetchAccount(publicKey) {
    try {
        let account = await server.accounts().accountId(publicKey).call()
        return {
            account,
            funded: true
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

export async function loadAccount(publicKey) {
    try {
        const account = await server.loadAccount(publicKey)
        return {
            account,
        }
    } catch (err) {
        // We expect horizon to response with a 404 if the account isn't funded
        if (err.response.status === 404) {
            return {
                funded: false,
            }
        } else {
            throw error(err.response.status, `${err.response.title} - ${err.response.detail}`)
        }
    }
}

export async function startTransaction(sourcePublicKey) {
    const source = await loadAccount(sourcePublicKey)
    const transaction = new TransactionBuilder(source.account, {
        networkPassphrase: Networks.TESTNET,
        fee: 100000,
    })

    return transaction
}

export async function submit(transaction) {
    try {
        console.log('transaciton received in submit fn', transaction)
        const res = await server.submitTransaction(transaction)
        return {
            success: true,
            hash: res.hash,
        }
    } catch (err) {
        console.log('error in transaction submit', err)
        throw error(400, err)
        // return {
        //     success: false,
        //     data: err.response.data,
        //     extras: err.response.data.extras,
        // }
    }
}

export async function getAccountBalances(publicKey) {
    const { account } = await fetchAccount(publicKey)
    return {
        balances: account.balances,
    }
}

export async function fundWithFriendbot(publicKey) {
    if (validPublicKey(publicKey)) {
        const friendbotUrl = `https://friendbot.stellar.org?addr=${publicKey}`
        await fetch(friendbotUrl)
    }
}
