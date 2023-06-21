import { StellarTomlResolver } from "stellar-sdk"

export async function initiateTransfer6(authToken, assetCode, publicKey, endpoint, homeDomain = 'testanchor.stellar.org', type = null, amount = null) {
    let { TRANSFER_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let searchParams = new URLSearchParams({
        asset_code: assetCode,
        account: publicKey,
    })

    if (type) {
        searchParams.append('type', type)
    }
    if (amount) {
        searchParams.append('amount', amount)
    }

    let res = await fetch(`${TRANSFER_SERVER}/${endpoint}?${searchParams}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })

    let json = await res.json()
    return json
}

export async function getSep6Info(homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${TRANSFER_SERVER}/info`)
    let json = await res.json()
    return json
}
