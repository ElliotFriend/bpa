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

/**
 * Requests, validates, and returns a SEP-10 challenge transaction and the corresponding network passphrase from an anchor server.
 * @param {string} publicKey - Public stellar address the challenge transaction will be generated for
 * @param {string} domain - Domain to request a challenge transaction from
 * @returns {Promise<Object>} - Object containing the XDR representation of a challenge transaction, and a network passphrase
 */
export async function getChallengeTransaction(publicKey, domain) {
    // let webAuthEndpoint = await getWebAuthEndpoint(domain)
    let { WEB_AUTH_ENDPOINT, SIGNING_KEY, NETWORK_PASSPHRASE } = await fetchStellarToml(domain)

    let res = await fetch(
        `${WEB_AUTH_ENDPOINT}?${new URLSearchParams({
            // Possible parameters are `account`, `memo`, `home_domain`, and
            // `client_domain`. For our purposes, we only supply an `account`.
            account: publicKey,
        })}`
    )
    let json = await res.json()

    validateChallengeTransaction({
        transactionXDR: json.transaction,
        serverSigningKey: SIGNING_KEY,
        network: NETWORK_PASSPHRASE,
        clientPublicKey: publicKey,
        homeDomain: domain
    })
    return json
}

/**
 * Validates the correct structure and information in a SEP-10 challenge transaction.
 * @param {Object} opts - Options object
 * @param {string} opts.transactionXDR - Challenge transaction encoded in base64 XDR format
 * @param {string} opts.serverSigningKey - Public Stellar address the anchor should use to sign the challenge transaction
 * @param {string} opts.network - Network passphrase the challenge transaction is expected to be built for
 * @param {string} opts.clientPublicKey - Public Stellar address of the client authenticating with the anchor
 * @param {string} opts.homeDomain - Domain of the anchor that generated the challenge transaction
 * @param {string} [opts.clientDomain=opts.homeDomain] - Used for client domain verification in the SEP-10 authentication flow
 * @throws {error} Will throw an error if any part of the challenge transaction doesn't match the SEP-10 specification
 */
function validateChallengeTransaction({
    transactionXDR,
    serverSigningKey,
    network,
    clientPublicKey,
    homeDomain,
    clientDomain
}) {

    if (!clientDomain) {
        clientDomain = homeDomain
    }
    try {
        let results = Utils.readChallengeTx(
            transactionXDR,
            serverSigningKey,
            network,
            homeDomain,
            clientDomain
        )
        if (results.clientAccountID === clientPublicKey) {
            return
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
