import {
    S as z,
    i as F,
    s as G,
    k as o,
    q as u,
    a as E,
    l as n,
    m as c,
    r as f,
    h as l,
    c as g,
    n as t,
    b as J,
    H as e,
    I as H,
    L as K,
} from '../chunks/index.9fb5b323.js'
function O(N) {
    let r, m, a, _, D, P, h, I, v, M, S, w, i, A, V, d, q, B, p, C
    return {
        c() {
            ;(r = o('div')),
                (m = o('div')),
                (a = o('div')),
                (_ = o('h1')),
                (D = u('Welcome to BasicPay!')),
                (P = E()),
                (h = o('p')),
                (I = u('The app that lets you pay, ')),
                (v = o('em')),
                (M = u('basically')),
                (S = u(', anyone.')),
                (w = E()),
                (i = o('a')),
                (A = u('Signup Now')),
                (V = E()),
                (d = o('a')),
                (q = u('Dashboard')),
                (B = E()),
                (p = o('a')),
                (C = u('Modal')),
                this.h()
        },
        l(y) {
            r = n(y, 'DIV', { class: !0 })
            var b = c(r)
            m = n(b, 'DIV', { class: !0 })
            var T = c(m)
            a = n(T, 'DIV', { class: !0 })
            var s = c(a)
            _ = n(s, 'H1', { class: !0 })
            var W = c(_)
            ;(D = f(W, 'Welcome to BasicPay!')),
                W.forEach(l),
                (P = g(s)),
                (h = n(s, 'P', { class: !0 }))
            var x = c(h)
            ;(I = f(x, 'The app that lets you pay, ')), (v = n(x, 'EM', {}))
            var $ = c(v)
            ;(M = f($, 'basically')),
                $.forEach(l),
                (S = f(x, ', anyone.')),
                x.forEach(l),
                (w = g(s)),
                (i = n(s, 'A', { href: !0, class: !0 }))
            var k = c(i)
            ;(A = f(k, 'Signup Now')),
                k.forEach(l),
                (V = g(s)),
                (d = n(s, 'A', { href: !0, class: !0 }))
            var L = c(d)
            ;(q = f(L, 'Dashboard')),
                L.forEach(l),
                (B = g(s)),
                (p = n(s, 'A', { href: !0, class: !0 }))
            var j = c(p)
            ;(C = f(j, 'Modal')), j.forEach(l), s.forEach(l), T.forEach(l), b.forEach(l), this.h()
        },
        h() {
            t(_, 'class', 'text-5xl font-bold'),
                t(h, 'class', 'py-6'),
                t(i, 'href', '/signup'),
                t(i, 'class', 'btn btn-primary'),
                t(d, 'href', '/dashboard'),
                t(d, 'class', 'btn'),
                t(p, 'href', '#my-modal-2'),
                t(p, 'class', 'btn'),
                t(a, 'class', 'max-w-md'),
                t(m, 'class', 'hero-content text-center'),
                t(r, 'class', 'hero min-h-screen bg-base-200')
        },
        m(y, b) {
            J(y, r, b),
                e(r, m),
                e(m, a),
                e(a, _),
                e(_, D),
                e(a, P),
                e(a, h),
                e(h, I),
                e(h, v),
                e(v, M),
                e(h, S),
                e(a, w),
                e(a, i),
                e(i, A),
                e(a, V),
                e(a, d),
                e(d, q),
                e(a, B),
                e(a, p),
                e(p, C)
        },
        p: H,
        i: H,
        o: H,
        d(y) {
            y && l(r)
        },
    }
}
function Q(N) {
    return K('user'), []
}
class U extends z {
    constructor(r) {
        super(), F(this, r, Q, O, G, {})
    }
}
export { U as default }
