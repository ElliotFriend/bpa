import { p as f } from './parse.d12b0d5b.js'
import { h } from './singletons.b7ad8e8e.js'
import { i as A } from './navigation.41aba242.js'
const w = h.apply_action
function E(e) {
    const n = JSON.parse(e)
    return n.data && (n.data = f(n.data)), n
}
function k(e, n = () => {}) {
    const c = async ({ action: a, result: r, reset: i }) => {
        r.type === 'success' && (i !== !1 && HTMLFormElement.prototype.reset.call(e), await A()),
            (location.origin + location.pathname === a.origin + a.pathname ||
                r.type === 'redirect' ||
                r.type === 'error') &&
                w(r)
    }
    async function s(a) {
        var u, b, d
        a.preventDefault()
        const r = new URL(
                (u = a.submitter) != null && u.hasAttribute('formaction')
                    ? a.submitter.formAction
                    : HTMLFormElement.prototype.cloneNode.call(e).action
            ),
            i = new FormData(e),
            l = (b = a.submitter) == null ? void 0 : b.getAttribute('name')
        l && i.append(l, ((d = a.submitter) == null ? void 0 : d.getAttribute('value')) ?? '')
        const p = new AbortController()
        let m = !1
        const y =
            (await n({
                action: r,
                cancel: () => (m = !0),
                controller: p,
                data: i,
                form: e,
                submitter: a.submitter,
            })) ?? c
        if (m) return
        let o
        try {
            const t = await fetch(r, {
                method: 'POST',
                headers: { accept: 'application/json', 'x-sveltekit-action': 'true' },
                cache: 'no-store',
                body: i,
                signal: p.signal,
            })
            ;(o = E(await t.text())), o.type === 'error' && (o.status = t.status)
        } catch (t) {
            if ((t == null ? void 0 : t.name) === 'AbortError') return
            o = { type: 'error', error: t }
        }
        y({
            action: r,
            data: i,
            form: e,
            update: (t) => c({ action: r, result: o, reset: t == null ? void 0 : t.reset }),
            result: o,
        })
    }
    return (
        HTMLFormElement.prototype.addEventListener.call(e, 'submit', s),
        {
            destroy() {
                HTMLFormElement.prototype.removeEventListener.call(e, 'submit', s)
            },
        }
    )
}
export { k as e }
