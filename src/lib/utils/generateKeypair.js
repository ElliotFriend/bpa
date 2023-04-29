import { Keypair, StrKey } from 'stellar-sdk';

export function generateKeypair() {
    let kp = Keypair.random()
    return kp
}

export function validPublicKey(publicKey) {
    return StrKey.isValidEd25519PublicKey(publicKey)
}
