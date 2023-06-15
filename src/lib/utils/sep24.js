import { StellarTomlResolver } from "stellar-sdk";
import { get } from 'svelte/store'
import { webAuthStore } from '$lib/stores/webAuthStore'

export async function initiateTransfer(authToken, direction, homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER_SEP0024 } = await StellarTomlResolver.resolve(homeDomain)
    // let token = get(webAuthStore).token

    let res = await fetch(`${TRANSFER_SERVER_SEP0024}/transactions/${direction}/interactive`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            'asset_code': 'SRT'
        })
    })
    let json = await res.json()
    return json
}

// export async function initiateWithdrawal(token, homeDomain = 'testanchor.stellar.org') {
//     let { TRANSFER_SERVER_SEP0024 } = await StellarTomlResolver.resolve(homeDomain)
// }
