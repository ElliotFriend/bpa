import { browser } from '$app/environment'
import { storageAvailable } from '$lib/stores/localStore'
import { walletStore } from '$lib/stores/walletStore'
import { get } from 'svelte/store'

/** @type {import('./$types').LayoutLoad} */
export function load() {
    if (browser) {
        const { publicKey } = get(walletStore)
        return {
            publicKey,
        }
    }
}
