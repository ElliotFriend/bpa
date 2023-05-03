import {
    S as ue,
    i as fe,
    s as pe,
    k as n,
    a as x,
    q as A,
    l as c,
    m as d,
    c as L,
    r as B,
    h as r,
    n as t,
    b as ce,
    H as e,
    V as j,
    P as X,
    Y as de,
    I as le,
    X as ve,
    J as ae,
    T as re,
    U as oe,
    u as he,
} from '../chunks/index.9fb5b323.js'
import '../chunks/index.7121c868.js'
import { g as be } from '../chunks/navigation.41aba242.js'
import { w as ie } from '../chunks/index.300902f1.js'
import { l as me } from '../chunks/walletStore.f68d24fc.js'
function ne(h) {
    let o, i, s, p, u, l, b, E
    return {
        c() {
            ;(o = n('div')),
                (i = n('div')),
                (s = re('svg')),
                (p = re('path')),
                (u = x()),
                (l = n('span')),
                (b = A('Error: ')),
                (E = A(h[2])),
                this.h()
        },
        l(m) {
            o = c(m, 'DIV', { class: !0 })
            var f = d(o)
            i = c(f, 'DIV', {})
            var a = d(i)
            s = oe(a, 'svg', { xmlns: !0, class: !0, fill: !0, viewBox: !0 })
            var w = d(s)
            ;(p = oe(w, 'path', {
                'stroke-linecap': !0,
                'stroke-linejoin': !0,
                'stroke-width': !0,
                d: !0,
            })),
                d(p).forEach(r),
                w.forEach(r),
                (u = L(a)),
                (l = c(a, 'SPAN', {}))
            var V = d(l)
            ;(b = B(V, 'Error: ')),
                (E = B(V, h[2])),
                V.forEach(r),
                a.forEach(r),
                f.forEach(r),
                this.h()
        },
        h() {
            t(p, 'stroke-linecap', 'round'),
                t(p, 'stroke-linejoin', 'round'),
                t(p, 'stroke-width', '2'),
                t(p, 'd', 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'),
                t(s, 'xmlns', 'http://www.w3.org/2000/svg'),
                t(s, 'class', 'stroke-current flex-shrink-0 h-6 w-6'),
                t(s, 'fill', 'none'),
                t(s, 'viewBox', '0 0 24 24'),
                t(o, 'class', 'alert alert-error shadow-lg mb-4')
        },
        m(m, f) {
            ce(m, o, f), e(o, i), e(i, s), e(s, p), e(i, u), e(i, l), e(l, b), e(l, E)
        },
        p(m, f) {
            f & 4 && he(E, m[2])
        },
        d(m) {
            m && r(o)
        },
    }
}
function _e(h) {
    let o,
        i,
        s,
        p,
        u,
        l,
        b,
        E,
        m,
        f,
        a,
        w,
        V,
        q,
        g,
        H,
        P,
        D,
        N,
        z,
        C,
        y,
        G,
        S,
        K,
        J,
        O,
        Y,
        v = h[2] && ne(h)
    return {
        c() {
            ;(o = n('div')),
                (i = n('div')),
                (s = n('div')),
                v && v.c(),
                (p = x()),
                (u = n('div')),
                (l = n('div')),
                (b = n('h1')),
                (E = A('Login')),
                (m = x()),
                (f = n('div')),
                (a = n('label')),
                (w = n('span')),
                (V = A('Public Key')),
                (q = x()),
                (g = n('input')),
                (H = x()),
                (P = n('div')),
                (D = n('label')),
                (N = n('span')),
                (z = A('Pincode')),
                (C = x()),
                (y = n('input')),
                (G = x()),
                (S = n('div')),
                (K = n('button')),
                (J = A('Login')),
                this.h()
        },
        l(_) {
            o = c(_, 'DIV', { class: !0 })
            var I = d(o)
            i = c(I, 'DIV', { class: !0 })
            var F = d(i)
            s = c(F, 'DIV', { class: !0 })
            var T = d(s)
            v && v.l(T), (p = L(T)), (u = c(T, 'DIV', { class: !0 }))
            var Q = d(u)
            l = c(Q, 'DIV', { class: !0 })
            var k = d(l)
            b = c(k, 'H1', { class: !0 })
            var R = d(b)
            ;(E = B(R, 'Login')), R.forEach(r), (m = L(k)), (f = c(k, 'DIV', { class: !0 }))
            var U = d(f)
            a = c(U, 'LABEL', { for: !0, class: !0 })
            var W = d(a)
            w = c(W, 'SPAN', { class: !0 })
            var Z = d(w)
            ;(V = B(Z, 'Public Key')),
                Z.forEach(r),
                W.forEach(r),
                (q = L(U)),
                (g = c(U, 'INPUT', { type: !0, placeholder: !0, id: !0, class: !0 })),
                U.forEach(r),
                (H = L(k)),
                (P = c(k, 'DIV', { class: !0 }))
            var M = d(P)
            D = c(M, 'LABEL', { for: !0, class: !0 })
            var $ = d(D)
            N = c($, 'SPAN', { class: !0 })
            var ee = d(N)
            ;(z = B(ee, 'Pincode')),
                ee.forEach(r),
                $.forEach(r),
                (C = L(M)),
                (y = c(M, 'INPUT', { type: !0, id: !0, class: !0 })),
                M.forEach(r),
                (G = L(k)),
                (S = c(k, 'DIV', { class: !0 }))
            var te = d(S)
            K = c(te, 'BUTTON', { class: !0 })
            var se = d(K)
            ;(J = B(se, 'Login')),
                se.forEach(r),
                te.forEach(r),
                k.forEach(r),
                Q.forEach(r),
                T.forEach(r),
                F.forEach(r),
                I.forEach(r),
                this.h()
        },
        h() {
            t(b, 'class', 'text-5xl font-bold'),
                t(w, 'class', 'label-text'),
                t(a, 'for', 'publicKey'),
                t(a, 'class', 'label'),
                t(g, 'type', 'text'),
                t(g, 'placeholder', 'G...'),
                t(g, 'id', 'publicKey'),
                t(g, 'class', 'input input-bordered'),
                (g.disabled = !0),
                t(f, 'class', 'form-control'),
                t(N, 'class', 'label-text'),
                t(D, 'for', 'pincode'),
                t(D, 'class', 'label'),
                t(y, 'type', 'number'),
                t(y, 'id', 'pincode'),
                t(y, 'class', 'input input-bordered'),
                t(P, 'class', 'form-control'),
                t(K, 'class', 'btn btn-primary'),
                t(S, 'class', 'form-control mt-6'),
                t(l, 'class', 'card-body'),
                t(u, 'class', 'card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'),
                t(s, 'class', 'text-center lg:text-left'),
                t(i, 'class', 'hero-content flex-col lg:flex-row-reverse'),
                t(o, 'class', 'hero min-h-screen bg-base-200')
        },
        m(_, I) {
            ce(_, o, I),
                e(o, i),
                e(i, s),
                v && v.m(s, null),
                e(s, p),
                e(s, u),
                e(u, l),
                e(l, b),
                e(b, E),
                e(l, m),
                e(l, f),
                e(f, a),
                e(a, w),
                e(w, V),
                e(f, q),
                e(f, g),
                j(g, h[0].bpaPublicKey),
                e(l, H),
                e(l, P),
                e(P, D),
                e(D, N),
                e(N, z),
                e(P, C),
                e(P, y),
                j(y, h[1]),
                e(l, G),
                e(l, S),
                e(S, K),
                e(K, J),
                O ||
                    ((Y = [X(g, 'input', h[6]), X(y, 'input', h[7]), X(K, 'click', h[5])]),
                    (O = !0))
        },
        p(_, [I]) {
            _[2] ? (v ? v.p(_, I) : ((v = ne(_)), v.c(), v.m(s, p))) : v && (v.d(1), (v = null)),
                I & 1 && g.value !== _[0].bpaPublicKey && j(g, _[0].bpaPublicKey),
                I & 2 && de(y.value) !== _[1] && j(y, _[1])
        },
        i: le,
        o: le,
        d(_) {
            _ && r(o), v && v.d(), (O = !1), ve(Y)
        },
    }
}
function ge(h, o, i) {
    let s,
        p,
        { data: u } = o
    console.log(u)
    let l = ie()
    ae(h, l, (a) => i(1, (s = a)))
    let b = ie()
    ae(h, b, (a) => i(2, (p = a)))
    const E = async () => {
        try {
            b.set(null),
                await me(u.bpaKeyId, s == null ? void 0 : s.toString()),
                console.log('login successful?'),
                be('/dashboard')
        } catch (a) {
            console.error(a), b.set(a.body.message)
        }
    }
    function m() {
        ;(u.bpaPublicKey = this.value), i(0, u)
    }
    function f() {
        ;(s = de(this.value)), l.set(s)
    }
    return (
        (h.$$set = (a) => {
            'data' in a && i(0, (u = a.data))
        }),
        [u, s, p, l, b, E, m, f]
    )
}
class ke extends ue {
    constructor(o) {
        super(), fe(this, o, ge, _e, pe, { data: 0 })
    }
}
export { ke as default }
