import {
    c as create_ssr_component,
    a as subscribe,
    d as add_attribute,
    b as each,
    e as escape,
} from '../../../../chunks/index3.js'
import 'devalue'
import { c as contacts } from '../../../../chunks/contactsStore.js'
import '../../../../chunks/WithdrawProvider.js'
import 'stellar-sdk'
import 'lodash/debounce.js'
import 'bignumber.js'
import 'lodash/flatten.js'
import 'query-string'
import '../../../../chunks/index.js'
import '../../../../chunks/horizonQueries.js'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let $contacts, $$unsubscribe_contacts
    $$unsubscribe_contacts = subscribe(contacts, (value) => ($contacts = value))
    let sourcePublicKey
    $$unsubscribe_contacts()
    return `<h1>Send a Payment</h1>
<p>This is where you&#39;ll be able to send a payment</p>

<form method="POST" action="?/preview"><input type="hidden" id="source" name="source"${add_attribute(
        'value',
        sourcePublicKey,
        0
    )}>
    <div class="form-control w-full max-w-xs"><label for="destination" class="label"><span class="label-text">Destination</span></label>
        <select id="destination" name="destination" class="select select-bordered"><option disabled selected value="Select Recipient">Select Recipient</option>${
            contacts
                ? `${each($contacts, (contact) => {
                      return `<option${add_attribute('value', contact.address, 0)}>${escape(
                          contact.name
                      )}</option>`
                  })}`
                : ``
        }</select></div>
    ${``}
    <div class="form-control"><label for="amount" class="label"><span class="label-text">Amount</span></label>
        <label class="input-group"><input id="amount" name="amount" type="text" placeholder="0.01" class="input input-bordered">
            <span>XLM</span></label></div>
    <div class="form-control"><label for="memo" class="label"><span class="label-text">Memo</span></label>
        <input id="memo" name="memo" type="text" placeholder="Optional" class="input input-bordered"></div>
    <div class="form-control"><button type="submit" class="btn btn-primary">Preview</button></div></form>`
})
export { Page as default }
