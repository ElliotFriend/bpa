// import { fetchAssets } from '$lib/utils/stellarExpert';
import { getAccountBalances } from '$lib/utils/horizonQueries'
import { page } from '$app/stores'
// console.log('pagejsPage',)

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const network = 'testnet'
    const baseUrl = `https://api.stellar.expert/explorer/${network}/`

    const fetchAssets = async () => {
        let assetRes = await fetch(
            `${baseUrl}asset?${new URLSearchParams({
                // these are all the defaults, but you could customize them if you want
                search: '',
                sort: 'rating',
                order: 'desc',
                limit: 10,
                cursor: 0,
            })}`
        )
        let json = await assetRes.json()
        // const assets = fetchAssets()
        return json._embedded.records
    }

    return {
        assets: fetchAssets(),
    }
}
