import { error } from '@sveltejs/kit'
import { Server, Networks, TransactionBuilder } from 'stellar-sdk'
import { validPublicKey } from './generateKeypair'

const server = new Server('https://horizon-testnet.stellar.org')

export async function fetchAccount(publicKey) {
    try {
        let account = await server.accounts().accountId(publicKey).call()
        return {
            account,
            funded: true,
        }
    } catch (err) {
        if (err.response?.status === 404) {
            return {
                funded: false,
            }
        } else {
            throw error(
                err.response?.status ?? 400,
                `${err.response?.title} - ${err.response?.detail}`
            )
        }
    }
}

export async function loadAccount(publicKey) {
    try {
        console.log('here is the publicKey for me to load', publicKey)
        const account = await server.loadAccount(publicKey)
        console.log('here is the server response', account)
        return {
            account,
        }
    } catch (err) {
        // We expect horizon to response with a 404 if the account isn't funded
        if (err.response?.status === 404) {
            return {
                funded: false,
            }
        } else {
            throw error(err.response?.status || 400, err)
        }
    }
}

export async function startTransaction(sourcePublicKey) {
    console.log('here is the sourcePublicKey', sourcePublicKey)
    const source = await loadAccount(sourcePublicKey)
    console.log('here is the loaded account', source)
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
        console.log('submission response', res)
        return {
            success: true,
            hash: res.hash,
        }
    } catch (err) {
        console.error('error in transaction submit', err)
        // throw error(400, err)
        throw error(400, {
            message: err.response.data.title,
            result_codes: err.response.data.extras.result_codes
        })
    }
}

export async function getAccountBalances(publicKey) {
    const {
        account: { balances },
    } = await fetchAccount(publicKey)
    return balances
}

export async function fundWithFriendbot(publicKey) {
    if (validPublicKey(publicKey)) {
        const friendbotUrl = `https://friendbot.stellar.org?addr=${publicKey}`
        let unused = await fetch(friendbotUrl)
        return
    }
}

export async function fetchRecentPayments(publicKey, limit = 10) {
    let res = await server.payments().forAccount(publicKey).limit(limit).order('desc').call()
    return res.records
}

export async function getBalanceHomeDomains(balances) {
    let homeDomains = await Promise.all(
        balances.map(async (asset) => {
            if (asset.asset_type !== 'native') {
                let { account } = await fetchAccount(asset.asset_issuer)
                if (account.home_domain) {
                    return {
                        ...asset,
                        home_domain: account.home_domain,
                    }
                }
            }
        })
    )

    return homeDomains.filter((balance) => balance)
}

export async function findStrictSendPaths(sourceAsset, sourceAmount, destinationPublicKey) {
    try {
        let response = await server.strictSendPaths(sourceAsset, sourceAmount, destinationPublicKey).call()
        console.log('here are the paths', response)
        return response.records
    } catch (err) {
        console.error('error finding strictSend payment paths', err)
        throw error(400, err)
    }
}

export async function findStrictReceivePaths(sourcePublicKey, destinationAsset, destinationAmount) {
    try {
        let response = await server.strictReceivePaths(sourcePublicKey, destinationAsset, destinationAmount).call()
        console.log('here are the paths', response)
        return response.records
    } catch (err) {
        console.error('error finding strictRecieve payment paths', err)
        throw error(400, err)
    }
}
