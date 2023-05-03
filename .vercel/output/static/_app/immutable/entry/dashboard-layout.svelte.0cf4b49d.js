import {
    S as z,
    i as J,
    s as X,
    k as i,
    q as x,
    a as L,
    l as c,
    m as d,
    r as D,
    h as r,
    c as V,
    n as f,
    b as H,
    H as t,
    I as N,
    K as de,
    u as ae,
    J as fe,
    C as ue,
    y as Q,
    z as Y,
    A as Z,
    D as he,
    E as ve,
    F as _e,
    g as W,
    d as j,
    B as ee,
} from '../chunks/index.9fb5b323.js'
import { m as me } from '../chunks/modalStore.9b01ff0f.js'
function pe(m) {
    let e, a, s, l
    return {
        c() {
            ;(e = i('div')), (a = i('div')), (s = i('span')), (l = x('G')), this.h()
        },
        l(n) {
            e = c(n, 'DIV', { class: !0 })
            var h = d(e)
            a = c(h, 'DIV', { class: !0 })
            var u = d(a)
            s = c(u, 'SPAN', { class: !0 })
            var b = d(s)
            ;(l = D(b, 'G')), b.forEach(r), u.forEach(r), h.forEach(r), this.h()
        },
        h() {
            f(s, 'class', 'text-l'),
                f(a, 'class', 'bg-neutral-focus text-neutral-content rounded-full w-10'),
                f(e, 'class', 'avatar placeholder')
        },
        m(n, h) {
            H(n, e, h), t(e, a), t(a, s), t(s, l)
        },
        p: N,
        d(n) {
            n && r(e)
        },
    }
}
function be(m) {
    let e, a, s
    return {
        c() {
            ;(e = i('div')), (a = i('img')), this.h()
        },
        l(l) {
            e = c(l, 'DIV', { class: !0 })
            var n = d(e)
            ;(a = c(n, 'IMG', { src: !0, alt: !0 })), n.forEach(r), this.h()
        },
        h() {
            de(a.src, (s = 'https://id.lobstr.co/' + m[0] + '.png')) || f(a, 'src', s),
                f(a, 'alt', 'stellar-account-identicon'),
                f(e, 'class', 'w-10 rounded-full')
        },
        m(l, n) {
            H(l, e, n), t(e, a)
        },
        p(l, n) {
            n & 1 && !de(a.src, (s = 'https://id.lobstr.co/' + l[0] + '.png')) && f(a, 'src', s)
        },
        d(l) {
            l && r(e)
        },
    }
}
function Ee(m) {
    let e, a, s, l, n, h, u, b, I, p, $, y, A, v, o, E, _, g, P, k, S, w, T
    function q(C, K) {
        return C[0] ? be : pe
    }
    let B = q(m),
        M = B(m)
    return {
        c() {
            ;(e = i('header')),
                (a = i('div')),
                (s = i('a')),
                (l = x('BasicPay')),
                (n = L()),
                (h = i('div')),
                (u = i('div')),
                (b = i('button')),
                M.c(),
                (I = L()),
                (p = i('ul')),
                ($ = i('li')),
                (y = i('a')),
                (A = x(`Profile
                        `)),
                (v = i('span')),
                (o = x('New')),
                (E = L()),
                (_ = i('li')),
                (g = i('a')),
                (P = x('Settings')),
                (k = L()),
                (S = i('li')),
                (w = i('a')),
                (T = x('Logout')),
                this.h()
        },
        l(C) {
            e = c(C, 'HEADER', { class: !0 })
            var K = d(e)
            a = c(K, 'DIV', { class: !0 })
            var F = d(a)
            s = c(F, 'A', { href: !0, class: !0 })
            var O = d(s)
            ;(l = D(O, 'BasicPay')),
                O.forEach(r),
                F.forEach(r),
                (n = V(K)),
                (h = c(K, 'DIV', { class: !0 }))
            var R = d(h)
            u = c(R, 'DIV', { class: !0 })
            var G = d(u)
            b = c(G, 'BUTTON', { tabindex: !0, class: !0 })
            var se = d(b)
            M.l(se), se.forEach(r), (I = V(G)), (p = c(G, 'UL', { class: !0 }))
            var U = d(p)
            $ = c(U, 'LI', {})
            var le = d($)
            y = c(le, 'A', { href: !0, class: !0 })
            var te = d(y)
            ;(A = D(
                te,
                `Profile
                        `
            )),
                (v = c(te, 'SPAN', { class: !0 }))
            var re = d(v)
            ;(o = D(re, 'New')),
                re.forEach(r),
                te.forEach(r),
                le.forEach(r),
                (E = V(U)),
                (_ = c(U, 'LI', {}))
            var oe = d(_)
            g = c(oe, 'A', { href: !0 })
            var ne = d(g)
            ;(P = D(ne, 'Settings')), ne.forEach(r), oe.forEach(r), (k = V(U)), (S = c(U, 'LI', {}))
            var ie = d(S)
            w = c(ie, 'A', { href: !0 })
            var ce = d(w)
            ;(T = D(ce, 'Logout')),
                ce.forEach(r),
                ie.forEach(r),
                U.forEach(r),
                G.forEach(r),
                R.forEach(r),
                K.forEach(r),
                this.h()
        },
        h() {
            f(s, 'href', '/dashboard'),
                f(s, 'class', 'btn btn-ghost normal-case text-xl'),
                f(a, 'class', 'flex-1'),
                f(b, 'tabindex', '0'),
                f(b, 'class', 'btn btn-ghost btn-circle avatar'),
                f(v, 'class', 'badge'),
                f(y, 'href', '#'),
                f(y, 'class', 'justify-between'),
                f(g, 'href', '#'),
                f(w, 'href', '#'),
                f(
                    p,
                    'class',
                    'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                ),
                f(u, 'class', 'dropdown dropdown-end'),
                f(h, 'class', 'flex-none'),
                f(e, 'class', 'navbar bg-base-300')
        },
        m(C, K) {
            H(C, e, K),
                t(e, a),
                t(a, s),
                t(s, l),
                t(e, n),
                t(e, h),
                t(h, u),
                t(u, b),
                M.m(b, null),
                t(u, I),
                t(u, p),
                t(p, $),
                t($, y),
                t(y, A),
                t(y, v),
                t(v, o),
                t(p, E),
                t(p, _),
                t(_, g),
                t(g, P),
                t(p, k),
                t(p, S),
                t(S, w),
                t(w, T)
        },
        p(C, [K]) {
            B === (B = q(C)) && M ? M.p(C, K) : (M.d(1), (M = B(C)), M && (M.c(), M.m(b, null)))
        },
        i: N,
        o: N,
        d(C) {
            C && r(e), M.d()
        },
    }
}
function ge(m, e, a) {
    let { bpaPublicKey: s } = e
    return (
        (m.$$set = (l) => {
            'bpaPublicKey' in l && a(0, (s = l.bpaPublicKey))
        }),
        [s]
    )
}
class $e extends z {
    constructor(e) {
        super(), J(this, e, ge, Ee, X, { bpaPublicKey: 0 })
    }
}
function ye(m) {
    let e, a, s, l, n, h, u, b, I, p, $, y, A, v, o, E, _, g, P, k
    return {
        c() {
            ;(e = i('ul')),
                (a = i('li')),
                (s = i('a')),
                (l = x('Send Payments')),
                (n = L()),
                (h = i('li')),
                (u = i('a')),
                (b = x('Manage Assets')),
                (I = L()),
                (p = i('li')),
                ($ = i('a')),
                (y = x('Manage Contacts')),
                (A = L()),
                (v = i('li')),
                (o = i('a')),
                (E = x('Deposits and Withdrawals')),
                (_ = L()),
                (g = i('li')),
                (P = i('a')),
                (k = x('Dev Helpers')),
                this.h()
        },
        l(S) {
            e = c(S, 'UL', { class: !0 })
            var w = d(e)
            a = c(w, 'LI', {})
            var T = d(a)
            s = c(T, 'A', { href: !0 })
            var q = d(s)
            ;(l = D(q, 'Send Payments')),
                q.forEach(r),
                T.forEach(r),
                (n = V(w)),
                (h = c(w, 'LI', {}))
            var B = d(h)
            u = c(B, 'A', { href: !0 })
            var M = d(u)
            ;(b = D(M, 'Manage Assets')),
                M.forEach(r),
                B.forEach(r),
                (I = V(w)),
                (p = c(w, 'LI', {}))
            var C = d(p)
            $ = c(C, 'A', { href: !0 })
            var K = d($)
            ;(y = D(K, 'Manage Contacts')),
                K.forEach(r),
                C.forEach(r),
                (A = V(w)),
                (v = c(w, 'LI', {}))
            var F = d(v)
            o = c(F, 'A', { href: !0 })
            var O = d(o)
            ;(E = D(O, 'Deposits and Withdrawals')),
                O.forEach(r),
                F.forEach(r),
                (_ = V(w)),
                (g = c(w, 'LI', {}))
            var R = d(g)
            P = c(R, 'A', { href: !0 })
            var G = d(P)
            ;(k = D(G, 'Dev Helpers')), G.forEach(r), R.forEach(r), w.forEach(r), this.h()
        },
        h() {
            f(s, 'href', '/dashboard/send'),
                f(u, 'href', '/dashboard/assets'),
                f($, 'href', '/dashboard/contacts'),
                f(o, 'href', '#'),
                f(P, 'href', '/dashboard/dev'),
                f(e, 'class', 'menu p-4 w-80 bg-base-200 text-base-content')
        },
        m(S, w) {
            H(S, e, w),
                t(e, a),
                t(a, s),
                t(s, l),
                t(e, n),
                t(e, h),
                t(h, u),
                t(u, b),
                t(e, I),
                t(e, p),
                t(p, $),
                t($, y),
                t(e, A),
                t(e, v),
                t(v, o),
                t(o, E),
                t(e, _),
                t(e, g),
                t(g, P),
                t(P, k)
        },
        p: N,
        i: N,
        o: N,
        d(S) {
            S && r(e)
        },
    }
}
class Ie extends z {
    constructor(e) {
        super(), J(this, e, null, ye, X, {})
    }
}
function we(m) {
    let e, a, s, l
    return {
        c() {
            ;(e = i('footer')),
                (a = i('div')),
                (s = i('p')),
                (l = x('Copyright © 2023 - All right reserved by ACME Industries Ltd')),
                this.h()
        },
        l(n) {
            e = c(n, 'FOOTER', { class: !0 })
            var h = d(e)
            a = c(h, 'DIV', {})
            var u = d(a)
            s = c(u, 'P', {})
            var b = d(s)
            ;(l = D(b, 'Copyright © 2023 - All right reserved by ACME Industries Ltd')),
                b.forEach(r),
                u.forEach(r),
                h.forEach(r),
                this.h()
        },
        h() {
            f(e, 'class', 'footer footer-center p-4 bg-base-300 text-base-content')
        },
        m(n, h) {
            H(n, e, h), t(e, a), t(a, s), t(s, l)
        },
        p: N,
        i: N,
        o: N,
        d(n) {
            n && r(e)
        },
    }
}
class Ae extends z {
    constructor(e) {
        super(), J(this, e, null, we, X, {})
    }
}
function Pe(m) {
    let e,
        a,
        s,
        l,
        n,
        h = m[0].title + '',
        u,
        b,
        I,
        p = m[0].body + '',
        $,
        y,
        A,
        v,
        o = m[0].button + '',
        E
    return {
        c() {
            ;(e = i('input')),
                (a = L()),
                (s = i('div')),
                (l = i('div')),
                (n = i('h3')),
                (u = x(h)),
                (b = L()),
                (I = i('p')),
                ($ = x(p)),
                (y = L()),
                (A = i('div')),
                (v = i('label')),
                (E = x(o)),
                this.h()
        },
        l(_) {
            ;(e = c(_, 'INPUT', { type: !0, id: !0, class: !0 })),
                (a = V(_)),
                (s = c(_, 'DIV', { class: !0 }))
            var g = d(s)
            l = c(g, 'DIV', { class: !0 })
            var P = d(l)
            n = c(P, 'H3', { class: !0 })
            var k = d(n)
            ;(u = D(k, h)), k.forEach(r), (b = V(P)), (I = c(P, 'P', { class: !0 }))
            var S = d(I)
            ;($ = D(S, p)), S.forEach(r), (y = V(P)), (A = c(P, 'DIV', { class: !0 }))
            var w = d(A)
            v = c(w, 'LABEL', { for: !0, class: !0 })
            var T = d(v)
            ;(E = D(T, o)), T.forEach(r), w.forEach(r), P.forEach(r), g.forEach(r), this.h()
        },
        h() {
            f(e, 'type', 'checkbox'),
                f(e, 'id', 'my-modal'),
                f(e, 'class', 'modal-toggle'),
                f(n, 'class', 'font-bold text-lg'),
                f(I, 'class', 'py-4'),
                f(v, 'for', 'my-modal'),
                f(v, 'class', 'btn'),
                f(A, 'class', 'modal-action'),
                f(l, 'class', 'modal-box'),
                f(s, 'class', 'modal')
        },
        m(_, g) {
            H(_, e, g),
                H(_, a, g),
                H(_, s, g),
                t(s, l),
                t(l, n),
                t(n, u),
                t(l, b),
                t(l, I),
                t(I, $),
                t(l, y),
                t(l, A),
                t(A, v),
                t(v, E)
        },
        p(_, [g]) {
            g & 1 && h !== (h = _[0].title + '') && ae(u, h),
                g & 1 && p !== (p = _[0].body + '') && ae($, p),
                g & 1 && o !== (o = _[0].button + '') && ae(E, o)
        },
        i: N,
        o: N,
        d(_) {
            _ && r(e), _ && r(a), _ && r(s)
        },
    }
}
function xe(m, e, a) {
    let s
    return (
        fe(m, me, (l) => a(0, (s = l))),
        console.log('Hi, there! Greetings from TXPreviewModal.svelte'),
        [s]
    )
}
class De extends z {
    constructor(e) {
        super(), J(this, e, xe, Pe, X, {})
    }
}
function Le(m) {
    let e, a, s, l, n, h, u, b, I, p, $, y
    ;(a = new $e({ props: { bpaPublicKey: m[0] } })), (n = new Ie({}))
    const A = m[3].default,
        v = ue(A, m, m[2], null)
    return (
        (I = new Ae({})),
        ($ = new De({})),
        {
            c() {
                ;(e = i('div')),
                    Q(a.$$.fragment),
                    (s = L()),
                    (l = i('div')),
                    Q(n.$$.fragment),
                    (h = L()),
                    (u = i('main')),
                    v && v.c(),
                    (b = L()),
                    Q(I.$$.fragment),
                    (p = L()),
                    Q($.$$.fragment),
                    this.h()
            },
            l(o) {
                e = c(o, 'DIV', { class: !0 })
                var E = d(e)
                Y(a.$$.fragment, E), (s = V(E)), (l = c(E, 'DIV', { class: !0 }))
                var _ = d(l)
                Y(n.$$.fragment, _), (h = V(_)), (u = c(_, 'MAIN', { class: !0 }))
                var g = d(u)
                v && v.l(g),
                    g.forEach(r),
                    _.forEach(r),
                    (b = V(E)),
                    Y(I.$$.fragment, E),
                    E.forEach(r),
                    (p = V(o)),
                    Y($.$$.fragment, o),
                    this.h()
            },
            h() {
                f(u, 'class', 'flex-1 overflow-y-auto'),
                    f(l, 'class', 'flex flex-row'),
                    f(e, 'class', 'flex flex-col')
            },
            m(o, E) {
                H(o, e, E),
                    Z(a, e, null),
                    t(e, s),
                    t(e, l),
                    Z(n, l, null),
                    t(l, h),
                    t(l, u),
                    v && v.m(u, null),
                    t(e, b),
                    Z(I, e, null),
                    H(o, p, E),
                    Z($, o, E),
                    (y = !0)
            },
            p(o, [E]) {
                v &&
                    v.p &&
                    (!y || E & 4) &&
                    he(v, A, o, o[2], y ? _e(A, o[2], E, null) : ve(o[2]), null)
            },
            i(o) {
                y ||
                    (W(a.$$.fragment, o),
                    W(n.$$.fragment, o),
                    W(v, o),
                    W(I.$$.fragment, o),
                    W($.$$.fragment, o),
                    (y = !0))
            },
            o(o) {
                j(a.$$.fragment, o),
                    j(n.$$.fragment, o),
                    j(v, o),
                    j(I.$$.fragment, o),
                    j($.$$.fragment, o),
                    (y = !1)
            },
            d(o) {
                o && r(e), ee(a), ee(n), v && v.d(o), ee(I), o && r(p), ee($, o)
            },
        }
    )
}
function Ve(m, e, a) {
    let { $$slots: s = {}, $$scope: l } = e,
        { data: n } = e,
        h = n.bpaPublicKey
    return (
        (m.$$set = (u) => {
            'data' in u && a(1, (n = u.data)), '$$scope' in u && a(2, (l = u.$$scope))
        }),
        [h, n, l, s]
    )
}
class Ce extends z {
    constructor(e) {
        super(), J(this, e, Ve, Le, X, { data: 1 })
    }
}
export { Ce as default }
