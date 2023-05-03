import { browser } from '$app/environment'
import { storageAvailable } from '$lib/stores/localStore'

/** @type {import('./$types').LayoutLoad} */
export function load() {
    if (browser) {
        if (storageAvailable('localStorage')) {
            const bpaPublicKey = JSON.parse(localStorage.getItem('bpa:publicKey'))
            return {
                bpaPublicKey,
            }
        }
    }
}
