import { KeyManager, KeyManagerPlugins, KeyType } from '@stellar/wallet-sdk'
import { error } from '@sveltejs/kit'
import { browser } from '$app/environment'
import { get } from 'svelte/store'
// import { localStore } from '$lib/stores/localStore'
import { persisted } from 'svelte-local-storage-store'


function createWallet() {
    const { subscribe, set, update } = persisted('bpa:walletStore', {})

    return {
        subscribe,

        register: (publicKey, secretKey, pincode) => {

            // if (pincode !== confirmPincode) {
            //     throw error(400, 'pincode mismatch. please try again')
            // }

            const keyManager = setupKeyManager()

            keyManager
                .storeKey({
                    key: {
                        type: KeyType.plaintextKey,
                        publicKey: publicKey,
                        privateKey: secretKey,
                    },

                    password: pincode.toString(),
                    encrypterName: KeyManagerPlugins.ScryptEncrypter.name,
                })
                .then((keyMetadata) => {
                    // walletStore.setKeyId(keyMetadata.id)
                    // // console.log("Successfully encrypted and stored key: ", keyMetadata);
                    // walletStore.setPublicKey(publicKey)
                    // console.log('first', walletStore)
                    set({
                        keyId: keyMetadata.id,
                        publicKey,
                        devInfo: {
                            secretKey,
                        }
                    })
                    // console.log('second', walletStore)
                    // window.localStorage.setItem('bpa:publicKey', JSON.stringify(publicKey))
                    // console.log('gonna return', keyMetadata.id)
                    // return keyMetadata.id
                    // loadUser()
                    // TODO: redirect to dashboard
                })
                .catch((err) => {
                    console.error('Error saving key', err.toString())
                    throw error(400, err.toString())
                })
        },

        sign: (transaction, pincode) => {
            const keyManager = setupKeyManager()
            // console.log(walletStore)
            let signedTransaction = keyManager.signTransaction({
                transaction,
                id: get(walletStore).keyId,
                password: pincode
            })
            .then((transaction) => {
                // console.log('transaction typeof', typeof(transaction.toXDR()))
                return transaction.toXDR()
            })
            .catch((err) => {
                console.error('Error signing transaction', err)
                throw error(400, err)
            })

            return signedTransaction
        }
    }
}

export const walletStore = createWallet()

export const confirmCorrectPincode = (pincode, firstPincode = null, signup = false) => {
    if (signup) {
        if (pincode === firstPincode) {
            return true
        } else {
            throw error(400, 'pincode mismatch')
        }
    } else {
        throw error(400, 'only signups now')
    }
}

const setupKeyManager = () => {
    const localKeyStore = new KeyManagerPlugins.LocalStorageKeyStore()
    localKeyStore.configure({
        prefix: 'bpa',
        storage: localStorage,
    })
    const keyManager = new KeyManager({
        keyStore: localKeyStore,
    })
    keyManager.registerEncrypter(KeyManagerPlugins.ScryptEncrypter)

    return keyManager
}
