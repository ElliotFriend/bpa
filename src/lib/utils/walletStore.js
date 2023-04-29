import { KeyManager, KeyManagerPlugins, KeyType } from '@stellar/wallet-sdk';
import { error, redirect } from '@sveltejs/kit';
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
        throw error(400, 'user already registered. please <a class="underline" href="/login">login</a> instead')
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
    .catch((err) => {
        console.log("Error saving key: ", err.toString());
        throw error(400, err.toString());
    })
}

export const loginUser = (keyId, pincode) => {
    if (!browser) {
        throw error(400, 'browser required for login')
    }

    const keyManager = setupKeyManager();
    return keyManager.loadKey(keyId, pincode)
    .catch((err) => {
        console.error("Error loading key: ", err.toString())
        throw error(400, 'incorrect pincode')
    })
}

// load the user when they try to login
export const loadKeyId = () => {
    if (!browser) {
        throw error(400, 'browser required for login')
    }

    let bpaKeyId = window.localStorage.getItem('bpa:keyId');
    let bpaPublicKey = window.localStorage.getItem('bpa:publicKey');
    // console.log(keyManager.loadAllKeyIds())
    return {
        bpaKeyId,
        bpaPublicKey
    }
}

export const getSourcePublicKey = () => {
    if (!browser) {
        throw error(400, 'browser required to get public key from localStorage')
    }
    
    let bpaPublicKey = JSON.parse(window.localStorage.getItem('bpa:publicKey'))
    return {
        bpaPublicKey
    }
}
