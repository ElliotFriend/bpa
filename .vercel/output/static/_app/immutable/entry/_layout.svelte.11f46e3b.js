import {
    S as r,
    i as u,
    s as f,
    C as _,
    D as c,
    E as d,
    F as m,
    g as p,
    d as g,
    G as C,
} from '../chunks/index.9fb5b323.js'
import { w as b } from '../chunks/index.300902f1.js'
function h(a) {
    let s
    const o = a[2].default,
        e = _(o, a, a[1], null)
    return {
        c() {
            e && e.c()
        },
        l(t) {
            e && e.l(t)
        },
        m(t, n) {
            e && e.m(t, n), (s = !0)
        },
        p(t, [n]) {
            e && e.p && (!s || n & 2) && c(e, o, t, t[1], s ? m(o, t[1], n, null) : d(t[1]), null)
        },
        i(t) {
            s || (p(e, t), (s = !0))
        },
        o(t) {
            g(e, t), (s = !1)
        },
        d(t) {
            e && e.d(t)
        },
    }
}
function w(a, s, o) {
    let { $$slots: e = {}, $$scope: t } = s,
        { data: n } = s
    const l = b()
    return (
        C('user'),
        (a.$$set = (i) => {
            'data' in i && o(0, (n = i.data)), '$$scope' in i && o(1, (t = i.$$scope))
        }),
        (a.$$.update = () => {
            a.$$.dirty & 1 && l.set(n.user)
        }),
        [n, t, e]
    )
}
class q extends r {
    constructor(s) {
        super(), u(this, s, w, h, f, { data: 0 })
    }
}
export { q as default }
