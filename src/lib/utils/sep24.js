import { StellarTomlResolver } from "stellar-sdk";

export async function initiateTransfer(authToken, direction, homeDomain = 'testanchor.stellar.org', urlFields = {}) {
    let { TRANSFER_SERVER_SEP0024 } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${TRANSFER_SERVER_SEP0024}/transactions/${direction}/interactive`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(urlFields)
    })
    let json = await res.json()
    return json
}

export async function queryTransfers(authToken, assetCode, homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER_SEP0024 } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${TRANSFER_SERVER_SEP0024}/transactions?${new URLSearchParams({
        asset_code: assetCode
    })}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })
    let json = await res.json()
    return json
}
