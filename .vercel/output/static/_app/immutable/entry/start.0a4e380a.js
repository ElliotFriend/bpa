import { o as Ce, t as we } from '../chunks/index.9fb5b323.js'
import {
    S as ze,
    a as Je,
    I as q,
    g as Ne,
    f as qe,
    b as ye,
    c as le,
    s as H,
    i as _e,
    d as Z,
    P as Fe,
    e as We,
} from '../chunks/singletons.b7ad8e8e.js'
import { b as J } from '../chunks/paths.9549ada4.js'
import { R as He, H as ee } from '../chunks/control.e7f5239e.js'
import { u as Ye } from '../chunks/parse.d12b0d5b.js'
function Xe(a, s) {
    return a === '/' || s === 'ignore'
        ? a
        : s === 'never'
        ? a.endsWith('/')
            ? a.slice(0, -1)
            : a
        : s === 'always' && !a.endsWith('/')
        ? a + '/'
        : a
}
function Qe(a) {
    return a.split('%25').map(decodeURI).join('%25')
}
function Ze(a) {
    for (const s in a) a[s] = decodeURIComponent(a[s])
    return a
}
const et = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON']
function tt(a, s) {
    const l = new URL(a)
    for (const c of et) {
        let p = l[c]
        Object.defineProperty(l, c, {
            get() {
                return s(), p
            },
            enumerable: !0,
            configurable: !0,
        })
    }
    return nt(l), l
}
function nt(a) {
    Object.defineProperty(a, 'hash', {
        get() {
            throw new Error(
                'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
            )
        },
    })
}
const at = '/__data.json'
function rt(a) {
    return a.replace(/\/$/, '') + at
}
function Ve(a) {
    try {
        return JSON.parse(sessionStorage[a])
    } catch {}
}
function Ke(a, s) {
    const l = JSON.stringify(s)
    try {
        sessionStorage[a] = l
    } catch {}
}
function ot(...a) {
    let s = 5381
    for (const l of a)
        if (typeof l == 'string') {
            let c = l.length
            for (; c; ) s = (s * 33) ^ l.charCodeAt(--c)
        } else if (ArrayBuffer.isView(l)) {
            const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)
            let p = c.length
            for (; p; ) s = (s * 33) ^ c[--p]
        } else throw new TypeError('value must be a string or TypedArray')
    return (s >>> 0).toString(36)
}
const fe = window.fetch
window.fetch = (a, s) => (
    (a instanceof Request ? a.method : (s == null ? void 0 : s.method) || 'GET') !== 'GET' &&
        te.delete(Se(a)),
    fe(a, s)
)
const te = new Map()
function it(a, s) {
    const l = Se(a, s),
        c = document.querySelector(l)
    if (c != null && c.textContent) {
        const { body: p, ...E } = JSON.parse(c.textContent),
            x = c.getAttribute('data-ttl')
        return (
            x && te.set(l, { body: p, init: E, ttl: 1e3 * Number(x) }),
            Promise.resolve(new Response(p, E))
        )
    }
    return fe(a, s)
}
function st(a, s, l) {
    if (te.size > 0) {
        const c = Se(a, l),
            p = te.get(c)
        if (p) {
            if (
                performance.now() < p.ttl &&
                ['default', 'force-cache', 'only-if-cached', void 0].includes(
                    l == null ? void 0 : l.cache
                )
            )
                return new Response(p.body, p.init)
            te.delete(c)
        }
    }
    return fe(s, l)
}
function Se(a, s) {
    let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
        a instanceof Request ? a.url : a
    )}]`
    if ((s != null && s.headers) || (s != null && s.body)) {
        const p = []
        s.headers && p.push([...new Headers(s.headers)].join(',')),
            s.body && (typeof s.body == 'string' || ArrayBuffer.isView(s.body)) && p.push(s.body),
            (c += `[data-hash="${ot(...p)}"]`)
    }
    return c
}
const ct = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/
function lt(a) {
    const s = []
    return {
        pattern:
            a === '/'
                ? /^\/$/
                : new RegExp(
                      `^${ut(a)
                          .map((c) => {
                              const p = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c)
                              if (p)
                                  return (
                                      s.push({
                                          name: p[1],
                                          matcher: p[2],
                                          optional: !1,
                                          rest: !0,
                                          chained: !0,
                                      }),
                                      '(?:/(.*))?'
                                  )
                              const E = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c)
                              if (E)
                                  return (
                                      s.push({
                                          name: E[1],
                                          matcher: E[2],
                                          optional: !0,
                                          rest: !1,
                                          chained: !0,
                                      }),
                                      '(?:/([^/]+))?'
                                  )
                              if (!c) return
                              const x = c.split(/\[(.+?)\](?!\])/)
                              return (
                                  '/' +
                                  x
                                      .map((v, b) => {
                                          if (b % 2) {
                                              if (v.startsWith('x+'))
                                                  return ve(
                                                      String.fromCharCode(parseInt(v.slice(2), 16))
                                                  )
                                              if (v.startsWith('u+'))
                                                  return ve(
                                                      String.fromCharCode(
                                                          ...v
                                                              .slice(2)
                                                              .split('-')
                                                              .map((U) => parseInt(U, 16))
                                                      )
                                                  )
                                              const m = ct.exec(v)
                                              if (!m)
                                                  throw new Error(
                                                      `Invalid param: ${v}. Params and matcher names can only have underscores and alphanumeric characters.`
                                                  )
                                              const [, N, T, I, A] = m
                                              return (
                                                  s.push({
                                                      name: I,
                                                      matcher: A,
                                                      optional: !!N,
                                                      rest: !!T,
                                                      chained: T ? b === 1 && x[0] === '' : !1,
                                                  }),
                                                  T ? '(.*?)' : N ? '([^/]*)?' : '([^/]+?)'
                                              )
                                          }
                                          return ve(v)
                                      })
                                      .join('')
                              )
                          })
                          .join('')}/?$`
                  ),
        params: s,
    }
}
function ft(a) {
    return !/^\([^)]+\)$/.test(a)
}
function ut(a) {
    return a.slice(1).split('/').filter(ft)
}
function dt(a, s, l) {
    const c = {},
        p = a.slice(1)
    let E = 0
    for (let x = 0; x < s.length; x += 1) {
        const _ = s[x],
            v = p[x - E]
        if (_.chained && _.rest && E) {
            ;(c[_.name] = p
                .slice(x - E, x + 1)
                .filter((b) => b)
                .join('/')),
                (E = 0)
            continue
        }
        if (v === void 0) {
            _.rest && (c[_.name] = '')
            continue
        }
        if (!_.matcher || l[_.matcher](v)) {
            c[_.name] = v
            const b = s[x + 1],
                m = p[x + 1]
            b && !b.rest && b.optional && m && (E = 0)
            continue
        }
        if (_.optional && _.chained) {
            E++
            continue
        }
        return
    }
    if (!E) return c
}
function ve(a) {
    return a
        .normalize()
        .replace(/[[\]]/g, '\\$&')
        .replace(/%/g, '%25')
        .replace(/\//g, '%2[Ff]')
        .replace(/\?/g, '%3[Ff]')
        .replace(/#/g, '%23')
        .replace(/[.*+?^${}()|\\]/g, '\\$&')
}
function pt({ nodes: a, server_loads: s, dictionary: l, matchers: c }) {
    const p = new Set(s)
    return Object.entries(l).map(([_, [v, b, m]]) => {
        const { pattern: N, params: T } = lt(_),
            I = {
                id: _,
                exec: (A) => {
                    const U = N.exec(A)
                    if (U) return dt(U, T, c)
                },
                errors: [1, ...(m || [])].map((A) => a[A]),
                layouts: [0, ...(b || [])].map(x),
                leaf: E(v),
            }
        return (I.errors.length = I.layouts.length = Math.max(I.errors.length, I.layouts.length)), I
    })
    function E(_) {
        const v = _ < 0
        return v && (_ = ~_), [v, a[_]]
    }
    function x(_) {
        return _ === void 0 ? _ : [p.has(_), a[_]]
    }
}
async function ht(a) {
    var s
    for (const l in a)
        if (typeof ((s = a[l]) == null ? void 0 : s.then) == 'function')
            return Object.fromEntries(
                await Promise.all(Object.entries(a).map(async ([c, p]) => [c, await p]))
            )
    return a
}
function mt(a) {
    return a.filter((s) => s != null)
}
const V = Ve(ze) ?? {},
    Q = Ve(Je) ?? {}
function be(a) {
    V[a] = Z()
}
function gt(a, s) {
    var je
    const l = pt(a),
        c = a.nodes[0],
        p = a.nodes[1]
    c(), p()
    const E = document.documentElement,
        x = [],
        _ = []
    let v = null
    const b = { before_navigate: [], after_navigate: [] }
    let m = { branch: [], error: null, url: null },
        N = !1,
        T = !1,
        I = !0,
        A = !1,
        U = !1,
        G = !1,
        K = !1,
        F,
        $ = (je = history.state) == null ? void 0 : je[q]
    $ || (($ = Date.now()), history.replaceState({ ...history.state, [q]: $ }, '', location.href))
    const ue = V[$]
    ue && ((history.scrollRestoration = 'manual'), scrollTo(ue.x, ue.y))
    let M, ne, ae
    async function ke() {
        ;(ae = ae || Promise.resolve()), await ae, (ae = null)
        const e = new URL(location.href),
            t = Y(e, !0)
        v = null
        const r = (ne = {}),
            n = t && (await he(t))
        if (r === ne && n) {
            if (n.type === 'redirect') return re(new URL(n.location, e).href, {}, [e.pathname], r)
            F.$set(n.props)
        }
    }
    function xe(e) {
        _.some((t) => (t == null ? void 0 : t.snapshot)) &&
            (Q[e] = _.map((t) => {
                var r
                return (r = t == null ? void 0 : t.snapshot) == null ? void 0 : r.capture()
            }))
    }
    function Re(e) {
        var t
        ;(t = Q[e]) == null ||
            t.forEach((r, n) => {
                var i, o
                ;(o = (i = _[n]) == null ? void 0 : i.snapshot) == null || o.restore(r)
            })
    }
    function Le() {
        be($), Ke(ze, V), xe($), Ke(Je, Q)
    }
    async function re(
        e,
        {
            noScroll: t = !1,
            replaceState: r = !1,
            keepFocus: n = !1,
            state: i = {},
            invalidateAll: o = !1,
        },
        f,
        d
    ) {
        return (
            typeof e == 'string' && (e = new URL(e, Ne(document))),
            ce({
                url: e,
                scroll: t ? Z() : null,
                keepfocus: n,
                redirect_chain: f,
                details: { state: i, replaceState: r },
                nav_token: d,
                accepted: () => {
                    o && (K = !0)
                },
                blocked: () => {},
                type: 'goto',
            })
        )
    }
    async function Pe(e) {
        return (
            (v = {
                id: e.id,
                promise: he(e).then((t) => (t.type === 'loaded' && t.state.error && (v = null), t)),
            }),
            v.promise
        )
    }
    async function oe(...e) {
        const r = l
            .filter((n) => e.some((i) => n.exec(i)))
            .map((n) =>
                Promise.all([...n.layouts, n.leaf].map((i) => (i == null ? void 0 : i[1]())))
            )
        await Promise.all(r)
    }
    function Ue(e) {
        var n
        m = e.state
        const t = document.querySelector('style[data-sveltekit]')
        t && t.remove(),
            (M = e.props.page),
            (F = new a.root({
                target: s,
                props: { ...e.props, stores: H, components: _ },
                hydrate: !0,
            })),
            Re($)
        const r = {
            from: null,
            to: {
                params: m.params,
                route: { id: ((n = m.route) == null ? void 0 : n.id) ?? null },
                url: new URL(location.href),
            },
            willUnload: !1,
            type: 'enter',
        }
        b.after_navigate.forEach((i) => i(r)), (T = !0)
    }
    async function W({ url: e, params: t, branch: r, status: n, error: i, route: o, form: f }) {
        let d = 'never'
        for (const g of r) (g == null ? void 0 : g.slash) !== void 0 && (d = g.slash)
        ;(e.pathname = Xe(e.pathname, d)), (e.search = e.search)
        const w = {
            type: 'loaded',
            state: { url: e, params: t, branch: r, error: i, route: o },
            props: { constructors: mt(r).map((g) => g.node.component) },
        }
        f !== void 0 && (w.props.form = f)
        let u = {},
            S = !M,
            L = 0
        for (let g = 0; g < Math.max(r.length, m.branch.length); g += 1) {
            const h = r[g],
                O = m.branch[g]
            ;(h == null ? void 0 : h.data) !== (O == null ? void 0 : O.data) && (S = !0),
                h && ((u = { ...u, ...h.data }), S && (w.props[`data_${L}`] = u), (L += 1))
        }
        return (
            (!m.url ||
                e.href !== m.url.href ||
                m.error !== i ||
                (f !== void 0 && f !== M.form) ||
                S) &&
                (w.props.page = {
                    error: i,
                    params: t,
                    route: { id: (o == null ? void 0 : o.id) ?? null },
                    status: n,
                    url: new URL(e),
                    form: f ?? null,
                    data: S ? u : M.data,
                }),
            w
        )
    }
    async function de({ loader: e, parent: t, url: r, params: n, route: i, server_data_node: o }) {
        var u, S, L
        let f = null
        const d = { dependencies: new Set(), params: new Set(), parent: !1, route: !1, url: !1 },
            w = await e()
        if ((u = w.universal) != null && u.load) {
            let P = function (...h) {
                for (const O of h) {
                    const { href: D } = new URL(O, r)
                    d.dependencies.add(D)
                }
            }
            const g = {
                route: {
                    get id() {
                        return (d.route = !0), i.id
                    },
                },
                params: new Proxy(n, { get: (h, O) => (d.params.add(O), h[O]) }),
                data: (o == null ? void 0 : o.data) ?? null,
                url: tt(r, () => {
                    d.url = !0
                }),
                async fetch(h, O) {
                    let D
                    h instanceof Request
                        ? ((D = h.url),
                          (O = {
                              body:
                                  h.method === 'GET' || h.method === 'HEAD'
                                      ? void 0
                                      : await h.blob(),
                              cache: h.cache,
                              credentials: h.credentials,
                              headers: h.headers,
                              integrity: h.integrity,
                              keepalive: h.keepalive,
                              method: h.method,
                              mode: h.mode,
                              redirect: h.redirect,
                              referrer: h.referrer,
                              referrerPolicy: h.referrerPolicy,
                              signal: h.signal,
                              ...O,
                          }))
                        : (D = h)
                    const C = new URL(D, r)
                    return (
                        P(C.href),
                        C.origin === r.origin && (D = C.href.slice(r.origin.length)),
                        T ? st(D, C.href, O) : it(D, O)
                    )
                },
                setHeaders: () => {},
                depends: P,
                parent() {
                    return (d.parent = !0), t()
                },
            }
            ;(f = (await w.universal.load.call(null, g)) ?? null), (f = f ? await ht(f) : null)
        }
        return {
            node: w,
            loader: e,
            server: o,
            universal:
                (S = w.universal) != null && S.load ? { type: 'data', data: f, uses: d } : null,
            data: f ?? (o == null ? void 0 : o.data) ?? null,
            slash:
                ((L = w.universal) == null ? void 0 : L.trailingSlash) ??
                (o == null ? void 0 : o.slash),
        }
    }
    function Ae(e, t, r, n, i) {
        if (K) return !0
        if (!n) return !1
        if ((n.parent && e) || (n.route && t) || (n.url && r)) return !0
        for (const o of n.params) if (i[o] !== m.params[o]) return !0
        for (const o of n.dependencies) if (x.some((f) => f(new URL(o)))) return !0
        return !1
    }
    function pe(e, t) {
        return (e == null ? void 0 : e.type) === 'data'
            ? e
            : (e == null ? void 0 : e.type) === 'skip'
            ? t ?? null
            : null
    }
    async function he({ id: e, invalidating: t, url: r, params: n, route: i }) {
        if ((v == null ? void 0 : v.id) === e) return v.promise
        const { errors: o, layouts: f, leaf: d } = i,
            w = [...f, d]
        o.forEach((y) => (y == null ? void 0 : y().catch(() => {}))),
            w.forEach((y) => (y == null ? void 0 : y[1]().catch(() => {})))
        let u = null
        const S = m.url ? e !== m.url.pathname + m.url.search : !1,
            L = m.route ? i.id !== m.route.id : !1
        let P = !1
        const g = w.map((y, R) => {
            var z
            const k = m.branch[R],
                j =
                    !!(y != null && y[0]) &&
                    ((k == null ? void 0 : k.loader) !== y[1] ||
                        Ae(P, L, S, (z = k.server) == null ? void 0 : z.uses, n))
            return j && (P = !0), j
        })
        if (g.some(Boolean)) {
            try {
                u = await Me(r, g)
            } catch (y) {
                return ie({
                    status: y instanceof ee ? y.status : 500,
                    error: await X(y, { url: r, params: n, route: { id: i.id } }),
                    url: r,
                    route: i,
                })
            }
            if (u.type === 'redirect') return u
        }
        const h = u == null ? void 0 : u.nodes
        let O = !1
        const D = w.map(async (y, R) => {
            var me
            if (!y) return
            const k = m.branch[R],
                j = h == null ? void 0 : h[R]
            if (
                (!j || j.type === 'skip') &&
                y[1] === (k == null ? void 0 : k.loader) &&
                !Ae(O, L, S, (me = k.universal) == null ? void 0 : me.uses, n)
            )
                return k
            if (((O = !0), (j == null ? void 0 : j.type) === 'error')) throw j
            return de({
                loader: y[1],
                url: r,
                params: n,
                route: i,
                parent: async () => {
                    var De
                    const Te = {}
                    for (let ge = 0; ge < R; ge += 1)
                        Object.assign(Te, (De = await D[ge]) == null ? void 0 : De.data)
                    return Te
                },
                server_data_node: pe(
                    j === void 0 && y[0] ? { type: 'skip' } : j ?? null,
                    y[0] ? (k == null ? void 0 : k.server) : void 0
                ),
            })
        })
        for (const y of D) y.catch(() => {})
        const C = []
        for (let y = 0; y < w.length; y += 1)
            if (w[y])
                try {
                    C.push(await D[y])
                } catch (R) {
                    if (R instanceof He) return { type: 'redirect', location: R.location }
                    let k = 500,
                        j
                    if (h != null && h.includes(R)) (k = R.status ?? k), (j = R.error)
                    else if (R instanceof ee) (k = R.status), (j = R.body)
                    else {
                        if (await H.updated.check()) return await B(r)
                        j = await X(R, { params: n, url: r, route: { id: i.id } })
                    }
                    const z = await $e(y, C, o)
                    return z
                        ? await W({
                              url: r,
                              params: n,
                              branch: C.slice(0, z.idx).concat(z.node),
                              status: k,
                              error: j,
                              route: i,
                          })
                        : await Ie(r, { id: i.id }, j, k)
                }
            else C.push(void 0)
        return await W({
            url: r,
            params: n,
            branch: C,
            status: 200,
            error: null,
            route: i,
            form: t ? void 0 : null,
        })
    }
    async function $e(e, t, r) {
        for (; e--; )
            if (r[e]) {
                let n = e
                for (; !t[n]; ) n -= 1
                try {
                    return {
                        idx: n + 1,
                        node: {
                            node: await r[e](),
                            loader: r[e],
                            data: {},
                            server: null,
                            universal: null,
                        },
                    }
                } catch {
                    continue
                }
            }
    }
    async function ie({ status: e, error: t, url: r, route: n }) {
        const i = {}
        let o = null
        if (a.server_loads[0] === 0)
            try {
                const u = await Me(r, [!0])
                if (u.type !== 'data' || (u.nodes[0] && u.nodes[0].type !== 'data')) throw 0
                o = u.nodes[0] ?? null
            } catch {
                ;(r.origin !== location.origin || r.pathname !== location.pathname || N) &&
                    (await B(r))
            }
        const d = await de({
                loader: c,
                url: r,
                params: i,
                route: n,
                parent: () => Promise.resolve({}),
                server_data_node: pe(o),
            }),
            w = { node: await p(), loader: p, universal: null, server: null, data: null }
        return await W({ url: r, params: i, branch: [d, w], status: e, error: t, route: null })
    }
    function Y(e, t) {
        if (_e(e, J)) return
        const r = se(e)
        for (const n of l) {
            const i = n.exec(r)
            if (i)
                return {
                    id: e.pathname + e.search,
                    invalidating: t,
                    route: n,
                    params: Ze(i),
                    url: e,
                }
        }
    }
    function se(e) {
        return Qe(e.pathname.slice(J.length) || '/')
    }
    function Oe({ url: e, type: t, intent: r, delta: n }) {
        var d, w
        let i = !1
        const o = {
            from: {
                params: m.params,
                route: { id: ((d = m.route) == null ? void 0 : d.id) ?? null },
                url: m.url,
            },
            to: {
                params: (r == null ? void 0 : r.params) ?? null,
                route: { id: ((w = r == null ? void 0 : r.route) == null ? void 0 : w.id) ?? null },
                url: e,
            },
            willUnload: !r,
            type: t,
        }
        n !== void 0 && (o.delta = n)
        const f = {
            ...o,
            cancel: () => {
                i = !0
            },
        }
        return U || b.before_navigate.forEach((u) => u(f)), i ? null : o
    }
    async function ce({
        url: e,
        scroll: t,
        keepfocus: r,
        redirect_chain: n,
        details: i,
        type: o,
        delta: f,
        nav_token: d = {},
        accepted: w,
        blocked: u,
    }) {
        var D, C, y
        const S = Y(e, !1),
            L = Oe({ url: e, type: o, delta: f, intent: S })
        if (!L) {
            u()
            return
        }
        const P = $
        w(), (U = !0), T && H.navigating.set(L), (ne = d)
        let g = S && (await he(S))
        if (!g) {
            if (_e(e, J)) return await B(e)
            g = await Ie(
                e,
                { id: null },
                await X(new Error(`Not found: ${e.pathname}`), {
                    url: e,
                    params: {},
                    route: { id: null },
                }),
                404
            )
        }
        if (((e = (S == null ? void 0 : S.url) || e), ne !== d)) return !1
        if (g.type === 'redirect')
            if (n.length > 10 || n.includes(e.pathname))
                g = await ie({
                    status: 500,
                    error: await X(new Error('Redirect loop'), {
                        url: e,
                        params: {},
                        route: { id: null },
                    }),
                    url: e,
                    route: { id: null },
                })
            else return re(new URL(g.location, e).href, {}, [...n, e.pathname], d), !1
        else
            ((D = g.props.page) == null ? void 0 : D.status) >= 400 &&
                (await H.updated.check()) &&
                (await B(e))
        if (
            ((x.length = 0),
            (K = !1),
            (A = !0),
            be(P),
            xe(P),
            (C = g.props.page) != null &&
                C.url &&
                g.props.page.url.pathname !== e.pathname &&
                (e.pathname = (y = g.props.page) == null ? void 0 : y.url.pathname),
            i)
        ) {
            const R = i.replaceState ? 0 : 1
            if (
                ((i.state[q] = $ += R),
                history[i.replaceState ? 'replaceState' : 'pushState'](i.state, '', e),
                !i.replaceState)
            ) {
                let k = $ + 1
                for (; Q[k] || V[k]; ) delete Q[k], delete V[k], (k += 1)
            }
        }
        ;(v = null),
            T ? ((m = g.state), g.props.page && (g.props.page.url = e), F.$set(g.props)) : Ue(g)
        const { activeElement: h } = document
        if ((await we(), I)) {
            const R = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)))
            t ? scrollTo(t.x, t.y) : R ? R.scrollIntoView() : scrollTo(0, 0)
        }
        const O = document.activeElement !== h && document.activeElement !== document.body
        !r && !O && (await Ee()),
            (I = !0),
            g.props.page && (M = g.props.page),
            (U = !1),
            b.after_navigate.forEach((R) => R(L)),
            H.navigating.set(null),
            (A = !1)
    }
    async function Ie(e, t, r, n) {
        return e.origin === location.origin && e.pathname === location.pathname && !N
            ? await ie({ status: n, error: r, url: e, route: t })
            : await B(e)
    }
    function B(e) {
        return (location.href = e.href), new Promise(() => {})
    }
    function Ge() {
        let e
        E.addEventListener('mousemove', (o) => {
            const f = o.target
            clearTimeout(e),
                (e = setTimeout(() => {
                    n(f, 2)
                }, 20))
        })
        function t(o) {
            n(o.composedPath()[0], 1)
        }
        E.addEventListener('mousedown', t), E.addEventListener('touchstart', t, { passive: !0 })
        const r = new IntersectionObserver(
            (o) => {
                for (const f of o)
                    f.isIntersecting && (oe(se(new URL(f.target.href))), r.unobserve(f.target))
            },
            { threshold: 0 }
        )
        function n(o, f) {
            const d = qe(o, E)
            if (!d) return
            const { url: w, external: u, download: S } = ye(d, J)
            if (u || S) return
            const L = le(d)
            if (!L.reload)
                if (f <= L.preload_data) {
                    const P = Y(w, !1)
                    P && Pe(P)
                } else f <= L.preload_code && oe(se(w))
        }
        function i() {
            r.disconnect()
            for (const o of E.querySelectorAll('a')) {
                const { url: f, external: d, download: w } = ye(o, J)
                if (d || w) continue
                const u = le(o)
                u.reload ||
                    (u.preload_code === Fe.viewport && r.observe(o),
                    u.preload_code === Fe.eager && oe(se(f)))
            }
        }
        b.after_navigate.push(i), i()
    }
    function X(e, t) {
        return e instanceof ee
            ? e.body
            : a.hooks.handleError({ error: e, event: t }) ?? {
                  message: t.route.id != null ? 'Internal Error' : 'Not Found',
              }
    }
    return {
        after_navigate: (e) => {
            Ce(
                () => (
                    b.after_navigate.push(e),
                    () => {
                        const t = b.after_navigate.indexOf(e)
                        b.after_navigate.splice(t, 1)
                    }
                )
            )
        },
        before_navigate: (e) => {
            Ce(
                () => (
                    b.before_navigate.push(e),
                    () => {
                        const t = b.before_navigate.indexOf(e)
                        b.before_navigate.splice(t, 1)
                    }
                )
            )
        },
        disable_scroll_handling: () => {
            ;(A || !T) && (I = !1)
        },
        goto: (e, t = {}) => re(e, t, []),
        invalidate: (e) => {
            if (typeof e == 'function') x.push(e)
            else {
                const { href: t } = new URL(e, location.href)
                x.push((r) => r.href === t)
            }
            return ke()
        },
        invalidateAll: () => ((K = !0), ke()),
        preload_data: async (e) => {
            const t = new URL(e, Ne(document)),
                r = Y(t, !1)
            if (!r)
                throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`)
            await Pe(r)
        },
        preload_code: oe,
        apply_action: async (e) => {
            if (e.type === 'error') {
                const t = new URL(location.href),
                    { branch: r, route: n } = m
                if (!n) return
                const i = await $e(m.branch.length, r, n.errors)
                if (i) {
                    const o = await W({
                        url: t,
                        params: m.params,
                        branch: r.slice(0, i.idx).concat(i.node),
                        status: e.status ?? 500,
                        error: e.error,
                        route: n,
                    })
                    ;(m = o.state), F.$set(o.props), we().then(Ee)
                }
            } else
                e.type === 'redirect'
                    ? re(e.location, { invalidateAll: !0 }, [])
                    : (F.$set({ form: null, page: { ...M, form: e.data, status: e.status } }),
                      await we(),
                      F.$set({ form: e.data }),
                      e.type === 'success' && Ee())
        },
        _start_router: () => {
            var e
            ;(history.scrollRestoration = 'manual'),
                addEventListener('beforeunload', (t) => {
                    var n
                    let r = !1
                    if ((Le(), !U)) {
                        const i = {
                            from: {
                                params: m.params,
                                route: { id: ((n = m.route) == null ? void 0 : n.id) ?? null },
                                url: m.url,
                            },
                            to: null,
                            willUnload: !0,
                            type: 'leave',
                            cancel: () => (r = !0),
                        }
                        b.before_navigate.forEach((o) => o(i))
                    }
                    r
                        ? (t.preventDefault(), (t.returnValue = ''))
                        : (history.scrollRestoration = 'auto')
                }),
                addEventListener('visibilitychange', () => {
                    document.visibilityState === 'hidden' && Le()
                }),
                ((e = navigator.connection) != null && e.saveData) || Ge(),
                E.addEventListener('click', (t) => {
                    if (
                        t.button ||
                        t.which !== 1 ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        t.defaultPrevented
                    )
                        return
                    const r = qe(t.composedPath()[0], E)
                    if (!r) return
                    const { url: n, external: i, target: o, download: f } = ye(r, J)
                    if (!n) return
                    if (o === '_parent' || o === '_top') {
                        if (window.parent !== window) return
                    } else if (o && o !== '_self') return
                    const d = le(r)
                    if (
                        (!(r instanceof SVGAElement) &&
                            n.protocol !== location.protocol &&
                            !(n.protocol === 'https:' || n.protocol === 'http:')) ||
                        f
                    )
                        return
                    if (i || d.reload) {
                        Oe({ url: n, type: 'link' }) ? (U = !0) : t.preventDefault()
                        return
                    }
                    const [u, S] = n.href.split('#')
                    if (S !== void 0 && u === location.href.split('#')[0]) {
                        ;(G = !0), be($), (m.url = n), H.page.set({ ...M, url: n }), H.page.notify()
                        return
                    }
                    ce({
                        url: n,
                        scroll: d.noscroll ? Z() : null,
                        keepfocus: d.keep_focus ?? !1,
                        redirect_chain: [],
                        details: {
                            state: {},
                            replaceState: d.replace_state ?? n.href === location.href,
                        },
                        accepted: () => t.preventDefault(),
                        blocked: () => t.preventDefault(),
                        type: 'link',
                    })
                }),
                E.addEventListener('submit', (t) => {
                    if (t.defaultPrevented) return
                    const r = HTMLFormElement.prototype.cloneNode.call(t.target),
                        n = t.submitter
                    if (((n == null ? void 0 : n.formMethod) || r.method) !== 'get') return
                    const o = new URL(
                        ((n == null ? void 0 : n.hasAttribute('formaction')) &&
                            (n == null ? void 0 : n.formAction)) ||
                            r.action
                    )
                    if (_e(o, J)) return
                    const f = t.target,
                        { keep_focus: d, noscroll: w, reload: u, replace_state: S } = le(f)
                    if (u) return
                    t.preventDefault(), t.stopPropagation()
                    const L = new FormData(f),
                        P = n == null ? void 0 : n.getAttribute('name')
                    P && L.append(P, (n == null ? void 0 : n.getAttribute('value')) ?? ''),
                        (o.search = new URLSearchParams(L).toString()),
                        ce({
                            url: o,
                            scroll: w ? Z() : null,
                            keepfocus: d ?? !1,
                            redirect_chain: [],
                            details: { state: {}, replaceState: S ?? o.href === location.href },
                            nav_token: {},
                            accepted: () => {},
                            blocked: () => {},
                            type: 'form',
                        })
                }),
                addEventListener('popstate', async (t) => {
                    var r
                    if ((r = t.state) != null && r[q]) {
                        if (t.state[q] === $) return
                        const n = V[t.state[q]]
                        if (m.url.href.split('#')[0] === location.href.split('#')[0]) {
                            ;(V[$] = Z()), ($ = t.state[q]), scrollTo(n.x, n.y)
                            return
                        }
                        const i = t.state[q] - $
                        let o = !1
                        await ce({
                            url: new URL(location.href),
                            scroll: n,
                            keepfocus: !1,
                            redirect_chain: [],
                            details: null,
                            accepted: () => {
                                $ = t.state[q]
                            },
                            blocked: () => {
                                history.go(-i), (o = !0)
                            },
                            type: 'popstate',
                            delta: i,
                        }),
                            o || Re($)
                    }
                }),
                addEventListener('hashchange', () => {
                    G &&
                        ((G = !1),
                        history.replaceState({ ...history.state, [q]: ++$ }, '', location.href))
                })
            for (const t of document.querySelectorAll('link')) t.rel === 'icon' && (t.href = t.href)
            addEventListener('pageshow', (t) => {
                t.persisted && H.navigating.set(null)
            })
        },
        _hydrate: async ({
            status: e = 200,
            error: t,
            node_ids: r,
            params: n,
            route: i,
            data: o,
            form: f,
        }) => {
            N = !0
            const d = new URL(location.href)
            ;({ params: n = {}, route: i = { id: null } } = Y(d, !1) || {})
            let w
            try {
                const u = r.map(async (S, L) => {
                    const P = o[L]
                    return (
                        P != null && P.uses && (P.uses = Be(P.uses)),
                        de({
                            loader: a.nodes[S],
                            url: d,
                            params: n,
                            route: i,
                            parent: async () => {
                                const g = {}
                                for (let h = 0; h < L; h += 1) Object.assign(g, (await u[h]).data)
                                return g
                            },
                            server_data_node: pe(P),
                        })
                    )
                })
                w = await W({
                    url: d,
                    params: n,
                    branch: await Promise.all(u),
                    status: e,
                    error: t,
                    form: f,
                    route: l.find(({ id: S }) => S === i.id) ?? null,
                })
            } catch (u) {
                if (u instanceof He) {
                    await B(new URL(u.location, location.href))
                    return
                }
                w = await ie({
                    status: u instanceof ee ? u.status : 500,
                    error: await X(u, { url: d, params: n, route: i }),
                    url: d,
                    route: i,
                })
            }
            Ue(w)
        },
    }
}
async function Me(a, s) {
    const l = new URL(a)
    ;(l.pathname = rt(a.pathname)),
        l.searchParams.append('x-sveltekit-invalidated', s.map((p) => (p ? '1' : '')).join('_'))
    const c = await fe(l.href)
    if (!c.ok) throw new ee(c.status, await c.json())
    return new Promise(async (p) => {
        var m
        const E = new Map(),
            x = c.body.getReader(),
            _ = new TextDecoder()
        function v(N) {
            return Ye(N, {
                Promise: (T) =>
                    new Promise((I, A) => {
                        E.set(T, { fulfil: I, reject: A })
                    }),
            })
        }
        let b = ''
        for (;;) {
            const { done: N, value: T } = await x.read()
            if (N && !b) break
            for (
                b +=
                    !T && b
                        ? `
`
                        : _.decode(T);
                ;

            ) {
                const I = b.indexOf(`
`)
                if (I === -1) break
                const A = JSON.parse(b.slice(0, I))
                if (((b = b.slice(I + 1)), A.type === 'redirect')) return p(A)
                if (A.type === 'data')
                    (m = A.nodes) == null ||
                        m.forEach((U) => {
                            ;(U == null ? void 0 : U.type) === 'data' &&
                                ((U.uses = Be(U.uses)), (U.data = v(U.data)))
                        }),
                        p(A)
                else if (A.type === 'chunk') {
                    const { id: U, data: G, error: K } = A,
                        F = E.get(U)
                    E.delete(U), K ? F.reject(v(K)) : F.fulfil(v(G))
                }
            }
        }
    })
}
function Be(a) {
    return {
        dependencies: new Set((a == null ? void 0 : a.dependencies) ?? []),
        params: new Set((a == null ? void 0 : a.params) ?? []),
        parent: !!(a != null && a.parent),
        route: !!(a != null && a.route),
        url: !!(a != null && a.url),
    }
}
function Ee() {
    const a = document.querySelector('[autofocus]')
    if (a) a.focus()
    else {
        const s = document.body,
            l = s.getAttribute('tabindex')
        return (
            (s.tabIndex = -1),
            s.focus({ preventScroll: !0 }),
            l !== null ? s.setAttribute('tabindex', l) : s.removeAttribute('tabindex'),
            new Promise((c) => {
                setTimeout(() => {
                    var p
                    c((p = getSelection()) == null ? void 0 : p.removeAllRanges())
                })
            })
        )
    }
}
async function Et(a, s, l) {
    const c = gt(a, s)
    We({ client: c }),
        l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
        c._start_router()
}
export { Et as start }
