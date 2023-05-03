import { w as n } from './index.300902f1.js'
const u = (r, t) => {
    if (c('localStorage')) {
        const e = localStorage.getItem(r),
            s = e ? JSON.parse(e) : t,
            o = n(s, () =>
                o.subscribe((a) => {
                    localStorage.setItem(r, JSON.stringify(a))
                })
            )
        return o
    }
}
function c(r) {
    let t
    try {
        t = window[r]
        const e = '__storage_test__'
        return t.setItem(e, e), t.removeItem(e), !0
    } catch (e) {
        return (
            e instanceof DOMException &&
            (e.code === 22 ||
                e.code === 1014 ||
                e.name === 'QuotaExceededError' ||
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            t &&
            t.length !== 0
        )
    }
}
export { u as l, c as s }
