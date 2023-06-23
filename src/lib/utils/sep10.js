import { StellarTomlResolver, Utils } from "stellar-sdk"
import { error } from "@sveltejs/kit";

export async function fetchStellarToml(homeDomain = 'testanchor.stellar.org') {
    return StellarTomlResolver.resolve(homeDomain)
}

export async function getSep10Domains(balances) {
    let sep10Domains = await Promise.all(
        balances.map(async (asset) => {
            let stellarToml = await fetchStellarToml(asset.home_domain)
            if ('WEB_AUTH_ENDPOINT' in stellarToml) {
                return {
                    ...asset
                }
            }
        })
    )

    return sep10Domains.filter(balance => balance)
}

export async function getChallengeTransaction(publicKey, homeDomain = 'testanchor.stellar.org') {
    let { WEB_AUTH_ENDPOINT } = await fetchStellarToml(homeDomain)
    let res = await fetch(
        `${WEB_AUTH_ENDPOINT}?${new URLSearchParams({
            // possible parameters are `account`, `memo`, `home_domain`, and `client_domain`
            // for our purposes, we only need to supply an `account`
            account: publicKey,
        })}`
    )
    let json = await res.json()
    return json
}

export async function validateChallengeTransaction(transactionXDR, network, clientPublicKey, homeDomain = 'testanchor.stellar.org') {
    const { SIGNING_KEY } = await fetchStellarToml(homeDomain)
    console.log('another homeDomain', homeDomain)
    console.log('SIGNING_KEY', SIGNING_KEY)
    try {
        let results = Utils.readChallengeTx(transactionXDR, SIGNING_KEY, network, homeDomain, homeDomain)
        if (results.clientAccountID === clientPublicKey) {
            return results
        } else {
            throw error(400, 'clientAccountID does not match challenge transaction')
        }
    } catch (err) {
        throw error(400, err)
    }
}

export async function submitChallengeTransaction(transactionXDR, homeDomain = 'testanchor.stellar.org') {
    let { WEB_AUTH_ENDPOINT } = await fetchStellarToml(homeDomain)
    let res = await fetch(WEB_AUTH_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "transaction": transactionXDR})
    })
    let json = await res.json()
    if (!res.ok) {
        throw error(400, json.error)
    }
    return json.token
}
