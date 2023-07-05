import { StellarTomlResolver } from 'stellar-sdk'

export async function fetchStellarToml(domain) {
    return StellarTomlResolver.resolve(domain)
}

export async function getNetworkPassphrase(domain) {
    let { NETWORK_PASSPHRASE } = await fetchStellarToml(domain)
    return NETWORK_PASSPHRASE
}

export async function getFederationServer(domain) {
    let { FEDERATION_SERVER } = await fetchStellarToml(domain)
    return FEDERATION_SERVER
}
export async function getTransferServerSep6(domain) {
    let { TRANSFER_SERVER } = await fetchStellarToml(domain)
    return TRANSFER_SERVER
}

export async function getTransferServerSep24(domain) {
    let { TRANSFER_SERVER_SEP0024 } = await fetchStellarToml(domain)
    return TRANSFER_SERVER_SEP0024
}

export async function getKycServer(domain) {
    let { KYC_SERVER, TRANSFER_SERVER } = await fetchStellarToml(domain)
    return KYC_SERVER ?? TRANSFER_SERVER
}

export async function getWebAuthEndpoint(domain) {
    let { WEB_AUTH_ENDPOINT } = await fetchStellarToml(domain)
    return WEB_AUTH_ENDPOINT
}

export async function getServerSigningKey(domain) {
    let { SIGNING_KEY } = await fetchStellarToml(domain)
    return SIGNING_KEY
}

