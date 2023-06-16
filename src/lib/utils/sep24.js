import { StellarTomlResolver } from "stellar-sdk";

export async function initiateTransfer(authToken, direction, homeDomain = 'testanchor.stellar.org') {
    let { TRANSFER_SERVER_SEP0024 } = await StellarTomlResolver.resolve(homeDomain)

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
