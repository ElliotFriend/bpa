import { StellarTomlResolver } from "stellar-sdk"

export async function initiateTransfer6(authToken, endpoint, formData, homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let searchParams = new URLSearchParams(formData)

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

export async function getTransferStatus6(authToken, transferId, homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${TRANSFER_SERVER}/transaction?${new URLSearchParams({
        id: transferId,
    })}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })

    let { transaction } = await res.json()
    return transaction
}


export async function queryTransfers6(authToken, assetCode, publicKey, homeDomain='testanchor.stellar.org') {
    let { TRANSFER_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${TRANSFER_SERVER}/transactions?${new URLSearchParams({
        asset_code: assetCode,
        account: publicKey,
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
