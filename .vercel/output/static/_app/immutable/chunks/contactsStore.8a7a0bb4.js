import { l as p } from './localStore.50081e00.js'
import { v as m } from './generateKeypair.c6b5dfc9.js'
import { e as y } from './index.7121c868.js'
let c
const l = new Uint8Array(16)
function s() {
    if (
        !c &&
        ((c = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
        !c)
    )
        throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
        )
    return c(l)
}
const e = []
for (let n = 0; n < 256; ++n) e.push((n + 256).toString(16).slice(1))
function U(n, t = 0) {
    return (
        e[n[t + 0]] +
        e[n[t + 1]] +
        e[n[t + 2]] +
        e[n[t + 3]] +
        '-' +
        e[n[t + 4]] +
        e[n[t + 5]] +
        '-' +
        e[n[t + 6]] +
        e[n[t + 7]] +
        '-' +
        e[n[t + 8]] +
        e[n[t + 9]] +
        '-' +
        e[n[t + 10]] +
        e[n[t + 11]] +
        e[n[t + 12]] +
        e[n[t + 13]] +
        e[n[t + 14]] +
        e[n[t + 15]]
    ).toLowerCase()
}
const g = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    u = { randomUUID: g }
function v(n, t, i) {
    if (u.randomUUID && !t && !n) return u.randomUUID()
    n = n || {}
    const o = n.random || (n.rng || s)()
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), t)) {
        i = i || 0
        for (let r = 0; r < 16; ++r) t[i + r] = o[r]
        return t
    }
    return U(o)
}
function x() {
    {
        const { subscribe: n, set: t, update: i } = p('bpa:contactList', [])
        return {
            subscribe: n,
            empty: () => t([]),
            remove: (o) => i((r) => r.filter((d) => d.id !== o)),
            add: (o) =>
                i((r) => {
                    if (m(o.address)) return [...r, { id: v(), ...o }]
                    throw y(400, 'invalid public key')
                }),
            favorite: (o) =>
                i((r) => {
                    const d = r.findIndex((a) => a.id === o)
                    return d >= 0 && (r[d].favorite = !r[d].favorite), r
                }),
        }
    }
}
const w = x()
export { w as c }
