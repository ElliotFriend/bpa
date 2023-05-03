import { l as a, e } from './index.7121c868.js'
import { v as r } from './generateKeypair.c6b5dfc9.js'
const s = new a.Server('https://horizon-testnet.stellar.org')
async function c(n) {
    return { account: await s.accounts().accountId(n).call() }
}
async function o(n) {
    try {
        return { funded: !0, account: await s.loadAccount(n) }
    } catch (t) {
        if (t.response.status === 404) return { funded: !1 }
        throw e(t.response.status, `${t.response.title} - ${t.response.detail}`)
    }
}
async function f(n) {
    const t = await o(n)
    return new a.TransactionBuilder(t.account, { networkPassphrase: a.Networks.TESTNET, fee: 1e4 })
}
async function d(n) {
    const { account: t } = await c(n)
    return { balances: t.balances }
}
async function p(n) {
    if (r(n)) {
        const t = `https://friendbot.stellar.org?addr=${n}`
        await fetch(t)
    }
}
export { p as a, c as f, d as g, o as l, f as s }
