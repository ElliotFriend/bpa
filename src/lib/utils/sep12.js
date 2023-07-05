import { getKycServer } from "$lib/utils/sep1"

export async function getSep12Fields(authToken, homeDomain) {
    let kycServer = await getKycServer(homeDomain)

    let res = await fetch(`${kycServer}/customer`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
    })

    console.log('sep12 get res', res)
    let json = await res.json()
    console.log('sep12 get json', json)
    return json
}

export async function putSep12Fields(authToken, fields, homeDomain) {
    let kycServer = await getKycServer(homeDomain)

    let res = await fetch(`${kycServer}/customer`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(fields),
    })
    console.log('sep12 put res', res)
    let json = await res.json()
    console.log('sep12 put json', json)
    return json
}

export async function deleteSep12Customer(
    authToken,
    publicKey,
    homeDomain
) {
    let kycServer = await getKycServer(homeDomain)

    let res = await fetch(`${kycServer}/customer/${publicKey}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
    })
    console.log('sep12 delete res', res)
    let json = await res.json()
    console.log('sep12 delete json', json)
    return json
}
