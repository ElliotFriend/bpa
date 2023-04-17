import { KeyManager, KeyManagerPlugins, KeyType } from '@stellar/wallet-sdk';
import { error } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { page } from '$app/stores'

const setupKeyManager = () => {
    const localKeyStore = new KeyManagerPlugins.LocalStorageKeyStore()
    localKeyStore.configure({
        prefix: 'bpa',
        storage: localStorage
    })
    const keyManager = new KeyManager({
        keyStore: localKeyStore,
    })
    keyManager.registerEncrypter(KeyManagerPlugins.ScryptEncrypter);

    return keyManager
}

// register the user at signup time
export const registerUser = (publicKey, secretKey, pincode, confirmPincode) => {
    if (!browser) {
        throw error(400, 'browser required for signup')
    }

    if (pincode !== confirmPincode) {
        throw error(400, 'pincode mismatch. please try again')
    }

    if (window.localStorage.getItem('bpa:keyId') !== null) {
        throw error(400, 'user already registered. please login instead')
    }

    const keyManager = setupKeyManager();
    // TODO: check if bpaKeyId already exists (i.e., they've already registered)
    // keyManager.registerEncrypter(KeyManagerPlugins.ScryptEncrypter);

    return keyManager.storeKey({
        key: {
            type: KeyType.plaintextKey,
            publicKey: publicKey,
            privateKey: secretKey
        },

        password: pincode.toString(),
        encrypterName: KeyManagerPlugins.ScryptEncrypter.name,
    })
    .then((keyMetadata) => {
        window.localStorage.setItem('bpa:keyId', keyMetadata.id);
        // console.log("Successfully encrypted and stored key: ", keyMetadata);
        window.localStorage.setItem('bpa:publicKey', JSON.stringify(publicKey));
        console.log("gonna return", keyMetadata.id)
        return keyMetadata.id
        // loadUser()
        // TODO: redirect to dashboard
    })
    .catch((e) => {
        console.log("Error saving key: ", e.toString());
        throw error(400, e.toString());
    })
}

// load the user when they try to login
export const loadUser = (keyId, pincode) => {
    if (browser) {
        const keyManager = setupKeyManager();

        let bpaKeyId = window.localStorage.getItem('bpa:keyId');
        let bpaPublicKey = window.localStorage.getItem('bpa:publicKey');
        // console.log(keyManager.loadAllKeyIds())
        keyManager.loadKey(keyId, pincode)
        .then((what) => console.log("what", what))
    }
}


