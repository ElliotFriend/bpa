// export const csr = false

import { error } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { storageAvailable } from '$lib/utils/storageAvailable';
import { generateKeypair } from '$lib/utils/generateKeypair';

export function load() {
    if (browser) {
        if (storageAvailable("localStorage")) {
            return {
                localStorage: true,
            }

        } else {
            throw error(400, 'local storage required')
        }
    }
}
