// export const csr = false

import { error } from '@sveltejs/kit'
import { browser } from '$app/environment'
import { storageAvailable } from '$lib/stores/localStore'

export function load() {
    if (browser) {
        if (storageAvailable('localStorage')) {
            return {
                localStorage: true,
            }
        } else {
            throw error(400, 'local storage required')
        }
    }
}
