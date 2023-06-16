import { browser } from '$app/environment'
import { error, redirect } from '@sveltejs/kit'
import { storageAvailable } from '$lib/stores/localStore'
import { walletStore } from '$lib/stores/walletStore'

export function load() {
    if (browser) {
        const { keyId, publicKey } = walletStore
        return {
            keyId,
            publicKey
        }
    }
}
