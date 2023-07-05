import { Utils } from 'stellar-sdk'
import { fetchStellarToml, getServerSigningKey, getWebAuthEndpoint } from '$lib/utils/sep1'
import { error } from '@sveltejs/kit'

export async function getSep10Domains(balances) {
    let sep10Domains = await Promise.all(
        balances.map(async (asset) => {
            let stellarToml = await fetchStellarToml(asset.home_domain)
            if ('WEB_AUTH_ENDPOINT' in stellarToml) {
                return {
                    ...asset,
                }
            }
        })
    )

    return sep10Domains.filter((balance) => balance)
}

export async function getChallengeTransaction(publicKey, homeDomain) {
    let webAuthEndpoint = await getWebAuthEndpoint(homeDomain)

    let res = await fetch(
        `${webAuthEndpoint}?${new URLSearchParams({
            // possible parameters are `account`, `memo`, `home_domain`, and `client_domain`
            // for our purposes, we only need to supply an `account`
            account: publicKey,
        })}`
    )
    let json = await res.json()
    return json
}

export async function validateChallengeTransaction(
    transactionXDR,
    network,
    clientPublicKey,
    homeDomain
) {
    let serverSigningKey = await getServerSigningKey(homeDomain)

    try {
        let results = Utils.readChallengeTx(
            transactionXDR,
            serverSigningKey,
            network,
            homeDomain,
            homeDomain
        )
        if (results.clientAccountID === clientPublicKey) {
            return results
        } else {
            throw error(400, 'clientAccountID does not match challenge transaction')
        }
    } catch (err) {
        throw error(400, err)
    }
}

export async function submitChallengeTransaction(
    transactionXDR,
    homeDomain
) {
    let webAuthEndpoint = await getWebAuthEndpoint(homeDomain)
    let res = await fetch(webAuthEndpoint, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transaction: transactionXDR }),
    })
    let json = await res.json()
    if (!res.ok) {
        throw error(400, json.error)
    }
    return json.token
}

export function validateAuthToken(authToken) {
    return
}
