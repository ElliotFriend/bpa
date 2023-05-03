import {
    S as De,
    i as Oe,
    s as Me,
    k as d,
    q as N,
    a as k,
    l as f,
    m as p,
    r as I,
    h as n,
    c as A,
    n as e,
    Z as Be,
    b as D,
    H as t,
    _ as we,
    P as ke,
    R as Ue,
    I as Ae,
    X as Ve,
    J as Re,
    e as ge,
    O as Xe,
    u as Fe,
    T as Se,
    U as Le,
    Q as Ke,
    $ as Ye,
} from '../chunks/index.9fb5b323.js'
import { e as Ce } from '../chunks/forms.04a59a3c.js'
import { c as ce } from '../chunks/contactsStore.8a7a0bb4.js'
import { g as je } from '../chunks/walletStore.f68d24fc.js'
import { l as qe } from '../chunks/horizonQueries.43912467.js'
function Ne(r, o, i) {
    const l = r.slice()
    return (l[6] = o[i]), l
}
function He(r) {
    let o,
        i = r[3],
        l = []
    for (let a = 0; a < i.length; a += 1) l[a] = Ie(Ne(r, i, a))
    return {
        c() {
            for (let a = 0; a < l.length; a += 1) l[a].c()
            o = ge()
        },
        l(a) {
            for (let c = 0; c < l.length; c += 1) l[c].l(a)
            o = ge()
        },
        m(a, c) {
            for (let s = 0; s < l.length; s += 1) l[s] && l[s].m(a, c)
            D(a, o, c)
        },
        p(a, c) {
            if (c & 8) {
                i = a[3]
                let s
                for (s = 0; s < i.length; s += 1) {
                    const u = Ne(a, i, s)
                    l[s] ? l[s].p(u, c) : ((l[s] = Ie(u)), l[s].c(), l[s].m(o.parentNode, o))
                }
                for (; s < l.length; s += 1) l[s].d(1)
                l.length = i.length
            }
        },
        d(a) {
            Xe(l, a), a && n(o)
        },
    }
}
function Ie(r) {
    let o,
        i = r[6].name + '',
        l,
        a
    return {
        c() {
            ;(o = d('option')), (l = N(i)), this.h()
        },
        l(c) {
            o = f(c, 'OPTION', {})
            var s = p(o)
            ;(l = I(s, i)), s.forEach(n), this.h()
        },
        h() {
            ;(o.__value = a = r[6].address), (o.value = o.__value)
        },
        m(c, s) {
            D(c, o, s), t(o, l)
        },
        p(c, s) {
            s & 8 && i !== (i = c[6].name + '') && Fe(l, i),
                s & 8 && a !== (a = c[6].address) && ((o.__value = a), (o.value = o.__value))
        },
        d(c) {
            c && n(o)
        },
    }
}
function Te(r) {
    let o, i, l, a, c, s, u, v, T, y, g, b
    return {
        c() {
            ;(o = d('div')),
                (i = d('div')),
                (l = Se('svg')),
                (a = Se('path')),
                (c = k()),
                (s = d('span')),
                (u = N(
                    'Account Not Funded: You are sending a payment to an account that does not yet exist on the Stellar ledger. Your payment will take the form of a '
                )),
                (v = d('code')),
                (T = N('creatAccount')),
                (y = N(' operation, and the amount you send must be at least 1XLM.')),
                (g = k()),
                (b = d('input')),
                this.h()
        },
        l(_) {
            o = f(_, 'DIV', { class: !0 })
            var S = p(o)
            i = f(S, 'DIV', {})
            var h = p(i)
            l = Le(h, 'svg', { xmlns: !0, class: !0, fill: !0, viewBox: !0 })
            var P = p(l)
            ;(a = Le(P, 'path', {
                'stroke-linecap': !0,
                'stroke-linejoin': !0,
                'stroke-width': !0,
                d: !0,
            })),
                p(a).forEach(n),
                P.forEach(n),
                (c = A(h)),
                (s = f(h, 'SPAN', {}))
            var M = p(s)
            ;(u = I(
                M,
                'Account Not Funded: You are sending a payment to an account that does not yet exist on the Stellar ledger. Your payment will take the form of a '
            )),
                (v = f(M, 'CODE', {}))
            var C = p(v)
            ;(T = I(C, 'creatAccount')),
                C.forEach(n),
                (y = I(M, ' operation, and the amount you send must be at least 1XLM.')),
                M.forEach(n),
                h.forEach(n),
                S.forEach(n),
                (g = A(_)),
                (b = f(_, 'INPUT', { type: !0, id: !0, name: !0 })),
                this.h()
        },
        h() {
            e(a, 'stroke-linecap', 'round'),
                e(a, 'stroke-linejoin', 'round'),
                e(a, 'stroke-width', '2'),
                e(
                    a,
                    'd',
                    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                ),
                e(l, 'xmlns', 'http://www.w3.org/2000/svg'),
                e(l, 'class', 'stroke-current flex-shrink-0 h-6 w-6'),
                e(l, 'fill', 'none'),
                e(l, 'viewBox', '0 0 24 24'),
                e(o, 'class', 'alert alert-warning shadow-lg'),
                e(b, 'type', 'hidden'),
                e(b, 'id', 'createAccount'),
                e(b, 'name', 'createAccount'),
                (b.value = r[2])
        },
        m(_, S) {
            D(_, o, S),
                t(o, i),
                t(i, l),
                t(l, a),
                t(i, c),
                t(i, s),
                t(s, u),
                t(s, v),
                t(v, T),
                t(s, y),
                D(_, g, S),
                D(_, b, S)
        },
        p(_, S) {
            S & 4 && (b.value = _[2])
        },
        d(_) {
            _ && n(o), _ && n(g), _ && n(b)
        },
    }
}
function ze(r) {
    let o,
        i,
        l,
        a,
        c,
        s,
        u,
        v,
        T,
        y,
        g,
        b,
        _,
        S,
        h,
        P,
        M,
        C,
        J,
        B,
        F,
        j,
        $,
        x,
        U,
        V,
        ee,
        z,
        te,
        le,
        R,
        K,
        q,
        ae,
        se,
        X,
        oe,
        H,
        Y,
        ne,
        re,
        ue,
        O = ce && He(r),
        E = r[2] && Te(r)
    return {
        c() {
            ;(o = d('h1')),
                (i = N('Send a Payment')),
                (l = k()),
                (a = d('p')),
                (c = N("This is where you'll be able to send a payment")),
                (s = k()),
                (u = d('form')),
                (v = d('input')),
                (T = k()),
                (y = d('div')),
                (g = d('label')),
                (b = d('span')),
                (_ = N('Destination')),
                (S = k()),
                (h = d('select')),
                (P = d('option')),
                (M = N('Select Recipient')),
                O && O.c(),
                (C = k()),
                E && E.c(),
                (J = k()),
                (B = d('div')),
                (F = d('label')),
                (j = d('span')),
                ($ = N('Amount')),
                (x = k()),
                (U = d('label')),
                (V = d('input')),
                (ee = k()),
                (z = d('span')),
                (te = N('XLM')),
                (le = k()),
                (R = d('div')),
                (K = d('label')),
                (q = d('span')),
                (ae = N('Memo')),
                (se = k()),
                (X = d('input')),
                (oe = k()),
                (H = d('div')),
                (Y = d('button')),
                (ne = N('Preview')),
                this.h()
        },
        l(m) {
            o = f(m, 'H1', {})
            var w = p(o)
            ;(i = I(w, 'Send a Payment')), w.forEach(n), (l = A(m)), (a = f(m, 'P', {}))
            var de = p(a)
            ;(c = I(de, "This is where you'll be able to send a payment")),
                de.forEach(n),
                (s = A(m)),
                (u = f(m, 'FORM', { method: !0, action: !0 }))
            var L = p(u)
            ;(v = f(L, 'INPUT', { type: !0, id: !0, name: !0 })),
                (T = A(L)),
                (y = f(L, 'DIV', { class: !0 }))
            var Q = p(y)
            g = f(Q, 'LABEL', { for: !0, class: !0 })
            var fe = p(g)
            b = f(fe, 'SPAN', { class: !0 })
            var pe = p(b)
            ;(_ = I(pe, 'Destination')),
                pe.forEach(n),
                fe.forEach(n),
                (S = A(Q)),
                (h = f(Q, 'SELECT', { id: !0, name: !0, class: !0 }))
            var ie = p(h)
            P = f(ie, 'OPTION', {})
            var he = p(P)
            ;(M = I(he, 'Select Recipient')),
                he.forEach(n),
                O && O.l(ie),
                ie.forEach(n),
                Q.forEach(n),
                (C = A(L)),
                E && E.l(L),
                (J = A(L)),
                (B = f(L, 'DIV', { class: !0 }))
            var Z = p(B)
            F = f(Z, 'LABEL', { for: !0, class: !0 })
            var me = p(F)
            j = f(me, 'SPAN', { class: !0 })
            var _e = p(j)
            ;($ = I(_e, 'Amount')),
                _e.forEach(n),
                me.forEach(n),
                (x = A(Z)),
                (U = f(Z, 'LABEL', { class: !0 }))
            var G = p(U)
            ;(V = f(G, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0, class: !0 })),
                (ee = A(G)),
                (z = f(G, 'SPAN', {}))
            var ve = p(z)
            ;(te = I(ve, 'XLM')),
                ve.forEach(n),
                G.forEach(n),
                Z.forEach(n),
                (le = A(L)),
                (R = f(L, 'DIV', { class: !0 }))
            var W = p(R)
            K = f(W, 'LABEL', { for: !0, class: !0 })
            var be = p(K)
            q = f(be, 'SPAN', { class: !0 })
            var Ee = p(q)
            ;(ae = I(Ee, 'Memo')),
                Ee.forEach(n),
                be.forEach(n),
                (se = A(W)),
                (X = f(W, 'INPUT', { id: !0, name: !0, type: !0, placeholder: !0, class: !0 })),
                W.forEach(n),
                (oe = A(L)),
                (H = f(L, 'DIV', { class: !0 }))
            var ye = p(H)
            Y = f(ye, 'BUTTON', { type: !0, class: !0 })
            var Pe = p(Y)
            ;(ne = I(Pe, 'Preview')), Pe.forEach(n), ye.forEach(n), L.forEach(n), this.h()
        },
        h() {
            e(v, 'type', 'hidden'),
                e(v, 'id', 'source'),
                e(v, 'name', 'source'),
                (v.value = r[0]),
                e(b, 'class', 'label-text'),
                e(g, 'for', 'destination'),
                e(g, 'class', 'label'),
                (P.disabled = !0),
                (P.selected = !0),
                (P.__value = 'Select Recipient'),
                (P.value = P.__value),
                e(h, 'id', 'destination'),
                e(h, 'name', 'destination'),
                e(h, 'class', 'select select-bordered'),
                r[1] === void 0 && Be(() => r[5].call(h)),
                e(y, 'class', 'form-control w-full max-w-xs'),
                e(j, 'class', 'label-text'),
                e(F, 'for', 'amount'),
                e(F, 'class', 'label'),
                e(V, 'id', 'amount'),
                e(V, 'name', 'amount'),
                e(V, 'type', 'text'),
                e(V, 'placeholder', '0.01'),
                e(V, 'class', 'input input-bordered'),
                e(U, 'class', 'input-group'),
                e(B, 'class', 'form-control'),
                e(q, 'class', 'label-text'),
                e(K, 'for', 'memo'),
                e(K, 'class', 'label'),
                e(X, 'id', 'memo'),
                e(X, 'name', 'memo'),
                e(X, 'type', 'text'),
                e(X, 'placeholder', 'Optional'),
                e(X, 'class', 'input input-bordered'),
                e(R, 'class', 'form-control'),
                e(Y, 'type', 'submit'),
                e(Y, 'class', 'btn btn-primary'),
                e(H, 'class', 'form-control'),
                e(u, 'method', 'POST'),
                e(u, 'action', '?/preview')
        },
        m(m, w) {
            D(m, o, w),
                t(o, i),
                D(m, l, w),
                D(m, a, w),
                t(a, c),
                D(m, s, w),
                D(m, u, w),
                t(u, v),
                t(u, T),
                t(u, y),
                t(y, g),
                t(g, b),
                t(b, _),
                t(y, S),
                t(y, h),
                t(h, P),
                t(P, M),
                O && O.m(h, null),
                we(h, r[1], !0),
                t(u, C),
                E && E.m(u, null),
                t(u, J),
                t(u, B),
                t(B, F),
                t(F, j),
                t(j, $),
                t(B, x),
                t(B, U),
                t(U, V),
                t(U, ee),
                t(U, z),
                t(z, te),
                t(u, le),
                t(u, R),
                t(R, K),
                t(K, q),
                t(q, ae),
                t(R, se),
                t(R, X),
                t(u, oe),
                t(u, H),
                t(H, Y),
                t(Y, ne),
                re ||
                    ((ue = [
                        ke(h, 'change', r[5]),
                        ke(h, 'change', function () {
                            Ke(r[4](r[1])) && r[4](r[1]).apply(this, arguments)
                        }),
                        Ue(Ce.call(null, u)),
                    ]),
                    (re = !0))
        },
        p(m, [w]) {
            ;(r = m),
                w & 1 && (v.value = r[0]),
                ce && O.p(r, w),
                w & 10 && we(h, r[1]),
                r[2] ? (E ? E.p(r, w) : ((E = Te(r)), E.c(), E.m(u, J))) : E && (E.d(1), (E = null))
        },
        i: Ae,
        o: Ae,
        d(m) {
            m && n(o),
                m && n(l),
                m && n(a),
                m && n(s),
                m && n(u),
                O && O.d(),
                E && E.d(),
                (re = !1),
                Ve(ue)
        },
    }
}
function Je(r, o, i) {
    let l
    Re(r, ce, (T) => i(3, (l = T)))
    let a,
        c,
        s = !1,
        u = (T) => qe(T).then((y) => i(2, (s = !y.funded)))
    a = je().bpaPublicKey
    function v() {
        ;(c = Ye(this)), i(1, c)
    }
    return [a, c, s, l, u, v]
}
class xe extends De {
    constructor(o) {
        super(), Oe(this, o, Je, ze, Me, {})
    }
}
export { xe as default }
