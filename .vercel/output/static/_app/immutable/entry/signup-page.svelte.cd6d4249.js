import {
    S as et,
    i as tt,
    s as lt,
    k as l,
    q as N,
    a as w,
    l as s,
    m as a,
    r as T,
    h as r,
    c as P,
    n as t,
    b as Ke,
    H as e,
    V as j,
    P as Q,
    Y as ve,
    I as Qe,
    X as st,
    J as X,
    o as rt,
    T as Re,
    a0 as at,
    U as We,
    a1 as ot,
} from '../chunks/index.9fb5b323.js'
import { w as F } from '../chunks/index.300902f1.js'
import { r as nt } from '../chunks/walletStore.f68d24fc.js'
import { g as it } from '../chunks/generateKeypair.c6b5dfc9.js'
function Ze(u) {
    let d, o, n, h, m, i, _, I
    return {
        c() {
            ;(d = l('div')),
                (o = l('div')),
                (n = Re('svg')),
                (h = Re('path')),
                (m = w()),
                (i = l('span')),
                (_ = N('Error: ')),
                (I = new at(!1)),
                this.h()
        },
        l(f) {
            d = s(f, 'DIV', { class: !0 })
            var c = a(d)
            o = s(c, 'DIV', {})
            var y = a(o)
            n = We(y, 'svg', { xmlns: !0, class: !0, fill: !0, viewBox: !0 })
            var E = a(n)
            ;(h = We(E, 'path', {
                'stroke-linecap': !0,
                'stroke-linejoin': !0,
                'stroke-width': !0,
                d: !0,
            })),
                a(h).forEach(r),
                E.forEach(r),
                (m = P(y)),
                (i = s(y, 'SPAN', {}))
            var p = a(i)
            ;(_ = T(p, 'Error: ')),
                (I = ot(p, !1)),
                p.forEach(r),
                y.forEach(r),
                c.forEach(r),
                this.h()
        },
        h() {
            t(h, 'stroke-linecap', 'round'),
                t(h, 'stroke-linejoin', 'round'),
                t(h, 'stroke-width', '2'),
                t(h, 'd', 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'),
                t(n, 'xmlns', 'http://www.w3.org/2000/svg'),
                t(n, 'class', 'stroke-current flex-shrink-0 h-6 w-6'),
                t(n, 'fill', 'none'),
                t(n, 'viewBox', '0 0 24 24'),
                (I.a = null),
                t(d, 'class', 'alert alert-error shadow-lg mb-4')
        },
        m(f, c) {
            Ke(f, d, c), e(d, o), e(o, n), e(n, h), e(o, m), e(o, i), e(i, _), I.m(u[4], i)
        },
        p(f, c) {
            c & 16 && I.p(f[4])
        },
        d(f) {
            f && r(d)
        },
    }
}
function $e(u) {
    let d, o, n, h, m, i, _, I
    return {
        c() {
            ;(d = l('div')),
                (o = l('label')),
                (n = l('span')),
                (h = N('Secret Key')),
                (m = w()),
                (i = l('input')),
                this.h()
        },
        l(f) {
            d = s(f, 'DIV', { class: !0 })
            var c = a(d)
            o = s(c, 'LABEL', { for: !0, class: !0 })
            var y = a(o)
            n = s(y, 'SPAN', { class: !0 })
            var E = a(n)
            ;(h = T(E, 'Secret Key')),
                E.forEach(r),
                y.forEach(r),
                (m = P(c)),
                (i = s(c, 'INPUT', { type: !0, placeholder: !0, id: !0, class: !0 })),
                c.forEach(r),
                this.h()
        },
        h() {
            t(n, 'class', 'label-text'),
                t(o, 'for', 'secretKey'),
                t(o, 'class', 'label'),
                t(i, 'type', 'text'),
                t(i, 'placeholder', 'S...'),
                t(i, 'id', 'secretKey'),
                t(i, 'class', 'input input-bordered'),
                (i.disabled = !0),
                t(d, 'class', 'form-control')
        },
        m(f, c) {
            Ke(f, d, c),
                e(d, o),
                e(o, n),
                e(n, h),
                e(d, m),
                e(d, i),
                j(i, u[2]),
                _ || ((I = Q(i, 'input', u[17])), (_ = !0))
        },
        p(f, c) {
            c & 4 && i.value !== f[2] && j(i, f[2])
        },
        d(f) {
            f && r(d), (_ = !1), I()
        },
    }
}
function ct(u) {
    let d,
        o,
        n,
        h,
        m,
        i,
        _,
        I,
        f,
        c,
        y,
        E,
        p,
        S,
        K,
        A,
        R,
        ae,
        V,
        oe,
        x,
        Y,
        ne,
        v,
        W,
        H,
        Z,
        be,
        _e,
        M,
        me,
        ie,
        C,
        q,
        $,
        ye,
        Ee,
        B,
        ge,
        G,
        O,
        ee,
        ke,
        we,
        U,
        Pe,
        te,
        z,
        Ie,
        Se,
        le,
        se,
        J,
        Ve,
        De,
        Ae,
        g = u[4] && Ze(u),
        k = u[5] && $e(u)
    return {
        c() {
            ;(d = l('div')),
                (o = l('div')),
                (n = l('div')),
                (h = l('h1')),
                (m = N('Signup now!')),
                (i = w()),
                (_ = l('p')),
                (I = N(
                    "Please provide a 6-digit pincode to sign up. This pincode will be used to encrypt the secret key for your Stellar address, before it is stored in your browser's local storage. Your secret key to this address will be stored on your device. You will be the only one to ever have custody over this key."
                )),
                (f = w()),
                (c = l('div')),
                g && g.c(),
                (y = w()),
                (E = l('div')),
                (p = l('div')),
                (S = l('div')),
                (K = l('label')),
                (A = l('span')),
                (R = N('Public Key')),
                (ae = w()),
                (V = l('input')),
                (oe = w()),
                (x = l('label')),
                (Y = l('button')),
                (ne = N('Generate new address?')),
                (v = w()),
                (W = l('div')),
                (H = l('label')),
                (Z = l('span')),
                (be = N('Show secret key?')),
                (_e = w()),
                (M = l('input')),
                (me = w()),
                k && k.c(),
                (ie = w()),
                (C = l('div')),
                (q = l('label')),
                ($ = l('span')),
                (ye = N('Pincode')),
                (Ee = w()),
                (B = l('input')),
                (ge = w()),
                (G = l('div')),
                (O = l('label')),
                (ee = l('span')),
                (ke = N('Confirm Pincode')),
                (we = w()),
                (U = l('input')),
                (Pe = w()),
                (te = l('div')),
                (z = l('button')),
                (Ie = N('Signup')),
                (Se = w()),
                (le = l('div')),
                (se = l('label')),
                (J = l('a')),
                (Ve = N('Existing users can login here')),
                this.h()
        },
        l(b) {
            d = s(b, 'DIV', { class: !0 })
            var L = a(d)
            o = s(L, 'DIV', { class: !0 })
            var ce = a(o)
            n = s(ce, 'DIV', { class: !0 })
            var ue = a(n)
            h = s(ue, 'H1', { class: !0 })
            var Le = a(h)
            ;(m = T(Le, 'Signup now!')), Le.forEach(r), (i = P(ue)), (_ = s(ue, 'P', { class: !0 }))
            var Ne = a(_)
            ;(I = T(
                Ne,
                "Please provide a 6-digit pincode to sign up. This pincode will be used to encrypt the secret key for your Stellar address, before it is stored in your browser's local storage. Your secret key to this address will be stored on your device. You will be the only one to ever have custody over this key."
            )),
                Ne.forEach(r),
                ue.forEach(r),
                (f = P(ce)),
                (c = s(ce, 'DIV', { class: !0 }))
            var de = a(c)
            g && g.l(de), (y = P(de)), (E = s(de, 'DIV', { class: !0 }))
            var Te = a(E)
            p = s(Te, 'DIV', { class: !0 })
            var D = a(p)
            S = s(D, 'DIV', { class: !0 })
            var re = a(S)
            K = s(re, 'LABEL', { for: !0, class: !0 })
            var Be = a(K)
            A = s(Be, 'SPAN', { class: !0 })
            var Ue = a(A)
            ;(R = T(Ue, 'Public Key')),
                Ue.forEach(r),
                Be.forEach(r),
                (ae = P(re)),
                (V = s(re, 'INPUT', { type: !0, placeholder: !0, id: !0, class: !0 })),
                (oe = P(re)),
                (x = s(re, 'LABEL', { class: !0 }))
            var Ye = a(x)
            Y = s(Ye, 'BUTTON', { class: !0 })
            var xe = a(Y)
            ;(ne = T(xe, 'Generate new address?')),
                xe.forEach(r),
                Ye.forEach(r),
                re.forEach(r),
                (v = P(D)),
                (W = s(D, 'DIV', { class: !0 }))
            var He = a(W)
            H = s(He, 'LABEL', { class: !0 })
            var pe = a(H)
            Z = s(pe, 'SPAN', { class: !0 })
            var Me = a(Z)
            ;(be = T(Me, 'Show secret key?')),
                Me.forEach(r),
                (_e = P(pe)),
                (M = s(pe, 'INPUT', { type: !0, class: !0 })),
                pe.forEach(r),
                He.forEach(r),
                (me = P(D)),
                k && k.l(D),
                (ie = P(D)),
                (C = s(D, 'DIV', { class: !0 }))
            var he = a(C)
            q = s(he, 'LABEL', { for: !0, class: !0 })
            var Ce = a(q)
            $ = s(Ce, 'SPAN', { class: !0 })
            var Ge = a($)
            ;(ye = T(Ge, 'Pincode')),
                Ge.forEach(r),
                Ce.forEach(r),
                (Ee = P(he)),
                (B = s(he, 'INPUT', { type: !0, id: !0, class: !0 })),
                he.forEach(r),
                (ge = P(D)),
                (G = s(D, 'DIV', { class: !0 }))
            var fe = a(G)
            O = s(fe, 'LABEL', { for: !0, class: !0 })
            var je = a(O)
            ee = s(je, 'SPAN', { class: !0 })
            var qe = a(ee)
            ;(ke = T(qe, 'Confirm Pincode')),
                qe.forEach(r),
                je.forEach(r),
                (we = P(fe)),
                (U = s(fe, 'INPUT', { type: !0, id: !0, class: !0 })),
                fe.forEach(r),
                (Pe = P(D)),
                (te = s(D, 'DIV', { class: !0 }))
            var Oe = a(te)
            z = s(Oe, 'BUTTON', { class: !0 })
            var ze = a(z)
            ;(Ie = T(ze, 'Signup')),
                ze.forEach(r),
                Oe.forEach(r),
                (Se = P(D)),
                (le = s(D, 'DIV', { class: !0 }))
            var Je = a(le)
            se = s(Je, 'LABEL', { class: !0 })
            var Xe = a(se)
            J = s(Xe, 'A', { class: !0, href: !0 })
            var Fe = a(J)
            ;(Ve = T(Fe, 'Existing users can login here')),
                Fe.forEach(r),
                Xe.forEach(r),
                Je.forEach(r),
                D.forEach(r),
                Te.forEach(r),
                de.forEach(r),
                ce.forEach(r),
                L.forEach(r),
                this.h()
        },
        h() {
            t(h, 'class', 'text-5xl font-bold'),
                t(_, 'class', 'py-6'),
                t(n, 'class', 'text-center lg:text-left'),
                t(A, 'class', 'label-text'),
                t(K, 'for', 'publicKey'),
                t(K, 'class', 'label'),
                t(V, 'type', 'text'),
                t(V, 'placeholder', 'G...'),
                t(V, 'id', 'publicKey'),
                t(V, 'class', 'input input-bordered'),
                (V.disabled = !0),
                t(Y, 'class', 'label-text-alt link link-hover'),
                t(x, 'class', 'label'),
                t(S, 'class', 'form-control'),
                t(Z, 'class', 'label-text'),
                t(M, 'type', 'checkbox'),
                t(M, 'class', 'toggle'),
                t(H, 'class', 'label cursor-pointer pb-0'),
                t(W, 'class', 'form-control'),
                t($, 'class', 'label-text'),
                t(q, 'for', 'pincode'),
                t(q, 'class', 'label'),
                t(B, 'type', 'number'),
                t(B, 'id', 'pincode'),
                t(B, 'class', 'input input-bordered'),
                t(C, 'class', 'form-control'),
                t(ee, 'class', 'label-text'),
                t(O, 'for', 'confirmPincode'),
                t(O, 'class', 'label'),
                t(U, 'type', 'number'),
                t(U, 'id', 'confirmPincode'),
                t(U, 'class', 'input input-bordered'),
                t(G, 'class', 'form-control'),
                t(z, 'class', 'btn btn-primary'),
                t(te, 'class', 'form-control mt-6'),
                t(J, 'class', 'label-text-alt link link-hover'),
                t(J, 'href', '/login'),
                t(se, 'class', 'label'),
                t(le, 'class', 'form-control'),
                t(p, 'class', 'card-body'),
                t(E, 'class', 'card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'),
                t(c, 'class', 'flex-col'),
                t(o, 'class', 'hero-content flex-col lg:flex-row-reverse'),
                t(d, 'class', 'hero min-h-screen bg-base-200')
        },
        m(b, L) {
            Ke(b, d, L),
                e(d, o),
                e(o, n),
                e(n, h),
                e(h, m),
                e(n, i),
                e(n, _),
                e(_, I),
                e(o, f),
                e(o, c),
                g && g.m(c, null),
                e(c, y),
                e(c, E),
                e(E, p),
                e(p, S),
                e(S, K),
                e(K, A),
                e(A, R),
                e(S, ae),
                e(S, V),
                j(V, u[3]),
                e(S, oe),
                e(S, x),
                e(x, Y),
                e(Y, ne),
                e(p, v),
                e(p, W),
                e(W, H),
                e(H, Z),
                e(Z, be),
                e(H, _e),
                e(H, M),
                (M.checked = u[5]),
                e(p, me),
                k && k.m(p, null),
                e(p, ie),
                e(p, C),
                e(C, q),
                e(q, $),
                e($, ye),
                e(C, Ee),
                e(C, B),
                j(B, u[1]),
                e(p, ge),
                e(p, G),
                e(G, O),
                e(O, ee),
                e(ee, ke),
                e(G, we),
                e(G, U),
                j(U, u[0]),
                e(p, Pe),
                e(p, te),
                e(te, z),
                e(z, Ie),
                e(p, Se),
                e(p, le),
                e(le, se),
                e(se, J),
                e(J, Ve),
                De ||
                    ((Ae = [
                        Q(V, 'input', u[15]),
                        Q(Y, 'click', u[13]),
                        Q(M, 'change', u[16]),
                        Q(B, 'input', u[18]),
                        Q(U, 'input', u[19]),
                        Q(z, 'click', u[14]),
                    ]),
                    (De = !0))
        },
        p(b, [L]) {
            b[4] ? (g ? g.p(b, L) : ((g = Ze(b)), g.c(), g.m(c, y))) : g && (g.d(1), (g = null)),
                L & 8 && V.value !== b[3] && j(V, b[3]),
                L & 32 && (M.checked = b[5]),
                b[5]
                    ? k
                        ? k.p(b, L)
                        : ((k = $e(b)), k.c(), k.m(p, ie))
                    : k && (k.d(1), (k = null)),
                L & 2 && ve(B.value) !== b[1] && j(B, b[1]),
                L & 1 && ve(U.value) !== b[0] && j(U, b[0])
        },
        i: Qe,
        o: Qe,
        d(b) {
            b && r(d), g && g.d(), k && k.d(), (De = !1), st(Ae)
        },
    }
}
function ut(u, d, o) {
    let n,
        h,
        m,
        i,
        _,
        I,
        f,
        c = F()
    X(u, c, (v) => o(20, (_ = v)))
    let y = F()
    X(u, y, (v) => o(3, (i = v)))
    let E = F()
    X(u, E, (v) => o(2, (m = v)))
    let p = F(!1)
    X(u, p, (v) => o(5, (f = v)))
    let S = F()
    X(u, S, (v) => o(1, (h = v)))
    let K = F()
    X(u, K, (v) => o(0, (n = v)))
    let A = F()
    X(u, A, (v) => o(4, (I = v)))
    const R = () => {
            c.set(it()), y.set(_.publicKey()), E.set(_.secret())
        },
        ae = () => {
            try {
                A.set(null), nt(i, m, h, n)
            } catch (v) {
                console.error(v), A.set(v.body.message)
            }
        }
    rt(() => {
        R()
    })
    function V() {
        ;(i = this.value), y.set(i)
    }
    function oe() {
        ;(f = this.checked), p.set(f)
    }
    function x() {
        ;(m = this.value), E.set(m)
    }
    function Y() {
        ;(h = ve(this.value)), S.set(h)
    }
    function ne() {
        ;(n = ve(this.value)), K.set(n)
    }
    return [n, h, m, i, I, f, c, y, E, p, S, K, A, R, ae, V, oe, x, Y, ne]
}
class vt extends et {
    constructor(d) {
        super(), tt(this, d, ut, ct, lt, {})
    }
}
export { vt as default }
