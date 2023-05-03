import './horizonQueries.43912467.js'
import './paths.9549ada4.js'
async function s({ fetch: e, parent: r }) {
    const t = 'https://api.stellar.expert/explorer/testnet/'
    return {
        assets: (async () =>
            (
                await (
                    await e(
                        `${t}asset?${new URLSearchParams({
                            search: '',
                            sort: 'rating',
                            order: 'desc',
                            limit: 10,
                            cursor: 0,
                        })}`
                    )
                ).json()
            )._embedded.records)(),
    }
}
const p = Object.freeze(
    Object.defineProperty({ __proto__: null, load: s }, Symbol.toStringTag, { value: 'Module' })
)
export { p as _, s as l }
