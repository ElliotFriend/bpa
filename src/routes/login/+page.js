import { browser } from "$app/environment";
import { error, redirect } from '@sveltejs/kit';
import { storageAvailable } from '$lib/stores/localStore';
import { loadKeyId } from '$lib/utils/walletStore';

export function load() {
    if (browser) {
        if (storageAvailable('localStorage')) {
            const { bpaKeyId, bpaPublicKey } = loadKeyId()
            return {
                bpaKeyId,
                bpaPublicKey: JSON.parse(bpaPublicKey),
            }
        } else {
            throw error(400, 'local storage required')
        }
    } 
}