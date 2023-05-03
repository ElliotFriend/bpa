import { l as e } from './index.7121c868.js'
function t() {
    return e.Keypair.random()
}
function a(r) {
    return e.StrKey.isValidEd25519PublicKey(r)
}
export { t as g, a as v }
