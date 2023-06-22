import { StellarTomlResolver } from "stellar-sdk"

// TODO: Make it so that anchors without a `KYC_SERVER` toml entry will use the anchor's `TRANSFER_SERVER` instead.

export async function getSep12Fields(authToken, homeDomain = 'testanchor.stellar.org') {
    let { KYC_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${KYC_SERVER}/customer`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    })

    console.log('sep12 get res', res)
    let json = await res.json()
    console.log('sep12 get json', json)
    return json
}

export async function putSep12Fields(authToken, fields, homeDomain = 'testanchor.stellar.org') {
    let { KYC_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${KYC_SERVER}/customer`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(fields)
    })
    console.log('sep12 put res', res)
    let json = await res.json()
    console.log('sep12 put json', json)
    return json
}

export async function deleteSep12Customer(authToken, publicKey, homeDomain = 'testanchor.stellar.org') {
    let { KYC_SERVER } = await StellarTomlResolver.resolve(homeDomain)

    let res = await fetch(`${KYC_SERVER}/customer/${publicKey}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        }
    })
    console.log('sep12 delete res', res)
    let json = await res.json()
    console.log('sep12 delete json', json)
    return json
}
