import {
    S as xt,
    i as Gt,
    s as Kt,
    k as o,
    q as m,
    a as i,
    l,
    m as d,
    r as b,
    h as c,
    c as h,
    n as a,
    b as Ot,
    H as t,
    V as M,
    P as N,
    Y as At,
    I as Ut,
    X as Rt,
    J as St,
    Q as Dt,
} from '../chunks/index.9fb5b323.js'
import { c as jt } from '../chunks/contactsStore.8a7a0bb4.js'
import { g as Ft } from '../chunks/generateKeypair.c6b5dfc9.js'
import { s as Mt, a as bt } from '../chunks/horizonQueries.43912467.js'
import { l as mt } from '../chunks/index.7121c868.js'
import { m as Ht } from '../chunks/modalStore.9b01ff0f.js'
const qt = 'testnet',
    Vt = `https://api.stellar.expert/explorer/${qt}/`
async function zt() {
    return (
        await (
            await fetch(
                `${Vt}asset?${new URLSearchParams({
                    search: '',
                    sort: 'rating',
                    order: 'desc',
                    limit: 10,
                    cursor: 0,
                })}`
            )
        ).json()
    )._embedded.records
}
async function Jt(n, e) {
    let r = new mt.Server('https://horizon-testnet.stellar.org'),
        p = await Mt(n.publicKey())
    for (let _ of e.slice(1, 5)) {
        let f = new mt.Asset(_.asset.split('-')[0], _.asset.split('-')[1])
        p.addOperation(mt.Operation.changeTrust({ asset: f }))
    }
    return (p = p.setTimeout(30).build()), p.sign(n), await r.submitTransaction(p)
}
function Qt(n) {
    let e,
        r,
        p,
        _,
        f,
        g,
        U,
        C,
        G,
        K,
        y,
        O,
        u,
        R,
        v,
        H,
        E,
        q,
        w,
        V,
        T,
        z,
        J,
        A,
        Q,
        W,
        S,
        X,
        Y,
        P,
        Z,
        $,
        j,
        tt,
        et,
        D,
        st,
        at,
        B,
        nt,
        ot,
        x,
        lt,
        rt,
        F,
        ct,
        ut,
        k,
        it,
        I,
        dt,
        ht,
        _t
    return {
        c() {
            ;(e = o('div')),
                (r = o('h1')),
                (p = m('Dev Helpers')),
                (_ = i()),
                (f = o('h2')),
                (g = m('Make Friends')),
                (U = i()),
                (C = o('p')),
                (G = m('Populate the contact list, and fund the accounts with friendbot')),
                (K = i()),
                (y = o('input')),
                (O = i()),
                (u = o('label')),
                (R = m(`Fund new contacts
        `)),
                (v = o('input')),
                (H = i()),
                (E = o('label')),
                (q = m(`Give contacts some trustlines
        `)),
                (w = o('input')),
                (V = i()),
                (T = o('button')),
                (z = m('Add Contacts')),
                (J = i()),
                (A = o('h2')),
                (Q = m('Burn Bridges')),
                (W = i()),
                (S = o('p')),
                (X = m('Delete the contacts list')),
                (Y = i()),
                (P = o('button')),
                (Z = m('Empty Contacts')),
                ($ = i()),
                (j = o('h2')),
                (tt = m('Get Rich')),
                (et = i()),
                (D = o('p')),
                (st = m('Get your own account funded by friendbot')),
                (at = i()),
                (B = o('button')),
                (nt = m('I need a friend!')),
                (ot = i()),
                (x = o('h2')),
                (lt = m('Launch Model Rocket')),
                (rt = i()),
                (F = o('p')),
                (ct = m('Test the modal thing to see what comes up... I guess?')),
                (ut = i()),
                (k = o('input')),
                (it = i()),
                (I = o('label')),
                (dt = m('open modal')),
                this.h()
        },
        l(L) {
            e = l(L, 'DIV', { class: !0 })
            var s = d(e)
            r = l(s, 'H1', { class: !0 })
            var yt = d(r)
            ;(p = b(yt, 'Dev Helpers')), yt.forEach(c), (_ = h(s)), (f = l(s, 'H2', { class: !0 }))
            var vt = d(f)
            ;(g = b(vt, 'Make Friends')), vt.forEach(c), (U = h(s)), (C = l(s, 'P', {}))
            var Et = d(C)
            ;(G = b(Et, 'Populate the contact list, and fund the accounts with friendbot')),
                Et.forEach(c),
                (K = h(s)),
                (y = l(s, 'INPUT', { type: !0, id: !0, name: !0 })),
                (O = h(s)),
                (u = l(s, 'LABEL', { for: !0, class: !0 }))
            var pt = d(u)
            ;(R = b(
                pt,
                `Fund new contacts
        `
            )),
                (v = l(pt, 'INPUT', { type: !0, class: !0, name: !0, id: !0 })),
                pt.forEach(c),
                (H = h(s)),
                (E = l(s, 'LABEL', { for: !0, class: !0 }))
            var ft = d(E)
            ;(q = b(
                ft,
                `Give contacts some trustlines
        `
            )),
                (w = l(ft, 'INPUT', { type: !0, class: !0, name: !0, id: !0 })),
                ft.forEach(c),
                (V = h(s)),
                (T = l(s, 'BUTTON', { class: !0 }))
            var wt = d(T)
            ;(z = b(wt, 'Add Contacts')), wt.forEach(c), (J = h(s)), (A = l(s, 'H2', { class: !0 }))
            var gt = d(A)
            ;(Q = b(gt, 'Burn Bridges')), gt.forEach(c), (W = h(s)), (S = l(s, 'P', {}))
            var kt = d(S)
            ;(X = b(kt, 'Delete the contacts list')),
                kt.forEach(c),
                (Y = h(s)),
                (P = l(s, 'BUTTON', { class: !0 }))
            var Ct = d(P)
            ;(Z = b(Ct, 'Empty Contacts')),
                Ct.forEach(c),
                ($ = h(s)),
                (j = l(s, 'H2', { class: !0 }))
            var Tt = d(j)
            ;(tt = b(Tt, 'Get Rich')), Tt.forEach(c), (et = h(s)), (D = l(s, 'P', {}))
            var Pt = d(D)
            ;(st = b(Pt, 'Get your own account funded by friendbot')),
                Pt.forEach(c),
                (at = h(s)),
                (B = l(s, 'BUTTON', { class: !0 }))
            var Bt = d(B)
            ;(nt = b(Bt, 'I need a friend!')),
                Bt.forEach(c),
                (ot = h(s)),
                (x = l(s, 'H2', { class: !0 }))
            var It = d(x)
            ;(lt = b(It, 'Launch Model Rocket')), It.forEach(c), (rt = h(s)), (F = l(s, 'P', {}))
            var Lt = d(F)
            ;(ct = b(Lt, 'Test the modal thing to see what comes up... I guess?')),
                Lt.forEach(c),
                (ut = h(s)),
                (k = l(s, 'INPUT', { type: !0 })),
                (it = h(s)),
                (I = l(s, 'LABEL', { for: !0, class: !0 }))
            var Nt = d(I)
            ;(dt = b(Nt, 'open modal')), Nt.forEach(c), s.forEach(c), this.h()
        },
        h() {
            a(r, 'class', 'text-5xl font-bold'),
                a(f, 'class', 'text-3xl font-bold'),
                a(y, 'type', 'number'),
                a(y, 'id', 'numContacts'),
                a(y, 'name', 'numContacts'),
                a(v, 'type', 'checkbox'),
                a(v, 'class', 'checkbox'),
                a(v, 'name', 'fundContacts'),
                a(v, 'id', 'fundContacts'),
                a(u, 'for', 'fundContacts'),
                a(u, 'class', 'cursor-pointer'),
                a(w, 'type', 'checkbox'),
                a(w, 'class', 'checkbox'),
                a(w, 'name', 'trustlineContacts'),
                a(w, 'id', 'trustlineContacts'),
                a(E, 'for', 'trustlineContacts'),
                a(E, 'class', 'cursor-pointer'),
                a(T, 'class', 'btn btn-primary'),
                a(A, 'class', 'text-3xl font-bold'),
                a(P, 'class', 'btn btn-error'),
                a(j, 'class', 'text-3xl font-bold'),
                a(B, 'class', 'btn btn-success'),
                a(x, 'class', 'text-3xl font-bold'),
                a(k, 'type', 'text'),
                a(I, 'for', 'my-modal'),
                a(I, 'class', 'btn btn-primary'),
                a(e, 'class', 'my-10 mx-20')
        },
        m(L, s) {
            Ot(L, e, s),
                t(e, r),
                t(r, p),
                t(e, _),
                t(e, f),
                t(f, g),
                t(e, U),
                t(e, C),
                t(C, G),
                t(e, K),
                t(e, y),
                M(y, n[3]),
                t(e, O),
                t(e, u),
                t(u, R),
                t(u, v),
                (v.checked = n[2]),
                t(e, H),
                t(e, E),
                t(E, q),
                t(E, w),
                (w.checked = n[1]),
                t(e, V),
                t(e, T),
                t(T, z),
                t(e, J),
                t(e, A),
                t(A, Q),
                t(e, W),
                t(e, S),
                t(S, X),
                t(e, Y),
                t(e, P),
                t(P, Z),
                t(e, $),
                t(e, j),
                t(j, tt),
                t(e, et),
                t(e, D),
                t(D, st),
                t(e, at),
                t(e, B),
                t(B, nt),
                t(e, ot),
                t(e, x),
                t(x, lt),
                t(e, rt),
                t(e, F),
                t(F, ct),
                t(e, ut),
                t(e, k),
                M(k, n[4].button),
                t(e, it),
                t(e, I),
                t(I, dt),
                ht ||
                    ((_t = [
                        N(y, 'input', n[6]),
                        N(v, 'change', n[7]),
                        N(w, 'change', n[8]),
                        N(T, 'click', n[5]),
                        N(P, 'click', jt.empty),
                        N(B, 'click', function () {
                            Dt(bt(n[0].bpaPublicKey)) &&
                                bt(n[0].bpaPublicKey).apply(this, arguments)
                        }),
                        N(k, 'input', n[9]),
                    ]),
                    (ht = !0))
        },
        p(L, [s]) {
            ;(n = L),
                s & 8 && At(y.value) !== n[3] && M(y, n[3]),
                s & 4 && (v.checked = n[2]),
                s & 2 && (w.checked = n[1]),
                s & 16 && k.value !== n[4].button && M(k, n[4].button)
        },
        i: Ut,
        o: Ut,
        d(L) {
            L && c(e), (ht = !1), Rt(_t)
        },
    }
}
function Wt(n, e, r) {
    let p, _, f, g
    St(n, Ht, (u) => r(4, (g = u)))
    let { data: U } = e
    const C = async () => {
        let u
        f && (u = await zt())
        let R = await fetch(`https://dummyjson.com/users?limit=${p}&select=firstName`),
            { users: v } = await R.json()
        v.map(async (H) => {
            let E = Ft()
            jt.add({ name: H.firstName, address: E.publicKey(), favorite: H.id % 2 === 0 }),
                _ && (await bt(E.publicKey())),
                f && (await Jt(E, u))
        })
    }
    function G() {
        ;(p = At(this.value)), r(3, p)
    }
    function K() {
        ;(_ = this.checked), r(2, _)
    }
    function y() {
        ;(f = this.checked), r(1, f)
    }
    function O() {
        ;(g.button = this.value), Ht.set(g)
    }
    return (
        (n.$$set = (u) => {
            'data' in u && r(0, (U = u.data))
        }),
        r(3, (p = 1)),
        r(2, (_ = !1)),
        r(1, (f = !1)),
        [U, f, _, p, g, C, G, K, y, O]
    )
}
class se extends xt {
    constructor(e) {
        super(), Gt(this, e, Wt, Qt, Kt, { data: 0 })
    }
}
export { se as default }
