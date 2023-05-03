function g() {}
function U(t, e) {
    for (const n in e) t[n] = e[n]
    return t
}
function V(t) {
    return !!t && (typeof t == 'object' || typeof t == 'function') && typeof t.then == 'function'
}
function D(t) {
    return t()
}
function H() {
    return Object.create(null)
}
function b(t) {
    t.forEach(D)
}
function M(t) {
    return typeof t == 'function'
}
function yt(t, e) {
    return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let E
function gt(t, e) {
    return E || (E = document.createElement('a')), (E.href = e), t === E.href
}
function X(t) {
    return Object.keys(t).length === 0
}
function Y(t, ...e) {
    if (t == null) return g
    const n = t.subscribe(...e)
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function xt(t, e, n) {
    t.$$.on_destroy.push(Y(e, n))
}
function bt(t, e, n, i) {
    if (t) {
        const r = G(t, e, n, i)
        return t[0](r)
    }
}
function G(t, e, n, i) {
    return t[1] && i ? U(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function $t(t, e, n, i) {
    if (t[2] && i) {
        const r = t[2](i(n))
        if (e.dirty === void 0) return r
        if (typeof r == 'object') {
            const u = [],
                c = Math.max(e.dirty.length, r.length)
            for (let o = 0; o < c; o += 1) u[o] = e.dirty[o] | r[o]
            return u
        }
        return e.dirty | r
    }
    return e.dirty
}
function Et(t, e, n, i, r, u) {
    if (r) {
        const c = G(e, n, i, u)
        t.p(c, r)
    }
}
function vt(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32
        for (let i = 0; i < n; i++) e[i] = -1
        return e
    }
    return -1
}
function wt(t) {
    return t && M(t.destroy) ? t.destroy : g
}
let T = !1
function Z() {
    T = !0
}
function tt() {
    T = !1
}
function et(t, e, n, i) {
    for (; t < e; ) {
        const r = t + ((e - t) >> 1)
        n(r) <= i ? (t = r + 1) : (e = r)
    }
    return t
}
function nt(t) {
    if (t.hydrate_init) return
    t.hydrate_init = !0
    let e = t.childNodes
    if (t.nodeName === 'HEAD') {
        const s = []
        for (let l = 0; l < e.length; l++) {
            const f = e[l]
            f.claim_order !== void 0 && s.push(f)
        }
        e = s
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length)
    n[0] = -1
    let r = 0
    for (let s = 0; s < e.length; s++) {
        const l = e[s].claim_order,
            f =
                (r > 0 && e[n[r]].claim_order <= l
                    ? r + 1
                    : et(1, r, (_) => e[n[_]].claim_order, l)) - 1
        i[s] = n[f] + 1
        const a = f + 1
        ;(n[a] = s), (r = Math.max(a, r))
    }
    const u = [],
        c = []
    let o = e.length - 1
    for (let s = n[r] + 1; s != 0; s = i[s - 1]) {
        for (u.push(e[s - 1]); o >= s; o--) c.push(e[o])
        o--
    }
    for (; o >= 0; o--) c.push(e[o])
    u.reverse(), c.sort((s, l) => s.claim_order - l.claim_order)
    for (let s = 0, l = 0; s < c.length; s++) {
        for (; l < u.length && c[s].claim_order >= u[l].claim_order; ) l++
        const f = l < u.length ? u[l] : null
        t.insertBefore(c[s], f)
    }
}
function it(t, e) {
    if (T) {
        for (
            nt(t),
                (t.actual_end_child === void 0 ||
                    (t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
                    (t.actual_end_child = t.firstChild);
            t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

        )
            t.actual_end_child = t.actual_end_child.nextSibling
        e !== t.actual_end_child
            ? (e.claim_order !== void 0 || e.parentNode !== t) &&
              t.insertBefore(e, t.actual_end_child)
            : (t.actual_end_child = e.nextSibling)
    } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function rt(t, e, n) {
    t.insertBefore(e, n || null)
}
function ct(t, e, n) {
    T && !n ? it(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function w(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function Tt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function I(t) {
    return document.createElement(t)
}
function z(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t)
}
function S(t) {
    return document.createTextNode(t)
}
function Nt() {
    return S(' ')
}
function kt() {
    return S('')
}
function At(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}
function Mt(t) {
    return function (e) {
        return e.preventDefault(), t.call(this, e)
    }
}
function St(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Ct(t) {
    return t === '' ? null : +t
}
function st(t) {
    return Array.from(t.childNodes)
}
function F(t) {
    t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 })
}
function R(t, e, n, i, r = !1) {
    F(t)
    const u = (() => {
        for (let c = t.claim_info.last_index; c < t.length; c++) {
            const o = t[c]
            if (e(o)) {
                const s = n(o)
                return (
                    s === void 0 ? t.splice(c, 1) : (t[c] = s),
                    r || (t.claim_info.last_index = c),
                    o
                )
            }
        }
        for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
            const o = t[c]
            if (e(o)) {
                const s = n(o)
                return (
                    s === void 0 ? t.splice(c, 1) : (t[c] = s),
                    r ? s === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
                    o
                )
            }
        }
        return i()
    })()
    return (u.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), u
}
function W(t, e, n, i) {
    return R(
        t,
        (r) => r.nodeName === e,
        (r) => {
            const u = []
            for (let c = 0; c < r.attributes.length; c++) {
                const o = r.attributes[c]
                n[o.name] || u.push(o.name)
            }
            u.forEach((c) => r.removeAttribute(c))
        },
        () => i(e)
    )
}
function Lt(t, e, n) {
    return W(t, e, n, I)
}
function jt(t, e, n) {
    return W(t, e, n, z)
}
function lt(t, e) {
    return R(
        t,
        (n) => n.nodeType === 3,
        (n) => {
            const i = '' + e
            if (n.data.startsWith(i)) {
                if (n.data.length !== i.length) return n.splitText(i.length)
            } else n.data = i
        },
        () => S(e),
        !0
    )
}
function Ht(t) {
    return lt(t, ' ')
}
function P(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const r = t[i]
        if (r.nodeType === 8 && r.textContent.trim() === e) return i
    }
    return t.length
}
function Pt(t, e) {
    const n = P(t, 'HTML_TAG_START', 0),
        i = P(t, 'HTML_TAG_END', n)
    if (n === i) return new q(void 0, e)
    F(t)
    const r = t.splice(n, i - n + 1)
    w(r[0]), w(r[r.length - 1])
    const u = r.slice(1, r.length - 1)
    for (const c of u)
        (c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1)
    return new q(u, e)
}
function qt(t, e) {
    ;(e = '' + e), t.data !== e && (t.data = e)
}
function Bt(t, e) {
    t.value = e ?? ''
}
function Ot(t, e, n, i) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '')
}
function Dt(t, e, n) {
    for (let i = 0; i < t.options.length; i += 1) {
        const r = t.options[i]
        if (r.__value === e) {
            r.selected = !0
            return
        }
    }
    ;(!n || e !== void 0) && (t.selectedIndex = -1)
}
function Gt(t) {
    const e = t.querySelector(':checked')
    return e && e.__value
}
class ut {
    constructor(e = !1) {
        ;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e ||
            (this.is_svg
                ? (this.e = z(n.nodeName))
                : (this.e = I(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
            (this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
            this.c(e)),
            this.i(i)
    }
    h(e) {
        ;(this.e.innerHTML = e),
            (this.n = Array.from(
                this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
            ))
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) rt(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(w)
    }
}
class q extends ut {
    constructor(e, n = !1) {
        super(n), (this.e = this.n = null), (this.l = e)
    }
    c(e) {
        this.l ? (this.n = this.l) : super.c(e)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) ct(this.t, this.n[n], e)
    }
}
function It(t, e) {
    return new t(e)
}
let x
function d(t) {
    x = t
}
function $() {
    if (!x) throw new Error('Function called outside component initialization')
    return x
}
function zt(t) {
    $().$$.on_mount.push(t)
}
function Ft(t) {
    $().$$.after_update.push(t)
}
function Rt(t, e) {
    return $().$$.context.set(t, e), e
}
function Wt(t) {
    return $().$$.context.get(t)
}
const p = [],
    B = []
let y = []
const O = [],
    J = Promise.resolve()
let k = !1
function K() {
    k || ((k = !0), J.then(C))
}
function Jt() {
    return K(), J
}
function A(t) {
    y.push(t)
}
const N = new Set()
let m = 0
function C() {
    if (m !== 0) return
    const t = x
    do {
        try {
            for (; m < p.length; ) {
                const e = p[m]
                m++, d(e), ot(e.$$)
            }
        } catch (e) {
            throw ((p.length = 0), (m = 0), e)
        }
        for (d(null), p.length = 0, m = 0; B.length; ) B.pop()()
        for (let e = 0; e < y.length; e += 1) {
            const n = y[e]
            N.has(n) || (N.add(n), n())
        }
        y.length = 0
    } while (p.length)
    for (; O.length; ) O.pop()()
    ;(k = !1), N.clear(), d(t)
}
function ot(t) {
    if (t.fragment !== null) {
        t.update(), b(t.before_update)
        const e = t.dirty
        ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
    }
}
function at(t) {
    const e = [],
        n = []
    y.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (y = e)
}
const v = new Set()
let h
function ft() {
    h = { r: 0, c: [], p: h }
}
function dt() {
    h.r || b(h.c), (h = h.p)
}
function Q(t, e) {
    t && t.i && (v.delete(t), t.i(e))
}
function _t(t, e, n, i) {
    if (t && t.o) {
        if (v.has(t)) return
        v.add(t),
            h.c.push(() => {
                v.delete(t), i && (n && t.d(1), i())
            }),
            t.o(e)
    } else i && i()
}
function Kt(t, e) {
    const n = (e.token = {})
    function i(r, u, c, o) {
        if (e.token !== n) return
        e.resolved = o
        let s = e.ctx
        c !== void 0 && ((s = s.slice()), (s[c] = o))
        const l = r && (e.current = r)(s)
        let f = !1
        e.block &&
            (e.blocks
                ? e.blocks.forEach((a, _) => {
                      _ !== u &&
                          a &&
                          (ft(),
                          _t(a, 1, 1, () => {
                              e.blocks[_] === a && (e.blocks[_] = null)
                          }),
                          dt())
                  })
                : e.block.d(1),
            l.c(),
            Q(l, 1),
            l.m(e.mount(), e.anchor),
            (f = !0)),
            (e.block = l),
            e.blocks && (e.blocks[u] = l),
            f && C()
    }
    if (V(t)) {
        const r = $()
        if (
            (t.then(
                (u) => {
                    d(r), i(e.then, 1, e.value, u), d(null)
                },
                (u) => {
                    if ((d(r), i(e.catch, 2, e.error, u), d(null), !e.hasCatch)) throw u
                }
            ),
            e.current !== e.pending)
        )
            return i(e.pending, 0), !0
    } else {
        if (e.current !== e.then) return i(e.then, 1, e.value, t), !0
        e.resolved = t
    }
}
function Qt(t, e, n) {
    const i = e.slice(),
        { resolved: r } = t
    t.current === t.then && (i[t.value] = r),
        t.current === t.catch && (i[t.error] = r),
        t.block.p(i, n)
}
function Ut(t) {
    t && t.c()
}
function Vt(t, e) {
    t && t.l(e)
}
function ht(t, e, n, i) {
    const { fragment: r, after_update: u } = t.$$
    r && r.m(e, n),
        i ||
            A(() => {
                const c = t.$$.on_mount.map(D).filter(M)
                t.$$.on_destroy ? t.$$.on_destroy.push(...c) : b(c), (t.$$.on_mount = [])
            }),
        u.forEach(A)
}
function mt(t, e) {
    const n = t.$$
    n.fragment !== null &&
        (at(n.after_update),
        b(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []))
}
function pt(t, e) {
    t.$$.dirty[0] === -1 && (p.push(t), K(), t.$$.dirty.fill(0)),
        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function Xt(t, e, n, i, r, u, c, o = [-1]) {
    const s = x
    d(t)
    const l = (t.$$ = {
        fragment: null,
        ctx: [],
        props: u,
        update: g,
        not_equal: r,
        bound: H(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (s ? s.$$.context : [])),
        callbacks: H(),
        dirty: o,
        skip_bound: !1,
        root: e.target || s.$$.root,
    })
    c && c(l.root)
    let f = !1
    if (
        ((l.ctx = n
            ? n(t, e.props || {}, (a, _, ...L) => {
                  const j = L.length ? L[0] : _
                  return (
                      l.ctx &&
                          r(l.ctx[a], (l.ctx[a] = j)) &&
                          (!l.skip_bound && l.bound[a] && l.bound[a](j), f && pt(t, a)),
                      _
                  )
              })
            : []),
        l.update(),
        (f = !0),
        b(l.before_update),
        (l.fragment = i ? i(l.ctx) : !1),
        e.target)
    ) {
        if (e.hydrate) {
            Z()
            const a = st(e.target)
            l.fragment && l.fragment.l(a), a.forEach(w)
        } else l.fragment && l.fragment.c()
        e.intro && Q(t.$$.fragment), ht(t, e.target, e.anchor, e.customElement), tt(), C()
    }
    d(s)
}
class Yt {
    $destroy() {
        mt(this, 1), (this.$destroy = g)
    }
    $on(e, n) {
        if (!M(n)) return g
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
        return (
            i.push(n),
            () => {
                const r = i.indexOf(n)
                r !== -1 && i.splice(r, 1)
            }
        )
    }
    $set(e) {
        this.$$set && !X(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
    }
}
export {
    Gt as $,
    ht as A,
    mt as B,
    bt as C,
    Et as D,
    vt as E,
    $t as F,
    Rt as G,
    it as H,
    g as I,
    xt as J,
    gt as K,
    Wt as L,
    Kt as M,
    Qt as N,
    Tt as O,
    At as P,
    M as Q,
    wt as R,
    Yt as S,
    z as T,
    jt as U,
    Bt as V,
    Mt as W,
    b as X,
    Ct as Y,
    A as Z,
    Dt as _,
    Nt as a,
    q as a0,
    Pt as a1,
    ct as b,
    Ht as c,
    _t as d,
    kt as e,
    dt as f,
    Q as g,
    w as h,
    Xt as i,
    Ft as j,
    I as k,
    Lt as l,
    st as m,
    St as n,
    zt as o,
    Ot as p,
    S as q,
    lt as r,
    yt as s,
    Jt as t,
    qt as u,
    ft as v,
    B as w,
    It as x,
    Ut as y,
    Vt as z,
}
