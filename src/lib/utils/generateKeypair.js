import { Keypair } from 'stellar-sdk';

export function generateKeypair() {
    let kp = Keypair.random()
    return kp
}
