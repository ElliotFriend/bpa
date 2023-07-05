import { getTransferServerSep24 } from "$lib/utils/sep1"
import { error } from '@sveltejs/kit'

export async function initiateTransfer(
    authToken,
    direction,
    homeDomain,
    urlFields = {}
) {
    let transferServerSep24 = await getTransferServerSep24(homeDomain)

    let res = await fetch(`${transferServerSep24}/transactions/${direction}/interactive`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(urlFields),
    })
    let json = await res.json()
    return json
}

export async function queryTransfers(authToken, assetCode, homeDomain) {
    let transferServerSep24 = await getTransferServerSep24(homeDomain)

    let res = await fetch(
        `${transferServerSep24}/transactions?${new URLSearchParams({
            asset_code: assetCode,
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

    if (!res.ok) {
        throw error(res.status, {
            message: json.error
        })
    } else {
        return json
    }
}
