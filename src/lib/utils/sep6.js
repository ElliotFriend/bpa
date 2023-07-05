// import { StellarTomlResolver } from 'stellar-sdk'
import { getTransferServerSep6 } from "$lib/utils/sep1"

export async function initiateTransfer6(
    authToken,
    endpoint,
    formData,
    homeDomain
) {
    let transferServer = await getTransferServerSep6(homeDomain)

    let searchParams = new URLSearchParams(formData)

    let res = await fetch(`${transferServer}/${endpoint}?${searchParams}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
    })

    let json = await res.json()
    return json
}

export async function getSep6Info(homeDomain) {
    let transferServer = await getTransferServerSep6(homeDomain)

    let res = await fetch(`${transferServer}/info`)
    let json = await res.json()
    return json
}

export async function getTransferStatus6(
    authToken,
    transferId,
    homeDomain
) {
    let transferServer = await getTransferServerSep6(homeDomain)

    let res = await fetch(
        `${transferServer}/transaction?${new URLSearchParams({
            id: transferId,
        })}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        }
    )

    let { transaction } = await res.json()
    return transaction
}

export async function queryTransfers6(
    authToken,
    assetCode,
    publicKey,
    homeDomain
) {
    let transferServer = await getTransferServerSep6(homeDomain)

    let res = await fetch(
        `${transferServer}/transactions?${new URLSearchParams({
            asset_code: assetCode,
            account: publicKey,
        })}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        }
    )
    let json = await res.json()
    return json
}
