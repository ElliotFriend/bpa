import { e as r } from './index.7121c868.js'
import { s as a } from './localStore.50081e00.js'
import { a as t } from './walletStore.f68d24fc.js'
function l() {
    if (a('localStorage')) {
        const { bpaKeyId: e, bpaPublicKey: o } = t()
        return { bpaKeyId: e, bpaPublicKey: JSON.parse(o) }
    } else throw r(400, 'local storage required')
}
const b = Object.freeze(
    Object.defineProperty({ __proto__: null, load: l }, Symbol.toStringTag, { value: 'Module' })
)
export { b as _, l }
