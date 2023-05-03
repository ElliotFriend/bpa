import {
    S as w,
    i as C,
    s as D,
    k as h,
    q as v,
    a as O,
    l as m,
    m as _,
    r as E,
    h as n,
    c as S,
    n as H,
    b as I,
    H as a,
    u as L,
    I as q,
    J as P,
} from '../chunks/index.9fb5b323.js'
import { s as T } from '../chunks/singletons.b7ad8e8e.js'
const J = () => {
        const s = T
        return {
            page: { subscribe: s.page.subscribe },
            navigating: { subscribe: s.navigating.subscribe },
            updated: s.updated,
        }
    },
    R = {
        subscribe(s) {
            return J().page.subscribe(s)
        },
    }
function V(s) {
    let e,
        t,
        c,
        i,
        l,
        g,
        f,
        p,
        d,
        u = s[0].error.message + '',
        b
    return {
        c() {
            ;(e = h('div')),
                (t = h('h1')),
                (c = v('Oops!')),
                (i = O()),
                (l = h('p')),
                (g = v('Looks like an error has occurred. The error message received was:')),
                (f = O()),
                (p = h('pre')),
                (d = h('code')),
                (b = v(u)),
                this.h()
        },
        l(o) {
            e = m(o, 'DIV', { class: !0 })
            var r = _(e)
            t = m(r, 'H1', {})
            var k = _(t)
            ;(c = E(k, 'Oops!')), k.forEach(n), (i = S(r)), (l = m(r, 'P', {}))
            var x = _(l)
            ;(g = E(x, 'Looks like an error has occurred. The error message received was:')),
                x.forEach(n),
                (f = S(r)),
                (p = m(r, 'PRE', {}))
            var $ = _(p)
            d = m($, 'CODE', {})
            var y = _(d)
            ;(b = E(y, u)), y.forEach(n), $.forEach(n), r.forEach(n), this.h()
        },
        h() {
            H(e, 'class', 'prose mx-auto my-10')
        },
        m(o, r) {
            I(o, e, r),
                a(e, t),
                a(t, c),
                a(e, i),
                a(e, l),
                a(l, g),
                a(e, f),
                a(e, p),
                a(p, d),
                a(d, b)
        },
        p(o, [r]) {
            r & 1 && u !== (u = o[0].error.message + '') && L(b, u)
        },
        i: q,
        o: q,
        d(o) {
            o && n(e)
        },
    }
}
function j(s, e, t) {
    let c
    return P(s, R, (i) => t(0, (c = i))), [c]
}
let B = class extends w {
    constructor(e) {
        super(), C(this, e, j, V, D, {})
    }
}
export { B as default }
