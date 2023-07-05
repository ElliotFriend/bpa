import { StellarTomlResolver } from 'stellar-sdk'

export async function fetchStellarToml(homeDomain) {
    return StellarTomlResolver.resolve(homeDomain)
}

export async function getWebAuthEndpoint(homeDomain) {
    let { WEB_AUTH_ENDPOINT } = await fetchStellarToml(homeDomain)
    return WEB_AUTH_ENDPOINT
}

export async function getKycServer(homeDomain) {
    let { KYC_SERVER, TRANSFER_SERVER } = await fetchStellarToml(homeDomain)
    return KYC_SERVER ?? TRANSFER_SERVER
}

export async function getServerSigningKey(homeDomain) {
    let { SIGNING_KEY } = await fetchStellarToml(homeDomain)
    return SIGNING_KEY
}

export async function getTransferServerSep6(homeDomain) {
    let { TRANSFER_SERVER } = await fetchStellarToml(homeDomain)
    return TRANSFER_SERVER
}

export async function getTransferServerSep24(homeDomain) {
    let { TRANSFER_SERVER_SEP0024 } = await fetchStellarToml(homeDomain)
    return TRANSFER_SERVER_SEP0024
}
