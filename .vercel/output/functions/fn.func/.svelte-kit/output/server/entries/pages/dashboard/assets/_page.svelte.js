import {
    c as create_ssr_component,
    d as add_attribute,
    b as each,
    i as is_promise,
    n as noop,
    e as escape,
} from '../../../../chunks/index3.js'
import { g as getAccountBalances } from '../../../../chunks/horizonQueries.js'
import 'devalue'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { data } = $$props
    let balancesPromise = getAccountBalances(data.bpaPublicKey)
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    return `<div class="my-10 mx-20"><h1 class="text-5xl font-bold">Assets</h1>
    <h2 class="text-3xl font-bold">Add Trusted Assets</h2>
    <form method="POST" action="?/preview"><input type="hidden" id="source" name="source"${add_attribute(
        'value',
        data.bpaPublicKey,
        0
    )}>
        <input type="hidden" id="addAsset" name="assAsset"${add_attribute('value', true, 0)}>
        <label for="asset" class="label"><span class="label-text">Asset</span></label>
        <select id="asset" name="asset" class="select select-bordered w-full max-w-xs"><option disabled selected value="Select Asset">Select Asset</option>${each(
            data.assets,
            (asset) => {
                return `<option${add_attribute('value', asset.asset, 0)}>${escape(
                    asset.asset.slice()
                )}</option>`
            }
        )}</select>
        <button class="btn btn-primary">Add Asset</button></form>
    <h2 class="text-3xl font-bold">Existing Balances</h2>
    ${(function (__value) {
        if (is_promise(__value)) {
            __value.then(null, noop)
            return `
        <p>loading...</p>
    `
        }
        return (function ({ balances }) {
            return `
    <div class="overflow-x-auto"><table class="table w-full"><thead><tr><th>Balance</th>
                    <th>Asset</th>
                    <th>Issuer</th>
                    <th>Liabilities</th>
                    <th>Limit</th>
                    <th></th></tr></thead>
            <tbody>${each(balances, (balance) => {
                return `<tr><td>${escape(balance.balance)}</td>
                        <td>${escape(balance.asset_code ?? 'XLM')}</td>
                        <td>${escape(balance.asset_issuer ?? 'n/a')}</td>
                        <td>${escape(
                            (
                                parseFloat(balance.buying_liabilities) +
                                parseFloat(balance.selling_liabilities)
                            ).toFixed(7)
                        )}</td>
                        <td>${escape(balance.limit ?? 'n/a')}</td>
                        <th>${
                            balance.asset_type !== 'native'
                                ? `<form method="POST" action="?/preview"><input type="hidden" name="source" id="source"${add_attribute(
                                      'value',
                                      data.bpaPublicKey,
                                      0
                                  )}>
                                <input type="hidden" name="asset" id="asset"${add_attribute(
                                    'value',
                                    `${balance.asset_code}-${balance.asset_issuer}`,
                                    0
                                )}>
                                <button class="btn btn-square btn-error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd"></path></svg></button>
                            </form>`
                                : ``
                        }</th>
                    </tr>`
            })}</tbody></table></div>
    `
        })(__value)
    })(balancesPromise)}</div>`
})
export { Page as default }
