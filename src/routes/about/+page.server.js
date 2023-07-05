import { Server } from 'stellar-sdk'

export async function load() {
    const server = new Server('https://horizon-testnet.stellar.org')
    let { records } = await server.assets().limit(200).order('desc').call()

    return {
        num_records: records.length,
        most_recent: {
            code: records[0].asset_code,
            issuer: records[0].asset_issuer,
        },
    }
}
