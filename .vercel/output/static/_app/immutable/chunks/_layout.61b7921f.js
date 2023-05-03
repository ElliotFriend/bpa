import { s as e } from './localStore.50081e00.js'
function o() {
    if (e('localStorage'))
        return { bpaPublicKey: JSON.parse(localStorage.getItem('bpa:publicKey')) }
}
const l = Object.freeze(
    Object.defineProperty({ __proto__: null, load: o }, Symbol.toStringTag, { value: 'Module' })
)
export { l as _, o as l }
