import {
    S as _e,
    i as fe,
    s as ve,
    M as pe,
    k as u,
    q as D,
    a as k,
    l as h,
    m as _,
    r as L,
    h as s,
    c as P,
    n as o,
    b as G,
    H as t,
    R as ue,
    N as me,
    I as j,
    O as he,
    u as be,
    T as ae,
    U as se,
} from '../chunks/index.9fb5b323.js'
import { g as Ee } from '../chunks/horizonQueries.43912467.js'
import { e as de } from '../chunks/forms.04a59a3c.js'
function ne(a) {
    a[2] = a[3].balances
}
function re(a, e, l) {
    const r = a.slice()
    return (r[4] = e[l]), r
}
function oe(a, e, l) {
    const r = a.slice()
    return (r[7] = e[l]), r
}
function ie(a) {
    let e,
        l = a[7].asset.slice() + '',
        r,
        n
    return {
        c() {
            ;(e = u('option')), (r = D(l)), this.h()
        },
        l(i) {
            e = h(i, 'OPTION', {})
            var m = _(e)
            ;(r = L(m, l)), m.forEach(s), this.h()
        },
        h() {
            ;(e.__value = n = a[7].asset), (e.value = e.__value)
        },
        m(i, m) {
            G(i, e, m), t(e, r)
        },
        p(i, m) {
            m & 1 && l !== (l = i[7].asset.slice() + '') && be(r, l),
                m & 1 && n !== (n = i[7].asset) && ((e.__value = n), (e.value = e.__value))
        },
        d(i) {
            i && s(e)
        },
    }
}
function ge(a) {
    return { c: j, l: j, m: j, p: j, d: j }
}
function Te(a) {
    ne(a)
    let e,
        l,
        r,
        n,
        i,
        m,
        S,
        c,
        b,
        I,
        C,
        E,
        A,
        y,
        x,
        q,
        K,
        w,
        M,
        R,
        $,
        O,
        F = a[2],
        f = []
    for (let d = 0; d < F.length; d += 1) f[d] = ce(re(a, F, d))
    return {
        c() {
            ;(e = u('div')),
                (l = u('table')),
                (r = u('thead')),
                (n = u('tr')),
                (i = u('th')),
                (m = D('Balance')),
                (S = k()),
                (c = u('th')),
                (b = D('Asset')),
                (I = k()),
                (C = u('th')),
                (E = D('Issuer')),
                (A = k()),
                (y = u('th')),
                (x = D('Liabilities')),
                (q = k()),
                (K = u('th')),
                (w = D('Limit')),
                (M = k()),
                (R = u('th')),
                ($ = k()),
                (O = u('tbody'))
            for (let d = 0; d < f.length; d += 1) f[d].c()
            this.h()
        },
        l(d) {
            e = h(d, 'DIV', { class: !0 })
            var v = _(e)
            l = h(v, 'TABLE', { class: !0 })
            var p = _(l)
            r = h(p, 'THEAD', {})
            var z = _(r)
            n = h(z, 'TR', {})
            var N = _(n)
            i = h(N, 'TH', {})
            var V = _(i)
            ;(m = L(V, 'Balance')), V.forEach(s), (S = P(N)), (c = h(N, 'TH', {}))
            var g = _(c)
            ;(b = L(g, 'Asset')), g.forEach(s), (I = P(N)), (C = h(N, 'TH', {}))
            var U = _(C)
            ;(E = L(U, 'Issuer')), U.forEach(s), (A = P(N)), (y = h(N, 'TH', {}))
            var B = _(y)
            ;(x = L(B, 'Liabilities')), B.forEach(s), (q = P(N)), (K = h(N, 'TH', {}))
            var H = _(K)
            ;(w = L(H, 'Limit')),
                H.forEach(s),
                (M = P(N)),
                (R = h(N, 'TH', {})),
                _(R).forEach(s),
                N.forEach(s),
                z.forEach(s),
                ($ = P(p)),
                (O = h(p, 'TBODY', {}))
            var T = _(O)
            for (let Y = 0; Y < f.length; Y += 1) f[Y].l(T)
            T.forEach(s), p.forEach(s), v.forEach(s), this.h()
        },
        h() {
            o(l, 'class', 'table w-full'), o(e, 'class', 'overflow-x-auto')
        },
        m(d, v) {
            G(d, e, v),
                t(e, l),
                t(l, r),
                t(r, n),
                t(n, i),
                t(i, m),
                t(n, S),
                t(n, c),
                t(c, b),
                t(n, I),
                t(n, C),
                t(C, E),
                t(n, A),
                t(n, y),
                t(y, x),
                t(n, q),
                t(n, K),
                t(K, w),
                t(n, M),
                t(n, R),
                t(l, $),
                t(l, O)
            for (let p = 0; p < f.length; p += 1) f[p] && f[p].m(O, null)
        },
        p(d, v) {
            if ((ne(d), v & 3)) {
                F = d[2]
                let p
                for (p = 0; p < F.length; p += 1) {
                    const z = re(d, F, p)
                    f[p] ? f[p].p(z, v) : ((f[p] = ce(z)), f[p].c(), f[p].m(O, null))
                }
                for (; p < f.length; p += 1) f[p].d(1)
                f.length = F.length
            }
        },
        d(d) {
            d && s(e), he(f, d)
        },
    }
}
function Ae(a) {
    let e, l, r, n, i, m, S, c, b, I, C
    return {
        c() {
            ;(e = u('form')),
                (l = u('input')),
                (n = k()),
                (i = u('input')),
                (m = k()),
                (S = u('button')),
                (c = ae('svg')),
                (b = ae('path')),
                this.h()
        },
        l(E) {
            e = h(E, 'FORM', { method: !0, action: !0 })
            var A = _(e)
            ;(l = h(A, 'INPUT', { type: !0, name: !0, id: !0 })),
                (n = P(A)),
                (i = h(A, 'INPUT', { type: !0, name: !0, id: !0 })),
                (m = P(A)),
                (S = h(A, 'BUTTON', { class: !0 }))
            var y = _(S)
            c = se(y, 'svg', { xmlns: !0, viewBox: !0, fill: !0, class: !0 })
            var x = _(c)
            ;(b = se(x, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
                _(b).forEach(s),
                x.forEach(s),
                y.forEach(s),
                A.forEach(s),
                this.h()
        },
        h() {
            o(l, 'type', 'hidden'),
                o(l, 'name', 'source'),
                o(l, 'id', 'source'),
                (l.value = r = a[0].bpaPublicKey),
                o(i, 'type', 'hidden'),
                o(i, 'name', 'asset'),
                o(i, 'id', 'asset'),
                (i.value = `${a[4].asset_code}-${a[4].asset_issuer}`),
                o(b, 'fill-rule', 'evenodd'),
                o(
                    b,
                    'd',
                    'M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                ),
                o(b, 'clip-rule', 'evenodd'),
                o(c, 'xmlns', 'http://www.w3.org/2000/svg'),
                o(c, 'viewBox', '0 0 20 20'),
                o(c, 'fill', 'currentColor'),
                o(c, 'class', 'w-5 h-5'),
                o(S, 'class', 'btn btn-square btn-error'),
                o(e, 'method', 'POST'),
                o(e, 'action', '?/preview')
        },
        m(E, A) {
            G(E, e, A),
                t(e, l),
                t(e, n),
                t(e, i),
                t(e, m),
                t(e, S),
                t(S, c),
                t(c, b),
                I || ((C = ue(de.call(null, e))), (I = !0))
        },
        p(E, A) {
            A & 1 && r !== (r = E[0].bpaPublicKey) && (l.value = r)
        },
        d(E) {
            E && s(e), (I = !1), C()
        },
    }
}
function ce(a) {
    let e,
        l,
        r = a[4].balance + '',
        n,
        i,
        m,
        S = (a[4].asset_code ?? 'XLM') + '',
        c,
        b,
        I,
        C = (a[4].asset_issuer ?? 'n/a') + '',
        E,
        A,
        y,
        x =
            (parseFloat(a[4].buying_liabilities) + parseFloat(a[4].selling_liabilities)).toFixed(
                7
            ) + '',
        q,
        K,
        w,
        M = (a[4].limit ?? 'n/a') + '',
        R,
        $,
        O,
        F,
        f = a[4].asset_type !== 'native' && Ae(a)
    return {
        c() {
            ;(e = u('tr')),
                (l = u('td')),
                (n = D(r)),
                (i = k()),
                (m = u('td')),
                (c = D(S)),
                (b = k()),
                (I = u('td')),
                (E = D(C)),
                (A = k()),
                (y = u('td')),
                (q = D(x)),
                (K = k()),
                (w = u('td')),
                (R = D(M)),
                ($ = k()),
                (O = u('th')),
                f && f.c(),
                (F = k())
        },
        l(d) {
            e = h(d, 'TR', {})
            var v = _(e)
            l = h(v, 'TD', {})
            var p = _(l)
            ;(n = L(p, r)), p.forEach(s), (i = P(v)), (m = h(v, 'TD', {}))
            var z = _(m)
            ;(c = L(z, S)), z.forEach(s), (b = P(v)), (I = h(v, 'TD', {}))
            var N = _(I)
            ;(E = L(N, C)), N.forEach(s), (A = P(v)), (y = h(v, 'TD', {}))
            var V = _(y)
            ;(q = L(V, x)), V.forEach(s), (K = P(v)), (w = h(v, 'TD', {}))
            var g = _(w)
            ;(R = L(g, M)), g.forEach(s), ($ = P(v)), (O = h(v, 'TH', {}))
            var U = _(O)
            f && f.l(U), U.forEach(s), (F = P(v)), v.forEach(s)
        },
        m(d, v) {
            G(d, e, v),
                t(e, l),
                t(l, n),
                t(e, i),
                t(e, m),
                t(m, c),
                t(e, b),
                t(e, I),
                t(I, E),
                t(e, A),
                t(e, y),
                t(y, q),
                t(e, K),
                t(e, w),
                t(w, R),
                t(e, $),
                t(e, O),
                f && f.m(O, null),
                t(e, F)
        },
        p(d, v) {
            d[4].asset_type !== 'native' && f.p(d, v)
        },
        d(d) {
            d && s(e), f && f.d()
        },
    }
}
function ye(a) {
    let e, l
    return {
        c() {
            ;(e = u('p')), (l = D('loading...'))
        },
        l(r) {
            e = h(r, 'P', {})
            var n = _(e)
            ;(l = L(n, 'loading...')), n.forEach(s)
        },
        m(r, n) {
            G(r, e, n), t(e, l)
        },
        p: j,
        d(r) {
            r && s(e)
        },
    }
}
function ke(a) {
    let e,
        l,
        r,
        n,
        i,
        m,
        S,
        c,
        b,
        I,
        C,
        E,
        A,
        y,
        x,
        q,
        K,
        w,
        M,
        R,
        $,
        O,
        F,
        f,
        d,
        v,
        p,
        z,
        N,
        V = a[0].assets,
        g = []
    for (let B = 0; B < V.length; B += 1) g[B] = ie(oe(a, V, B))
    let U = {
        ctx: a,
        current: null,
        token: null,
        hasCatch: !1,
        pending: ye,
        then: Te,
        catch: ge,
        value: 3,
    }
    return (
        pe(a[1], U),
        {
            c() {
                ;(e = u('div')),
                    (l = u('h1')),
                    (r = D('Assets')),
                    (n = k()),
                    (i = u('h2')),
                    (m = D('Add Trusted Assets')),
                    (S = k()),
                    (c = u('form')),
                    (b = u('input')),
                    (C = k()),
                    (E = u('input')),
                    (A = k()),
                    (y = u('label')),
                    (x = u('span')),
                    (q = D('Asset')),
                    (K = k()),
                    (w = u('select')),
                    (M = u('option')),
                    (R = D('Select Asset'))
                for (let B = 0; B < g.length; B += 1) g[B].c()
                ;($ = k()),
                    (O = u('button')),
                    (F = D('Add Asset')),
                    (f = k()),
                    (d = u('h2')),
                    (v = D('Existing Balances')),
                    (p = k()),
                    U.block.c(),
                    this.h()
            },
            l(B) {
                e = h(B, 'DIV', { class: !0 })
                var H = _(e)
                l = h(H, 'H1', { class: !0 })
                var T = _(l)
                ;(r = L(T, 'Assets')), T.forEach(s), (n = P(H)), (i = h(H, 'H2', { class: !0 }))
                var Y = _(i)
                ;(m = L(Y, 'Add Trusted Assets')),
                    Y.forEach(s),
                    (S = P(H)),
                    (c = h(H, 'FORM', { method: !0, action: !0 }))
                var X = _(c)
                ;(b = h(X, 'INPUT', { type: !0, id: !0, name: !0 })),
                    (C = P(X)),
                    (E = h(X, 'INPUT', { type: !0, id: !0, name: !0 })),
                    (A = P(X)),
                    (y = h(X, 'LABEL', { for: !0, class: !0 }))
                var W = _(y)
                x = h(W, 'SPAN', { class: !0 })
                var Z = _(x)
                ;(q = L(Z, 'Asset')),
                    Z.forEach(s),
                    W.forEach(s),
                    (K = P(X)),
                    (w = h(X, 'SELECT', { id: !0, name: !0, class: !0 }))
                var J = _(w)
                M = h(J, 'OPTION', {})
                var ee = _(M)
                ;(R = L(ee, 'Select Asset')), ee.forEach(s)
                for (let Q = 0; Q < g.length; Q += 1) g[Q].l(J)
                J.forEach(s), ($ = P(X)), (O = h(X, 'BUTTON', { class: !0 }))
                var te = _(O)
                ;(F = L(te, 'Add Asset')),
                    te.forEach(s),
                    X.forEach(s),
                    (f = P(H)),
                    (d = h(H, 'H2', { class: !0 }))
                var le = _(d)
                ;(v = L(le, 'Existing Balances')),
                    le.forEach(s),
                    (p = P(H)),
                    U.block.l(H),
                    H.forEach(s),
                    this.h()
            },
            h() {
                o(l, 'class', 'text-5xl font-bold'),
                    o(i, 'class', 'text-3xl font-bold'),
                    o(b, 'type', 'hidden'),
                    o(b, 'id', 'source'),
                    o(b, 'name', 'source'),
                    (b.value = I = a[0].bpaPublicKey),
                    o(E, 'type', 'hidden'),
                    o(E, 'id', 'addAsset'),
                    o(E, 'name', 'assAsset'),
                    (E.value = !0),
                    o(x, 'class', 'label-text'),
                    o(y, 'for', 'asset'),
                    o(y, 'class', 'label'),
                    (M.disabled = !0),
                    (M.selected = !0),
                    (M.__value = 'Select Asset'),
                    (M.value = M.__value),
                    o(w, 'id', 'asset'),
                    o(w, 'name', 'asset'),
                    o(w, 'class', 'select select-bordered w-full max-w-xs'),
                    o(O, 'class', 'btn btn-primary'),
                    o(c, 'method', 'POST'),
                    o(c, 'action', '?/preview'),
                    o(d, 'class', 'text-3xl font-bold'),
                    o(e, 'class', 'my-10 mx-20')
            },
            m(B, H) {
                G(B, e, H),
                    t(e, l),
                    t(l, r),
                    t(e, n),
                    t(e, i),
                    t(i, m),
                    t(e, S),
                    t(e, c),
                    t(c, b),
                    t(c, C),
                    t(c, E),
                    t(c, A),
                    t(c, y),
                    t(y, x),
                    t(x, q),
                    t(c, K),
                    t(c, w),
                    t(w, M),
                    t(M, R)
                for (let T = 0; T < g.length; T += 1) g[T] && g[T].m(w, null)
                t(c, $),
                    t(c, O),
                    t(O, F),
                    t(e, f),
                    t(e, d),
                    t(d, v),
                    t(e, p),
                    U.block.m(e, (U.anchor = null)),
                    (U.mount = () => e),
                    (U.anchor = null),
                    z || ((N = ue(de.call(null, c))), (z = !0))
            },
            p(B, [H]) {
                if (((a = B), H & 1 && I !== (I = a[0].bpaPublicKey) && (b.value = I), H & 1)) {
                    V = a[0].assets
                    let T
                    for (T = 0; T < V.length; T += 1) {
                        const Y = oe(a, V, T)
                        g[T] ? g[T].p(Y, H) : ((g[T] = ie(Y)), g[T].c(), g[T].m(w, null))
                    }
                    for (; T < g.length; T += 1) g[T].d(1)
                    g.length = V.length
                }
                me(U, a, H)
            },
            i: j,
            o: j,
            d(B) {
                B && s(e), he(g, B), U.block.d(), (U.token = null), (U = null), (z = !1), N()
            },
        }
    )
}
function Pe(a, e, l) {
    let { data: r } = e,
        n = Ee(r.bpaPublicKey)
    return (
        (a.$$set = (i) => {
            'data' in i && l(0, (r = i.data))
        }),
        [r, n]
    )
}
class Oe extends _e {
    constructor(e) {
        super(), fe(this, e, Pe, ke, ve, { data: 0 })
    }
}
export { Oe as default }
