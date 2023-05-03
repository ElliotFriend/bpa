import {
    S as U,
    i as j,
    s as z,
    a as W,
    e as m,
    c as F,
    b as w,
    d as p,
    f as L,
    g as d,
    h as g,
    j as G,
    o as H,
    k as J,
    l as K,
    m as M,
    n as O,
    p as R,
    q as Q,
    r as X,
    u as Y,
    v as P,
    w as D,
    x as b,
    y as k,
    z as I,
    A as E,
    B as v,
} from '../chunks/index.9fb5b323.js'
const Z = 'modulepreload',
    x = function (a, e) {
        return new URL(a, e).href
    },
    V = {},
    h = function (e, n, s) {
        if (!n || n.length === 0) return e()
        const i = document.getElementsByTagName('link')
        return Promise.all(
            n.map((_) => {
                if (((_ = x(_, s)), _ in V)) return
                V[_] = !0
                const t = _.endsWith('.css'),
                    r = t ? '[rel="stylesheet"]' : ''
                if (!!s)
                    for (let l = i.length - 1; l >= 0; l--) {
                        const u = i[l]
                        if (u.href === _ && (!t || u.rel === 'stylesheet')) return
                    }
                else if (document.querySelector(`link[href="${_}"]${r}`)) return
                const o = document.createElement('link')
                if (
                    ((o.rel = t ? 'stylesheet' : Z),
                    t || ((o.as = 'script'), (o.crossOrigin = '')),
                    (o.href = _),
                    document.head.appendChild(o),
                    t)
                )
                    return new Promise((l, u) => {
                        o.addEventListener('load', l),
                            o.addEventListener('error', () =>
                                u(new Error(`Unable to preload CSS for ${_}`))
                            )
                    })
            })
        ).then(() => e())
    },
    le = {}
function ee(a) {
    let e, n, s
    var i = a[1][0]
    function _(t) {
        return { props: { data: t[3], form: t[2] } }
    }
    return (
        i && ((e = b(i, _(a))), a[15](e)),
        {
            c() {
                e && k(e.$$.fragment), (n = m())
            },
            l(t) {
                e && I(e.$$.fragment, t), (n = m())
            },
            m(t, r) {
                e && E(e, t, r), w(t, n, r), (s = !0)
            },
            p(t, r) {
                const f = {}
                if (
                    (r & 8 && (f.data = t[3]),
                    r & 4 && (f.form = t[2]),
                    r & 2 && i !== (i = t[1][0]))
                ) {
                    if (e) {
                        P()
                        const o = e
                        p(o.$$.fragment, 1, 0, () => {
                            v(o, 1)
                        }),
                            L()
                    }
                    i
                        ? ((e = b(i, _(t))),
                          t[15](e),
                          k(e.$$.fragment),
                          d(e.$$.fragment, 1),
                          E(e, n.parentNode, n))
                        : (e = null)
                } else i && e.$set(f)
            },
            i(t) {
                s || (e && d(e.$$.fragment, t), (s = !0))
            },
            o(t) {
                e && p(e.$$.fragment, t), (s = !1)
            },
            d(t) {
                a[15](null), t && g(n), e && v(e, t)
            },
        }
    )
}
function te(a) {
    let e, n, s
    var i = a[1][0]
    function _(t) {
        return { props: { data: t[3], $$slots: { default: [re] }, $$scope: { ctx: t } } }
    }
    return (
        i && ((e = b(i, _(a))), a[14](e)),
        {
            c() {
                e && k(e.$$.fragment), (n = m())
            },
            l(t) {
                e && I(e.$$.fragment, t), (n = m())
            },
            m(t, r) {
                e && E(e, t, r), w(t, n, r), (s = !0)
            },
            p(t, r) {
                const f = {}
                if (
                    (r & 8 && (f.data = t[3]),
                    r & 65591 && (f.$$scope = { dirty: r, ctx: t }),
                    r & 2 && i !== (i = t[1][0]))
                ) {
                    if (e) {
                        P()
                        const o = e
                        p(o.$$.fragment, 1, 0, () => {
                            v(o, 1)
                        }),
                            L()
                    }
                    i
                        ? ((e = b(i, _(t))),
                          t[14](e),
                          k(e.$$.fragment),
                          d(e.$$.fragment, 1),
                          E(e, n.parentNode, n))
                        : (e = null)
                } else i && e.$set(f)
            },
            i(t) {
                s || (e && d(e.$$.fragment, t), (s = !0))
            },
            o(t) {
                e && p(e.$$.fragment, t), (s = !1)
            },
            d(t) {
                a[14](null), t && g(n), e && v(e, t)
            },
        }
    )
}
function ne(a) {
    let e, n, s
    var i = a[1][1]
    function _(t) {
        return { props: { data: t[4], form: t[2] } }
    }
    return (
        i && ((e = b(i, _(a))), a[13](e)),
        {
            c() {
                e && k(e.$$.fragment), (n = m())
            },
            l(t) {
                e && I(e.$$.fragment, t), (n = m())
            },
            m(t, r) {
                e && E(e, t, r), w(t, n, r), (s = !0)
            },
            p(t, r) {
                const f = {}
                if (
                    (r & 16 && (f.data = t[4]),
                    r & 4 && (f.form = t[2]),
                    r & 2 && i !== (i = t[1][1]))
                ) {
                    if (e) {
                        P()
                        const o = e
                        p(o.$$.fragment, 1, 0, () => {
                            v(o, 1)
                        }),
                            L()
                    }
                    i
                        ? ((e = b(i, _(t))),
                          t[13](e),
                          k(e.$$.fragment),
                          d(e.$$.fragment, 1),
                          E(e, n.parentNode, n))
                        : (e = null)
                } else i && e.$set(f)
            },
            i(t) {
                s || (e && d(e.$$.fragment, t), (s = !0))
            },
            o(t) {
                e && p(e.$$.fragment, t), (s = !1)
            },
            d(t) {
                a[13](null), t && g(n), e && v(e, t)
            },
        }
    )
}
function ie(a) {
    let e, n, s
    var i = a[1][1]
    function _(t) {
        return { props: { data: t[4], $$slots: { default: [se] }, $$scope: { ctx: t } } }
    }
    return (
        i && ((e = b(i, _(a))), a[12](e)),
        {
            c() {
                e && k(e.$$.fragment), (n = m())
            },
            l(t) {
                e && I(e.$$.fragment, t), (n = m())
            },
            m(t, r) {
                e && E(e, t, r), w(t, n, r), (s = !0)
            },
            p(t, r) {
                const f = {}
                if (
                    (r & 16 && (f.data = t[4]),
                    r & 65575 && (f.$$scope = { dirty: r, ctx: t }),
                    r & 2 && i !== (i = t[1][1]))
                ) {
                    if (e) {
                        P()
                        const o = e
                        p(o.$$.fragment, 1, 0, () => {
                            v(o, 1)
                        }),
                            L()
                    }
                    i
                        ? ((e = b(i, _(t))),
                          t[12](e),
                          k(e.$$.fragment),
                          d(e.$$.fragment, 1),
                          E(e, n.parentNode, n))
                        : (e = null)
                } else i && e.$set(f)
            },
            i(t) {
                s || (e && d(e.$$.fragment, t), (s = !0))
            },
            o(t) {
                e && p(e.$$.fragment, t), (s = !1)
            },
            d(t) {
                a[12](null), t && g(n), e && v(e, t)
            },
        }
    )
}
function se(a) {
    let e, n, s
    var i = a[1][2]
    function _(t) {
        return { props: { data: t[5], form: t[2] } }
    }
    return (
        i && ((e = b(i, _(a))), a[11](e)),
        {
            c() {
                e && k(e.$$.fragment), (n = m())
            },
            l(t) {
                e && I(e.$$.fragment, t), (n = m())
            },
            m(t, r) {
                e && E(e, t, r), w(t, n, r), (s = !0)
            },
            p(t, r) {
                const f = {}
                if (
                    (r & 32 && (f.data = t[5]),
                    r & 4 && (f.form = t[2]),
                    r & 2 && i !== (i = t[1][2]))
                ) {
                    if (e) {
                        P()
                        const o = e
                        p(o.$$.fragment, 1, 0, () => {
                            v(o, 1)
                        }),
                            L()
                    }
                    i
                        ? ((e = b(i, _(t))),
                          t[11](e),
                          k(e.$$.fragment),
                          d(e.$$.fragment, 1),
                          E(e, n.parentNode, n))
                        : (e = null)
                } else i && e.$set(f)
            },
            i(t) {
                s || (e && d(e.$$.fragment, t), (s = !0))
            },
            o(t) {
                e && p(e.$$.fragment, t), (s = !1)
            },
            d(t) {
                a[11](null), t && g(n), e && v(e, t)
            },
        }
    )
}
function re(a) {
    let e, n, s, i
    const _ = [ie, ne],
        t = []
    function r(f, o) {
        return f[1][2] ? 0 : 1
    }
    return (
        (e = r(a)),
        (n = t[e] = _[e](a)),
        {
            c() {
                n.c(), (s = m())
            },
            l(f) {
                n.l(f), (s = m())
            },
            m(f, o) {
                t[e].m(f, o), w(f, s, o), (i = !0)
            },
            p(f, o) {
                let l = e
                ;(e = r(f)),
                    e === l
                        ? t[e].p(f, o)
                        : (P(),
                          p(t[l], 1, 1, () => {
                              t[l] = null
                          }),
                          L(),
                          (n = t[e]),
                          n ? n.p(f, o) : ((n = t[e] = _[e](f)), n.c()),
                          d(n, 1),
                          n.m(s.parentNode, s))
            },
            i(f) {
                i || (d(n), (i = !0))
            },
            o(f) {
                p(n), (i = !1)
            },
            d(f) {
                t[e].d(f), f && g(s)
            },
        }
    )
}
function N(a) {
    let e,
        n = a[7] && $(a)
    return {
        c() {
            ;(e = J('div')), n && n.c(), this.h()
        },
        l(s) {
            e = K(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 })
            var i = M(e)
            n && n.l(i), i.forEach(g), this.h()
        },
        h() {
            O(e, 'id', 'svelte-announcer'),
                O(e, 'aria-live', 'assertive'),
                O(e, 'aria-atomic', 'true'),
                R(e, 'position', 'absolute'),
                R(e, 'left', '0'),
                R(e, 'top', '0'),
                R(e, 'clip', 'rect(0 0 0 0)'),
                R(e, 'clip-path', 'inset(50%)'),
                R(e, 'overflow', 'hidden'),
                R(e, 'white-space', 'nowrap'),
                R(e, 'width', '1px'),
                R(e, 'height', '1px')
        },
        m(s, i) {
            w(s, e, i), n && n.m(e, null)
        },
        p(s, i) {
            s[7] ? (n ? n.p(s, i) : ((n = $(s)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null))
        },
        d(s) {
            s && g(e), n && n.d()
        },
    }
}
function $(a) {
    let e
    return {
        c() {
            e = Q(a[8])
        },
        l(n) {
            e = X(n, a[8])
        },
        m(n, s) {
            w(n, e, s)
        },
        p(n, s) {
            s & 256 && Y(e, n[8])
        },
        d(n) {
            n && g(e)
        },
    }
}
function oe(a) {
    let e, n, s, i, _
    const t = [te, ee],
        r = []
    function f(l, u) {
        return l[1][1] ? 0 : 1
    }
    ;(e = f(a)), (n = r[e] = t[e](a))
    let o = a[6] && N(a)
    return {
        c() {
            n.c(), (s = W()), o && o.c(), (i = m())
        },
        l(l) {
            n.l(l), (s = F(l)), o && o.l(l), (i = m())
        },
        m(l, u) {
            r[e].m(l, u), w(l, s, u), o && o.m(l, u), w(l, i, u), (_ = !0)
        },
        p(l, [u]) {
            let A = e
            ;(e = f(l)),
                e === A
                    ? r[e].p(l, u)
                    : (P(),
                      p(r[A], 1, 1, () => {
                          r[A] = null
                      }),
                      L(),
                      (n = r[e]),
                      n ? n.p(l, u) : ((n = r[e] = t[e](l)), n.c()),
                      d(n, 1),
                      n.m(s.parentNode, s)),
                l[6]
                    ? o
                        ? o.p(l, u)
                        : ((o = N(l)), o.c(), o.m(i.parentNode, i))
                    : o && (o.d(1), (o = null))
        },
        i(l) {
            _ || (d(n), (_ = !0))
        },
        o(l) {
            p(n), (_ = !1)
        },
        d(l) {
            r[e].d(l), l && g(s), o && o.d(l), l && g(i)
        },
    }
}
function ae(a, e, n) {
    let { stores: s } = e,
        { page: i } = e,
        { constructors: _ } = e,
        { components: t = [] } = e,
        { form: r } = e,
        { data_0: f = null } = e,
        { data_1: o = null } = e,
        { data_2: l = null } = e
    G(s.page.notify)
    let u = !1,
        A = !1,
        T = null
    H(() => {
        const c = s.page.subscribe(() => {
            u && (n(7, (A = !0)), n(8, (T = document.title || 'untitled page')))
        })
        return n(6, (u = !0)), c
    })
    function S(c) {
        D[c ? 'unshift' : 'push'](() => {
            ;(t[2] = c), n(0, t)
        })
    }
    function y(c) {
        D[c ? 'unshift' : 'push'](() => {
            ;(t[1] = c), n(0, t)
        })
    }
    function B(c) {
        D[c ? 'unshift' : 'push'](() => {
            ;(t[1] = c), n(0, t)
        })
    }
    function C(c) {
        D[c ? 'unshift' : 'push'](() => {
            ;(t[0] = c), n(0, t)
        })
    }
    function q(c) {
        D[c ? 'unshift' : 'push'](() => {
            ;(t[0] = c), n(0, t)
        })
    }
    return (
        (a.$$set = (c) => {
            'stores' in c && n(9, (s = c.stores)),
                'page' in c && n(10, (i = c.page)),
                'constructors' in c && n(1, (_ = c.constructors)),
                'components' in c && n(0, (t = c.components)),
                'form' in c && n(2, (r = c.form)),
                'data_0' in c && n(3, (f = c.data_0)),
                'data_1' in c && n(4, (o = c.data_1)),
                'data_2' in c && n(5, (l = c.data_2))
        }),
        (a.$$.update = () => {
            a.$$.dirty & 1536 && s.page.set(i)
        }),
        [t, _, r, f, o, l, u, A, T, s, i, S, y, B, C, q]
    )
}
class _e extends U {
    constructor(e) {
        super(),
            j(this, e, ae, oe, z, {
                stores: 9,
                page: 10,
                constructors: 1,
                components: 0,
                form: 2,
                data_0: 3,
                data_1: 4,
                data_2: 5,
            })
    }
}
const ce = [
        () =>
            h(
                () => import('../chunks/0.9d923f15.js'),
                [
                    '../chunks/0.9d923f15.js',
                    './_layout.svelte.11f46e3b.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/index.300902f1.js',
                    '../assets/_layout.29617306.css',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/1.70cd850c.js'),
                [
                    '../chunks/1.70cd850c.js',
                    './_error.svelte.ea112160.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/singletons.b7ad8e8e.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/paths.9549ada4.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/2.36d9550d.js'),
                [
                    '../chunks/2.36d9550d.js',
                    '../chunks/_layout.61b7921f.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/index.9fb5b323.js',
                    './dashboard-layout.svelte.0cf4b49d.js',
                    '../chunks/modalStore.9b01ff0f.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/3.df33497b.js'),
                [
                    '../chunks/3.df33497b.js',
                    './_page.svelte.4b67fb7d.js',
                    '../chunks/index.9fb5b323.js',
                    '../assets/_page.ec998c97.css',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/4.06556f2d.js'),
                [
                    '../chunks/4.06556f2d.js',
                    './about-page.svelte.ad2deda9.js',
                    '../chunks/index.9fb5b323.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/5.03ca5b21.js'),
                [
                    '../chunks/5.03ca5b21.js',
                    './dashboard-page.svelte.d82ec462.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/horizonQueries.43912467.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                    '../chunks/contactsStore.8a7a0bb4.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/6.77343550.js'),
                [
                    '../chunks/6.77343550.js',
                    '../chunks/_page.b92d5427.js',
                    '../chunks/horizonQueries.43912467.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                    '../chunks/paths.9549ada4.js',
                    './dashboard-assets-page.svelte.eb4558bb.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/forms.04a59a3c.js',
                    '../chunks/parse.d12b0d5b.js',
                    '../chunks/singletons.b7ad8e8e.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/navigation.41aba242.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/7.5f303d81.js'),
                [
                    '../chunks/7.5f303d81.js',
                    './dashboard-contacts-page.svelte.594c6801.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/contactsStore.8a7a0bb4.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/8.87aadbd0.js'),
                [
                    '../chunks/8.87aadbd0.js',
                    './dashboard-dev-page.svelte.46d072a3.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/contactsStore.8a7a0bb4.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/horizonQueries.43912467.js',
                    '../chunks/modalStore.9b01ff0f.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/9.09870564.js'),
                [
                    '../chunks/9.09870564.js',
                    './dashboard-send-page.svelte.e7a6d157.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/forms.04a59a3c.js',
                    '../chunks/parse.d12b0d5b.js',
                    '../chunks/singletons.b7ad8e8e.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/paths.9549ada4.js',
                    '../chunks/navigation.41aba242.js',
                    '../chunks/contactsStore.8a7a0bb4.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/walletStore.f68d24fc.js',
                    '../chunks/horizonQueries.43912467.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/10.5d4025e5.js'),
                [
                    '../chunks/10.5d4025e5.js',
                    '../chunks/_page.e92e948e.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/index.9fb5b323.js',
                    '../chunks/walletStore.f68d24fc.js',
                    '../chunks/paths.9549ada4.js',
                    './login-page.svelte.30f825b5.js',
                    '../chunks/navigation.41aba242.js',
                    '../chunks/singletons.b7ad8e8e.js',
                ],
                import.meta.url
            ),
        () =>
            h(
                () => import('../chunks/11.97a42b8c.js'),
                [
                    '../chunks/11.97a42b8c.js',
                    '../chunks/_page.ee401e92.js',
                    '../chunks/index.7121c868.js',
                    '../chunks/control.e7f5239e.js',
                    '../chunks/localStore.50081e00.js',
                    '../chunks/index.300902f1.js',
                    '../chunks/index.9fb5b323.js',
                    './signup-page.svelte.cd6d4249.js',
                    '../chunks/walletStore.f68d24fc.js',
                    '../chunks/paths.9549ada4.js',
                    '../chunks/generateKeypair.c6b5dfc9.js',
                ],
                import.meta.url
            ),
    ],
    ue = [],
    me = {
        '/': [3],
        '/about': [-5],
        '/dashboard': [5, [2]],
        '/dashboard/assets': [6, [2]],
        '/dashboard/contacts': [7, [2]],
        '/dashboard/dev': [8, [2]],
        '/dashboard/send': [9, [2]],
        '/login': [10],
        '/signup': [11],
    },
    pe = {
        handleError: ({ error: a }) => {
            console.error(a)
        },
    }
export {
    me as dictionary,
    pe as hooks,
    le as matchers,
    ce as nodes,
    _e as root,
    ue as server_loads,
}
