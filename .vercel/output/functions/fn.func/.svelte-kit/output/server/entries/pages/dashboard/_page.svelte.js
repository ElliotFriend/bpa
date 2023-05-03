import {
    c as create_ssr_component,
    i as is_promise,
    n as noop,
    b as each,
    e as escape,
    a as subscribe,
    v as validate_component,
} from '../../../chunks/index3.js'
import { f as fetchAccount } from '../../../chunks/horizonQueries.js'
import { c as contacts } from '../../../chunks/contactsStore.js'
const AssetStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { bpaPublicKey } = $$props
    let accountPromise = fetchAccount(bpaPublicKey)
    if ($$props.bpaPublicKey === void 0 && $$bindings.bpaPublicKey && bpaPublicKey !== void 0)
        $$bindings.bpaPublicKey(bpaPublicKey)
    return `<div class="prose mt-2 mb-1"><h3>Assets Overview</h3></div>
<div class="stats bg-primary text-primary-content w-full">${(function (__value) {
        if (is_promise(__value)) {
            __value.then(null, noop)
            return `
        <div class="stat"><div class="stat-title">Account Balances</div>
            <div class="stat-value">loading...</div></div>
    `
        }
        return (function ({ account }) {
            return `
        ${each(account.balances, (balance) => {
            return `<div class="stat"><div class="stat-title">${escape(
                balance.asset_code ?? 'XLM'
            )} Balance</div>
                <div class="stat-value">${escape(parseFloat(balance.balance).toFixed(2))} ${escape(
                balance.asset_code ?? 'XLM'
            )}</div>
            </div>`
        })}
    `
        })(__value)
    })(accountPromise)}</div>`
})
const RecentPayments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<div class="overflow-x-auto"><div class="prose mb-1"><h3>Recent Payments</h3></div>
    <table class="table w-full">
        <thead><tr><th>Amount</th>
            <th>Asset</th>
            <th>Direction</th>
            <th>Contact</th></tr></thead>
        <tbody>
        <tr><th>100</th>
            <td>XLM</td>
            <td>Sent</td>
            <td>Tyler</td></tr>
        
        <tr><th>25</th>
            <td>USDC</td>
            <td>Received</td>
            <td>John</td></tr>
        
        <tr><th>1,000</th>
            <td>XLM</td>
            <td>Sent</td>
            <td>Bri</td></tr></tbody></table></div>`
})
const FavoriteContacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let favoriteContacts
    let $contacts, $$unsubscribe_contacts
    $$unsubscribe_contacts = subscribe(contacts, (value) => ($contacts = value))
    favoriteContacts = $contacts?.filter((contact) => contact.favorite)
    $$unsubscribe_contacts()
    return `<div class="overflow-x-auto"><div class="prose mb-1"><h3>Favorite Contacts</h3></div>
    <table class="table w-full">
        <thead><tr><th>Favorite</th>
            <th>Name</th>
            <th>Address</th>
            <th></th></tr></thead>
        
        ${
            favoriteContacts
                ? `<tbody>${each(favoriteContacts, (contact) => {
                      return `<tr><th><label><input type="checkbox" class="checkbox checkbox-success" ${
                          contact.favorite ? 'checked' : ''
                      }>
                        </label></th>
                    <td><div class="flex items-center space-x-3"><div class="avatar"><div class="mask mask-squircle w-12 h-12"><img src="https://id.lobstr.co/GCS2GDGYV3GCWMX5RJIMKCSHKSE6FRXGTY4EGQ45UUAG7QXXNWUJC3BJ.png" alt="Avatar Tailwind CSS Component">
                            </div></div>
                            <div><div class="font-bold">${escape(contact.name)}</div></div>
                        </div></td>
                    <td>${escape(contact.address)}</td>
                    <th><button class="btn btn-ghost btn-xs">Stellar.Expert</button></th>
                </tr>`
                  })}</tbody>`
                : ``
        }
        </table></div>`
})
const TransferHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<div class="overflow-x-auto"><div class="prose mb-1"><h3>Transfer History</h3></div>
    <table class="table table-compact w-full"><thead><tr><th></th>
                <th>Amount</th>
                <th>Asset</th>
                <th>Direction</th>
                <th>Date</th></tr></thead>
        <tbody><tr><th>1</th>
                <td>100</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>12/16/2020</td></tr>
            <tr><th>2</th>
                <td>3214213</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>12/5/2020</td></tr>
            <tr><th>3</th>
                <td>12</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>8/15/2020</td></tr>
            <tr><th>4</th>
                <td>4325</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>3/25/2021</td></tr>
            <tr><th>5</th>
                <td>23</td>
                <td>Community Outreach Specialist</td>
                <td>Wyman-Ledner</td>
                <td>5/22/2020</td></tr>
            <tr><th>6</th>
                <td>750</td>
                <td>Editor</td>
                <td>Wiza, Bins and Emard</td>
                <td>12/8/2020</td></tr>
            <tr><th>7</th>
                <td>27</td>
                <td>Staff Accountant IV</td>
                <td>Schuster-Schimmel</td>
                <td>2/17/2021</td></tr>
            <tr><th>8</th>
                <td>7834</td>
                <td>Accountant I</td>
                <td>O&#39;Hara, Welch and Keebler</td>
                <td>5/23/2020</td></tr>
            <tr><th>9</th>
                <td>10</td>
                <td>Safety Technician IV</td>
                <td>Turner-Kuhlman</td>
                <td>2/21/2021</td></tr>
            <tr><th>10</th>
                <td>116</td>
                <td>VP Marketing</td>
                <td>Sauer LLC</td>
                <td>6/23/2020</td></tr>
            <tr><th>11</th>
                <td>4478</td>
                <td>Librarian</td>
                <td>Hilpert Group</td>
                <td>7/9/2020</td></tr>
            <tr><th>12</th>
                <td>170.567</td>
                <td>Recruiting Manager</td>
                <td>Gutmann Inc</td>
                <td>2/12/2021</td></tr>
            <tr><th>13</th>
                <td>7489</td>
                <td>Web Developer IV</td>
                <td>Gaylord, Pacocha and Baumbach</td>
                <td>5/31/2020</td></tr>
            <tr><th>14</th>
                <td>36709</td>
                <td>Analyst Programmer</td>
                <td>Deckow-Pouros</td>
                <td>4/27/2021</td></tr>
            <tr><th>15</th>
                <td>42389</td>
                <td>Dental Hygienist</td>
                <td>Schiller, Cole and Hackett</td>
                <td>8/8/2020</td></tr>
            <tr><th>16</th>
                <td>632</td>
                <td>Teacher</td>
                <td>Sporer, Sipes and Rogahn</td>
                <td>7/30/2020</td></tr>
            <tr><th>17</th>
                <td>467</td>
                <td>Teacher</td>
                <td>Reichel, Glover and Hamill</td>
                <td>2/28/2021</td></tr>
            <tr><th>18</th>
                <td>1</td>
                <td>Quality Control Specialist</td>
                <td>Kshlerin, Rogahn and Swaniawski</td>
                <td>9/29/2020</td></tr>
            <tr><th>19</th>
                <td>2</td>
                <td>Staff Accountant III</td>
                <td>Pouros, Ullrich and Windler</td>
                <td>10/27/2020</td></tr>
            <tr><th>20</th>
                <td>170</td>
                <td>Data Coordiator</td>
                <td>Witting, Kutch and Greenfelder</td>
                <td>6/3/2020</td></tr></tbody></table></div>`
})
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { data } = $$props
    let bpaPublicKey = data.bpaPublicKey
    if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
    return `<div class="my-10 mx-20">${validate_component(AssetStats, 'AssetStats').$$render(
        $$result,
        { bpaPublicKey },
        {},
        {}
    )}</div>

<div class="my-10 mx-20 grid grid-cols-1 xl:grid-cols-2 gap-10">${validate_component(
        RecentPayments,
        'RecentPayments'
    ).$$render($$result, {}, {}, {})}
    ${validate_component(FavoriteContacts, 'FavoriteContacts').$$render($$result, {}, {}, {})}</div>

<div class="my-10 mx-20">${validate_component(TransferHistory, 'TransferHistory').$$render(
        $$result,
        {},
        {},
        {}
    )}</div>`
})
export { Page as default }
