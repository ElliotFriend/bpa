import { browser } from '$app/environment'
import { walletStore } from '$lib/stores/walletStore'

export function load() {
    if (browser) {
        const { keyId, publicKey } = walletStore
        return {
            keyId,
            publicKey,
        }
    }
}
