import { StellarTomlResolver } from 'stellar-sdk'

/** @module $lib/utils/sep1 */

/**
 * Fetches and returns the stellar.toml file hosted by a provided domain.
 * @param {string} domain - Domain to get the stellar.toml file for
 * @returns {Promise<object>} A `Promise` that resolves to the parsed stellar.toml object
 */
export async function fetchStellarToml(domain) {
    let stellarToml = await StellarTomlResolver.resolve(domain)
    return stellarToml
}

/**
 * Fetches and returns the network passphrase to use with domain's infrastructure.
 * @param {string} domain - Domain to get the network passphrase for
 * @returns {Promise<string>} The passphrase for the specific Stellar network this infrastructure operates on
 */
export async function getNetworkPassphrase(domain) {
    let { NETWORK_PASSPHRASE } = await fetchStellarToml(domain)
    return NETWORK_PASSPHRASE
}

/**
 * Fetches and returns the endpoint for resolving SEP-2 federation protocol requests.
 * @param {string} domain - Domain to get the federation server for
 * @returns {Promise<string>} The endpoint for clients to resolve stellar addresses for users on domain via SEP-2 federation protocol
 */
export async function getFederationServer(domain) {
    let { FEDERATION_SERVER } = await fetchStellarToml(domain)
    return FEDERATION_SERVER
}

/**
 * Fetches and returns the endpoint used for SEP-6 transfer interactions.
 * @param {string} domain - Domain to get the SEP-6 transfer server for
 * @returns {Promise<string>} The endpoint used for SEP-6 Anchor/Client interoperability
 */
export async function getTransferServerSep6(domain) {
    let { TRANSFER_SERVER } = await fetchStellarToml(domain)
    return TRANSFER_SERVER
}

/**
 * Fetches and returns the endpoint used for SEP-24 transfer interactions.
 * @param {string} domain - Domain to get the SEP-24 transfer server for
 * @returns {Promise<string>} The endpoint used for SEP-24 Anchor/Client interoperability
 */
export async function getTransferServerSep24(domain) {
    let { TRANSFER_SERVER_SEP0024 } = await fetchStellarToml(domain)
    return TRANSFER_SERVER_SEP0024
}

/**
 * Fetches and returns the endpoint used for SEP-12 KYC interactions.
 * @param {string} domain - Domain to get the KYC server for
 * @returns {Promise<string>} The endpoint used for KYC customer info transfer
 */
export async function getKycServer(domain) {
    let { KYC_SERVER, TRANSFER_SERVER } = await fetchStellarToml(domain)
    // If `KYC_SERVER` is undefined in the domains TOML file, `TRANSFER_SERVER`
    // will be used
    return KYC_SERVER ?? TRANSFER_SERVER
}

/**
 * Fetches and returns the endpoint used for SEP-10 authentication interactions.
 * @param {string} domain - Domain to get the web authentication endpoint for
 * @returns {Promise<string>} The endpoint used for SEP-10 Web Authentication
 */
export async function getWebAuthEndpoint(domain) {
    let { WEB_AUTH_ENDPOINT } = await fetchStellarToml(domain)
    return WEB_AUTH_ENDPOINT
}

/**
 * Fetches and returns the signing key the server will use for SEP-10 authentication.
 * @param {string} domain - Domain to get the signing key for
 * @returns {Promise<string>} The public key of the keypair used for SEP-10 authentication
 */
export async function getServerSigningKey(domain) {
    let { SIGNING_KEY } = await fetchStellarToml(domain)
    return SIGNING_KEY
}

