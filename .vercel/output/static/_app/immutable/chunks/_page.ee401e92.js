import { e } from './index.7121c868.js'
import { s as o } from './localStore.50081e00.js'
function r() {
    {
        if (o('localStorage')) return { localStorage: !0 }
        throw e(400, 'local storage required')
    }
}
const l = Object.freeze(
    Object.defineProperty({ __proto__: null, load: r }, Symbol.toStringTag, { value: 'Module' })
)
export { l as _, r as l }
