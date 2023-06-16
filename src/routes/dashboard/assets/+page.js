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
        let assetJson = await assetRes.json()

        return assetJson._embedded.records
    }

    return {
        assets: fetchAssets(),
    }
}
