const network = 'testnet'
const baseUrl = `https://api.stellar.expert/explorer/${network}/`

export async function fetchAssets() {
    let res = await fetch(`${baseUrl}asset?${new URLSearchParams({
        // these are all the defaults, but you could customize them if you want
        search: '',
        sort: 'rating',
        order: 'desc',
        limit: 10,
        cursor: 0,
    })}`)
    let json = await res.json()
    // console.log(json)
    return json._embedded.records
}
