import {
    S as Se,
    i as qe,
    s as Fe,
    k as n,
    q as C,
    a as p,
    l as c,
    m as d,
    r as H,
    h as s,
    c as m,
    n as a,
    b as _e,
    H as e,
    V as fe,
    P as ce,
    W as Re,
    I as He,
    X as Oe,
    J as We,
    T as ue,
    U as ve,
    u as be,
    O as je,
    K as Le,
    Q as Ne,
} from '../chunks/index.9fb5b323.js'
import { c as ie } from '../chunks/contactsStore.8a7a0bb4.js'
function Pe(h, l, i) {
    const t = h.slice()
    return (t[7] = l[i]), t
}
function Me(h) {
    let l, i, t, r, u, o, w, g
    return {
        c() {
            ;(l = n('div')),
                (i = n('div')),
                (t = ue('svg')),
                (r = ue('path')),
                (u = p()),
                (o = n('span')),
                (w = C('Error! ')),
                (g = C(h[0])),
                this.h()
        },
        l(f) {
            l = c(f, 'DIV', { class: !0 })
            var v = d(l)
            i = c(v, 'DIV', {})
            var y = d(i)
            t = ve(y, 'svg', { xmlns: !0, class: !0, fill: !0, viewBox: !0 })
            var V = d(t)
            ;(r = ve(V, 'path', {
                'stroke-linecap': !0,
                'stroke-linejoin': !0,
                'stroke-width': !0,
                d: !0,
            })),
                d(r).forEach(s),
                V.forEach(s),
                (u = m(y)),
                (o = c(y, 'SPAN', {}))
            var b = d(o)
            ;(w = H(b, 'Error! ')),
                (g = H(b, h[0])),
                b.forEach(s),
                y.forEach(s),
                v.forEach(s),
                this.h()
        },
        h() {
            a(r, 'stroke-linecap', 'round'),
                a(r, 'stroke-linejoin', 'round'),
                a(r, 'stroke-width', '2'),
                a(r, 'd', 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'),
                a(t, 'xmlns', 'http://www.w3.org/2000/svg'),
                a(t, 'class', 'stroke-current flex-shrink-0 h-6 w-6'),
                a(t, 'fill', 'none'),
                a(t, 'viewBox', '0 0 24 24'),
                a(l, 'class', 'alert alert-error shadow-lg')
        },
        m(f, v) {
            _e(f, l, v), e(l, i), e(i, t), e(t, r), e(i, u), e(i, o), e(o, w), e(o, g)
        },
        p(f, v) {
            v & 1 && be(g, f[0])
        },
        d(f) {
            f && s(l)
        },
    }
}
function Ue(h) {
    let l,
        i = h[2],
        t = []
    for (let r = 0; r < i.length; r += 1) t[r] = ze(Pe(h, i, r))
    return {
        c() {
            l = n('tbody')
            for (let r = 0; r < t.length; r += 1) t[r].c()
        },
        l(r) {
            l = c(r, 'TBODY', {})
            var u = d(l)
            for (let o = 0; o < t.length; o += 1) t[o].l(u)
            u.forEach(s)
        },
        m(r, u) {
            _e(r, l, u)
            for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(l, null)
        },
        p(r, u) {
            if (u & 4) {
                i = r[2]
                let o
                for (o = 0; o < i.length; o += 1) {
                    const w = Pe(r, i, o)
                    t[o] ? t[o].p(w, u) : ((t[o] = ze(w)), t[o].c(), t[o].m(l, null))
                }
                for (; o < t.length; o += 1) t[o].d(1)
                t.length = i.length
            }
        },
        d(r) {
            r && s(l), je(t, r)
        },
    }
}
function ze(h) {
    let l,
        i,
        t,
        r,
        u,
        o,
        w,
        g,
        f,
        v,
        y,
        V,
        b,
        X,
        z,
        q,
        R = h[7].name + '',
        B,
        Y,
        N,
        W = h[7].address + '',
        P,
        Z,
        M,
        S,
        U,
        A,
        j,
        x,
        $
    return {
        c() {
            ;(l = n('tr')),
                (i = n('th')),
                (t = n('div')),
                (r = n('label')),
                (u = n('input')),
                (w = p()),
                (g = n('td')),
                (f = n('div')),
                (v = n('div')),
                (y = n('div')),
                (V = n('img')),
                (X = p()),
                (z = n('div')),
                (q = n('div')),
                (B = C(R)),
                (Y = p()),
                (N = n('td')),
                (P = C(W)),
                (Z = p()),
                (M = n('th')),
                (S = n('button')),
                (U = ue('svg')),
                (A = ue('path')),
                (j = p()),
                this.h()
        },
        l(k) {
            l = c(k, 'TR', {})
            var _ = d(l)
            i = c(_, 'TH', {})
            var L = d(i)
            t = c(L, 'DIV', { class: !0 })
            var G = d(t)
            r = c(G, 'LABEL', { class: !0 })
            var ee = d(r)
            ;(u = c(ee, 'INPUT', { type: !0, class: !0 })),
                ee.forEach(s),
                G.forEach(s),
                L.forEach(s),
                (w = m(_)),
                (g = c(_, 'TD', {}))
            var te = d(g)
            f = c(te, 'DIV', { class: !0 })
            var F = d(f)
            v = c(F, 'DIV', { class: !0 })
            var le = d(v)
            y = c(le, 'DIV', { class: !0 })
            var ae = d(y)
            ;(V = c(ae, 'IMG', { src: !0, alt: !0 })),
                ae.forEach(s),
                le.forEach(s),
                (X = m(F)),
                (z = c(F, 'DIV', {}))
            var J = d(z)
            q = c(J, 'DIV', { class: !0 })
            var se = d(q)
            ;(B = H(se, R)),
                se.forEach(s),
                J.forEach(s),
                F.forEach(s),
                te.forEach(s),
                (Y = m(_)),
                (N = c(_, 'TD', {}))
            var re = d(N)
            ;(P = H(re, W)), re.forEach(s), (Z = m(_)), (M = c(_, 'TH', {}))
            var K = d(M)
            S = c(K, 'BUTTON', { class: !0 })
            var oe = d(S)
            U = ve(oe, 'svg', { xmlns: !0, viewBox: !0, fill: !0, class: !0 })
            var ne = d(U)
            ;(A = ve(ne, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
                d(A).forEach(s),
                ne.forEach(s),
                oe.forEach(s),
                K.forEach(s),
                (j = m(_)),
                _.forEach(s),
                this.h()
        },
        h() {
            a(u, 'type', 'checkbox'),
                a(u, 'class', 'checkbox checkbox-success'),
                (u.checked = o = h[7].favorite),
                a(r, 'class', 'cursor-pointer label'),
                a(t, 'class', 'form-control'),
                Le(V.src, (b = 'https://id.lobstr.co/' + h[7].address + '.png')) || a(V, 'src', b),
                a(V, 'alt', 'Avatar Tailwind CSS Component'),
                a(y, 'class', 'w-10 rounded-full'),
                a(v, 'class', 'avatar'),
                a(q, 'class', 'font-bold'),
                a(f, 'class', 'flex items-center space-x-3'),
                a(A, 'fill-rule', 'evenodd'),
                a(
                    A,
                    'd',
                    'M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                ),
                a(A, 'clip-rule', 'evenodd'),
                a(U, 'xmlns', 'http://www.w3.org/2000/svg'),
                a(U, 'viewBox', '0 0 20 20'),
                a(U, 'fill', 'currentColor'),
                a(U, 'class', 'w-5 h-5'),
                a(S, 'class', 'btn btn-square btn-error')
        },
        m(k, _) {
            _e(k, l, _),
                e(l, i),
                e(i, t),
                e(t, r),
                e(r, u),
                e(l, w),
                e(l, g),
                e(g, f),
                e(f, v),
                e(v, y),
                e(y, V),
                e(f, X),
                e(f, z),
                e(z, q),
                e(q, B),
                e(l, Y),
                e(l, N),
                e(N, P),
                e(l, Z),
                e(l, M),
                e(M, S),
                e(S, U),
                e(U, A),
                e(l, j),
                x ||
                    (($ = [
                        ce(u, 'click', function () {
                            Ne(ie.favorite(h[7].id)) && ie.favorite(h[7].id).apply(this, arguments)
                        }),
                        ce(S, 'click', function () {
                            Ne(ie.remove(h[7].id)) && ie.remove(h[7].id).apply(this, arguments)
                        }),
                    ]),
                    (x = !0))
        },
        p(k, _) {
            ;(h = k),
                _ & 4 && o !== (o = h[7].favorite) && (u.checked = o),
                _ & 4 &&
                    !Le(V.src, (b = 'https://id.lobstr.co/' + h[7].address + '.png')) &&
                    a(V, 'src', b),
                _ & 4 && R !== (R = h[7].name + '') && be(B, R),
                _ & 4 && W !== (W = h[7].address + '') && be(P, W)
        },
        d(k) {
            k && s(l), (x = !1), Oe($)
        },
    }
}
function Ge(h) {
    let l,
        i,
        t,
        r,
        u,
        o,
        w,
        g,
        f,
        v,
        y,
        V,
        b,
        X,
        z,
        q,
        R,
        B,
        Y,
        N,
        W,
        P,
        Z,
        M,
        S,
        U,
        A,
        j,
        x,
        $,
        k,
        _,
        L,
        G,
        ee,
        te,
        F,
        le,
        ae,
        J,
        se,
        re,
        K,
        oe,
        ne,
        pe,
        Ee,
        D = h[0] && Me(h),
        I = h[2] && Ue(h)
    return {
        c() {
            ;(l = n('div')),
                (i = n('h1')),
                (t = C('Contacts')),
                (r = p()),
                (u = n('p')),
                (o = C("We'll manage our contacts here")),
                (w = p()),
                D && D.c(),
                (g = p()),
                (f = n('form')),
                (v = n('label')),
                (y = C('name')),
                (V = p()),
                (b = n('input')),
                (X = p()),
                (z = n('label')),
                (q = C('address')),
                (R = p()),
                (B = n('input')),
                (Y = p()),
                (N = n('label')),
                (W = C(`favorite?
            `)),
                (P = n('input')),
                (Z = p()),
                (M = n('button')),
                (S = C('add contact')),
                (U = p()),
                (A = n('div')),
                (j = n('h3')),
                (x = C('All Contacts')),
                ($ = p()),
                (k = n('table')),
                (_ = n('thead')),
                (L = n('tr')),
                (G = n('th')),
                (ee = C('Favorite')),
                (te = p()),
                (F = n('th')),
                (le = C('Name')),
                (ae = p()),
                (J = n('th')),
                (se = C('Address')),
                (re = p()),
                (K = n('th')),
                (oe = C('Delete')),
                (ne = p()),
                I && I.c(),
                this.h()
        },
        l(T) {
            l = c(T, 'DIV', { class: !0 })
            var E = d(l)
            i = c(E, 'H1', { class: !0 })
            var ge = d(i)
            ;(t = H(ge, 'Contacts')), ge.forEach(s), (r = m(E)), (u = c(E, 'P', {}))
            var ke = d(u)
            ;(o = H(ke, "We'll manage our contacts here")),
                ke.forEach(s),
                (w = m(E)),
                D && D.l(E),
                (g = m(E)),
                (f = c(E, 'FORM', {}))
            var O = d(f)
            v = c(O, 'LABEL', { for: !0 })
            var Te = d(v)
            ;(y = H(Te, 'name')),
                Te.forEach(s),
                (V = m(O)),
                (b = c(O, 'INPUT', { id: !0, name: !0, type: !0 })),
                (X = m(O)),
                (z = c(O, 'LABEL', { for: !0 }))
            var we = d(z)
            ;(q = H(we, 'address')),
                we.forEach(s),
                (R = m(O)),
                (B = c(O, 'INPUT', { id: !0, name: !0, type: !0 })),
                (Y = m(O)),
                (N = c(O, 'LABEL', { for: !0 }))
            var me = d(N)
            ;(W = H(
                me,
                `favorite?
            `
            )),
                (P = c(me, 'INPUT', { type: !0, class: !0 })),
                me.forEach(s),
                (Z = m(O)),
                (M = c(O, 'BUTTON', { type: !0, class: !0 }))
            var Ae = d(M)
            ;(S = H(Ae, 'add contact')),
                Ae.forEach(s),
                O.forEach(s),
                (U = m(E)),
                (A = c(E, 'DIV', { class: !0 }))
            var de = d(A)
            j = c(de, 'H3', {})
            var De = d(j)
            ;(x = H(De, 'All Contacts')),
                De.forEach(s),
                ($ = m(de)),
                (k = c(de, 'TABLE', { class: !0 }))
            var he = d(k)
            _ = c(he, 'THEAD', {})
            var Ie = d(_)
            L = c(Ie, 'TR', {})
            var Q = d(L)
            G = c(Q, 'TH', {})
            var ye = d(G)
            ;(ee = H(ye, 'Favorite')), ye.forEach(s), (te = m(Q)), (F = c(Q, 'TH', {}))
            var Ve = d(F)
            ;(le = H(Ve, 'Name')), Ve.forEach(s), (ae = m(Q)), (J = c(Q, 'TH', {}))
            var Be = d(J)
            ;(se = H(Be, 'Address')), Be.forEach(s), (re = m(Q)), (K = c(Q, 'TH', {}))
            var Ce = d(K)
            ;(oe = H(Ce, 'Delete')),
                Ce.forEach(s),
                Q.forEach(s),
                Ie.forEach(s),
                (ne = m(he)),
                I && I.l(he),
                he.forEach(s),
                de.forEach(s),
                E.forEach(s),
                this.h()
        },
        h() {
            a(i, 'class', 'text-5xl font-bold'),
                a(v, 'for', 'name'),
                a(b, 'id', 'name'),
                a(b, 'name', 'name'),
                a(b, 'type', 'text'),
                a(z, 'for', 'address'),
                a(B, 'id', 'address'),
                a(B, 'name', 'address'),
                a(B, 'type', 'text'),
                a(P, 'type', 'checkbox'),
                a(P, 'class', 'checkbox'),
                a(N, 'for', 'favorite'),
                a(M, 'type', 'submit'),
                a(M, 'class', 'btn btn-primary'),
                a(k, 'class', 'table w-full'),
                a(A, 'class', 'overflow-x-auto'),
                a(l, 'class', 'my-10 mx-20')
        },
        m(T, E) {
            _e(T, l, E),
                e(l, i),
                e(i, t),
                e(l, r),
                e(l, u),
                e(u, o),
                e(l, w),
                D && D.m(l, null),
                e(l, g),
                e(l, f),
                e(f, v),
                e(v, y),
                e(f, V),
                e(f, b),
                fe(b, h[1].name),
                e(f, X),
                e(f, z),
                e(z, q),
                e(f, R),
                e(f, B),
                fe(B, h[1].address),
                e(f, Y),
                e(f, N),
                e(N, W),
                e(N, P),
                (P.checked = h[1].favorite),
                e(f, Z),
                e(f, M),
                e(M, S),
                e(l, U),
                e(l, A),
                e(A, j),
                e(j, x),
                e(A, $),
                e(A, k),
                e(k, _),
                e(_, L),
                e(L, G),
                e(G, ee),
                e(L, te),
                e(L, F),
                e(F, le),
                e(L, ae),
                e(L, J),
                e(J, se),
                e(L, re),
                e(L, K),
                e(K, oe),
                e(k, ne),
                I && I.m(k, null),
                pe ||
                    ((Ee = [
                        ce(b, 'input', h[4]),
                        ce(B, 'input', h[5]),
                        ce(P, 'change', h[6]),
                        ce(f, 'submit', Re(h[3])),
                    ]),
                    (pe = !0))
        },
        p(T, [E]) {
            T[0] ? (D ? D.p(T, E) : ((D = Me(T)), D.c(), D.m(l, g))) : D && (D.d(1), (D = null)),
                E & 2 && b.value !== T[1].name && fe(b, T[1].name),
                E & 2 && B.value !== T[1].address && fe(B, T[1].address),
                E & 2 && (P.checked = T[1].favorite),
                T[2]
                    ? I
                        ? I.p(T, E)
                        : ((I = Ue(T)), I.c(), I.m(k, null))
                    : I && (I.d(1), (I = null))
        },
        i: He,
        o: He,
        d(T) {
            T && s(l), D && D.d(), I && I.d(), (pe = !1), Oe(Ee)
        },
    }
}
function Je(h, l, i) {
    let t, r
    We(h, ie, (v) => i(2, (r = v)))
    let u
    const o = () => {
        try {
            i(0, (u = '')), ie.add(t), i(1, (t = { name: '', address: '', favorite: !1 }))
        } catch (v) {
            i(0, (u = v.body.message))
        }
    }
    function w() {
        ;(t.name = this.value), i(1, t)
    }
    function g() {
        ;(t.address = this.value), i(1, t)
    }
    function f() {
        ;(t.favorite = this.checked), i(1, t)
    }
    return i(1, (t = { name: '', address: '', favorite: !1 })), [u, t, r, o, w, g, f]
}
class Xe extends Se {
    constructor(l) {
        super(), qe(this, l, Je, Ge, Fe, {})
    }
}
export { Xe as default }
